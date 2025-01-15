import { dataDeserialize, dataSerialize } from '@nativescript/core/utils';
import { FunctionOptions } from '.';
import type { SupabaseClient } from '../index';
import { response } from 'express';
import * as e from 'cors';
type Client = SupabaseClient & { native: NSCSupabaseClient };
function parseOptions(options?: FunctionOptions) {
	if (!options) {
		return null;
	}

	let ret: NSCSupabaseFunctionInvokeOptions;

	if (options.body instanceof ArrayBuffer) {
		ret = NSCSupabaseFunctionInvokeOptions.alloc().initWithFileBody(NSData.dataWithData(options.body as never));
	} else if (options.body) {
		ret = NSCSupabaseFunctionInvokeOptions.alloc().initWithJson(dataSerialize(options.body));
	} else {
		ret = NSCSupabaseFunctionInvokeOptions.new();
	}

	if (options.headers) {
		ret.headers = dataSerialize(options.headers);
	}

	if (options.method) {
		ret.method = options.method;
	}

	return ret;
}

class Context {
	error: FunctionsHttpError;
	json() {
		return new Promise<Record<string, any>>((resolve, reject) => {
			this.error.native.json((data, error) => {
				if (error) {
					reject(error);
				} else {
					resolve(data);
				}
			});
		});
	}
}

export class FunctionsHttpError extends Error {
	native_: NSCSupabaseFunctionsErrorResult;
	context_: Context;

	get native() {
		return this.native_;
	}

	static fromNative(value: NSCSupabaseFunctionsErrorResult): FunctionsHttpError {
		if (!value) return null;
		const ret = new FunctionsHttpError(value.message);
		ret.native_ = value;
		ret.context_ = new Context();
		ret.context_.error = ret;
		return ret;
	}
}

export class FunctionsRelayError extends Error {}
export class SupabaseFunctionsClient {
	client: Client;
	constructor(client: Client) {
		this.client = client;
	}

	get native() {
		return this.client.native.functions;
	}

	invoke(functionName: string, options?: FunctionOptions): Promise<any> {
		return new Promise((resolve, reject) => {
			this.native.invoke(functionName, parseOptions(options), (response, error) => {
				if (error) {
					if (error.isHttpError) {
						reject(FunctionsHttpError.fromNative(error));
					} else {
						reject(new FunctionsRelayError(error.message));
					}
				} else {
					const headers = dataDeserialize(response.response.allHeaderFields);
					const responseType = (headers['Content-Type'] ?? 'text/plain').split(';')[0].trim();

					let data: any;
					if (responseType === 'application/json') {
						response.json(function (data, error) {
							if (error) {
								reject(error);
							} else {
								resolve({ data: dataDeserialize(data) });
							}
						});
					} else if (responseType === 'application/octet-stream') {
						resolve({
							data: new Blob([interop.bufferFromData(response.data)], { type: headers['Content-Type'] }),
						});
					} else if (responseType === 'text/event-stream') {
						// todo support event stream
						reject('text/event-stream is not supported');
						// data = response;
					} else if (responseType === 'multipart/form-data') {
						reject('multipart/form-data is not supported');
						// todo support formdata
						// data = await response.formData()
					} else {
						// default to text
						response.text((data) => {
							if (data) {
								resolve({ data });
							} else {
								resolve(new Error('No data'));
							}
						});
					}
				}
			});
		});
	}
}
