//
//  NSCAppwrite.swift
//  NSCAppwrite
//
//  Created by Osei Fortune on 10/01/2025.
//

import Foundation
import Appwrite
import JSONCodable

@objcMembers
@objc(NSCAppwriteClient)
public class NSCAppwriteClient: NSObject {
  internal let client = Client()
  
  public func setProject(_ value: String) -> Self {
     let _ = client.setProject(value)
      return self
  }
  
  
  public func setJWT(_ value: String) -> Self {
     let _ = client.setJWT(value)
    return self
  }

 
  public func setLocale(_ value: String) -> Self {
     let _ = client.setLocale(value)
      return self
  }

  
  public func setSession(_ value: String) -> Self {
    let _ = client.setSession(value)
      return self
  }


  public func setSelfSigned(_ status: Bool = true) -> Self {
    let _ = client.setSelfSigned(status)
      return self
  }

 
  public func setEndpoint(_ endPoint: String) -> Self {
     let _ = client.setEndpoint(endPoint)

      return self
  }

 
  public func setEndpointRealtime(_ endPoint: String) -> Self {
      let _ = client.setEndpointRealtime(endPoint)
      return self
  }


  public func addHeader(key: String, value: String) -> Self {
      let _ = client.addHeader(key: key, value: value)
      return self
  }

}

public typealias Dict = [String: AnyCodable]




@objcMembers
@objc(NSCAppwritePreferences)
public class NSCAppwritePreferences: NSObject {
  let preferences: Preferences<Dict>
  init(value: Preferences<Dict>) {
    preferences = value
    super.init()
  }
  
  public var data: Dict {
    get {
      return preferences.data
    }
  }
}



@objcMembers
@objc(NSCAppwriteTarget)
public class NSCAppwriteTarget: NSObject {
  let target: Target
  init(value: Target) {
    target = value
    super.init()
  }
  
  
  /// Target ID.
  public lazy var id: String = {
    target.id
  }()

  /// Target creation time in ISO 8601 format.
  public lazy var createdAt: String = {
    target.createdAt
  }()

  /// Target update date in ISO 8601 format.
  public lazy var updatedAt: String = {
    target.updatedAt
  }()

  /// Target Name.
  public lazy var name: String = {
    target.name
  }()

  /// User ID.
  public lazy var userId: String = {
    target.userId
  }()

  /// Provider ID.
  public lazy var providerId: String? = {
    target.providerId
  }()

  /// The target provider type. Can be one of the following: `email`, `sms` or `push`.
  public lazy var providerType: String = {
    target.providerType
  }()

  /// The target identifier.
  public lazy var identifier: String = {
    target.identifier
  }()

  /// Is the target expired.
  public lazy var expired: Bool = {
    target.expired
  }()
}
  

@objcMembers
@objc(NSCAppwriteUser)
public class NSCAppwriteUser: NSObject {
  let user: User<Dict>
  init(value: User<Dict>) {
    user = value
    super.init()
  }
  
  
  public var id: String {
    get {
      return user.id
    }
  }

  public var createdAt: String {
    get {
      return user.createdAt
    }
  }

  public var updatedAt: String {
    get {
      return user.updatedAt
    }
  }

  /// User name.
  public var name: String {
    get {
      return user.name
    }
  }

  /// Hashed user password.
  public var password: String? {
    get {
      return user.password
    }
  }


  public var userHash: String? {
    get {
      return user.hash
    }
  }


  public var hashOptions: Any? {
    get {
      return user.hashOptions
    }
  }

  public var registration: String {
    get {
      return user.registration
    }
  }


  public var status: Bool {
    get {
      return user.status
    }
  }

  public var labels: [String] {
    get {
      return user.labels
    }
  }


  public var passwordUpdate: String {
    get {
      return user.passwordUpdate
    }
  }


  public var email: String {
    get {
      return user.email
    }
  }


  public var phone: String {
    get {
      return user.phone
    }
  }


  public var emailVerification: Bool {
    get {
      return user.emailVerification
    }
  }


  public var phoneVerification: Bool {
    get {
      return user.phoneVerification
    }
  }


  public var mfa: Bool {
    get {
      return user.mfa
    }
  }


  public lazy var prefs: NSCAppwritePreferences = {
    NSCAppwritePreferences(value: user.prefs)
  }()


  public lazy var targets: [NSCAppwriteTarget] = {
    user.targets.map { target in
      NSCAppwriteTarget(value: target)
    }
  }()


  public var accessedAt: String {
    get {
      return user.accessedAt
    }
  }
    
    
}



@objcMembers
@objc(NSCAppwriteAccount)
public class NSCAppwriteAccount: NSObject {
  let account: Account
  public init(_ client: NSCAppwriteClient) {
    account = Account(client.client)
    super.init()
  }
  
  public func create(_ userId: String, _ email: String, _ password: String, _ name: String?, _ callback:  @escaping (NSCAppwriteUser?, Error?) -> Void){
    Task {
      do {
        let result = try await self.account.create(userId: userId, email: email, password: password, name: name)
        callback(NSCAppwriteUser(value: result), nil)
      }catch {
        callback(nil, error)
      }
    }
  }
    
}
