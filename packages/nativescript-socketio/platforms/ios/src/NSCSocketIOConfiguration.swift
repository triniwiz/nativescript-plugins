//
//  NSCSocketIOConfiguration.swift
//  NativeScript SocketIO
//
//  Created by Osei Fortune on 01/04/2024.
//
import UIKit
#if canImport(SocketIO)
import SocketIO

@objcMembers
@objc(NSCSocketIOConfiguration)
public class NSCSocketIOConfiguration: NSObject {
   
    var compress: Bool  = false
    
    var connectParams: NSDictionary? = nil
    
    var cookies: [HTTPCookie]? = nil
    
    var extraHeaders: [String: String]? = nil
    
    var forceNew: Bool = false
    
    var forcePolling: Bool = false
    
    var forceWebsockets: Bool = false
    
    var enableSOCKSProxy: Bool = false
    
    var log: Bool = false
    
    var path: String? = nil
    
    var reconnects: Bool = true
    
    var reconnectAttempts: Int = -1
    
    var secure: Bool = false
    
    var version: SocketIOVersion = .three
    
    func build() -> SocketIOClientConfiguration{
        var config = SocketIOClientConfiguration()
        if(compress){
            config.insert(.compress)
        }
        
        if(connectParams != nil){
            if let connectParams = connectParams as? [String: Any] {
                config.insert(.connectParams(connectParams))
            }
        }
        
        if let cookies = cookies {
            config.insert(.cookies(cookies))
        }
        
        if let extraHeaders = extraHeaders {
            config.insert(.extraHeaders(extraHeaders))
        }
        
        config.insert(.forceNew(forceNew))
        
        config.insert(.enableSOCKSProxy(enableSOCKSProxy))
        
        config.insert(.log(log))
        
        if let path = path {
            config.insert(.path(path))
        }
        
        config.insert(.reconnects(reconnects))
        
        config.insert(.reconnectAttempts(reconnectAttempts))
        
        config.insert(.secure(secure))
        
        config.insert(.version(version))
        
        
        return config
    }
}
#endif
