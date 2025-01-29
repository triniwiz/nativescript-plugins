package io.github.triniwiz.supabase

import io.github.jan.supabase.postgrest.query.filter.FilterOperation
import io.github.jan.supabase.postgrest.query.filter.FilterOperator
import io.github.jan.supabase.realtime.PostgresAction
import io.github.jan.supabase.realtime.RealtimeChannel
import io.github.jan.supabase.realtime.broadcastFlow
import io.github.jan.supabase.realtime.postgresChangeFlow
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive


class SupabaseChannel internal constructor(private val channel: RealtimeChannel) {
  private val scope = CoroutineScope(Dispatchers.Default + Job())

  companion object {
    val filterRegex =
      Regex("""(?<column>\w+)\s*=\s*(?<operator>eq|neq|gt|gte|lt|lte|like|match|ilike|imatch|is|in|cs|cd|sl|sr|nxl|nxr|adj|ov|fts|plfts|phfts|wfts)\.?(?<value>\(([^)]+)\)|\S+)""")

  }

  val status: RealtimeChannel.Status
    get() {
      return channel.status.value
    }


  private fun buildInsert(insert: PostgresAction.Insert, scheme: String): JsonObject {
    val ret = mutableMapOf<String, JsonElement>()
    ret["eventType"] = JsonPrimitive("INSERT")
    ret["scheme"] = JsonPrimitive(scheme)
    ret["commit_timestamp"] = JsonPrimitive(insert.commitTimestamp.toEpochMilliseconds())
    ret["new"] = insert.record
    ret["old"] = JsonObject(emptyMap())
    return JsonObject(ret)
  }

  private fun buildUpdate(update: PostgresAction.Update, scheme: String): JsonObject {
    val ret = mutableMapOf<String, JsonElement>()
    ret["eventType"] = JsonPrimitive("UPDATE")
    ret["scheme"] = JsonPrimitive(scheme)
    ret["commit_timestamp"] = JsonPrimitive(update.commitTimestamp.toEpochMilliseconds())
    ret["new"] = update.record
    ret["old"] = update.oldRecord
    return JsonObject(ret)
  }

  private fun buildDelete(delete: PostgresAction.Delete, scheme: String): JsonObject {
    val ret = mutableMapOf<String, JsonElement>()
    ret["eventType"] = JsonPrimitive("DELETE")
    ret["scheme"] = JsonPrimitive(scheme)
    ret["commit_timestamp"] = JsonPrimitive(delete.commitTimestamp.toEpochMilliseconds())
    ret["new"] = JsonObject(emptyMap())
    ret["old"] = delete.oldRecord
    return JsonObject(ret)
  }

  fun broadcast(event: String, message: String, callback: (Exception?) -> Void) {
    scope.launch {
      try {
        channel.broadcast(event, Json.decodeFromString(message))
        callback(null)
      } catch (e: Exception) {
        callback(e)
      }
    }
  }

  fun onBroadcast(event: String, callback: (String?) -> Void) {
    scope.launch {
      val flow = channel.broadcastFlow<JsonObject>(event)
      flow.collect {
        callback(it.toString())
      }
    }
  }

  fun onPresenceChange(event: String, callback: (String?) -> Void) {
    scope.launch {
      val flow = channel.presenceChangeFlow()
      flow.collect {
        when (event) {
          "join" -> {
            if (it.joins.isNotEmpty()) {
              val joins = mutableListOf<JsonElement>()
              for (join in it.joins.values) {
                val json = mutableMapOf<String, JsonElement>()
                json["ref"] = JsonPrimitive(join.presenceRef)
                json["state"] = join.state
                joins.add(JsonObject(json))
              }
              callback(JsonArray(joins).toString())
            }
          }

          "leave" -> {
            if (it.leaves.isNotEmpty()) {
              val leaves = mutableListOf<JsonObject>()
              for (join in it.leaves.values) {
                val json = mutableMapOf<String, JsonElement>()
                json["ref"] = JsonPrimitive(join.presenceRef)
                json["state"] = join.state
                leaves.add(JsonObject(json))
              }
              callback(JsonArray(leaves).toString())
            }
          }

          "sync" -> {
            callback("{}")
          }

          else -> {}
        }
      }
    }
  }

  fun onPostgresChange(
    event: String,
    scheme: String,
    table: String?,
    filter: String?,
    callback: (String?) -> Void
  ) {

    scope.launch {
      val filterValue = filter?.let { filterVal ->
        val match = filterRegex.find(filterVal)
        match?.let { match ->
          val column = match.groups["column"]?.value ?: return@let null
          val operator = match.groups["operator"]?.value?.let {
            when (it) {
              "eq" -> {
                FilterOperator.EQ
              }

              "neq" -> {
                FilterOperator.NEQ
              }

              "gt" -> {
                FilterOperator.GT
              }

              "gte" -> {
                FilterOperator.GTE
              }

              "lt" -> {
                FilterOperator.LT
              }

              "lte" -> {
                FilterOperator.LTE
              }

              "like" -> {
                FilterOperator.LIKE
              }

              "match" -> {
                FilterOperator.MATCH
              }

              "ilike" -> {
                FilterOperator.ILIKE
              }

              "imatch" -> {
                FilterOperator.IMATCH
              }

              "is" -> {
                FilterOperator.IS
              }

              "in" -> {
                FilterOperator.IN
              }

              "cs" -> {
                FilterOperator.CS
              }

              "cd" -> {
                FilterOperator.CD
              }

              "sl" -> {
                FilterOperator.SL
              }

              "sr" -> {
                FilterOperator.SR
              }

              "nxl" -> {
                FilterOperator.NXL
              }

              "nxr" -> {
                FilterOperator.NXR
              }

              "adj" -> {
                FilterOperator.ADJ
              }

              "ov" -> {
                FilterOperator.OV
              }

              "fts" -> {
                FilterOperator.FTS
              }

              "plfts" -> {
                FilterOperator.PLFTS
              }

              "phfts" -> {
                FilterOperator.PHFTS
              }

              "wfts" -> {
                FilterOperator.WFTS
              }

              else -> null
            }
          } ?: return@let null

          val value = match.groups["value"]?.value ?: "null"

          if (value.startsWith("(") && value.endsWith(")")) {
            val array = value.substring(1, value.length - 1).split(",")
            FilterOperation(column, operator, array)
          } else {
            FilterOperation(column, operator, value)
          }
        }
      }
      

      when (event) {
        "*" -> {
          channel.postgresChangeFlow<PostgresAction>(scheme) {
            this.table = table
            filterValue?.let {
              this.filter(it)
            }
          }.collect {
            when(it){
              is PostgresAction.Delete -> {
                val json = buildDelete(it, scheme)
                callback(json.toString())
              }
              is PostgresAction.Insert -> {
                val json = buildInsert(it, scheme)
                callback(json.toString())
              }
              is PostgresAction.Select -> {
                
              }
              is PostgresAction.Update -> {
                val json = buildUpdate(it, scheme)
                callback(json.toString())
              }
            }
           
          }
          

        }

        "INSERT" -> {
          channel.postgresChangeFlow<PostgresAction.Insert>(scheme) {
            this.table = table
            filterValue?.let {
              this.filter(it)
            }
          }.collect {
            val json = buildInsert(it, scheme)
            callback(json.toString())
          }
        }

        "UPDATE" -> {
          channel.postgresChangeFlow<PostgresAction.Update>(scheme) {
            this.table = table
            filterValue?.let {
              this.filter(it)
            }
          }.collect {
            val json = buildUpdate(it, scheme)
            callback(json.toString())
          }
        }

        "DELETE" -> {
          channel.postgresChangeFlow<PostgresAction.Delete>(scheme) {
            this.table = table
            filterValue?.let {
              this.filter(it)
            }
          }.collect {
            val json = buildDelete(it, scheme)
            callback(json.toString())
          }
        }
      }
    }
  }

  fun subscribe(callback: () -> Void) {
    scope.launch {
      channel.subscribe()
      callback()
    }
  }

  fun unsubscribe(callback: () -> Void) {
    scope.launch {
      channel.unsubscribe()
      callback()
    }
  }

  fun untrack(callback: () -> Void) {
    scope.launch {
      channel.untrack()
      callback()
    }
  }

}
