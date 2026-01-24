package io.github.triniwiz.plugins.klaviyo.push

import com.google.firebase.messaging.FirebaseMessaging
import com.google.firebase.messaging.RemoteMessage
import com.klaviyo.pushFcm.KlaviyoPushService
import com.klaviyo.pushFcm.KlaviyoRemoteMessage.isKlaviyoMessage
import java.util.concurrent.Executors

class KlaviyoPush {

  interface Callback<T> {
    fun onSuccess(result: T?)
    fun onError(error: Any?)
  }

  interface Callback2<U, T> {
    fun onSuccess(result1: U?, result2: T?)
    fun onError(error: Any?)
  }

  class Service : KlaviyoPushService() {
    override fun onNewToken(newToken: String) {
      super.onNewToken(newToken)
      onTokenListener?.onSuccess(newToken)
    }

    override fun onMessageReceived(message: RemoteMessage) {
      super.onMessageReceived(message)

      if (!message.isKlaviyoMessage) {
        onNonKlaviyoMessageListener?.onSuccess(message)
      }
    }

    override fun onKlaviyoNotificationMessageReceived(message: RemoteMessage) {
      onMessageListener?.onSuccess(message)
      super.onKlaviyoNotificationMessageReceived(message)
    }

    override fun onKlaviyoCustomDataMessageReceived(
      customData: Map<String, String>,
      message: RemoteMessage
    ) {
      onCustomDataMessageListener?.onSuccess(customData, message)
    }
  }


  companion object {

    private var onTokenListener: Callback<String>? = null

    private var onNonKlaviyoMessageListener: Callback<RemoteMessage>? = null

    private var onMessageListener: Callback<RemoteMessage>? = null

    private var onCustomDataMessageListener: Callback2<Map<String, String>, RemoteMessage>? = null

    @JvmStatic
    var executorsCount = 3
      set(value) {
        executors = Executors.newFixedThreadPool(value)
        field = value
      }

    private var executors = Executors.newFixedThreadPool(executorsCount)

    @JvmStatic
    fun setOnTokenListener(callback: Callback<String>?) {
      onTokenListener = callback
    }

    @JvmStatic
    fun setOnMessageListener(callback: Callback<RemoteMessage>?) {
      onMessageListener = callback
    }

    @JvmStatic
    fun setOnNonKlaviyoMessageListener(callback: Callback<RemoteMessage>?) {
      onNonKlaviyoMessageListener = callback
    }

    @JvmStatic
    fun setOnCustomDataMessageListener(callback: Callback2<Map<String, String>, RemoteMessage>?) {
      onCustomDataMessageListener = callback
    }

    @JvmStatic
    fun getToken(callback: Callback<String>) {
      FirebaseMessaging.getInstance().token
        .addOnCompleteListener(executors) {
          if (it.isSuccessful) {
            callback.onSuccess(it.result)
          } else {
            callback.onError(it.exception)
          }
        }
    }

  }
}
