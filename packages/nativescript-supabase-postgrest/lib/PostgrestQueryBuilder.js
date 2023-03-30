import { PostgrestBuilder } from './types';
import PostgrestFilterBuilder from './PostgrestFilterBuilder';
import { URL } from 'whatwg-url';
export default class PostgrestQueryBuilder extends PostgrestBuilder {
    constructor(url, { headers = {}, schema } = {}) {
        super({});
        this.url = new URL(url);
        this.headers = { ...headers };
        this.schema = schema;
    }
    /**
     * Performs vertical filtering with SELECT.
     *
     * @param columns  The columns to retrieve, separated by commas.
     * @param head  When set to true, select will void data.
     * @param count  Count algorithm to use to count rows in a table.
     */
    select(columns = '*', { head = false, count = null, } = {}) {
        this.method = 'GET';
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = columns
            .split('')
            .map((c) => {
            if (/\s/.test(c) && !quoted) {
                return '';
            }
            if (c === '"') {
                quoted = !quoted;
            }
            return c;
        })
            .join('');
        this.url.searchParams.set('select', cleanedColumns);
        if (count) {
            this.headers['Prefer'] = `count=${count}`;
        }
        if (head) {
            this.method = 'HEAD';
        }
        return new PostgrestFilterBuilder(this);
    }
    insert(values, { upsert = false, onConflict, returning = 'representation', count = null, } = {}) {
        this.method = 'POST';
        const prefersHeaders = [`return=${returning}`];
        if (upsert)
            prefersHeaders.push('resolution=merge-duplicates');
        if (upsert && onConflict !== undefined)
            this.url.searchParams.set('on_conflict', onConflict);
        this.body = values;
        if (count) {
            prefersHeaders.push(`count=${count}`);
        }
        this.headers['Prefer'] = prefersHeaders.join(',');
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x) => acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [...new Set(columns)];
                this.url.searchParams.set('columns', uniqueColumns.join(','));
            }
        }
        return new PostgrestFilterBuilder(this);
    }
    /**
     * Performs an UPSERT into the table.
     *
     * @param values  The values to insert.
     * @param onConflict  By specifying the `on_conflict` query parameter, you can make UPSERT work on a column(s) that has a UNIQUE constraint.
     * @param returning  By default the new record is returned. Set this to 'minimal' if you don't need this value.
     * @param count  Count algorithm to use to count rows in a table.
     */
    upsert(values, { onConflict, returning = 'representation', count = null, } = {}) {
        this.method = 'POST';
        const prefersHeaders = ['resolution=merge-duplicates', `return=${returning}`];
        if (onConflict !== undefined)
            this.url.searchParams.set('on_conflict', onConflict);
        this.body = values;
        if (count) {
            prefersHeaders.push(`count=${count}`);
        }
        this.headers['Prefer'] = prefersHeaders.join(',');
        return new PostgrestFilterBuilder(this);
    }
    /**
     * Performs an UPDATE on the table.
     *
     * @param values  The values to update.
     * @param returning  By default the updated record is returned. Set this to 'minimal' if you don't need this value.
     * @param count  Count algorithm to use to count rows in a table.
     */
    update(values, { returning = 'representation', count = null, } = {}) {
        this.method = 'PATCH';
        const prefersHeaders = [`return=${returning}`];
        this.body = values;
        if (count) {
            prefersHeaders.push(`count=${count}`);
        }
        this.headers['Prefer'] = prefersHeaders.join(',');
        return new PostgrestFilterBuilder(this);
    }
    /**
     * Performs a DELETE on the table.
     *
     * @param returning  If `true`, return the deleted row(s) in the response.
     * @param count  Count algorithm to use to count rows in a table.
     */
    delete({ returning = 'representation', count = null, } = {}) {
        this.method = 'DELETE';
        const prefersHeaders = [`return=${returning}`];
        if (count) {
            prefersHeaders.push(`count=${count}`);
        }
        this.headers['Prefer'] = prefersHeaders.join(',');
        return new PostgrestFilterBuilder(this);
    }
}
//# sourceMappingURL=PostgrestQueryBuilder.js.map