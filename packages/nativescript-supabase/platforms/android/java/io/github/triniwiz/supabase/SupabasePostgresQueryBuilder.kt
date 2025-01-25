package io.github.triniwiz.supabase

import io.github.jan.supabase.postgrest.Postgrest
import io.github.jan.supabase.postgrest.query.PostgrestQueryBuilder
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job

class SupabasePostgresQueryBuilder internal constructor(val query: PostgrestQueryBuilder){
  private val scope = CoroutineScope(Dispatchers.Default + Job())
}
