package io.github.triniwiz.supabase

import io.github.jan.supabase.auth.Auth
import io.github.jan.supabase.auth.OtpType
import io.github.jan.supabase.auth.SignOutScope
import io.github.jan.supabase.auth.providers.Apple
import io.github.jan.supabase.auth.providers.Azure
import io.github.jan.supabase.auth.providers.Bitbucket
import io.github.jan.supabase.auth.providers.Discord
import io.github.jan.supabase.auth.providers.Facebook
import io.github.jan.supabase.auth.providers.Figma
import io.github.jan.supabase.auth.providers.Fly
import io.github.jan.supabase.auth.providers.Github
import io.github.jan.supabase.auth.providers.Gitlab
import io.github.jan.supabase.auth.providers.Google
import io.github.jan.supabase.auth.providers.IDTokenProvider
import io.github.jan.supabase.auth.providers.Kakao
import io.github.jan.supabase.auth.providers.Keycloak
import io.github.jan.supabase.auth.providers.LinkedIn
import io.github.jan.supabase.auth.providers.LinkedInOIDC
import io.github.jan.supabase.auth.providers.Notion
import io.github.jan.supabase.auth.providers.OAuthProvider
import io.github.jan.supabase.auth.providers.Slack
import io.github.jan.supabase.auth.providers.SlackOIDC
import io.github.jan.supabase.auth.providers.Spotify
import io.github.jan.supabase.auth.providers.Twitch
import io.github.jan.supabase.auth.providers.Twitter
import io.github.jan.supabase.auth.providers.WorkOS
import io.github.jan.supabase.auth.providers.Zoom
import io.github.jan.supabase.auth.providers.builtin.Email
import io.github.jan.supabase.auth.providers.builtin.IDToken
import io.github.jan.supabase.auth.providers.builtin.OTP
import io.github.jan.supabase.auth.providers.builtin.Phone
import io.github.jan.supabase.auth.providers.builtin.SSO
import io.github.jan.supabase.auth.status.SessionSource
import io.github.jan.supabase.auth.status.SessionStatus
import io.github.jan.supabase.auth.user.Identity
import io.github.jan.supabase.auth.user.UserInfo
import io.github.jan.supabase.auth.user.UserSession
import kotlinx.coroutines.*
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import java.util.concurrent.Executors

class SupabaseAuth internal constructor(val auth: Auth) {
  private val scope = CoroutineScope(Dispatchers.Default + Job())
  val admin: SupabaseAuthAdmin by lazy {
    SupabaseAuthAdmin(auth.admin)
  }

  class SupabaseListener internal constructor(internal var job: Job? = null) {
    internal var removed = false
    fun remove() {
      if (removed) {
        return
      }
      job?.cancel()
      removed = true
    }
  }

  enum class SignOutScope {
    global,
    local,
    others;

    val scope: io.github.jan.supabase.auth.SignOutScope
      get() {
        return when (this) {
          global -> io.github.jan.supabase.auth.SignOutScope.GLOBAL
          local -> io.github.jan.supabase.auth.SignOutScope.LOCAL
          others -> io.github.jan.supabase.auth.SignOutScope.OTHERS
        }
      }
  }

  enum class AuthChangeEvent {
    initialSession,
    passwordRecovery,
    signedIn,
    signedOut,
    tokenRefreshed,
    userUpdated,
    userDeleted,
    mfaChallengeVerified,
  }

  enum class OpenIDConnectCredentialsProvider {
    google, apple, azure, facebook;

    val provider: IDTokenProvider
      get() {
        return when (this) {
          google -> Google
          apple -> Apple
          azure -> Azure
          facebook -> Facebook
        }
      }
  }

  enum class Provider {
    apple,
    azure,
    bitbucket,
    discord,
    facebook,
    figma,
    github,
    gitlab,
    google,
    kakao,
    keycloak,
    linkedin,
    linkedinOIDC,
    notion,
    slack,
    slackOIDC,
    spotify,
    twitch,
    twitter,
    workos,
    zoom,
    fly;

    val provider: OAuthProvider
      get() {
        return when (this) {
          apple -> Apple
          azure -> Azure
          bitbucket -> Bitbucket
          discord -> Discord
          facebook -> Facebook
          figma -> Figma
          github -> Github
          gitlab -> Gitlab
          google -> Google
          kakao -> Kakao
          keycloak -> Keycloak
          linkedin -> LinkedIn
          linkedinOIDC -> LinkedInOIDC
          notion -> Notion
          slack -> Slack
          slackOIDC -> SlackOIDC
          spotify -> Spotify
          twitch -> Twitch
          twitter -> Twitter
          workos -> WorkOS
          zoom -> Zoom
          fly -> Fly
        }
      }
  }

  enum class EmailOTPType {
    signup,
    invite,
    magiclink,
    recovery,
    emailChange,
    email;

    val value: OtpType.Email
      get() {
        return when (this) {
          signup -> OtpType.Email.SIGNUP
          invite -> OtpType.Email.INVITE
          magiclink -> OtpType.Email.MAGIC_LINK
          recovery -> OtpType.Email.RECOVERY
          emailChange -> OtpType.Email.EMAIL_CHANGE
          email -> OtpType.Email.EMAIL
        }
      }
  }

  enum class MobileOTPType {
    sms,
    phoneChange;

    val value: OtpType.Phone
      get() {
        return when (this) {
          sms -> OtpType.Phone.SMS
          phoneChange -> OtpType.Phone.PHONE_CHANGE
        }
      }
  }

  enum class ResendMobileType {
    sms,
    phoneChange;

    val type: OtpType.Phone
      get() {
        return when (this) {
          sms -> OtpType.Phone.SMS
          phoneChange -> OtpType.Phone.PHONE_CHANGE
        }
      }
  }


  enum class ResendEmailType {
    signup,
    emailChange;

    val type: OtpType.Email
      get() {
        return when (this) {
          signup -> OtpType.Email.SIGNUP
          emailChange -> OtpType.Email.EMAIL_CHANGE
        }
      }
  }

  class AuthMetaSecurity(captchaToken: String) {
    var captchaToken: String = captchaToken
  }

  class OpenIDConnectCredentials(
    var provider: OpenIDConnectCredentialsProvider,
    var idToken: String
  ) {
    var accessToken: String? = null
    var nonce: String? = null
    var gotrueMetaSecurity: AuthMetaSecurity? = null
  }

  class UserAttributes {

    var email: String? = null

    var phone: String? = null

    var password: String? = null

    var nonce: String? = null

    @Deprecated("This is an old field, stop relying on it.")
    var emailChangeToken: String? = null

    var data: String? = null
  }


  fun addOnAuthStateChange(listener: (AuthChangeEvent) -> Void): SupabaseListener {
    val ret = SupabaseListener()
    val job = scope.launch {
      if (ret.removed) {
        return@launch
      }
      auth.sessionStatus.collect {
        when (it) {
          is SessionStatus.Authenticated -> {
            when (it.source) {
              SessionSource.AnonymousSignIn -> {
                listener(AuthChangeEvent.signedIn)
              }

              SessionSource.External -> {
                it.isNew
                listener(AuthChangeEvent.signedIn)
              }

              is SessionSource.Refresh -> {
                listener(AuthChangeEvent.tokenRefreshed)
              }

              is SessionSource.SignIn -> {
                listener(AuthChangeEvent.signedIn)
              }

              is SessionSource.SignUp -> {}
              SessionSource.Storage -> {}
              SessionSource.Unknown -> {}
              is SessionSource.UserChanged -> {
                listener(AuthChangeEvent.userDeleted)
                listener(AuthChangeEvent.userUpdated)
              }

              is SessionSource.UserIdentitiesChanged -> {}
            }
          }

          SessionStatus.Initializing -> {
            listener(AuthChangeEvent.initialSession)
          }

          is SessionStatus.NotAuthenticated -> {
            if (it.isSignOut) {
              listener(AuthChangeEvent.signedOut)
            }
          }

          is SessionStatus.RefreshFailure -> {

          }
        }
      }
    }
    ret.job = job
    return ret
  }

  fun signIn(
    email: String,
    password: String,
    captchaToken: String?,
    callback: (UserInfo?, UserSession?, Throwable?) -> Void
  ) {
    scope.launch {
      try {
        auth.signInWith(Email) {
          this.email = email
          this.password = password
          this.captchaToken = captchaToken
        }
        val user = auth.currentUserOrNull()
        val session = auth.currentSessionOrNull()
        callback(user, session, null)
      } catch (e: Exception) {
        callback(null, null, e)
      }
    }
  }

  fun signInWithPhone(
    phone: String,
    password: String,
    captchaToken: String?,
    callback: (UserInfo?, UserSession?, Throwable?) -> Void
  ) {
    scope.launch {
      try {
        auth.signInWith(Phone) {
          this.phone = phone
          this.password = password
          this.captchaToken = captchaToken
        }
        val user = auth.currentUserOrNull()
        val session = auth.currentSessionOrNull()
        callback(user, session, null)
      } catch (e: Exception) {
        callback(null, null, e)
      }
    }
  }

  fun signInAnonymously(
    data: String?,
    captchaToken: String?,
    callback: (UserInfo?, UserSession?, Throwable?) -> Void
  ) {
    scope.launch {
      try {
        val json = data?.let {
          Json.decodeFromString<JsonObject>(it)
        }
        auth.signInAnonymously(json, captchaToken)
        val user = auth.currentUserOrNull()
        val session = auth.currentSessionOrNull()
        callback(user, session, null)
      } catch (e: Exception) {
        callback(null, null, e)
      }
    }
  }

  fun signUp(
    email: String,
    password: String,
    data: String?,
    captchaToken: String?,
    redirectTo: String?,
    callback: (
      UserInfo?,
      UserSession?, Throwable?
    ) -> Void
  ) {
    scope.launch {
      try {
        val json = data?.let {
          Json.decodeFromString<JsonObject>(it)
        }
        val info = auth.signUpWith(Email, redirectTo) {
          this.email = email
          this.password = password
          this.data = json
          this.captchaToken = captchaToken
        }
        callback(info, auth.currentSessionOrNull(), null)
      } catch (e: Exception) {
        callback(null, null, e)
      }
    }
  }


  fun signUpPhone(
    phone: String,
    password: String,
    data: String?,
    captchaToken: String?,
    redirectTo: String?,
    callback: (UserInfo?, UserSession?, Throwable?) -> Void
  ) {
    scope.launch {
      try {
        val json = data?.let {
          Json.decodeFromString<JsonObject>(it)
        }
        val session = auth.signUpWith(Phone, redirectTo) {
          this.phone = phone
          this.password = password
          this.data = json
          this.captchaToken = captchaToken
        }
        callback(session, auth.currentSessionOrNull(), null)
      } catch (e: Exception) {
        callback(null, null, e)
      }
    }
  }

  @JvmOverloads
  fun signOut(
    scope: SignOutScope = SignOutScope.global,
    callback: (Throwable?) -> Void
  ) {
    this.scope.launch {
      try {
        auth.signOut(scope.scope)
        callback(null)
      } catch (e: Exception) {
        callback(e)
      }
    }
  }

  fun getSession(
    callback: (UserSession?) -> Void
  ) {
    callback(auth.currentSessionOrNull())
  }

  val currentSession: UserSession?
    get() {
      return auth.currentSessionOrNull()
    }

  val currentUser: UserInfo?
    get() {
      return auth.currentUserOrNull()
    }

  fun user(jwt: String?, callback: (UserInfo?, Throwable?) -> Void) {
    scope.launch {
      try {
        val user = auth.retrieveUser(
          jwt ?: auth.currentSessionOrNull()?.accessToken ?: ""
        )
        callback(user, null)
      } catch (e: Exception) {
        callback(null, e)
      }
    }
  }

  fun refreshSession(refreshToken: String?, callback: (UserSession?, Throwable?) -> Void) {
    scope.launch {
      try {
        val session = if (refreshToken != null) {
          auth.refreshSession(refreshToken)
        } else {
          auth.refreshCurrentSession()
          auth.currentSessionOrNull()
        }

        callback(session, null)
      } catch (e: Exception) {
        callback(null, e)
      }
    }
  }

  fun signInWithIdToken(
    credentialsProvider: OpenIDConnectCredentials,
    callback: (UserInfo?, Throwable?) -> Void
  ) {
    scope.launch {
      try {
        auth.signInWith(IDToken) {
          this.provider = credentialsProvider.provider.provider
          this.idToken = credentialsProvider.idToken
          this.accessToken = credentialsProvider.accessToken
          this.nonce = credentialsProvider.nonce
          this.captchaToken = credentialsProvider.gotrueMetaSecurity?.captchaToken
        }
        callback(null, null)
      } catch (e: Exception) {
        callback(null, e)
      }
    }
  }


  fun signInWithOTP(
    email: String,
    redirectTo: String?,
    shouldCreateUser: Boolean?,
    data: String?,
    captchaToken: String?, callback: (Throwable?) -> Void
  ) {
    scope.launch {
      try {
        auth.signInWith(OTP, redirectTo) {
          this.email = email
          this.createUser = shouldCreateUser ?: true
          this.data = data?.let {
            Json.decodeFromString<JsonObject>(it)
          }
          this.captchaToken = captchaToken
        }
        callback(null)
      } catch (e: Exception) {
        callback(e)
      }
    }
  }

  fun signInWithOTPPhone(
    phone: String,
    shouldCreateUser: Boolean?,
    data: String?,
    captchaToken: String?, callback: (Throwable?) -> Void
  ) {
    scope.launch {
      try {
        auth.signInWith(OTP) {
          this.phone = phone
          this.createUser = shouldCreateUser ?: true
          this.data = data?.let {
            Json.decodeFromString<JsonObject>(it)
          }
          this.captchaToken = captchaToken
        }
        callback(null)
      } catch (e: Exception) {
        callback(e)
      }
    }
  }


  fun signInWithOAuth(
    provider: Provider,
    redirectTo: String?,
    scopes: String?,
    queryParams: Map<String, String>?,
    callback: (UserInfo?, Throwable?) -> Void
  ) {
    scope.launch {
      try {
        auth.signInWith(provider = provider.provider, redirectTo) {
          scopes?.let {
            this.scopes.addAll(it.split(" "))
          }
          queryParams?.let {
            this.queryParams.putAll(it)
          }
        }
        val user = auth.currentUserOrNull()
        callback(user, null)
      } catch (e: Exception) {
        callback(null, e)
      }
    }
  }


  fun getOAuthSignInURL(
    provider: Provider,
    scopes: String?,
    redirectTo: String?,
    queryParams: Map<String, String>?,
    callback: (String?, Exception?) -> Void
  ) {
    scope.launch {
      try {
        val url = auth.getOAuthUrl(provider.provider, redirectTo) {
          scopes?.let {
            this.scopes.addAll(it.split(" "))
          }
          queryParams?.let {
            this.queryParams.putAll(it)
          }
        }
        callback(url, null)
      } catch (e: Exception) {
        callback(null, e)
      }
    }
  }

  fun signInWithSSO(
    domain: String, redirectTo: String?,
    captchaToken: String?, callback: (UserInfo?, Exception?) -> Void
  ) {
    scope.launch {
      try {
        auth.signInWith(SSO, redirectTo) {
          this.domain = domain
          this.captchaToken = captchaToken
        }
        val user = auth.currentUserOrNull()
        callback(user, null)
      } catch (e: Exception) {
        callback(null, e)
      }
    }
  }


  fun signInWithSSOWithProviderId(
    providerId: String, redirectTo: String?,
    captchaToken: String?, callback: (UserInfo?, Exception?) -> Void
  ) {
    scope.launch {
      try {
        auth.signInWith(SSO, redirectTo) {
          this.providerId = providerId
          this.captchaToken = captchaToken
        }
        val user = auth.currentUserOrNull()
        callback(user, null)
      } catch (e: Exception) {
        callback(null, e)
      }
    }
  }

  fun verifyOTP(
    tokenHash: String,
    type: EmailOTPType,
    captchaToken: String?,
    callback: (UserInfo?, UserSession?, Exception?) -> Void
  ) {
    scope.launch {
      try {
        auth.verifyEmailOtp(type.value, tokenHash, captchaToken)
        val user = auth.currentUserOrNull()
        val session = auth.currentSessionOrNull()
        callback(user, session, null)
      } catch (e: Exception) {
        callback(null, null, e)
      }
    }
  }

  fun verifyOTP(
    phone: String,
    token: String,
    type: MobileOTPType,
    captchaToken: String?,
    callback: (UserInfo?, UserSession?, Exception?) -> Void
  ) {
    scope.launch {
      try {
        auth.verifyPhoneOtp(type.value, phone, token, captchaToken)
        val user = auth.currentUserOrNull()
        val session = auth.currentSessionOrNull()
        callback(user, session, null)
      } catch (e: Exception) {
        callback(null, null, e)
      }
    }
  }

  fun verifyOTPEmail(
    email: String,
    token: String,
    type: EmailOTPType,
    captchaToken: String?,
    callback: (UserInfo?, UserSession?, Exception?) -> Void
  ) {
    scope.launch {
      try {
        auth.verifyEmailOtp(type.value, email, token, captchaToken)
        val user = auth.currentUserOrNull()
        val session = auth.currentSessionOrNull()
        callback(user, session, null)
      } catch (e: Exception) {
        callback(null, null, e)
      }
    }
  }

  fun userIdentities(): List<Identity>? {
    return auth.currentIdentitiesOrNull()
  }

  fun linkIdentity(
    provider: Provider,
    scopes: String?,
    redirectTo: String?,
    queryParams: Map<String, String>?,
    callback: (Exception?) -> Void
  ) {
    scope.launch {
      try {
        auth.linkIdentity(
          provider.provider, redirectTo
        ) {
          scopes?.let {
            this.scopes.addAll(
              scopes.split(" ")
            )
            queryParams?.let {
              this.queryParams.putAll(it)
            }
          }
        }
        callback(null)
      } catch (e: Exception) {
        callback(e)
      }
    }
  }

  fun unlinkIdentity(value: Identity, callback: (Exception?) -> Void) {
    scope.launch {
      try {
        auth.unlinkIdentity(value.identityId!!)
        callback(null)
      } catch (e: Exception) {
        callback(e)
      }
    }
  }


  fun reauthenticate(callback: (Exception?) -> Void) {
    scope.launch {
      try {
        auth.reauthenticate()
        callback(null)
      } catch (e: Exception) {
        callback(e)
      }
    }
  }

  fun resend(
    phone: String,
    type: ResendMobileType,
    captchaToken: String?,
    callback: (String?, Exception?) -> Void
  ) {
    scope.launch {
      try {
        auth.resendPhone(type.type, phone, captchaToken)
        callback(null, null)
      } catch (e: Exception) {
        callback(null, e)
      }
    }
  }

  fun resend(
    email: String,
    type: ResendEmailType,
    emailRedirectTo: String?,
    captchaToken: String?,
    callback: (Exception?) -> Void
  ) {
    scope.launch {
      try {
        auth.resendEmail(type.type, email, captchaToken)
        callback(null)
      } catch (e: Exception) {
        callback(e)
      }
    }
  }

  fun resetPasswordForEmail(
    email: String,
    redirectTo: String?,
    captchaToken: String?,
    callback: (Exception?) -> Void
  ) {
    scope.launch {
      try {
        auth.resetPasswordForEmail(email, redirectTo, captchaToken)
        callback(null)
      } catch (e: Exception) {
        callback(e)
      }
    }
  }


  fun setSession(
    accessToken: String,
    refreshToken: String,
    callback: (UserSession?, Exception?) -> Void
  ) {
    scope.launch {
      try {
        auth.importSession(
          UserSession(accessToken, refreshToken, null, null, 2000, "Bearer")
        )
        val session = auth.currentSessionOrNull()
        callback(session, null)
      } catch (e: Exception) {
        callback(null, e)
      }
    }
  }

  fun exchangeCodeForSession(authCode: String, callback: (UserSession?, Exception?) -> Void) {
    scope.launch {
      try {
        val user = auth.exchangeCodeForSession(authCode, true)
        callback(user, null)
      } catch (e: Exception) {
        callback(null, e)
      }
    }
  }


  fun update(user: UserAttributes, callback: (UserInfo?, Exception?) -> Void) {
    scope.launch {
      try {
        val result = auth.updateUser(true) {
          user.email?.let {
            this.email = it
          }
          user.password?.let {
            this.password = it
          }
          user.phone?.let {
            this.phone = it
          }

          user.nonce?.let {
            this.nonce = it
          }

          user.data?.let {
            Json.decodeFromString<JsonObject>(it)
          }
        }
        callback(result, null)
      } catch (e: Exception) {
        callback(null, e)
      }
    }
  }

  fun startAutoRefresh() {
    scope.launch {
      auth.startAutoRefreshForCurrentSession()
    }
  }

  fun stopAutoRefresh() {
    scope.launch {
      auth.stopAutoRefreshForCurrentSession()
    }
  }
}
