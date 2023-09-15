type Fetch = typeof fetch;

export const resolveFetch = (customFetch?: Fetch): Fetch => {
	let _fetch: Fetch;
	if (customFetch) {
		_fetch = customFetch;
	} else {
		_fetch = fetch;
	}
	// @ts-ignore
	return (...args) => _fetch(...args);
};

export const resolveResponse = async () => {
	// if (typeof Response === 'undefined') {
	// 	return (await import('cross-fetch')).Response;
	// }

	return Response;
};
