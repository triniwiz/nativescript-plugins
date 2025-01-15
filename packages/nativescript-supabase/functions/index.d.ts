import { SupabaseClient } from '../index';

export interface FunctionOptions {
	body?: Record<string, any> | ArrayBuffer;
	headers?: Record<string, string>;
	method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
}

export class SupabaseFunctionsClient {
	constructor(client: SupabaseClient);

	invoke(functionName: string, options: FunctionOptions): Promise<any>;
}
