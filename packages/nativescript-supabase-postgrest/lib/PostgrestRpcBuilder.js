import { PostgrestBuilder } from './types';
import PostgrestFilterBuilder from './PostgrestFilterBuilder';
import { URL } from 'whatwg-url';
export default class PostgrestRpcBuilder extends PostgrestBuilder {
    constructor(url, { headers = {}, schema } = {}) {
        super({});
        this.url = new URL(url);
        this.headers = { ...headers };
        this.schema = schema;
    }
    /**
     * Perform a stored procedure call.
     */
    rpc(params, { count = null, } = {}) {
        this.method = 'POST';
        this.body = params;
        if (count) {
            if (this.headers['Prefer'] !== undefined)
                this.headers['Prefer'] += `,count=${count}`;
            else
                this.headers['Prefer'] = `count=${count}`;
        }
        return new PostgrestFilterBuilder(this);
    }
}
//# sourceMappingURL=PostgrestRpcBuilder.js.map