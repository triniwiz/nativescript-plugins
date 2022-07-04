import { PostgrestBuilder } from './types';
import PostgrestFilterBuilder from './PostgrestFilterBuilder';
export default class PostgrestRpcBuilder<T> extends PostgrestBuilder<T> {
    constructor(url: string, { headers, schema }?: {
        headers?: {
            [key: string]: string;
        };
        schema?: string;
    });
    /**
     * Perform a stored procedure call.
     */
    rpc(params?: object, { count, }?: {
        count?: null | 'exact' | 'planned' | 'estimated';
    }): PostgrestFilterBuilder<T>;
}
