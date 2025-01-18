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



@objcMembers
@objc(NSCSupabaseJSONValue)
public class NSCSupabaseJSONValue: NSObject, Encodable, Decodable, URLQueryRepresentable {
  var boolValue: Bool?
  var integerValue: Int?
  var doubleValue: Double?
  var stringValue: String?
  var dateValue: Date?
  var dataValue: Data?
  var arrayValue: [NSCSupabaseJSONValue]?
  var objectValue: [String: NSCSupabaseJSONValue]?
  
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
          value.value
        })  as Any
      }
      
      if let objectValue = objectValue {
        return objectValue.mapValues({ value in
          value.value
        })  as Any
      }
      
      return nil
    }
  
  
  static func decodingError(forCodingPath codingPath: [CodingKey]) -> DecodingError {
    let context = DecodingError.Context(codingPath: codingPath, debugDescription: "Cannot decode NSCSupabaseJSONValue")
    return DecodingError.typeMismatch(NSCSupabaseJSONValue.self, context)
  }
  
  
  static func decode(from container: SingleValueDecodingContainer) throws -> Any {
    if let value = try? container.decode(Bool.self) {
      return value
    }
    if let value = try? container.decode(Int.self) {
      return value
    }
    if let value = try? container.decode(Double.self) {
      return value
    }
    if let value = try? container.decode(String.self) {
      return value
    }
    
    if let value = try? container.decode(Date.self) {
      return value
    }
    
    if let value = try? container.decode(Data.self) {
      return value
    }
    
    if let value = try? container.decode(NSCSupabaseJSONValue.self) {
      return value
    }
    
    if container.decodeNil() {
      return NSCSupabaseJSONValue()
    }
    throw decodingError(forCodingPath: container.codingPath)
  }
  
  static func decode(from container: inout UnkeyedDecodingContainer) throws -> Any{
    if let value = try? container.decode(Bool.self) {
      return value
    }
    if let value = try? container.decode(Int.self) {
      return value
    }
    if let value = try? container.decode(Double.self) {
      return value
    }
    if let value = try? container.decode(String.self) {
      return value
    }
    
    if let value = try? container.decode(Date.self) {
      return value
    }
    
    if let value = try? container.decode(Data.self) {
      return value
    }
    
    if let value = try? container.decode(NSCSupabaseJSONValue.self) {
      return value
    }
    
    if let value = try? container.decodeNil() {
      if value {
        return NSCSupabaseJSONValue()
      }
    }
    if var container = try? container.nestedUnkeyedContainer() {
      return try decodeArray(from: &container)
    }
    if var container = try? container.nestedContainer(keyedBy: MyCodingKey.self) {
      return try decodeDictionary(from: &container)
    }
    throw decodingError(forCodingPath: container.codingPath)
  }
  
  static func decode(from container: inout KeyedDecodingContainer<MyCodingKey>, forKey key: MyCodingKey) throws -> Any {
    if let value = try? container.decode(Bool.self, forKey: key) {
      return NSCSupabaseJSONValue(boolean: value)
    }
    if let value = try? container.decode(Int.self, forKey: key) {
      return NSCSupabaseJSONValue(integer: value)
    }
    if let value = try? container.decode(Double.self, forKey: key) {
      return NSCSupabaseJSONValue(double: value)
    }
    if let value = try? container.decode(String.self, forKey: key) {
      return NSCSupabaseJSONValue(string: value)
    }
    
    if let value = try? container.decode(Date.self, forKey: key) {
      return NSCSupabaseJSONValue(date: value)
    }
    
    if let value = try? container.decode(Data.self, forKey: key) {
      return NSCSupabaseJSONValue(data: value)
    }
    
    if let value = try? container.decodeNil(forKey: key) {
      if value {
        return NSCSupabaseJSONValue()
      }
    }
    
    if var container = try? container.nestedUnkeyedContainer(forKey: key) {
      return try decodeArray(from: &container)
    }
    
    if var container = try? container.nestedContainer(keyedBy: MyCodingKey.self, forKey: key) {
      return try decodeDictionary(from: &container)
    }
    
    throw decodingError(forCodingPath: container.codingPath)
  }
  
  
  static func decodeArray(from container: inout UnkeyedDecodingContainer) throws -> [Any] {
    var arr: [Any] = []
    while !container.isAtEnd {
      let value = try decode(from: &container)
      arr.append(value)
    }
    return arr
  }
  
  static func decodeDictionary(from container: inout KeyedDecodingContainer<MyCodingKey>) throws -> [String: Any] {
    var dict = [String: Any]()
    for key in container.allKeys {
      let value = try decode(from: &container, forKey: key)
      dict[key.stringValue] = value
    }
    return dict
  }
  
  
  required public init(from decoder: any Decoder) throws {
    if var arrayContainer = try? decoder.unkeyedContainer() {
      var arr: [Any] = []
      while !arrayContainer.isAtEnd {
        let value = try NSCSupabaseJSONValue.decode(from: &arrayContainer)
        arr.append(value)
      }
      self.arrayValue = arr as? [NSCSupabaseJSONValue]
      
    } else if var container = try? decoder.container(keyedBy: MyCodingKey.self) {
      var dict = [String: Any]()
      for key in container.allKeys {
        let value = try NSCSupabaseJSONValue.decode(from: &container, forKey: key)
        dict[key.stringValue] = value
      }
      self.objectValue = dict as? [String: NSCSupabaseJSONValue]
    }else {
      if let bool = try? decoder.singleValueContainer().decode(Bool.self) {
        self.boolValue = bool
      }
      
      if let int = try? decoder.singleValueContainer().decode(Int.self) {
        self.integerValue = int
      }
      
      if let double = try? decoder.singleValueContainer().decode(Double.self) {
        self.doubleValue = double
      }
      
      if let string = try? decoder.singleValueContainer().decode(String.self) {
        self.stringValue = string
      }
      
      if let date = try? decoder.singleValueContainer().decode(Date.self) {
        self.dateValue = date
      }
      
      if let data = try? decoder.singleValueContainer().decode(Data.self) {
        self.dataValue = data
      }
    }
  }
  
  
  static func encode(to container: inout SingleValueEncodingContainer, value: Any) throws {
    if let value = value as? Bool {
      try container.encode(value)
    } else if let value = value as? Int {
      try container.encode(value)
    }else if let value = value as? Double {
      try container.encode(value)
    }else if let value = value as? String {
      try container.encode(value)
    }else if let value = value as? Data {
      try container.encode(value)
    }else if let value = value as? Date {
      try container.encode(value)
    } else if let _ = value as? NSNull {
      try container.encodeNil()
    }else if let value = value as? NSCSupabaseJSONValue {
      if let bool = value.boolValue {
        try container.encode(bool)
      }else if let int = value.integerValue {
        try container.encode(int)
      }else if let double = value.doubleValue {
        try container.encode(double)
      }else if let string = value.stringValue {
        try container.encode(string)
      }else if let date = value.dateValue {
        try container.encode(date)
      }else if let data = value.dataValue {
        try container.encode(data)
      }else if (value.arrayValue != nil || value.objectValue != nil) {
        throw EncodingError.invalidValue(value, EncodingError.Context(codingPath: [], debugDescription: "Unsupported type \(type(of: value))"))
      }else {
        try container.encodeNil()
      }
    }else {
      throw EncodingError.invalidValue(value, EncodingError.Context(codingPath: [], debugDescription: "Unsupported type \(type(of: value))"))
    }
  }
  
  static func encode(to container: inout KeyedEncodingContainer<MyCodingKey>, dictionary: [String: Any]) throws {
    for (key, value) in dictionary {
      let key = MyCodingKey(stringValue: key)!
      if let value = value as? Bool {
        try container.encode(value, forKey: key)
      } else if let value = value as? Int {
        try container.encode(value, forKey: key)
      }else if let value = value as? Double {
        try container.encode(value, forKey: key)
      }else if let value = value as? String {
        try container.encode(value, forKey: key)
      }else if let value = value as? Data {
        try container.encode(value, forKey: key)
      }else if let value = value as? Date {
        try container.encode(value, forKey: key)
      } else if let _ = value as? NSNull {
        try container.encodeNil(forKey: key)
      }else if let value = value as? NSCSupabaseJSONValue {
        if let bool = value.boolValue {
          try container.encode(bool, forKey: key)
        }else if let int = value.integerValue {
          try container.encode(int, forKey: key)
        }else if let double = value.doubleValue {
          try container.encode(double, forKey: key)
        }else if let string = value.stringValue {
          try container.encode(string, forKey: key)
        }else if let date = value.dateValue {
          try container.encode(date, forKey: key)
        }else if let data = value.dataValue {
          try container.encode(data, forKey: key)
        }else if let array = value.arrayValue {
          var container = container.nestedUnkeyedContainer(forKey: key)
          try encode(to: &container, array: array)
        }else if let object = value.objectValue {
          var container = container.nestedContainer(keyedBy: MyCodingKey.self, forKey: key)
          try encode(to: &container, dictionary: object)
        }else {
          try container.encodeNil(forKey: key)
        }
      } else if let value = value as? [Any] {
        var container = container.nestedUnkeyedContainer(forKey: key)
        try encode(to: &container, array: value)
      }else if let value = value as? [String: Any] {
        var container = container.nestedContainer(keyedBy: MyCodingKey.self, forKey: key)
        try encode(to: &container, dictionary: value)
      }else {
        throw EncodingError.invalidValue(value, EncodingError.Context(codingPath: [], debugDescription: "Unsupported type \(type(of: value)) for key \(key)"))
      }
    }
  }
  
  static func encode(to container: inout UnkeyedEncodingContainer, array: [Any]) throws {
    for value in array {
      if let value = value as? Bool {
        try container.encode(value)
      } else if let value = value as? Int {
        try container.encode(value)
      }else if let value = value as? Double {
        try container.encode(value)
      }else if let value = value as? String {
        try container.encode(value)
      }else if let value = value as? Data {
        try container.encode(value)
      }else if let value = value as? Date {
        try container.encode(value)
      } else if let _ = value as? NSNull {
        try container.encodeNil()
      }else if let value = value as? NSCSupabaseJSONValue {
        if let bool = value.boolValue {
          try container.encode(bool)
        }else if let int = value.integerValue {
          try container.encode(int)
        }else if let double = value.doubleValue {
          try container.encode(double)
        }else if let string = value.stringValue {
          try container.encode(string)
        }else if let date = value.dateValue {
          try container.encode(date)
        }else if let data = value.dataValue {
          try container.encode(data)
        }else if let array = value.arrayValue {
          var container = container.nestedUnkeyedContainer()
          try encode(to: &container, array: array)
        }else if let object = value.objectValue {
          var container = container.nestedContainer(keyedBy: MyCodingKey.self)
          try encode(to: &container, dictionary: object)
        }else {
          try container.encodeNil()
        }
      } else if let value = value as? [Any] {
        var container = container.nestedUnkeyedContainer()
        try encode(to: &container, array: value)
      }else if let value = value as? [String: Any] {
        var container = container.nestedContainer(keyedBy: MyCodingKey.self)
        try encode(to: &container, dictionary: value)
      }else {
        throw EncodingError.invalidValue(value, EncodingError.Context(codingPath: [], debugDescription: "Unsupported type \(type(of: value))"))
      }
    }
  }
  
  public func encode(to encoder: any Encoder) throws {
    if let arr = self.arrayValue {
      var container = encoder.unkeyedContainer()
      try NSCSupabaseJSONValue.encode(to: &container, array: arr)
    } else if let dict = self.objectValue {
      var container = encoder.container(keyedBy: MyCodingKey.self)
      try NSCSupabaseJSONValue.encode(to: &container, dictionary: dict)
    } else {
      var container = encoder.singleValueContainer()
      
      if let bool = self.boolValue {
        try NSCSupabaseJSONValue.encode(to: &container, value: bool)
      }else if let int = self.integerValue {
        try NSCSupabaseJSONValue.encode(to: &container, value: int)
      }else if let double = self.doubleValue {
        try NSCSupabaseJSONValue.encode(to: &container, value: double)
      }else if let string = self.stringValue {
        try NSCSupabaseJSONValue.encode(to: &container, value: string)
      }else if let date = self.dateValue {
        try NSCSupabaseJSONValue.encode(to: &container, value: date)
      }else if let data = self.dataValue {
        try NSCSupabaseJSONValue.encode(to: &container, value: data)
      }else {
        try container.encodeNil()
      }
      
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
