import { createSdk } from '../internal/core/sdk';
import { DescopeNative } from '../internal/modules/descopeModule';
import { setCurrentTokens, setCurrentUser } from '../helpers';
import type { SdkConfig } from '../internal/core/sdk';
import type { DescopeSession } from '../types';

interface AuthContext {
	sdk: ReturnType<typeof createSdk>;
	logger?: SdkConfig[0]['logger'];
	projectId: string;
	session?: DescopeSession;
	isSessionLoading: boolean;
	setSession(session: DescopeSession | undefined): void;
}

class AuthProvider {
	private context: AuthContext;

	constructor(config: Pick<SdkConfig[0], 'projectId' | 'baseUrl' | 'logger' | 'fetch'>) {
		const { projectId, baseUrl, logger, fetch } = config;

		this.context = {
			sdk: createSdk({ projectId, baseUrl, logger, fetch }),
			logger,
			projectId,
			session: undefined,
			isSessionLoading: true,
			setSession: (session) => {
				this.context.session = session;
			},
		};

		this.initializeSession();
	}

	private async initializeSession(): Promise<void> {
		const { logger, projectId, setSession } = this.context;

		logger?.log('Searching for persisted session');
		try {
			const loaded = await DescopeNative.loadItem(projectId);

			if (loaded?.length) {
				logger?.log('Persisted session found');
				const parsed = JSON.parse(loaded) as DescopeSession;
				setCurrentTokens(parsed.sessionJwt, parsed.refreshJwt);
				setCurrentUser(parsed.user);
				setSession(parsed);
			} else {
				logger?.log('No persisted session found');
				setSession(undefined);
			}
		} catch (e) {
			logger?.error('Failed to search for persisted session', e);
			setSession(undefined);
		} finally {
			this.context.isSessionLoading = false;
		}
	}

	public getContext(): AuthContext {
		return this.context;
	}
}

export default AuthProvider;
