package io.github.triniwiz.supabase

import io.github.jan.supabase.auth.admin.AdminApi
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job

class SupabaseAuthAdmin internal constructor(adminApi: AdminApi){
  private val scope = CoroutineScope(Dispatchers.Default + Job())
}
