import type { JWTResponse, SdkResponse, UserResponse } from '@descope/core-js-sdk';

/**
 * The `DescopeSession` class represents a successful sign in operation.
 *
 * The session can then be used to authenticate outgoing requests to your backend
 * with a bearer token authorization header.
 *
 *     const { session } = useSession()
 *
 *     const res = await fetch('/path/to/server/api', {
 *         headers: {
 *             Authorization: `Bearer ${session.sessionJwt}`,
 *         },
 *     })
 */
export interface DescopeSession {
	/** The short lived JWT that can be sent with every server request that requires authentication.*/
	sessionJwt: string;
	/** The longer lived JWT that is used to create new session JWTs until it expires.*/
	refreshJwt: string;
	/** The user to whom the [DescopeSession] belongs to. */
	user: UserResponse;
}

/**
 * The `DescopeSessionManager` is used to manage an authenticated
 * user session for an application.
 *
 * The session manager takes care of loading and saving the session as well
 * as ensuring that it's refreshed when needed.
 *
 * The session manager takes care of loading and saving the session as well
 * as ensuring that it's refreshed when needed. When the user completes a sign
 * in flow successfully you should set the `DescopeSession` as the
 * active session of the session manager.
 *
 *     import { useDescope, useSession } from '@descope/react-native-sdk'
 *
 *     const descope = useDescope()
 *     const { manageSession } = useSession()
 *
 *     const resp = await descope.otp.email.verify('andy@example.com', '123456')
 *     manageSession(resp.data)
 *
 * The session manager can then be used at any time to ensure the session
 * is valid and to authenticate outgoing requests to your backend with a
 * bearer token authorization header.
 *
 *     const { session } = useSession()
 *
 *     const res = await fetch('/path/to/server/api', {
 *         headers: {
 *             Authorization: `Bearer ${session.sessionJwt}`,
 *         },
 *     })
 */
export interface DescopeSessionManager {
	/** The active [DescopeSession] managed by this object. */
	session?: DescopeSession;
	/** A loading flag, set to true during initial load. Updates to false once loading completes. Only loads once. */
	isSessionLoading: boolean;
	/**
	 * Set an active [DescopeSession] in this manager.
	 *
	 * You should call this function after a user finishes logging in to the
	 * host application.
	 *
	 * The parameter is set as the value of the [session] property and is persisted
	 * so it can be reloaded on the next application launch.
	 */
	manageSession(jwtResponse?: JWTResponse): Promise<void>;
	/**
	 * Ensures that the session is valid and refreshes it if needed.
	 *
	 * The session manager checks whether there's an active [DescopeSession] and if
	 * its session JWT expires within the next 60 seconds. If that's the case then
	 * the session is refreshed and persisted before returning.
	 */
	refreshSessionIfAboutToExpire(): Promise<DescopeSession | undefined>;
	/**
	 * Clears any active [DescopeSession] from this manager.
	 *
	 * You should call this function as part of a logout flow in the host application.
	 * The `session` property is set to `undefined` and the session won't be reloaded in
	 * subsequent application launches.
	 */
	clearSession(): Promise<void>;
	/**
	 * Updates the active session's underlying JWTs.
	 *
	 * This function accepts a [JwtResponse] value as a parameter which is returned
	 * by calls to `descope.refresh`. The manager will persist the updated session.
	 *
	 * **Important:** In most circumstances it's best to use [refreshSessionIfNeeded] and let
	 * it update the session unless you need to invoke `descope.refresh` manually.
	 */
	updateTokens(sessionJwt: string, refreshJwt: string): Promise<void>;
	/**
	 * Updates the active session's user details.
	 *
	 * This function accepts a [UserResponse] value as a parameter which is returned by
	 * calls to `descope.me`. The manager will save the updated session to the
	 * storage.
	 *
	 *     import { useDescope, useSession } from '@descope/react-native-sdk'
	 *
	 *     const descope = useDescope()
	 *     const { updateUser } = useSession()
	 *
	 *     const userResponse = await descope.me(session.refreshJwt)
	 *     updateUser(userResponse)
	 */
	updateUser(userResponse: UserResponse): Promise<void>;
}

/**
 * Authenticate a user using a flow.
 *
 * Descope Flows is a visual no-code interface to build screens and authentication flows
 * for common user interactions with your application. Flows are hosted on a webpage and
 * are run using a sandboxed browser view.
 *
 * Under the hood, this authentication function uses platform specific classes to
 * display the flows: `ASWebAuthenticationSession` on iOS and `Custom Tabs` on Android.
 * If targeting Android you need to set up `Android App Links` in order to communicate back
 * to the application. Read more about it in the README under the `Running Flows` section.
 */
export interface DescopeFlow {
	/**
	 * Starts a user authentication flow.
	 *
	 * If the user has an **active session** and this function was provided with `FlowAuthentication`,
	 * this flow will run with the user logged in.
	 *
	 * For Android only, you can provide a backup custom scheme. The custom scheme will be used
	 * only for users whose default browser doesn't open App Links automatically, such as Opera.
	 *
	 * The flow screens are presented in a sandboxed browser view that's displayed by this
	 * function call. The function then waits until the authentication completed successfully,
	 * at which point it will return an [JwtResponse] as in all other
	 * authentication functions. Provide this call with a [flowUrl] where the flow
	 * is hosted, and optionally a [deepLinkUrl] if targeting Android. This is the URL
	 * that needs to be called by Descope in order to return a result from the flow.
	 * This result URI should then be processed by the [exchange] function.
	 */
	start(flowUrl: string, deepLinkUrl: string, backupCustomScheme?: string, authentication?: FlowAuthentication): Promise<SdkResponse<JWTResponse>>;
	/**
	 * Resumes an ongoing flow after a redirect back to the app with an [incomingUri].
	 * This is required for *Magic Link only* at this stage.
	 *
	 * **Note:** This requires additional setup on the application side.
	 * See the README for more details.
	 */
	resume(incomingUrl: string): Promise<void>;
	/**
	 * Exchange a URL for an [JwtResponse].
	 *
	 * This function should be called only when targeting Android.
	 * When a flow completes successfully, the result will be sent through
	 * the configured deep link URL. However, it must still be exchanged for an
	 * actual [JwtResponse] to complete the authentication flow.
	 * The [JwtResponse] will be returned to the original call to [start].
	 */
	exchange(incomingUrl: string): Promise<void>;
}

/** Provide authentication info if the flow is being run by a user that's already authenticated. */
export type FlowAuthentication = {
	/** The ID of the flow about to be run. */
	flowId: string;
	/** The refresh JWT from an active descope session */
	refreshJwt: string;
};
