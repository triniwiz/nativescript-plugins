import {GoTrueClient} from '@triniwiz/nativescript-supabase-gotrue'

export class SupabaseAuthClient extends GoTrueClient {
  constructor(options: {
    url?: string
    headers?: { [key: string]: string }
    detectSessionInUrl?: boolean
    autoRefreshToken?: boolean
    persistSession?: boolean
    localStorage?: Storage
  }) {
    super(options)
  }
}
