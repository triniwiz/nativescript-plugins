package com.github.triniwiz.imagecacheit

import android.content.Context
import android.graphics.*
import com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool
import jp.wasabeef.glide.transformations.BitmapTransformation
import java.security.MessageDigest

/**
 * Created by triniwiz on 2019-06-28
 */
class ColoredRoundedCornerBorders @JvmOverloads constructor(private val radius: Int, margin: Int, cornerType: CornerType = CornerType.ALL, color: Int = Color.TRANSPARENT, cornerWidth: Int = 0, width: Int = -1, height: Int = -1) : BitmapTransformation() {
  enum class CornerType {
    ALL, TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT, TOP, BOTTOM, LEFT, RIGHT, OTHER_TOP_LEFT, OTHER_TOP_RIGHT, OTHER_BOTTOM_LEFT, OTHER_BOTTOM_RIGHT, DIAGONAL_FROM_TOP_LEFT, DIAGONAL_FROM_TOP_RIGHT, BORDER_ALL, BORDER_TOP, BORDER_RIGHT, BORDER_BOTTOM, BORDER_LEFT
  }

  private val diameter: Int
  private val margin: Int
  private val cornerType: CornerType
  private val cornerWidth: Int
  private val color: Int
  private val viewWidth: Int
  private val viewHeight: Int
  public override fun transform(context: Context, pool: BitmapPool,
                                toTransform: Bitmap, outWidth: Int, outHeight: Int): Bitmap {
    val width = toTransform.width
    val height = toTransform.height
    var currentHeight = outHeight
    var currentWidth = outWidth
    if (viewWidth > -1) {
      currentWidth = viewWidth
    }
    if (viewHeight > -1) {
      currentHeight = viewHeight
    }
    val bitmap = pool[currentWidth, currentHeight, Bitmap.Config.ARGB_8888]
    bitmap.setHasAlpha(true)
    val canvas = Canvas(bitmap)
    val paint = Paint()
    paint.isAntiAlias = true
    paint.shader = BitmapShader(toTransform, Shader.TileMode.CLAMP, Shader.TileMode.CLAMP)
    drawRoundRect(canvas, paint, currentWidth.toFloat(), currentHeight.toFloat())
    return bitmap
  }

  private fun drawRoundRect(canvas: Canvas, paint: Paint, width: Float, height: Float) {
    val right = width - margin
    val bottom = height - margin
    val borderPaint: Paint
    val path: Path
    when (cornerType) {
      CornerType.ALL -> {
        canvas.drawRoundRect(RectF((margin + cornerWidth).toFloat(), (margin + cornerWidth).toFloat(), right - cornerWidth, bottom - cornerWidth), radius.toFloat(), radius.toFloat(), paint)
        path = Path()
        path.addRoundRect(
          RectF((margin + cornerWidth).toFloat(), (margin + cornerWidth).toFloat(), right - cornerWidth, bottom - cornerWidth),
          radius.toFloat(), radius.toFloat(),
          Path.Direction.CW
        )
        borderPaint = Paint()
        borderPaint.isAntiAlias = true
        borderPaint.style = Paint.Style.STROKE
        borderPaint.color = color
        borderPaint.strokeWidth = cornerWidth.toFloat()
        if (cornerWidth > 0) {
          //    canvas.drawPath(path, borderPaint);
        }
      }
      CornerType.TOP_LEFT -> drawTopLeftRoundRect(canvas, paint, right, bottom)
      CornerType.TOP_RIGHT -> drawTopRightRoundRect(canvas, paint, right, bottom)
      CornerType.BOTTOM_LEFT -> drawBottomLeftRoundRect(canvas, paint, right, bottom)
      CornerType.BOTTOM_RIGHT -> drawBottomRightRoundRect(canvas, paint, right, bottom)
      CornerType.TOP -> drawTopRoundRect(canvas, paint, right, bottom)
      CornerType.BOTTOM -> drawBottomRoundRect(canvas, paint, right, bottom)
      CornerType.LEFT -> drawLeftRoundRect(canvas, paint, right, bottom)
      CornerType.RIGHT -> drawRightRoundRect(canvas, paint, right, bottom)
      CornerType.OTHER_TOP_LEFT -> drawOtherTopLeftRoundRect(canvas, paint, right, bottom)
      CornerType.OTHER_TOP_RIGHT -> drawOtherTopRightRoundRect(canvas, paint, right, bottom)
      CornerType.OTHER_BOTTOM_LEFT -> drawOtherBottomLeftRoundRect(canvas, paint, right, bottom)
      CornerType.OTHER_BOTTOM_RIGHT -> drawOtherBottomRightRoundRect(canvas, paint, right, bottom)
      CornerType.DIAGONAL_FROM_TOP_LEFT -> drawDiagonalFromTopLeftRoundRect(canvas, paint, right, bottom)
      CornerType.DIAGONAL_FROM_TOP_RIGHT -> drawDiagonalFromTopRightRoundRect(canvas, paint, right, bottom)
      CornerType.BORDER_ALL -> {
        path = Path()
        borderPaint = Paint()
        borderPaint.style = Paint.Style.STROKE
        borderPaint.color = color
        borderPaint.strokeWidth = cornerWidth.toFloat()
        path.addRect(RectF((margin + cornerWidth).toFloat(), (margin + cornerWidth).toFloat(), right - cornerWidth, bottom - cornerWidth), Path.Direction.CW)
        if (cornerWidth > 0) {
          canvas.drawPath(path, paint)
          canvas.drawPath(path, borderPaint)
        }
      }
      CornerType.BORDER_TOP -> {
        path = Path()
        borderPaint = Paint()
        borderPaint.style = Paint.Style.STROKE
        borderPaint.color = color
        borderPaint.strokeWidth = cornerWidth.toFloat()
        path.moveTo(margin.toFloat(), 0f)
        path.lineTo(right, 0f)
        path.close()
        if (cornerWidth > 0) {
          canvas.drawRect(RectF(margin.toFloat(), margin.toFloat(), right, bottom), paint)
          canvas.drawPath(path, borderPaint)
        }
      }
      CornerType.BORDER_RIGHT -> {
        path = Path()
        borderPaint = Paint()
        borderPaint.style = Paint.Style.STROKE
        borderPaint.color = color
        borderPaint.strokeWidth = cornerWidth.toFloat()
        path.moveTo(right, margin.toFloat())
        path.lineTo(right, bottom)
        path.close()
        if (cornerWidth > 0) {
          canvas.drawRect(RectF(margin.toFloat(), margin.toFloat(), right, bottom), paint)
          canvas.drawPath(path, borderPaint)
        }
      }
      CornerType.BORDER_BOTTOM -> {
        path = Path()
        borderPaint = Paint()
        borderPaint.style = Paint.Style.STROKE
        borderPaint.color = color
        borderPaint.strokeWidth = cornerWidth.toFloat()
        path.moveTo(right, bottom)
        path.lineTo(0f, bottom)
        path.close()
        if (cornerWidth > 0) {
          canvas.drawRect(RectF(margin.toFloat(), margin.toFloat(), right, bottom), paint)
          canvas.drawPath(path, borderPaint)
        }
      }
      CornerType.BORDER_LEFT -> {
        path = Path()
        borderPaint = Paint()
        borderPaint.style = Paint.Style.STROKE
        borderPaint.color = color
        borderPaint.strokeWidth = cornerWidth.toFloat()
        path.moveTo(0f, bottom)
        path.lineTo(0f, 0f)
        path.close()
        if (cornerWidth > 0) {
          canvas.drawRect(RectF(margin.toFloat(), margin.toFloat(), right, bottom), paint)
          canvas.drawPath(path, borderPaint)
        }
      }
      else -> {
        canvas.drawRoundRect(RectF(margin.toFloat(), margin.toFloat(), right, bottom), radius.toFloat(), radius.toFloat(), paint)
        path = Path()
        borderPaint = Paint()
        borderPaint.style = Paint.Style.STROKE
        borderPaint.color = color
        borderPaint.strokeWidth = cornerWidth.toFloat()
        path.addRoundRect(RectF(margin.toFloat(), margin.toFloat(), right, bottom), radius.toFloat(), radius.toFloat(), Path.Direction.CW)
        if (cornerWidth > 0) {
          canvas.drawPath(path, borderPaint)
        }
      }
    }
  }

  private fun drawTopLeftRoundRect(canvas: Canvas, paint: Paint, right: Float, bottom: Float) {
    canvas.drawRoundRect(RectF(margin.toFloat(), margin.toFloat(), (margin + diameter).toFloat(), (margin + diameter).toFloat()), radius.toFloat(),
      radius.toFloat(), paint)
    canvas.drawRect(RectF(margin.toFloat(), (margin + radius).toFloat(), (margin + radius).toFloat(), bottom), paint)
    canvas.drawRect(RectF((margin + radius).toFloat(), margin.toFloat(), right, bottom), paint)
  }

  private fun drawTopRightRoundRect(canvas: Canvas, paint: Paint, right: Float, bottom: Float) {
    canvas.drawRoundRect(RectF(right - diameter, margin.toFloat(), right, (margin + diameter).toFloat()), radius.toFloat(),
      radius.toFloat(), paint)
    canvas.drawRect(RectF(margin.toFloat(), margin.toFloat(), right - radius, bottom), paint)
    canvas.drawRect(RectF(right - radius, (margin + radius).toFloat(), right, bottom), paint)
  }

  private fun drawBottomLeftRoundRect(canvas: Canvas, paint: Paint, right: Float, bottom: Float) {
    canvas.drawRoundRect(RectF(margin.toFloat(), bottom - diameter, (margin + diameter).toFloat(), bottom), radius.toFloat(),
      radius.toFloat(), paint)
    canvas.drawRect(RectF(margin.toFloat(), margin.toFloat(), (margin + diameter).toFloat(), bottom - radius), paint)
    canvas.drawRect(RectF((margin + radius).toFloat(), margin.toFloat(), right, bottom), paint)
  }

  private fun drawBottomRightRoundRect(canvas: Canvas, paint: Paint, right: Float, bottom: Float) {
    canvas.drawRoundRect(RectF(right - diameter, bottom - diameter, right, bottom), radius.toFloat(),
      radius.toFloat(), paint)
    canvas.drawRect(RectF(margin.toFloat(), margin.toFloat(), right - radius, bottom), paint)
    canvas.drawRect(RectF(right - radius, margin.toFloat(), right, bottom - radius), paint)
  }

  private fun drawTopRoundRect(canvas: Canvas, paint: Paint, right: Float, bottom: Float) {
    canvas.drawRoundRect(RectF(margin.toFloat(), margin.toFloat(), right, (margin + diameter).toFloat()), radius.toFloat(), radius.toFloat(),
      paint)
    canvas.drawRect(RectF(margin.toFloat(), (margin + radius).toFloat(), right, bottom), paint)
  }

  private fun drawBottomRoundRect(canvas: Canvas, paint: Paint, right: Float, bottom: Float) {
    canvas.drawRoundRect(RectF(margin.toFloat(), bottom - diameter, right, bottom), radius.toFloat(), radius.toFloat(),
      paint)
    canvas.drawRect(RectF(margin.toFloat(), margin.toFloat(), right, bottom - radius), paint)
  }

  private fun drawLeftRoundRect(canvas: Canvas, paint: Paint, right: Float, bottom: Float) {
    canvas.drawRoundRect(RectF(margin.toFloat(), margin.toFloat(), (margin + diameter).toFloat(), bottom), radius.toFloat(), radius.toFloat(),
      paint)
    canvas.drawRect(RectF((margin + radius).toFloat(), margin.toFloat(), right, bottom), paint)
  }

  private fun drawRightRoundRect(canvas: Canvas, paint: Paint, right: Float, bottom: Float) {
    canvas.drawRoundRect(RectF(right - diameter, margin.toFloat(), right, bottom), radius.toFloat(), radius.toFloat(), paint)
    canvas.drawRect(RectF(margin.toFloat(), margin.toFloat(), right - radius, bottom), paint)
  }

  private fun drawOtherTopLeftRoundRect(canvas: Canvas, paint: Paint, right: Float, bottom: Float) {
    canvas.drawRoundRect(RectF(margin.toFloat(), bottom - diameter, right, bottom), radius.toFloat(), radius.toFloat(),
      paint)
    canvas.drawRoundRect(RectF(right - diameter, margin.toFloat(), right, bottom), radius.toFloat(), radius.toFloat(), paint)
    canvas.drawRect(RectF(margin.toFloat(), margin.toFloat(), right - radius, bottom - radius), paint)
  }

  private fun drawOtherTopRightRoundRect(canvas: Canvas, paint: Paint, right: Float, bottom: Float) {
    canvas.drawRoundRect(RectF(margin.toFloat(), margin.toFloat(), (margin + diameter).toFloat(), bottom), radius.toFloat(), radius.toFloat(),
      paint)
    canvas.drawRoundRect(RectF(margin.toFloat(), bottom - diameter, right, bottom), radius.toFloat(), radius.toFloat(),
      paint)
    canvas.drawRect(RectF((margin + radius).toFloat(), margin.toFloat(), right, bottom - radius), paint)
  }

  private fun drawOtherBottomLeftRoundRect(canvas: Canvas, paint: Paint, right: Float, bottom: Float) {
    canvas.drawRoundRect(RectF(margin.toFloat(), margin.toFloat(), right, (margin + diameter).toFloat()), radius.toFloat(), radius.toFloat(),
      paint)
    canvas.drawRoundRect(RectF(right - diameter, margin.toFloat(), right, bottom), radius.toFloat(), radius.toFloat(), paint)
    canvas.drawRect(RectF(margin.toFloat(), (margin + radius).toFloat(), right - radius, bottom), paint)
  }

  private fun drawOtherBottomRightRoundRect(canvas: Canvas, paint: Paint, right: Float,
                                            bottom: Float) {
    canvas.drawRoundRect(RectF(margin.toFloat(), margin.toFloat(), right, (margin + diameter).toFloat()), radius.toFloat(), radius.toFloat(),
      paint)
    canvas.drawRoundRect(RectF(margin.toFloat(), margin.toFloat(), (margin + diameter).toFloat(), bottom), radius.toFloat(), radius.toFloat(),
      paint)
    canvas.drawRect(RectF((margin + radius).toFloat(), (margin + radius).toFloat(), right, bottom), paint)
  }

  private fun drawDiagonalFromTopLeftRoundRect(canvas: Canvas, paint: Paint, right: Float,
                                               bottom: Float) {
    canvas.drawRoundRect(RectF(margin.toFloat(), margin.toFloat(), (margin + diameter).toFloat(), (margin + diameter).toFloat()), radius.toFloat(),
      radius.toFloat(), paint)
    canvas.drawRoundRect(RectF(right - diameter, bottom - diameter, right, bottom), radius.toFloat(),
      radius.toFloat(), paint)
    canvas.drawRect(RectF(margin.toFloat(), (margin + radius).toFloat(), right - diameter, bottom), paint)
    canvas.drawRect(RectF((margin + diameter).toFloat(), margin.toFloat(), right, bottom - radius), paint)
  }

  private fun drawDiagonalFromTopRightRoundRect(canvas: Canvas, paint: Paint, right: Float,
                                                bottom: Float) {
    canvas.drawRoundRect(RectF(right - diameter, margin.toFloat(), right, (margin + diameter).toFloat()), radius.toFloat(),
      radius.toFloat(), paint)
    canvas.drawRoundRect(RectF(margin.toFloat(), bottom - diameter, (margin + diameter).toFloat(), bottom), radius.toFloat(),
      radius.toFloat(), paint)
    canvas.drawRect(RectF(margin.toFloat(), margin.toFloat(), right - radius, bottom - radius), paint)
    canvas.drawRect(RectF((margin + radius).toFloat(), (margin + radius).toFloat(), right, bottom), paint)
  }

  override fun toString(): String {
    return ("RoundedTransformation(radius=" + radius + ", margin=" + margin + ", diameter="
      + diameter + ", cornerType=" + cornerType.name + ")")
  }

  override fun equals(o: Any?): Boolean {
    return o is ColoredRoundedCornerBorders && o.radius == radius && o.diameter == diameter && o.margin == margin && o.cornerType == cornerType
  }

  override fun hashCode(): Int {
    return ID.hashCode() + radius * 10000 + diameter * 1000 + margin * 100 + cornerType.ordinal * 10
  }

  override fun updateDiskCacheKey(messageDigest: MessageDigest) {
    messageDigest.update((ID + radius + diameter + margin + cornerType).toByteArray(CHARSET))
  }

  companion object {
    private const val VERSION = 1
    private const val ID = "com.github.triniwiz.imagedemo.ColoredRoundedCornerBorders.$VERSION"
  }

  init {
    diameter = radius * 2
    this.margin = margin
    this.cornerType = cornerType
    this.color = color
    this.cornerWidth = cornerWidth
    viewWidth = width
    viewHeight = height
  }
}
