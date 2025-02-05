package io.github.triniwiz.supabase

import io.github.jan.supabase.exceptions.RestException
import io.github.jan.supabase.postgrest.Postgrest
import io.github.jan.supabase.postgrest.RpcMethod
import io.github.jan.supabase.postgrest.query.Columns
import io.github.jan.supabase.postgrest.query.Order
import io.github.jan.supabase.postgrest.query.PostgrestQueryBuilder
import io.github.jan.supabase.postgrest.query.PostgrestRequestBuilder
import io.github.jan.supabase.postgrest.query.filter.FilterOperator
import io.github.jan.supabase.postgrest.query.filter.PostgrestFilterBuilder
import io.github.jan.supabase.postgrest.query.filter.TextSearchType
import io.github.triniwiz.supabase.SupabaseClient.CountOption
import io.github.triniwiz.supabase.SupabasePostgresFilterBuilder.Companion.localizedStringForStatusCode
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive

open class SupabasePostgresTransformBuilder internal constructor(
  internal var postgrest: Postgrest,
  fn: String? = null,
  args: String? = null,
  get: Boolean? = null,
  head: Boolean? = null,
  countOption: CountOption? = null
) {
  internal var rpc: Rpc? = null
  internal var query: Query? = null


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
    textSearch,

      // transform
    csv,
    limit,
    maybeSingle,
    order,
    range,
    select,
    single
  }

  private val scope = CoroutineScope(Dispatchers.Default + Job())

  internal var commands = mutableListOf<Pair<Action, Map<String, Any?>?>>()

  fun csv(): SupabasePostgresTransformBuilder {
    commands.add(Pair(Action.csv, null))
    return this
  }

  fun limit(count: Long): SupabasePostgresTransformBuilder {
    commands.add(Pair(Action.limit, mapOf("count" to count)))
    return this
  }

  fun maybeSingle(): SupabasePostgresTransformBuilder {
    commands.add(Pair(Action.maybeSingle, null))
    return this
  }

  fun single(): SupabasePostgresTransformBuilder {
    commands.add(Pair(Action.single, null))
    return this
  }

  fun order(
    column: String,
    ascending: Boolean?,
    nullsFirst: Boolean?,
    referencedTable: String?
  ): SupabasePostgresTransformBuilder {
    commands.add(
      Pair(
        Action.order,
        mapOf(
          "column" to column,
          "ascending" to (ascending ?: true),
          "nullsFirst" to (nullsFirst ?: false),
          "referencedTable" to referencedTable
        )
      )
    )
    return this
  }

  fun range(from: Long, to: Long, referencedTable: String?): SupabasePostgresTransformBuilder {
    commands.add(
      Pair(
        Action.range,
        mapOf(
          "from" to from,
          "to" to to,
          "referencedTable" to referencedTable
        )
      )
    )
    return this
  }

  fun select(column: String?): SupabasePostgresTransformBuilder {
    commands.add(
      Pair(
        Action.select,
        mapOf(
          "column" to column,
        )
      )
    )
    return this
  }

  private fun applyTransformation(builder: PostgrestRequestBuilder) {
    commands.forEach { command ->
      when (command.first) {
        Action.csv -> {
          builder.csv()
        }

        Action.limit -> {
          command.second?.get("limit")?.let { count ->
            (count as? Long)?.let {
              builder.limit(it)
            }
          }
        }

        Action.maybeSingle -> {
          builder.single()
        }

        Action.order -> {
          builder.order(
            command.second?.get("column") as String,
            if (
              command.second?.get("ascending") as Boolean
            ) {
              Order.ASCENDING
            } else {
              Order.DESCENDING
            },
            command.second?.get("nullsFirst") as Boolean,
            command.second?.get("referencedTable") as? String,
          )
        }

        Action.range -> {
          builder.range(
            command.second?.get("from") as Long,
            command.second?.get("to") as Long,
            command.second?.get("referencedTable") as? String
          )
        }

        Action.select -> {
          val column = command.second?.get("column") as? String
          builder.select(
            column?.let {
              Columns.raw(it)
            } ?: Columns.ALL
          )
        }

        Action.single -> {
          builder.single()
        }

        else -> {}
      }
    }
  }


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
              applyTransformation(this)
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
            applyTransformation(this)
          }

          var earlyReturn = false
          if (response.countOrNull() != null) {
            jsonMap["count"] = JsonPrimitive(response.countOrNull()!!)
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
          var statusCode: Int? = null
          val jsonMap = mutableMapOf<String, JsonElement>()
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
                  applyTransformation(this)
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
                    applyTransformation(this)
                  }
                }

            }
            if (response != null && query?.insert != null){
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
                    applyTransformation(this)
                  }
                }
              }
            }

            if (response != null  && query?.update != null){
              statusCode = 204
            }

            if (response == null) {
              response = query?.upsert?.let { upsert ->
                (upsert.value as? JsonObject)?.let {
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
                    applyTransformation(this)
                  }
                }
              }
            }

            if (response != null  && query?.upsert != null){
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
                  applyTransformation(this)
                }
              }
            }

            if (response != null &&  query?.delete != null){
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
                  applyTransformation(this)
                }
              }
            }

            if (response != null  && query?.select != null){
              statusCode = 200
            }

            if (response == null) {
              // todo
              val error = mutableMapOf<String, JsonElement>()
              error["message"] = JsonPrimitive("Invalid request")
              jsonMap["error"] = JsonObject(error)
              callback(
                JsonObject(jsonMap)
              )
              return@launch
            }


            var earlyReturn = false
            if (response.countOrNull() != null) {
              jsonMap["count"] = JsonPrimitive(response.countOrNull()!!)
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

            if (query?.insert != null) {
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

  private fun applyFilters(builder: PostgrestFilterBuilder) {
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

        Action.csv -> {}
        Action.limit -> {}
        Action.maybeSingle -> {}
        Action.order -> {}
        Action.range -> {}
        Action.select -> {}
        Action.single -> {}
      }
    }
  }

  init {
    fn?.let {
      this.rpc = Rpc(fn, args, get, head, countOption)
    }
  }
}
