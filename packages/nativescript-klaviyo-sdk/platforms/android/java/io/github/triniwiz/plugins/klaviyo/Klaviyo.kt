package io.github.triniwiz.plugins.klaviyo

import com.klaviyo.forms.registerForInAppForms
class Klaviyo {

  companion object {
    @JvmStatic
    fun registerForInAppForms() {
      com.klaviyo.analytics.Klaviyo.registerForInAppForms()
    }
  }
}
