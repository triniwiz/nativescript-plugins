import Foundation
import KlaviyoSwift
import KlaviyoForms

@objc(NSCKlaviyoProfileKey)
public enum NSCKlaviyoProfileKey: Int, RawRepresentable {
  case firstName
  case lastName
  case address1
  case address2
  case title
  case organization
  case city
  case region
  case country
  case zip
  case image
  case latitude
  case longitude
  case custom
  public typealias RawValue = Int
  public init?(rawValue: Int) {
    switch(rawValue){
    case 0:
      self = .firstName
      break
    case 1:
      self = .lastName
      break
    case 2:
      self = .address1
      break
    case 3:
      self = .address2
      break
    case 4:
      self = .title
      break
    case 5:
      self = .organization
      break
    case 6:
      self = .city
      break
    case 7:
      self = .region
      break
    case 8:
      self = .country
      break
    case 9:
      self = .zip
      break
    case 10:
      self = .image
      break
    case 11:
      self = .latitude
      break
    case 12:
      self = .longitude
      break
    case 13:
      self = .custom
      break
    default:
      return nil
    }
  }
  
  public var rawValue: Int {
    switch self {
    case .firstName:
      return 0
    case .lastName:
      return 1
    case .address1:
      return 2
    case .address2:
      return 3
    case .title:
      return 4
    case .organization:
      return 5
    case .city:
      return 6
    case .region:
      return 7
    case .country:
      return 8
    case .zip:
      return 9
    case .image:
      return 10
    case .latitude:
      return 11
    case .longitude:
      return 12
    case .custom:
      return 13
    }
  }
  
  func getKey(_ customKey: String?) -> Profile.ProfileKey {
    switch self {
    case .firstName:
      return .firstName
    case .lastName:
      return .lastName
    case .address1:
      return .address1
    case .address2:
      return .address2
    case .title:
      return .title
    case .organization:
      return .organization
    case .city:
      return .city
    case .region:
      return .region
    case .country:
      return .country
    case .zip:
      return .zip
    case .image:
      return .image
    case .latitude:
      return .latitude
    case .longitude:
      return .longitude
    case .custom:
      return .custom(customKey: customKey!)
    }
  }
}

@objcMembers
@objc(NSCKlaviyo)
public class NSCKlaviyo: NSObject {
  private var klaviyo: KlaviyoSDK
  
  public init(key: String) {
    klaviyo = KlaviyoSDK().initialize(with: key)
  }
  
  public func setPushToken(token: Data){
    klaviyo.set(pushToken: token)
  }
  
  public func setPushToken(_ token: String){
    token.data(using: .utf8).flatMap {
      klaviyo.set(pushToken: $0)
    }
  }
  
  public func getPushToken()-> String? {
    return klaviyo.pushToken
  }
  
  
  public func setEmail(_ email: String) {
    klaviyo.set(email: email)
  }
  public func getEmail() -> String? {
    return klaviyo.email
  }
  
  public func setExternalId(_ externalId: String) {
    klaviyo.set(externalId: externalId)
  }
  
  public func getExternalId() -> String? {
    return klaviyo.externalId
  }
  
  public func setPhoneNumber(_ phoneNumber: String) {
    klaviyo.set(phoneNumber: phoneNumber)
  }
  
  public func getPhoneNumber() -> String? {
    return klaviyo.phoneNumber
  }
  
  public func setProfile(_ value: [String: AnyHashable]) {
    var location: Profile.Location?
    let locationData = value["location"] as? [String: AnyHashable]
    if(locationData != nil){
      location = Profile.Location(
        address1: locationData?["address1"] as? String,
        address2: locationData?["address2"] as? String,
        city: locationData?["city"] as? String,
        country: locationData?["country"] as? String,
        latitude: locationData?["latitude"] as? Double,
        longitude: locationData?["longitude"] as? Double,
        region:  locationData?["region"] as? String,
        zip:  locationData?["zip"] as? String,
        timezone:  locationData?["timezone"] as? String
      )
    }
    let profile = Profile(
      email: value["email"] as? String,
      phoneNumber: value["phoneNumber"]as? String,
      externalId: value["externalId"]as? String,
      firstName: value["firstName"]as? String,
      lastName: value["lastName"]as? String,
      organization: value["organization"]as? String,
      title: value["title"]as? String,
      image: value["image"]as? String,
      location: location,
      properties: value["properties"] as? [String: Any]
    )
    klaviyo.set(profile: profile)
  }
  
  public func resetProfile() {
    klaviyo.resetProfile()
  }
  
  public func setProfileAttribute(_ key: NSCKlaviyoProfileKey, _ value: String, _ customKey: String? = nil) {
    if(key == .custom && customKey != nil){
      klaviyo.set(profileAttribute: key.getKey(customKey!), value: value)
    }else {
      klaviyo.set(profileAttribute: key.getKey(nil), value: value)
    }
  }
  
  public func registerForInAppForms(_ callback: @escaping () -> Void){
    Task {
      await klaviyo.registerForInAppForms()
      callback()
    }
  }
  
  public func createEvent(_ name: String, _ properties: [String: Any]? = nil, _ value: Double){
    var metric: Event.EventName
    switch(name){
    case "Added to Cart":
      metric = .addedToCartMetric
            break
          case "Opened App":
      metric = .openedAppMetric
            break;
          case "Started Checkout":
      metric = .startedCheckoutMetric
            break;
          case "Viewed Product":
      metric = .viewedProductMetric
            break;
          default:
      metric = .customEvent(name)
            break;
    }
  
    let event = Event(name: metric,properties: properties, value: value.isNaN ? nil : value  )
    klaviyo.create(event: event)
  }
}
