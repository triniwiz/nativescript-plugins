package io.github.triniwiz.supabase

import android.util.Log
import io.github.jan.supabase.exceptions.RestException
import io.github.jan.supabase.postgrest.Postgrest
import io.github.jan.supabase.postgrest.RpcMethod
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

class SupabasePostgresFilterBuilder {
  internal var postgrest: Postgrest
  internal var rpc: Rpc? = null


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
    internal var callback: (JsonObject) -> Void
  )

  class Query internal constructor() {}

  internal constructor(
    postgrest: Postgrest,
    fn: String,
    args: String? = null,
    get: Boolean? = null,
    head: Boolean? = null,
    countOption: CountOption? = null,
    callback: (JsonObject) -> Void
  ) {
    this.postgrest = postgrest
    this.rpc = Rpc(fn, args, get, head, countOption, callback)
  }


  private val scope = CoroutineScope(Dispatchers.Default + Job())


  fun execute(callback: ((JsonObject) -> Void)?) {
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


          if (callback != null) {
            callback(
              JsonObject(jsonMap)
            )
          } else {
            rpc?.callback?.let {
              it(
                JsonObject(jsonMap)
              )
            }
          }
        } catch (e: Exception) {
          val error = mutableMapOf<String, JsonElement>()
          (e as? RestException)?.let {
            error["status"] = JsonPrimitive(it.statusCode)
            error.put("statusCode", JsonPrimitive(localizedStringForStatusCode(it.statusCode)))
          }
          jsonMap["error"] = JsonObject(error)

          if (callback != null) {
            callback(
              JsonObject(jsonMap)
            )
          } else {
            rpc?.callback?.let {
              it(
                JsonObject(jsonMap)
              )
            }
          }

        }
      }
    }
  }
}
