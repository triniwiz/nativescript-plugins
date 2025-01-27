import { FunctionOptions } from '.';
import type { SupabaseClient } from '../index';
import { Utils } from '@nativescript/core';
declare const kotlin: any;
type Client = SupabaseClient & { native: io.github.triniwiz.supabase.SupabaseClient };
function parseOptions(options?: FunctionOptions) {
	if (!options) {
		return null;
	}

	let ret: io.github.triniwiz.supabase.SupabaseFunctions.InvokeOptions;

	if (options.body instanceof ArrayBuffer) {
		ret = new io.github.triniwiz.supabase.SupabaseFunctions.InvokeOptions(options.body as never);
	} else if (options.body) {
		ret = new io.github.triniwiz.supabase.SupabaseFunctions.InvokeOptions(JSON.stringify(options.body));
	} else {
		ret = new io.github.triniwiz.supabase.SupabaseFunctions.InvokeOptions();
	}

	if (options.headers) {
		ret.setHeaders(Utils.dataSerialize(options.headers));
	}

	if (options.method) {
		ret.setMethod(options.method);
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
		return this.client.native.getFunctions();
	}

	invoke(functionName: string, options?: FunctionOptions): Promise<any> {
		return new Promise((resolve, reject) => {
			this.native.invoke(
				functionName,
				options ? parseOptions(options) : null,
				new kotlin.jvm.functions.Function2({
					invoke(response, error) {
						if (error) {
							if (error.isHttpError) {
								//reject(FunctionsHttpError.fromNative(error));
							} else {
								//	reject(new FunctionsRelayError(error.message));
							}
						} else {
							const headers = response.getHeaders();
							const responseType = headers.get('Content-Type') ?? headers.get('Content-Type') ?? 'text/plain';

							console.log(responseType);

							let data: any;
							if (responseType === 'application/json') {
								response.toJSON(
									new kotlin.jvm.functions.Function2({
										invoke(data, error) {
											console.log(data);
											/*
												if (error) {
										reject(error);
									} else {
										resolve({ data: dataDeserialize(data) });
									}
											*/

											if (error) {
											} else {
											}
										},
									}),
								);
							} else if (responseType === 'application/octet-stream') {
								response.toBuffer(
									new kotlin.jvm.functions.Function2({
										invoke(data, error) {
											/*
												if (error) {
										reject(error);
									} else {
										resolve({ data: dataDeserialize(data) });
									}
											*/
											console.log(data);
											if (error) {
											} else {
											}
										},
									}),
								);
								// resolve({
								// 	data: new Blob([interop.bufferFromData(response.data)], { type: headers['Content-Type'] }),
								// });
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
								// response.text((data) => {
								// 	if (data) {
								// 		resolve({ data });
								// 	} else {
								// 		resolve(new Error('No data'));
								// 	}
								// });

								response.toText(
									new kotlin.jvm.functions.Function2({
										invoke(data, error) {
											/*
												if (error) {
										reject(error);
									} else {
										resolve({ data: dataDeserialize(data) });
									}
											*/
											console.log(data);
											if (error) {
											} else {
											}
										},
									}),
								);
							}
						}
					},
				}),
			);
		});
	}
}
