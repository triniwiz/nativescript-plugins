/// <reference path="android-declarations.d.ts"/>

export class EncryptedStorage {
	public static class: java.lang.Class<EncryptedStorage>;
	public removeItem(key: string): void;
	public loadItem(key: string): string;
	public saveItem(key: string, data: string): void;
	public constructor(context: globalAndroid.content.Context);
}

export class NSCDescope {
	public static class: java.lang.Class<NSCDescope>;
	public static NAME: string = 'DescopeNativeScript';
	public removeItem(key: string): void;
	public saveItem(key: string, value: string): void;
	public prepFlow(): java.util.Map<string, string>;
	public startFlow(uri: string, this_: string, flowUrl: string, deepLinkUrl: string): void;
	public resumeFlow(it: string, element$iv: string): void;
	public loadItem(this_: string): void;
	public constructor(context: globalAndroid.content.Context);
}
export module NSCDescope {
	export class Companion {
		public static class: java.lang.Class<NSCDescope.Companion>;
	}
}

//Generics information:
