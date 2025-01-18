//
//  NSCSupabaseAuthAdmin.swift
//  NSCSupabase
//
//  Created by Osei Fortune on 13/01/2025.
//
internal import Supabase

@objcMembers
@objc(NSCSupabaseAuthAdmin)
public class NSCSupabaseAuthAdmin: NSObject {
  internal let authAdmin: AuthAdmin
  init(authAdmin: AuthAdmin) {
    self.authAdmin = authAdmin
  }
  
  public func deleteUser(_ id: String, _ callback: @escaping (Error?) -> Void){
    self.deleteUser(id: id, shouldSoftDelete: nil, callback: callback)
  }
  
  
  public func deleteUser(_ id: String, _ shouldSoftDelete: Bool, _ callback: @escaping (Error?) -> Void){
    self.deleteUser(id: id, shouldSoftDelete: shouldSoftDelete, callback: callback)
  }
  
  func deleteUser(id: String, shouldSoftDelete: Bool?, callback: @escaping (Error?) -> Void){
    Task {
      do {
        try await authAdmin.deleteUser(id: id, shouldSoftDelete: shouldSoftDelete ?? false)
        callback(nil)
      }catch{
        callback(error)
      }
    }
  }
}
