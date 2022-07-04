import PostgrestQueryBuilder from './lib/PostgrestQueryBuilder';
import PostgrestRpcBuilder from './lib/PostgrestRpcBuilder';
export default class PostgrestClient {
    /**
     * Creates a PostgREST client.
     *
     * @param url  URL of the PostgREST endpoint.
     * @param headers  Custom headers.
     * @param schema  Postgres schema to switch to.
     */
    constructor(url, { headers = {}, schema } = {}) {
        this.url = url;
        this.headers = headers;
        this.schema = schema;
    }
    /**
     * Authenticates the request with JWT.
     *
     * @param token  The JWT token to use.
     */
    auth(token) {
        this.headers['Authorization'] = `Bearer ${token}`;
        return this;
    }
    /**
     * Perform a table operation.
     *
     * @param table  The table name to operate on.
     */
    from(table) {
        const url = `${this.url}/${table}`;
        return new PostgrestQueryBuilder(url, { headers: this.headers, schema: this.schema });
    }
    /**
     * Perform a stored procedure call.
     *
     * @param fn  The function name to call.
     * @param params  The parameters to pass to the function call.
     * @param count  Count algorithm to use to count rows in a table.
     */
    rpc(fn, params, { count = null, } = {}) {
        const url = `${this.url}/rpc/${fn}`;
        return new PostgrestRpcBuilder(url, {
            headers: this.headers,
            schema: this.schema,
        }).rpc(params, { count });
    }
}
//# sourceMappingURL=PostgrestClient.js.map