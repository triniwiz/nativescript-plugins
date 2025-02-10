//
//  NSCSocketIO.swift
//  NativeScript SocketIO
//
//  Created by Osei Fortune on 01/04/2024.
//
import Foundation
import UIKit
#if canImport(SocketIO)
import SocketIO

@objcMembers
@objc(NSCSocketIO)
public class NSCSocketIO: NSObject {
  let manager: SocketManager
  let socket: SocketIOClient
  public init(_ url: String, _ config: NSCSocketIOConfiguration) {
    manager = SocketManager(socketURL: URL(string: url)!, config: config.build())
    socket = manager.defaultSocket
  }
  
  init(manager: SocketManager, socket: SocketIOClient){
    self.manager = manager
    self.socket = socket
  }
  
  var connected: Bool {
    get {
      return socket.status == .connected
    }
  }
  
  public func emit(_ event: String, _ data: [Any], _ ack: (([Any]) -> Void)?){
    if(ack != nil){
      let e = socket.rawEmitView.emitWithAck(event, with: data)
      e.timingOut(after: 0) {data in ack?(data)}
      
    }else {
      socket.rawEmitView.emit(event, with: data)
    }
    
  }
  
  public func on(_ event: String, callback: @escaping ([Any], (([Any]) -> Void)?) -> Void) -> (()-> Void) {
    
    let uuid: UUID
    switch(event){
    case "connection", "connect":
      uuid = socket.on(clientEvent: .connect) {data, ack in
        func ackCallback(data: [Any]) -> Void {
          ack.with(data)
        }
        callback(data, ackCallback)
      }
      break
    case "disconnect":
      uuid = socket.on(clientEvent: .disconnect) {data, ack in
        func ackCallback(data: [Any]) -> Void {
          ack.with(data)
        }
        callback(data, ackCallback)
      }
      break
    case "error":
      uuid = socket.on(clientEvent: .error) {data, ack in
        func ackCallback(data: [Any]) -> Void {
          ack.with(data)
        }
        callback(data, ackCallback)
      }
      break
    case "ping":
      uuid = socket.on(clientEvent: .ping) {data, ack in
        func ackCallback(data: [Any]) -> Void {
          ack.with(data)
        }
        callback(data, ackCallback)
      }
      break
    case "pong":
      uuid = socket.on(clientEvent: .pong) {data, ack in
        func ackCallback(data: [Any]) -> Void {
          ack.with(data)
        }
        callback(data, ackCallback)
      }
      break
    case "reconnect":
      uuid = socket.on(clientEvent: .reconnect) {data, ack in
        func ackCallback(data: [Any]) -> Void {
          ack.with(data)
        }
        callback(data, ackCallback)
      }
      break
    case "reconnectAttempt":
      uuid = socket.on(clientEvent: .reconnectAttempt) {data, ack in
        func ackCallback(data: [Any]) -> Void {
          ack.with(data)
        }
        callback(data, ackCallback)
      }
      break
    case "statusChange":
      uuid = socket.on(clientEvent: .statusChange) {data, ack in
        func ackCallback(data: [Any]) -> Void {
          ack.with(data)
        }
        callback(data, ackCallback)
      }
      break
    case "websocketUpgrade":
      uuid = socket.on(clientEvent: .websocketUpgrade) {data, ack in
        func ackCallback(data: [Any]) -> Void {
          ack.with(data)
        }
        callback(data, ackCallback)
      }
      break
    default:
      uuid = socket.on(event) {data, ack in
        func ackCallback(data: [Any]) -> Void {
          ack.with(data)
        }
        callback(data, ackCallback)
      }
      break
    }
    
    
    
    func off() -> Void { socket.off(id: uuid)  }
    
    return off
  }
  
  public func once(_ event: String, callback: @escaping ([Any],(([Any]) -> Void)?) -> Void) -> (()-> Void){
    let uuid: UUID
    switch(event){
    case "connection", "connect":
      uuid = socket.once(clientEvent: .connect) {data, ack in
        func ackCallback(data: [Any]) -> Void {
          ack.with(data)
        }
        callback(data, ackCallback)
      }
      break
    case "disconnect":
      uuid = socket.once(clientEvent: .disconnect) {data, ack in
        func ackCallback(data: [Any]) -> Void {
          ack.with(data)
        }
        callback(data, ackCallback)
      }
      break
    case "error":
      uuid = socket.once(clientEvent: .error) {data, ack in
        func ackCallback(data: [Any]) -> Void {
          ack.with(data)
        }
        callback(data, ackCallback)
      }
      break
    case "ping":
      uuid = socket.once(clientEvent: .ping) {data, ack in
        func ackCallback(data: [Any]) -> Void {
          ack.with(data)
        }
        callback(data, ackCallback)
      }
      break
    case "pong":
      uuid = socket.once(clientEvent: .pong) {data, ack in
        func ackCallback(data: [Any]) -> Void {
          ack.with(data)
        }
        callback(data, ackCallback)
      }
      break
    case "reconnect":
      uuid = socket.once(clientEvent: .reconnect) {data, ack in
        func ackCallback(data: [Any]) -> Void {
          ack.with(data)
        }
        callback(data, ackCallback)
      }
      break
    case "reconnectAttempt":
      uuid = socket.once(clientEvent: .reconnectAttempt) {data, ack in
        func ackCallback(data: [Any]) -> Void {
          ack.with(data)
        }
        callback(data, ackCallback)
      }
      break
    case "statusChange":
      uuid = socket.once(clientEvent: .statusChange) {data, ack in
        func ackCallback(data: [Any]) -> Void {
          ack.with(data)
        }
        callback(data, ackCallback)
      }
      break
    case "websocketUpgrade":
      uuid = socket.once(clientEvent: .websocketUpgrade) {data, ack in
        func ackCallback(data: [Any]) -> Void {
          ack.with(data)
        }
        callback(data, ackCallback)
      }
      break
    default:
      uuid = socket.once(event) {data, ack in
        func ackCallback(data: [Any]) -> Void {
          ack.with(data)
        }
        callback(data, ackCallback)
      }
      break
    }
    
    
    func off() -> Void { socket.off(id: uuid)  }
    return off
  }
  
  public func connect(_ payload: [String: Any]?){
    if(payload != nil){
      socket.connect(withPayload: payload)
    }else {
      socket.connect()
    }
  }
  
  public func disconnect(){
    socket.disconnect()
  }
  
  public func off(_ event: String){
    socket.off(event)
  }
  
  public func joinNamespace(nsp: String)-> NSCSocketIO {
    return NSCSocketIO(manager: manager, socket: manager.socket(forNamespace: nsp))
  }
  
  public func leaveNamespace() {
    socket.leaveNamespace()
  }
}
#endif
