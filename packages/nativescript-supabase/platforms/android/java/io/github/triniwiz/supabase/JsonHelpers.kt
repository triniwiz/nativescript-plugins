package io.github.triniwiz.supabase

import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.boolean
import kotlinx.serialization.json.double
import kotlinx.serialization.json.float
import kotlinx.serialization.json.int
import kotlinx.serialization.json.jsonPrimitive
import kotlinx.serialization.json.long

class JsonHelpers {
  private enum class JsonKeyType {
    boolean,
    string,
    int,
    float,
    long,
    double,
    `object`,
    array,
    `null`
  }

  class JsonObject {
    private val contentType = mutableMapOf<String, JsonKeyType>()
    private val content = mutableMapOf<String, JsonElement>()

    val value: kotlinx.serialization.json.JsonObject by lazy {
      kotlinx.serialization.json.JsonObject(content)
    }

    fun keys(): MutableSet<String> {
      return content.keys
    }

    fun get(key: String): Any? {
      return when (contentType[key]) {
        JsonKeyType.boolean -> {
          return content[key]?.jsonPrimitive?.boolean
        }

        JsonKeyType.string -> {
          return content[key]?.jsonPrimitive?.content
        }

        JsonKeyType.int -> {
          return content[key]?.jsonPrimitive?.int
        }

        JsonKeyType.float -> {
          return content[key]?.jsonPrimitive?.float
        }

        JsonKeyType.long -> {
          return content[key]?.jsonPrimitive?.long
        }

        JsonKeyType.double -> {
          return content[key]?.jsonPrimitive?.double
        }

        JsonKeyType.`object` -> {
          return content[key]
        }

        JsonKeyType.array -> {
          return content[key]
        }

        JsonKeyType.`null` -> {
          return null
        }

        null -> null
      }
    }

    fun put(key: String, value: Boolean?) {
      content[key] = JsonPrimitive(value)
      contentType[key] = value?.let {
        JsonKeyType.boolean
      } ?: JsonKeyType.`null`
    }

    fun put(key: String, value: String?) {
      content[key] = JsonPrimitive(value)
      contentType[key] = value?.let {
        JsonKeyType.string
      } ?: JsonKeyType.`null`
    }

    fun put(key: String, value: Int?) {
      content[key] = JsonPrimitive(value)
      contentType[key] = value?.let {
        JsonKeyType.int
      } ?: JsonKeyType.`null`
    }

    fun put(key: String, value: Float?) {
      content[key] = JsonPrimitive(value)
      contentType[key] = value?.let {
        JsonKeyType.float
      } ?: JsonKeyType.`null`
    }

    fun put(key: String, value: Long?) {
      content[key] = JsonPrimitive(value)
      contentType[key] = value?.let {
        JsonKeyType.long
      } ?: JsonKeyType.`null`
    }

    fun put(key: String, value: Double?) {
      content[key] = JsonPrimitive(value)
      contentType[key] = value?.let {
        JsonKeyType.double
      } ?: JsonKeyType.`null`
    }

    fun put(key: String, value: JsonObject?) {
      content[key] = value?.value ?: JsonNull
      contentType[key] = value?.let {
        JsonKeyType.`object`
      } ?: JsonKeyType.`null`
    }

    fun put(key: String, value: JsonArray?) {
      content[key] = value?.value ?: JsonNull
      contentType[key] = value?.let {
        JsonKeyType.array
      } ?: JsonKeyType.`null`
    }

    fun has(key: String): Boolean {
      return content.containsKey(key)
    }

    fun clear() {
      content.clear()
      contentType.clear()
    }
  }

  class JsonArray {
    private val content = mutableListOf<JsonElement>()
    private val contentType = mutableListOf<JsonKeyType>()
    val value: kotlinx.serialization.json.JsonArray by lazy {
      kotlinx.serialization.json.JsonArray(content)
    }

    fun size(): Int {
      return content.size
    }

    fun get(index: Int): Any? {
      return when (contentType.getOrNull(index)) {
        JsonKeyType.boolean -> {
          return content.getOrNull(index)?.jsonPrimitive?.boolean
        }

        JsonKeyType.string -> {
          return content.getOrNull(index)?.jsonPrimitive?.content
        }

        JsonKeyType.int -> {
          return content.getOrNull(index)?.jsonPrimitive?.int
        }

        JsonKeyType.float -> {
          return content.getOrNull(index)?.jsonPrimitive?.float
        }

        JsonKeyType.long -> {
          return content.getOrNull(index)?.jsonPrimitive?.long
        }

        JsonKeyType.double -> {
          return content.getOrNull(index)?.jsonPrimitive?.double
        }

        JsonKeyType.`object` -> {
          return content.getOrNull(index)
        }

        JsonKeyType.array -> {
          return content.getOrNull(index)
        }

        JsonKeyType.`null` -> {
          return null
        }

        null -> null
      }
    }

    fun add(index: Int, value: Boolean?) {
      content.add(index, JsonPrimitive(value))
      contentType.add(index, value?.let {
        JsonKeyType.boolean
      } ?: JsonKeyType.`null`)
    }

    fun add(value: Boolean?) {
      content.add(JsonPrimitive(value))
      contentType.add(value?.let {
        JsonKeyType.boolean
      } ?: JsonKeyType.`null`)
    }


    fun add(index: Int, value: String?) {
      content.add(index, JsonPrimitive(value))
      contentType.add(index, value?.let {
        JsonKeyType.string
      } ?: JsonKeyType.`null`)
    }

    fun add(value: String?) {
      content.add(JsonPrimitive(value))
      contentType.add(value?.let {
        JsonKeyType.string
      } ?: JsonKeyType.`null`)
    }

    fun add(index: Int, value: Int?) {
      content.add(index, JsonPrimitive(value))
      contentType.add(index, value?.let {
        JsonKeyType.int
      } ?: JsonKeyType.`null`)
    }

    fun add(value: Int?) {
      content.add(JsonPrimitive(value))
      contentType.add(value?.let {
        JsonKeyType.int
      } ?: JsonKeyType.`null`)
    }

    fun add(index: Int, value: Float?) {
      content.add(index, JsonPrimitive(value))
      contentType.add(index, value?.let {
        JsonKeyType.float
      } ?: JsonKeyType.`null`)
    }

    fun add(key: String, value: Float?) {
      content.add(JsonPrimitive(value))
      contentType.add(value?.let {
        JsonKeyType.float
      } ?: JsonKeyType.`null`)
    }

    fun add(index: Int, value: Long?) {
      content.add(index, JsonPrimitive(value))
      contentType.add(index, value?.let {
        JsonKeyType.long
      } ?: JsonKeyType.`null`)
    }

    fun add(value: Long?) {
      content.add(JsonPrimitive(value))
      contentType.add(value?.let {
        JsonKeyType.long
      } ?: JsonKeyType.`null`)
    }

    fun add(index: Int, value: Double?) {
      content.add(index, JsonPrimitive(value))
      contentType.add(index, value?.let {
        JsonKeyType.double
      } ?: JsonKeyType.`null`)
    }

    fun add(value: Double?) {
      content.add(JsonPrimitive(value))
      contentType.add(value?.let {
        JsonKeyType.double
      } ?: JsonKeyType.`null`)
    }

    fun add(index: Int, value: JsonObject?) {
      content.add(index, value?.value ?: JsonNull)
      contentType.add(index, value?.let {
        JsonKeyType.`object`
      } ?: JsonKeyType.`null`)
    }

    fun add(value: JsonObject?) {
      content.add(value?.value ?: JsonNull)
      contentType.add(value?.let {
        JsonKeyType.`object`
      } ?: JsonKeyType.`null`)
    }

    fun add(index: Int, value: JsonArray?) {
      content.add(index, value?.value ?: JsonNull)
      contentType.add(index, value?.let {
        JsonKeyType.array
      } ?: JsonKeyType.`null`)
    }

    fun add(value: JsonArray?) {
      content.add(value?.value ?: JsonNull)
      contentType.add(value?.let {
        JsonKeyType.array
      } ?: JsonKeyType.`null`)
    }

    fun removeAt(index: Int) {
      content.removeAt(index)
      contentType.removeAt(index)
    }

    fun clear() {
      content.clear()
      contentType.clear()
    }
  }
}
