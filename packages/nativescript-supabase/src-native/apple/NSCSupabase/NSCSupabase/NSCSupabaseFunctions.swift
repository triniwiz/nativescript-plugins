//
//  NSCSupabaseFunctions.swift
//  NSCSupabase
//
//  Created by Osei Fortune on 11/01/2025.
//

internal import Supabase

@objcMembers
@objc(NSCSupabaseFunctionInvokeOptions)
public class NSCSupabaseFunctionInvokeOptions: NSObject {
  internal var _method: FunctionInvokeOptions.Method?
  public var method: String? {
    get {
      guard let _method else { return nil }
      switch _method {
      case .post:
        return "POST"
      case .get:
        return "GET"
      case .put:
        return "PUT"
      case .delete:
        return "DELETE"
      case .patch:
        return "PATCH"
      }
    }
    set {
      switch newValue {
        case "POST":
        _method = FunctionInvokeOptions.Method.post
        break
      case "GET":
        _method = FunctionInvokeOptions.Method.get
        break
      case "PUT":
        _method = FunctionInvokeOptions.Method.put
        break
      case "DELETE":
        _method = FunctionInvokeOptions.Method.delete
        break
      case "PATCH":
        _method = FunctionInvokeOptions.Method.patch
        break
      default:
        _method = nil
        break
      }
    }
  }
  public var headers: [String: String]?
  
  var fileBody: Data?
  
  var jsonBody: [String: AnyHashable]?
  
  public init(fileBody: Data){
    self.fileBody = fileBody
  }
  
  public init(json: [String: AnyHashable]?) {
    self.jsonBody = json
  }
  
  var options: FunctionInvokeOptions {
    get {
      if(jsonBody != nil){
        return FunctionInvokeOptions(method: self._method, headers: headers ?? [:], body: NSCSupabaseHelpers.encodeObject(jsonBody))
      }
      
      if(fileBody != nil){
        return FunctionInvokeOptions(method: self._method, headers: headers ?? [:], body: fileBody!)
      }
   
      return FunctionInvokeOptions(method: self._method, headers: headers ?? [:])
    }
  }
}

@objcMembers
@objc(NSCSupabaseFunctionsResult)
public class NSCSupabaseFunctionsResult: NSObject {
  public let data: Data?
  public let response: HTTPURLResponse?
 
  init(data: Data?, response: HTTPURLResponse?) {
    self.data = data
    self.response = response
  }
  
  public func json(_ callback: @escaping ([String: AnyHashable]?, Error?) -> Void){
    Task {
      do {
        let ret = try JSONSerialization.jsonObject(with: data!, options: [])
        callback(ret as? [String: AnyHashable], nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
  public func text(_ callback: @escaping (String?) -> Void){
    Task {
      let ret = String(data: data!, encoding: .utf8)
      callback(ret)
    }
  }
  
  
}

@objcMembers
@objc(NSCSupabaseFunctionsErrorResult)
public class NSCSupabaseFunctionsErrorResult: NSObject {
  let result: FunctionsError
  public internal(set) var isHttpError = false
  init(result: FunctionsError) {
    self.result = result
    switch result {
    case .httpError(_, _):
      isHttpError = true
      break
    default:
      break
    }
  }
  
  
  public var httpError: Data? {
    switch result {
    case .relayError:
      return nil
    case .httpError(_, let data):
      return data
    default:
      return nil
    }
  }
  
  public func json(_ callback: @escaping ([String: AnyHashable]?, Error?) -> Void){
    Task {
      if(isHttpError){
        do {
          let ret = try JSONSerialization.jsonObject(with: httpError!, options: [])
          callback(ret as? [String: AnyHashable], nil)
        }catch {
          callback(nil, error)
        }
      }else {
        callback([:], nil)
      }
    }
  }
  
  public var httpErrorCode: NSNumber? {
    switch result {
    case .relayError:
      return nil
    case .httpError(let code, _):
      return NSNumber(value: code)
    default:
      return nil
    }
  }
  
  
  public var message: String? {
    result.errorDescription
  }
  
}

@objcMembers
@objc(NSCSupabaseFunctions)
public class NSCSupabaseFunctions: NSObject {
  let functions: FunctionsClient
  init(functions: FunctionsClient) {
    self.functions = functions
  }
  
  public func invoke(_ functionName: String, _ options: NSCSupabaseFunctionInvokeOptions?, _ callback: @escaping (NSCSupabaseFunctionsResult?,NSCSupabaseFunctionsErrorResult?) -> Void){
    Task {
      do {
        let response =  if(options != nil){
          try await functions.invoke(functionName, options: options!.options, decode: { data, response in
            (data, response)
          })
        }else {
          try await functions.invoke(functionName, options: FunctionInvokeOptions(), decode: { data, response in
            (data, response)
          })
        }
        
        callback(NSCSupabaseFunctionsResult(data: response.0, response: response.1), nil)
    
      }catch {
        callback(nil, NSCSupabaseFunctionsErrorResult(result: error as! FunctionsError))
      }
    }
  }
}
