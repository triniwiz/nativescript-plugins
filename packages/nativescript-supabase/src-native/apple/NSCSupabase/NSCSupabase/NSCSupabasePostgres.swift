//
//  NSCSupabasePostgres.swift
//  NSCSupabase
//
//  Created by Osei Fortune on 11/01/2025.
//

internal import Supabase
import Foundation


@objcMembers
@objc(NSCSupabasePostgresFetchOptions)
public class NSCSupabasePostgresFetchOptions: NSObject {
  public let head: Bool
  
  public let count: NSCSupabasePostgresCountOption?
  
  public init(head: Bool, count: NSCSupabasePostgresCountOption?) {
    self.head = head
    self.count = count
  }
  
  var options: FetchOptions {
    FetchOptions(head: head, count: count?.count)
  }
}


@objcMembers
@objc(NSCSupabasePostgresTransformBuilder)
public class NSCSupabasePostgresTransformBuilder: NSObject {
  var transform: PostgrestTransformBuilder
  var isSingle: Bool
  var isCVS: Bool
  var isRpc: Bool
  init(transform: PostgrestTransformBuilder, single: Bool = false, csv: Bool = false, isRpc: Bool = false) {
    self.transform = transform
    self.isSingle = single
    self.isCVS = csv
    self.isRpc = isRpc
  }
  
  public func select(_ columns: String?) -> Self {
    guard let columns = columns else {
      transform = transform.select()
      return self
    }
    transform = transform.select(columns)
    return self
  }
  
  
  public func order(_ column: String, _ ascending: Bool,
                    _ nullsFirst: Bool,
                    _ referencedTable: String?) -> Self {
    transform = transform.order(column, ascending: ascending, nullsFirst: nullsFirst, referencedTable: referencedTable)
    return self
  }
  
  public func range(_ from: Int, _ to : Int, _ referencedTable: String?) -> Self{
    transform = transform.range(from: from, to: to, referencedTable: referencedTable)
    return self
  }
  
  public func limit(_ count: Int) -> Self{
    transform = transform.limit(count)
    return self
  }
  
  public func single() -> Self {
    transform = transform.single()
    self.isSingle = true
    return self
  }
  
  
  public func maybeSingle() -> Self {
    transform = transform.limit(1).single()
    self.isSingle = true
    return self
  }
  
  public func csv()-> Self{
    transform = transform.csv()
    self.isCVS = true
    return self
  }
  
  
  public func execute(_ options: NSCSupabasePostgresFetchOptions?, _ callback: @escaping (AnyHashable?, Error?) -> Void){
    Task {
      var ret: [String: AnyHashable] = [:]
      do {
        let result = if(options != nil){
          try await transform.execute(options: options!.options)
        }else {
          try await transform.execute(options: FetchOptions())
        }
        
        do {
          if(result.count != nil){
            ret["count"] = result.count
          }else if(isRpc){
            if let data = result.value as Any as? String {
              ret["data"] = data
            }else if let data = result.value as Any as? NSCSupabaseJSONValue {
              ret["data"] = data.value as? AnyHashable
            }else if let data = result as Any as? String {
              ret["data"] = data
            }else {
              ret["data"] = result.value as? AnyHashable
            }
          }else if(isCVS){
            ret["data"] = result.string()
          }else {
            let json = try JSONSerialization.jsonObject(with: result.data, options: [.allowFragments])
            if(isSingle){
              ret["data"] = json as? [String: AnyHashable]
            }else {
              ret["data"] = json as? [[String: AnyHashable]]
            }
          }
          
          ret["status"] = result.response.statusCode
          ret["statusCode"] = NSCSupabaseHelpers.localizedString(forStatusCode: result.response.statusCode)
          callback(ret, nil)
        }catch {
          // null ?
          callback(nil, nil)
        }
        
        
        
      }catch {
        guard let postgresError = error as? PostgrestError else {
          do {
            let httpError = error as! HTTPError
            let errorResponse = try JSONSerialization.jsonObject(with: httpError.data, options: [.allowFragments])
            ret["error"] = errorResponse as? [String: AnyHashable]
            ret["status"] = httpError.response.statusCode
            ret["statusCode"] = NSCSupabaseHelpers.localizedString(forStatusCode: httpError.response.statusCode)
            callback(ret, nil)
          }catch {
            ret["status"] = 500
            ret["statusCode"] = "Internal Server Error"
            ret["error"] = [
              "message": String(describing: error),
              "hint": nil
            ];
            
            callback(ret, nil)
          }
          return
        }
        

        ret["error"] = [
          "code": postgresError.code,
          "message": postgresError.message,
          "hint": postgresError.hint,
          "detail": postgresError.detail
        ];
        
        callback(ret, nil)
      }
    }
  }
  
}

@objc(NSCSupabasePostgresTextSearchType)
public enum NSCSupabasePostgresTextSearchType: Int8, RawRepresentable{
  case plain
  case phrase
  case websearch
  
  public var rawValue: RawValue {
    switch self {
    case .plain:
        return 0
    case .phrase:
        return 1
    case .websearch:
        return 2
    }
  }
  
  public init?(rawValue: RawValue) {
    switch rawValue {
    case 0:
      self = .plain
    case 1:
      self = .phrase
    case 2:
      self = .websearch
    default:
      return nil
    }
  }
  
  var type: TextSearchType {
    switch self {case .plain:
        .plain
    case .phrase:
        .phrase
    case .websearch:
        .websearch
    }
  }
}



@objc(NSCSupabasePostgresFilterBuilderOperator)
public enum NSCSupabasePostgresFilterBuilderOperator: Int8, RawRepresentable {
case eq, neq, gt, gte, lt, lte, like, ilike, `is`, `in`, cs, cd, sl, sr, nxl, nxr, adj, ov, fts,
     plfts, phfts, wfts
  
  public typealias RawValue = Int8
  
  
  public var rawValue: RawValue {
    switch self {
    case .eq:
      0
    case .neq:
      1
    case .gt:
      2
    case .gte:
      3
    case .lt:
      4
    case .lte:
      5
    case .like:
      6
    case .ilike:
      7
    case .is:
      8
    case .in:
      9
    case .cs:
      10
    case .cd:
      11
    case .sl:
      12
    case .sr:
      13
    case .nxl:
      14
    case .nxr:
      15
    case .adj:
      16
    case .ov:
      17
    case .fts:
      18
    case .plfts:
      19
    case .phfts:
      20
    case .wfts:
      21
    }
  }
  
  public init?(rawValue: RawValue) {
    switch rawValue {
    case 0:
      self = .eq
    case 1:
      self = .neq
    case 2:
      self = .gt
    case 3:
      self = .gte
    case 4:
      self = .lt
    case 5:
      self = .lte
    case 6:
      self = .like
    case 7:
      self = .ilike
    case 8:
      self = .is
    case 9:
      self = .in
    case 10:
      self = .cs
    case 11:
      self = .cd
    case 12:
      self = .sl
    case 13:
      self = .sr
    case 14:
      self = .nxl
    case 15:
      self = .nxr
    case 16:
      self = .adj
    case 17:
      self = .ov
    case 18:
      self = .fts
    case 19:
      self = .plfts
    case 20:
      self = .phfts
    case 21:
      self = .wfts
    default:
      return nil
    }
  }
  
  
  var `operator`: PostgrestFilterBuilder.Operator {
    get {
      switch self {case .eq:
          .eq
      case .neq:
          .neq
      case .gt:
          .gt
      case .gte:
          .gte
      case .lt:
          .lt
      case .lte:
          .lte
      case .like:
          .like
      case .ilike:
          .ilike
      case .is:
          .is
      case .in:
          .in
      case .cs:
          .cs
      case .cd:
          .cd
      case .sl:
          .sl
      case .sr:
          .sr
      case .nxl:
          .nxl
      case .nxr:
          .nxr
      case .adj:
          .adj
      case .ov:
          .ov
      case .fts:
          .fts
      case .plfts:
          .plfts
      case .phfts:
          .phfts
      case .wfts:
          .wfts
      }
    }
  }
}


@objcMembers
@objc(NSCSupabasePostgresFilterBuilder)
public class NSCSupabasePostgresFilterBuilder: NSCSupabasePostgresTransformBuilder {
  var filter: PostgrestFilterBuilder
  
  init(filter builder: PostgrestFilterBuilder, single: Bool = false, csv: Bool = false, isRpc: Bool = false) {
    filter = builder
    super.init(transform: filter, single: single, csv: csv, isRpc: isRpc)
  }
  
  public func eq(_ column: String, _ value: NSCSupabaseJSONValue) -> NSCSupabasePostgresFilterBuilder {
    filter = filter.eq(column, value: value)
    return self
  }
  
  public func gte(_ column: String, _ value: NSCSupabaseJSONValue) -> NSCSupabasePostgresFilterBuilder {
    filter = filter.gte(column, value: value)
    return self
  }
  
  public func lte(_ column: String, _ value: NSCSupabaseJSONValue) -> NSCSupabasePostgresFilterBuilder {
    filter = filter.lte(column, value: value)
    return self
  }
  
  public func lt(_ column: String, _ value: NSCSupabaseJSONValue) -> NSCSupabasePostgresFilterBuilder {
    filter = filter.lt(column, value: value)
    return self
  }
  
  public func neq(_ column: String, _ value: NSCSupabaseJSONValue) -> NSCSupabasePostgresFilterBuilder {
    filter = filter.neq(column, value: value)
    return self
  }
  
  public func gt(_ column: String, _ value: NSCSupabaseJSONValue) -> NSCSupabasePostgresFilterBuilder {
    filter = filter.gt(column, value: value)
    return self
  }
  
  public func like(_ column: String, _ pattern: String) -> NSCSupabasePostgresFilterBuilder {
    filter = filter.like(column, pattern: pattern)
    return self
  }
  
  public func ilike(_ column: String, _ pattern: String) -> NSCSupabasePostgresFilterBuilder {
    filter = filter.ilike(column, pattern: pattern)
    return self
  }
  
  public func `is`(_ column: String) -> NSCSupabasePostgresFilterBuilder {
    filter = filter.is(column, value: nil)
    return self
  }
  
  public func `is`(_ column: String, value: Bool) -> NSCSupabasePostgresFilterBuilder {
    filter = filter.is(column, value: value)
    return self
  }
  
  public func `in`(_ column: String, _ pattern: [NSCSupabaseJSONValue]) -> NSCSupabasePostgresFilterBuilder {
    filter = filter.in(column, values: pattern)
    return self
  }
  
  public func contains(_ column: String, _ value: NSCSupabaseJSONValue) -> NSCSupabasePostgresFilterBuilder {
    filter = filter.contains(column, value: value)
    return self
  }
  
  public func containedBy(_ column: String, _ value: NSCSupabaseJSONValue) -> NSCSupabasePostgresFilterBuilder {
    let val = NSCSupabaseHelpers.encodeValue(value)
    filter = filter.containedBy(column, value: val)
    return self
  }
  
  public func rangeGt(_ column: String, _ range: NSCSupabaseJSONValue) -> NSCSupabasePostgresFilterBuilder {
    filter = filter.rangeGt(column, range: range)
    return self
  }
  
  public func rangeGte(_ column: String, _ range: NSCSupabaseJSONValue) -> NSCSupabasePostgresFilterBuilder {
    filter = filter.rangeGte(column, range: range)
    return self
  }
  
  public func rangeLt(_ column: String, _ range: NSCSupabaseJSONValue) -> NSCSupabasePostgresFilterBuilder {
    filter = filter.rangeLt(column, range: range)
    return self
  }
  
  
  public func rangeLte(_ column: String, _ range: NSCSupabaseJSONValue) -> NSCSupabasePostgresFilterBuilder {
    filter = filter.rangeLte(column, range: range)
    return self
  }
  
  public func rangeAdjacent(_ column: String, _ range: NSCSupabaseJSONValue) -> NSCSupabasePostgresFilterBuilder {
    filter = filter.rangeAdjacent(column, range: range)
    return self
  }
  
  public func overlaps(_ column: String, _ value: NSCSupabaseJSONValue) -> NSCSupabasePostgresFilterBuilder {
    filter = filter.overlaps(column, value: value)
    return self
  }
  
  
  public func textSearch(_ column: String, _ value: NSCSupabaseJSONValue, _ config: String?) -> NSCSupabasePostgresFilterBuilder {
    filter = filter.textSearch(column, query: value ,config: config)
    return self
  }
  
  
  public func textSearch(_ column: String, _ value: NSCSupabaseJSONValue, _ config: String?, type: NSCSupabasePostgresTextSearchType) -> NSCSupabasePostgresFilterBuilder {
    filter = filter.textSearch(column, query: value ,config: config,type: type.type)
    return self
  }
  
  
  public func match(_ query: [String: NSCSupabaseJSONValue]) -> NSCSupabasePostgresFilterBuilder {
    filter = filter.match(query)
    return self
  }
  
  
  public func not(column: String, _ operatorFilter: NSCSupabasePostgresFilterBuilderOperator, _ value: NSCSupabaseJSONValue) -> NSCSupabasePostgresFilterBuilder {
    filter = filter.not(column, operator: operatorFilter.operator, value: value)
    return self
  }
  
  public func or(filters: String, _ referencedTable: String?) -> NSCSupabasePostgresFilterBuilder {
    filter = filter.or(filters, referencedTable: referencedTable)
    return self
  }
}


@objc(NSCSupabasePostgresCountOption)
public enum NSCSupabasePostgresCountOption: Int8, RawRepresentable {
  public typealias RawValue = Int8
  case none
  case exact
  case planned
  case estimated
  
  public var rawValue: RawValue {
    switch self {
    case .none:
      return -1
    case .exact:
      return 0
    case .planned:
      return 1
    case .estimated:
      return 2
    }
  }
  
  public init?(rawValue: RawValue) {
    switch rawValue {
    case -1:
      self = .none
    case 0:
      self = .exact
    case 1:
      self = .planned
    case 2:
      self = .estimated
    default:
      return nil
    }
  }
  
  @nonobjc var count: CountOption? {
    switch self {case .none:
      nil
    case .exact:
        .exact
    case .planned:
        .planned
    case .estimated:
        .estimated
    }
  }
}



@objcMembers
@objc(NSCSupabasePostgresQueryBuilder)
public class NSCSupabasePostgresQueryBuilder: NSObject {
  let builder: PostgrestQueryBuilder
  init(builder: PostgrestQueryBuilder) {
    self.builder = builder
  }
 
  public func insert(_ values: NSCSupabaseJSONValue, _ count: NSCSupabasePostgresCountOption) throws -> NSCSupabasePostgresFilterBuilder {
    return try NSCSupabasePostgresFilterBuilder(filter: builder.insert(values, count: count.count))
  }
  
  public func update(_ value: [String: NSCSupabaseJSONValue], _ count: NSCSupabasePostgresCountOption) throws -> NSCSupabasePostgresFilterBuilder {
    return try NSCSupabasePostgresFilterBuilder(filter: builder.update(value,count: count.count))
  }
  
  public func upsert(_ value: NSCSupabaseJSONValue, _ onConflict: String?,  _ count: NSCSupabasePostgresCountOption, _ ignoreDuplicates: Bool) throws -> NSCSupabasePostgresFilterBuilder {
    return try NSCSupabasePostgresFilterBuilder(filter:  builder.upsert(value,onConflict: onConflict, count: count.count, ignoreDuplicates: false))
  }
  
  public func delete(_ count: NSCSupabasePostgresCountOption) -> NSCSupabasePostgresFilterBuilder {
    return NSCSupabasePostgresFilterBuilder(filter: builder.delete(count: count.count))
  }
  
  
  public func select(_ columns: String?, _ count: NSCSupabasePostgresCountOption) -> NSCSupabasePostgresFilterBuilder{
    NSCSupabasePostgresFilterBuilder(filter:  builder.select(columns ?? "*", count:  count.count))
  }
  
  public func select(_ columns: String?, _ count: NSCSupabasePostgresCountOption, head: Bool) -> NSCSupabasePostgresFilterBuilder{
    NSCSupabasePostgresFilterBuilder(filter:  builder.select(columns ?? "*", head: head, count:  count.count))
  }
}


@objcMembers
@objc(NSCSupabasePostgres)
public class NSCSupabasePostgresClient: NSObject {
  let client: PostgrestClient
  init(client: PostgrestClient) {
    self.client = client
  }
  
  
  public func schema(_ schema: String) -> NSCSupabasePostgresClient{
    return NSCSupabasePostgresClient(client: client.schema(schema))
  }
  
  
  public func from(_ table: String) -> NSCSupabasePostgresQueryBuilder{
    return NSCSupabasePostgresQueryBuilder(builder: client.from(table))
  }
  
  
  public func rpc(_ fn: String) throws -> NSCSupabasePostgresFilterBuilder{
    return NSCSupabasePostgresFilterBuilder(filter: try client.rpc(fn))
  }
  
  public func rpc(_ fn: String, count: NSCSupabasePostgresCountOption) throws -> NSCSupabasePostgresFilterBuilder{
    return NSCSupabasePostgresFilterBuilder(filter: try client.rpc(fn, count: count.count), isRpc: true)
  }
  
  public func rpc(_ fn: String, params: NSCSupabaseJSONValue, count: NSCSupabasePostgresCountOption) throws -> NSCSupabasePostgresFilterBuilder{
    return NSCSupabasePostgresFilterBuilder(filter: try client.rpc(fn, params: params,  count: count.count), isRpc: true)
  }
  
  
  public func rpc(_ fn: String, params: NSCSupabaseJSONValue, head: Bool, get: Bool, count: NSCSupabasePostgresCountOption) throws -> NSCSupabasePostgresFilterBuilder{
    return NSCSupabasePostgresFilterBuilder(filter: try client.rpc(fn, params: params, head: head, get: get, count: count.count) , isRpc: true)
  }
}
