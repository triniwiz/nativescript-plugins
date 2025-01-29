package io.github.triniwiz.plugins.accelerometer

import android.annotation.TargetApi
import android.content.Context
import android.hardware.Sensor
import android.hardware.SensorEvent
import android.hardware.SensorEventListener
import android.hardware.SensorManager
import android.os.Build
import java.nio.ByteBuffer
import java.nio.FloatBuffer

@TargetApi(Build.VERSION_CODES.CUPCAKE)
class Accelerometer(context: Context) {
  private val baseAcceleration: Float = -9.81F
  private var sensorListener: SensorEventListener? = null
  private val sensorManager: SensorManager?
  private val accelerometerSensor: Sensor?
  private var callback: Callback? = null
  var data = ByteBuffer.allocateDirect(12)
    private set
  
  interface Callback {
    fun onData()
  }

  init {
    sensorManager = context.getSystemService(Context.SENSOR_SERVICE) as? SensorManager
    accelerometerSensor =
      sensorManager?.getDefaultSensor(Sensor.TYPE_ACCELEROMETER)
  }

  val isAvailable: Boolean
    get() {
      return accelerometerSensor != null
    }

  var sensorDelay = AccelerometerSensorDelay.Normal

  fun setSensorDelay(delay: Int) {
    AccelerometerSensorDelay.fromInt(delay)?.let {
      sensorDelay = it
    }
  }


  fun setCallback(callback: Callback?) {
    this.callback = callback
  }

  val isListening: Boolean
    get() {
      return sensorListener != null
    }


  fun startAccelerometerUpdates() {
    if (isListening) {
      stopAccelerometerUpdates()
    }

    sensorManager?.let {
      sensorListener = object : SensorEventListener {
        override fun onSensorChanged(event: SensorEvent?) {
          if (event != null) {
            data.putFloat(0, event.values[0] / baseAcceleration)
            data.putFloat(4, event.values[1] / baseAcceleration)
            data.putFloat(8, event.values[2] / baseAcceleration)
            data.rewind()
            callback?.onData()
          }
        }

        override fun onAccuracyChanged(sensor: Sensor?, accuracy: Int) {}
      }

      it.registerListener(sensorListener, accelerometerSensor, sensorDelay.value)
    }


  }

  fun stopAccelerometerUpdates() {
    sensorListener?.let {
      sensorManager?.unregisterListener(sensorListener)
    }
    sensorListener = null
  }


}
