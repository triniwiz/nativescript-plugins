package io.github.triniwiz.supabase

import io.github.jan.supabase.postgrest.Postgrest
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job

class SupabasePostgres internal constructor(val postgres: Postgrest){
  private val scope = CoroutineScope(Dispatchers.Default + Job())
}
