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
