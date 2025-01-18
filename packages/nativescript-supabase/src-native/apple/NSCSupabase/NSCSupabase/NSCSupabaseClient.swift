//
//  NSCSupabase.swift
//  NSCSupabase
//
//  Created by Osei Fortune on 11/01/2025.
//
internal import Supabase

@objcMembers
@objc(NSCSupabaseClient)
public class NSCSupabaseClient: NSObject {
  let client: SupabaseClient
  init(client: SupabaseClient) {
    self.client = client
  }
  public static func createClient(_ supabaseURL: String, _ supabaseKey: String) throws -> NSCSupabaseClient {
    guard let url = URL(string: supabaseURL) else {
      throw NSError(domain: "NSCSupabase", code: 1)
    }
    return NSCSupabaseClient(client: SupabaseClient(supabaseURL: url, supabaseKey: supabaseKey))
  }
  
  public func schema(_ schema: String) -> NSCSupabasePostgresClient{
    return NSCSupabasePostgresClient(client: client.schema(schema))
  }
  
  
  public func from(_ table: String) -> NSCSupabasePostgresQueryBuilder{
    return NSCSupabasePostgresQueryBuilder(builder: client.from(table))
  }
  
  public func handleURL(_ url: URL){
    client.handle(url)
  }
  
  public lazy var auth = {
    NSCSupabaseAuth(auth: client.auth)
  }()
  
  public lazy var storage = {
    NSCSupabseStorage(storage: client.storage)
  }()
  
  public func channel(_ name: String) -> NSCSupabaseChannel{
    // todo config
    return NSCSupabaseChannel(channel: client.channel(name))
  }
  
  public func removeChannel(_ channel: NSCSupabaseChannel, _ callback: @escaping () -> Void) {
    Task {
      await client.removeChannel(channel.channel)
      callback()
    }
  }
  
  public func removeAllChannels(_ callback: @escaping () -> Void) {
    Task {
      await client.removeAllChannels()
      callback()
    }
  }
  
  public lazy var functions = {
    NSCSupabaseFunctions(functions: client.functions)
  }()
  
  
  public func rpc(_ fn: String) throws -> NSCSupabasePostgresFilterBuilder{
    return NSCSupabasePostgresFilterBuilder(filter: try client.rpc(fn), isRpc: true)
  }
  
  public func rpc(_ fn: String, count: NSCSupabasePostgresCountOption) throws -> NSCSupabasePostgresFilterBuilder{
    return NSCSupabasePostgresFilterBuilder(filter: try client.rpc(fn, count: count.count), isRpc: true)
  }
  
  public func rpc(_ fn: String, params: NSCSupabaseJSONValue, count: NSCSupabasePostgresCountOption) throws -> NSCSupabasePostgresFilterBuilder{
    return NSCSupabasePostgresFilterBuilder(filter: try client.rpc(fn, params: params,  count: count.count), isRpc: true)
  }
}
