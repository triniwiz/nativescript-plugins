package io.github.triniwiz.plugins.pdf

import java.nio.ByteBuffer

data class Color(
  val r: Int,
  val g: Int,
  val b: Int,
  val a: Int = 255
) {

  fun getValues(value: ByteBuffer) {
    value.putInt(r)
      .putInt(g)
      .putInt(b)
      .putInt(a)
  }

  companion object {
    val black = Color(0, 0, 0)
    val white = Color(255, 255, 255)
    val red = Color(255, 0, 0)
    val green = Color(0, 255, 0)
    val blue = Color(0, 0, 255)
    fun grey(value: Int): Color = Color(value, value, value)
    fun fromFloats(r: Float, g: Float, b: Float, a: Float = 1.0f): Color =
      Color(
        (r * 255).toInt().coerceIn(0, 255),
        (g * 255).toInt().coerceIn(0, 255),
        (b * 255).toInt().coerceIn(0, 255),
        (a * 255).toInt().coerceIn(0, 255)
      )

    fun fromHex(hex: Int): Color =
      Color(
        (hex shr 16) and 0xFF,
        (hex shr 8) and 0xFF,
        hex and 0xFF
      )

    fun fromHex(hex: String): Color {
      val normalized = hex.removePrefix("#")
      val expanded = when (normalized.length) {
        3 -> buildString {
          append(normalized[0]); append(normalized[0])
          append(normalized[1]); append(normalized[1])
          append(normalized[2]); append(normalized[2])
        }

        4 -> buildString {
          append(normalized[0]); append(normalized[0])
          append(normalized[1]); append(normalized[1])
          append(normalized[2]); append(normalized[2])
          append(normalized[3]); append(normalized[3])
        }

        6, 8 -> normalized
        else -> throw IllegalArgumentException(
          "Hex string must be 3, 4, 6, or 8 characters long (excluding '#')"
        )
      }

      val r = expanded.substring(0, 2).toInt(16)
      val g = expanded.substring(2, 4).toInt(16)
      val b = expanded.substring(4, 6).toInt(16)
      val a = if (expanded.length == 8) expanded.substring(6, 8).toInt(16) else 255

      return Color(r, g, b, a)
    }
  }
}
