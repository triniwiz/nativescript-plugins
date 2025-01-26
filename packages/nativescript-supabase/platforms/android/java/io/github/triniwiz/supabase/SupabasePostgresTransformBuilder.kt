package io.github.triniwiz.supabase

import android.util.Log
import io.github.jan.supabase.exceptions.RestException
import io.github.jan.supabase.postgrest.RpcMethod
import io.github.jan.supabase.postgrest.query.Columns
import io.github.jan.supabase.postgrest.query.Order
import io.github.jan.supabase.postgrest.query.PostgrestRequestBuilder
import io.github.triniwiz.supabase.SupabasePostgresFilterBuilder.Action
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

class SupabasePostgresTransformBuilder internal constructor(val filterBuilder: SupabasePostgresFilterBuilder) {

  enum class Action {
    csv,
    limit,
    maybeSingle,
    order,
    range,
    select,
    single
  }

  private val scope = CoroutineScope(Dispatchers.Default + Job())

  private var commands = mutableListOf<Pair<Action, Map<String, Any?>?>>()

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
      }
    }
  }


  fun execute(callback: ((JsonObject) -> Void)) {
    scope.launch {
      if (filterBuilder.rpc != null) {
        val json = filterBuilder.rpc!!.args?.let {
          try {
            Json.decodeFromString<JsonObject>(it)
          } catch (e: Exception) {
            null
          }
        }

        val jsonMap = mutableMapOf<String, JsonElement>()
        try {
          val response = json?.let {
            filterBuilder.postgrest.rpc(filterBuilder.rpc!!.fn, it) {
              filterBuilder.rpc?.countOption?.let { count ->
                this.count(count.option)
              }

              if (filterBuilder.rpc?.get == true) {
                this.method = RpcMethod.GET
              }

              if (filterBuilder.rpc?.head == true) {
                this.method = RpcMethod.HEAD
              }

              this.filter {
                filterBuilder.applyFilters(this)
              }
              applyTransformation(this)
            }
          } ?: filterBuilder.postgrest.rpc(filterBuilder.rpc!!.fn) {
            filterBuilder.rpc?.countOption?.let { count ->
              this.count(count.option)
            }
            if (filterBuilder.rpc?.get == true) {
              this.method = RpcMethod.GET
            }

            if (filterBuilder.rpc?.head == true) {
              this.method = RpcMethod.HEAD
            }

            this.filter {
              filterBuilder.applyFilters(this)
            }
            applyTransformation(this)
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
        if (filterBuilder.query != null) {
          var statusCode: Int? = null
          val jsonMap = mutableMapOf<String, JsonElement>()
          try {
            var response = filterBuilder.query?.insert?.let { insert ->
              (insert.values as? JsonArray)?.let { values ->
                filterBuilder.query!!.builder.insert(
                  values
                ) {
                  this.defaultToNull = insert.defaultToNull ?: true
                  insert.count?.option?.let { count ->
                    this.count(count)
                  }
                  this.filter {
                    filterBuilder.applyFilters(this)
                  }
                  applyTransformation(this)
                }
              }

                ?: (insert.value as? JsonObject)?.let { value ->
                  filterBuilder.query!!.builder.insert(
                    value
                  ) {
                    this.defaultToNull = insert.defaultToNull ?: true
                    insert.count?.option?.let { count ->
                      this.count(count)
                    }
                    this.filter {
                      filterBuilder.applyFilters(this)
                    }
                    applyTransformation(this)
                  }
                }

            }
            if (response != null && filterBuilder.query?.insert != null){
              statusCode = 201
            }

            if (response == null) {
              response = filterBuilder.query?.update?.let { update ->
                (update.value as? JsonObject)?.let {
                  filterBuilder.query!!.builder.update(
                    update.value
                  ) {
                    update.count?.option?.let { count ->
                      this.count(count)
                    }
                    this.filter {
                      filterBuilder.applyFilters(this)
                    }
                    applyTransformation(this)
                  }
                }
              }
            }

            if (response != null  && filterBuilder.query?.update != null){
              statusCode = 204
            }

            if (response == null) {
              response = filterBuilder.query?.upsert?.let { upsert ->
                (upsert.value as? JsonObject)?.let {
                  filterBuilder.query!!.builder.upsert(
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
                      filterBuilder.applyFilters(this)
                    }
                    applyTransformation(this)
                  }
                }
              }
            }

            if (response != null  && filterBuilder.query?.upsert != null){
              statusCode = 201
            }

            if (response == null) {
              response = filterBuilder.query?.delete?.let { delete ->
                filterBuilder.query!!.builder.delete {
                  delete.count?.option?.let { count ->
                    this.count(count)
                  }
                  this.filter {
                    filterBuilder.applyFilters(this)
                  }
                  applyTransformation(this)
                }
              }
            }

            if (response != null &&  filterBuilder.query?.delete != null){
              statusCode = 204
            }

            if (response == null) {
              response = filterBuilder.query?.select?.let { select ->
                filterBuilder.query!!.builder.select(
                  Columns.raw(select.column ?: "*")
                ) {
                  select.head?.let {
                    this.head = it
                  }
                  select.count?.option?.let { count ->
                    this.count(count)
                  }
                  this.filter {
                    filterBuilder.applyFilters(this)
                  }
                  applyTransformation(this)
                }
              }
            }

            if (response != null  && filterBuilder.query?.select != null){
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

            if (filterBuilder.query?.insert != null) {
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
