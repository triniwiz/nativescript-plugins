import { PostgrestBuilder, PostgrestSingleResponse } from './types';
/**
 * Post-filters (transforms)
 */
export default class PostgrestTransformBuilder<T> extends PostgrestBuilder<T> {
    /**
     * Performs vertical filtering with SELECT.
     *
     * @param columns  The columns to retrieve, separated by commas.
     */
    select(columns?: string): this;
    /**
     * Orders the result with the specified `column`.
     *
     * @param column  The column to order on.
     * @param ascending  If `true`, the result will be in ascending order.
     * @param nullsFirst  If `true`, `null`s appear first.
     * @param foreignTable  The foreign table to use (if `column` is a foreign column).
     */
    order(column: keyof T, { ascending, nullsFirst, foreignTable, }?: {
        ascending?: boolean;
        nullsFirst?: boolean;
        foreignTable?: string;
    }): this;
    /**
     * Limits the result with the specified `count`.
     *
     * @param count  The maximum no. of rows to limit to.
     * @param foreignTable  The foreign table to use (for foreign columns).
     */
    limit(count: number, { foreignTable }?: {
        foreignTable?: string;
    }): this;
    /**
     * Limits the result to rows within the specified range, inclusive.
     *
     * @param from  The starting index from which to limit the result, inclusive.
     * @param to  The last index to which to limit the result, inclusive.
     * @param foreignTable  The foreign table to use (for foreign columns).
     */
    range(from: number, to: number, { foreignTable }?: {
        foreignTable?: string;
    }): this;
    /**
     * Retrieves only one row from the result. Result must be one row (e.g. using
     * `limit`), otherwise this will result in an error.
     */
    single(): PromiseLike<PostgrestSingleResponse<T>>;
}
