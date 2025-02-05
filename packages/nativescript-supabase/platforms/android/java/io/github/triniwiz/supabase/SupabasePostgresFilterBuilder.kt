package io.github.triniwiz.supabase

import io.github.jan.supabase.exceptions.RestException
import io.github.jan.supabase.postgrest.Postgrest
import io.github.jan.supabase.postgrest.RpcMethod
import io.github.jan.supabase.postgrest.query.Columns
import io.github.jan.supabase.postgrest.query.PostgrestQueryBuilder
import io.github.jan.supabase.postgrest.query.PostgrestRequestBuilder
import io.github.jan.supabase.postgrest.query.filter.FilterOperator
import io.github.jan.supabase.postgrest.query.filter.PostgrestFilterBuilder
import io.github.jan.supabase.postgrest.query.filter.TextSearchType
import io.github.triniwiz.supabase.SupabaseClient.CountOption
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import io.ktor.util.toMap

class SupabasePostgresFilterBuilder(
  postgrest: Postgrest,
  fn: String? = null,
  args: String? = null,
  get: Boolean? = null,
  head: Boolean? = null,
  countOption: CountOption? = null
) : SupabasePostgresTransformBuilder(postgrest, fn, args, get, head, countOption) {

  companion object {
    fun localizedStringForStatusCode(statusCode: Int): String {
      return when (statusCode) {
        100 -> "Continue"
        101 -> "Switching Protocols"
        102 -> "Processing"
        in 100..199 -> "Informational"
        200 -> "OK"
        201 -> "Created"
        202 -> "Accepted"
        203 -> "Non-Authoritative Information"
        204 -> "No Content"
        205 -> "Reset Content"
        206 -> "Partial Content"
        207 -> "Multi-Status"
        208 -> "Already Reported"
        226 -> "IM Used"
        in 200..299 -> "Success"
        300 -> "Multiple Choices"
        301 -> "Moved Permanently"
        302 -> "Found"
        303 -> "See Other"
        304 -> "Not Modified"
        305 -> "Use Proxy"
        307 -> "Temporary Redirect"
        308 -> "Permanent Redirect"
        in 300..399 -> "Redirection"
        400 -> "Bad Request"
        401 -> "Unauthorized"
        402 -> "Payment Required"
        403 -> "Forbidden"
        404 -> "Not Found"
        405 -> "Method Not Allowed"
        406 -> "Not Acceptable"
        407 -> "Proxy Authentication Required"
        408 -> "Request Timeout"
        409 -> "Conflict"
        410 -> "Gone"
        411 -> "Length Required"
        412 -> "Precondition Failed"
        413 -> "Payload Too Large"
        414 -> "URI Too Long"
        415 -> "Unsupported Media Type"
        416 -> "Range Not Satisfiable"
        417 -> "Expectation Failed"
        421 -> "Misdirected Request"
        422 -> "Unprocessable Entity"
        423 -> "Locked"
        424 -> "Failed Dependency"
        426 -> "Upgrade Required"
        428 -> "Precondition Required"
        429 -> "Too Many Requests"
        431 -> "Request Header Fields Too Large"
        451 -> "Unavailable For Legal Reasons"
        in 400..499 -> "Client Error"
        500 -> "Internal Server Error"
        501 -> "Not Implemented"
        502 -> "Bad Gateway"
        503 -> "Service Unavailable"
        504 -> "Gateway Timeout"
        505 -> "HTTP Version Not Supported"
        506 -> "Variant Also Negotiates"
        507 -> "Insufficient Storage"
        508 -> "Loop Detected"
        510 -> "Not Extended"
        511 -> "Network Authentication Required"
        in 500..599 -> "Server Error"
        else -> "Server Error"
      }
    }
  }

  fun containedBy(column: String, value: List<Any>): SupabasePostgresFilterBuilder {
    commands.add(Pair(Action.containedBy, mapOf("column" to column, "value" to value)))
    return this
  }

  fun contains(column: String, value: List<Any>): SupabasePostgresFilterBuilder {
    commands.add(Pair(Action.contains, mapOf("column" to column, "value" to value)))
    return this
  }

  fun eq(column: String, value: Any): SupabasePostgresFilterBuilder {
    commands.add(Pair(Action.eq, mapOf("column" to column, "value" to value)))
    return this
  }

  fun gt(column: String, value: Any): SupabasePostgresFilterBuilder {
    commands.add(Pair(Action.gt, mapOf("column" to column, "value" to value)))
    return this
  }

  fun gte(column: String, value: Any): SupabasePostgresFilterBuilder {
    commands.add(Pair(Action.gte, mapOf("column" to column, "value" to value)))
    return this
  }

  fun ilike(column: String, pattern: String): SupabasePostgresFilterBuilder {
    commands.add(Pair(Action.ilike, mapOf("column" to column, "pattern" to pattern)))
    return this
  }

  @JvmOverloads
  fun `is`(column: String, value: Boolean? = null): SupabasePostgresFilterBuilder {
    commands.add(Pair(Action.`is`, mapOf("column" to column, "value" to value)))
    return this
  }


  fun `in`(column: String, value: List<Any>): SupabasePostgresFilterBuilder {
    commands.add(Pair(Action.`in`, mapOf("column" to column, "value" to value)))
    return this
  }

  fun like(column: String, pattern: String): SupabasePostgresFilterBuilder {
    commands.add(Pair(Action.like, mapOf("column" to column, "pattern" to pattern)))
    return this
  }

  fun lt(column: String, value: Any): SupabasePostgresFilterBuilder {
    commands.add(Pair(Action.lt, mapOf("column" to column, "value" to value)))
    return this
  }

  fun lte(column: String, value: Any): SupabasePostgresFilterBuilder {
    commands.add(Pair(Action.lte, mapOf("column" to column, "value" to value)))
    return this
  }

  fun match(column: String, value: Any): SupabasePostgresFilterBuilder {
    commands.add(Pair(Action.match, mapOf("column" to column, "value" to value)))
    return this
  }

  fun neq(column: String, value: Any): SupabasePostgresFilterBuilder {
    commands.add(Pair(Action.neq, mapOf("column" to column, "value" to value)))
    return this
  }

  fun not(column: String, filter: String, value: Any?): SupabasePostgresFilterBuilder {
    commands.add(
      Pair(
        Action.not,
        mapOf("column" to column, "filter" to filter, "value" to value)
      )
    )
    return this
  }

  fun overlaps(column: String, value: Any): SupabasePostgresFilterBuilder {
    commands.add(Pair(Action.overlaps, mapOf("column" to column, "value" to value)))
    return this
  }

  fun rangeAdjacent(column: String, range: Any): SupabasePostgresFilterBuilder {
    commands.add(Pair(Action.rangeAdjacent, mapOf("column" to column, "range" to range)))
    return this
  }

  fun rangeGt(column: String, range: Any): SupabasePostgresFilterBuilder {
    commands.add(Pair(Action.rangeGt, mapOf("column" to column, "range" to range)))
    return this
  }

  fun rangeGte(column: String, range: Any): SupabasePostgresFilterBuilder {
    commands.add(Pair(Action.rangeGte, mapOf("column" to column, "range" to range)))
    return this
  }

  fun rangeLt(column: String, range: Any): SupabasePostgresFilterBuilder {
    commands.add(Pair(Action.rangeLt, mapOf("column" to column, "range" to range)))
    return this
  }

  fun rangeLte(column: String, range: Any): SupabasePostgresFilterBuilder {
    commands.add(Pair(Action.rangeLte, mapOf("column" to column, "range" to range)))
    return this
  }

  fun textSearch(
    column: String,
    query: Any,
    config: String?,
    type: String?
  ): SupabasePostgresFilterBuilder {
    commands.add(
      Pair(
        Action.textSearch,
        mapOf("column" to column, "query" to query, "config" to config, "type" to type)
      )
    )
    return this
  }
}
