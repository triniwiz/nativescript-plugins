package io.github.triniwiz.plugins.pdf

class JNIHelpers {
  companion object {
    @JvmStatic
    fun pairFirst(pair: android.util.Pair<Boolean, String>): Boolean {
      return pair.first
    }

    @JvmStatic
    fun pairSecond(pair: android.util.Pair<Boolean, String>): String {
      return pair.second
    }
  }
}
