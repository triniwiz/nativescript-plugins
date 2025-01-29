const generateErrorMsg = (entryType: string) => `You can only use this ${entryType} after sdk initialization. Make sure to provide a 'projectId' to the AuthProvider`;

// handler which throw an error for every SDK function
export const proxyThrowHandler = {
	get(target: Record<string, any>, key: string): any {
		if (typeof target[key] === 'object' && target[key] !== null) {
			return new Proxy(target[key], proxyThrowHandler);
		}

		if (typeof target[key] === 'function') {
			return () => {
				throw Error(generateErrorMsg('function'));
			};
		}

		throw Error(generateErrorMsg('attribute'));
	},
};
