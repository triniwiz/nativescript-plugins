package io.github.triniwiz.supabase

import io.github.jan.supabase.functions.Functions
import io.ktor.client.call.body
import io.ktor.client.request.setBody
import io.ktor.client.statement.HttpResponse
import io.ktor.client.statement.bodyAsChannel
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpMethod
import io.ktor.http.contentLength
import io.ktor.http.contentType
import io.ktor.util.reflect.TypeInfo
import io.ktor.utils.io.core.read
import io.ktor.utils.io.core.readFully
import io.ktor.utils.io.read
import io.ktor.utils.io.readBuffer
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.decodeFromStream
import java.nio.ByteBuffer
import java.nio.channels.Channels
import java.nio.channels.WritableByteChannel

class SupabaseFunctions internal constructor(private val functions: Functions) {
  private val scope = CoroutineScope(Dispatchers.Default + Job())

  class InvokeOptions constructor() {
    internal var _method: HttpMethod? = null
    var method: String?
      get() {
        return when (_method) {
          HttpMethod.Post -> {
            return "POST"
          }

          HttpMethod.Get -> {
            return "GET"
          }

          HttpMethod.Put -> {
            return "PUT"
          }

          HttpMethod.Delete -> {
            return "DELETE"
          }

          HttpMethod.Patch -> {
            return "PATCH"
          }

          else -> null
        }
      }
      set(value) {
        when (value) {
          "POST" -> {
            _method = HttpMethod.Post
          }

          "GET" -> {
            _method = HttpMethod.Get
          }

          "PUT" -> {
            _method = HttpMethod.Put
          }

          "DELETE" -> {
            _method = HttpMethod.Delete
          }

          "PATCH" -> {
            _method = HttpMethod.Patch
          }

          else -> {
            _method = null
          }
        }
      }


    var headers: Map<String, String>? = null

    var fileBody: ByteBuffer? = null

    var jsonBody: JsonObject? = null

    constructor(fileBody: ByteBuffer) : this() {
      this.fileBody = fileBody
    }

    constructor(json: String) : this() {
      try {
        this.jsonBody = Json.decodeFromString(json)
      } catch (_: Exception) {
      }
    }
  }

  fun invoke(
    functionName: String,
    options: InvokeOptions? = null,
    callback: (HttpResponse?, Exception?) -> Void
  ) {
    scope.launch {
      try {
        val response = functions.invoke(functionName) {
          options?.let {
            it._method?.let { method ->
              this.method = method
            }

            var hasContentType = false
            it.headers?.let { headers ->
              hasContentType = headers.containsKey(HttpHeaders.ContentType)
              headers.forEach { entry ->
                this.headers.append(entry.key, entry.value)
              }
            }

            it.jsonBody?.let { json ->
              this.setBody(json)
              if (!hasContentType) {
                this.headers.append(HttpHeaders.ContentType, "application/json")
              }
            }

            it.fileBody?.let { file ->
              this.setBody(file)
            }


          }
        }
        callback(response, null)
      } catch (e: Exception) {
        callback(null, e)
      }
    }
  }
}


fun HttpResponse.toBuffer(callback: (ByteBuffer?, Exception?) -> Void) {
  val response = this

  val scope = CoroutineScope(Dispatchers.Default + Job())
  scope.launch {
    try {
      response.contentLength()?.let { length ->
        val buffer = ByteBuffer.allocateDirect(length.toInt())
        val buf = response.bodyAsChannel().readBuffer()
        buf.readFully(buffer)
        callback(buffer, null)
      } ?: callback(null, null)
    } catch (e: Exception) {
      callback(null, e)
    }
  }
}

fun HttpResponse.toJSON(callback: (JsonElement?, Exception?) -> Void) {
  val response = this
  val scope = CoroutineScope(Dispatchers.Default + Job())
  scope.launch {
    var ret: JsonElement? = null
    try {
      ret = response.body<JsonArray>()
      callback(ret, null)
    } catch (_: Exception) {
      try {
        ret = response.body<JsonObject>()
        callback(ret, null)
      } catch (e: Exception) {
        callback(null, e)
      }
    }
  }
}

fun HttpResponse.toText(callback: (String?, Exception?) -> Void) {
  val response = this
  val scope = CoroutineScope(Dispatchers.Default + Job())
  scope.launch {
    try {
      val ret = response.bodyAsText()
      callback(ret, null)
    } catch (e: Exception) {
      callback(null, e)
    }
  }
}
