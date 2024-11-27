import { createSdk, type Sdk } from '../internal/core/sdk';
import { proxyThrowHandler } from '../internal/utils';

class DescopeContext {
	private sdk?: Sdk;

	constructor(sdk?: Sdk) {
		this.sdk = sdk;
	}

	getSdk(): Sdk {
		if (!this.sdk) {
			// If the SDK is not initialized, return a proxy that throws an error when SDK functions are called
			return new Proxy(createSdk({ projectId: 'dummy-project-id' }), proxyThrowHandler) as Sdk;
		}
		return this.sdk;
	}

	setSdk(sdk: Sdk): void {
		this.sdk = sdk;
	}
}

const descopeContext = new DescopeContext();

const useDescope = (): Sdk => {
	return descopeContext.getSdk();
};

export const setDescopeSdk = (sdk: Sdk): void => {
	descopeContext.setSdk(sdk);
};

export default useDescope;
