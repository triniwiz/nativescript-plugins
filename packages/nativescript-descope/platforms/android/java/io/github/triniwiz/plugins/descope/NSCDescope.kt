import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.util.Base64
import androidx.annotation.Nullable
import androidx.browser.customtabs.CustomTabsCallback
import androidx.browser.customtabs.CustomTabsClient
import androidx.browser.customtabs.CustomTabsIntent
import androidx.browser.customtabs.CustomTabsServiceConnection
import androidx.browser.customtabs.CustomTabsSession
import androidx.security.crypto.EncryptedSharedPreferences
import androidx.security.crypto.MasterKeys
import java.security.MessageDigest
import kotlin.random.Random


private const val prefName = "io.github.triniwiz.plugins.descope"

class NSCDescope(private val context: Context) {

  interface Callback {
    fun onSuccess()
    fun onError()
  }

  private val storage: EncryptedStorage? by lazy { createEncryptedStore(context) }

  // Flow

  fun prepFlow(): Map<String, String> {
    // create some random bytes
    val randomBytes = ByteArray(32)
    Random.nextBytes(randomBytes)

    // codeVerifier == base64(randomBytes)
    val codeVerifier =
      String(Base64.encode(randomBytes, Base64.URL_SAFE or Base64.NO_PADDING or Base64.NO_WRAP))

    // hash bytes using sha256
    val md = MessageDigest.getInstance("SHA-256")
    val hashed = md.digest(randomBytes)

    // codeChallenge == base64(sha256(randomBytes))
    val codeChallenge =
      String(Base64.encode(hashed, Base64.URL_SAFE or Base64.NO_PADDING or Base64.NO_WRAP))

    // resolve the promise with the code verifier and challenge
    return mapOf("codeVerifier" to codeVerifier, "codeChallenge" to codeChallenge)
  }


  @Throws(Exception::class)
  fun startFlow(
    flowUrl: String,
    deepLinkUrl: String,
    backupCustomScheme: String,
    codeChallenge: String,
    callback: Callback
  ) {
    if (flowUrl.isEmpty()) {
      throw Exception("'flowUrl' is required when calling startFlow", Throwable("empty_url"))
    }

    // embed into url parameters
    val uriBuilder = Uri.parse(flowUrl).buildUpon()
      .appendQueryParameter("ra-callback", deepLinkUrl)
      .appendQueryParameter("ra-challenge", codeChallenge)
      .appendQueryParameter("ra-initiator", "android")
    if (backupCustomScheme.isNotEmpty()) {
      uriBuilder.appendQueryParameter("ra-backup-callback", backupCustomScheme)
    }
    val uri = uriBuilder.build()

    // launch via chrome custom tabs
    launchUri(context, uri, callback)
  }


  fun resumeFlow(flowUrl: String, incomingUrl: String, callback: Callback) {
    // create the redirect flow URL by copying all url parameters received from the incoming URI
    val incomingUri = Uri.parse(incomingUrl)
    val uriBuilder = Uri.parse(flowUrl).buildUpon()
    incomingUri.queryParameterNames.forEach {
      uriBuilder.appendQueryParameter(
        it,
        incomingUri.getQueryParameter(it)
      )
    }
    val uri = uriBuilder.build()

    // launch via chrome custom tabs
    launchUri(context, uri, callback)
  }

  // Storage


  fun loadItem(key: String): String {
    return storage?.loadItem(key) ?: ""
  }


  fun saveItem(key: String, value: String): String {
    storage?.saveItem(key, value)
    return key
  }


  fun removeItem(key: String): String {
    storage?.removeItem(key)
    return key
  }

  companion object {
    const val NAME = "DescopeNativeScript"
    internal var customTabsClient: CustomTabsClient? = null
    internal var customTabsSession: CustomTabsSession? = null
    private var isStarting = false

    fun init(context: Context) {
      if (!isStarting && customTabsClient == null && customTabsSession == null) {
        return
      }
      val packageName = CustomTabsClient.getPackageName(context.applicationContext, null)
      if (packageName == null) {
        // Do nothing as service connection is not supported.
        return
      }
      isStarting = true
      CustomTabsClient.bindCustomTabsService(
        context,
        packageName,
        object : CustomTabsServiceConnection() {
          override fun onCustomTabsServiceConnected(
            name: ComponentName,
            client: CustomTabsClient
          ) {
            customTabsClient = client

            // Warm up the browser process.
            client.warmup(0)


            if (customTabsSession == null) {
              customTabsSession = client.newSession(customTabsCallback)
            }
          }

          override fun onServiceDisconnected(componentName: ComponentName) {
            // Remove the custom tabs client and custom tabs session.
            customTabsClient = null
            customTabsSession = null
          }
        }
      )
    }

    private val customTabsCallback: CustomTabsCallback = object : CustomTabsCallback() {
      override fun onNavigationEvent(navigationEvent: Int, extras: Bundle?) {
        //todo
        super.onNavigationEvent(navigationEvent, extras)
      }

    }
  }
}

private fun launchUri(context: Context, uri: Uri, callback: NSCDescope.Callback) {
  if (NSCDescope.customTabsSession == null){
    // todo
    return
  }
  
  val customTabsIntent = CustomTabsIntent.Builder()
    .setSession(NSCDescope.customTabsSession!!)
    .setUrlBarHidingEnabled(true)
    .setShowTitle(true)
    .setShareState(CustomTabsIntent.SHARE_STATE_OFF)
    .build()

  customTabsIntent.intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
  customTabsIntent.launchUrl(context, uri)
}

private class EncryptedStorage(context: Context) {
  private val masterKey = MasterKeys.getOrCreate(MasterKeys.AES256_GCM_SPEC)
  private val sharedPreferences = EncryptedSharedPreferences.create(
    prefName,
    masterKey,
    context,
    EncryptedSharedPreferences.PrefKeyEncryptionScheme.AES256_SIV,
    EncryptedSharedPreferences.PrefValueEncryptionScheme.AES256_GCM
  )

  fun loadItem(key: String): String? = sharedPreferences.getString(key, null)

  fun saveItem(key: String, data: String) = sharedPreferences.edit()
    .putString(key, data)
    .apply()

  fun removeItem(key: String) = sharedPreferences.edit()
    .remove(key)
    .apply()
}

private fun createEncryptedStore(context: Context): EncryptedStorage? {
  return try {
    EncryptedStorage(context)
  } catch (e: Exception) {
    try {
      // encrypted storage key unusable - deleting and recreating
      // see google issue https://issuetracker.google.com/issues/164901843
      context.deleteSharedPreferences(prefName)
      EncryptedStorage(context)
    } catch (e: Exception) {
      // unable to initialize encrypted storage
      null
    }
  }
}
