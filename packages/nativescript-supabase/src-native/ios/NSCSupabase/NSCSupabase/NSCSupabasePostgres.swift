//
//  NSCSupabasePostgres.swift
//  NSCSupabase
//
//  Created by Osei Fortune on 11/01/2025.
//

internal import Supabase

@objcMembers
@objc(NSCSupabasePostgres)
public class NSCSupabasePostgres: NSObject {
  let postgres: PostgrestQueryBuilder
  init(postgres: PostgrestQueryBuilder) {
    self.postgres = postgres
  }
}

