package com.github.triniwiz.couchbase

import android.annotation.SuppressLint
import com.couchbase.lite.*
import com.couchbase.lite.Array
import com.couchbase.lite.Dictionary
import org.json.JSONArray
import org.json.JSONObject
import java.text.SimpleDateFormat
import java.util.*

class Couchbase {
  companion object {

    @JvmStatic
    fun getDocument(database: Database, id: String?): String? {
      return id?.let {
        database.getDocument(it)?.let {
          return toJSON(it)
        } ?: run {
          null
        }
      } ?: run {
        null
      }
    }


    @JvmStatic
    fun getDocuments(database: Database, ids: kotlin.Array<String>): String {
      val args = mutableListOf<Expression>()
      ids.forEach {
        args.add(Expression.string(it))
      }
      return queryResultsToJSON(QueryBuilder.select(SelectResult.all(), SelectResult.expression(Meta.id)).from(DataSource.database(database)).where(
        Meta.id.`in`(*args.toTypedArray())
      ), true)
    }


    @JvmStatic
    fun queryResultsToJSON(query: Query, isAll: Boolean): String {
      val json = JSONArray()
      try {
        query.execute().allResults().forEach { item ->
          val keys = item.keys
          val obj = JSONObject()
          for (key in keys) {
            val nativeItem = item.getValue(key)
            if (isAll && nativeItem as? Dictionary != null) {
              (nativeItem as? Dictionary)?.let {
                for (cblKey in it.keys) {
                  obj.put(cblKey, deserialize(nativeItem.getValue(cblKey)))
                }
              }
            } else {
              obj.put(key, deserialize(nativeItem))
            }
          }
          json.put(obj)
        }
      } catch (e: java.lang.Exception) {
      }
      return json.toString()
    }

    @JvmStatic
    fun toJSON(document: Document): String? {
      val json = JSONObject()
      return try {
        json.put("id", document.id)
        json.put("revisionID", document.revisionID)
        for (key in document.keys) {
          json.put(key, deserialize(document.getValue(key)))
        }
        json.toString()
      } catch (e: Exception) {
        null
      }
    }

    @JvmStatic
    fun fromJSON(json: String, id: String?): MutableDocument? {
      return try {
        val doc = id?.let {
          MutableDocument(id)
        } ?: MutableDocument()
        val jsonObject = JSONObject(json)
        for (key in jsonObject.keys()) {
          serialize(jsonObject[key], doc, key)
        }
        doc
      } catch (e: Exception) {
        null
      }
    }

    @JvmStatic
    fun updateFromJSON(database: Database, json: String, id: String): Boolean {
      return updateFromJSON(database, json, id, ConcurrencyControl.LAST_WRITE_WINS)
    }

    @JvmStatic
    fun updateFromJSON(database: Database, json: String, id: String, concurrencyMode: ConcurrencyControl): Boolean {
      return database.getDocument(id)?.let {
        return try {
          val jsonObject = JSONObject(json)
          val doc = it.toMutable()
          for (key in jsonObject.keys()) {
            serialize(jsonObject[key], doc, key)
          }
          database.save(doc, concurrencyMode)
        } catch (e: java.lang.Exception) {
          false
        }
      } ?: false
    }

    @JvmStatic
    fun saveFromJSON(database: Database, json: String, id: String?): String? {
      return saveFromJSON(database, json, id, ConcurrencyControl.LAST_WRITE_WINS)
    }

    @JvmStatic
    fun saveFromJSON(database: Database, json: String, id: String?, concurrencyMode: ConcurrencyControl): String? {
      return fromJSON(json, id)?.let {
        return try {
          val saved = database.save(it, concurrencyMode)
          if (saved) {
            it.id
          } else {
            null
          }
        } catch (e: CouchbaseLiteException) {
          null
        }
      }
    }

    @JvmStatic
    private var _dateFormat: SimpleDateFormat? = null

    @JvmStatic
    private val dateFormat: SimpleDateFormat
      @SuppressLint("SimpleDateFormat")
      get() {
        if (_dateFormat == null) {
          _dateFormat = SimpleDateFormat(
            "yyyy-MM-dd\"T\"HH:mm:ss.SSS"
          ).apply {
            timeZone = TimeZone.getTimeZone("UTC")
          }
        }
        return _dateFormat!!
      }


    private fun serializeObject(item: Any?, dictionary: MutableDictionary, key: String) {
      item?.let {
        when (item) {
          is JSONArray -> {
            item.let {
              val array = MutableArray()
              for (i in 0 until it.length()) {
                serializeArray(it[i], array)
              }
              dictionary.setArray(key, array)
            }
          }
          is JSONObject -> {
            item.let {
              val dict = MutableDictionary()
              for (dictKey in it.keys()) {
                serializeObject(it[dictKey], dict, dictKey)
              }
              dictionary.setDictionary(key, dict)
            }
          }
          else -> {
            (item as? String)?.let {
              item.let {
                (fromISO8601UTC(it))?.let { date ->
                  dictionary.setDate(key, date)
                } ?: run {
                  dictionary.setString(key, it)
                }
              }
            } ?: (item as? Boolean)?.let {
              item.let {
                dictionary.setBoolean(key, it)
              }
            } ?: (item as? Short)?.let {
              dictionary.setInt(key, it.toInt())
            } ?: (item as? Long)?.let {
              dictionary.setLong(key, it)
            } ?: (item as? Double)?.let {
              dictionary.setDouble(key, it)
            } ?: (item as? Long)?.let {
              dictionary.setLong(key, it)
            } ?: run {
              dictionary.setValue(key, item)
            }
          }
        }
      } ?: run {
        dictionary.setValue(key, null)
      }
    }

    private fun serializeArray(item: Any?, array: MutableArray) {
      when (item) {
        is JSONArray -> {
          item.let {
            val nestedArray = MutableArray()
            for (i in 0 until it.length()) {
              serializeArray(it[i], array)
            }
            array.addArray(nestedArray)
          }
        }
        is JSONObject -> {
          item.let {
            val dictionary = MutableDictionary()
            for (key in it.keys()) {
              serializeObject(it[key], dictionary, key)
            }
            array.addDictionary(dictionary)
          }
        }
        else -> {
          item?.let {
            (item as? String)?.let {
              item.let {
                (fromISO8601UTC(it))?.let { date ->
                  array.addDate(date)
                } ?: run {
                  array.addString(it)
                }
              }
            } ?: (item as? Boolean)?.let {
              item.let {
                array.addBoolean(it)
              }
            } ?: (item as? Short)?.let {
              array.addInt(it.toInt())
            } ?: (item as? Long)?.let {
              array.addLong(it)
            } ?: (item as? Double)?.let {
              array.addDouble(it)
            } ?: (item as? Long)?.let {
              array.addLong(it)
            } ?: run {
              array.addValue(item)
            }
          } ?: run {
            array.addValue(null)
          }
        }
      }
    }

    private fun toISO8601UTC(date: Date): String? {
      return try {
        dateFormat.format(date)
      } catch (e: java.lang.Exception) {
        null
      }
    }

    private fun fromISO8601UTC(date: String): Date? {
      return try {
        dateFormat.parse(date)
      } catch (e: java.lang.Exception) {
        null
      }
    }

    private fun serialize(item: Any?, doc: MutableDocument, key: String) {
      when (item) {
        is JSONArray -> {
          item.let {
            val array = MutableArray()

            for (i in 0 until it.length()) {
              serializeArray(it[i], array)
            }
            doc.setArray(key, array)
          }
        }
        is JSONObject -> {
          item.let {
            val dict = MutableDictionary()
            for (dictKey in it.keys()) {
              serializeObject(it[dictKey], dict, dictKey)
            }
            doc.setDictionary(key, dict)
          }
        }
        else -> {
          item?.let {
            (item as? String)?.let {
              item.let {
                (fromISO8601UTC(it))?.let { date ->
                  doc.setDate(key, date)
                } ?: run {
                  doc.setString(key, it)
                }
              }
            } ?: (item as? Boolean)?.let {
              item.let {
                doc.setBoolean(key, it)
              }
            } ?: (item as? Short)?.let {
              doc.setInt(key, it.toInt())
            } ?: (item as? Long)?.let {
              doc.setLong(key, it)
            } ?: (item as? Double)?.let {
              doc.setDouble(key, it)
            } ?: (item as? Long)?.let {
              doc.setLong(key, it)
            } ?: run {
              doc.setValue(key, item)
            }
          } ?: run {
            doc.setValue(key, null)
          }
        }
      }
    }

    private fun deserialize(data: Any?): Any? {
      return when (data) {
        is Array -> {
          val jsonArray = JSONArray()
          for (i in data) {
            jsonArray.put(deserialize(i))
          }
          return jsonArray
        }
        is Dictionary -> {
          val json = JSONObject()
          for (key in data.keys) {
            val value = data.getValue(key)
            json.put(key, deserialize(value))
          }
          return json
        }
        else -> {
          data?.let { it ->
            (it as? String) ?: (it as? Boolean) ?: (it as? Short) ?: (it as? Int) ?: (it as? Long)
            ?: (it as? Float) ?: (it as? Double) ?: (it as? Date)
            ?: (it as? Date)?.let {
              toISO8601UTC(it)
            } ?: run {
              null
            }
          }
        }
      }
    }
  }
}
