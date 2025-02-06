//
//  NSCSupabaseHelpers.swift
//  NSCSupabase
//
//  Created by Osei Fortune on 13/01/2025.
//
internal import Supabase

@_implementationOnly import PostgREST

extension JSONSerialization {
  static func stringfy_(_ object: Any) -> String {
    guard
      let data = try? data(
        withJSONObject: object, options: [.withoutEscapingSlashes, .sortedKeys]
      ),
      let string = String(data: data, encoding: .utf8)
    else {
      return "{}"
    }
    return string
  }
}

typealias NSCSupabaseJSONObject = [String: NSCSupabaseJSONValue]
typealias NSCSupabaseJSONArray = [NSCSupabaseJSONValue]


@objcMembers
@objc(NSCSupabaseJSONValue)
public class NSCSupabaseJSONValue: NSObject, Encodable, Decodable, URLQueryRepresentable {
  var boolValue: Bool?
  var integerValue: Int?
  var doubleValue: Double?
  var stringValue: String?
  var dateValue: Date?
  var dataValue: Data?
  var arrayValue: NSCSupabaseJSONArray?
  var objectValue: NSCSupabaseJSONObject?
  
  var jsonValue: AnyJSON {
    if let boolValue = boolValue {
      return .bool(boolValue)
     }
     if let integerValue = integerValue {
       return .integer(integerValue)
     }
     if let doubleValue = doubleValue {
       return .double(doubleValue)
     }
     if let stringValue = stringValue {
       return .string(stringValue)
     }
     
     if let dateValue = dateValue {
       let formatter = ISO8601DateFormatter()
       formatter.formatOptions = [.withInternetDateTime, .withFractionalSeconds]
       return .string(formatter.string(from: dateValue))
     }
     if let dataValue = dataValue {
       // todo
       return .null
     }
     if let arrayValue = arrayValue {
       return .array(arrayValue.map(\.jsonValue))
     }
     
     if let objectValue = objectValue {
       return .object(objectValue.mapValues(\.jsonValue))
     }
     
    return .null
  }
  
  public var queryValue: String {
    if let boolValue = boolValue {
      return "\(boolValue)"
     }
     if let integerValue = integerValue {
       return "\(integerValue)"
     }
     if let doubleValue = doubleValue {
       return "\(doubleValue)"
     }
     if let stringValue = stringValue {
       return stringValue
     }
     
     if let dateValue = dateValue {
       let formatter = ISO8601DateFormatter()
       formatter.formatOptions = [.withInternetDateTime, .withFractionalSeconds]
       return formatter.string(from: dateValue)
     }
     if let dataValue = dataValue {
       // todo
       return "NULL"
     }
     if let arrayValue = arrayValue {
       return "{\(arrayValue.map(\.queryValue).joined(separator: ","))}"
     }
     
     if let objectValue = objectValue {
       let value = objectValue.mapValues(\.value)
       return JSONSerialization.stringfy_(value)
     }
     
     return "NULL"
  }
  
  
  
  class MyCodingKey : CodingKey {
    let key: String
    
    required init?(intValue: Int) {
      return nil
    }
    
    required init?(stringValue: String) {
      key = stringValue
    }
    
    var intValue: Int? {
      return nil
    }
    
    var stringValue: String {
      return key
    }
  }
  
  
  public override init() {}
  
  public init(boolean: Bool){
    self.boolValue = boolean
  }
  
  public init(integer: Int){
    self.integerValue = integer
  }
  
  public init(double: Double){
    self.doubleValue = double
  }
  
  public init(string: String){
    self.stringValue = string
  }
  
  public init(date: Date){
    self.dateValue = date
  }
  
  public init(data: Data){
    self.dataValue = data
  }
  
  public init(array: [NSCSupabaseJSONValue]){
    self.arrayValue = array
  }
  
  public init(object: [String: NSCSupabaseJSONValue]){
    self.objectValue = object
  }
  
  public var json: Any? {
    if let objectValue = objectValue {
      let encoder = JSONEncoder()
      do {
        let data = try encoder.encode(objectValue)
        return String(data: data, encoding: .utf8)
      }catch {
        return nil
      }
    }
    
    if let arrayValue = arrayValue {
      let encoder = JSONEncoder()
      do {
        let data = try encoder.encode(arrayValue)
        return String(data: data, encoding: .utf8)
      }catch {
        return nil
      }
    }
    
    return nil
  }
  
    public var value: Any? {
     if let boolValue = boolValue {
       return boolValue as Any
      }
      if let integerValue = integerValue {
        return integerValue  as Any
      }
      if let doubleValue = doubleValue {
        return doubleValue  as Any
      }
      if let stringValue = stringValue {
        return stringValue  as Any
      }
      
      if let dateValue = dateValue {
        return dateValue  as Any
      }
      if let dataValue = dataValue {
        return dataValue  as Any
      }
      if let arrayValue = arrayValue {
        return arrayValue.map({ value in
          if(value.value == nil){
           return NSNull() as Any?
          }else {
            return value.value
          }
        }) as Any
      }
      
      if let objectValue = objectValue {
        return objectValue.mapValues({ value in
          if(value.value == nil){
            return NSNull() as Any?
          }else {
            return value.value
          }
        })  as Any
      }
      
      return nil
    }
  
  
  static func decodingError(forCodingPath codingPath: [CodingKey]) -> DecodingError {
    let context = DecodingError.Context(codingPath: codingPath, debugDescription: "Cannot decode NSCSupabaseJSONValue")
    return DecodingError.typeMismatch(NSCSupabaseJSONValue.self, context)
  }
  
  
  
  required public init(from decoder: any Decoder) throws {
    let container = try decoder.singleValueContainer()
    if container.decodeNil() {
      // noop
    }else if let bool = try? container.decode(Bool.self) {
      self.boolValue = bool
    }else if let int = try? container.decode(Int.self) {
      self.integerValue = int
    }else if let double = try? container.decode(Double.self) {
      self.doubleValue = double
    }else if let string = try? container.decode(String.self) {
      self.stringValue = string
    }else if let date = try? container.decode(Date.self) {
      self.dateValue = date
    } else if let data = try? container.decode(Data.self) {
      self.dataValue = data
    }else if let array = try? container.decode(NSCSupabaseJSONArray.self) {
      self.arrayValue = array
    }else if let object = try? container.decode(NSCSupabaseJSONObject.self) {
      self.objectValue = object
    }else {
      throw NSCSupabaseJSONValue.decodingError(forCodingPath: container.codingPath)
    }
  }
  
  

  
  public func encode(to encoder: any Encoder) throws {
    var container = encoder.singleValueContainer()
    if let arr = self.arrayValue {
     try container.encode(arr)
    } else if let dict = self.objectValue {
      try container.encode(dict)
    }else if let bool = self.boolValue {
      try container.encode(bool)
    }else if let int = self.integerValue {
      try container.encode(int)
    }else if let double = self.doubleValue {
      try container.encode(double)
    }else if let string = self.stringValue {
      try container.encode(string)
    }else if let date = self.dateValue {
      try container.encode(date)
    }else if let data = self.dataValue {
      try container.encode(data)
    }else {
      try container.encodeNil()
    }
  }
}

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
        return decodeValue(value)
      }
    case .array(_):
      return value.arrayValue?.map { value in
        return decodeValue(value)
      }
    }
  }
  
  static func decodeObject (_ value: [String: AnyJSON]?) -> [String: AnyHashable]? {
    return value?.mapValues { value in
      return decodeValue(value)
    }
  }
  
  static func decodeAraay (_ value: [AnyJSON]?) -> [AnyHashable]? {
    return value?.map { value in
      return decodeValue(value)
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
      return encodeValue(value)
    }
  }
  
  static func encodeArray(_ array: [AnyHashable]?) -> [AnyJSON]? {
    array?.map { value in
      return encodeValue(value)
    }
  }
  
  
  static func localizedString(forStatusCode statusCode: Int) -> String {
    switch statusCode {
    case 100: return "Continue"
    case 101: return "Switching Protocols"
    case 102: return "Processing"
    case 100...199: return "Informational"
    case 200: return "OK"
    case 201: return "Created"
    case 202: return "Accepted"
    case 203: return "Non-Authoritative Information"
    case 204: return "No Content"
    case 205: return "Reset Content"
    case 206: return "Partial Content"
    case 207: return "Multi-Status"
    case 208: return "Already Reported"
    case 226: return "IM Used"
    case 200...299: return "Success"
    case 300: return "Multiple Choices"
    case 301: return "Moved Permanently"
    case 302: return "Found"
    case 303: return "See Other"
    case 304: return "Not Modified"
    case 305: return "Use Proxy"
    case 307: return "Temporary Redirect"
    case 308: return "Permanent Redirect"
    case 300...399: return "Redirection"
    case 400: return "Bad Request"
    case 401: return "Unauthorized"
    case 402: return "Payment Required"
    case 403: return "Forbidden"
    case 404: return "Not Found"
    case 405: return "Method Not Allowed"
    case 406: return "Not Acceptable"
    case 407: return "Proxy Authentication Required"
    case 408: return "Request Timeout"
    case 409: return "Conflict"
    case 410: return "Gone"
    case 411: return "Length Required"
    case 412: return "Precondition Failed"
    case 413: return "Payload Too Large"
    case 414: return "URI Too Long"
    case 415: return "Unsupported Media Type"
    case 416: return "Range Not Satisfiable"
    case 417: return "Expectation Failed"
    case 421: return "Misdirected Request"
    case 422: return "Unprocessable Entity"
    case 423: return "Locked"
    case 424: return "Failed Dependency"
    case 426: return "Upgrade Required"
    case 428: return "Precondition Required"
    case 429: return "Too Many Requests"
    case 431: return "Request Header Fields Too Large"
    case 451: return "Unavailable For Legal Reasons"
    case 400...499: return "Client Error"
    case 500: return "Internal Server Error"
    case 501: return "Not Implemented"
    case 502: return "Bad Gateway"
    case 503: return "Service Unavailable"
    case 504: return "Gateway Timeout"
    case 505: return "HTTP Version Not Supported"
    case 506: return "Variant Also Negotiates"
    case 507: return "Insufficient Storage"
    case 508: return "Loop Detected"
    case 510: return "Not Extended"
    case 511: return "Network Authentication Required"
    case 500...599: return "Server Error"
    default: return "Server Error"
    }
  }
  
}
