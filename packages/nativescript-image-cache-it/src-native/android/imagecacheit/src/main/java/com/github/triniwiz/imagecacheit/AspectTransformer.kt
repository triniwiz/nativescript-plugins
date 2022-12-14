package com.github.triniwiz.imagecacheit

import android.content.Context
import android.graphics.Bitmap
import android.util.Log
import com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool
import com.bumptech.glide.request.target.Target
import jp.wasabeef.glide.transformations.BitmapTransformation
import java.security.MessageDigest
import kotlin.math.floor

/**
 * Created by triniwiz on 2019-06-28
 */
class AspectTransformer(private val decodeWidth: Int, private val decodeHeight: Int, private val keepAspectRatio: Boolean) : BitmapTransformation() {
  override fun transform(context: Context, pool: BitmapPool,
                         toTransform: Bitmap, outWidth: Int, outHeight: Int): Bitmap {
    var bitmap = toTransform
    val sourceWidth = toTransform.width
    val sourceHeight = toTransform.height
    var reqWidth = if (decodeWidth > 0) decodeWidth else Target.SIZE_ORIGINAL
    var reqHeight = if (decodeHeight > 0) decodeHeight else Target.SIZE_ORIGINAL

    // scale
    if (reqWidth != Target.SIZE_ORIGINAL && reqHeight != Target.SIZE_ORIGINAL && (reqWidth != sourceWidth || reqHeight != sourceHeight)) {
      if (keepAspectRatio) {
        val widthCoef = sourceWidth.toDouble() / reqWidth.toDouble()
        val heightCoef = sourceHeight.toDouble() / reqHeight.toDouble()
        val aspectCoef = widthCoef.coerceAtMost(heightCoef)
        reqWidth = floor(sourceWidth / aspectCoef).toInt()
        reqHeight = floor(sourceHeight / aspectCoef).toInt()
      }
      bitmap = Bitmap.createScaledBitmap(bitmap, reqWidth, reqHeight, true)
    }
    return bitmap
  }

  override fun toString(): String {
    return ("AspectTransformer(decodeWidth=" + decodeWidth + ", decodeHeight=" + decodeHeight + ", keepAspectRatio="
      + keepAspectRatio + ")")
  }

  override fun equals(o: Any?): Boolean {
    return o is AspectTransformer && o.decodeWidth == decodeWidth && o.decodeHeight == decodeHeight && o.keepAspectRatio == keepAspectRatio
  }

  override fun hashCode(): Int {
    return ID.hashCode()
  }

  override fun updateDiskCacheKey(messageDigest: MessageDigest) {
    messageDigest.update((ID + decodeWidth + decodeHeight).toByteArray(CHARSET))
  }

  companion object {
    private const val VERSION = 1
    private const val ID = "com.github.triniwiz.imagecacheit.AspectTransformer.$VERSION"
  }
}
