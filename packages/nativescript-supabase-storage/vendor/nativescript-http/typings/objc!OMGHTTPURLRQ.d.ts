
declare function OMGFormURLEncode(parameters: NSDictionary<any, any>): string;

declare class OMGHTTPURLRQ extends NSObject {

	static DELETEError(url: string, parameters: NSDictionary<any, any>): NSMutableURLRequest;

	static GETError(url: string, parameters: NSDictionary<any, any>): NSMutableURLRequest;

	static PATCHJSONError(url: string, JSONObject: any): NSMutableURLRequest;

	static POSTError(url: string, parametersOrMultipartFormData: any): NSMutableURLRequest;

	static POSTJSONError(url: string, JSONObject: any): NSMutableURLRequest;

	static PUTError(url: string, parameters: NSDictionary<any, any>): NSMutableURLRequest;

	static PUTJSONError(url: string, JSONObject: any): NSMutableURLRequest;

	static alloc(): OMGHTTPURLRQ; // inherited from NSObject

	static new(): OMGHTTPURLRQ; // inherited from NSObject
}

declare var OMGHTTPURLRQVersionNumber: number;

declare var OMGHTTPURLRQVersionNumberVar: number;

declare var OMGHTTPURLRQVersionString: interop.Reference<number>;

declare var OMGHTTPURLRQVersionStringVar: interop.Reference<number>;

declare class OMGMultipartFormData extends NSObject {

	static alloc(): OMGMultipartFormData; // inherited from NSObject

	static new(): OMGMultipartFormData; // inherited from NSObject

	addFileParameterNameFilenameContentType(data: NSData, parameterName: string, filename: string, contentType: string): void;

	addParameters(parameters: NSDictionary<any, any>): void;

	addTextParameterName(text: string, parameterName: string): void;
}

declare function OMGUserAgent(): string;