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

export const fetchWithAuth = (supabaseKey: string, getAccessToken: () => Promise<string | null>, customFetch?: Fetch): Fetch => {
	const fetch = resolveFetch(customFetch);

	return async (input, init) => {
		const accessToken = (await getAccessToken()) ?? supabaseKey;

		const headers = {
			...init?.headers,
		};

		if (!('apikey' in headers)) {
			headers['apikey'] = supabaseKey;
		}

		if (!('Authorization' in headers)) {
			headers['Authorization'] = `Bearer ${accessToken}`;
		}

		return fetch(input, { ...init, headers });
	};
};
