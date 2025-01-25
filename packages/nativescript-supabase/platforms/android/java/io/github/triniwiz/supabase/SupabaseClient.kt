package io.github.triniwiz.supabase


import android.content.Intent
import io.github.jan.supabase.auth.Auth
import io.github.jan.supabase.auth.auth
import io.github.jan.supabase.auth.handleDeeplinks
import io.github.jan.supabase.createSupabaseClient
import io.github.jan.supabase.functions.Functions
import io.github.jan.supabase.functions.functions
import io.github.jan.supabase.postgrest.Postgrest
import io.github.jan.supabase.postgrest.from
import io.github.jan.supabase.postgrest.postgrest
import io.github.jan.supabase.postgrest.query.Count
import io.github.jan.supabase.postgrest.result.PostgrestResult
import io.github.jan.supabase.postgrest.rpc
import io.github.jan.supabase.realtime.Realtime
import io.github.jan.supabase.realtime.channel
import io.github.jan.supabase.storage.Storage
import io.github.jan.supabase.storage.storage
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject

class SupabaseClient internal constructor(
  supabaseUrl: String,
  supabaseKey: String
) {


  enum class CountOption {
    exact,
    planned,
    estimated;

    val option: Count
      get() {
        return when (this) {
          exact -> Count.EXACT
          planned -> Count.PLANNED
          estimated -> Count.ESTIMATED
        }
      }

  }


  private val scope = CoroutineScope(Dispatchers.Default + Job())
  var client: io.github.jan.supabase.SupabaseClient =
    createSupabaseClient(supabaseUrl, supabaseKey) {
      install(Auth)
      install(Functions)
      install(Storage)
      install(Postgrest)
      install(Realtime)
    }

  fun handleURL(intent: Intent) {
    client.handleDeeplinks(intent)
  }

  val auth: SupabaseAuth by lazy { SupabaseAuth(client.auth) }
  val storage: SupabseStorage by lazy { SupabseStorage(client.storage) }
  val functions: SupabaseFunctions by lazy { SupabaseFunctions(client.functions) }

  private val channels = mutableListOf<SupabaseChannel>()

  fun channel(name: String): SupabaseChannel {
    val channel = SupabaseChannel(client.channel(name))
    channels.add(channel)
    return channel
  }

  fun removeChannel(channel: SupabaseChannel) {
    channels.remove(channel)
  }

  fun removeAllChannels(channel: SupabaseChannel) {
    channels.clear()
  }

  fun schema(schema: String): SupabasePostgresClient {
    return SupabasePostgresClient(this, schema)
  }

  fun from(table: String): SupabasePostgresQueryBuilder {
    return SupabasePostgresQueryBuilder(client.from(table))
  }

  @JvmOverloads
  fun rpc(
    fn: String,
    params: String? = null,
    countOption: CountOption? = null,
    callback: (JsonObject?) -> Void
  ): SupabasePostgresFilterBuilder {
    return SupabasePostgresFilterBuilder(
      client.postgrest, fn, params, null, null, countOption, callback
    )
  }

  companion object {
    @JvmStatic
    fun createClient(
      supabaseUrl: String,
      supabaseKey: String
    ): SupabaseClient {
      return SupabaseClient(supabaseUrl, supabaseKey)
    }
  }
}
