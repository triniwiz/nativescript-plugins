package com.github.triniwiz.imagecacheit

/**
 * Created by triniwiz on 3/6/20
 */
interface ProgressListener {
  fun onProgress(loaded: Long, total: Long, progress: Int, url: String?)
}
