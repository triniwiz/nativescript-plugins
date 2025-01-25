package io.github.triniwiz.supabase

import io.github.jan.supabase.postgrest.from
import io.github.jan.supabase.postgrest.postgrest
import io.github.triniwiz.supabase.SupabaseClient.CountOption
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.serialization.json.JsonObject

class SupabasePostgresClient internal constructor(val client: SupabaseClient, val schema: String?) {
  private val scope = CoroutineScope(Dispatchers.Default + Job())

  fun from(table: String): SupabasePostgresQueryBuilder {
    val query = schema?.let {
      client.client.from(it, table)
    } ?: client.client.from(table)
    return SupabasePostgresQueryBuilder(query)
  }

  fun schema(schema: String): SupabasePostgresClient {
    return SupabasePostgresClient(client, schema)
  }

  @JvmOverloads
  fun rpc(
    fn: String,
    args: String? = null,
    get: Boolean? = null,
    head: Boolean? = null,
    countOption: CountOption? = null,
    callback: (JsonObject) -> Void
  ): SupabasePostgresFilterBuilder {
    return SupabasePostgresFilterBuilder(
      client.client.postgrest,
      fn,
      args,
      get,
      head,
      countOption,
      callback
    )
  }
}
