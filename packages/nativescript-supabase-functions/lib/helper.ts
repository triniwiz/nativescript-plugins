import { Fetch } from './types';

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
