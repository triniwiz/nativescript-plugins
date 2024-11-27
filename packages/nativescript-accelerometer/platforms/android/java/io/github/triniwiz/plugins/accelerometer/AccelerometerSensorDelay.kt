package io.github.triniwiz.plugins.accelerometer

import android.hardware.SensorManager

enum class AccelerometerSensorDelay {
  Normal,
  Game,
  UI,
  Fastest;

  val value: Int
    get() {
      return when (this) {
        Normal -> SensorManager.SENSOR_DELAY_NORMAL
        Game -> SensorManager.SENSOR_DELAY_GAME
        UI -> SensorManager.SENSOR_DELAY_UI
        Fastest -> SensorManager.SENSOR_DELAY_FASTEST
      }
    }

  companion object {
    fun fromInt(value: Int): AccelerometerSensorDelay? {
      return when (value) {
        0 -> Normal
        1 -> Game
        2 -> UI
        3 -> Fastest
        else -> null
      }
    }
  }
}
