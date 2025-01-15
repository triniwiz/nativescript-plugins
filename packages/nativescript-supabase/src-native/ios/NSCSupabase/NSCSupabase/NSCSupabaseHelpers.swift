//
//  NSCSupabaseHelpers.swift
//  NSCSupabase
//
//  Created by Osei Fortune on 13/01/2025.
//
internal import Supabase
class NSCSupabaseHelpers {
  static func decodeValue (_ value: AnyJSON?) -> AnyHashable {
    guard let value else { return NSNull() }
    switch value {
    case .null:
      return NSNull()
    case .bool(_):
      return value.boolValue
    case .integer(_):
      return value.intValue
    case .double(_):
      return value.doubleValue
    case .string(_):
      return value.stringValue
    case .object(_):
      return value.objectValue?.mapValues { value in
        decodeValue(value)
      }
    case .array(_):
      return value.arrayValue?.map { value in
        decodeValue(value)
      }
    }
  }
  
  static func decodeObject (_ value: [String: AnyJSON]?) -> [String: AnyHashable]? {
    return value?.mapValues { value in
      decodeValue(value)
    }
  }
  
  static func decodeAraay (_ value: [AnyJSON]?) -> [AnyHashable]? {
    return value?.map { value in
      decodeValue(value)
    }
  }
  
  static func encodeValue (_ value: AnyHashable?) -> AnyJSON {
    if(value == nil || (value as? NSNull) != nil){
      return .null
    }
    let boolValue = value as? Bool
    if(boolValue != nil){
      return .bool(boolValue!)
    }
    
    let intValue = value as? Int
    if(intValue != nil){
      return .integer(intValue!)
    }
    
    let doubleValue = value as? Double
    if(doubleValue != nil){
      return .double(doubleValue!)
    }
    
    let stringValue = value as? String
    if(stringValue != nil){
      return .string(stringValue!)
    }
    
    
    if let arrayValue = value as? [AnyHashable] {
      guard let array = encodeArray(arrayValue) else { return .null}
      return .array(array)
    }
    
    if let objectValue = value as? [String: AnyHashable] {
      guard let object = encodeObject(objectValue) else { return .null}
      return .object(object)
    }
    
    return .null
  }
  static func encodeObject(_ object: [String: AnyHashable]?) -> [String: AnyJSON]? {
    object?.mapValues { value in
      encodeValue(value)
    }
  }
  
  static func encodeArray(_ array: [AnyHashable]?) -> [AnyJSON]? {
    array?.map { value in
      encodeValue(value)
    }
  }
}
