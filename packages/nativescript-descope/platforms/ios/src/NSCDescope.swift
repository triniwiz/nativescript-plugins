import UIKit
import CryptoKit
import AuthenticationServices

private let redirectScheme = "descopeauth"
private let redirectURL = "\(redirectScheme)://flow"
private let maxKeyWindowAttempts = 10

public enum NSCDescopeError: Error {
    case codeGeneration
    case emptyUrl
    case flowSetup(Error)
    case flowResume(String)
    case flowCanceled
    case flowFailed
    case missingKey(String)
    
    var localizedFailureReason: String? {
        switch self {
        case .flowSetup(let error):
            return error.localizedDescription
        default:
            return nil
        }
    }


     var localizedDescription: String {
       switch self {
       case .codeGeneration:
         return "Error generating random bytes"
       case .emptyUrl:
           return "'flowURL' is required when calling startFlow"
       case .flowResume(let message):
           return message
       case .flowSetup(_):
           return "Flow setup failed"
       case .flowCanceled:
           return "Authentication canceled by user"
       case .flowFailed:
           return "Flow failed unexpectedly"
       case .missingKey(let message):
           return message
       }
     }
}

@objcMembers
@objc(NSCDescope)
public class NSCDescope: NSObject {

    private let keychainStore = KeychainStore()
    private let defaultContextProvider = DefaultContextProvider()
    private var sessions: [ASWebAuthenticationSession] = []
   

    // Flow

    public func prepFlow() throws -> [String: String] {
        guard let randomBytes = Data(randomBytesCount: 32) else {
            throw NSCDescopeError.codeGeneration
        }
        let hashedBytes = Data(SHA256.hash(data: randomBytes))

        let codeVerifier = randomBytes.base64URLEncodedString()
        let codeChallenge = hashedBytes.base64URLEncodedString()

        return ["codeVerifier": codeVerifier, "codeChallenge": codeChallenge]
    }


   public func startFlow(_ flowURL: String, deepLinkURL: String, backupCustomScheme: String, codeChallenge: String, callback: @escaping(String?, NSError?) -> Void) {
        guard !flowURL.isEmpty else {
            callback(nil, NSCDescopeError.emptyUrl as NSError)
            return
        }

        do {
            let initialURL = try prepareInitialRequest(for: flowURL, with: codeChallenge)
            Task { @MainActor in
                await self.startFlow(initialURL, callback)
            }
        } catch {
            callback(nil, NSCDescopeError.flowSetup(error) as NSError)
        }
    }

    public func resumeFlow(_ flowURL: String, incomingURL: String) throws {
        guard let redirectURL = URL(string: incomingURL), let pendingComponents = URLComponents(url: redirectURL, resolvingAgainstBaseURL: false) else {
            throw NSCDescopeError.flowResume("'incomingURL' is malformed")
        }
        guard let url = URL(string: flowURL), var components = URLComponents(url: url, resolvingAgainstBaseURL: false) else {
            throw NSCDescopeError.flowResume("unable to construct resuming url")
        }
        components.queryItems = components.queryItems ?? []
        for item in pendingComponents.queryItems ?? [] {
            components.queryItems?.append(item)
        }

        guard let resumeURL = components.url else {
            throw NSCDescopeError.flowResume("unable to construct resuming url params")
        }
        Task { @MainActor in
            await self.startFlow(resumeURL, nil)
        }
    }

    @MainActor
    private func startFlow(_ url: URL, _ callback:((String?, NSError?) -> Void)?) async {
       await defaultContextProvider.waitKeyWindow(attempts: maxKeyWindowAttempts)

        let session = ASWebAuthenticationSession(url: url, callbackURLScheme: redirectScheme) { [self] callbackURL, error in
            if let error {
                switch error {
                case ASWebAuthenticationSessionError.canceledLogin:
                    callback?(nil, NSCDescopeError.flowCanceled as NSError)
                    cleanUp()
                    return
                case ASWebAuthenticationSessionError.presentationContextInvalid,
                    ASWebAuthenticationSessionError.presentationContextNotProvided:
                    // not handled for now
                    fallthrough
                default:
                    callback?(nil, NSCDescopeError.flowFailed as NSError)
                    cleanUp()
                    return
                }
            }
            callback?(callbackURL?.absoluteString ?? "", nil)
            cleanUp()
        }
       session.prefersEphemeralWebBrowserSession = true
        session.presentationContextProvider = defaultContextProvider
        sessions += [session]
        session.start()
    }

    @MainActor
    private func cleanUp() {
        for session in sessions {
            session.cancel()
        }
        sessions = []
    }

    // Storage

    @objc public func loadItem(_ key: String) throws -> String {
        guard !key.isEmpty else {
            throw NSCDescopeError.missingKey("'key' is required for loadItem")
        }
        guard let data = keychainStore.loadItem(key: key) else {
            return ""
        }
        return String(bytes: data, encoding: .utf8) ?? ""
    }

    public func saveItem(_ key: String, _ value: String) throws -> String {
        guard !key.isEmpty else {
            throw NSCDescopeError.missingKey("'key' is required for saveItem")}
        keychainStore.saveItem(key: key, data: Data(value.utf8))
        return key
    }

    public func removeItem(_ key: String) throws -> String {
        guard !key.isEmpty else {
            throw NSCDescopeError.missingKey("'key' is required for removeItem")
        }
        keychainStore.removeItem(key: key)
        return key
    }
}

// Internal

private extension Data {
    init?(randomBytesCount count: Int) {
        var bytes = [Int8](repeating: 0, count: count)
        guard SecRandomCopyBytes(kSecRandomDefault, count, &bytes) == errSecSuccess else { return nil }
        self = Data(bytes: bytes, count: count)
    }

    func base64URLEncodedString(options: Data.Base64EncodingOptions = []) -> String {
        return base64EncodedString(options: options)
            .replacingOccurrences(of: "+", with: "-")
            .replacingOccurrences(of: "/", with: "_")
            .replacingOccurrences(of: "=", with: "")
    }
}

private func prepareInitialRequest(for flowURL: String, with codeChallenge: String) throws -> URL {
    guard let url = URL(string: flowURL) else { throw DescopeError.flowFailed("Invalid flow URL") }
    guard var components = URLComponents(url: url, resolvingAgainstBaseURL: false) else { throw DescopeError.flowFailed("Malformed flow URL") }
    components.queryItems = components.queryItems ?? []
    components.queryItems?.append(URLQueryItem(name: "ra-callback", value: redirectURL))
    components.queryItems?.append(URLQueryItem(name: "ra-challenge", value: codeChallenge))
    components.queryItems?.append(URLQueryItem(name: "ra-initiator", value: "ios"))

    guard let initialURL = components.url else { throw DescopeError.flowFailed("Failed to create flow URL") }
    return initialURL
}

private class DefaultContextProvider: NSObject, ASWebAuthenticationPresentationContextProviding, ASAuthorizationControllerPresentationContextProviding {
    func waitKeyWindow(attempts: Int) async {
        for _ in 1...attempts {
            if findKeyWindow() != nil {
                return
            }
            try? await Task.sleep(nanoseconds: 100 * NSEC_PER_MSEC)
        }
    }

    func findKeyWindow() -> UIWindow? {
        let scene = UIApplication.shared.connectedScenes
            .filter { $0.activationState == .foregroundActive }
            .compactMap { $0 as? UIWindowScene }
            .first
      

        let window = scene?.windows
            .first { $0.isKeyWindow }

        return window
    }

    func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
        return findKeyWindow() ?? ASPresentationAnchor()
    }
  

     func presentationAnchor(for controller: ASAuthorizationController) -> ASPresentationAnchor {
         return findKeyWindow() ?? ASPresentationAnchor()
     }

}

enum DescopeError: Error {
    case flowFailed(String)
}

private class KeychainStore {
    public func loadItem(key: String) -> Data? {
        var query = queryForItem(key: key)
        query[kSecReturnData as String] = true
        query[kSecMatchLimit as String] = kSecMatchLimitOne

        var value: AnyObject?
        SecItemCopyMatching(query as CFDictionary, &value)
        return value as? Data
    }

    public func saveItem(key: String, data: Data) {
        let values: [String: Any] = [
            kSecValueData as String: data,
            kSecAttrAccessible as String: kSecAttrAccessibleAfterFirstUnlock,
        ]

        let query = queryForItem(key: key)
        let result = SecItemCopyMatching(query as CFDictionary, nil)
        if result == errSecSuccess {
            SecItemUpdate(query as CFDictionary, values as CFDictionary)
        } else if result == errSecItemNotFound {
            let merged = query.merging(values, uniquingKeysWith: { $1 })
            SecItemAdd(merged as CFDictionary, nil)
        }
    }

    public func removeItem(key: String) {
        let query = queryForItem(key: key)
        SecItemDelete(query as CFDictionary)
    }

    private func queryForItem(key: String) -> [String: Any] {
        return [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrService as String: "io.github.triniwiz.plugins.descope.NativeScript",
            kSecAttrLabel as String: "DescopeSession",
            kSecAttrAccount as String: key,
        ]
    }
}
