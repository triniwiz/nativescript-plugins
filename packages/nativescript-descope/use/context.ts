import { createSdk, Sdk, SdkConfig } from '../internal/core/sdk';
import { proxyThrowHandler } from '../internal/utils';

const sdk_ = Symbol('[[sdk]]');
export class DescopeContext {
	[sdk_]: ReturnType<typeof createSdk>;
	logger?: SdkConfig[0]['logger'];
	projectId: string;
	constructor(config: Pick<SdkConfig[0], 'projectId' | 'baseUrl' | 'logger' | 'fetch'>) {
		const { projectId, baseUrl, logger, fetch } = config;
		this[sdk_] = createSdk({ projectId, baseUrl, logger, fetch });
		this.logger = logger;
		this.projectId = projectId;
	}

	get sdk() {
		if (!this[sdk_]) {
			// If the SDK is not initialized, return a proxy that throws an error when SDK functions are called
			return new Proxy(createSdk({ projectId: 'dummy-project-id' }), proxyThrowHandler) as Sdk;
		}
		return this[sdk_];
	}
}
