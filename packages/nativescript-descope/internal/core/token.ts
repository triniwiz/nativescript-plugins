export const tokenExpirationWithinThreshold = (token: string, msThreshold: number) => {
	const expiration = getTokenExpiration(token);
	return expiration ? millisecondsUntilDate(expiration) > msThreshold : false;
};

const getTokenExpiration = (token: string) => {
	const parts = token.split('.');
	try {
		if (parts.length === 3 && parts[1]) {
			const claims = JSON.parse(atob(parts[1]));
			if (claims.exp) {
				return new Date(claims.exp * 1000);
			}
		}
	} catch (e) {}
	return undefined;
};

const millisecondsUntilDate = (date?: Date) => (date ? date.getTime() - new Date().getTime() : 0);
