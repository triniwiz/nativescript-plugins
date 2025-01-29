//
//  NSCSupabaseChannel.swift
//  NSCSupabase
//
//  Created by Osei Fortune on 11/01/2025.
//

internal import Supabase
import Foundation

@objc(NSCSupabaseRealtimeChannelStatus)
public enum NSCSupabaseRealtimeChannelStatus: Int8, RawRepresentable {
  public typealias RawValue = Int8
  case unsubscribed
  case subscribing
  case subscribed
  case unsubscribing
  
  
  public var rawValue: RawValue {
    switch self {
    case .unsubscribed:
      return 0
    case .subscribing:
      return 1
    case .subscribed:
      return 2
    case .unsubscribing:
      return 3
    }
  }
  
  public init?(rawValue: RawValue) {
    switch rawValue {
    case 0:
      self = .unsubscribed
    case 1:
      self = .subscribing
    case 2:
      self = .subscribed
    case 3:
      self = .unsubscribing
    default:
      return nil
    }
  }
}

@objcMembers
@objc(NSCSupabaseChannel)
public class NSCSupabaseChannel: NSObject {
  let channel: RealtimeChannelV2
  internal var broadcastStore =  Set<RealtimeSubscription>()
  internal var presenceStore =  Set<RealtimeSubscription>()
  internal var postgresStore =  Set<RealtimeSubscription>()
  init(channel: RealtimeChannelV2) {
    self.channel = channel
  }
  
  public var status: NSCSupabaseRealtimeChannelStatus {
    switch channel.status {case .unsubscribed:
        .unsubscribed
    case .subscribing:
        .subscribing
    case .subscribed:
        .subscribed
    case .unsubscribing:
        .unsubscribing
    }
  }
  
  public func broadcast(_ event: String, _ message: [String: AnyHashable], _ callback: @escaping (Error?) -> Void){
    Task {
      do {
        try await channel.broadcast(event: event, message: NSCSupabaseHelpers.encodeObject(message))
        callback(nil)
      }catch{
        callback(error)
      }
    }
  }
  
  
  public func onBroadcast(_ event: String, _ callback: @escaping ([String: AnyHashable]) -> Void){
    channel.onBroadcast(event: event) { object in
      guard let message = NSCSupabaseHelpers.decodeObject(object) else {return}
      callback(message)
    }.store(in: &broadcastStore)
  }
  
  public func onPresenceChange(_ event: String, _ callback: @escaping ([String: AnyHashable]) -> Void){
    channel.onPresenceChange { presence in
      if(event == "join"){
        let joins = presence.joins.mapValues { value in
          var ret: [String: AnyHashable] = [:]
          ret["ref"] = value.ref
          ret["state"] = NSCSupabaseHelpers.decodeObject(value.state)
          return ret
        }
        
        if(!joins.isEmpty){
          callback(joins)
        }
      }else if(event == "leave"){
        let leaves = presence.leaves.mapValues { value in
          var ret: [String: AnyHashable] = [:]
          ret["ref"] = value.ref
          ret["state"] = NSCSupabaseHelpers.decodeObject(value.state)
          return ret
        }
        if(!leaves.isEmpty){
          callback(leaves)
        }
      }else if(event == "sync"){
        var ret: [String: AnyHashable] = [:]
        callback(ret)
      }
    }.store(in: &presenceStore)
  }
  
  func buildInsert(_ insert: InsertAction,  _ scheme: String) -> [String: AnyHashable]{
    var ret: [String: AnyHashable] = [:]
    ret["eventType"] = "INSERT"
    ret["scheme"] = scheme
    ret["commit_timestamp"] = insert.commitTimestamp
    ret["new"] = NSCSupabaseHelpers.decodeObject(insert.record)
    ret["old"] = [:] as [String: AnyHashable]
    let payload = NSCSupabaseHelpers.decodeObject(insert.rawMessage.payload)
    ret["table"] = (payload?["data"] as? [String: AnyHashable])?["table"] as? String
    return ret
  }
  
  func buildUpdate(_ update: UpdateAction,  _ scheme: String) -> [String: AnyHashable]{
    var ret: [String: AnyHashable] = [:]
    ret["eventType"] = "UPDATE"
    ret["scheme"] = scheme
    ret["commit_timestamp"] = update.commitTimestamp
    ret["new"] = NSCSupabaseHelpers.decodeObject(update.record)
    ret["old"] = NSCSupabaseHelpers.decodeObject(update.oldRecord)
    let payload = NSCSupabaseHelpers.decodeObject(update.rawMessage.payload)
    ret["table"] = (payload?["data"] as? [String: AnyHashable])?["table"] as? String
    return ret
  }
  
  func buildDelete(_ delete: DeleteAction,  _ scheme: String) -> [String: AnyHashable]{
    var ret: [String: AnyHashable] = [:]
    ret["eventType"] = "DELETE"
    ret["scheme"] = scheme
    ret["commit_timestamp"] = delete.commitTimestamp
    ret["new"] = [:] as [String: AnyHashable]
    ret["old"] = NSCSupabaseHelpers.decodeObject(delete.oldRecord)
    let payload = NSCSupabaseHelpers.decodeObject(delete.rawMessage.payload)
    ret["table"] = (payload?["data"] as? [String: AnyHashable])?["table"] as? String
    return ret
  }
  
  
  
  public func onPostgresChange(_ event: String, _ scheme: String, _ table: String?,  _ filter: String?, _ callback: @escaping ([String: AnyHashable]) -> Void){
    if(event == "*"){
      channel.onPostgresChange(AnyAction.self, schema: scheme, table: table, filter: filter) { action in
        switch(action){
        case
            .insert(let value):
          let ret = self.buildInsert(value, scheme)
          callback(ret)
          break
        case .update(let value):
          let ret = self.buildUpdate(value, scheme)
          callback(ret)
          break
        case .delete(let value):
          let ret = self.buildDelete(value, scheme)
          callback(ret)
          break
        }
      }.store(in: &postgresStore)
    }else if(event == "INSERT"){
      channel.onPostgresChange(InsertAction.self, schema: scheme, table: table, filter: filter) { insert in
        let ret = self.buildInsert(insert, scheme)
        callback(ret)
      }.store(in: &postgresStore)
    }else if(event == "UPDATE"){
      channel.onPostgresChange(UpdateAction.self, schema: scheme, table: table, filter: filter) { update in
        let ret = self.buildUpdate(update, scheme)
        callback(ret)
      }.store(in: &postgresStore)
    }else if(event == "DELETE"){
      channel.onPostgresChange(DeleteAction.self, schema: scheme, table: table, filter: filter) { delete in
        let ret = self.buildDelete(delete, scheme)
        callback(ret)
        
      }.store(in: &postgresStore)
    }
  }
  
  
  public func subscribe(_ callback: @escaping () -> Void){
    Task {
      await channel.subscribe()
      callback()
    }
  }
  
  public func unsubscribe(_ callback: @escaping () -> Void){
    Task {
      await channel.unsubscribe()
      callback()
    }
  }
  
  public func untrack(_ callback: @escaping () -> Void){
    Task {
      await channel.untrack()
      callback()
    }
  }
  
}
