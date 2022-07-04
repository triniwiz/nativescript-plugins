const _getErrorMessage = (err) => err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
const handleError = (error, reject) => {
    if (typeof error.json !== 'function') {
        return reject(error);
    }
    error.json().then((err) => {
        return reject({
            message: _getErrorMessage(err),
            status: (error === null || error === void 0 ? void 0 : error.status) || 500,
        });
    });
};
const _getRequestParams = (method, options, parameters, body) => {
    const params = { method, headers: (options === null || options === void 0 ? void 0 : options.headers) || {} };
    if (method === 'GET') {
        return params;
    }
    params.headers = { 'Content-Type': 'application/json', ...options === null || options === void 0 ? void 0 : options.headers };
    params.body = JSON.stringify(body);
    return { ...params, ...parameters };
};
async function _handleRequest(method, url, options, parameters, body) {
    return new Promise((resolve, reject) => {
        fetch(url, _getRequestParams(method, options, parameters, body))
            .then((result) => {
            if (!result.ok)
                throw result;
            if (options === null || options === void 0 ? void 0 : options.noResolveJson)
                return resolve(result);
            return result.json();
        })
            .then((data) => resolve(data))
            .catch((error) => handleError(error, reject));
    });
}
export async function get(url, options, parameters) {
    return _handleRequest('GET', url, options, parameters);
}
export async function post(url, body, options, parameters) {
    return _handleRequest('POST', url, options, parameters, body);
}
export async function put(url, body, options, parameters) {
    return _handleRequest('PUT', url, options, parameters, body);
}
export async function remove(url, body, options, parameters) {
    return _handleRequest('DELETE', url, options, parameters, body);
}
//# sourceMappingURL=fetch.js.map