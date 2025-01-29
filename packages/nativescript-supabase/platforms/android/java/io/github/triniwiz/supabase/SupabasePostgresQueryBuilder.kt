package io.github.triniwiz.supabase

import io.github.jan.supabase.postgrest.query.PostgrestQueryBuilder

class SupabasePostgresQueryBuilder internal constructor(val builder: PostgrestQueryBuilder) {

  fun insert(
    value: Any,
    defaultToNull: Boolean?,
    count: SupabaseClient.CountOption?
  ): SupabasePostgresFilterBuilder {
    val builder = SupabasePostgresFilterBuilder(builder.postgrest)
    val query = SupabasePostgresFilterBuilder.Query(this.builder)
    query.insert = SupabasePostgresFilterBuilder.Query.Insert(
      value, defaultToNull, count
    )
    builder.query = query
    return builder
  }

  fun insertValues(
    values: List<Any>,
    defaultToNull: Boolean?,
    count: SupabaseClient.CountOption?
  ): SupabasePostgresFilterBuilder {
    val builder = SupabasePostgresFilterBuilder(builder.postgrest)
    val query = SupabasePostgresFilterBuilder.Query(this.builder)
    query.insert = SupabasePostgresFilterBuilder.Query.Insert(
      values, defaultToNull, count
    )
    builder.query = query
    return builder
  }

  fun update(value: Any, count: SupabaseClient.CountOption?): SupabasePostgresFilterBuilder {
    val builder = SupabasePostgresFilterBuilder(builder.postgrest)
    val query = SupabasePostgresFilterBuilder.Query(this.builder)
    query.update = SupabasePostgresFilterBuilder.Query.Update(
      value, count
    )
    builder.query = query
    return builder
  }

  fun upsert(
    value: Any,
    onConflict: String?,
    count: SupabaseClient.CountOption?,
    ignoreDuplicates: Boolean? = false
  ): SupabasePostgresFilterBuilder {
    val builder = SupabasePostgresFilterBuilder(builder.postgrest)
    val query = SupabasePostgresFilterBuilder.Query(this.builder)
    query.upsert = SupabasePostgresFilterBuilder.Query.Upsert(
      value, onConflict, count, ignoreDuplicates ?: false
    )
    builder.query = query
    return builder
  }

  fun delete(count: SupabaseClient.CountOption?): SupabasePostgresFilterBuilder {
    val builder = SupabasePostgresFilterBuilder(builder.postgrest)
    val query = SupabasePostgresFilterBuilder.Query(this.builder)
    query.delete = SupabasePostgresFilterBuilder.Query.Delete(
      count
    )
    builder.query = query
    return builder
  }

  @JvmOverloads
  fun select(
    column: String? = null,
    count: SupabaseClient.CountOption? = null,
    head: Boolean? = false
  ): SupabasePostgresFilterBuilder {
    val builder = SupabasePostgresFilterBuilder(builder.postgrest)
    val query = SupabasePostgresFilterBuilder.Query(this.builder)
    query.select = SupabasePostgresFilterBuilder.Query.Select(
      column, count, head
    )
    builder.query = query
    return builder
  }

}
