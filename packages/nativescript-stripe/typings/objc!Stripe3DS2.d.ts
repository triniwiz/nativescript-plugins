
declare const enum STDSACSStatusType {

	Unknown = 0,

	Authenticated = 1,

	ChallengeRequired = 2,

	DecoupledAuthentication = 3,

	NotAuthenticated = 4,

	ProofGenerated = 5,

	Error = 6,

	Rejected = 7,

	InformationalOnly = 8
}

declare class STDSAlreadyInitializedException extends STDSException {

	static alloc(): STDSAlreadyInitializedException; // inherited from NSObject

	static new(): STDSAlreadyInitializedException; // inherited from NSObject
}

declare class STDSAuthenticationRequestParameters extends NSObject implements STDSJSONEncodable {

	static alloc(): STDSAuthenticationRequestParameters; // inherited from NSObject

	static new(): STDSAuthenticationRequestParameters; // inherited from NSObject

	static propertyNamesToJSONKeysMapping(): NSDictionary<any, any>;

	readonly deviceData: string;

	readonly messageVersion: string;

	readonly sdkAppIdentifier: string;

	readonly sdkEphemeralPublicKey: string;

	readonly sdkReferenceNumber: string;

	readonly sdkTransactionIdentifier: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { SDKTransactionIdentifier: string; deviceData: string; sdkEphemeralPublicKey: string; sdkAppIdentifier: string; sdkReferenceNumber: string; messageVersion: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithSDKTransactionIdentifierDeviceDataSdkEphemeralPublicKeySdkAppIdentifierSdkReferenceNumberMessageVersion(sdkTransactionIdentifier: string, deviceData: string, sdkEphemeralPublicKey: string, sdkAppIdentifier: string, sdkReferenceNumber: string, messageVersion: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface STDSAuthenticationResponse extends NSObjectProtocol {

	acsOperatorID: string;

	acsReferenceNumber: string;

	acsSignedContent: string;

	acsTransactionID: string;

	acsURL: NSURL;

	cardholderInfo: string;

	challengeRequired: boolean;

	directoryServerReferenceNumber: string;

	directoryServerTransactionID: string;

	protocolVersion: string;

	sdkTransactionID: string;

	status: STDSACSStatusType;

	threeDSServerTransactionID: string;

	willUseDecoupledAuthentication: boolean;
}
declare var STDSAuthenticationResponse: {

	prototype: STDSAuthenticationResponse;
};

declare function STDSAuthenticationResponseFromJSON(json: NSDictionary<any, any>): STDSAuthenticationResponse;

declare class STDSButtonCustomization extends STDSCustomization {

	static alloc(): STDSButtonCustomization; // inherited from NSObject

	static defaultSettingsForButtonType(type: STDSUICustomizationButtonType): STDSButtonCustomization;

	static new(): STDSButtonCustomization; // inherited from NSObject

	backgroundColor: UIColor;

	cornerRadius: number;

	titleStyle: STDSButtonTitleStyle;

	constructor(o: { backgroundColor: UIColor; cornerRadius: number; });

	initWithBackgroundColorCornerRadius(backgroundColor: UIColor, cornerRadius: number): this;
}

declare const enum STDSButtonTitleStyle {

	Default = 0,

	Uppercase = 1,

	Lowercase = 2,

	SentenceCapitalized = 3
}

declare class STDSChallengeParameters extends NSObject {

	static alloc(): STDSChallengeParameters; // inherited from NSObject

	static new(): STDSChallengeParameters; // inherited from NSObject

	acsReferenceNumber: string;

	acsSignedContent: string;

	acsTransactionID: string;

	threeDSRequestorAppURL: string;

	threeDSServerTransactionID: string;

	constructor(o: { authenticationResponse: STDSAuthenticationResponse; });

	initWithAuthenticationResponse(authResponse: STDSAuthenticationResponse): this;
}

interface STDSChallengeStatusReceiver extends NSObjectProtocol {

	dismissChallengeViewControllerForTransaction?(challengeViewController: UIViewController, transaction: STDSTransaction): void;

	transactionDidCancel(transaction: STDSTransaction): void;

	transactionDidCompleteChallengeWithCompletionEvent(transaction: STDSTransaction, completionEvent: STDSCompletionEvent): void;

	transactionDidErrorWithProtocolErrorEvent(transaction: STDSTransaction, protocolErrorEvent: STDSProtocolErrorEvent): void;

	transactionDidErrorWithRuntimeErrorEvent(transaction: STDSTransaction, runtimeErrorEvent: STDSRuntimeErrorEvent): void;

	transactionDidPresentChallengeScreen?(transaction: STDSTransaction): void;

	transactionDidTimeOut(transaction: STDSTransaction): void;
}
declare var STDSChallengeStatusReceiver: {

	prototype: STDSChallengeStatusReceiver;
};

declare class STDSCompletionEvent extends NSObject {

	static alloc(): STDSCompletionEvent; // inherited from NSObject

	static new(): STDSCompletionEvent; // inherited from NSObject

	readonly sdkTransactionIdentifier: string;

	readonly transactionStatus: string;

	constructor(o: { SDKTransactionIdentifier: string; transactionStatus: string; });

	initWithSDKTransactionIdentifierTransactionStatus(identifier: string, transactionStatus: string): this;
}

declare class STDSConfigParameters extends NSObject {

	static alloc(): STDSConfigParameters; // inherited from NSObject

	static new(): STDSConfigParameters; // inherited from NSObject

	constructor(o: { standardParameters: void; });

	addParameterNamedWithValue(paramName: string, paramValue: string): void;

	addParameterNamedWithValueToGroup(paramName: string, paramValue: string, paramGroup: string): void;

	initWithStandardParameters(): this;

	parameterValue(paramName: string): string;

	parameterValueInGroup(paramName: string, paramGroup: string): string;

	removeParameterNamed(paramName: string): string;

	removeParameterNamedFromGroup(paramName: string, paramGroup: string): string;
}

declare class STDSCustomization extends NSObject implements NSCopying {

	static alloc(): STDSCustomization; // inherited from NSObject

	static new(): STDSCustomization; // inherited from NSObject

	font: UIFont;

	textColor: UIColor;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare const enum STDSErrorCode {

	AssertionFailed = 204,

	JSONFieldInvalid = 203,

	JSONFieldMissing = 201,

	UnrecognizedCriticalMessageExtension = 202,

	DecryptionVerification = 302,

	RuntimeParsing = 400,

	RuntimeEncryption = 401,

	ReceivedErrorMessage = 1000,

	UnknownMessageType = 1001,

	Timeout = 1002,

	UnknownError = 2000
}

declare class STDSErrorMessage extends NSObject implements STDSJSONDecodable, STDSJSONEncodable {

	static alloc(): STDSErrorMessage; // inherited from NSObject

	static decodedObjectFromJSONError(json: NSDictionary<any, any>): STDSErrorMessage;

	static errorForDecryptionErrorWithACSTransactionIDMessageVersion(acsTransactionID: string, messageVersion: string): STDSErrorMessage;

	static errorForInvalidMessageWithACSTransactionIDMessageVersion(acsTransactionID: string, messageVersion: string): STDSErrorMessage;

	static errorForJSONFieldInvalidWithACSTransactionIDMessageVersionError(acsTransactionID: string, messageVersion: string, error: NSError): STDSErrorMessage;

	static errorForJSONFieldMissingWithACSTransactionIDMessageVersionError(acsTransactionID: string, messageVersion: string, error: NSError): STDSErrorMessage;

	static errorForTimeoutWithACSTransactionIDMessageVersion(acsTransactionID: string, messageVersion: string): STDSErrorMessage;

	static errorForUnrecognizedCriticalMessageExtensionsWithACSTransactionIDMessageVersionError(acsTransactionID: string, messageVersion: string, error: NSError): STDSErrorMessage;

	static errorForUnrecognizedIDWithACSTransactionIDMessageVersion(transactionID: string, messageVersion: string): STDSErrorMessage;

	static new(): STDSErrorMessage; // inherited from NSObject

	static propertyNamesToJSONKeysMapping(): NSDictionary<any, any>;

	readonly acsTransactionIdentifier: string;

	readonly errorCode: string;

	readonly errorComponent: string;

	readonly errorDescription: string;

	readonly errorDetails: string;

	readonly errorMessageType: string;

	readonly messageVersion: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { errorCode: string; errorComponent: string; errorDescription: string; errorDetails: string; messageVersion: string; acsTransactionIdentifier: string; errorMessageType: string; });

	NSErrorValue(): NSError;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithErrorCodeErrorComponentErrorDescriptionErrorDetailsMessageVersionAcsTransactionIdentifierErrorMessageType(errorCode: string, errorComponent: string, errorDescription: string, errorDetails: string, messageVersion: string, acsTransactionIdentifier: string, errorMessageType: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum STDSErrorMessageCode {

	CodeInvalidMessage = 101,

	CodeRequiredDataElementMissing = 201,

	CodeUnrecognizedCriticalMessageExtension = 202,

	ErrorInvalidDataElement = 203,

	ErrorTransactionIDNotRecognized = 301,

	ErrorDataDecryptionFailure = 302,

	ErrorTimeout = 402
}

declare class STDSException extends NSException {

	static alloc(): STDSException; // inherited from NSObject

	static new(): STDSException; // inherited from NSObject

	readonly message: string;
}

declare class STDSFooterCustomization extends STDSCustomization {

	static alloc(): STDSFooterCustomization; // inherited from NSObject

	static defaultSettings(): STDSFooterCustomization;

	static new(): STDSFooterCustomization; // inherited from NSObject

	backgroundColor: UIColor;

	chevronColor: UIColor;

	headingFont: UIFont;

	headingTextColor: UIColor;
}

declare class STDSInvalidInputException extends STDSException {

	static alloc(): STDSInvalidInputException; // inherited from NSObject

	static new(): STDSInvalidInputException; // inherited from NSObject
}

interface STDSJSONDecodable extends NSObjectProtocol {
}
declare var STDSJSONDecodable: {

	prototype: STDSJSONDecodable;

	decodedObjectFromJSONError(json: NSDictionary<any, any>): STDSJSONDecodable;
};

interface STDSJSONEncodable extends NSObjectProtocol {
}
declare var STDSJSONEncodable: {

	prototype: STDSJSONEncodable;

	propertyNamesToJSONKeysMapping(): NSDictionary<any, any>;
};

declare class STDSJSONEncoder extends NSObject {

	static alloc(): STDSJSONEncoder; // inherited from NSObject

	static dictionaryForObject(object: NSObject): NSDictionary<any, any>;

	static new(): STDSJSONEncoder; // inherited from NSObject
}

declare class STDSLabelCustomization extends STDSCustomization {

	static alloc(): STDSLabelCustomization; // inherited from NSObject

	static defaultSettings(): STDSLabelCustomization;

	static new(): STDSLabelCustomization; // inherited from NSObject

	headingFont: UIFont;

	headingTextColor: UIColor;
}

declare class STDSNavigationBarCustomization extends STDSCustomization {

	static alloc(): STDSNavigationBarCustomization; // inherited from NSObject

	static defaultSettings(): STDSNavigationBarCustomization;

	static new(): STDSNavigationBarCustomization; // inherited from NSObject

	barStyle: UIBarStyle;

	barTintColor: UIColor;

	buttonText: string;

	headerText: string;

	translucent: boolean;
}

declare class STDSNotInitializedException extends STDSException {

	static alloc(): STDSNotInitializedException; // inherited from NSObject

	static new(): STDSNotInitializedException; // inherited from NSObject
}

declare class STDSProtocolErrorEvent extends NSObject {

	static alloc(): STDSProtocolErrorEvent; // inherited from NSObject

	static new(): STDSProtocolErrorEvent; // inherited from NSObject

	readonly errorMessage: STDSErrorMessage;

	readonly sdkTransactionIdentifier: string;

	constructor(o: { SDKTransactionIdentifier: string; errorMessage: STDSErrorMessage; });

	initWithSDKTransactionIdentifierErrorMessage(identifier: string, errorMessage: STDSErrorMessage): this;
}

declare class STDSRuntimeErrorEvent extends NSObject {

	static alloc(): STDSRuntimeErrorEvent; // inherited from NSObject

	static new(): STDSRuntimeErrorEvent; // inherited from NSObject

	readonly errorCode: string;

	readonly errorMessage: string;

	constructor(o: { errorCode: string; errorMessage: string; });

	NSErrorValue(): NSError;

	initWithErrorCodeErrorMessage(errorCode: string, errorMessage: string): this;
}

declare class STDSRuntimeException extends STDSException {

	static alloc(): STDSRuntimeException; // inherited from NSObject

	static new(): STDSRuntimeException; // inherited from NSObject
}

declare class STDSSelectionCustomization extends NSObject implements NSCopying {

	static alloc(): STDSSelectionCustomization; // inherited from NSObject

	static defaultSettings(): STDSSelectionCustomization;

	static new(): STDSSelectionCustomization; // inherited from NSObject

	primarySelectedColor: UIColor;

	secondarySelectedColor: UIColor;

	unselectedBackgroundColor: UIColor;

	unselectedBorderColor: UIColor;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare var STDSStripe3DS2ErrorDomain: string;

declare var STDSStripe3DS2ErrorFieldKey: string;

declare var STDSStripe3DS2ErrorMessageErrorKey: string;

declare var STDSStripe3DS2UnrecognizedCriticalMessageExtensionsKey: string;

declare class STDSSwiftTryCatch extends NSObject {

	static alloc(): STDSSwiftTryCatch; // inherited from NSObject

	static new(): STDSSwiftTryCatch; // inherited from NSObject

	static throwException(e: NSException): void;

	static throwString(s: string): void;

	static tryBlockCatchBlockFinallyBlock(tryBlock: () => void, catchBlock: (p1: NSException) => void, finallyBlock: () => void): void;
}

declare class STDSTextFieldCustomization extends STDSCustomization {

	static alloc(): STDSTextFieldCustomization; // inherited from NSObject

	static defaultSettings(): STDSTextFieldCustomization;

	static new(): STDSTextFieldCustomization; // inherited from NSObject

	borderColor: UIColor;

	borderWidth: number;

	cornerRadius: number;

	keyboardAppearance: UIKeyboardAppearance;

	placeholderTextColor: UIColor;
}

declare class STDSThreeDS2Service extends NSObject {

	static alloc(): STDSThreeDS2Service; // inherited from NSObject

	static new(): STDSThreeDS2Service; // inherited from NSObject

	readonly warnings: NSArray<STDSWarning>;

	createTransactionForDirectoryServerServerKeyIDCertificateStringRootCertificateStringsWithProtocolVersion(directoryServerID: string, serverKeyID: string, certificateString: string, rootCertificateStrings: NSArray<string> | string[], protocolVersion: string): STDSTransaction;

	createTransactionForDirectoryServerWithProtocolVersion(directoryServerID: string, protocolVersion: string): STDSTransaction;

	initializeWithConfigLocaleUiSettings(config: STDSConfigParameters, locale: NSLocale, uiSettings: STDSUICustomization): void;
}

declare class STDSTransaction extends NSObject {

	static alloc(): STDSTransaction; // inherited from NSObject

	static new(): STDSTransaction; // inherited from NSObject

	bypassTestModeVerification: boolean;

	readonly presentedChallengeUIType: string;

	timeoutTimer: NSTimer;

	useULTestLOA: boolean;

	constructor(o: { deviceInformation: STDSDeviceInformation; directoryServerID: string; serverKeyID: string; directoryServerCertificate: STDSDirectoryServerCertificate; rootCertificateStrings: NSArray<string> | string[]; protocolVersion: STDSThreeDSProtocolVersion; uiCustomization: STDSUICustomization; });

	constructor(o: { deviceInformation: STDSDeviceInformation; directoryServer: STDSDirectoryServer; protocolVersion: STDSThreeDSProtocolVersion; uiCustomization: STDSUICustomization; });

	cancelChallengeFlow(): void;

	close(): void;

	createAuthenticationRequestParameters(): STDSAuthenticationRequestParameters;

	createProgressViewControllerWithDidCancel(didCancel: () => void): UIViewController;

	doChallengeWithChallengeParametersChallengeStatusReceiverTimeoutPresentationBlock(challengeParameters: STDSChallengeParameters, challengeStatusReceiver: any, timeout: number, presentationBlock: (p1: UIViewController, p2: () => void) => void): void;

	doChallengeWithViewControllerChallengeParametersChallengeStatusReceiverTimeout(presentingViewController: UIViewController, challengeParameters: STDSChallengeParameters, challengeStatusReceiver: any, timeout: number): void;

	initWithDeviceInformationDirectoryServerIDServerKeyIDDirectoryServerCertificateRootCertificateStringsProtocolVersionUiCustomization(deviceInformation: STDSDeviceInformation, directoryServerID: string, serverKeyID: string, directoryServerCertificate: STDSDirectoryServerCertificate, rootCertificateStrings: NSArray<string> | string[], protocolVersion: STDSThreeDSProtocolVersion, uiCustomization: STDSUICustomization): this;

	initWithDeviceInformationDirectoryServerProtocolVersionUiCustomization(deviceInformation: STDSDeviceInformation, directoryServer: STDSDirectoryServer, protocolVersion: STDSThreeDSProtocolVersion, uiCustomization: STDSUICustomization): this;

	sdkVersion(): string;
}

declare class STDSUICustomization extends NSObject implements NSCopying {

	static alloc(): STDSUICustomization; // inherited from NSObject

	static defaultSettings(): STDSUICustomization;

	static new(): STDSUICustomization; // inherited from NSObject

	activityIndicatorViewStyle: UIActivityIndicatorViewStyle;

	backgroundColor: UIColor;

	blurStyle: UIBlurEffectStyle;

	footerCustomization: STDSFooterCustomization;

	labelCustomization: STDSLabelCustomization;

	navigationBarCustomization: STDSNavigationBarCustomization;

	preferredStatusBarStyle: UIStatusBarStyle;

	selectionCustomization: STDSSelectionCustomization;

	textFieldCustomization: STDSTextFieldCustomization;

	buttonCustomizationForButtonType(buttonType: STDSUICustomizationButtonType): STDSButtonCustomization;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	setButtonCustomizationForType(buttonCustomization: STDSButtonCustomization, buttonType: STDSUICustomizationButtonType): void;
}

declare const enum STDSUICustomizationButtonType {

	Submit = 0,

	Continue = 1,

	Next = 2,

	Cancel = 3,

	Resend = 4
}

declare class STDSWarning extends NSObject {

	static alloc(): STDSWarning; // inherited from NSObject

	static new(): STDSWarning; // inherited from NSObject

	readonly identifier: string;

	readonly message: string;

	readonly severity: STDSWarningSeverity;

	constructor(o: { identifier: string; message: string; severity: STDSWarningSeverity; });

	initWithIdentifierMessageSeverity(identifier: string, message: string, severity: STDSWarningSeverity): this;
}

declare const enum STDSWarningSeverity {

	Low = 0,

	Medium = 1,

	High = 2
}

declare var Stripe3DS2ProtocolVersion: string;

declare var Stripe3DS2VersionNumber: number;

declare var Stripe3DS2VersionString: interop.Reference<number>;

declare var kSTDSConfigDefaultGroupName: string;

declare var kSTDSRuntimeErrorCodeEncryptionError: string;

declare var kSTDSRuntimeErrorCodeParsingError: string;
