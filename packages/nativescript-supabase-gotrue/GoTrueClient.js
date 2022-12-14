import GoTrueApi from './GoTrueApi';
import { isBrowser, getParameterByName, uuid, LocalStorage } from './lib/helpers';
import { GOTRUE_URL, DEFAULT_HEADERS, STORAGE_KEY } from './lib/constants';
const DEFAULT_OPTIONS = {
    url: GOTRUE_URL,
    autoRefreshToken: true,
    persistSession: true,
    localStorage: globalThis.localStorage,
    detectSessionInUrl: true,
    headers: DEFAULT_HEADERS,
};
export default class GoTrueClient {
    /**
     * Create a new client for use in the browser.
     * @param options.url The URL of the GoTrue server.
     * @param options.headers Any additional headers to send to the GoTrue server.
     * @param options.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
     * @param options.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
     * @param options.persistSession Set to "true" if you want to automatically save the user session into local storage.
     * @param options.localStorage
     */
    constructor(options) {
        this.stateChangeEmitters = new Map();
        const settings = { ...DEFAULT_OPTIONS, ...options };
        this.currentUser = null;
        this.currentSession = null;
        this.autoRefreshToken = settings.autoRefreshToken;
        this.persistSession = settings.persistSession;
        this.localStorage = new LocalStorage(settings.localStorage);
        this.api = new GoTrueApi({
            url: settings.url,
            headers: settings.headers,
            cookieOptions: settings.cookieOptions,
        });
        this._recoverSession();
        this._recoverAndRefresh();
        // Handle the OAuth redirect
        try {
            if (settings.detectSessionInUrl && isBrowser() && !!getParameterByName('access_token', settings.url)) {
                this.getSessionFromUrl({ storeSession: true });
            }
        }
        catch (error) {
            console.error('Error getting session from URL.');
        }
    }
    /**
     * Creates a new user.
     * @type UserCredentials
     * @param email The user's email address.
     * @param password The user's password.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     */
    async signUp({ email, password }, options = {}) {
        try {
            this._removeSession();
            const { data, error } = await this.api.signUpWithEmail(email, password, {
                redirectTo: options.redirectTo,
            });
            if (error) {
                throw error;
            }
            if (!data) {
                throw 'An error occurred on sign up.';
            }
            let session = null;
            let user = null;
            if (data.access_token) {
                session = data;
                user = session.user;
                this._saveSession(session);
                this._notifyAllSubscribers('SIGNED_IN');
            }
            if (data.id) {
                user = data;
            }
            return { data, user, session, error: null };
        }
        catch (error) {
            return { data: null, user: null, session: null, error };
        }
    }
    /**
     * Log in an existing user, or login via a third-party provider.
     * @type UserCredentials
     * @param email The user's email address.
     * @param password The user's password.
     * @param provider One of the providers supported by GoTrue.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     * @param scopes A space-separated list of scopes granted to the OAuth application.
     */
    async signIn({ email, password, provider }, options = {}) {
        try {
            this._removeSession();
            if (email && !password) {
                const { error } = await this.api.sendMagicLinkEmail(email, {
                    redirectTo: options.redirectTo,
                });
                return { data: null, user: null, session: null, error };
            }
            if (email && password) {
                return this._handleEmailSignIn(email, password, {
                    redirectTo: options.redirectTo,
                });
            }
            if (provider) {
                return this._handleProviderSignIn(provider, {
                    redirectTo: options.redirectTo,
                    scopes: options.scopes,
                });
            }
            throw new Error(`You must provide either an email or a third-party provider.`);
        }
        catch (error) {
            return { data: null, user: null, session: null, error };
        }
    }
    /**
     * Inside a browser context, `user()` will return the user data, if there is a logged in user.
     *
     * For server-side management, you can get a user through `auth.api.getUserByCookie()`
     */
    user() {
        return this.currentUser;
    }
    /**
     * Returns the session data, if there is an active session.
     */
    session() {
        return this.currentSession;
    }
    /**
     * Force refreshes the session including the user data in case it was updated in a different session.
     */
    async refreshSession() {
        var _a;
        try {
            if (!((_a = this.currentSession) === null || _a === void 0 ? void 0 : _a.access_token))
                throw new Error('Not logged in.');
            // currentSession and currentUser will be updated to latest on _callRefreshToken
            const { error } = await this._callRefreshToken();
            if (error)
                throw error;
            return { data: this.currentSession, user: this.currentUser, error: null };
        }
        catch (error) {
            return { data: null, user: null, error };
        }
    }
    /**
     * Updates user data, if there is a logged in user.
     */
    async update(attributes) {
        var _a;
        try {
            if (!((_a = this.currentSession) === null || _a === void 0 ? void 0 : _a.access_token))
                throw new Error('Not logged in.');
            const { user, error } = await this.api.updateUser(this.currentSession.access_token, attributes);
            if (error)
                throw error;
            if (!user)
                throw Error('Invalid user data.');
            const session = { ...this.currentSession, user };
            this._saveSession(session);
            this._notifyAllSubscribers('USER_UPDATED');
            return { data: user, user, error: null };
        }
        catch (error) {
            return { data: null, user: null, error };
        }
    }
    /**
     * Sets the session data from refresh_token and returns current Session and Error
     * @param refresh_token a JWT token
     */
    async setSession(refresh_token) {
        try {
            if (!refresh_token) {
                throw new Error('No current session.');
            }
            const { data, error } = await this.api.refreshAccessToken(refresh_token);
            if (error) {
                return { session: null, error: error };
            }
            if (!data) {
                return {
                    session: null,
                    error: { name: 'Invalid refresh_token', message: 'JWT token provided is Invalid' },
                };
            }
            this._saveSession(data);
            this._notifyAllSubscribers('SIGNED_IN');
            return { session: data, error: null };
        }
        catch (error) {
            return { error, session: null };
        }
    }
    /**
     * Overrides the JWT on the current client. The JWT will then be sent in all subsequent network requests.
     * @param access_token a jwt access token
     */
    setAuth(access_token) {
        this.currentSession = {
            ...this.currentSession,
            access_token,
            token_type: 'bearer',
            user: null,
        };
        return this.currentSession;
    }
    /**
     * Gets the session data from a URL string
     * @param options.storeSession Optionally store the session in the browser
     */
    async getSessionFromUrl(options) {
        try {
            if (!isBrowser())
                throw new Error('No browser detected.');
            const error_description = getParameterByName('error_description');
            if (error_description)
                throw new Error(error_description);
            const provider_token = getParameterByName('provider_token');
            const access_token = getParameterByName('access_token');
            if (!access_token)
                throw new Error('No access_token detected.');
            const expires_in = getParameterByName('expires_in');
            if (!expires_in)
                throw new Error('No expires_in detected.');
            const refresh_token = getParameterByName('refresh_token');
            if (!refresh_token)
                throw new Error('No refresh_token detected.');
            const token_type = getParameterByName('token_type');
            if (!token_type)
                throw new Error('No token_type detected.');
            const timeNow = Math.round(Date.now() / 1000);
            const expires_at = timeNow + parseInt(expires_in);
            const { user, error } = await this.api.getUser(access_token);
            if (error)
                throw error;
            const session = {
                provider_token,
                access_token,
                expires_in: parseInt(expires_in),
                expires_at,
                refresh_token,
                token_type,
                user: user,
            };
            if (options === null || options === void 0 ? void 0 : options.storeSession) {
                this._saveSession(session);
                this._notifyAllSubscribers('SIGNED_IN');
                if (getParameterByName('type') === 'recovery') {
                    this._notifyAllSubscribers('PASSWORD_RECOVERY');
                }
            }
            // Remove tokens from URL
            window.location.hash = '';
            return { data: session, error: null };
        }
        catch (error) {
            return { data: null, error };
        }
    }
    /**
     * Inside a browser context, `signOut()` will remove extract the logged in user from the browser session
     * and log them out - removing all items from localstorage and then trigger a "SIGNED_OUT" event.
     *
     * For server-side management, you can disable sessions by passing a JWT through to `auth.api.signOut(JWT: string)`
     */
    async signOut() {
        var _a;
        const accessToken = (_a = this.currentSession) === null || _a === void 0 ? void 0 : _a.access_token;
        this._removeSession();
        this._notifyAllSubscribers('SIGNED_OUT');
        if (accessToken) {
            const { error } = await this.api.signOut(accessToken);
            if (error)
                return { error };
        }
        return { error: null };
    }
    /**
     * Receive a notification every time an auth event happens.
     * @returns {Subscription} A subscription object which can be used to unsubscribe itself.
     */
    onAuthStateChange(callback) {
        try {
            const id = uuid();
            const self = this;
            const subscription = {
                id,
                callback,
                unsubscribe: () => {
                    self.stateChangeEmitters.delete(id);
                },
            };
            this.stateChangeEmitters.set(id, subscription);
            return { data: subscription, error: null };
        }
        catch (error) {
            return { data: null, error };
        }
    }
    async _handleEmailSignIn(email, password, options = {}) {
        var _a;
        try {
            const { data, error } = await this.api.signInWithEmail(email, password, {
                redirectTo: options.redirectTo,
            });
            if (error || !data)
                return { data: null, user: null, session: null, error };
            if ((_a = data === null || data === void 0 ? void 0 : data.user) === null || _a === void 0 ? void 0 : _a.confirmed_at) {
                this._saveSession(data);
                this._notifyAllSubscribers('SIGNED_IN');
            }
            return { data, user: data.user, session: data, error: null };
        }
        catch (error) {
            return { data: null, user: null, session: null, error };
        }
    }
    _handleProviderSignIn(provider, options = {}) {
        const url = this.api.getUrlForProvider(provider, {
            redirectTo: options.redirectTo,
            scopes: options.scopes,
        });
        try {
            // try to open on the browser
            if (isBrowser()) {
                window.location.href = url;
            }
            return { provider, url, data: null, session: null, user: null, error: null };
        }
        catch (error) {
            // fallback to returning the URL
            if (!!url)
                return { provider, url, data: null, session: null, user: null, error: null };
            return { data: null, user: null, session: null, error };
        }
    }
    /**
     * Attempts to get the session from LocalStorage
     * Note: this should never be async (even for React Native), as we need it to return immediately in the constructor.
     */
    _recoverSession() {
        var _a;
        try {
            const json = isBrowser() && ((_a = this.localStorage) === null || _a === void 0 ? void 0 : _a.getItem(STORAGE_KEY));
            if (!json || typeof json !== 'string') {
                return null;
            }
            const data = JSON.parse(json);
            const { currentSession, expiresAt } = data;
            const timeNow = Math.round(Date.now() / 1000);
            if (expiresAt >= timeNow && (currentSession === null || currentSession === void 0 ? void 0 : currentSession.user)) {
                this._saveSession(currentSession);
                this._notifyAllSubscribers('SIGNED_IN');
            }
        }
        catch (error) {
            console.log('error', error);
        }
    }
    /**
     * Recovers the session from LocalStorage and refreshes
     * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
     */
    async _recoverAndRefresh() {
        try {
            const json = isBrowser() && (await this.localStorage.getItem(STORAGE_KEY));
            if (!json) {
                return null;
            }
            const data = JSON.parse(json);
            const { currentSession, expiresAt } = data;
            const timeNow = Math.round(Date.now() / 1000);
            if (expiresAt < timeNow) {
                if (this.autoRefreshToken && currentSession.refresh_token) {
                    const { error } = await this._callRefreshToken(currentSession.refresh_token);
                    if (error) {
                        console.error(error.message);
                        await this._removeSession();
                    }
                }
                else {
                    this._removeSession();
                }
            }
            else if (!currentSession || !currentSession.user) {
                console.error('Current session is missing data.');
                this._removeSession();
            }
            else {
                // should be handled on _recoverSession method already
                // But we still need the code here to accommodate for AsyncStorage e.g. in React native
                this._saveSession(currentSession);
                this._notifyAllSubscribers('SIGNED_IN');
            }
        }
        catch (err) {
            console.error(err);
            return null;
        }
    }
    async _callRefreshToken(refresh_token) {
        var _a;
        if (refresh_token === void 0) { refresh_token = (_a = this.currentSession) === null || _a === void 0 ? void 0 : _a.refresh_token; }
        try {
            if (!refresh_token) {
                throw new Error('No current session.');
            }
            const { data, error } = await this.api.refreshAccessToken(refresh_token);
            if (error)
                throw error;
            if (!data)
                throw Error('Invalid session data.');
            this._saveSession(data);
            this._notifyAllSubscribers('SIGNED_IN');
            return { data, error: null };
        }
        catch (error) {
            return { data: null, error };
        }
    }
    _notifyAllSubscribers(event) {
        this.stateChangeEmitters.forEach((x) => x.callback(event, this.currentSession));
    }
    /**
     * set currentSession and currentUser
     * process to _startAutoRefreshToken if possible
     */
    _saveSession(session) {
        this.currentSession = session;
        this.currentUser = session.user;
        const expiresAt = session.expires_at;
        const timeNow = Math.round(Date.now() / 1000);
        if (expiresAt)
            this._startAutoRefreshToken((expiresAt - timeNow - 60) * 1000);
        // Do we need any extra check before persist session
        // access_token or user ?
        if (this.persistSession && session.expires_at) {
            this._persistSession(this.currentSession);
        }
    }
    _persistSession(currentSession) {
        const data = { currentSession, expiresAt: currentSession.expires_at };
        isBrowser() && this.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
    async _removeSession() {
        this.currentSession = null;
        this.currentUser = null;
        if (this.refreshTokenTimer)
            clearTimeout(this.refreshTokenTimer);
        isBrowser() && (await this.localStorage.removeItem(STORAGE_KEY));
    }
    /**
     * Clear and re-create refresh token timer
     * @param value time intervals in milliseconds
     */
    _startAutoRefreshToken(value) {
        if (this.refreshTokenTimer)
            clearTimeout(this.refreshTokenTimer);
        if (!value || !this.autoRefreshToken)
            return;
        this.refreshTokenTimer = setTimeout(() => this._callRefreshToken(), value);
    }
}
//# sourceMappingURL=GoTrueClient.js.map