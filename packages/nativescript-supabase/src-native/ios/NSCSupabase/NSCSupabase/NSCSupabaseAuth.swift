//
//  NSCSupabaseAuth.swift
//  NSCSupabase
//
//  Created by Osei Fortune on 11/01/2025.
//

internal import Supabase
import AuthenticationServices
@objcMembers
@objc(NSCSupabaseUserIdentity)
public class NSCSupabaseUserIdentity: NSObject {
  let userIdentity: UserIdentity
  init(userIdentity: UserIdentity) {
    self.userIdentity = userIdentity
  }
  
  
  public var id: String {
    get {
      userIdentity.id
    }
  }
  public var identityId: UUID{
    get {
      userIdentity.identityId
    }
  }
  public var userId: UUID{
    get {
      userIdentity.userId
    }
  }
  public var identityData: [String: AnyHashable]?{
    get {
      NSCSupabaseHelpers.decodeObject(userIdentity.identityData)
    }
  }
  public var provider: String{
    get {
      userIdentity.provider
    }
  }
  public var createdAt: Date?{
    get {
      userIdentity.createdAt
    }
  }
  public var lastSignInAt: Date?{
    get {
      userIdentity.lastSignInAt
    }
  }
  public var updatedAt: Date?{
    get {
      userIdentity.updatedAt
    }
  }
}

@objc(NSCSupabaseFactorStatus)
public enum NSCSupabaseFactorStatus: Int8, RawRepresentable {
  public typealias RawValue = Int8
  case verified
  case unverified
  
  public var rawValue: RawValue {
    switch self {
    case .verified:
      return 0
    case .unverified:
      return 1
    }
  }
  
  public init?(rawValue: RawValue) {
    switch rawValue {
    case 0:
      self = .verified
    case 1:
      self = .unverified
    default:
      return nil
    }
  }
}


@objcMembers
@objc(NSCSupabaseFactor)
public class NSCSupabaseFactor: NSObject {
  let factor: Factor
  init(factor: Factor) {
    self.factor = factor
  }
  
  public lazy var id: String = {
    factor.id
  }()
  
  public lazy var friendlyName: String?  = {
    factor.friendlyName
  }()
  
  public lazy var factorType: String  = {
    factor.factorType
  }()
  
  public lazy var status: NSCSupabaseFactorStatus  = {
    switch factor.status {case .verified:
        .verified
    case .unverified:
        .unverified
    }
  }()
  
  public lazy var createdAt: Date  = {
    factor.createdAt
  }()
  
  public lazy var updatedAt: Date  = {
    factor.updatedAt
  }()
}



@objcMembers
@objc(NSCSupabaseAuthUser)
public class NSCSupabaseAuthUser: NSObject {
  let user: User
  init(user: User) {
    self.user = user
  }
  
  public var id: UUID {
    get {
      return user.id
    }
  }
  public var appMetadata: [String: AnyHashable] {
    get {
      return NSCSupabaseHelpers.decodeObject(user.appMetadata) ?? [:]
    }
  }
  public var userMetadata: [String: AnyHashable] {
    get {
      return NSCSupabaseHelpers.decodeObject(user.userMetadata) ?? [:]
    }
  }
  
  public var aud: String {
    get {
      return user.aud
    }
  }
  public var confirmationSentAt: Date? {
    get {
      return user.confirmationSentAt
    }
  }
  public var recoverySentAt: Date?{
    get {
      return user.recoverySentAt
    }
  }
  public var emailChangeSentAt: Date?{
    get {
      return user.emailChangeSentAt
    }
  }
  public var newEmail: String?{
    get {
      return user.newEmail
    }
  }
  public var invitedAt: Date?{
    get {
      return user.invitedAt
    }
  }
  public var actionLink: String?{
    get {
      return user.actionLink
    }
  }
  public var email: String?{
    get {
      return user.email
    }
  }
  public var phone: String?{
    get {
      return user.phone
    }
  }
  public var createdAt: Date{
    get {
      return user.createdAt
    }
  }
  public var confirmedAt: Date?{
    get {
      return user.confirmedAt
    }
  }
  public var emailConfirmedAt: Date?{
    get {
      return user.emailConfirmedAt
    }
  }
  public var phoneConfirmedAt: Date?{
    get {
      return user.phoneConfirmedAt
    }
  }
  public var lastSignInAt: Date?{
    get {
      return user.lastSignInAt
    }
  }
  public var role: String?{
    get {
      return user.role
    }
  }
  public var updatedAt: Date{
    get {
      return user.updatedAt
    }
  }
  
  
  public var identities: [NSCSupabaseUserIdentity]? {
    get {
      user.identities?.map({ id in
        NSCSupabaseUserIdentity(userIdentity: id)
      })
    }
  }
  public var isAnonymous: Bool {
    get {
      user.isAnonymous
    }
  }
  
  public var factors: [NSCSupabaseFactor]? {
    get {
      user.factors?.map({ factor in
        NSCSupabaseFactor(factor: factor)
      })
    }
  }
}


@objcMembers
@objc(NSCSupabaseAuthSession)
public class NSCSupabaseAuthSession: NSObject {
  let session: Session
  init(session: Session) {
    self.session = session
  }
  
  public var providerToken: String? {
    get {
      session.providerToken
    }
  }
  
  public var providerRefreshToken: String? {
    get {
      session.providerRefreshToken
    }
  }
  
  public var accessToken: String {
    get {
      session.accessToken
    }
  }
  
  
  public var tokenType: String {
    get {
      session.tokenType
    }
  }
  
  public var expiresIn: TimeInterval {
    get {
      session.expiresIn
    }
  }
  
  
  public var expiresAt: TimeInterval {
    get {
      session.expiresAt
    }
  }
  
  
  public var refreshToken: String {
    get {
      session.refreshToken
    }
  }
  
  
  public var isExpired: Bool {
    get {
      session.isExpired
    }
  }
  
  public lazy var user = {
    NSCSupabaseAuthUser(user: session.user)
  }()
}

@objc(NSCSupabaseAuthChangeEvent)
public enum NSCSupabaseAuthChangeEvent: Int8, RawRepresentable {
  public typealias RawValue = Int8
  case initialSession
  case passwordRecovery
  case signedIn
  case signedOut
  case tokenRefreshed
  case userUpdated
  case userDeleted
  case mfaChallengeVerified
  
  public var rawValue: RawValue {
    switch self {
    case .initialSession:
      return 0
    case .passwordRecovery:
      return 1
    case .signedIn:
      return 2
    case .signedOut:
      return 3
    case .tokenRefreshed:
      return 4
    case .userUpdated:
      return 5
    case .userDeleted:
      return 6
    case .mfaChallengeVerified:
      return 7
    }
  }
  
  public init?(rawValue: RawValue) {
    switch rawValue {
    case 0:
      self = .initialSession
    case 1:
      self = .passwordRecovery
    case 2:
      self = .signedIn
    case 3:
      self = .signedOut
    case 4:
      self = .tokenRefreshed
    case 5:
      self = .userUpdated
    case 6:
      self = .userDeleted
    case 7:
      self = .mfaChallengeVerified
    default:
      return nil
    }
  }
  
}


@objc(NSCSupabaseSignOutScope)
public enum NSCSupabaseSignOutScope: Int8, RawRepresentable {
  public typealias RawValue = Int8
  case global
  case local
  case others
  
  public var rawValue: RawValue {
    switch self {
    case .global:
      return 0
    case .local:
      return 1
    case .others:
      return 2
    }
  }
  
  public init?(rawValue: RawValue) {
    switch rawValue {
    case 0:
      self = .global
    case 1:
      self = .local
    case 2:
      self = .others
    default:
      return nil
    }
  }
  
  var scope: SignOutScope {
    get {
      switch self {
      case .global:
        return .global
      case .local:
        return .local
      case .others:
        return .others
      }
    }
  }
  
}



@objcMembers
@objc(NSCSupabaseListener)
public class NSCSupabaseListener: NSObject {
  var listener: AuthStateChangeListenerRegistration?
  internal var removed = false
  init(listener: AuthStateChangeListenerRegistration?) {
    self.listener = listener
  }
  
  public func remove(){
    guard let listener else {
      removed = true
      return
    }
    removed = true
    listener.remove()
  }
}


@objc(NSCSupabaseOpenIDConnectCredentialsProvider)
public enum NSCSupabaseOpenIDConnectCredentialsProvider: Int8, RawRepresentable {
  public typealias RawValue = Int8
  
  case google, apple, azure, facebook
  
  public var id: RawValue { rawValue }
  
  var provider: OpenIDConnectCredentials.Provider {
    switch self {case .google:
        .google
    case .apple:
        .apple
    case .azure:
        .azure
    case .facebook:
        .facebook
    }
  }
  
  public var rawValue: RawValue {
    switch self {
    case .google:
      return 0
    case .apple:
      return 1
    case .azure:
      return 2
    case .facebook:
      return 3
    }
  }
  
  public init?(rawValue: RawValue) {
    switch rawValue {
    case 0:
      self = .google
    case 1:
      self = .apple
    case 2:
      self = .azure
    case 3:
      self = .facebook
    default:
      return nil
    }
  }
}

@objcMembers
@objc(NSCSupabaseAuthMetaSecurity)
public class NSCSupabaseAuthMetaSecurity: NSObject {
  public var captchaToken: String
  
  public init(captchaToken: String) {
    self.captchaToken = captchaToken
  }
  
  var security: AuthMetaSecurity {
    AuthMetaSecurity(captchaToken: captchaToken)
  }
}

@objcMembers
@objc(NSCSupabaseOpenIDConnectCredentials)
public class NSCSupabaseOpenIDConnectCredentials: NSObject {
  public var provider: NSCSupabaseOpenIDConnectCredentialsProvider
  public var idToken: String
  public var accessToken: String?
  public var nonce: String?
  public var gotrueMetaSecurity: NSCSupabaseAuthMetaSecurity?
  
  public init(_ provider: NSCSupabaseOpenIDConnectCredentialsProvider,_ idToken: String) {
    self.provider = provider
    self.idToken = idToken
  }
  
  public init(provider: NSCSupabaseOpenIDConnectCredentialsProvider, idToken: String, accessToken: String? = nil, nonce: String? = nil, gotrueMetaSecurity: NSCSupabaseAuthMetaSecurity? = nil) {
    self.provider = provider
    self.idToken = idToken
    self.accessToken = accessToken
    self.nonce = nonce
    self.gotrueMetaSecurity = gotrueMetaSecurity
  }
  
  
  var credentials: OpenIDConnectCredentials {
    get {
      OpenIDConnectCredentials(provider: provider.provider, idToken: idToken, accessToken: accessToken, nonce: nonce, gotrueMetaSecurity: gotrueMetaSecurity?.security)
    }
  }
}

@objc(NSCSupabaseMessagingChannel)
public enum NSCSupabaseMessagingChannel: Int8, RawRepresentable  {
  case sms
  case whatsapp
  
  public typealias RawValue = Int8
  
  public var rawValue: RawValue {
    switch self {
    case .sms:
      return 0
    case .whatsapp:
      return 1
    }
  }
  
  public init?(rawValue: RawValue) {
    switch rawValue {
    case 0:
      self = .sms
    case 1:
      self = .whatsapp
    default:
      return nil
    }
  }
  
  var channel: MessagingChannel {
    get {
      switch self {
      case .sms:
          .sms
      case .whatsapp:
          .whatsapp
      }
    }
  }
}


@objc(NSCSupabaseProvider)
public enum NSCSupabaseProvider: Int8, RawRepresentable {
  public typealias RawValue = Int8
  case apple
  case azure
  case bitbucket
  case discord
  case email
  case facebook
  case figma
  case github
  case gitlab
  case google
  case kakao
  case keycloak
  case linkedin
  case linkedinOIDC
  case notion
  case slack
  case slackOIDC
  case spotify
  case twitch
  case twitter
  case workos
  case zoom
  case fly
  
  public var id: RawValue { rawValue }
  
  var provider: Provider {
    switch self {
    case .apple:
      return .apple
    case .azure:
      return .azure
    case .bitbucket:
      return .bitbucket
    case .discord:
      return .discord
    case .email:
      return .email
    case .facebook:
      return .facebook
    case .figma:
      return .figma
    case .github:
      return .github
    case .gitlab:
      return .gitlab
    case .google:
      return .google
    case .kakao:
      return .kakao
    case .keycloak:
      return .keycloak
    case .linkedin:
      return .linkedin
    case .linkedinOIDC:
      return .linkedinOIDC
    case .notion:
      return .notion
    case .slack:
      return .slack
    case .slackOIDC:
      return .slackOIDC
    case .spotify:
      return .spotify
    case .twitch:
      return .twitch
    case .twitter:
      return .twitter
    case .workos:
      return .workos
    case .zoom:
      return .zoom
    case .fly:
      return .fly
    }
  }
  
  
  public var rawValue: RawValue {
    switch self {
    case .apple:
      return 0
    case .azure:
      return 1
    case .bitbucket:
      return 2
    case .discord:
      return 3
    case .email:
      return 4
    case .facebook:
      return 5
    case .figma:
      return 6
    case .github:
      return 7
    case .gitlab:
      return 8
    case .google:
      return 9
    case .kakao:
      return 10
    case .keycloak:
      return 11
    case .linkedin:
      return 12
    case .linkedinOIDC:
      return 13
    case .notion:
      return 14
    case .slack:
      return 15
    case .slackOIDC:
      return 16
    case .spotify:
      return 17
    case .twitch:
      return 18
    case .twitter:
      return 19
    case .workos:
      return 20
    case .zoom:
      return 21
    case .fly:
      return 22
    }
  }
  
  public init?(rawValue: RawValue) {
    switch rawValue {
    case 0:
      self = .apple
    case 1:
      self = .azure
    case 2:
      self = .bitbucket
    case 3:
      self = .discord
    case 4:
      self = .email
    case 5:
      self = .facebook
    case 6:
      self = .figma
    case 7:
      self = .github
    case 8:
      self = .gitlab
    case 9:
      self = .google
    case 10:
      self = .kakao
    case 11:
      self = .keycloak
    case 12:
      self = .linkedin
    case 13:
      self = .linkedinOIDC
    case 14:
      self = .notion
    case 15:
      self = .slack
    case 16:
      self = .slackOIDC
    case 17:
      self = .spotify
    case 18:
      self = .twitch
    case 19:
      self = .twitter
    case 20:
      self = .workos
    case 21:
      self = .zoom
    case 22:
      self = .fly
    default:
      return nil
    }
  }
}



@objc(NSCSupabaseLaunchFlowResultType)
public enum NSCSupabaseLaunchFlowResultType: Int8, RawRepresentable  {
  case success
  case error
  
  public typealias RawValue = Int8
  
  public var rawValue: RawValue {
    switch self {
    case .success:
      return 0
    case .error:
      return 1
    }
  }
  
  public init?(rawValue: RawValue) {
    switch rawValue {
    case 0:
      self = .success
    case 1:
      self = .error
    default:
      return nil
    }
  }
}


@objc(NSCSupabaseLaunchFlowResult)
public class NSCSupabaseLaunchFlowResult: NSObject {
  let type: NSCSupabaseLaunchFlowResultType
  let error: Error?
  let url: URL?
  public init(_ type: NSCSupabaseLaunchFlowResultType, _ error: Error?, _ url: URL?) {
    self.type = type
    self.error = error
    self.url = url
  }
}


@objc(NSCSupabaseEmailOTPType)
public enum NSCSupabaseEmailOTPType: Int8, RawRepresentable{
  public typealias RawValue = Int8
  case signup
  case invite
  case magiclink
  case recovery
  case emailChange
  case email
  
  var type: EmailOTPType {
    switch self {case .signup:
      return .signup
    case .invite:
      return .invite
    case .magiclink:
      return .magiclink
    case .recovery:
      return .recovery
    case .emailChange:
      return .emailChange
    case .email:
      return .email
    }
  }
  
  public var rawValue: RawValue {
    switch self {
    case .signup:
      return 0
    case .invite:
      return 1
    case .magiclink:
      return 2
    case .recovery:
      return 3
    case .emailChange:
      return 4
    case .email:
      return 5
    }
  }
  
  public init?(rawValue: RawValue) {
    switch rawValue {
    case 0:
      self = .signup
    case 1:
      self = .invite
    case 2:
      self = .magiclink
    case 3:
      self = .recovery
    case 4:
      self = .emailChange
    case 5:
      self = .email
    default:
      return nil
    }
  }
}

@objc(NSCSupabaseMobileOTPType)
public enum NSCSupabaseMobileOTPType: Int8, RawRepresentable {
  case sms
  case phoneChange
  
  var type: MobileOTPType {
    switch self {case .sms:
      return .sms
    case .phoneChange:
      return .phoneChange
    }
  }
  
  public typealias RawValue = Int8
  
  public var rawValue: RawValue {
    switch self {case .sms:
      return 0
    case .phoneChange:
      return 1
    }
  }
  
  public init?(rawValue: RawValue) {
    switch rawValue {
    case 0:
      self = .sms
    case 1:
      self = .phoneChange
    default:
      return nil
    }
  }
}


@objc(NSCSupabaseResendMobileType)
public enum NSCSupabaseResendMobileType: Int8, RawRepresentable {
  case sms
  case phoneChange
  public typealias RawValue = Int8
  
  var type: ResendMobileType {
    switch self {case .sms:
      return .sms
    case .phoneChange:
      return .phoneChange
    }
  }
  
  public var rawValue: RawValue {
    switch self {case .sms:
      return 0
    case .phoneChange:
      return 1
    }
  }
  
  public init?(rawValue: RawValue) {
    switch rawValue {
    case 0:
      self = .sms
    case 1:
      self = .phoneChange
    default:
      return nil
    }
  }
}

@objc(NSCSupabaseResendEmailType)
public enum NSCSupabaseResendEmailType: Int8, RawRepresentable {
  case signup
  case emailChange
  public typealias RawValue = Int8
  
  var type: ResendEmailType {
    switch self {case .signup:
      return .signup
    case .emailChange:
      return .emailChange
    }
  }
  
  public var rawValue: RawValue {
    switch self {case .signup:
      return 0
    case .emailChange:
      return 1
    }
  }
  
  public init?(rawValue: RawValue) {
    switch rawValue {
    case 0:
      self = .signup
    case 1:
      self = .emailChange
    default:
      return nil
    }
  }
}

@objcMembers
@objc(NSCSupabaseUserAttributes)
public class NSCSupabaseUserAttributes: NSObject {
  var attributes: UserAttributes
  init(attributes: UserAttributes) {
    self.attributes = attributes
  }
  
  public override init() {
    attributes = UserAttributes()
  }
  
  public var email: String? {
    get {
      attributes.email
    }
    set {
      attributes.email = newValue
    }
  }
  
  public var phone: String? {
    get {
      attributes.phone
    }
    set {
      attributes.phone = newValue
    }
  }
  
  public var password: String? {
    get {
      attributes.password
    }
    set {
      attributes.password = newValue
    }
  }
  
  public var nonce: String? {
    get {
      attributes.nonce
    }
    set {
      attributes.nonce = newValue
    }
  }
  
  
  @available(*, deprecated, message: "This is an old field, stop relying on it.")
  public var emailChangeToken: String? {
    get {
      attributes.emailChangeToken
    }
    set {
      attributes.emailChangeToken = newValue
    }
  }
  
  public var data: [String: AnyHashable]? {
    get {
      NSCSupabaseHelpers.decodeObject(attributes.data)
    }
    set {
      guard let newValue else {
        attributes.data = nil
        return
      }
      attributes.data = NSCSupabaseHelpers.encodeObject(newValue)
    }
  }
}

@objcMembers
@objc(NSCSupabaseQueryParamEntry)
public class NSCSupabaseQueryParamEntry: NSObject {
  public var name: String
  public var value: String?
  public init(name: String, value: String?) {
    self.name = name
    self.value = value
  }
}


@objcMembers
@objc(NSCSupabaseAuth)
public class NSCSupabaseAuth: NSObject {
  let auth: AuthClient
  init(auth: AuthClient) {
    self.auth = auth
  }
  
  public lazy var admin = {
    NSCSupabaseAuthAdmin(authAdmin: auth.admin)
  }()
  
  public func addOnAuthStateChange(_ listener: @escaping (NSCSupabaseAuthChangeEvent, NSCSupabaseAuthSession?) -> Void) -> NSCSupabaseListener {
    let ret = NSCSupabaseListener(listener: nil)
    Task {
      let changeListener = await auth.onAuthStateChange { event, session in
        let changeEvent: NSCSupabaseAuthChangeEvent = switch event {case .initialSession:
            .initialSession
        case .passwordRecovery:
            .passwordRecovery
        case .signedIn:
            .signedIn
        case .signedOut:
            .signedOut
        case .tokenRefreshed:
            .tokenRefreshed
        case .userUpdated:
            .userUpdated
        case .userDeleted:
            .userDeleted
        case .mfaChallengeVerified:
            .mfaChallengeVerified
        }
        
        if(session != nil){
          listener(changeEvent, NSCSupabaseAuthSession(session: session!))
        }else {
          listener(changeEvent, nil)
        }
      }
      ret.listener = changeListener
      
      if(ret.removed){
        changeListener.remove()
      }
      
    }
    return ret
  }
  
  public func signIn(_ email: String, _ password: String, _ captchaToken: String?, _ callback: @escaping (NSCSupabaseAuthSession?, Error?) -> Void){
    Task{
      do {
        let result = try await auth.signIn(email: email, password: password, captchaToken: captchaToken)
        callback(NSCSupabaseAuthSession(session: result), nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
  
  public func signIn(phone: String, _ password: String, _ captchaToken: String?, _ callback: @escaping (NSCSupabaseAuthSession?, Error?) -> Void){
    Task{
      do {
        let result = try await auth.signIn(phone: phone, password: password, captchaToken: captchaToken)
        callback(NSCSupabaseAuthSession(session: result), nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
  
  public func signInAnonymously(_ data: [String: AnyHashable]?, _ captchaToken: String?, _ callback: @escaping (NSCSupabaseAuthSession?, Error?) -> Void){
    Task{
      do {
        let result = try await auth.signInAnonymously(data: NSCSupabaseHelpers.encodeObject(data) ,captchaToken: captchaToken)
        callback(NSCSupabaseAuthSession(session: result), nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
  
  public func signUp(_ email: String, _ password: String, _ captchaToken: String?, _ data: [String: AnyHashable]?, _ redirectTo: String?, _ callback: @escaping (NSCSupabaseAuthUser?, NSCSupabaseAuthSession?, Error?) -> Void){
    Task{
      var redirect: URL? = nil
      if(redirectTo != nil){
        redirect = URL(string: redirectTo!)
      }
      do {
        let result = try await auth.signUp(email: email, password: password, data: NSCSupabaseHelpers.encodeObject(data), redirectTo: redirect, captchaToken: captchaToken)
        var session: NSCSupabaseAuthSession? = nil
        if(result.session != nil){
          session = NSCSupabaseAuthSession(session: result.session!)
        }
        callback(NSCSupabaseAuthUser(user: result.user), session, nil)
      }catch {
        callback(nil, nil, error)
      }
    }
  }
  
  public func signUp(phone: String, _ password: String, _ captchaToken: String?,_ data: [String: AnyHashable]?, _ callback: @escaping (NSCSupabaseAuthUser?, NSCSupabaseAuthSession?, Error?) -> Void){
    Task{
      do {
        let result = try await auth.signUp(phone: phone, password: password, data: NSCSupabaseHelpers.encodeObject(data), captchaToken: captchaToken)
        var session: NSCSupabaseAuthSession? = nil
        if(result.session != nil){
          session = NSCSupabaseAuthSession(session: result.session!)
        }
        callback(NSCSupabaseAuthUser(user: result.user), session, nil)
      }catch {
        callback(nil, nil, error)
      }
    }
  }
  
  public func signOut(_ callback: @escaping (Error?) -> Void){
    Task{
      do {
        try await auth.signOut()
        callback(nil)
      }catch {
        callback(error)
      }
    }
  }
  
  public func signOut(scope: NSCSupabaseSignOutScope, _ callback: @escaping (Error?) -> Void){
    Task{
      do {
        try await auth.signOut(scope: scope.scope)
        callback(nil)
      }catch {
        callback(error)
      }
    }
  }
  
  public func getSession(_ callback: @escaping(NSCSupabaseAuthSession?, Error?) -> Void) {
    Task {
      do {
        let session = try await auth.session
        callback(NSCSupabaseAuthSession(session: session), nil)
      }catch{
        callback(nil, error)
      }
    }
  }
  
  public var currentSession: NSCSupabaseAuthSession? {
    get {
      guard let session = auth.currentSession else {return nil}
      return NSCSupabaseAuthSession(session: session)
    }
  }
  
  public func refreshSession(_ refreshToken: String?, _ callback: @escaping (NSCSupabaseAuthSession?, Error?) -> Void){
    Task {
      do {
        let session = try await auth.refreshSession(refreshToken: refreshToken)
        callback(NSCSupabaseAuthSession(session: session), nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
  public func user(_ jwt: String?, _ callback: @escaping (NSCSupabaseAuthUser?, Error?) -> Void){
    Task {
      do {
        let user = try await auth.user(jwt: jwt)
        callback(NSCSupabaseAuthUser(user: user), nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
  
  public var currentUser: NSCSupabaseAuthUser? {
    get {
      guard let user = auth.currentUser else {return nil}
      return NSCSupabaseAuthUser(user: user)
    }
  }
  
  
  public func signInWithIdToken(_ credentials: NSCSupabaseOpenIDConnectCredentials, _ callback: @escaping (NSCSupabaseAuthSession?, Error?) -> Void){
    Task {
      do {
        let session = try await auth.signInWithIdToken(credentials: credentials.credentials)
        callback(NSCSupabaseAuthSession(session: session), nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
  public func signInWithOTP(_ email: String,
                            _ redirectTo: String?,
                            _ data: [String: AnyHashable]?,
                            _ captchaToken: String?,  _ callback: @escaping (Error?) -> Void){
    self.signInWithOTP(email: email, redirectTo: redirectTo, shouldCreateUser: nil, data: data, captchaToken: captchaToken, callback)
  }
  
  public func signInWithOTP(_ email: String,
                            _ redirectTo: String?,
                            shouldCreateUser: Bool,
                            _ data: [String: AnyHashable]?,
                            _ captchaToken: String?,  _ callback: @escaping (Error?) -> Void){
    self.signInWithOTP(email: email, redirectTo: redirectTo, shouldCreateUser: shouldCreateUser, data: data, captchaToken: captchaToken, callback)
  }
  
  func signInWithOTP(email: String,
                            redirectTo: String?,
                            shouldCreateUser: Bool?,
                            data: [String: AnyHashable]?,
                            captchaToken: String?,  _ callback: @escaping (Error?) -> Void){
    Task {
      do {
        var redirect: URL? = nil
        if(redirectTo != nil){
          redirect = URL(string: redirectTo!)
        }
        try await auth.signInWithOTP(email: email, redirectTo: redirect, shouldCreateUser: shouldCreateUser ?? true, data: NSCSupabaseHelpers.encodeObject(data), captchaToken: captchaToken)
        callback(nil)
      }catch {
        callback(error)
      }
    }
  }
  
  
  public func signInWithOTP(phone: String,
                            _ data: [String: AnyHashable]?,
                            _ captchaToken: String?,  _ callback: @escaping (Error?) -> Void){
    self.signInWithOTP(phone: phone, channel: .sms, shouldCreateUser: nil, data: data, captchaToken: captchaToken, callback)
  }
  
  public func signInWithOTP(phone: String,
                            _ channel: NSCSupabaseMessagingChannel,
                            shouldCreateUser: Bool,
                            _ data: [String: AnyHashable]?,
                            _ captchaToken: String?,  _ callback: @escaping (Error?) -> Void){
    self.signInWithOTP(phone: phone, channel: channel, shouldCreateUser: shouldCreateUser, data: data, captchaToken: captchaToken, callback)
  }
  
  
  func signInWithOTP(phone: String,
                            channel: NSCSupabaseMessagingChannel?,
                            shouldCreateUser: Bool?,
                            data: [String: AnyHashable]?,
                            captchaToken: String?,  _ callback: @escaping (Error?) -> Void){
    Task {
      do {
        try await auth.signInWithOTP(phone: phone, channel: channel?.channel ?? .sms, shouldCreateUser: shouldCreateUser ?? true, data: NSCSupabaseHelpers.encodeObject(data), captchaToken: captchaToken )
        callback(nil)
      }catch {
        callback(error)
      }
    }
  }
  
  
  public func signInWithOAuth(_ provider: NSCSupabaseProvider,
                              _ redirectTo: String?,
                              _ scopes: String?,
                              _ queryParams: [NSCSupabaseQueryParamEntry]?,
                              _ configure: ((ASWebAuthenticationSession) -> Void)?,
                              _ callback: @escaping (NSCSupabaseAuthSession?, Error?) -> Void){
    Task {
      do {
        var redirect: URL? = nil
        if(redirectTo != nil){
          redirect = URL(string: redirectTo!)
        }
        
        let query = queryParams?.map({ entry in
          (name: entry.name, value: entry.value)
        })
        
        let session = try await auth.signInWithOAuth(provider: provider.provider, redirectTo: redirect, scopes: scopes, queryParams: query ?? []) { session in
          configure?(session)
        }
        callback(NSCSupabaseAuthSession(session: session), nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
  
  public func signInWithOAuth(_ provider: NSCSupabaseProvider,
                              _ redirectTo: String?,
                              _ scopes: String?,
                              _ queryParams: [NSCSupabaseQueryParamEntry]?,
                              launchFlow: @escaping (URL) -> NSCSupabaseLaunchFlowResult,
                              _ callback: @escaping (NSCSupabaseAuthSession?, Error?) -> Void){
    
    
    
    Task {
      do {
        var redirect: URL? = nil
        if(redirectTo != nil){
          redirect = URL(string: redirectTo!)
        }
        let params = queryParams?.map({ entry in
          (name: entry.name, value: entry.value)
        })
        
        
        let session = try await auth.signInWithOAuth(provider: provider.provider, redirectTo: redirect, scopes: scopes, queryParams: params ?? []) { url in
          let result = launchFlow(url)
          switch result.type {
          case .success:
            return result.url!
          case .error:
            throw result.error!
          }
        }
        callback(NSCSupabaseAuthSession(session: session), nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
  
  public func getOAuthSignInURL(_  provider: NSCSupabaseProvider, _ scopes: String?,
                                _ redirectTo: String?, _ queryParams: [NSCSupabaseQueryParamEntry]?) throws -> URL{
    var redirect: URL? = nil
    if(redirectTo != nil){
      redirect = URL(string: redirectTo!)
    }
    
    let query = queryParams?.map({ entry in
      (name: entry.name, value: entry.value)
    })
    
    return try auth.getOAuthSignInURL(provider: provider.provider, scopes: scopes, redirectTo: redirect, queryParams: query ?? [])
  }
  
  
  public func signInWithSSO(domain: String,_  redirectTo: String?,
                            _ captchaToken: String?, _ callback: @escaping (URL?, Error?) -> Void){
    Task {
      var redirect: URL? = nil
      if(redirectTo != nil){
        redirect = URL(string: redirectTo!)
      }
      do {
        let response = try await auth.signInWithSSO(domain: domain, redirectTo: redirect, captchaToken: captchaToken)
        callback(response.url, nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
  public func signInWithSSO(providerId: String,_  redirectTo: String?,
                            _ captchaToken: String?, _ callback: @escaping (URL?, Error?) -> Void){
    Task {
      var redirect: URL? = nil
      if(redirectTo != nil){
        redirect = URL(string: redirectTo!)
      }
      do {
        let response = try await auth.signInWithSSO(providerId: providerId, redirectTo: redirect, captchaToken: captchaToken)
        callback(response.url, nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
  
  public func verifyOTP(tokenHash: String, _ type: NSCSupabaseEmailOTPType, _ callback: @escaping (NSCSupabaseAuthUser?, NSCSupabaseAuthSession?, Error?) -> Void){
    Task {
      do {
        let response = try await auth.verifyOTP(tokenHash: tokenHash, type: type.type)
        var session: NSCSupabaseAuthSession? = nil
        if(response.session != nil){
          session = NSCSupabaseAuthSession(session: response.session!)
        }
        callback(NSCSupabaseAuthUser(user: response.user), session, nil)
      }catch {
        callback(nil, nil, error)
      }
    }
  }
  
  public func verifyOTP(phone: String, _ token: String, _ type: NSCSupabaseMobileOTPType, _ captchaToken: String?,_ callback: @escaping (NSCSupabaseAuthUser?, NSCSupabaseAuthSession?, Error?) -> Void){
    Task {
      do {
        let response = try await auth.verifyOTP(phone: phone, token: token, type: type.type, captchaToken: captchaToken)
        var session: NSCSupabaseAuthSession? = nil
        if(response.session != nil){
          session = NSCSupabaseAuthSession(session: response.session!)
        }
        callback(NSCSupabaseAuthUser(user: response.user), session, nil)
      }catch {
        callback(nil, nil, error)
      }
    }
  }
  
  public func verifyOTP(email: String, _ token: String, _ type: NSCSupabaseEmailOTPType, _  redirectTo: String?, _ captchaToken: String?,_ callback: @escaping (NSCSupabaseAuthUser?, NSCSupabaseAuthSession?, Error?) -> Void){
    Task {
      var redirect: URL? = nil
      if(redirectTo != nil){
        redirect = URL(string: redirectTo!)
      }
      do {
        let response = try await auth.verifyOTP(email: email, token: token, type: type.type, redirectTo: redirect, captchaToken: captchaToken)
        var session: NSCSupabaseAuthSession? = nil
        if(response.session != nil){
          session = NSCSupabaseAuthSession(session: response.session!)
        }
        callback(NSCSupabaseAuthUser(user: response.user), session, nil)
      }catch {
        callback(nil, nil, error)
      }
    }
  }
  
  public func userIdentities(_ callback: @escaping ([NSCSupabaseUserIdentity]?, Error?) -> Void){
    Task {
      do {
        let identities = try await auth.userIdentities().map { identity in
          NSCSupabaseUserIdentity(userIdentity: identity)
        }
        callback(identities,nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
  public func linkIdentity(_ provider: NSCSupabaseProvider, _ scopes: String?, _  redirectTo: String?, _ queryParams: [NSCSupabaseQueryParamEntry]?, _ callback: @escaping (Error?) -> Void){
    Task {
      var redirect: URL? = nil
      if(redirectTo != nil){
        redirect = URL(string: redirectTo!)
      }
      
      let query = queryParams?.map({ entry in
        (name: entry.name, value: entry.value)
      })
      
      do {
        try await auth.linkIdentity(provider: provider.provider, scopes: scopes,redirectTo: redirect, queryParams: query ?? [])
        callback(nil)
      }catch {
        callback(error)
      }
    }
  }
  
  
  public func linkIdentity(_ provider: NSCSupabaseProvider, _ scopes: String?, _  redirectTo: String?, _ queryParams: [NSCSupabaseQueryParamEntry]?, launchURL: @escaping (URL) -> Void,  _ callback: @escaping (Error?) -> Void){
    Task {
      var redirect: URL? = nil
      if(redirectTo != nil){
        redirect = URL(string: redirectTo!)
      }
      
      let query = queryParams?.map({ entry in
        (name: entry.name, value: entry.value)
      })
      
      do {
        try await auth.linkIdentity(provider: provider.provider, scopes: scopes,redirectTo: redirect, queryParams: query ?? []) { url in
          launchURL(url)
        }
        callback(nil)
      }catch {
        callback(error)
      }
    }
  }
  
  
  public func unlinkIdentity(_ identity: NSCSupabaseUserIdentity, _ callback: @escaping (Error?) -> Void){
    Task {
      do {
        try await auth.unlinkIdentity(identity.userIdentity)
        callback(nil)
      }catch {
        callback(error)
      }
    }
  }
  
  public func reauthenticate(_ callback: @escaping (Error?) -> Void){
    Task {
      do {
        try await auth.reauthenticate()
        callback(nil)
      }catch {
        callback(error)
      }
    }
  }
  
  public func resend(phone: String, _ type: NSCSupabaseResendMobileType, _ captchaToken: String?, _ callback: @escaping (String?,Error?) -> Void){
    Task {
      do {
        let response = try await auth.resend(phone: phone, type: type.type, captchaToken: captchaToken)
        callback(response.messageId, nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
  public func resend(email: String, _ type: NSCSupabaseResendEmailType, _ emailRedirectTo: String?, _ captchaToken: String?, _ callback: @escaping (Error?) -> Void){
    Task {
      var redirect: URL? = nil
      if(emailRedirectTo != nil){
        redirect = URL(string: emailRedirectTo!)
      }
      do {
        try await auth.resend(email: email, type: type.type, emailRedirectTo: redirect, captchaToken: captchaToken)
        callback(nil)
      }catch {
        callback(error)
      }
    }
  }
  
  public func resetPasswordForEmail(_ email: String, _ redirectTo: String?, _ captchaToken: String?, _ callback: @escaping (Error?) -> Void){
    Task {
      var redirect: URL? = nil
      if(redirectTo != nil){
        redirect = URL(string: redirectTo!)
      }
      do {
        try await auth.resetPasswordForEmail(email,redirectTo: redirect, captchaToken: captchaToken)
        callback(nil)
      }catch {
        callback(error)
      }
    }
  }
  
  
  public func setSession(_ accessToken: String, _ refreshToken: String, _ callback: @escaping (NSCSupabaseAuthSession?,Error?) -> Void){
    Task {
      do {
        let session = try await auth.setSession(accessToken: accessToken, refreshToken: refreshToken)
        callback(NSCSupabaseAuthSession(session: session), nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
  public func exchangeCodeForSession(_ authCode: String, _ callback: @escaping (NSCSupabaseAuthSession?,Error?) -> Void){
    Task {
      do {
        let session = try await auth.exchangeCodeForSession(authCode: authCode)
        callback(NSCSupabaseAuthSession(session: session), nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
  public func update(_ user: NSCSupabaseUserAttributes, _ callback: @escaping (NSCSupabaseAuthUser?,Error?) -> Void){
    Task{
      do {
       let user = try await  auth.update(user: user.attributes)
        callback(NSCSupabaseAuthUser(user: user), nil)
      }catch{
        callback(nil, error)
      }
    }
  }
  
  public func startAutoRefresh(){
    auth.startAutoRefresh()
  }
  
  public func stopAutoRefresh(){
    auth.stopAutoRefresh()
  }
}
