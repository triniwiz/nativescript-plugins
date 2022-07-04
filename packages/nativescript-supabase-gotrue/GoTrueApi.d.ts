import { Session, Provider, UserAttributes, CookieOptions, User } from './lib/types';
export default class GoTrueApi {
    protected url: string;
    protected headers: {
        [key: string]: string;
    };
    protected cookieOptions: CookieOptions;
    constructor({ url, headers, cookieOptions, }: {
        url: string;
        headers?: {
            [key: string]: string;
        };
        cookieOptions?: CookieOptions;
    });
    /**
     * Creates a new user using their email address.
     * @param email The email address of the user.
     * @param password The password of the user.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     *
     * @returns A logged-in session if the server has "autoconfirm" ON
     * @returns A user if the server has "autoconfirm" OFF
     */
    signUpWithEmail(email: string, password: string, options?: {
        redirectTo?: string;
    }): Promise<{
        data: Session | User | null;
        error: Error | null;
    }>;
    /**
     * Logs in an existing user using their email address.
     * @param email The email address of the user.
     * @param password The password of the user.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     */
    signInWithEmail(email: string, password: string, options?: {
        redirectTo?: string;
    }): Promise<{
        data: Session | null;
        error: Error | null;
    }>;
    /**
     * Sends a magic login link to an email address.
     * @param email The email address of the user.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     */
    sendMagicLinkEmail(email: string, options?: {
        redirectTo?: string;
    }): Promise<{
        data: {} | null;
        error: Error | null;
    }>;
    /**
     * Sends an invite link to an email address.
     * @param email The email address of the user.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     */
    inviteUserByEmail(email: string, options?: {
        redirectTo?: string;
    }): Promise<{
        data: User | null;
        error: Error | null;
    }>;
    /**
     * Sends a reset request to an email address.
     * @param email The email address of the user.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     */
    resetPasswordForEmail(email: string, options?: {
        redirectTo?: string;
    }): Promise<{
        data: {} | null;
        error: Error | null;
    }>;
    /**
     * Create a temporary object with all configured headers and
     * adds the Authorization token to be used on request methods
     * @param jwt A valid, logged-in JWT.
     */
    private _createRequestHeaders;
    /**
     * Removes a logged-in session.
     * @param jwt A valid, logged-in JWT.
     */
    signOut(jwt: string): Promise<{
        error: Error | null;
    }>;
    /**
     * Generates the relevant login URL for a third-party provider.
     * @param provider One of the providers supported by GoTrue.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     * @param scopes A space-separated list of scopes granted to the OAuth application.
     */
    getUrlForProvider(provider: Provider, options: {
        redirectTo?: string;
        scopes?: string;
    }): string;
    /**
     * Gets the user details.
     * @param jwt A valid, logged-in JWT.
     */
    getUser(jwt: string): Promise<{
        user: User | null;
        data: User | null;
        error: Error | null;
    }>;
    /**
     * Updates the user data.
     * @param jwt A valid, logged-in JWT.
     * @param attributes The data you want to update.
     */
    updateUser(jwt: string, attributes: UserAttributes): Promise<{
        user: User | null;
        data: User | null;
        error: Error | null;
    }>;
    /**
     * Delete an user.
     * @param uid The user uid you want to remove.
     * @param jwt A valid JWT. Must be a full-access API key (e.g. service_role key).
     */
    deleteUser(uid: string, jwt: string): Promise<{
        user: User | null;
        data: User | null;
        error: Error | null;
    }>;
    /**
     * Generates a new JWT.
     * @param refreshToken A valid refresh token that was returned on login.
     */
    refreshAccessToken(refreshToken: string): Promise<{
        data: Session | null;
        error: Error | null;
    }>;
    /**
     * Set/delete the auth cookie based on the AuthChangeEvent.
     * Works for Next.js & Express (requires cookie-parser middleware).
     */
    setAuthCookie(req: any, res: any): void;
    /**
     * Get user by reading the cookie from the request.
     * Works for Next.js & Express (requires cookie-parser middleware).
     */
    getUserByCookie(req: any): Promise<{
        user: User | null;
        data: User | null;
        error: Error | null;
    }>;
}
