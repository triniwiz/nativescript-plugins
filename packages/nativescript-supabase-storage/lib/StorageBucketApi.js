import { get, post, remove } from './fetch';
export class StorageBucketApi {
    constructor(url, headers = {}) {
        this.url = url;
        this.headers = headers;
    }
    /**
     * Retrieves the details of all Storage buckets within an existing product.
     */
    async listBuckets() {
        try {
            const data = await get(`${this.url}/bucket`, { headers: this.headers });
            return { data, error: null };
        }
        catch (error) {
            return { data: null, error };
        }
    }
    /**
     * Retrieves the details of an existing Storage bucket.
     *
     * @param id The unique identifier of the bucket you would like to retrieve.
     */
    async getBucket(id) {
        try {
            const data = await get(`${this.url}/bucket/${id}`, { headers: this.headers });
            return { data, error: null };
        }
        catch (error) {
            return { data: null, error };
        }
    }
    /**
     * Creates a new Storage bucket
     *
     * @param id A unique identifier for the bucket you are creating.
     * @returns newly created bucket id
     */
    async createBucket(id) {
        try {
            const data = await post(`${this.url}/bucket`, { id, name: id }, { headers: this.headers });
            return { data: data.name, error: null };
        }
        catch (error) {
            return { data: null, error };
        }
    }
    /**
     * Removes all objects inside a single bucket.
     *
     * @param id The unique identifier of the bucket you would like to empty.
     */
    async emptyBucket(id) {
        try {
            const data = await post(`${this.url}/bucket/${id}/empty`, {}, { headers: this.headers });
            return { data, error: null };
        }
        catch (error) {
            return { data: null, error };
        }
    }
    /**
     * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
     * You must first `empty()` the bucket.
     *
     * @param id The unique identifier of the bucket you would like to delete.
     */
    async deleteBucket(id) {
        try {
            const data = await remove(`${this.url}/bucket/${id}`, {}, { headers: this.headers });
            return { data, error: null };
        }
        catch (error) {
            return { data: null, error };
        }
    }
}
//# sourceMappingURL=StorageBucketApi.js.map