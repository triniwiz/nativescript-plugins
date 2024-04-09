package com.github.triniwiz.imagecacheit

import android.graphics.drawable.Drawable

/**
 * Created by triniwiz on 3/6/20
 */
interface EventsListener {
  fun onLoadStart()
  fun onLoadError(message: String?)
  fun onLoadedEnd(drawable: Drawable?)
}
