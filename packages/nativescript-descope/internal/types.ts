import type { DescopeSession } from '../types';
import type { Sdk, SdkLogger } from './core/sdk';

export interface DescopeContext {
	sdk?: Sdk;
	logger?: SdkLogger;
	projectId: string;
	session?: DescopeSession;
	setSession: DescopeSession | undefined;
	isSessionLoading: boolean;
}
