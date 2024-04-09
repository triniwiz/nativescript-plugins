package com.github.triniwiz.imagecacheit

/**
 * Created by triniwiz on 3/5/20
 */
interface ImageViewProgressListener {
  fun onProgress(key: String?, bytesRead: Long, expectedLength: Long)

  /**
   * Control how often the listener needs an update. 0% and 100% will always be dispatched.
   *
   * @return in percentage (0.2 = call [.onProgress] around every 0.2 percent of progress)
   */
  val granularityPercentage: Float
}
