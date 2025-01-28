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

class SupabasePostgresFilterBuilder {
  internal var postgrest: Postgrest
  internal var rpc: Rpc? = null
  internal var query: Query? = null

  internal constructor(
    postgrest: Postgrest,
    fn: String? = null,
    args: String? = null,
    get: Boolean? = null,
    head: Boolean? = null,
    countOption: CountOption? = null,
  ) {
    this.postgrest = postgrest
    fn?.let {
      this.rpc = Rpc(fn, args, get, head, countOption)
    }
  }

  class Query(val builder: PostgrestQueryBuilder) {
    internal var insert: Insert? = null
    internal var update: Update? = null
    internal var upsert: Upsert? = null
    internal var delete: Delete? = null
    internal var select: Select? = null

    class Insert(
      val value: Any?,
      val defaultToNull: Boolean?,
      val count: CountOption?
    )

    class Update(
      val value: Any,
      val count: CountOption?
    )

    class Upsert(
      val value: Any,
      val onConflict: String?,
      val count: CountOption?,
      val ignoreDuplicates: Boolean? = false
    )

    class Delete(
      val count: CountOption?
    )

    class Select(
      val column: String?,
      val count: CountOption?,
      val head: Boolean?
    )
  }

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


  class Rpc internal constructor(
    internal val fn: String,
    internal val args: String? = null,
    internal val get: Boolean? = null,
    internal val head: Boolean? = null,
    internal val countOption: CountOption? = null,
  )


  enum class Action {
    containedBy,
    contains,
    eq,
    gt,
    gte,
    ilike,
    `in`,
    `is`,
    like,
    lt,
    lte,
    match,
    neq,
    not,
    overlaps,
    rangeAdjacent,
    rangeGt,
    rangeGte,
    rangeLt,
    rangeLte,
    textSearch
  }

  private var commands = mutableListOf<Pair<Action, Map<String, Any?>?>>()

  fun containedBy(column: String, value: List<Any>): SupabasePostgresFilterBuilder {
    commands.add(Pair(Action.containedBy, mapOf("column" to column, "value" to value)))
    return this
  }

  fun contains(column: String, value: List<Any>): SupabasePostgresFilterBuilder {
    commands.add(Pair(Action.contains, mapOf("column" to column, "value" to value)))
    return this
  }

  fun csv(): SupabasePostgresTransformBuilder {
    return SupabasePostgresTransformBuilder(
      this
    ).csv()
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

  fun limit(count: Long): SupabasePostgresTransformBuilder {
    return SupabasePostgresTransformBuilder(
      this
    ).limit(count)
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

  fun maybeSingle(): SupabasePostgresTransformBuilder {
    return SupabasePostgresTransformBuilder(
      this
    ).maybeSingle()
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

  fun order(
    column: String,
    ascending: Boolean?,
    nullsFirst: Boolean?,
    referencedTable: String?
  ): SupabasePostgresTransformBuilder {
    return SupabasePostgresTransformBuilder(
      this
    ).order(column, ascending, nullsFirst, referencedTable)
  }

  fun overlaps(column: String, value: Any): SupabasePostgresFilterBuilder {
    commands.add(Pair(Action.overlaps, mapOf("column" to column, "value" to value)))
    return this
  }

  fun range(from: Long, to: Long, referencedTable: String?): SupabasePostgresTransformBuilder {
    return SupabasePostgresTransformBuilder(
      this
    ).range(
      from, to, referencedTable
    )
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

  @JvmOverloads
  fun select(column: String? = null): SupabasePostgresTransformBuilder {
    return SupabasePostgresTransformBuilder(
      this
    ).select(column)
  }

  fun single(): SupabasePostgresTransformBuilder {
    return SupabasePostgresTransformBuilder(
      this
    ).single()
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

  fun applyFilters(builder: PostgrestFilterBuilder) {
    commands.forEach { command ->
      when (command.first) {
        Action.containedBy -> {
          (command.second?.get("value") as? List<Any>)?.let {
            builder.contained(
              command.second?.get("column") as String,
              it
            )
          }
        }

        Action.contains -> {
          (command.second?.get("value") as? List<Any>)?.let {
            builder.contains(
              command.second?.get("column") as String,
              it
            )
          }
        }

        Action.eq -> {
          (command.second?.get("value"))?.let {
            builder.eq(
              command.second!!["column"] as String,
              it
            )
          }
        }

        Action.gt -> {
          (command.second?.get("value"))?.let {
            builder.gt(
              command.second!!["column"] as String,
              it
            )
          }
        }

        Action.gte -> {
          (command.second?.get("value"))?.let {
            builder.gt(
              command.second!!["column"] as String,
              it
            )
          }
        }

        Action.ilike -> {
          (command.second?.get("pattern") as? String)?.let {
            builder.ilike(
              command.second?.get("column") as String,
              it
            )
          }
        }

        Action.`in` -> {
          (command.second?.get("value") as? List<Any>)?.let {
            builder.isIn(
              command.second?.get("column") as String,
              it
            )
          }
        }

        Action.`is` -> {
          builder.exact(
            command.second?.get("column") as String,
            command.second!!["value"] as? Boolean
          )
        }

        Action.like -> {
          (command.second?.get("pattern") as? String)?.let {
            builder.like(
              command.second?.get("column") as String,
              it
            )
          }
        }

        Action.lt -> {
          (command.second?.get("value"))?.let {
            builder.lt(
              command.second!!["column"] as String,
              it
            )
          }
        }

        Action.lte -> {
          (command.second?.get("value"))?.let {
            builder.lte(
              command.second!!["column"] as String,
              it
            )
          }
        }

        Action.match -> {
          (command.second?.get("pattern") as? String)?.let {
            builder.match(
              command.second?.get("column") as String,
              it
            )
          }
        }

        Action.neq -> {
          (command.second?.get("value"))?.let {
            builder.neq(
              command.second!!["column"] as String,
              it
            )
          }
        }

        Action.not -> {
          when (
            command.second?.get("filter") as String
          ) {
            "eq" -> FilterOperator.EQ
            "neq" -> FilterOperator.NEQ
            "gt" -> FilterOperator.GT
            "gte" -> FilterOperator.GTE
            "lt" -> FilterOperator.LT
            "lte" -> FilterOperator.LTE
            "like" -> FilterOperator.LIKE
            "ilike" -> FilterOperator.ILIKE
            "is" -> FilterOperator.IS
            "in" -> FilterOperator.IN
            "cs" -> FilterOperator.CS
            "cd" -> FilterOperator.CD
            "sl" -> FilterOperator.SL
            "sr" -> FilterOperator.SR
            "nxl" -> FilterOperator.NXL
            "nxr" -> FilterOperator.NXR
            "adj" -> FilterOperator.ADJ
            "ov" -> FilterOperator.OV
            "fts" -> FilterOperator.FTS
            "plfts" -> FilterOperator.PLFTS
            "phfts" -> FilterOperator.PHFTS
            "wfts" -> FilterOperator.WFTS
            else -> null
          }?.let {
            builder.filterNot(
              command.second!!["column"] as String,
              it,
              command.second!!["value"]
            )
          }
        }

        Action.overlaps -> {
          (command.second?.get("value") as? List<Any>)?.let {
            builder.overlaps(
              command.second!!["column"] as String,
              it
            )
          }
        }

        Action.rangeAdjacent -> {
          (command.second?.get("range") as? String)?.let {
            val values = it.split(",")
            if (values.size >= 2) {
              builder.adjacent(
                command.second!!["column"] as String,
                Pair(values[0], values[1])
              )
            }
          }
        }

        Action.rangeGt -> {
          (command.second?.get("range") as? String)?.let {
            val values = it.split(",")
            if (values.size >= 2) {
              builder.rangeGt(
                command.second!!["column"] as String,
                Pair(values[0], values[1])
              )
            }
          }
        }

        Action.rangeGte -> {
          (command.second?.get("range") as? String)?.let {
            val values = it.split(",")
            if (values.size >= 2) {
              builder.rangeGte(
                command.second!!["column"] as String,
                Pair(values[0], values[1])
              )
            }
          }
        }

        Action.rangeLt -> {
          (command.second?.get("range") as? String)?.let {
            val values = it.split(",")
            if (values.size >= 2) {
              builder.rangeLt(
                command.second!!["column"] as String,
                Pair(values[0], values[1])
              )
            }
          }
        }

        Action.rangeLte -> {
          (command.second?.get("range") as? String)?.let {
            val values = it.split(",")
            if (values.size >= 2) {
              builder.rangeLte(
                command.second!!["column"] as String,
                Pair(values[0], values[1])
              )
            }
          }
        }

        Action.textSearch -> {
          (command.second?.get("type") as? String)?.let {
            builder.textSearch(
              command.second?.get("column") as String,
              command.second!!["query"] as String,
              when (it) {
                "plain" -> {
                  TextSearchType.PLAINTO
                }

                "phrase" -> {
                  TextSearchType.PHRASETO
                }

                "websearch" -> {
                  TextSearchType.WEBSEARCH
                }

                else -> {
                  TextSearchType.NONE
                }
              },
              command.second!!["config"] as? String
            )
          }
        }
      }
    }
  }


  private val scope = CoroutineScope(Dispatchers.Default + Job())

  fun execute(callback: ((JsonObject) -> Void)) {
    scope.launch {
      if (rpc != null) {
        val json = rpc!!.args?.let {
          try {
            Json.decodeFromString<JsonObject>(it)
          } catch (e: Exception) {
            null
          }
        }

        val jsonMap = mutableMapOf<String, JsonElement>()
        try {
          val response = json?.let {
            postgrest.rpc(rpc!!.fn, it) {
              rpc?.countOption?.let { count ->
                this.count(count.option)
              }

              if (rpc?.get == true) {
                this.method = RpcMethod.GET
              }

              if (rpc?.head == true) {
                this.method = RpcMethod.HEAD
              }

              this.filter {
                applyFilters(this)
              }
            }
          } ?: postgrest.rpc(rpc!!.fn) {
            rpc?.countOption?.let { count ->
              this.count(count.option)
            }
            if (rpc?.get == true) {
              this.method = RpcMethod.GET
            }

            if (rpc?.head == true) {
              this.method = RpcMethod.HEAD
            }

            this.filter {
              applyFilters(this)
            }
          }

          var earlyReturn = false
          if (response.countOrNull() != null) {
            jsonMap["count"] = JsonPrimitive(response.countOrNull()!!)
            earlyReturn = true
          }


          try {
            if (!earlyReturn) {
              val primitive = response.decodeAs<String>()
              jsonMap["data"] = JsonPrimitive(primitive)
              earlyReturn = true
            }
          } catch (_: Exception) {
          }

          try {
            if (!earlyReturn) {
              val arrayData = response.decodeAs<JsonArray>()
              jsonMap["data"] = arrayData
              earlyReturn = true
            }
          } catch (_: Exception) {
            try {
              val arrayData = response.decodeList<JsonPrimitive>()
              jsonMap["data"] = JsonArray(arrayData)
              earlyReturn = true
            } catch (_: Exception) {
            }
          }

          try {
            if (!earlyReturn) {
              val jsonData = response.decodeAsOrNull<JsonObject>()
              if (jsonData != null) {
                jsonMap["data"] = jsonData
                earlyReturn = true
              }
            }
          } catch (_: Exception) {
          }

          try {
            if (!earlyReturn) {
              val primitive = response.decodeSingleOrNull<JsonPrimitive>()
              if (primitive != null) {
                jsonMap["data"] = primitive
                earlyReturn = true
              }
            }
          } catch (_: Exception) {
          }

          if (!earlyReturn) {
            jsonMap["data"] = JsonPrimitive(response.data)
          }

          try {
            val data = Json.decodeFromString<JsonObject>(response.data)
            data["status"]?.let {
              jsonMap["status"] = it
            }

            data["statusCode"]?.let {
              jsonMap["statusCode"] = it
            }
          } catch (_: Exception) {
          }


          callback(
            JsonObject(jsonMap)
          )
        } catch (e: Exception) {
          val error = mutableMapOf<String, JsonElement>()
          (e as? RestException)?.let {
            error["status"] = JsonPrimitive(it.statusCode)
            error.put(
              "statusCode",
              JsonPrimitive(localizedStringForStatusCode(it.statusCode))
            )
          }
          jsonMap["error"] = JsonObject(error)

          callback(
            JsonObject(jsonMap)
          )

        }
      } else {
        if (query != null) {
          val jsonMap = mutableMapOf<String, JsonElement>()
          var statusCode: Int? = null
          try {
            var response = query?.insert?.let { insert ->
              (insert.value as? JsonArray)?.let { values ->
                query!!.builder.insert(
                  values
                ) {
                  this.defaultToNull = insert.defaultToNull ?: true
                  insert.count?.option?.let { count ->
                    this.count(count)
                  }
                  this.filter {
                    applyFilters(this)
                  }
                }
              }

                ?: (insert.value as? JsonObject)?.let { value ->
                  query!!.builder.insert(
                    value
                  ) {
                    this.defaultToNull = insert.defaultToNull ?: true
                    insert.count?.option?.let { count ->
                      this.count(count)
                    }
                    this.filter {
                      applyFilters(this)
                    }
                  }
                }

            }

            if (response != null && query?.insert != null) {
              statusCode = 201
            }

            if (response == null) {
              response = query?.update?.let { update ->
                (update.value as? JsonObject)?.let {
                  query!!.builder.update(
                    update.value
                  ) {
                    update.count?.option?.let { count ->
                      this.count(count)
                    }
                    this.filter {
                      applyFilters(this)
                    }
                  }
                }
              }
            }

            if (response != null && query?.update != null) {
              statusCode = 204
            }

            if (response == null) {
              response = query?.upsert?.let { upsert ->
                (upsert.value as? JsonObject?)?.let {
                  query!!.builder.upsert(
                    upsert.value,
                  ) {
                    upsert.ignoreDuplicates?.let {
                      this.ignoreDuplicates = it
                    }
                    this.onConflict = upsert.onConflict
                    upsert.count?.option?.let { count ->
                      this.count(count)
                    }
                    this.filter {
                      applyFilters(this)
                    }
                  }
                }
              }
            }

            if (response != null && query?.upsert != null) {
              statusCode = 201
            }

            if (response == null) {
              response = query?.delete?.let { delete ->
                query!!.builder.delete {
                  delete.count?.option?.let { count ->
                    this.count(count)
                  }
                  this.filter {
                    applyFilters(this)
                  }
                }
              }
            }

            if (response != null && query?.delete != null) {
              statusCode = 204
            }

            if (response == null) {
              response = query?.select?.let { select ->
                query!!.builder.select(
                  Columns.raw(select.column ?: "*")
                ) {
                  select.head?.let {
                    this.head = it
                  }
                  select.count?.option?.let { count ->
                    this.count(count)
                  }
                  this.filter {
                    applyFilters(this)
                  }
                }
              }
            }

            if (response != null && query?.select != null) {
              statusCode = 200
            }

            if (response == null) {
              // todo
              val error = mutableMapOf<String, JsonElement>()
              error["message"] = JsonPrimitive("Invalid request")
              jsonMap["error"] = JsonObject(error)
              return@launch
            }

            var earlyReturn = false
            if (response.countOrNull() != null) {
              jsonMap["count"] = JsonPrimitive(response.countOrNull()!!)
              earlyReturn = true
            }


            try {
              if (!earlyReturn) {
                val primitive = response.decodeAs<String>()
                jsonMap["data"] = JsonPrimitive(primitive)
                statusCode = 200
                earlyReturn = true
              }
            } catch (_: Exception) {
            }

            try {
              if (!earlyReturn) {
                val arrayData = response.decodeAs<JsonArray>()
                jsonMap["data"] = arrayData
                statusCode = 200
                earlyReturn = true
              }
            } catch (_: Exception) {
              try {
                val arrayData = response.decodeList<JsonPrimitive>()
                jsonMap["data"] = JsonArray(arrayData)
                statusCode = 200
                earlyReturn = true
              } catch (_: Exception) {
              }
            }

            try {
              if (!earlyReturn) {
                val jsonData = response.decodeAsOrNull<JsonObject>()
                if (jsonData != null) {
                  jsonMap["data"] = jsonData
                  statusCode = 200
                  earlyReturn = true
                }
              }
            } catch (_: Exception) {
            }

            try {
              if (!earlyReturn) {
                val primitive = response.decodeSingleOrNull<JsonPrimitive>()
                if (primitive != null) {
                  jsonMap["data"] = primitive
                  statusCode = 200
                  earlyReturn = true
                }
              }
            } catch (_: Exception) {
            }

            if (!earlyReturn && response.data.isNotEmpty()) {
              jsonMap["data"] = JsonPrimitive(response.data)
              statusCode = 200
            }

            if (query?.delete != null) {
              jsonMap["status"] = JsonPrimitive(204)
              jsonMap["statusText"] = JsonPrimitive(
                localizedStringForStatusCode(204)
              )
            } else {
              statusCode?.let {
                jsonMap["status"] = JsonPrimitive(it)
                jsonMap["statusText"] = JsonPrimitive(
                  localizedStringForStatusCode(it)
                )
              }
            }



            callback(
              JsonObject(jsonMap)
            )
          } catch (e: Exception) {
            val error = mutableMapOf<String, JsonElement>()
            (e as? RestException)?.let {
              error["status"] = JsonPrimitive(it.statusCode)
              error.put(
                "statusCode",
                JsonPrimitive(localizedStringForStatusCode(it.statusCode))
              )
            }
            jsonMap["error"] = JsonObject(error)

            callback(
              JsonObject(jsonMap)
            )

          }
        }
      }
    }
  }
}
