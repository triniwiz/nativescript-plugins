package io.github.triniwiz.supabase

import io.ktor.client.call.body
import io.ktor.client.statement.HttpResponse
import io.ktor.client.statement.bodyAsChannel
import io.ktor.client.statement.bodyAsText
import io.ktor.http.contentLength
import io.ktor.utils.io.core.readFully
import io.ktor.utils.io.readBuffer
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import java.nio.ByteBuffer

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
