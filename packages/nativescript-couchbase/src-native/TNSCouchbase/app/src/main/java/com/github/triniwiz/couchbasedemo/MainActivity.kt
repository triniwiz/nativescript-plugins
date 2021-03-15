package com.github.triniwiz.couchbasedemo

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import com.couchbase.lite.CouchbaseLite
import com.couchbase.lite.Database
import com.couchbase.lite.DatabaseConfiguration
import com.github.triniwiz.couchbase.Couchbase

class MainActivity : AppCompatActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)
    CouchbaseLite.init(this)
    val config = DatabaseConfiguration()
    val db = Database("test-db", config)
    Log.d("com.test", "${Couchbase.fromJSON("""
      {"name":"Null Test","null_value":null}
    """.trimIndent())}")
  }
}
