package com.github.triniwiz.couchbase

import com.couchbase.lite.ReplicatorConfiguration

class TNSReplicatorConfiguration {
  companion object {
    @JvmStatic
    fun setReplicatorType(type: String?, config: ReplicatorConfiguration) {
      try {
        val ReplicatorConfigurationClazz = Class.forName("com.couchbase.lite.ReplicatorConfiguration\$ReplicatorType")
        val PULL = ReplicatorConfigurationClazz.getDeclaredField("PULL")
        PULL.isAccessible = true
        val PUSH = ReplicatorConfigurationClazz.getDeclaredField("PUSH")
        PULL.isAccessible = true
        val PUSH_AND_PULL = ReplicatorConfigurationClazz.getDeclaredField("PUSH_AND_PULL")
        PUSH_AND_PULL.isAccessible = true
        val replicatorType: Any
        replicatorType = when (type) {
          "pull" -> PULL.getInt(null)
          "push" -> PUSH
          else -> PUSH_AND_PULL
        }
        val setReplicatorTypeMethod = ReplicatorConfigurationClazz.getDeclaredMethod("setReplicatorType", ReplicatorConfigurationClazz)
        setReplicatorTypeMethod.invoke(config, replicatorType)
      } catch (e: Exception) {
      }
    }
  }
}
