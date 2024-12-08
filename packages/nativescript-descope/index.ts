import { SdkConfig } from './internal/core/sdk';
import { DescopeContext } from './use/context';
import { FlowManager } from './use/flow';
import { SessionManager } from './use/session';
import { DescopeFlow, DescopeSessionManager } from './types';

const sessionManager_ = Symbol('[[sessionManager]]');
const context_ = Symbol('[[context]]');
const flow_ = Symbol('[[flow]]');

export class Descope {
	static [context_]: DescopeContext;
	static setup(config: Pick<SdkConfig[0], 'projectId' | 'baseUrl' | 'logger' | 'fetch'>): void {
		this[context_] = new DescopeContext(config);
		this[sessionManager_] = new SessionManager(this[context_]);
		this[flow_] = new FlowManager(this[context_]);
	}
	static [sessionManager_]: SessionManager;
	static get sessionManager(): DescopeSessionManager {
		return this[sessionManager_];
	}
	static [flow_]: FlowManager;
	static get flow(): DescopeFlow {
		return this[flow_];
	}

	static get accessKey() {
		return this[context_].sdk.accessKey;
	}

	static get otp() {
		return this[context_].sdk.otp;
	}

	static get magicLink() {
		return this[context_].sdk.magicLink;
	}

	static get enchantedLink() {
		return this[context_].sdk.enchantedLink;
	}

	static get oauth() {
		return this[context_].sdk.oauth;
	}

	static get saml() {
		return this[context_].sdk.saml;
	}

	static get totp() {
		return this[context_].sdk.totp;
	}

	static get notp() {
		return this[context_].sdk.notp;
	}

	static get webauthn() {
		return this[context_].sdk.webauthn;
	}

	static get password() {
		return this[context_].sdk.password;
	}

	static refresh(token?: string) {
		return this[context_].sdk.refresh(token);
	}

	static selectTenant(tenantId: string, token?: string) {
		return this[context_].sdk.selectTenant(tenantId, token);
	}
	static logout(token?: string) {
		return this[context_].sdk.logout(token);
	}
	static logoutAll(token?: string) {
		return this[context_].sdk.logoutAll(token);
	}
	static me(token?: string) {
		return this[context_].sdk.me(token);
	}
	static history(token?: string) {
		return this[context_].sdk.history(token);
	}
	static isJwtExpired(token: string) {
		return this[context_].sdk.isJwtExpired(token);
	}
	static getTenants(token: string) {
		return this[context_].sdk.getTenants(token);
	}
	static getJwtPermissions(token: string, tenant?: string) {
		return this[context_].sdk.getJwtPermissions(token, tenant);
	}
	static getJwtRoles(token: string, tenant?: string) {
		return this[context_].sdk.getJwtRoles(token, tenant);
	}
	static get httpClient() {
		return this[context_].sdk.httpClient;
	}
}
