
declare class STDSACSNetworkingManager extends NSObject {

	static alloc(): STDSACSNetworkingManager; // inherited from NSObject

	static new(): STDSACSNetworkingManager; // inherited from NSObject

	constructor(o: { URL: NSURL; sdkContentEncryptionKey: NSData; acsContentEncryptionKey: NSData; acsTransactionIdentifier: string; });

	initWithURLSdkContentEncryptionKeyAcsContentEncryptionKeyAcsTransactionIdentifier(acsURL: NSURL, sdkCEK: NSData, acsCEK: NSData, acsTransactionID: string): this;

	sendErrorMessage(errorMessage: STDSErrorMessage): void;

	submitChallengeRequestWithCompletion(request: STDSChallengeRequestParameters, completion: (p1: STDSChallengeResponse, p2: NSError) => void): void;
}

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

declare const enum STDSACSUIType {

	None = 0,

	Text = 1,

	SingleSelect = 2,

	MultiSelect = 3,

	OOB = 4,

	HTML = 5
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

declare class STDSAuthenticationResponseObject extends NSObject implements STDSAuthenticationResponse, STDSJSONDecodable {

	static alloc(): STDSAuthenticationResponseObject; // inherited from NSObject

	static decodedObjectFromJSONError(json: NSDictionary<any, any>): STDSAuthenticationResponseObject;

	static new(): STDSAuthenticationResponseObject; // inherited from NSObject

	readonly acsOperatorID: string; // inherited from STDSAuthenticationResponse

	readonly acsReferenceNumber: string; // inherited from STDSAuthenticationResponse

	readonly acsSignedContent: string; // inherited from STDSAuthenticationResponse

	readonly acsTransactionID: string; // inherited from STDSAuthenticationResponse

	readonly acsURL: NSURL; // inherited from STDSAuthenticationResponse

	readonly cardholderInfo: string; // inherited from STDSAuthenticationResponse

	readonly challengeRequired: boolean; // inherited from STDSAuthenticationResponse

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly directoryServerReferenceNumber: string; // inherited from STDSAuthenticationResponse

	readonly directoryServerTransactionID: string; // inherited from STDSAuthenticationResponse

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly protocolVersion: string; // inherited from STDSAuthenticationResponse

	readonly sdkTransactionID: string; // inherited from STDSAuthenticationResponse

	readonly status: STDSACSStatusType; // inherited from STDSAuthenticationResponse

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly threeDSServerTransactionID: string; // inherited from STDSAuthenticationResponse

	readonly willUseDecoupledAuthentication: boolean; // inherited from STDSAuthenticationResponse

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STDSBrandingView extends UIView {

	static alloc(): STDSBrandingView; // inherited from NSObject

	static appearance(): STDSBrandingView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STDSBrandingView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STDSBrandingView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STDSBrandingView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STDSBrandingView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STDSBrandingView; // inherited from UIAppearance

	static new(): STDSBrandingView; // inherited from NSObject

	issuerImage: UIImage;

	paymentSystemImage: UIImage;
}

declare class STDSBundleLocator extends NSObject {

	static alloc(): STDSBundleLocator; // inherited from NSObject

	static new(): STDSBundleLocator; // inherited from NSObject

	static stdsResourcesBundle(): NSBundle;
}

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

declare class STDSCategoryLinker extends NSObject {

	static alloc(): STDSCategoryLinker; // inherited from NSObject

	static new(): STDSCategoryLinker; // inherited from NSObject

	static referenceAllCategories(): void;
}

declare function STDSCertificateForServer(server: STDSDirectoryServer): interop.Unmanaged<any>;

declare const enum STDSChallengeCancelType {

	CardholderSelectedCancel = 0,

	TransactionTimedOut = 1
}

declare class STDSChallengeInformationView extends UIView {

	static alloc(): STDSChallengeInformationView; // inherited from NSObject

	static appearance(): STDSChallengeInformationView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STDSChallengeInformationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STDSChallengeInformationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STDSChallengeInformationView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STDSChallengeInformationView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STDSChallengeInformationView; // inherited from UIAppearance

	static new(): STDSChallengeInformationView; // inherited from NSObject

	challengeInformationLabel: string;

	challengeInformationText: string;

	headerText: string;

	labelCustomization: STDSLabelCustomization;

	textIndicatorImage: UIImage;
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

declare class STDSChallengeRequestParameters extends NSObject implements STDSJSONEncodable {

	static alloc(): STDSChallengeRequestParameters; // inherited from NSObject

	static new(): STDSChallengeRequestParameters; // inherited from NSObject

	static propertyNamesToJSONKeysMapping(): NSDictionary<any, any>;

	readonly acsTransactionIdentifier: string;

	challengeCancel: number;

	challengeDataEntry: string;

	challengeHTMLDataEntry: string;

	challengeNoEntry: string;

	messageExtension: NSArray<any>;

	readonly messageType: string;

	readonly messageVersion: string;

	oobContinue: number;

	resendChallenge: string;

	readonly sdkCounterStoA: string;

	readonly sdkTransactionIdentifier: string;

	threeDSRequestorAppURL: string;

	readonly threeDSServerTransactionIdentifier: string;

	whitelistingDataEntry: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { challengeParameters: STDSChallengeParameters; transactionIdentifier: string; messageVersion: string; });

	constructor(o: { threeDSServerTransactionIdentifier: string; acsTransactionIdentifier: string; messageVersion: string; sdkTransactionIdentifier: string; requestorAppUrl: string; sdkCounterStoA: number; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithChallengeParametersTransactionIdentifierMessageVersion(challengeParams: STDSChallengeParameters, transactionIdentifier: string, messageVersion: string): this;

	initWithThreeDSServerTransactionIdentifierAcsTransactionIdentifierMessageVersionSdkTransactionIdentifierRequestorAppUrlSdkCounterStoA(threeDSServerTransactionIdentifier: string, acsTransactionIdentifier: string, messageVersion: string, sdkTransactionIdentifier: string, requestorAppUrl: string, sdkCounterStoA: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	nextChallengeRequestParametersByIncrementCounter(): this;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface STDSChallengeResponse {

	acsCounterACStoSDK: string;

	acsHTML: string;

	acsHTMLRefresh: string;

	acsTransactionID: string;

	acsUIType: STDSACSUIType;

	challengeAdditionalInfoText: string;

	challengeCompletionIndicator: boolean;

	challengeInfoHeader: string;

	challengeInfoLabel: string;

	challengeInfoText: string;

	challengeSelectInfo: NSArray<STDSChallengeResponseSelectionInfo>;

	expandInfoLabel: string;

	expandInfoText: string;

	issuerImage: STDSChallengeResponseImage;

	messageExtensions: NSArray<STDSChallengeResponseMessageExtension>;

	messageType: string;

	messageVersion: string;

	oobAppLabel: string;

	oobAppURL: NSURL;

	oobContinueLabel: string;

	paymentSystemImage: STDSChallengeResponseImage;

	resendInformationLabel: string;

	sdkTransactionID: string;

	showChallengeInfoTextIndicator: boolean;

	submitAuthenticationLabel: string;

	threeDSServerTransactionID: string;

	transactionStatus: string;

	whitelistingInfoText: string;

	whyInfoLabel: string;

	whyInfoText: string;
}
declare var STDSChallengeResponse: {

	prototype: STDSChallengeResponse;
};

interface STDSChallengeResponseImage {

	extraHighDensityURL: NSURL;

	highDensityURL: NSURL;

	mediumDensityURL: NSURL;
}
declare var STDSChallengeResponseImage: {

	prototype: STDSChallengeResponseImage;
};

declare class STDSChallengeResponseImageObject extends NSObject implements STDSChallengeResponseImage, STDSJSONDecodable {

	static alloc(): STDSChallengeResponseImageObject; // inherited from NSObject

	static decodedObjectFromJSONError(json: NSDictionary<any, any>): STDSChallengeResponseImageObject;

	static new(): STDSChallengeResponseImageObject; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly extraHighDensityURL: NSURL; // inherited from STDSChallengeResponseImage

	readonly hash: number; // inherited from NSObjectProtocol

	readonly highDensityURL: NSURL; // inherited from STDSChallengeResponseImage

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly mediumDensityURL: NSURL; // inherited from STDSChallengeResponseImage

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { mediumDensityURL: NSURL; highDensityURL: NSURL; extraHighDensityURL: NSURL; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithMediumDensityURLHighDensityURLExtraHighDensityURL(mediumDensityURL: NSURL, highDensityURL: NSURL, extraHighDensityURL: NSURL): this;

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

interface STDSChallengeResponseMessageExtension {

	criticalityIndicator: boolean;

	data: NSDictionary<any, any>;

	identifier: string;

	name: string;
}
declare var STDSChallengeResponseMessageExtension: {

	prototype: STDSChallengeResponseMessageExtension;
};

declare class STDSChallengeResponseMessageExtensionObject extends NSObject implements STDSChallengeResponseMessageExtension, STDSJSONDecodable {

	static alloc(): STDSChallengeResponseMessageExtensionObject; // inherited from NSObject

	static decodedObjectFromJSONError(json: NSDictionary<any, any>): STDSChallengeResponseMessageExtensionObject;

	static new(): STDSChallengeResponseMessageExtensionObject; // inherited from NSObject

	readonly criticalityIndicator: boolean; // inherited from STDSChallengeResponseMessageExtension

	readonly data: NSDictionary<any, any>; // inherited from STDSChallengeResponseMessageExtension

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly identifier: string; // inherited from STDSChallengeResponseMessageExtension

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly name: string; // inherited from STDSChallengeResponseMessageExtension

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STDSChallengeResponseObject extends NSObject implements STDSChallengeResponse, STDSJSONDecodable {

	static alloc(): STDSChallengeResponseObject; // inherited from NSObject

	static decodedObjectFromJSONError(json: NSDictionary<any, any>): STDSChallengeResponseObject;

	static new(): STDSChallengeResponseObject; // inherited from NSObject

	readonly acsCounterACStoSDK: string; // inherited from STDSChallengeResponse

	readonly acsHTML: string; // inherited from STDSChallengeResponse

	readonly acsHTMLRefresh: string; // inherited from STDSChallengeResponse

	readonly acsTransactionID: string; // inherited from STDSChallengeResponse

	readonly acsUIType: STDSACSUIType; // inherited from STDSChallengeResponse

	readonly challengeAdditionalInfoText: string; // inherited from STDSChallengeResponse

	readonly challengeCompletionIndicator: boolean; // inherited from STDSChallengeResponse

	readonly challengeInfoHeader: string; // inherited from STDSChallengeResponse

	readonly challengeInfoLabel: string; // inherited from STDSChallengeResponse

	readonly challengeInfoText: string; // inherited from STDSChallengeResponse

	readonly challengeSelectInfo: NSArray<STDSChallengeResponseSelectionInfo>; // inherited from STDSChallengeResponse

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly expandInfoLabel: string; // inherited from STDSChallengeResponse

	readonly expandInfoText: string; // inherited from STDSChallengeResponse

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly issuerImage: STDSChallengeResponseImage; // inherited from STDSChallengeResponse

	readonly messageExtensions: NSArray<STDSChallengeResponseMessageExtension>; // inherited from STDSChallengeResponse

	readonly messageType: string; // inherited from STDSChallengeResponse

	readonly messageVersion: string; // inherited from STDSChallengeResponse

	readonly oobAppLabel: string; // inherited from STDSChallengeResponse

	readonly oobAppURL: NSURL; // inherited from STDSChallengeResponse

	readonly oobContinueLabel: string; // inherited from STDSChallengeResponse

	readonly paymentSystemImage: STDSChallengeResponseImage; // inherited from STDSChallengeResponse

	readonly resendInformationLabel: string; // inherited from STDSChallengeResponse

	readonly sdkTransactionID: string; // inherited from STDSChallengeResponse

	readonly showChallengeInfoTextIndicator: boolean; // inherited from STDSChallengeResponse

	readonly submitAuthenticationLabel: string; // inherited from STDSChallengeResponse

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly threeDSServerTransactionID: string; // inherited from STDSChallengeResponse

	readonly transactionStatus: string; // inherited from STDSChallengeResponse

	readonly whitelistingInfoText: string; // inherited from STDSChallengeResponse

	readonly whyInfoLabel: string; // inherited from STDSChallengeResponse

	readonly whyInfoText: string; // inherited from STDSChallengeResponse

	readonly  // inherited from NSObjectProtocol

	constructor(o: { threeDSServerTransactionID: string; acsCounterACStoSDK: string; acsTransactionID: string; acsHTML: string; acsHTMLRefresh: string; acsUIType: STDSACSUIType; challengeCompletionIndicator: boolean; challengeInfoHeader: string; challengeInfoLabel: string; challengeInfoText: string; challengeAdditionalInfoText: string; showChallengeInfoTextIndicator: boolean; challengeSelectInfo: NSArray<STDSChallengeResponseSelectionInfo> | STDSChallengeResponseSelectionInfo[]; expandInfoLabel: string; expandInfoText: string; issuerImage: STDSChallengeResponseImage; messageExtensions: NSArray<STDSChallengeResponseMessageExtension> | STDSChallengeResponseMessageExtension[]; messageVersion: string; oobAppURL: NSURL; oobAppLabel: string; oobContinueLabel: string; paymentSystemImage: STDSChallengeResponseImage; resendInformationLabel: string; sdkTransactionID: string; submitAuthenticationLabel: string; whitelistingInfoText: string; whyInfoLabel: string; whyInfoText: string; transactionStatus: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithThreeDSServerTransactionIDAcsCounterACStoSDKAcsTransactionIDAcsHTMLAcsHTMLRefreshAcsUITypeChallengeCompletionIndicatorChallengeInfoHeaderChallengeInfoLabelChallengeInfoTextChallengeAdditionalInfoTextShowChallengeInfoTextIndicatorChallengeSelectInfoExpandInfoLabelExpandInfoTextIssuerImageMessageExtensionsMessageVersionOobAppURLOobAppLabelOobContinueLabelPaymentSystemImageResendInformationLabelSdkTransactionIDSubmitAuthenticationLabelWhitelistingInfoTextWhyInfoLabelWhyInfoTextTransactionStatus(threeDSServerTransactionID: string, acsCounterACStoSDK: string, acsTransactionID: string, acsHTML: string, acsHTMLRefresh: string, acsUIType: STDSACSUIType, challengeCompletionIndicator: boolean, challengeInfoHeader: string, challengeInfoLabel: string, challengeInfoText: string, challengeAdditionalInfoText: string, showChallengeInfoTextIndicator: boolean, challengeSelectInfo: NSArray<STDSChallengeResponseSelectionInfo> | STDSChallengeResponseSelectionInfo[], expandInfoLabel: string, expandInfoText: string, issuerImage: STDSChallengeResponseImage, messageExtensions: NSArray<STDSChallengeResponseMessageExtension> | STDSChallengeResponseMessageExtension[], messageVersion: string, oobAppURL: NSURL, oobAppLabel: string, oobContinueLabel: string, paymentSystemImage: STDSChallengeResponseImage, resendInformationLabel: string, sdkTransactionID: string, submitAuthenticationLabel: string, whitelistingInfoText: string, whyInfoLabel: string, whyInfoText: string, transactionStatus: string): this;

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

interface STDSChallengeResponseSelectionInfo {

	name: string;

	value: string;
}
declare var STDSChallengeResponseSelectionInfo: {

	prototype: STDSChallengeResponseSelectionInfo;
};

declare class STDSChallengeResponseSelectionInfoObject extends NSObject implements STDSChallengeResponseSelectionInfo {

	static alloc(): STDSChallengeResponseSelectionInfoObject; // inherited from NSObject

	static new(): STDSChallengeResponseSelectionInfoObject; // inherited from NSObject

	readonly name: string; // inherited from STDSChallengeResponseSelectionInfo

	readonly value: string; // inherited from STDSChallengeResponseSelectionInfo

	constructor(o: { name: string; value: string; });

	initWithNameValue(name: string, value: string): this;
}

declare class STDSChallengeResponseViewController extends UIViewController {

	static alloc(): STDSChallengeResponseViewController; // inherited from NSObject

	static new(): STDSChallengeResponseViewController; // inherited from NSObject

	delegate: STDSChallengeResponseViewControllerDelegate;

	presentationDelegate: STDSChallengeResponseViewControllerPresentationDelegate;

	readonly response: STDSChallengeResponse;

	constructor(o: { UICustomization: STDSUICustomization; imageLoader: STDSImageLoader; directoryServer: STDSDirectoryServer; });

	dismiss(): void;

	initWithUICustomizationImageLoaderDirectoryServer(uiCustomization: STDSUICustomization, imageLoader: STDSImageLoader, directoryServer: STDSDirectoryServer): this;

	setChallengeResponseAnimated(response: STDSChallengeResponse, animated: boolean): void;

	setLoading(): void;
}

interface STDSChallengeResponseViewControllerDelegate {

	challengeResponseViewControllerDidCancel(viewController: STDSChallengeResponseViewController): void;

	challengeResponseViewControllerDidOOBContinueWhitelistSelection(viewController: STDSChallengeResponseViewController, whitelistSelection: STDSChallengeResponseSelectionInfo): void;

	challengeResponseViewControllerDidRequestResend(viewController: STDSChallengeResponseViewController): void;

	challengeResponseViewControllerDidSubmitHTMLForm(viewController: STDSChallengeResponseViewController, form: string): void;

	challengeResponseViewControllerDidSubmitInputWhitelistSelection(viewController: STDSChallengeResponseViewController, userInput: string, whitelistSelection: STDSChallengeResponseSelectionInfo): void;

	challengeResponseViewControllerDidSubmitSelectionWhitelistSelection(viewController: STDSChallengeResponseViewController, selection: NSArray<STDSChallengeResponseSelectionInfo> | STDSChallengeResponseSelectionInfo[], whitelistSelection: STDSChallengeResponseSelectionInfo): void;
}
declare var STDSChallengeResponseViewControllerDelegate: {

	prototype: STDSChallengeResponseViewControllerDelegate;
};

interface STDSChallengeResponseViewControllerPresentationDelegate {

	dismissChallengeResponseViewController(viewController: STDSChallengeResponseViewController): void;
}
declare var STDSChallengeResponseViewControllerPresentationDelegate: {

	prototype: STDSChallengeResponseViewControllerPresentationDelegate;
};

declare const enum STDSChallengeSelectionStyle {

	Single = 0,

	Multi = 1
}

declare class STDSChallengeSelectionView extends UIView {

	static alloc(): STDSChallengeSelectionView; // inherited from NSObject

	static appearance(): STDSChallengeSelectionView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STDSChallengeSelectionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STDSChallengeSelectionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STDSChallengeSelectionView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STDSChallengeSelectionView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STDSChallengeSelectionView; // inherited from UIAppearance

	static new(): STDSChallengeSelectionView; // inherited from NSObject

	readonly currentlySelectedChallengeInfo: NSArray<STDSChallengeResponseSelectionInfo>;

	labelCustomization: STDSLabelCustomization;

	selectionCustomization: STDSSelectionCustomization;

	constructor(o: { challengeSelectInfo: NSArray<STDSChallengeResponseSelectionInfo> | STDSChallengeResponseSelectionInfo[]; selectionStyle: STDSChallengeSelectionStyle; });

	initWithChallengeSelectInfoSelectionStyle(challengeSelectInfo: NSArray<STDSChallengeResponseSelectionInfo> | STDSChallengeResponseSelectionInfo[], selectionStyle: STDSChallengeSelectionStyle): this;
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

declare function STDSCreateConcatKDFWithSHA256(sharedSecret: NSData, keyLength: number, apv: string): NSData;

declare function STDSCryptoRandomData(numBytes: number): NSData;

declare function STDSCurrentDeviceIPAddress(): string;

declare class STDSCustomization extends NSObject implements NSCopying {

	static alloc(): STDSCustomization; // inherited from NSObject

	static new(): STDSCustomization; // inherited from NSObject

	font: UIFont;

	textColor: UIColor;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class STDSDebuggerChecker extends NSObject {

	static alloc(): STDSDebuggerChecker; // inherited from NSObject

	static new(): STDSDebuggerChecker; // inherited from NSObject

	static processIsCurrentlyAttachedToDebugger(): boolean;
}

declare class STDSDeviceInformation extends NSObject {

	static alloc(): STDSDeviceInformation; // inherited from NSObject

	static new(): STDSDeviceInformation; // inherited from NSObject

	readonly dictionaryValue: NSDictionary<string, any>;

	constructor(o: { dictionary: NSDictionary<string, any>; });

	initWithDictionary(deviceInformationDict: NSDictionary<string, any>): this;
}

declare class STDSDeviceInformationManager extends NSObject {

	static alloc(): STDSDeviceInformationManager; // inherited from NSObject

	static deviceInformationWithWarningsIgnoringRestrictions(warnings: NSArray<STDSWarning> | STDSWarning[], ignoreRestrictions: boolean): STDSDeviceInformation;

	static new(): STDSDeviceInformationManager; // inherited from NSObject
}

declare class STDSDeviceInformationParameter extends NSObject {

	static IPAddress(): STDSDeviceInformationParameter;

	static OSName(): STDSDeviceInformationParameter;

	static OSVersion(): STDSDeviceInformationParameter;

	static advertisingID(): STDSDeviceInformationParameter;

	static allParameters(): NSArray<STDSDeviceInformationParameter>;

	static alloc(): STDSDeviceInformationParameter; // inherited from NSObject

	static availableLocaleIdentifiers(): STDSDeviceInformationParameter;

	static buttonFontSize(): STDSDeviceInformationParameter;

	static defaultTimeZone(): STDSDeviceInformationParameter;

	static deviceModel(): STDSDeviceInformationParameter;

	static deviceName(): STDSDeviceInformationParameter;

	static familyNames(): STDSDeviceInformationParameter;

	static fontNamesForFamilyName(): STDSDeviceInformationParameter;

	static identiferForVendor(): STDSDeviceInformationParameter;

	static labelFontSize(): STDSDeviceInformationParameter;

	static latitude(): STDSDeviceInformationParameter;

	static locale(): STDSDeviceInformationParameter;

	static longitude(): STDSDeviceInformationParameter;

	static new(): STDSDeviceInformationParameter; // inherited from NSObject

	static platform(): STDSDeviceInformationParameter;

	static preferredLanguages(): STDSDeviceInformationParameter;

	static screenResolution(): STDSDeviceInformationParameter;

	static sdkAppIdentifier(): string;

	static smallSystemFontSize(): STDSDeviceInformationParameter;

	static systemFont(): STDSDeviceInformationParameter;

	static systemFontSize(): STDSDeviceInformationParameter;

	static systemLocale(): STDSDeviceInformationParameter;

	static timeZone(): STDSDeviceInformationParameter;

	static userInterfaceIdiom(): STDSDeviceInformationParameter;

	constructor(o: { identifier: string; permissionCheck: () => boolean; valueCheck: () => any; });

	collectIgnoringRestrictionsWithHandler(ignoreRestrictions: boolean, handler: (p1: boolean, p2: string, p3: any) => void): void;

	initWithIdentifierPermissionCheckValueCheck(identifier: string, permissionCheck: () => boolean, valueCheck: () => any): this;
}

declare const enum STDSDirectoryServer {

	ULTestRSA = 0,

	ULTestEC = 1,

	STPTestRSA = 2,

	STPTestEC = 3,

	Amex = 4,

	CartesBancaires = 5,

	Discover = 6,

	Mastercard = 7,

	Visa = 8,

	Custom = 9,

	Unknown = 10
}

declare class STDSDirectoryServerCertificate extends NSObject {

	static _verifyCertificateChainWithRootCertificates(certificates: NSArray<string> | string[], rootCertificates: NSArray<string> | string[]): boolean;

	static alloc(): STDSDirectoryServerCertificate; // inherited from NSObject

	static certificateForDirectoryServer(directoryServer: STDSDirectoryServer): STDSDirectoryServerCertificate;

	static customCertificateWithData(certificateData: NSData): STDSDirectoryServerCertificate;

	static customCertificateWithString(certificateString: string): STDSDirectoryServerCertificate;

	static new(): STDSDirectoryServerCertificate; // inherited from NSObject

	static verifyJSONWebSignatureWithRootCertificates(jws: STDSJSONWebSignature, rootCertificates: NSArray<string> | string[]): boolean;

	readonly certificateString: string;

	readonly keyType: STDSDirectoryServerKeyType;

	readonly publicKey: any;

	encryptDataUsingRSA_OAEP_SHA256(plaintext: NSData): NSData;
}

declare const enum STDSDirectoryServerKeyType {

	RSA = 0,

	EC = 1,

	Unknown = 2
}

declare class STDSEllipticCurvePoint extends NSObject {

	static alloc(): STDSEllipticCurvePoint; // inherited from NSObject

	static new(): STDSEllipticCurvePoint; // inherited from NSObject

	readonly publicKey: any;

	readonly x: NSData;

	readonly y: NSData;

	constructor(o: { certificateData: NSData; });

	constructor(o: { JWK: NSDictionary<any, any>; });

	constructor(o: { key: any; });

	constructor(o: { x: NSData; y: NSData; });

	initWithCertificateData(certificateData: NSData): this;

	initWithJWK(jwk: NSDictionary<any, any>): this;

	initWithKey(key: any): this;

	initWithXY(x: NSData, y: NSData): this;
}

declare class STDSEphemeralKeyPair extends NSObject {

	static alloc(): STDSEphemeralKeyPair; // inherited from NSObject

	static ephemeralKeyPair(): STDSEphemeralKeyPair;

	static new(): STDSEphemeralKeyPair; // inherited from NSObject

	static testKeyPair(): STDSEphemeralKeyPair;

	readonly publicKeyCurvePoint: STDSEllipticCurvePoint;

	readonly publicKeyJWK: string;

	createSharedSecretWithCertificate(certificate: STDSDirectoryServerCertificate): NSData;

	createSharedSecretWithEllipticCurveKey(ecKey: STDSEllipticCurvePoint): NSData;
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

declare class STDSExpandableInformationView extends UIView {

	static alloc(): STDSExpandableInformationView; // inherited from NSObject

	static appearance(): STDSExpandableInformationView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STDSExpandableInformationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STDSExpandableInformationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STDSExpandableInformationView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STDSExpandableInformationView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STDSExpandableInformationView; // inherited from UIAppearance

	static new(): STDSExpandableInformationView; // inherited from NSObject

	customization: STDSFooterCustomization;

	didTap: () => void;

	text: string;

	title: string;
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

declare class STDSImageLoader extends NSObject {

	static alloc(): STDSImageLoader; // inherited from NSObject

	static new(): STDSImageLoader; // inherited from NSObject

	constructor(o: { URLSession: NSURLSession; });

	initWithURLSession(session: NSURLSession): this;

	loadImageFromURLCompletion(URL: NSURL, completion: (p1: UIImage) => void): void;
}

declare class STDSIntegrityChecker extends NSObject {

	static SDKIntegrityIsValid(): boolean;

	static alloc(): STDSIntegrityChecker; // inherited from NSObject

	static new(): STDSIntegrityChecker; // inherited from NSObject
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

declare class STDSJSONWebEncryption extends NSObject {

	static alloc(): STDSJSONWebEncryption; // inherited from NSObject

	static decryptDataWithContentEncryptionKeyError(data: NSData, contentEncryptionKey: NSData): NSDictionary<any, any>;

	static directEncryptJSONWithContentEncryptionKeyForACSTransactionIDError(json: NSDictionary<any, any>, contentEncryptionKey: NSData, acsTransactionID: string): string;

	static encryptJSONForDirectoryServerError(json: NSDictionary<any, any>, directoryServer: STDSDirectoryServer): string;

	static encryptJSONWithCertificateDirectoryServerIDServerKeyIDError(json: NSDictionary<any, any>, certificate: STDSDirectoryServerCertificate, directoryServerID: string, serverKeyID: string): string;

	static new(): STDSJSONWebEncryption; // inherited from NSObject

	static verifyJSONWebSignatureForDirectoryServer(jws: STDSJSONWebSignature, directoryServer: STDSDirectoryServer): boolean;

	static verifyJSONWebSignatureWithCertificateRootCertificates(jws: STDSJSONWebSignature, certificate: STDSDirectoryServerCertificate, rootCertificates: NSArray<string> | string[]): boolean;
}

declare class STDSJSONWebSignature extends NSObject {

	static alloc(): STDSJSONWebSignature; // inherited from NSObject

	static new(): STDSJSONWebSignature; // inherited from NSObject

	readonly algorithm: STDSJSONWebSignatureAlgorithm;

	readonly certificateChain: NSArray<string>;

	readonly digest: NSData;

	readonly ellipticCurvePoint: STDSEllipticCurvePoint;

	readonly payload: NSData;

	readonly signature: NSData;

	constructor(o: { string: string; });

	constructor(o: { string: string; allowNilKey: boolean; });

	initWithString(jwsString: string): this;

	initWithStringAllowNilKey(jwsString: string, allowNilKey: boolean): this;
}

declare const enum STDSJSONWebSignatureAlgorithm {

	ES256 = 0,

	PS256 = 1,

	Unknown = 2
}

declare class STDSJailbreakChecker extends NSObject {

	static alloc(): STDSJailbreakChecker; // inherited from NSObject

	static isJailbroken(): boolean;

	static new(): STDSJailbreakChecker; // inherited from NSObject
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

declare class STDSOSVersionChecker extends NSObject {

	static alloc(): STDSOSVersionChecker; // inherited from NSObject

	static isSupportedOSVersion(): boolean;

	static new(): STDSOSVersionChecker; // inherited from NSObject
}

declare function STDSPrivateSecKeyRefFromCoordinates(x: NSData, y: NSData, d: NSData): interop.Unmanaged<any>;

declare class STDSProcessingView extends UIView {

	static alloc(): STDSProcessingView; // inherited from NSObject

	static appearance(): STDSProcessingView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STDSProcessingView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STDSProcessingView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STDSProcessingView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STDSProcessingView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STDSProcessingView; // inherited from UIAppearance

	static new(): STDSProcessingView; // inherited from NSObject

	shouldDisplayBlurView: boolean;

	shouldDisplayDSLogo: boolean;

	constructor(o: { customization: STDSUICustomization; directoryServerLogo: UIImage; });

	initWithCustomizationDirectoryServerLogo(customization: STDSUICustomization, directoryServerLogo: UIImage): this;
}

declare class STDSProgressViewController extends UIViewController {

	static alloc(): STDSProgressViewController; // inherited from NSObject

	static new(): STDSProgressViewController; // inherited from NSObject

	constructor(o: { directoryServer: STDSDirectoryServer; uiCustomization: STDSUICustomization; didCancel: () => void; });

	initWithDirectoryServerUiCustomizationDidCancel(directoryServer: STDSDirectoryServer, uiCustomization: STDSUICustomization, didCancel: () => void): this;
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

declare function STDSSecCertificateCopyPublicKeyType(certificate: any): interop.Unmanaged<string>;

declare function STDSSecCertificateFromData(data: NSData): interop.Unmanaged<any>;

declare function STDSSecCertificateFromString(certificateString: string): interop.Unmanaged<any>;

declare function STDSSecKeyRefFromCoordinates(coordinateX: NSData, coordinateY: NSData): interop.Unmanaged<any>;

declare class STDSSelectionButton extends UIButton {

	static alloc(): STDSSelectionButton; // inherited from NSObject

	static appearance(): STDSSelectionButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STDSSelectionButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STDSSelectionButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STDSSelectionButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STDSSelectionButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STDSSelectionButton; // inherited from UIAppearance

	static buttonWithConfigurationPrimaryAction(configuration: UIButtonConfiguration, primaryAction: UIAction): STDSSelectionButton; // inherited from UIButton

	static buttonWithType(buttonType: UIButtonType): STDSSelectionButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): STDSSelectionButton; // inherited from UIButton

	static new(): STDSSelectionButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): STDSSelectionButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): STDSSelectionButton; // inherited from UIButton

	customization: STDSSelectionCustomization;

	isCheckbox: boolean;

	constructor(o: { customization: STDSSelectionCustomization; });

	initWithCustomization(customization: STDSSelectionCustomization): this;
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

declare class STDSSimulatorChecker extends NSObject {

	static alloc(): STDSSimulatorChecker; // inherited from NSObject

	static isRunningOnSimulator(): boolean;

	static new(): STDSSimulatorChecker; // inherited from NSObject
}

declare class STDSSpacerView extends UIView {

	static alloc(): STDSSpacerView; // inherited from NSObject

	static appearance(): STDSSpacerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STDSSpacerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STDSSpacerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STDSSpacerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STDSSpacerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STDSSpacerView; // inherited from UIAppearance

	static new(): STDSSpacerView; // inherited from NSObject

	constructor(o: { layoutAxis: STDSStackViewLayoutAxis; dimension: number; });

	initWithLayoutAxisDimension(layoutAxis: STDSStackViewLayoutAxis, dimension: number): this;
}

declare class STDSStackView extends UIView {

	static alloc(): STDSStackView; // inherited from NSObject

	static appearance(): STDSStackView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STDSStackView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STDSStackView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STDSStackView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STDSStackView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STDSStackView; // inherited from UIAppearance

	static new(): STDSStackView; // inherited from NSObject

	constructor(o: { alignment: STDSStackViewLayoutAxis; });

	addArrangedSubview(view: UIView): void;

	addSpacer(dimension: number): void;

	initWithAlignment(alignment: STDSStackViewLayoutAxis): this;

	removeArrangedSubview(view: UIView): void;
}

declare const enum STDSStackViewLayoutAxis {

	Horizontal = 0,

	Vertical = 1
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

declare class STDSSynchronousLocationManager extends NSObject {

	static alloc(): STDSSynchronousLocationManager; // inherited from NSObject

	static hasPermissions(): boolean;

	static new(): STDSSynchronousLocationManager; // inherited from NSObject

	static sharedManager(): STDSSynchronousLocationManager;

	deviceLocation(): CLLocation;
}

declare class STDSTextChallengeView extends UIView {

	static alloc(): STDSTextChallengeView; // inherited from NSObject

	static appearance(): STDSTextChallengeView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STDSTextChallengeView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STDSTextChallengeView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STDSTextChallengeView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STDSTextChallengeView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STDSTextChallengeView; // inherited from UIAppearance

	static new(): STDSTextChallengeView; // inherited from NSObject

	readonly inputText: string;

	textField: STDSTextField;

	textFieldCustomization: STDSTextFieldCustomization;
}

declare class STDSTextField extends UITextField {

	static alloc(): STDSTextField; // inherited from NSObject

	static appearance(): STDSTextField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STDSTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STDSTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STDSTextField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STDSTextField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STDSTextField; // inherited from UIAppearance

	static new(): STDSTextField; // inherited from NSObject
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

declare const enum STDSThreeDSProtocolVersion {

	Version2_1_0 = 0,

	Version2_2_0 = 1,

	VersionUnknown = 2,

	VersionFallbackTest = 3
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

declare function STDSVerifyEllipticCurveP256Signature(coordinateX: NSData, coordinateY: NSData, payload: NSData, signature: NSData): boolean;

declare function STDSVerifyRSASignature(certificate: any, payload: NSData, signature: NSData): boolean;

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

declare class STDSWebView extends WKWebView {

	static alloc(): STDSWebView; // inherited from NSObject

	static appearance(): STDSWebView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STDSWebView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STDSWebView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STDSWebView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STDSWebView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STDSWebView; // inherited from UIAppearance

	static new(): STDSWebView; // inherited from NSObject

	loadExternalResourceBlockingHTMLString(html: string): WKNavigation;
}

declare class STDSWhitelistView extends UIView {

	static alloc(): STDSWhitelistView; // inherited from NSObject

	static appearance(): STDSWhitelistView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STDSWhitelistView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STDSWhitelistView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STDSWhitelistView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STDSWhitelistView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STDSWhitelistView; // inherited from UIAppearance

	static new(): STDSWhitelistView; // inherited from NSObject

	labelCustomization: STDSLabelCustomization;

	readonly selectedResponse: STDSChallengeResponseSelectionInfo;

	selectionCustomization: STDSSelectionCustomization;

	whitelistText: string;
}

declare class STPAPIClient extends NSObject {

	static alloc(): STPAPIClient; // inherited from NSObject

	static new(): STPAPIClient; // inherited from NSObject

	static pkPaymentErrorForStripeError(stripeError: NSError): NSError;

	appInfo: STPAppInfo;

	configuration: STPPaymentConfiguration;

	publishableKey: string;

	stripeAccount: string;

	static readonly STPSDKVersion: string;

	static readonly apiVersion: string;

	static readonly sharedClient: STPAPIClient;

	constructor(o: { configuration: STPPaymentConfiguration; });

	constructor(o: { publishableKey: string; });

	confirmPaymentIntentWithParamsCompletion(paymentIntentParams: STPPaymentIntentParams, completion: (p1: STPPaymentIntent, p2: NSError) => void): void;

	confirmPaymentIntentWithParamsExpandCompletion(paymentIntentParams: STPPaymentIntentParams, expand: NSArray<string> | string[], completion: (p1: STPPaymentIntent, p2: NSError) => void): void;

	confirmSetupIntentWithParamsCompletion(setupIntentParams: STPSetupIntentConfirmParams, completion: (p1: STPSetupIntent, p2: NSError) => void): void;

	createPaymentMethodWithParamsCompletion(paymentMethodParams: STPPaymentMethodParams, completion: (p1: STPPaymentMethod, p2: NSError) => void): void;

	createPaymentMethodWithPaymentCompletion(payment: PKPayment, completion: (p1: STPPaymentMethod, p2: NSError) => void): void;

	createRadarSessionWithCompletion(completion: (p1: STPRadarSession, p2: NSError) => void): void;

	createSourceWithParamsCompletion(sourceParams: STPSourceParams, completion: (p1: STPSource, p2: NSError) => void): void;

	createSourceWithPaymentCompletion(payment: PKPayment, completion: (p1: STPSource, p2: NSError) => void): void;

	createTokenForCVCUpdateCompletion(cvc: string, completion: (p1: STPToken, p2: NSError) => void): void;

	createTokenWithBankAccountCompletion(bankAccount: STPBankAccountParams, completion: (p1: STPToken, p2: NSError) => void): void;

	createTokenWithCardCompletion(cardParams: STPCardParams, completion: (p1: STPToken, p2: NSError) => void): void;

	createTokenWithConnectAccountCompletion(account: STPConnectAccountParams, completion: (p1: STPToken, p2: NSError) => void): void;

	createTokenWithPaymentCompletion(payment: PKPayment, completion: (p1: STPToken, p2: NSError) => void): void;

	createTokenWithPersonalIDNumberCompletion(pii: string, completion: (p1: STPToken, p2: NSError) => void): void;

	createTokenWithSSNLast4Completion(ssnLast4: string, completion: (p1: STPToken, p2: NSError) => void): void;

	initWithConfiguration(configuration: STPPaymentConfiguration): this;

	initWithPublishableKey(publishableKey: string): this;

	retrievePaymentIntentWithClientSecretCompletion(secret: string, completion: (p1: STPPaymentIntent, p2: NSError) => void): void;

	retrievePaymentIntentWithClientSecretExpandCompletion(secret: string, expand: NSArray<string> | string[], completion: (p1: STPPaymentIntent, p2: NSError) => void): void;

	retrieveSetupIntentWithClientSecretCompletion(secret: string, completion: (p1: STPSetupIntent, p2: NSError) => void): void;

	retrieveSourceWithIdClientSecretCompletion(identifier: string, secret: string, completion: (p1: STPSource, p2: NSError) => void): void;

	startPollingSourceWithIdClientSecretTimeoutCompletion(identifier: string, secret: string, timeout: number, completion: (p1: STPSource, p2: NSError) => void): void;

	stopPollingSourceWithId(identifier: string): void;

	uploadImagePurposeCompletion(image: UIImage, purpose: STPFilePurpose, completion: (p1: STPFile, p2: NSError) => void): void;
}

interface STPAPIResponseDecodable extends NSObjectProtocol {

	allResponseFields: NSDictionary<any, any>;
}
declare var STPAPIResponseDecodable: {

	prototype: STPAPIResponseDecodable;

	decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPAPIResponseDecodable;
};

declare class STPAUBECSDebitFormView extends STPMultiFormTextField implements UITextViewDelegate {

	static alloc(): STPAUBECSDebitFormView; // inherited from NSObject

	static appearance(): STPAUBECSDebitFormView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STPAUBECSDebitFormView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STPAUBECSDebitFormView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STPAUBECSDebitFormView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STPAUBECSDebitFormView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STPAUBECSDebitFormView; // inherited from UIAppearance

	static new(): STPAUBECSDebitFormView; // inherited from NSObject

	becsDebitFormDelegate: STPAUBECSDebitFormViewDelegate;

	formBackgroundColor: UIColor;

	readonly paymentMethodParams: STPPaymentMethodParams;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { companyName: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithCompanyName(companyName: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	textViewDidBeginEditing(textView: UITextView): void;

	textViewDidChange(textView: UITextView): void;

	textViewDidChangeSelection(textView: UITextView): void;

	textViewDidEndEditing(textView: UITextView): void;

	textViewEditMenuForTextInRangeSuggestedActions(textView: UITextView, range: NSRange, suggestedActions: NSArray<UIMenuElement> | UIMenuElement[]): UIMenu;

	textViewShouldBeginEditing(textView: UITextView): boolean;

	textViewShouldChangeTextInRangeReplacementText(textView: UITextView, range: NSRange, text: string): boolean;

	textViewShouldEndEditing(textView: UITextView): boolean;

	textViewShouldInteractWithTextAttachmentInRange(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange): boolean;

	textViewShouldInteractWithTextAttachmentInRangeInteraction(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	textViewShouldInteractWithURLInRange(textView: UITextView, URL: NSURL, characterRange: NSRange): boolean;

	textViewShouldInteractWithURLInRangeInteraction(textView: UITextView, URL: NSURL, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	textViewWillDismissEditMenuWithAnimator(textView: UITextView, animator: UIEditMenuInteractionAnimating): void;

	textViewWillPresentEditMenuWithAnimator(textView: UITextView, animator: UIEditMenuInteractionAnimating): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

interface STPAUBECSDebitFormViewDelegate extends NSObjectProtocol {

	auBECSDebitFormDidChangeToStateComplete(form: STPAUBECSDebitFormView, complete: boolean): void;
}
declare var STPAUBECSDebitFormViewDelegate: {

	prototype: STPAUBECSDebitFormViewDelegate;
};

declare class STPAddCardViewController extends STPCoreTableViewController implements STPPaymentCardTextFieldDelegate, UITableViewDataSource, UITableViewDelegate {

	static alloc(): STPAddCardViewController; // inherited from NSObject

	static new(): STPAddCardViewController; // inherited from NSObject

	apiClient: STPAPIClient;

	customFooterView: UIView;

	delegate: STPAddCardViewControllerDelegate;

	prefilledInformation: STPUserInformation;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { configuration: STPPaymentConfiguration; theme: STPTheme; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	handleCancelTapped(sender: any): void;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	initWithConfigurationTheme(configuration: STPPaymentConfiguration, theme: STPTheme): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	paymentCardTextFieldDidBeginEditing(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidBeginEditingCVC(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidBeginEditingExpiration(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidBeginEditingNumber(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidBeginEditingPostalCode(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidChange(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidEndEditing(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidEndEditingCVC(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidEndEditingExpiration(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidEndEditingNumber(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidEndEditingPostalCode(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldWillEndEditingForReturn(textField: STPPaymentCardTextField): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCanPerformPrimaryActionForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewContextMenuConfigurationForRowAtIndexPathPoint(tableView: UITableView, indexPath: NSIndexPath, point: CGPoint): UIContextMenuConfiguration;

	tableViewDidBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndMultipleSelectionInteraction(tableView: UITableView): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewPerformPrimaryActionForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewPreviewForDismissingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewPreviewForHighlightingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewSelectionFollowsFocusForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayContextMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillEndContextMenuInteractionWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillPerformPreviewActionForMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	updateAppearance(): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

interface STPAddCardViewControllerDelegate extends NSObjectProtocol {

	addCardViewControllerDidCancel(addCardViewController: STPAddCardViewController): void;

	addCardViewControllerDidCreatePaymentMethodCompletion(addCardViewController: STPAddCardViewController, paymentMethod: STPPaymentMethod, completion: (p1: NSError) => void): void;

	addCardViewControllerDidCreateSourceCompletion?(addCardViewController: STPAddCardViewController, source: STPSource, completion: (p1: NSError) => void): void;

	addCardViewControllerDidCreateTokenCompletion?(addCardViewController: STPAddCardViewController, token: STPToken, completion: (p1: NSError) => void): void;
}
declare var STPAddCardViewControllerDelegate: {

	prototype: STPAddCardViewControllerDelegate;
};

declare class STPAddress extends NSObject implements NSCopying, STPAPIResponseDecodable, STPFormEncodable {

	static alloc(): STPAddress; // inherited from NSObject

	static applePayContactFieldsFromBillingAddressFields(billingAddressFields: STPBillingAddressFields): NSSet<string>;

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPAddress;

	static new(): STPAddress; // inherited from NSObject

	static pkContactFieldsFromStripeContactFields(contactFields: NSSet<STPContactField>): NSSet<string>;

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	static shippingInfoForChargeWithAddressShippingMethod(address: STPAddress, method: PKShippingMethod): NSDictionary<any, any>;

	city: string;

	country: string;

	email: string;

	line1: string;

	line2: string;

	name: string;

	phone: string;

	postalCode: string;

	state: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { CNContact: CNContact; });

	constructor(o: { PKContact: PKContact; });

	constructor(o: { paymentMethodBillingDetails: STPPaymentMethodBillingDetails; });

	PKContactValue(): PKContact;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	containsContentForBillingAddressFields(desiredFields: STPBillingAddressFields): boolean;

	containsContentForShippingAddressFields(desiredFields: NSSet<STPContactField>): boolean;

	containsRequiredFields(requiredFields: STPBillingAddressFields): boolean;

	containsRequiredShippingAddressFields(requiredFields: NSSet<STPContactField>): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithCNContact(contact: CNContact): this;

	initWithPKContact(contact: PKContact): this;

	initWithPaymentMethodBillingDetails(billingDetails: STPPaymentMethodBillingDetails): this;

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

declare class STPAppInfo extends NSObject {

	static alloc(): STPAppInfo; // inherited from NSObject

	static new(): STPAppInfo; // inherited from NSObject

	readonly name: string;

	readonly partnerId: string;

	readonly url: string;

	readonly version: string;

	constructor(o: { name: string; partnerId: string; version: string; url: string; });

	initWithNamePartnerIdVersionUrl(name: string, partnerId: string, version: string, url: string): this;
}

declare class STPApplePayContext extends NSObject {

	static alloc(): STPApplePayContext; // inherited from NSObject

	static new(): STPApplePayContext; // inherited from NSObject

	apiClient: STPAPIClient;

	constructor(o: { paymentRequest: PKPaymentRequest; delegate: STPApplePayContextDelegate; });

	initWithPaymentRequestDelegate(paymentRequest: PKPaymentRequest, delegate: STPApplePayContextDelegate): this;

	presentApplePayFromWindowWithCompletion(window: UIWindow, completion: () => void): void;

	presentApplePayOnViewControllerCompletion(viewController: UIViewController, completion: () => void): void;

	presentApplePayWithCompletion(completion: () => void): void;
}

interface STPApplePayContextDelegate extends NSObjectProtocol {

	applePayContextDidCompleteWithStatusError(context: STPApplePayContext, status: STPPaymentStatus, error: NSError): void;

	applePayContextDidCreatePaymentMethodPaymentInformationCompletion(context: STPApplePayContext, paymentMethod: STPPaymentMethod, paymentInformation: PKPayment, completion: (p1: string, p2: NSError) => void): void;

	applePayContextDidSelectShippingContactHandler?(context: STPApplePayContext, contact: PKContact, handler: (p1: PKPaymentRequestShippingContactUpdate) => void): void;

	applePayContextDidSelectShippingMethodHandler?(context: STPApplePayContext, shippingMethod: PKShippingMethod, handler: (p1: PKPaymentRequestShippingMethodUpdate) => void): void;

	applePayContextWillCompleteWithResultHandler?(context: STPApplePayContext, authorizationResult: PKPaymentAuthorizationResult, handler: (p1: PKPaymentAuthorizationResult) => void): void;
}
declare var STPApplePayContextDelegate: {

	prototype: STPApplePayContextDelegate;
};

declare class STPApplePayPaymentOption extends NSObject implements STPPaymentOption {

	static alloc(): STPApplePayPaymentOption; // inherited from NSObject

	static new(): STPApplePayPaymentOption; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly image: UIImage; // inherited from STPPaymentOption

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly isReusable: boolean; // inherited from STPPaymentOption

	readonly label: string; // inherited from STPPaymentOption

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly templateImage: UIImage; // inherited from STPPaymentOption

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

interface STPAuthenticationContext extends NSObjectProtocol {

	authenticationContextWillDismissViewController?(viewController: UIViewController): void;

	authenticationPresentingViewController(): UIViewController;

	configureSafariViewController?(viewController: SFSafariViewController): void;

	prepareAuthenticationContextForPresentation?(completion: () => void): void;
}
declare var STPAuthenticationContext: {

	prototype: STPAuthenticationContext;
};

interface STPBackendAPIAdapter extends NSObjectProtocol {

	attachPaymentMethodToCustomerCompletion(paymentMethod: STPPaymentMethod, completion: (p1: NSError) => void): void;

	detachPaymentMethodFromCustomerCompletion?(paymentMethod: STPPaymentMethod, completion: (p1: NSError) => void): void;

	listPaymentMethodsForCustomerWithCompletion(completion: (p1: NSArray<STPPaymentMethod>, p2: NSError) => void): void;

	retrieveCustomer(completion: (p1: STPCustomer, p2: NSError) => void): void;

	updateCustomerWithShippingAddressCompletion?(shipping: STPAddress, completion: (p1: NSError) => void): void;
}
declare var STPBackendAPIAdapter: {

	prototype: STPBackendAPIAdapter;
};

declare class STPBankAccount extends NSObject implements STPAPIResponseDecodable, STPSourceProtocol {

	static alloc(): STPBankAccount; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPBankAccount;

	static new(): STPBankAccount; // inherited from NSObject

	readonly accountHolderName: string;

	readonly accountHolderType: STPBankAccountHolderType;

	readonly bankAccountId: string;

	readonly bankName: string;

	readonly country: string;

	readonly currency: string;

	readonly fingerprint: string;

	readonly last4: string;

	readonly routingNumber: string;

	readonly status: STPBankAccountStatus;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly stripeID: string; // inherited from STPSourceProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPBankAccountCollector extends NSObject {

	static alloc(): STPBankAccountCollector; // inherited from NSObject

	static new(): STPBankAccountCollector; // inherited from NSObject

	apiClient: STPAPIClient;

	constructor(o: { APIClient: STPAPIClient; });

	collectBankAccountForPaymentWithClientSecretParamsFromCompletion(clientSecret: string, params: STPCollectBankAccountParams, viewController: UIViewController, completion: (p1: STPPaymentIntent, p2: NSError) => void): void;

	collectBankAccountForPaymentWithClientSecretReturnURLParamsFromCompletion(clientSecret: string, returnURL: string, params: STPCollectBankAccountParams, viewController: UIViewController, completion: (p1: STPPaymentIntent, p2: NSError) => void): void;

	collectBankAccountForSetupWithClientSecretParamsFromCompletion(clientSecret: string, params: STPCollectBankAccountParams, viewController: UIViewController, completion: (p1: STPSetupIntent, p2: NSError) => void): void;

	collectBankAccountForSetupWithClientSecretReturnURLParamsFromCompletion(clientSecret: string, returnURL: string, params: STPCollectBankAccountParams, viewController: UIViewController, completion: (p1: STPSetupIntent, p2: NSError) => void): void;

	initWithAPIClient(apiClient: STPAPIClient): this;
}

declare const enum STPBankAccountHolderType {

	Individual = 0,

	Company = 1
}

declare class STPBankAccountParams extends NSObject implements STPFormEncodable {

	static alloc(): STPBankAccountParams; // inherited from NSObject

	static new(): STPBankAccountParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	accountHolderName: string;

	accountHolderType: STPBankAccountHolderType;

	accountNumber: string;

	country: string;

	currency: string;

	readonly last4: string;

	routingNumber: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare const enum STPBankAccountStatus {

	New = 0,

	Validated = 1,

	Verified = 2,

	VerificationFailed = 3,

	Errored = 4
}

declare const enum STPBankSelectionMethod {

	FPX = 0,

	Unknown = 1
}

declare class STPBankSelectionViewController extends STPCoreTableViewController implements UITableViewDataSource, UITableViewDelegate {

	static alloc(): STPBankSelectionViewController; // inherited from NSObject

	static new(): STPBankSelectionViewController; // inherited from NSObject

	apiClient: STPAPIClient;

	delegate: STPBankSelectionViewControllerDelegate;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { bankMethod: STPBankSelectionMethod; });

	constructor(o: { bankMethod: STPBankSelectionMethod; configuration: STPPaymentConfiguration; theme: STPTheme; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	initWithBankMethod(bankMethod: STPBankSelectionMethod): this;

	initWithBankMethodConfigurationTheme(bankMethod: STPBankSelectionMethod, configuration: STPPaymentConfiguration, theme: STPTheme): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCanPerformPrimaryActionForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewContextMenuConfigurationForRowAtIndexPathPoint(tableView: UITableView, indexPath: NSIndexPath, point: CGPoint): UIContextMenuConfiguration;

	tableViewDidBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndMultipleSelectionInteraction(tableView: UITableView): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewPerformPrimaryActionForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewPreviewForDismissingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewPreviewForHighlightingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewSelectionFollowsFocusForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayContextMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillEndContextMenuInteractionWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillPerformPreviewActionForMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

interface STPBankSelectionViewControllerDelegate extends NSObjectProtocol {

	bankSelectionViewControllerDidCreatePaymentMethodParams(bankViewController: STPBankSelectionViewController, paymentMethodParams: STPPaymentMethodParams): void;
}
declare var STPBankSelectionViewControllerDelegate: {

	prototype: STPBankSelectionViewControllerDelegate;
};

declare const enum STPBillingAddressFields {

	None = 0,

	PostalCode = 1,

	Full = 2,

	Name = 3,

	Zip = 4
}

declare class STPCard extends NSObject implements STPAPIResponseDecodable, STPPaymentOption, STPSourceProtocol {

	static alloc(): STPCard; // inherited from NSObject

	static brandFromString(string: string): STPCardBrand;

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPCard;

	static fundingFromString(string: string): STPCardFundingType;

	static new(): STPCard; // inherited from NSObject

	static stringFromBrand(brand: STPCardBrand): string;

	readonly address: STPAddress;

	readonly addressCity: string;

	readonly addressCountry: string;

	readonly addressLine1: string;

	readonly addressLine2: string;

	readonly addressState: string;

	readonly addressZip: string;

	readonly brand: STPCardBrand;

	readonly cardId: string;

	readonly country: string;

	readonly currency: string;

	readonly dynamicLast4: string;

	readonly expMonth: number;

	readonly expYear: number;

	readonly funding: STPCardFundingType;

	readonly isApplePayCard: boolean;

	readonly last4: string;

	readonly metadata: NSDictionary<string, string>;

	readonly name: string;

	stripeID: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly image: UIImage; // inherited from STPPaymentOption

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly isReusable: boolean; // inherited from STPPaymentOption

	readonly label: string; // inherited from STPPaymentOption

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly templateImage: UIImage; // inherited from STPPaymentOption

	readonly  // inherited from NSObjectProtocol

	constructor(o: { ID: string; brand: STPCardBrand; last4: string; expMonth: number; expYear: number; funding: STPCardFundingType; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithIDBrandLast4ExpMonthExpYearFunding(cardID: string, brand: STPCardBrand, last4: string, expMonth: number, expYear: number, funding: STPCardFundingType): this;

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

declare const enum STPCardBrand {

	Visa = 0,

	Amex = 1,

	Mastercard = 2,

	Discover = 3,

	JCB = 4,

	DinersClub = 5,

	UnionPay = 6,

	Unknown = 7
}

declare class STPCardBrandUtilities extends NSObject {

	static alloc(): STPCardBrandUtilities; // inherited from NSObject

	static new(): STPCardBrandUtilities; // inherited from NSObject

	static stringFromCardBrand(brand: STPCardBrand): string;
}

declare class STPCardFormView extends STPFormView {

	static alloc(): STPCardFormView; // inherited from NSObject

	static appearance(): STPCardFormView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STPCardFormView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STPCardFormView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STPCardFormView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STPCardFormView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STPCardFormView; // inherited from UIAppearance

	static new(): STPCardFormView; // inherited from NSObject

	readonly cardParams: STPPaymentMethodParams;

	delegate: STPCardFormViewDelegate;

	disabledBackgroundColor: UIColor;

	constructor(o: { style: STPCardFormViewStyle; });

	initWithStyle(style: STPCardFormViewStyle): this;
}

interface STPCardFormViewDelegate extends NSObjectProtocol {

	cardFormViewDidChangeToStateComplete(form: STPCardFormView, complete: boolean): void;
}
declare var STPCardFormViewDelegate: {

	prototype: STPCardFormViewDelegate;
};

declare const enum STPCardFormViewStyle {

	Standard = 0,

	Borderless = 1
}

declare const enum STPCardFundingType {

	Debit = 0,

	Credit = 1,

	Prepaid = 2,

	Other = 3
}

declare class STPCardParams extends NSObject implements NSCopying, STPFormEncodable {

	static alloc(): STPCardParams; // inherited from NSObject

	static new(): STPCardParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	address: STPAddress;

	addressCity: string;

	addressCountry: string;

	addressLine1: string;

	addressLine2: string;

	addressState: string;

	addressZip: string;

	currency: string;

	cvc: string;

	expMonth: number;

	expYear: number;

	name: string;

	number: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { paymentMethodParams: STPPaymentMethodParams; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithPaymentMethodParams(paymentMethodParams: STPPaymentMethodParams): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	last4(): string;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum STPCardValidationState {

	Valid = 0,

	Invalid = 1,

	Incomplete = 2
}

declare class STPCardValidator extends NSObject {

	static alloc(): STPCardValidator; // inherited from NSObject

	static brandForNumber(cardNumber: string): STPCardBrand;

	static fragmentLengthForCardBrand(brand: STPCardBrand): number;

	static lengthsForCardBrand(brand: STPCardBrand): NSSet<number>;

	static maxCVCLengthForCardBrand(brand: STPCardBrand): number;

	static maxLengthForCardBrand(brand: STPCardBrand): number;

	static new(): STPCardValidator; // inherited from NSObject

	static sanitizedNumericStringForString(string: string): string;

	static sanitizedPostalStringForString(string: string): string;

	static stringIsNumeric(string: string): boolean;

	static validationStateForCVCCardBrand(cvc: string, brand: STPCardBrand): STPCardValidationState;

	static validationStateForCard(card: STPCardParams): STPCardValidationState;

	static validationStateForExpirationMonth(expirationMonth: string): STPCardValidationState;

	static validationStateForExpirationYearInMonth(expirationYear: string, expirationMonth: string): STPCardValidationState;

	static validationStateForNumberValidatingCardBrand(cardNumber: string, validatingCardBrand: boolean): STPCardValidationState;
}

declare const enum STPCollectBankAccountError {

	FinancialConnectionsSDKNotLinked = 0,

	InvalidClientSecret = 1,

	UnexpectedError = 2
}

declare class STPCollectBankAccountParams extends NSObject {

	static alloc(): STPCollectBankAccountParams; // inherited from NSObject

	static collectUSBankAccountParamsWithNameEmail(name: string, email: string): STPCollectBankAccountParams;

	static new(): STPCollectBankAccountParams; // inherited from NSObject
}

declare class STPConfirmAlipayOptions extends NSObject implements STPFormEncodable {

	static alloc(): STPConfirmAlipayOptions; // inherited from NSObject

	static new(): STPConfirmAlipayOptions; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	readonly appBundleID: string;

	readonly appVersionKey: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPConfirmBLIKOptions extends NSObject implements STPFormEncodable {

	static alloc(): STPConfirmBLIKOptions; // inherited from NSObject

	static new(): STPConfirmBLIKOptions; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	code: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { code: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithCode(code: string): this;

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

declare class STPConfirmCardOptions extends NSObject implements STPFormEncodable {

	static alloc(): STPConfirmCardOptions; // inherited from NSObject

	static new(): STPConfirmCardOptions; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	cvc: string;

	network: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPConfirmPaymentMethodOptions extends NSObject implements STPFormEncodable {

	static alloc(): STPConfirmPaymentMethodOptions; // inherited from NSObject

	static new(): STPConfirmPaymentMethodOptions; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	alipayOptions: STPConfirmAlipayOptions;

	blikOptions: STPConfirmBLIKOptions;

	cardOptions: STPConfirmCardOptions;

	usBankAccountOptions: STPConfirmUSBankAccountOptions;

	weChatPayOptions: STPConfirmWeChatPayOptions;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPConfirmUSBankAccountOptions extends NSObject implements STPFormEncodable {

	static alloc(): STPConfirmUSBankAccountOptions; // inherited from NSObject

	static new(): STPConfirmUSBankAccountOptions; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	setupFutureUsage: STPPaymentIntentSetupFutureUsage;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { setupFutureUsage: STPPaymentIntentSetupFutureUsage; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithSetupFutureUsage(setupFutureUsage: STPPaymentIntentSetupFutureUsage): this;

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

declare class STPConfirmWeChatPayOptions extends NSObject implements STPFormEncodable {

	static alloc(): STPConfirmWeChatPayOptions; // inherited from NSObject

	static new(): STPConfirmWeChatPayOptions; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	appId: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { appId: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithAppId(appId: string): this;

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

declare class STPConnectAccountAddress extends NSObject implements STPFormEncodable {

	static alloc(): STPConnectAccountAddress; // inherited from NSObject

	static new(): STPConnectAccountAddress; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	city: string;

	country: string;

	line1: string;

	line2: string;

	postalCode: string;

	state: string;

	town: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare const enum STPConnectAccountBusinessType {

	Individual = 0,

	Company = 1
}

declare class STPConnectAccountCompanyParams extends NSObject implements STPFormEncodable {

	static alloc(): STPConnectAccountCompanyParams; // inherited from NSObject

	static new(): STPConnectAccountCompanyParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	address: STPConnectAccountAddress;

	directorsProvided: number;

	kanaAddress: STPConnectAccountAddress;

	kanaName: string;

	kanjiAddress: STPConnectAccountAddress;

	kanjiName: string;

	name: string;

	ownersProvided: number;

	phone: string;

	taxID: string;

	taxIDRegistrar: string;

	vatID: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPConnectAccountIndividualParams extends NSObject implements STPFormEncodable {

	static alloc(): STPConnectAccountIndividualParams; // inherited from NSObject

	static new(): STPConnectAccountIndividualParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	address: STPConnectAccountAddress;

	dateOfBirth: NSDateComponents;

	email: string;

	firstName: string;

	gender: string;

	idNumber: string;

	kanaAddress: STPConnectAccountAddress;

	kanaFirstName: string;

	kanaLastName: string;

	kanjiAddress: STPConnectAccountAddress;

	kanjiFirstName: string;

	kanjiLastName: string;

	lastName: string;

	maidenName: string;

	metadata: NSDictionary<any, any>;

	phone: string;

	ssnLast4: string;

	verification: STPConnectAccountIndividualVerification;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPConnectAccountIndividualVerification extends NSObject implements STPFormEncodable {

	static alloc(): STPConnectAccountIndividualVerification; // inherited from NSObject

	static new(): STPConnectAccountIndividualVerification; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	additionalDocument: STPConnectAccountVerificationDocument;

	document: STPConnectAccountVerificationDocument;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPConnectAccountParams extends NSObject implements STPFormEncodable {

	static alloc(): STPConnectAccountParams; // inherited from NSObject

	static new(): STPConnectAccountParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	readonly businessType: STPConnectAccountBusinessType;

	readonly company: STPConnectAccountCompanyParams;

	readonly individual: STPConnectAccountIndividualParams;

	readonly tosShownAndAccepted: number;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { company: STPConnectAccountCompanyParams; });

	constructor(o: { individual: STPConnectAccountIndividualParams; });

	constructor(o: { tosShownAndAccepted: boolean; company: STPConnectAccountCompanyParams; });

	constructor(o: { tosShownAndAccepted: boolean; individual: STPConnectAccountIndividualParams; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithCompany(company: STPConnectAccountCompanyParams): this;

	initWithIndividual(individual: STPConnectAccountIndividualParams): this;

	initWithTosShownAndAcceptedCompany(wasAccepted: boolean, company: STPConnectAccountCompanyParams): this;

	initWithTosShownAndAcceptedIndividual(wasAccepted: boolean, individual: STPConnectAccountIndividualParams): this;

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

declare class STPConnectAccountVerificationDocument extends NSObject implements STPFormEncodable {

	static alloc(): STPConnectAccountVerificationDocument; // inherited from NSObject

	static new(): STPConnectAccountVerificationDocument; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	back: string;

	front: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPContactField extends NSObject {

	static alloc(): STPContactField; // inherited from NSObject

	static new(): STPContactField; // inherited from NSObject

	static readonly emailAddress: STPContactField;

	static readonly name: STPContactField;

	static readonly phoneNumber: STPContactField;

	static readonly postalAddress: STPContactField;
}

declare class STPCoreScrollViewController extends STPCoreViewController {

	static alloc(): STPCoreScrollViewController; // inherited from NSObject

	static new(): STPCoreScrollViewController; // inherited from NSObject

	scrollView: UIScrollView;
}

declare class STPCoreTableViewController extends STPCoreScrollViewController {

	static alloc(): STPCoreTableViewController; // inherited from NSObject

	static new(): STPCoreTableViewController; // inherited from NSObject

	readonly tableView: UITableView;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;
}

declare class STPCoreViewController extends UIViewController {

	static alloc(): STPCoreViewController; // inherited from NSObject

	static new(): STPCoreViewController; // inherited from NSObject

	constructor(o: { theme: STPTheme; });

	initWithTheme(theme: STPTheme): this;
}

declare class STPCustomer extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPCustomer; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPCustomer;

	static new(): STPCustomer; // inherited from NSObject

	readonly defaultSource: STPSourceProtocol;

	readonly email: string;

	shippingAddress: STPAddress;

	readonly sources: NSArray<STPSourceProtocol>;

	readonly stripeID: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { stripeID: string; defaultSource: STPSourceProtocol; sources: NSArray<STPSourceProtocol> | STPSourceProtocol[]; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithStripeIDDefaultSourceSources(stripeID: string, defaultSource: STPSourceProtocol, sources: NSArray<STPSourceProtocol> | STPSourceProtocol[]): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	updateSourcesFilteringApplePay(filteringApplePay: boolean): void;
}

declare class STPCustomerContext extends NSObject implements STPBackendAPIAdapter {

	static alloc(): STPCustomerContext; // inherited from NSObject

	static new(): STPCustomerContext; // inherited from NSObject

	includeApplePayPaymentMethods: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { keyProvider: STPCustomerEphemeralKeyProvider; });

	constructor(o: { keyProvider: STPCustomerEphemeralKeyProvider; apiClient: STPAPIClient; });

	attachPaymentMethodToCustomerCompletion(paymentMethod: STPPaymentMethod, completion: (p1: NSError) => void): void;

	attachPaymentMethodToCustomerWithPaymentMethodIdCompletion(paymentMethodId: string, completion: (p1: NSError) => void): void;

	class(): typeof NSObject;

	clearCache(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	detachPaymentMethodFromCustomerCompletion(paymentMethod: STPPaymentMethod, completion: (p1: NSError) => void): void;

	detachPaymentMethodFromCustomerWithPaymentMethodIdCompletion(paymentMethodId: string, completion: (p1: NSError) => void): void;

	initWithKeyProvider(keyProvider: STPCustomerEphemeralKeyProvider): this;

	initWithKeyProviderApiClient(keyProvider: STPCustomerEphemeralKeyProvider, apiClient: STPAPIClient): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	listPaymentMethodsForCustomerWithCompletion(completion: (p1: NSArray<STPPaymentMethod>, p2: NSError) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	retrieveCustomer(completion: (p1: STPCustomer, p2: NSError) => void): void;

	self(): this;

	updateCustomerWithShippingAddressCompletion(shipping: STPAddress, completion: (p1: NSError) => void): void;
}

declare class STPCustomerDeserializer extends NSObject {

	static alloc(): STPCustomerDeserializer; // inherited from NSObject

	static new(): STPCustomerDeserializer; // inherited from NSObject

	readonly customer: STPCustomer;

	readonly error: NSError;

	constructor(o: { data: NSData; urlResponse: NSURLResponse; error: NSError; });

	constructor(o: { jsonResponse: any; });

	initWithDataUrlResponseError(data: NSData, urlResponse: NSURLResponse, error: NSError): this;

	initWithJsonResponse(json: any): this;
}

interface STPCustomerEphemeralKeyProvider extends NSObjectProtocol {

	createCustomerKeyWithAPIVersionCompletion(apiVersion: string, completion: (p1: NSDictionary<any, any>, p2: NSError) => void): void;
}
declare var STPCustomerEphemeralKeyProvider: {

	prototype: STPCustomerEphemeralKeyProvider;
};

declare class STPDateOfBirth extends NSObject implements STPFormEncodable {

	static alloc(): STPDateOfBirth; // inherited from NSObject

	static new(): STPDateOfBirth; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	day: number;

	month: number;

	year: number;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

interface STPEphemeralKeyProvider extends STPCustomerEphemeralKeyProvider {
}
declare var STPEphemeralKeyProvider: {

	prototype: STPEphemeralKeyProvider;
};

declare class STPError extends NSObject {

	static alloc(): STPError; // inherited from NSObject

	static new(): STPError; // inherited from NSObject

	static readonly cardDeclined: string;

	static readonly cardErrorCodeKey: string;

	static readonly errorMessageKey: string;

	static readonly errorParameterKey: string;

	static readonly expiredCard: string;

	static readonly hintKey: string;

	static readonly incorrectCVC: string;

	static readonly incorrectNumber: string;

	static readonly incorrectZip: string;

	static readonly invalidCVC: string;

	static readonly invalidExpMonth: string;

	static readonly invalidExpYear: string;

	static readonly invalidNumber: string;

	static readonly processingError: string;

	static readonly stripeDeclineCodeKey: string;

	static readonly stripeDomain: string;

	static readonly stripeErrorCodeKey: string;

	static readonly stripeErrorTypeKey: string;
}

declare const enum STPErrorCode {

	ConnectionError = 40,

	InvalidRequestError = 50,

	AuthenticationError = 51,

	APIError = 60,

	CardError = 70,

	CancellationError = 80,

	EphemeralKeyDecodingError = 1000
}

declare class STPFPXBank extends NSObject {

	static alloc(): STPFPXBank; // inherited from NSObject

	static bankCodeFrom(brand: STPFPXBankBrand, isBusiness: boolean): string;

	static brandFrom(identifier: string): STPFPXBankBrand;

	static identifierFrom(brand: STPFPXBankBrand): string;

	static new(): STPFPXBank; // inherited from NSObject

	static stringFrom(brand: STPFPXBankBrand): string;
}

declare const enum STPFPXBankBrand {

	Maybank2U = 0,

	CIMB = 1,

	PublicBank = 2,

	RHB = 3,

	HongLeongBank = 4,

	Ambank = 5,

	AffinBank = 6,

	AllianceBank = 7,

	BankIslam = 8,

	BankMuamalat = 9,

	BankRakyat = 10,

	BSN = 11,

	HSBC = 12,

	KFH = 13,

	Maybank2E = 14,

	Ocbc = 15,

	StandardChartered = 16,

	UOB = 17,

	Unknown = 18
}

declare class STPFakeAddPaymentPassViewController extends UIViewController {

	static alloc(): STPFakeAddPaymentPassViewController; // inherited from NSObject

	static canAddPaymentPass(): boolean;

	static new(): STPFakeAddPaymentPassViewController; // inherited from NSObject

	delegate: PKAddPaymentPassViewControllerDelegate;

	constructor(o: { requestConfiguration: PKAddPaymentPassRequestConfiguration; delegate: PKAddPaymentPassViewControllerDelegate; });

	initWithRequestConfigurationDelegate(configuration: PKAddPaymentPassRequestConfiguration, delegate: PKAddPaymentPassViewControllerDelegate): this;
}

declare class STPFile extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPFile; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPFile;

	static new(): STPFile; // inherited from NSObject

	static stringFromPurpose(purpose: STPFilePurpose): string;

	readonly created: Date;

	readonly fileId: string;

	readonly purpose: STPFilePurpose;

	readonly size: number;

	readonly type: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare const enum STPFilePurpose {

	IdentityDocument = 0,

	DisputeEvidence = 1,

	Unknown = 2
}

interface STPFormEncodable extends NSObjectProtocol {

	additionalAPIParameters: NSDictionary<any, any>;
}
declare var STPFormEncodable: {

	prototype: STPFormEncodable;

	propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	rootObjectName(): string;
};

interface STPFormTextFieldContainer extends NSObjectProtocol {

	formCursorColor: UIColor;

	formFont: UIFont;

	formKeyboardAppearance: UIKeyboardAppearance;

	formPlaceholderColor: UIColor;

	formTextColor: UIColor;

	formTextErrorColor: UIColor;
}
declare var STPFormTextFieldContainer: {

	prototype: STPFormTextFieldContainer;
};

declare class STPFormView extends UIView {

	static alloc(): STPFormView; // inherited from NSObject

	static appearance(): STPFormView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STPFormView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STPFormView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STPFormView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STPFormView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STPFormView; // inherited from UIAppearance

	static new(): STPFormView; // inherited from NSObject
}

declare class STPImageLibrary extends NSObject {

	static affirmLogo(): UIImage;

	static afterpayLogoWithLocale(locale: NSLocale): UIImage;

	static alloc(): STPImageLibrary; // inherited from NSObject

	static amexCardImage(): UIImage;

	static applePayCardImage(): UIImage;

	static brandImageForCardBrand(brand: STPCardBrand): UIImage;

	static brandImageForFPXBankBrand(brand: STPFPXBankBrand): UIImage;

	static cvcImageForCardBrand(brand: STPCardBrand): UIImage;

	static dinersClubCardImage(): UIImage;

	static discoverCardImage(): UIImage;

	static errorImageForCardBrand(brand: STPCardBrand): UIImage;

	static fpxLogo(): UIImage;

	static jcbCardImage(): UIImage;

	static largeFpxLogo(): UIImage;

	static mastercardCardImage(): UIImage;

	static new(): STPImageLibrary; // inherited from NSObject

	static templatedBrandImageForCardBrand(brand: STPCardBrand): UIImage;

	static unionPayCardImage(): UIImage;

	static unknownCardCardImage(): UIImage;

	static visaCardImage(): UIImage;
}

declare class STPIntentAction extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPIntentAction; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPIntentAction;

	static new(): STPIntentAction; // inherited from NSObject

	readonly alipayHandleRedirect: STPIntentActionAlipayHandleRedirect;

	readonly authorizeWithURL: STPIntentActionRedirectToURL;

	readonly boletoDisplayDetails: STPIntentActionBoletoDisplayDetails;

	readonly oxxoDisplayDetails: STPIntentActionOXXODisplayDetails;

	readonly redirectToURL: STPIntentActionRedirectToURL;

	readonly type: STPIntentActionType;

	readonly verifyWithMicrodeposits: STPIntentActionVerifyWithMicrodeposits;

	readonly weChatPayRedirectToApp: STPIntentActionWechatPayRedirectToApp;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPIntentActionAlipayHandleRedirect extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPIntentActionAlipayHandleRedirect; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPIntentActionAlipayHandleRedirect;

	static new(): STPIntentActionAlipayHandleRedirect; // inherited from NSObject

	readonly nativeURL: NSURL;

	readonly returnURL: NSURL;

	readonly url: NSURL;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPIntentActionBoletoDisplayDetails extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPIntentActionBoletoDisplayDetails; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPIntentActionBoletoDisplayDetails;

	static new(): STPIntentActionBoletoDisplayDetails; // inherited from NSObject

	readonly expiresAt: Date;

	readonly hostedVoucherURL: NSURL;

	readonly number: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPIntentActionOXXODisplayDetails extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPIntentActionOXXODisplayDetails; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPIntentActionOXXODisplayDetails;

	static new(): STPIntentActionOXXODisplayDetails; // inherited from NSObject

	readonly expiresAfter: Date;

	readonly hostedVoucherURL: NSURL;

	readonly number: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPIntentActionRedirectToURL extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPIntentActionRedirectToURL; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPIntentActionRedirectToURL;

	static new(): STPIntentActionRedirectToURL; // inherited from NSObject

	readonly returnURL: NSURL;

	readonly url: NSURL;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare const enum STPIntentActionType {

	Unknown = 0,

	RedirectToURL = 1,

	UseStripeSDK = 2,

	OXXODisplayDetails = 3,

	AlipayHandleRedirect = 4,

	BLIKAuthorize = 5,

	WeChatPayRedirectToApp = 6,

	BoletoDisplayDetails = 7,

	VerifyWithMicrodeposits = 8,

	UpiAwaitNotification = 9
}

declare class STPIntentActionVerifyWithMicrodeposits extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPIntentActionVerifyWithMicrodeposits; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPIntentActionVerifyWithMicrodeposits;

	static new(): STPIntentActionVerifyWithMicrodeposits; // inherited from NSObject

	readonly arrivalDate: Date;

	readonly hostedVerificationURL: NSURL;

	readonly microdepositType: STPMicrodepositType;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPIntentActionWechatPayRedirectToApp extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPIntentActionWechatPayRedirectToApp; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPIntentActionWechatPayRedirectToApp;

	static new(): STPIntentActionWechatPayRedirectToApp; // inherited from NSObject

	readonly nativeURL: NSURL;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

interface STPIssuingCardEphemeralKeyProvider extends NSObjectProtocol {

	createIssuingCardKeyWithAPIVersionCompletion(apiVersion: string, completion: (p1: NSDictionary<any, any>, p2: NSError) => void): void;
}
declare var STPIssuingCardEphemeralKeyProvider: {

	prototype: STPIssuingCardEphemeralKeyProvider;
};

declare class STPIssuingCardPin extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPIssuingCardPin; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPIssuingCardPin;

	static new(): STPIssuingCardPin; // inherited from NSObject

	readonly error: NSDictionary<any, any>;

	readonly pin: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPKlarnaLineItem extends NSObject {

	static alloc(): STPKlarnaLineItem; // inherited from NSObject

	static new(): STPKlarnaLineItem; // inherited from NSObject

	itemDescription: string;

	itemType: STPKlarnaLineItemType;

	quantity: number;

	totalAmount: number;

	constructor(o: { itemType: STPKlarnaLineItemType; itemDescription: string; quantity: number; totalAmount: number; });

	initWithItemTypeItemDescriptionQuantityTotalAmount(itemType: STPKlarnaLineItemType, itemDescription: string, quantity: number, totalAmount: number): this;
}

declare const enum STPKlarnaLineItemType {

	SKU = 0,

	Tax = 1,

	Shipping = 2
}

declare const enum STPKlarnaPaymentMethods {

	None = 0,

	PayIn4 = 1,

	Installments = 2,

	PayIn4OrInstallments = 3
}

declare class STPMandateCustomerAcceptanceParams extends NSObject implements STPFormEncodable {

	static alloc(): STPMandateCustomerAcceptanceParams; // inherited from NSObject

	static new(): STPMandateCustomerAcceptanceParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	onlineParams: STPMandateOnlineParams;

	type: STPMandateCustomerAcceptanceType;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare const enum STPMandateCustomerAcceptanceType {

	Online = 0,

	Offline = 1
}

declare class STPMandateDataParams extends NSObject implements STPFormEncodable {

	static alloc(): STPMandateDataParams; // inherited from NSObject

	static new(): STPMandateDataParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	readonly customerAcceptance: STPMandateCustomerAcceptanceParams;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { customerAcceptance: STPMandateCustomerAcceptanceParams; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithCustomerAcceptance(customerAcceptance: STPMandateCustomerAcceptanceParams): this;

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

declare class STPMandateOnlineParams extends NSObject implements STPFormEncodable {

	static alloc(): STPMandateOnlineParams; // inherited from NSObject

	static new(): STPMandateOnlineParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	readonly ipAddress: string;

	readonly userAgent: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { IPAddress: string; userAgent: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithIPAddressUserAgent(ipAddress: string, userAgent: string): this;

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

declare const enum STPMicrodepositType {

	Unknown = 0,

	Amounts = 1,

	DescriptorCode = 2
}

declare class STPMultiFormTextField extends UIView implements STPFormTextFieldContainer, UITextFieldDelegate {

	static alloc(): STPMultiFormTextField; // inherited from NSObject

	static appearance(): STPMultiFormTextField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STPMultiFormTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STPMultiFormTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STPMultiFormTextField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STPMultiFormTextField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STPMultiFormTextField; // inherited from UIAppearance

	static new(): STPMultiFormTextField; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	formCursorColor: UIColor; // inherited from STPFormTextFieldContainer

	formFont: UIFont; // inherited from STPFormTextFieldContainer

	formKeyboardAppearance: UIKeyboardAppearance; // inherited from STPFormTextFieldContainer

	formPlaceholderColor: UIColor; // inherited from STPFormTextFieldContainer

	formTextColor: UIColor; // inherited from STPFormTextFieldContainer

	formTextErrorColor: UIColor; // inherited from STPFormTextFieldContainer

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	focusNextForm(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	textFieldDidBeginEditing(textField: UITextField): void;

	textFieldDidChangeSelection(textField: UITextField): void;

	textFieldDidEndEditing(textField: UITextField): void;

	textFieldDidEndEditingReason(textField: UITextField, reason: UITextFieldDidEndEditingReason): void;

	textFieldEditMenuForCharactersInRangeSuggestedActions(textField: UITextField, range: NSRange, suggestedActions: NSArray<UIMenuElement> | UIMenuElement[]): UIMenu;

	textFieldShouldBeginEditing(textField: UITextField): boolean;

	textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, string: string): boolean;

	textFieldShouldClear(textField: UITextField): boolean;

	textFieldShouldEndEditing(textField: UITextField): boolean;

	textFieldShouldReturn(textField: UITextField): boolean;

	textFieldWillDismissEditMenuWithAnimator(textField: UITextField, animator: UIEditMenuInteractionAnimating): void;

	textFieldWillPresentEditMenuWithAnimator(textField: UITextField, animator: UIEditMenuInteractionAnimating): void;
}

declare class STPPaymentActivityIndicatorView extends UIView {

	static alloc(): STPPaymentActivityIndicatorView; // inherited from NSObject

	static appearance(): STPPaymentActivityIndicatorView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STPPaymentActivityIndicatorView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STPPaymentActivityIndicatorView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STPPaymentActivityIndicatorView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STPPaymentActivityIndicatorView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STPPaymentActivityIndicatorView; // inherited from UIAppearance

	static new(): STPPaymentActivityIndicatorView; // inherited from NSObject

	animating: boolean;

	hidesWhenStopped: boolean;

	setAnimatingAnimated(animating: boolean, animated: boolean): void;
}

declare class STPPaymentCardTextField extends UIControl implements UIKeyInput {

	static alloc(): STPPaymentCardTextField; // inherited from NSObject

	static appearance(): STPPaymentCardTextField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STPPaymentCardTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STPPaymentCardTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STPPaymentCardTextField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STPPaymentCardTextField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STPPaymentCardTextField; // inherited from UIAppearance

	static brandImageForCardBrand(cardBrand: STPCardBrand): UIImage;

	static cvcImageForCardBrand(cardBrand: STPCardBrand): UIImage;

	static errorImageForCardBrand(cardBrand: STPCardBrand): UIImage;

	static keyPathsForValuesAffectingIsValid(): NSSet<string>;

	static new(): STPPaymentCardTextField; // inherited from NSObject

	borderColor: UIColor;

	borderWidth: number;

	readonly brandImage: UIImage;

	readonly cardNumber: string;

	cardParams: STPPaymentMethodCardParams;

	cornerRadius: number;

	countryCode: string;

	cursorColor: UIColor;

	readonly cvc: string;

	cvcPlaceholder: string;

	delegate: STPPaymentCardTextFieldDelegate;

	readonly expirationMonth: number;

	expirationPlaceholder: string;

	readonly expirationYear: number;

	font: UIFont;

	readonly formattedExpirationMonth: string;

	readonly formattedExpirationYear: string;

	inputAccessoryView: UIView;

	inputView: UIView;

	readonly isValid: boolean;

	numberPlaceholder: string;

	placeholderColor: UIColor;

	postalCode: string;

	postalCodeEntryEnabled: boolean;

	postalCodePlaceholder: string;

	textColor: UIColor;

	textErrorColor: UIColor;

	autocapitalizationType: UITextAutocapitalizationType; // inherited from UITextInputTraits

	autocorrectionType: UITextAutocorrectionType; // inherited from UITextInputTraits

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	enablesReturnKeyAutomatically: boolean; // inherited from UITextInputTraits

	readonly hasText: boolean; // inherited from UIKeyInput

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	keyboardAppearance: UIKeyboardAppearance; // inherited from UITextInputTraits

	keyboardType: UIKeyboardType; // inherited from UITextInputTraits

	passwordRules: UITextInputPasswordRules; // inherited from UITextInputTraits

	returnKeyType: UIReturnKeyType; // inherited from UITextInputTraits

	secureTextEntry: boolean; // inherited from UITextInputTraits

	smartDashesType: UITextSmartDashesType; // inherited from UITextInputTraits

	smartInsertDeleteType: UITextSmartInsertDeleteType; // inherited from UITextInputTraits

	smartQuotesType: UITextSmartQuotesType; // inherited from UITextInputTraits

	spellCheckingType: UITextSpellCheckingType; // inherited from UITextInputTraits

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	textContentType: string; // inherited from UITextInputTraits

	readonly  // inherited from NSObjectProtocol

	brandImageRectForBounds(bounds: CGRect): CGRect;

	class(): typeof NSObject;

	clear(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deleteBackward(): void;

	fieldsRectForBounds(bounds: CGRect): CGRect;

	insertText(text: string): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	textFieldDidBeginEditing(textField: UITextField): void;

	textFieldDidEndEditing(textField: UITextField): void;

	textFieldShouldBeginEditing(textField: UITextField): boolean;

	textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, string: string): boolean;

	textFieldShouldEndEditing(textField: UITextField): boolean;

	textFieldShouldReturn(textField: UITextField): boolean;
}

interface STPPaymentCardTextFieldDelegate extends NSObjectProtocol {

	paymentCardTextFieldDidBeginEditing?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidBeginEditingCVC?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidBeginEditingExpiration?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidBeginEditingNumber?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidBeginEditingPostalCode?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidChange?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidEndEditing?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidEndEditingCVC?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidEndEditingExpiration?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidEndEditingNumber?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidEndEditingPostalCode?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldWillEndEditingForReturn?(textField: STPPaymentCardTextField): void;
}
declare var STPPaymentCardTextFieldDelegate: {

	prototype: STPPaymentCardTextFieldDelegate;
};

declare class STPPaymentConfiguration extends NSObject implements NSCopying {

	static alloc(): STPPaymentConfiguration; // inherited from NSObject

	static new(): STPPaymentConfiguration; // inherited from NSObject

	static setSharedConfiguration(value: STPPaymentConfiguration): void;

	additionalPaymentOptions: number;

	appleMerchantIdentifier: string;

	applePayEnabled: boolean;

	availableCountries: NSSet<string>;

	canDeletePaymentOptions: boolean;

	cardScanningEnabled: boolean;

	companyName: string;

	fpxEnabled: boolean;

	publishableKey: string;

	requiredBillingAddressFields: STPBillingAddressFields;

	requiredShippingAddressFields: NSSet<STPContactField>;

	shippingType: STPShippingType;

	stripeAccount: string;

	verifyPrefilledShippingAddress: boolean;

	static sharedConfiguration: STPPaymentConfiguration;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class STPPaymentContext extends NSObject implements STPAuthenticationContext, STPPaymentOptionsViewControllerDelegate, STPShippingAddressViewControllerDelegate {

	static alloc(): STPPaymentContext; // inherited from NSObject

	static new(): STPPaymentContext; // inherited from NSObject

	addCardViewControllerFooterView: UIView;

	readonly apiAdapter: STPBackendAPIAdapter;

	apiClient: STPAPIClient;

	readonly configuration: STPPaymentConfiguration;

	defaultPaymentMethod: string;

	delegate: STPPaymentContextDelegate;

	hostViewController: UIViewController;

	largeTitleDisplayMode: UINavigationItemLargeTitleDisplayMode;

	readonly loading: boolean;

	modalPresentationStyle: UIModalPresentationStyle;

	paymentAmount: number;

	paymentCountry: string;

	paymentCurrency: string;

	readonly paymentOptions: NSArray<STPPaymentOption>;

	paymentOptionsViewControllerFooterView: UIView;

	paymentSummaryItems: NSArray<PKPaymentSummaryItem>;

	prefilledInformation: STPUserInformation;

	readonly selectedPaymentOption: STPPaymentOption;

	readonly selectedShippingMethod: PKShippingMethod;

	readonly shippingAddress: STPAddress;

	readonly shippingMethods: NSArray<PKShippingMethod>;

	readonly theme: STPTheme;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { apiAdapter: STPBackendAPIAdapter; });

	constructor(o: { apiAdapter: STPBackendAPIAdapter; configuration: STPPaymentConfiguration; theme: STPTheme; });

	constructor(o: { customerContext: STPCustomerContext; });

	constructor(o: { customerContext: STPCustomerContext; configuration: STPPaymentConfiguration; theme: STPTheme; });

	authenticationContextWillDismissViewController(viewController: UIViewController): void;

	authenticationPresentingViewController(): UIViewController;

	class(): typeof NSObject;

	configureSafariViewController(viewController: SFSafariViewController): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithApiAdapter(apiAdapter: STPBackendAPIAdapter): this;

	initWithApiAdapterConfigurationTheme(apiAdapter: STPBackendAPIAdapter, configuration: STPPaymentConfiguration, theme: STPTheme): this;

	initWithCustomerContext(customerContext: STPCustomerContext): this;

	initWithCustomerContextConfigurationTheme(customerContext: STPCustomerContext, configuration: STPPaymentConfiguration, theme: STPTheme): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	paymentOptionsViewControllerDidCancel(paymentOptionsViewController: STPPaymentOptionsViewController): void;

	paymentOptionsViewControllerDidFailToLoadWithError(paymentOptionsViewController: STPPaymentOptionsViewController, error: NSError): void;

	paymentOptionsViewControllerDidFinish(paymentOptionsViewController: STPPaymentOptionsViewController): void;

	paymentOptionsViewControllerDidSelectPaymentOption(paymentOptionsViewController: STPPaymentOptionsViewController, paymentOption: STPPaymentOption): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	prepareAuthenticationContextForPresentation(completion: () => void): void;

	presentPaymentOptionsViewController(): void;

	presentShippingViewController(): void;

	pushPaymentOptionsViewController(): void;

	pushShippingViewController(): void;

	requestPayment(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	retryLoading(): void;

	self(): this;

	shippingAddressViewControllerDidCancel(addressViewController: STPShippingAddressViewController): void;

	shippingAddressViewControllerDidEnterAddressCompletion(addressViewController: STPShippingAddressViewController, address: STPAddress, completion: (p1: STPShippingStatus, p2: NSError, p3: NSArray<PKShippingMethod>, p4: PKShippingMethod) => void): void;

	shippingAddressViewControllerDidFinishWithAddressShippingMethod(addressViewController: STPShippingAddressViewController, address: STPAddress, method: PKShippingMethod): void;
}

interface STPPaymentContextDelegate extends NSObjectProtocol {

	paymentContextDidChange(paymentContext: STPPaymentContext): void;

	paymentContextDidCreatePaymentResultCompletion(paymentContext: STPPaymentContext, paymentResult: STPPaymentResult, completion: (p1: STPPaymentStatus, p2: NSError) => void): void;

	paymentContextDidFailToLoadWithError(paymentContext: STPPaymentContext, error: NSError): void;

	paymentContextDidFinishWithError(paymentContext: STPPaymentContext, status: STPPaymentStatus, error: NSError): void;

	paymentContextDidUpdateShippingAddressCompletion?(paymentContext: STPPaymentContext, address: STPAddress, completion: (p1: STPShippingStatus, p2: NSError, p3: NSArray<PKShippingMethod>, p4: PKShippingMethod) => void): void;
}
declare var STPPaymentContextDelegate: {

	prototype: STPPaymentContextDelegate;
};

declare class STPPaymentHandler extends NSObject implements SFSafariViewControllerDelegate {

	static alloc(): STPPaymentHandler; // inherited from NSObject

	static new(): STPPaymentHandler; // inherited from NSObject

	static shared(): STPPaymentHandler;

	apiClient: STPAPIClient;

	simulateAppToAppRedirect: boolean;

	threeDSCustomizationSettings: STPThreeDSCustomizationSettings;

	static readonly errorDomain: string;

	static readonly sharedHandler: STPPaymentHandler;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	confirmPaymentWithAuthenticationContextCompletion(paymentParams: STPPaymentIntentParams, authenticationContext: STPAuthenticationContext, completion: (p1: STPPaymentHandlerActionStatus, p2: STPPaymentIntent, p3: NSError) => void): void;

	confirmSetupIntentWithAuthenticationContextCompletion(setupIntentConfirmParams: STPSetupIntentConfirmParams, authenticationContext: STPAuthenticationContext, completion: (p1: STPPaymentHandlerActionStatus, p2: STPSetupIntent, p3: NSError) => void): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	handleNextActionForPaymentWithAuthenticationContextReturnURLCompletion(paymentIntentClientSecret: string, authenticationContext: STPAuthenticationContext, returnURL: string, completion: (p1: STPPaymentHandlerActionStatus, p2: STPPaymentIntent, p3: NSError) => void): void;

	handleNextActionForSetupIntentWithAuthenticationContextReturnURLCompletion(setupIntentClientSecret: string, authenticationContext: STPAuthenticationContext, returnURL: string, completion: (p1: STPPaymentHandlerActionStatus, p2: STPSetupIntent, p3: NSError) => void): void;

	handleURLCallback(url: NSURL): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	safariViewControllerActivityItemsForURLTitle(controller: SFSafariViewController, URL: NSURL, title: string): NSArray<UIActivity>;

	safariViewControllerDidCompleteInitialLoad(controller: SFSafariViewController, didLoadSuccessfully: boolean): void;

	safariViewControllerDidFinish(controller: SFSafariViewController): void;

	safariViewControllerExcludedActivityTypesForURLTitle(controller: SFSafariViewController, URL: NSURL, title: string): NSArray<string>;

	safariViewControllerInitialLoadDidRedirectToURL(controller: SFSafariViewController, URL: NSURL): void;

	safariViewControllerWillOpenInBrowser(controller: SFSafariViewController): void;

	self(): this;
}

declare const enum STPPaymentHandlerActionStatus {

	Succeeded = 0,

	Canceled = 1,

	Failed = 2
}

declare const enum STPPaymentHandlerErrorCode {

	UnsupportedAuthenticationErrorCode = 0,

	RequiredAppNotAvailableErrorCode = 1,

	RequiresPaymentMethodErrorCode = 2,

	IntentStatusErrorCode = 3,

	TimedOutErrorCode = 4,

	Stripe3DS2ErrorCode = 5,

	NotAuthenticatedErrorCode = 6,

	NoConcurrentActionsErrorCode = 7,

	RequiresAuthenticationContextErrorCode = 8,

	PaymentErrorCode = 9,

	InvalidClientSecret = 10
}

declare class STPPaymentIntent extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentIntent; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentIntent;

	static new(): STPPaymentIntent; // inherited from NSObject

	readonly amount: number;

	readonly canceledAt: Date;

	readonly captureMethod: STPPaymentIntentCaptureMethod;

	readonly clientSecret: string;

	readonly confirmationMethod: STPPaymentIntentConfirmationMethod;

	readonly created: Date;

	readonly currency: string;

	readonly lastPaymentError: STPPaymentIntentLastPaymentError;

	readonly livemode: boolean;

	readonly nextAction: STPIntentAction;

	readonly nextSourceAction: STPIntentAction;

	readonly paymentMethod: STPPaymentMethod;

	readonly paymentMethodId: string;

	readonly paymentMethodTypes: NSArray<number>;

	readonly receiptEmail: string;

	readonly setupFutureUsage: STPPaymentIntentSetupFutureUsage;

	readonly shipping: STPPaymentIntentShippingDetails;

	readonly sourceId: string;

	readonly status: STPPaymentIntentStatus;

	readonly stripeDescription: string;

	readonly stripeId: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentIntentAction extends STPIntentAction {

	static alloc(): STPPaymentIntentAction; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentIntentAction; // inherited from STPAPIResponseDecodable

	static new(): STPPaymentIntentAction; // inherited from NSObject
}

declare const enum STPPaymentIntentActionType {

	Unknown = 0,

	RedirectToURL = 1
}

declare const enum STPPaymentIntentCaptureMethod {

	Unknown = 0,

	Automatic = 1,

	Manual = 2
}

declare const enum STPPaymentIntentConfirmationMethod {

	Unknown = 0,

	Manual = 1,

	Automatic = 2
}

declare class STPPaymentIntentLastPaymentError extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentIntentLastPaymentError; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentIntentLastPaymentError;

	static new(): STPPaymentIntentLastPaymentError; // inherited from NSObject

	readonly code: string;

	readonly declineCode: string;

	readonly docURL: string;

	readonly message: string;

	readonly param: string;

	readonly paymentMethod: STPPaymentMethod;

	readonly type: STPPaymentIntentLastPaymentErrorType;

	static readonly ErrorCodeAuthenticationFailure: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare const enum STPPaymentIntentLastPaymentErrorType {

	Unknown = 0,

	APIConnection = 1,

	API = 2,

	Authentication = 3,

	Card = 4,

	Idempotency = 5,

	InvalidRequest = 6,

	RateLimit = 7
}

declare class STPPaymentIntentParams extends NSObject implements NSCopying, STPFormEncodable {

	static alloc(): STPPaymentIntentParams; // inherited from NSObject

	static new(): STPPaymentIntentParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	clientSecret: string;

	mandateData: STPMandateDataParams;

	paymentMethodId: string;

	paymentMethodOptions: STPConfirmPaymentMethodOptions;

	paymentMethodParams: STPPaymentMethodParams;

	receiptEmail: string;

	returnURL: string;

	returnUrl: string;

	savePaymentMethod: number;

	saveSourceToCustomer: number;

	setupFutureUsage: number;

	shipping: STPPaymentIntentShippingDetailsParams;

	sourceId: string;

	sourceParams: STPSourceParams;

	readonly stripeId: string;

	useStripeSDK: number;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { clientSecret: string; });

	constructor(o: { clientSecret: string; paymentMethodType: STPPaymentMethodType; });

	class(): typeof NSObject;

	configureWith(paymentResult: STPPaymentResult): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithClientSecret(clientSecret: string): this;

	initWithClientSecretPaymentMethodType(clientSecret: string, paymentMethodType: STPPaymentMethodType): this;

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

declare const enum STPPaymentIntentSetupFutureUsage {

	Unknown = 0,

	None = 1,

	OnSession = 2,

	OffSession = 3
}

declare class STPPaymentIntentShippingDetails extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentIntentShippingDetails; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentIntentShippingDetails;

	static new(): STPPaymentIntentShippingDetails; // inherited from NSObject

	readonly address: STPPaymentIntentShippingDetailsAddress;

	readonly carrier: string;

	readonly name: string;

	readonly phone: string;

	readonly trackingNumber: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentIntentShippingDetailsAddress extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentIntentShippingDetailsAddress; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentIntentShippingDetailsAddress;

	static new(): STPPaymentIntentShippingDetailsAddress; // inherited from NSObject

	readonly city: string;

	readonly country: string;

	readonly line1: string;

	readonly line2: string;

	readonly postalCode: string;

	readonly state: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentIntentShippingDetailsAddressParams extends NSObject implements NSCopying, STPFormEncodable {

	static alloc(): STPPaymentIntentShippingDetailsAddressParams; // inherited from NSObject

	static new(): STPPaymentIntentShippingDetailsAddressParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	city: string;

	country: string;

	line1: string;

	line2: string;

	postalCode: string;

	state: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { line1: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithLine1(line1: string): this;

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

declare class STPPaymentIntentShippingDetailsParams extends NSObject implements NSCopying, STPFormEncodable {

	static alloc(): STPPaymentIntentShippingDetailsParams; // inherited from NSObject

	static new(): STPPaymentIntentShippingDetailsParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	address: STPPaymentIntentShippingDetailsAddressParams;

	carrier: string;

	name: string;

	phone: string;

	trackingNumber: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { address: STPPaymentIntentShippingDetailsAddressParams; name: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithAddressName(address: STPPaymentIntentShippingDetailsAddressParams, name: string): this;

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

declare const enum STPPaymentIntentSourceActionType {

	Unknown = 0,

	AuthorizeWithURL = 1
}

declare const enum STPPaymentIntentStatus {

	Unknown = 0,

	RequiresPaymentMethod = 1,

	RequiresSource = 2,

	RequiresConfirmation = 3,

	RequiresAction = 4,

	RequiresSourceAction = 5,

	Processing = 6,

	Succeeded = 7,

	RequiresCapture = 8,

	Canceled = 9
}

declare class STPPaymentMethod extends NSObject implements STPAPIResponseDecodable, STPPaymentOption {

	static alloc(): STPPaymentMethod; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethod;

	static new(): STPPaymentMethod; // inherited from NSObject

	readonly affirm: STPPaymentMethodAffirm;

	readonly afterpayClearpay: STPPaymentMethodAfterpayClearpay;

	readonly alipay: STPPaymentMethodAlipay;

	readonly auBECSDebit: STPPaymentMethodAUBECSDebit;

	readonly bacsDebit: STPPaymentMethodBacsDebit;

	readonly bancontact: STPPaymentMethodBancontact;

	readonly billingDetails: STPPaymentMethodBillingDetails;

	readonly blik: STPPaymentMethodBLIK;

	readonly boleto: STPPaymentMethodBoleto;

	readonly card: STPPaymentMethodCard;

	readonly cardPresent: STPPaymentMethodCardPresent;

	readonly created: Date;

	readonly customerId: string;

	readonly eps: STPPaymentMethodEPS;

	readonly fpx: STPPaymentMethodFPX;

	readonly giropay: STPPaymentMethodGiropay;

	readonly grabPay: STPPaymentMethodGrabPay;

	readonly iDEAL: STPPaymentMethodiDEAL;

	readonly klarna: STPPaymentMethodKlarna;

	readonly link: STPPaymentMethodLink;

	readonly liveMode: boolean;

	readonly metadata: NSDictionary<string, string>;

	readonly netBanking: STPPaymentMethodNetBanking;

	readonly oxxo: STPPaymentMethodOXXO;

	readonly payPal: STPPaymentMethodPayPal;

	readonly przelewy24: STPPaymentMethodPrzelewy24;

	readonly sepaDebit: STPPaymentMethodSEPADebit;

	readonly sofort: STPPaymentMethodSofort;

	readonly stripeId: string;

	readonly type: STPPaymentMethodType;

	readonly upi: STPPaymentMethodUPI;

	readonly usBankAccount: STPPaymentMethodUSBankAccount;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly image: UIImage; // inherited from STPPaymentOption

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly isReusable: boolean; // inherited from STPPaymentOption

	readonly label: string; // inherited from STPPaymentOption

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly templateImage: UIImage; // inherited from STPPaymentOption

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodAUBECSDebit extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodAUBECSDebit; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodAUBECSDebit;

	static new(): STPPaymentMethodAUBECSDebit; // inherited from NSObject

	readonly bsbNumber: string;

	readonly fingerprint: string;

	readonly last4: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodAUBECSDebitParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodAUBECSDebitParams; // inherited from NSObject

	static new(): STPPaymentMethodAUBECSDebitParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	accountNumber: string;

	bsbNumber: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodAddress extends NSObject implements STPAPIResponseDecodable, STPFormEncodable {

	static alloc(): STPPaymentMethodAddress; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodAddress;

	static new(): STPPaymentMethodAddress; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	city: string;

	country: string;

	line1: string;

	line2: string;

	postalCode: string;

	state: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { address: STPAddress; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithAddress(address: STPAddress): this;

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

declare class STPPaymentMethodAffirm extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodAffirm; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodAffirm;

	static new(): STPPaymentMethodAffirm; // inherited from NSObject

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodAffirmParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodAffirmParams; // inherited from NSObject

	static new(): STPPaymentMethodAffirmParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodAfterpayClearpay extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodAfterpayClearpay; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodAfterpayClearpay;

	static new(): STPPaymentMethodAfterpayClearpay; // inherited from NSObject

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodAfterpayClearpayParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodAfterpayClearpayParams; // inherited from NSObject

	static new(): STPPaymentMethodAfterpayClearpayParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodAlipay extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodAlipay; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodAlipay;

	static new(): STPPaymentMethodAlipay; // inherited from NSObject

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodAlipayParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodAlipayParams; // inherited from NSObject

	static new(): STPPaymentMethodAlipayParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodBLIK extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodBLIK; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodBLIK;

	static new(): STPPaymentMethodBLIK; // inherited from NSObject

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodBLIKParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodBLIKParams; // inherited from NSObject

	static new(): STPPaymentMethodBLIKParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodBacsDebit extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodBacsDebit; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodBacsDebit;

	static new(): STPPaymentMethodBacsDebit; // inherited from NSObject

	readonly fingerprint: string;

	readonly last4: string;

	readonly sortCode: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodBacsDebitParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodBacsDebitParams; // inherited from NSObject

	static new(): STPPaymentMethodBacsDebitParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	accountNumber: string;

	sortCode: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodBancontact extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodBancontact; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodBancontact;

	static new(): STPPaymentMethodBancontact; // inherited from NSObject

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodBancontactParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodBancontactParams; // inherited from NSObject

	static new(): STPPaymentMethodBancontactParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodBillingDetails extends NSObject implements STPAPIResponseDecodable, STPFormEncodable {

	static alloc(): STPPaymentMethodBillingDetails; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodBillingDetails;

	static new(): STPPaymentMethodBillingDetails; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	address: STPPaymentMethodAddress;

	email: string;

	name: string;

	phone: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodBoleto extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodBoleto; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodBoleto;

	static new(): STPPaymentMethodBoleto; // inherited from NSObject

	readonly taxID: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodBoletoParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodBoletoParams; // inherited from NSObject

	static new(): STPPaymentMethodBoletoParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	taxID: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodCard extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodCard; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodCard;

	static new(): STPPaymentMethodCard; // inherited from NSObject

	static stringFromBrand(brand: STPCardBrand): string;

	readonly brand: STPCardBrand;

	readonly checks: STPPaymentMethodCardChecks;

	readonly country: string;

	readonly expMonth: number;

	readonly expYear: number;

	readonly fingerprint: string;

	readonly funding: string;

	readonly last4: string;

	readonly networks: STPPaymentMethodCardNetworks;

	readonly threeDSecureUsage: STPPaymentMethodThreeDSecureUsage;

	readonly wallet: STPPaymentMethodCardWallet;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare const enum STPPaymentMethodCardCheckResult {

	Pass = 0,

	Failed = 1,

	Unavailable = 2,

	Unchecked = 3,

	Unknown = 4
}

declare class STPPaymentMethodCardChecks extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodCardChecks; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodCardChecks;

	static new(): STPPaymentMethodCardChecks; // inherited from NSObject

	readonly addressLine1Check: STPPaymentMethodCardCheckResult;

	readonly addressPostalCodeCheck: STPPaymentMethodCardCheckResult;

	readonly cvcCheck: STPPaymentMethodCardCheckResult;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodCardNetworks extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodCardNetworks; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodCardNetworks;

	static new(): STPPaymentMethodCardNetworks; // inherited from NSObject

	readonly available: NSArray<string>;

	readonly preferred: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodCardParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodCardParams; // inherited from NSObject

	static new(): STPPaymentMethodCardParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	cvc: string;

	expMonth: number;

	expYear: number;

	readonly last4: string;

	number: string;

	token: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { cardSourceParams: STPCardParams; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithCardSourceParams(cardSourceParams: STPCardParams): this;

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

declare class STPPaymentMethodCardPresent extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodCardPresent; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodCardPresent;

	static new(): STPPaymentMethodCardPresent; // inherited from NSObject

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodCardWallet extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodCardWallet; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodCardWallet;

	static new(): STPPaymentMethodCardWallet; // inherited from NSObject

	readonly masterpass: STPPaymentMethodCardWalletMasterpass;

	readonly type: STPPaymentMethodCardWalletType;

	readonly visaCheckout: STPPaymentMethodCardWalletVisaCheckout;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodCardWalletMasterpass extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodCardWalletMasterpass; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodCardWalletMasterpass;

	static new(): STPPaymentMethodCardWalletMasterpass; // inherited from NSObject

	readonly billingAddress: STPPaymentMethodAddress;

	readonly email: string;

	readonly name: string;

	readonly shippingAddress: STPPaymentMethodAddress;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare const enum STPPaymentMethodCardWalletType {

	AmexExpressCheckout = 0,

	ApplePay = 1,

	GooglePay = 2,

	Masterpass = 3,

	SamsungPay = 4,

	VisaCheckout = 5,

	Unknown = 6
}

declare class STPPaymentMethodCardWalletVisaCheckout extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodCardWalletVisaCheckout; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodCardWalletVisaCheckout;

	static new(): STPPaymentMethodCardWalletVisaCheckout; // inherited from NSObject

	readonly billingAddress: STPPaymentMethodAddress;

	readonly email: string;

	readonly name: string;

	readonly shippingAddress: STPPaymentMethodAddress;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodEPS extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodEPS; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodEPS;

	static new(): STPPaymentMethodEPS; // inherited from NSObject

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodEPSParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodEPSParams; // inherited from NSObject

	static new(): STPPaymentMethodEPSParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodFPX extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodFPX; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodFPX;

	static new(): STPPaymentMethodFPX; // inherited from NSObject

	readonly bankIdentifierCode: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodFPXParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodFPXParams; // inherited from NSObject

	static new(): STPPaymentMethodFPXParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	bank: STPFPXBankBrand;

	rawBankString: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodGiropay extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodGiropay; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodGiropay;

	static new(): STPPaymentMethodGiropay; // inherited from NSObject

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodGiropayParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodGiropayParams; // inherited from NSObject

	static new(): STPPaymentMethodGiropayParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodGrabPay extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodGrabPay; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodGrabPay;

	static new(): STPPaymentMethodGrabPay; // inherited from NSObject

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodGrabPayParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodGrabPayParams; // inherited from NSObject

	static new(): STPPaymentMethodGrabPayParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodKlarna extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodKlarna; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodKlarna;

	static new(): STPPaymentMethodKlarna; // inherited from NSObject

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodKlarnaParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodKlarnaParams; // inherited from NSObject

	static new(): STPPaymentMethodKlarnaParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodLink extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodLink; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodLink;

	static new(): STPPaymentMethodLink; // inherited from NSObject

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodLinkParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodLinkParams; // inherited from NSObject

	static new(): STPPaymentMethodLinkParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodNetBanking extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodNetBanking; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodNetBanking;

	static new(): STPPaymentMethodNetBanking; // inherited from NSObject

	readonly bank: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodNetBankingParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodNetBankingParams; // inherited from NSObject

	static new(): STPPaymentMethodNetBankingParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	bank: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodOXXO extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodOXXO; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodOXXO;

	static new(): STPPaymentMethodOXXO; // inherited from NSObject

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodOXXOParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodOXXOParams; // inherited from NSObject

	static new(): STPPaymentMethodOXXOParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodParams extends NSObject implements STPFormEncodable, STPPaymentOption {

	static alloc(): STPPaymentMethodParams; // inherited from NSObject

	static new(): STPPaymentMethodParams; // inherited from NSObject

	static paramsWithAUBECSDebitBillingDetailsMetadata(auBECSDebit: STPPaymentMethodAUBECSDebitParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): STPPaymentMethodParams;

	static paramsWithAffirmMetadata(affirm: STPPaymentMethodAffirmParams, metadata: NSDictionary<string, string>): STPPaymentMethodParams;

	static paramsWithAfterpayClearpayBillingDetailsMetadata(afterpayClearpay: STPPaymentMethodAfterpayClearpayParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): STPPaymentMethodParams;

	static paramsWithAlipayBillingDetailsMetadata(alipay: STPPaymentMethodAlipayParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): STPPaymentMethodParams;

	static paramsWithBLIKBillingDetailsMetadata(blik: STPPaymentMethodBLIKParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): STPPaymentMethodParams;

	static paramsWithBacsDebitBillingDetailsMetadata(bacsDebit: STPPaymentMethodBacsDebitParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): STPPaymentMethodParams;

	static paramsWithBancontactBillingDetailsMetadata(bancontact: STPPaymentMethodBancontactParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): STPPaymentMethodParams;

	static paramsWithCardBillingDetailsMetadata(card: STPPaymentMethodCardParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): STPPaymentMethodParams;

	static paramsWithEPSBillingDetailsMetadata(eps: STPPaymentMethodEPSParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): STPPaymentMethodParams;

	static paramsWithFPXBillingDetailsMetadata(fpx: STPPaymentMethodFPXParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): STPPaymentMethodParams;

	static paramsWithGiropayBillingDetailsMetadata(giropay: STPPaymentMethodGiropayParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): STPPaymentMethodParams;

	static paramsWithGrabPayBillingDetailsMetadata(grabPay: STPPaymentMethodGrabPayParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): STPPaymentMethodParams;

	static paramsWithKlarnaBillingDetailsMetadata(klarna: STPPaymentMethodKlarnaParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): STPPaymentMethodParams;

	static paramsWithNetBankingBillingDetailsMetadata(netBanking: STPPaymentMethodNetBankingParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): STPPaymentMethodParams;

	static paramsWithOXXOBillingDetailsMetadata(oxxo: STPPaymentMethodOXXOParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): STPPaymentMethodParams;

	static paramsWithPayPalBillingDetailsMetadata(payPal: STPPaymentMethodPayPalParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): STPPaymentMethodParams;

	static paramsWithPrzelewy24BillingDetailsMetadata(przelewy24: STPPaymentMethodPrzelewy24Params, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): STPPaymentMethodParams;

	static paramsWithSEPADebitBillingDetailsMetadata(sepaDebit: STPPaymentMethodSEPADebitParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): STPPaymentMethodParams;

	static paramsWithSofortBillingDetailsMetadata(sofort: STPPaymentMethodSofortParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): STPPaymentMethodParams;

	static paramsWithUPIBillingDetailsMetadata(upi: STPPaymentMethodUPIParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): STPPaymentMethodParams;

	static paramsWithiDEALBillingDetailsMetadata(iDEAL: STPPaymentMethodiDEALParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): STPPaymentMethodParams;

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	affirm: STPPaymentMethodAffirmParams;

	afterpayClearpay: STPPaymentMethodAfterpayClearpayParams;

	alipay: STPPaymentMethodAlipayParams;

	auBECSDebit: STPPaymentMethodAUBECSDebitParams;

	bacsDebit: STPPaymentMethodBacsDebitParams;

	bancontact: STPPaymentMethodBancontactParams;

	billingDetails: STPPaymentMethodBillingDetails;

	blik: STPPaymentMethodBLIKParams;

	boleto: STPPaymentMethodBoletoParams;

	card: STPPaymentMethodCardParams;

	eps: STPPaymentMethodEPSParams;

	fpx: STPPaymentMethodFPXParams;

	giropay: STPPaymentMethodGiropayParams;

	grabPay: STPPaymentMethodGrabPayParams;

	iDEAL: STPPaymentMethodiDEALParams;

	klarna: STPPaymentMethodKlarnaParams;

	link: STPPaymentMethodLinkParams;

	metadata: NSDictionary<string, string>;

	netBanking: STPPaymentMethodNetBankingParams;

	oxxo: STPPaymentMethodOXXOParams;

	payPal: STPPaymentMethodPayPalParams;

	przelewy24: STPPaymentMethodPrzelewy24Params;

	rawTypeString: string;

	sepaDebit: STPPaymentMethodSEPADebitParams;

	sofort: STPPaymentMethodSofortParams;

	type: STPPaymentMethodType;

	upi: STPPaymentMethodUPIParams;

	usBankAccount: STPPaymentMethodUSBankAccountParams;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly image: UIImage; // inherited from STPPaymentOption

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly isReusable: boolean; // inherited from STPPaymentOption

	readonly label: string; // inherited from STPPaymentOption

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly templateImage: UIImage; // inherited from STPPaymentOption

	readonly  // inherited from NSObjectProtocol

	constructor(o: { affirm: STPPaymentMethodAffirmParams; metadata: NSDictionary<string, string>; });

	constructor(o: { afterpayClearpay: STPPaymentMethodAfterpayClearpayParams; billingDetails: STPPaymentMethodBillingDetails; metadata: NSDictionary<string, string>; });

	constructor(o: { alipay: STPPaymentMethodAlipayParams; billingDetails: STPPaymentMethodBillingDetails; metadata: NSDictionary<string, string>; });

	constructor(o: { aubecsDebit: STPPaymentMethodAUBECSDebitParams; billingDetails: STPPaymentMethodBillingDetails; metadata: NSDictionary<string, string>; });

	constructor(o: { bacsDebit: STPPaymentMethodBacsDebitParams; billingDetails: STPPaymentMethodBillingDetails; metadata: NSDictionary<string, string>; });

	constructor(o: { bancontact: STPPaymentMethodBancontactParams; billingDetails: STPPaymentMethodBillingDetails; metadata: NSDictionary<string, string>; });

	constructor(o: { blik: STPPaymentMethodBLIKParams; billingDetails: STPPaymentMethodBillingDetails; metadata: NSDictionary<string, string>; });

	constructor(o: { boleto: STPPaymentMethodBoletoParams; billingDetails: STPPaymentMethodBillingDetails; metadata: NSDictionary<string, string>; });

	constructor(o: { card: STPPaymentMethodCardParams; billingDetails: STPPaymentMethodBillingDetails; metadata: NSDictionary<string, string>; });

	constructor(o: { eps: STPPaymentMethodEPSParams; billingDetails: STPPaymentMethodBillingDetails; metadata: NSDictionary<string, string>; });

	constructor(o: { fpx: STPPaymentMethodFPXParams; billingDetails: STPPaymentMethodBillingDetails; metadata: NSDictionary<string, string>; });

	constructor(o: { giropay: STPPaymentMethodGiropayParams; billingDetails: STPPaymentMethodBillingDetails; metadata: NSDictionary<string, string>; });

	constructor(o: { grabPay: STPPaymentMethodGrabPayParams; billingDetails: STPPaymentMethodBillingDetails; metadata: NSDictionary<string, string>; });

	constructor(o: { IDEAL: STPPaymentMethodiDEALParams; billingDetails: STPPaymentMethodBillingDetails; metadata: NSDictionary<string, string>; });

	constructor(o: { klarna: STPPaymentMethodKlarnaParams; billingDetails: STPPaymentMethodBillingDetails; metadata: NSDictionary<string, string>; });

	constructor(o: { netBanking: STPPaymentMethodNetBankingParams; billingDetails: STPPaymentMethodBillingDetails; metadata: NSDictionary<string, string>; });

	constructor(o: { oxxo: STPPaymentMethodOXXOParams; billingDetails: STPPaymentMethodBillingDetails; metadata: NSDictionary<string, string>; });

	constructor(o: { payPal: STPPaymentMethodPayPalParams; billingDetails: STPPaymentMethodBillingDetails; metadata: NSDictionary<string, string>; });

	constructor(o: { przelewy24: STPPaymentMethodPrzelewy24Params; billingDetails: STPPaymentMethodBillingDetails; metadata: NSDictionary<string, string>; });

	constructor(o: { sepaDebit: STPPaymentMethodSEPADebitParams; billingDetails: STPPaymentMethodBillingDetails; metadata: NSDictionary<string, string>; });

	constructor(o: { singleUsePaymentMethod: STPPaymentMethod; });

	constructor(o: { sofort: STPPaymentMethodSofortParams; billingDetails: STPPaymentMethodBillingDetails; metadata: NSDictionary<string, string>; });

	constructor(o: { upi: STPPaymentMethodUPIParams; billingDetails: STPPaymentMethodBillingDetails; metadata: NSDictionary<string, string>; });

	constructor(o: { usBankAccount: STPPaymentMethodUSBankAccountParams; billingDetails: STPPaymentMethodBillingDetails; metadata: NSDictionary<string, string>; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithAffirmMetadata(affirm: STPPaymentMethodAffirmParams, metadata: NSDictionary<string, string>): this;

	initWithAfterpayClearpayBillingDetailsMetadata(afterpayClearpay: STPPaymentMethodAfterpayClearpayParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): this;

	initWithAlipayBillingDetailsMetadata(alipay: STPPaymentMethodAlipayParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): this;

	initWithAubecsDebitBillingDetailsMetadata(auBECSDebit: STPPaymentMethodAUBECSDebitParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): this;

	initWithBacsDebitBillingDetailsMetadata(bacsDebit: STPPaymentMethodBacsDebitParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): this;

	initWithBancontactBillingDetailsMetadata(bancontact: STPPaymentMethodBancontactParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): this;

	initWithBlikBillingDetailsMetadata(blik: STPPaymentMethodBLIKParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): this;

	initWithBoletoBillingDetailsMetadata(boleto: STPPaymentMethodBoletoParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): this;

	initWithCardBillingDetailsMetadata(card: STPPaymentMethodCardParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): this;

	initWithEpsBillingDetailsMetadata(eps: STPPaymentMethodEPSParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): this;

	initWithFpxBillingDetailsMetadata(fpx: STPPaymentMethodFPXParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): this;

	initWithGiropayBillingDetailsMetadata(giropay: STPPaymentMethodGiropayParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): this;

	initWithGrabPayBillingDetailsMetadata(grabPay: STPPaymentMethodGrabPayParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): this;

	initWithIDEALBillingDetailsMetadata(iDEAL: STPPaymentMethodiDEALParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): this;

	initWithKlarnaBillingDetailsMetadata(klarna: STPPaymentMethodKlarnaParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): this;

	initWithNetBankingBillingDetailsMetadata(netBanking: STPPaymentMethodNetBankingParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): this;

	initWithOxxoBillingDetailsMetadata(oxxo: STPPaymentMethodOXXOParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): this;

	initWithPayPalBillingDetailsMetadata(payPal: STPPaymentMethodPayPalParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): this;

	initWithPrzelewy24BillingDetailsMetadata(przelewy24: STPPaymentMethodPrzelewy24Params, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): this;

	initWithSepaDebitBillingDetailsMetadata(sepaDebit: STPPaymentMethodSEPADebitParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): this;

	initWithSingleUsePaymentMethod(paymentMethod: STPPaymentMethod): this;

	initWithSofortBillingDetailsMetadata(sofort: STPPaymentMethodSofortParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): this;

	initWithUpiBillingDetailsMetadata(upi: STPPaymentMethodUPIParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): this;

	initWithUsBankAccountBillingDetailsMetadata(usBankAccount: STPPaymentMethodUSBankAccountParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): this;

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

declare class STPPaymentMethodPayPal extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodPayPal; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodPayPal;

	static new(): STPPaymentMethodPayPal; // inherited from NSObject

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodPayPalParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodPayPalParams; // inherited from NSObject

	static new(): STPPaymentMethodPayPalParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodPrzelewy24 extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodPrzelewy24; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodPrzelewy24;

	static new(): STPPaymentMethodPrzelewy24; // inherited from NSObject

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodPrzelewy24Params extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodPrzelewy24Params; // inherited from NSObject

	static new(): STPPaymentMethodPrzelewy24Params; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodSEPADebit extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodSEPADebit; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodSEPADebit;

	static new(): STPPaymentMethodSEPADebit; // inherited from NSObject

	readonly bankCode: string;

	readonly branchCode: string;

	readonly country: string;

	readonly fingerprint: string;

	readonly last4: string;

	readonly mandate: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodSEPADebitParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodSEPADebitParams; // inherited from NSObject

	static new(): STPPaymentMethodSEPADebitParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	iban: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodSofort extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodSofort; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodSofort;

	static new(): STPPaymentMethodSofort; // inherited from NSObject

	readonly country: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodSofortParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodSofortParams; // inherited from NSObject

	static new(): STPPaymentMethodSofortParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	country: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodThreeDSecureUsage extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodThreeDSecureUsage; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodThreeDSecureUsage;

	static new(): STPPaymentMethodThreeDSecureUsage; // inherited from NSObject

	readonly supported: boolean;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare const enum STPPaymentMethodType {

	Card = 0,

	Alipay = 1,

	GrabPay = 2,

	iDEAL = 3,

	FPX = 4,

	CardPresent = 5,

	SEPADebit = 6,

	AUBECSDebit = 7,

	BacsDebit = 8,

	Giropay = 9,

	Przelewy24 = 10,

	EPS = 11,

	Bancontact = 12,

	NetBanking = 13,

	OXXO = 14,

	Sofort = 15,

	UPI = 16,

	PayPal = 17,

	AfterpayClearpay = 18,

	BLIK = 19,

	WeChatPay = 20,

	Boleto = 21,

	Link = 22,

	Klarna = 23,

	LinkInstantDebit = 24,

	Affirm = 25,

	USBankAccount = 26,

	Unknown = 27
}

declare class STPPaymentMethodUPI extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodUPI; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodUPI;

	static new(): STPPaymentMethodUPI; // inherited from NSObject

	readonly vpa: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodUPIParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodUPIParams; // inherited from NSObject

	static new(): STPPaymentMethodUPIParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	vpa: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodUSBankAccount extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodUSBankAccount; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodUSBankAccount;

	static new(): STPPaymentMethodUSBankAccount; // inherited from NSObject

	readonly accountHolderType: STPPaymentMethodUSBankAccountHolderType;

	readonly accountType: STPPaymentMethodUSBankAccountType;

	readonly bankName: string;

	readonly fingerprint: string;

	readonly last4: string;

	readonly linkedAccount: string;

	readonly networks: STPPaymentMethodUSBankAccountNetworks;

	readonly routingNumber: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare const enum STPPaymentMethodUSBankAccountHolderType {

	Unknown = 0,

	Individual = 1,

	Company = 2
}

declare class STPPaymentMethodUSBankAccountNetworks extends NSObject {

	static alloc(): STPPaymentMethodUSBankAccountNetworks; // inherited from NSObject

	static new(): STPPaymentMethodUSBankAccountNetworks; // inherited from NSObject

	readonly preferred: string;

	readonly supported: NSArray<string>;
}

declare class STPPaymentMethodUSBankAccountParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodUSBankAccountParams; // inherited from NSObject

	static new(): STPPaymentMethodUSBankAccountParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	accountHolderType: STPPaymentMethodUSBankAccountHolderType;

	accountHolderTypeString: string;

	accountNumber: string;

	accountType: STPPaymentMethodUSBankAccountType;

	accountTypeString: string;

	routingNumber: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare const enum STPPaymentMethodUSBankAccountType {

	Unknown = 0,

	Checking = 1,

	Savings = 2
}

declare class STPPaymentMethodiDEAL extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodiDEAL; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodiDEAL;

	static new(): STPPaymentMethodiDEAL; // inherited from NSObject

	readonly bankIdentifierCode: string;

	readonly bankName: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPPaymentMethodiDEALParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodiDEALParams; // inherited from NSObject

	static new(): STPPaymentMethodiDEALParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	bankName: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

interface STPPaymentOption extends NSObjectProtocol {

	image: UIImage;

	isReusable: boolean;

	label: string;

	templateImage: UIImage;
}
declare var STPPaymentOption: {

	prototype: STPPaymentOption;
};

declare class STPPaymentOptionsViewController extends STPCoreViewController implements STPAddCardViewControllerDelegate {

	static alloc(): STPPaymentOptionsViewController; // inherited from NSObject

	static new(): STPPaymentOptionsViewController; // inherited from NSObject

	addCardViewControllerFooterView: UIView;

	apiClient: STPAPIClient;

	defaultPaymentMethod: string;

	paymentOptionsViewControllerFooterView: UIView;

	prefilledInformation: STPUserInformation;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { configuration: STPPaymentConfiguration; theme: STPTheme; apiAdapter: STPBackendAPIAdapter; delegate: STPPaymentOptionsViewControllerDelegate; });

	constructor(o: { configuration: STPPaymentConfiguration; theme: STPTheme; customerContext: STPCustomerContext; delegate: STPPaymentOptionsViewControllerDelegate; });

	constructor(o: { paymentContext: STPPaymentContext; });

	addCardViewControllerDidCancel(addCardViewController: STPAddCardViewController): void;

	addCardViewControllerDidCreatePaymentMethodCompletion(addCardViewController: STPAddCardViewController, paymentMethod: STPPaymentMethod, completion: (p1: NSError) => void): void;

	addCardViewControllerDidCreateSourceCompletion(addCardViewController: STPAddCardViewController, source: STPSource, completion: (p1: NSError) => void): void;

	addCardViewControllerDidCreateTokenCompletion(addCardViewController: STPAddCardViewController, token: STPToken, completion: (p1: NSError) => void): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dismissWithCompletion(completion: () => void): void;

	initWithConfigurationThemeApiAdapterDelegate(configuration: STPPaymentConfiguration, theme: STPTheme, apiAdapter: STPBackendAPIAdapter, delegate: STPPaymentOptionsViewControllerDelegate): this;

	initWithConfigurationThemeCustomerContextDelegate(configuration: STPPaymentConfiguration, theme: STPTheme, customerContext: STPCustomerContext, delegate: STPPaymentOptionsViewControllerDelegate): this;

	initWithPaymentContext(paymentContext: STPPaymentContext): this;

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

interface STPPaymentOptionsViewControllerDelegate extends NSObjectProtocol {

	paymentOptionsViewControllerDidCancel(paymentOptionsViewController: STPPaymentOptionsViewController): void;

	paymentOptionsViewControllerDidFailToLoadWithError(paymentOptionsViewController: STPPaymentOptionsViewController, error: NSError): void;

	paymentOptionsViewControllerDidFinish(paymentOptionsViewController: STPPaymentOptionsViewController): void;

	paymentOptionsViewControllerDidSelectPaymentOption?(paymentOptionsViewController: STPPaymentOptionsViewController, paymentOption: STPPaymentOption): void;
}
declare var STPPaymentOptionsViewControllerDelegate: {

	prototype: STPPaymentOptionsViewControllerDelegate;
};

declare class STPPaymentResult extends NSObject {

	static alloc(): STPPaymentResult; // inherited from NSObject

	static new(): STPPaymentResult; // inherited from NSObject

	readonly paymentMethod: STPPaymentMethod;

	readonly paymentMethodParams: STPPaymentMethodParams;

	readonly paymentOption: STPPaymentOption;

	constructor(o: { paymentOption: STPPaymentOption; });

	initWithPaymentOption(paymentOption: STPPaymentOption): this;
}

declare const enum STPPaymentStatus {

	Success = 0,

	Error = 1,

	UserCancellation = 2
}

declare class STPPinManagementService extends NSObject {

	static alloc(): STPPinManagementService; // inherited from NSObject

	static new(): STPPinManagementService; // inherited from NSObject

	apiClient: STPAPIClient;

	constructor(o: { keyProvider: STPIssuingCardEphemeralKeyProvider; });

	initWithKeyProvider(keyProvider: STPIssuingCardEphemeralKeyProvider): this;

	retrievePinVerificationIdOneTimeCodeCompletion(cardId: string, verificationId: string, oneTimeCode: string, completion: (p1: STPIssuingCardPin, p2: STPPinStatus, p3: NSError) => void): void;

	updatePinNewPinVerificationIdOneTimeCodeCompletion(cardId: string, newPin: string, verificationId: string, oneTimeCode: string, completion: (p1: STPIssuingCardPin, p2: STPPinStatus, p3: NSError) => void): void;
}

declare const enum STPPinStatus {

	Success = 0,

	ErrorVerificationAlreadyRedeemed = 1,

	ErrorVerificationCodeIncorrect = 2,

	ErrorVerificationExpired = 3,

	ErrorVerificationTooManyAttempts = 4,

	EphemeralKeyError = 5,

	UnknownError = 6
}

declare class STPPushProvisioningContext extends NSObject {

	static alloc(): STPPushProvisioningContext; // inherited from NSObject

	static new(): STPPushProvisioningContext; // inherited from NSObject

	static requestConfigurationWithNameDescriptionLast4Brand(name: string, description: string, last4: string, brand: STPCardBrand): PKAddPaymentPassRequestConfiguration;

	static requestConfigurationWithNameDescriptionLast4BrandPrimaryAccountIdentifier(name: string, description: string, last4: string, brand: STPCardBrand, primaryAccountIdentifier: string): PKAddPaymentPassRequestConfiguration;

	apiClient: STPAPIClient;

	constructor(o: { keyProvider: STPIssuingCardEphemeralKeyProvider; });

	addPaymentPassViewControllerGenerateRequestWithCertificateChainNonceNonceSignatureCompletionHandler(controller: PKAddPaymentPassViewController, certificates: NSArray<NSData> | NSData[], nonce: NSData, nonceSignature: NSData, handler: (p1: PKAddPaymentPassRequest) => void): void;

	initWithKeyProvider(keyProvider: STPIssuingCardEphemeralKeyProvider): this;
}

declare class STPPushProvisioningDetailsParams extends NSObject {

	static alloc(): STPPushProvisioningDetailsParams; // inherited from NSObject

	static new(): STPPushProvisioningDetailsParams; // inherited from NSObject

	readonly cardId: string;

	readonly certificates: NSArray<NSData>;

	readonly certificatesBase64: NSArray<string>;

	readonly nonce: NSData;

	readonly nonceHex: string;

	readonly nonceSignature: NSData;

	readonly nonceSignatureHex: string;

	constructor(o: { cardId: string; certificates: NSArray<NSData> | NSData[]; nonce: NSData; nonceSignature: NSData; });

	initWithCardIdCertificatesNonceNonceSignature(cardId: string, certificates: NSArray<NSData> | NSData[], nonce: NSData, nonceSignature: NSData): this;
}

declare class STPRadarSession extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPRadarSession; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPRadarSession;

	static new(): STPRadarSession; // inherited from NSObject

	readonly id: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPRedirectContext extends NSObject implements SFSafariViewControllerDelegate, UIViewControllerTransitioningDelegate {

	static alloc(): STPRedirectContext; // inherited from NSObject

	static new(): STPRedirectContext; // inherited from NSObject

	readonly state: STPRedirectContextState;

	static readonly STPRedirectContextErrorDomain: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { paymentIntent: STPPaymentIntent; completion: (p1: string, p2: NSError) => void; });

	constructor(o: { source: STPSource; completion: (p1: string, p2: string, p3: NSError) => void; });

	animationControllerForDismissedController(dismissed: UIViewController): UIViewControllerAnimatedTransitioning;

	animationControllerForPresentedControllerPresentingControllerSourceController(presented: UIViewController, presenting: UIViewController, source: UIViewController): UIViewControllerAnimatedTransitioning;

	cancel(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	handleURLCallback(url: NSURL): boolean;

	initWithPaymentIntentCompletion(paymentIntent: STPPaymentIntent, completion: (p1: string, p2: NSError) => void): this;

	initWithSourceCompletion(source: STPSource, completion: (p1: string, p2: string, p3: NSError) => void): this;

	interactionControllerForDismissal(animator: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;

	interactionControllerForPresentation(animator: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	presentationControllerForPresentedViewControllerPresentingViewControllerSourceViewController(presented: UIViewController, presenting: UIViewController, source: UIViewController): UIPresentationController;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	safariViewControllerActivityItemsForURLTitle(controller: SFSafariViewController, URL: NSURL, title: string): NSArray<UIActivity>;

	safariViewControllerDidCompleteInitialLoad(controller: SFSafariViewController, didLoadSuccessfully: boolean): void;

	safariViewControllerDidFinish(controller: SFSafariViewController): void;

	safariViewControllerExcludedActivityTypesForURLTitle(controller: SFSafariViewController, URL: NSURL, title: string): NSArray<string>;

	safariViewControllerInitialLoadDidRedirectToURL(controller: SFSafariViewController, URL: NSURL): void;

	safariViewControllerWillOpenInBrowser(controller: SFSafariViewController): void;

	self(): this;

	startRedirectFlowFromViewController(presentingViewController: UIViewController): void;

	startSafariAppRedirectFlow(): void;

	startSafariViewControllerRedirectFlowFromViewController(presentingViewController: UIViewController): void;
}

declare const enum STPRedirectContextError {

	AppRedirectError = 0
}

declare const enum STPRedirectContextState {

	NotStarted = 0,

	InProgress = 1,

	Cancelled = 2,

	Completed = 3
}

declare class STPSetupIntent extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPSetupIntent; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPSetupIntent;

	static new(): STPSetupIntent; // inherited from NSObject

	readonly clientSecret: string;

	readonly created: Date;

	readonly customerID: string;

	readonly lastSetupError: STPSetupIntentLastSetupError;

	readonly livemode: boolean;

	readonly metadata: NSDictionary<string, string>;

	readonly nextAction: STPIntentAction;

	readonly paymentMethod: STPPaymentMethod;

	readonly paymentMethodID: string;

	readonly paymentMethodTypes: NSArray<number>;

	readonly status: STPSetupIntentStatus;

	readonly stripeDescription: string;

	readonly stripeID: string;

	readonly usage: STPSetupIntentUsage;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPSetupIntentConfirmParams extends NSObject implements NSCopying, STPFormEncodable {

	static alloc(): STPSetupIntentConfirmParams; // inherited from NSObject

	static new(): STPSetupIntentConfirmParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	clientSecret: string;

	mandateData: STPMandateDataParams;

	paymentMethodID: string;

	paymentMethodParams: STPPaymentMethodParams;

	returnURL: string;

	useStripeSDK: number;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { clientSecret: string; });

	constructor(o: { clientSecret: string; paymentMethodType: STPPaymentMethodType; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithClientSecret(clientSecret: string): this;

	initWithClientSecretPaymentMethodType(clientSecret: string, paymentMethodType: STPPaymentMethodType): this;

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

declare class STPSetupIntentLastSetupError extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPSetupIntentLastSetupError; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPSetupIntentLastSetupError;

	static new(): STPSetupIntentLastSetupError; // inherited from NSObject

	readonly code: string;

	readonly declineCode: string;

	readonly docURL: string;

	readonly message: string;

	readonly param: string;

	readonly paymentMethod: STPPaymentMethod;

	readonly type: STPSetupIntentLastSetupErrorType;

	static readonly CodeAuthenticationFailure: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare const enum STPSetupIntentLastSetupErrorType {

	Unknown = 0,

	APIConnection = 1,

	API = 2,

	Authentication = 3,

	Card = 4,

	Idempotency = 5,

	InvalidRequest = 6,

	RateLimit = 7
}

declare const enum STPSetupIntentStatus {

	Unknown = 0,

	RequiresPaymentMethod = 1,

	RequiresConfirmation = 2,

	RequiresAction = 3,

	Processing = 4,

	Succeeded = 5,

	Canceled = 6
}

declare const enum STPSetupIntentUsage {

	Unknown = 0,

	None = 1,

	OnSession = 2,

	OffSession = 3
}

declare class STPShippingAddressViewController extends STPCoreTableViewController implements UITableViewDataSource, UITableViewDelegate {

	static alloc(): STPShippingAddressViewController; // inherited from NSObject

	static new(): STPShippingAddressViewController; // inherited from NSObject

	delegate: STPShippingAddressViewControllerDelegate;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { configuration: STPPaymentConfiguration; theme: STPTheme; currency: string; shippingAddress: STPAddress; selectedShippingMethod: PKShippingMethod; prefilledInformation: STPUserInformation; });

	constructor(o: { paymentContext: STPPaymentContext; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dismissWithCompletion(completion: () => void): void;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	initWithConfigurationThemeCurrencyShippingAddressSelectedShippingMethodPrefilledInformation(configuration: STPPaymentConfiguration, theme: STPTheme, currency: string, shippingAddress: STPAddress, selectedShippingMethod: PKShippingMethod, prefilledInformation: STPUserInformation): this;

	initWithPaymentContext(paymentContext: STPPaymentContext): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCanPerformPrimaryActionForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewContextMenuConfigurationForRowAtIndexPathPoint(tableView: UITableView, indexPath: NSIndexPath, point: CGPoint): UIContextMenuConfiguration;

	tableViewDidBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndMultipleSelectionInteraction(tableView: UITableView): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewPerformPrimaryActionForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewPreviewForDismissingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewPreviewForHighlightingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewSelectionFollowsFocusForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayContextMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillEndContextMenuInteractionWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillPerformPreviewActionForMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

interface STPShippingAddressViewControllerDelegate extends NSObjectProtocol {

	shippingAddressViewControllerDidCancel(addressViewController: STPShippingAddressViewController): void;

	shippingAddressViewControllerDidEnterAddressCompletion(addressViewController: STPShippingAddressViewController, address: STPAddress, completion: (p1: STPShippingStatus, p2: NSError, p3: NSArray<PKShippingMethod>, p4: PKShippingMethod) => void): void;

	shippingAddressViewControllerDidFinishWithAddressShippingMethod(addressViewController: STPShippingAddressViewController, address: STPAddress, method: PKShippingMethod): void;
}
declare var STPShippingAddressViewControllerDelegate: {

	prototype: STPShippingAddressViewControllerDelegate;
};

declare const enum STPShippingStatus {

	Valid = 0,

	Invalid = 1
}

declare const enum STPShippingType {

	Shipping = 0,

	Delivery = 1
}

declare class STPSource extends NSObject implements STPAPIResponseDecodable, STPPaymentOption, STPSourceProtocol {

	static alloc(): STPSource; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPSource;

	static new(): STPSource; // inherited from NSObject

	readonly amount: number;

	readonly cardDetails: STPSourceCardDetails;

	readonly clientSecret: string;

	readonly created: Date;

	readonly currency: string;

	readonly details: NSDictionary<any, any>;

	readonly flow: STPSourceFlow;

	readonly klarnaDetails: STPSourceKlarnaDetails;

	readonly livemode: boolean;

	readonly metadata: NSDictionary<string, string>;

	readonly owner: STPSourceOwner;

	readonly receiver: STPSourceReceiver;

	readonly redirect: STPSourceRedirect;

	readonly sepaDebitDetails: STPSourceSEPADebitDetails;

	readonly status: STPSourceStatus;

	stripeID: string;

	readonly type: STPSourceType;

	readonly usage: STPSourceUsage;

	readonly verification: STPSourceVerification;

	readonly weChatPayDetails: STPSourceWeChatPayDetails;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly image: UIImage; // inherited from STPPaymentOption

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly isReusable: boolean; // inherited from STPPaymentOption

	readonly label: string; // inherited from STPPaymentOption

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly templateImage: UIImage; // inherited from STPPaymentOption

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare const enum STPSourceCard3DSecureStatus {

	Required = 0,

	Optional = 1,

	NotSupported = 2,

	Recommended = 3,

	Unknown = 4
}

declare class STPSourceCardDetails extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPSourceCardDetails; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPSourceCardDetails;

	static new(): STPSourceCardDetails; // inherited from NSObject

	readonly brand: STPCardBrand;

	readonly country: string;

	readonly expMonth: number;

	readonly expYear: number;

	readonly funding: STPCardFundingType;

	readonly isApplePayCard: boolean;

	readonly last4: string;

	readonly threeDSecure: STPSourceCard3DSecureStatus;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare const enum STPSourceFlow {

	None = 0,

	Redirect = 1,

	CodeVerification = 2,

	Receiver = 3,

	Unknown = 4
}

declare class STPSourceKlarnaDetails extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPSourceKlarnaDetails; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPSourceKlarnaDetails;

	static new(): STPSourceKlarnaDetails; // inherited from NSObject

	readonly clientToken: string;

	readonly purchaseCountry: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPSourceOwner extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPSourceOwner; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPSourceOwner;

	static new(): STPSourceOwner; // inherited from NSObject

	readonly address: STPAddress;

	readonly email: string;

	readonly name: string;

	readonly phone: string;

	readonly verifiedAddress: STPAddress;

	readonly verifiedEmail: string;

	readonly verifiedName: string;

	readonly verifiedPhone: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPSourceParams extends NSObject implements NSCopying, STPFormEncodable {

	static alipayParamsWithAmountCurrencyReturnURL(amount: number, currency: string, returnURL: string): STPSourceParams;

	static alipayReusableParamsWithCurrencyReturnURL(currency: string, returnURL: string): STPSourceParams;

	static alloc(): STPSourceParams; // inherited from NSObject

	static bancontactParamsWithAmountNameReturnURLStatementDescriptor(amount: number, name: string, returnURL: string, statementDescriptor: string): STPSourceParams;

	static cardParamsWithCard(card: STPCardParams): STPSourceParams;

	static epsParamsWithAmountNameReturnURLStatementDescriptor(amount: number, name: string, returnURL: string, statementDescriptor: string): STPSourceParams;

	static giropayParamsWithAmountNameReturnURLStatementDescriptor(amount: number, name: string, returnURL: string, statementDescriptor: string): STPSourceParams;

	static idealParamsWithAmountNameReturnURLStatementDescriptorBank(amount: number, name: string, returnURL: string, statementDescriptor: string, bank: string): STPSourceParams;

	static klarnaParamsWithReturnURLCurrencyPurchaseCountryItemsCustomPaymentMethods(returnURL: string, currency: string, purchaseCountry: string, items: NSArray<STPKlarnaLineItem> | STPKlarnaLineItem[], customPaymentMethods: NSArray<number> | number[]): STPSourceParams;

	static klarnaParamsWithReturnURLCurrencyPurchaseCountryItemsCustomPaymentMethodsBillingAddressBillingFirstNameBillingLastNameBillingDOB(returnURL: string, currency: string, purchaseCountry: string, items: NSArray<STPKlarnaLineItem> | STPKlarnaLineItem[], customPaymentMethods: NSArray<number> | number[], address: STPAddress, firstName: string, lastName: string, dateOfBirth: STPDateOfBirth): STPSourceParams;

	static masterpassParamsWithCartIdTransactionId(cartId: string, transactionId: string): STPSourceParams;

	static multibancoParamsWithAmountReturnURLEmail(amount: number, returnURL: string, email: string): STPSourceParams;

	static new(): STPSourceParams; // inherited from NSObject

	static p24ParamsWithAmountCurrencyEmailNameReturnURL(amount: number, currency: string, email: string, name: string, returnURL: string): STPSourceParams;

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<string, string>;

	static rootObjectName(): string;

	static sepaDebitParamsWithNameIbanAddressLine1CityPostalCodeCountry(name: string, iban: string, addressLine1: string, city: string, postalCode: string, country: string): STPSourceParams;

	static sofortParamsWithAmountReturnURLCountryStatementDescriptor(amount: number, returnURL: string, country: string, statementDescriptor: string): STPSourceParams;

	static threeDSecureParamsWithAmountCurrencyReturnURLCard(amount: number, currency: string, returnURL: string, card: string): STPSourceParams;

	static visaCheckoutParamsWithCallId(callId: string): STPSourceParams;

	static wechatPayParamsWithAmountCurrencyAppIdStatementDescriptor(amount: number, currency: string, appId: string, statementDescriptor: string): STPSourceParams;

	amount: number;

	currency: string;

	flow: STPSourceFlow;

	metadata: NSDictionary<any, any>;

	owner: NSDictionary<any, any>;

	rawTypeString: string;

	redirect: NSDictionary<any, any>;

	token: string;

	type: STPSourceType;

	usage: STPSourceUsage;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	redirectDictionaryWithMerchantNameIfNecessary(): NSDictionary<any, any>;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface STPSourceProtocol extends NSObjectProtocol {

	stripeID: string;
}
declare var STPSourceProtocol: {

	prototype: STPSourceProtocol;
};

declare class STPSourceReceiver extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPSourceReceiver; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPSourceReceiver;

	static new(): STPSourceReceiver; // inherited from NSObject

	readonly address: string;

	readonly amountCharged: number;

	readonly amountReceived: number;

	readonly amountReturned: number;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPSourceRedirect extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPSourceRedirect; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPSourceRedirect;

	static new(): STPSourceRedirect; // inherited from NSObject

	readonly returnURL: NSURL;

	readonly status: STPSourceRedirectStatus;

	readonly url: NSURL;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare const enum STPSourceRedirectStatus {

	Pending = 0,

	Succeeded = 1,

	Failed = 2,

	NotRequired = 3,

	Unknown = 4
}

declare class STPSourceSEPADebitDetails extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPSourceSEPADebitDetails; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPSourceSEPADebitDetails;

	static new(): STPSourceSEPADebitDetails; // inherited from NSObject

	readonly bankCode: string;

	readonly country: string;

	readonly fingerprint: string;

	readonly last4: string;

	readonly mandateReference: string;

	readonly mandateURL: NSURL;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare const enum STPSourceStatus {

	Pending = 0,

	Chargeable = 1,

	Consumed = 2,

	Canceled = 3,

	Failed = 4,

	Unknown = 5
}

declare const enum STPSourceType {

	Bancontact = 0,

	Card = 1,

	Giropay = 2,

	iDEAL = 3,

	SEPADebit = 4,

	Sofort = 5,

	ThreeDSecure = 6,

	Alipay = 7,

	P24 = 8,

	EPS = 9,

	Multibanco = 10,

	WeChatPay = 11,

	Klarna = 12,

	Unknown = 13
}

declare const enum STPSourceUsage {

	Reusable = 0,

	SingleUse = 1,

	Unknown = 2
}

declare class STPSourceVerification extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPSourceVerification; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPSourceVerification;

	static new(): STPSourceVerification; // inherited from NSObject

	readonly attemptsRemaining: number;

	readonly status: STPSourceVerificationStatus;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare const enum STPSourceVerificationStatus {

	Pending = 0,

	Succeeded = 1,

	Failed = 2,

	Unknown = 3
}

declare class STPSourceWeChatPayDetails extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPSourceWeChatPayDetails; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPSourceWeChatPayDetails;

	static new(): STPSourceWeChatPayDetails; // inherited from NSObject

	readonly weChatAppURL: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class STPStringFromCardBrand extends NSObject {

	static alloc(): STPStringFromCardBrand; // inherited from NSObject

	static new(): STPStringFromCardBrand; // inherited from NSObject
}

declare class STPTheme extends NSObject implements NSCopying {

	static alloc(): STPTheme; // inherited from NSObject

	static new(): STPTheme; // inherited from NSObject

	accentColor: UIColor;

	barStyle: UIBarStyle;

	emphasisFont: UIFont;

	errorColor: UIColor;

	font: UIFont;

	readonly largeFont: UIFont;

	primaryBackgroundColor: UIColor;

	primaryForegroundColor: UIColor;

	readonly quaternaryBackgroundColor: UIColor;

	secondaryBackgroundColor: UIColor;

	secondaryForegroundColor: UIColor;

	readonly smallFont: UIFont;

	readonly tertiaryBackgroundColor: UIColor;

	readonly tertiaryForegroundColor: UIColor;

	translucentNavigationBar: boolean;

	static readonly defaultTheme: STPTheme;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class STPThreeDSButtonCustomization extends NSObject {

	static alloc(): STPThreeDSButtonCustomization; // inherited from NSObject

	static defaultSettingsForButtonType(type: STPThreeDSCustomizationButtonType): STPThreeDSButtonCustomization;

	static new(): STPThreeDSButtonCustomization; // inherited from NSObject

	backgroundColor: UIColor;

	cornerRadius: number;

	font: UIFont;

	textColor: UIColor;

	titleStyle: STPThreeDSButtonTitleStyle;

	constructor(o: { backgroundColor: UIColor; cornerRadius: number; });

	initWithBackgroundColorCornerRadius(backgroundColor: UIColor, cornerRadius: number): this;
}

declare const enum STPThreeDSButtonTitleStyle {

	Default = 0,

	Uppercase = 1,

	Lowercase = 2,

	SentenceCapitalized = 3
}

declare const enum STPThreeDSCustomizationButtonType {

	Submit = 0,

	Continue = 1,

	Next = 2,

	Cancel = 3,

	Resend = 4
}

declare class STPThreeDSCustomizationSettings extends NSObject {

	static alloc(): STPThreeDSCustomizationSettings; // inherited from NSObject

	static defaultSettings(): STPThreeDSCustomizationSettings;

	static new(): STPThreeDSCustomizationSettings; // inherited from NSObject

	authenticationTimeout: number;

	uiCustomization: STPThreeDSUICustomization;
}

declare class STPThreeDSFooterCustomization extends NSObject {

	static alloc(): STPThreeDSFooterCustomization; // inherited from NSObject

	static defaultSettings(): STPThreeDSFooterCustomization;

	static new(): STPThreeDSFooterCustomization; // inherited from NSObject

	backgroundColor: UIColor;

	chevronColor: UIColor;

	font: UIFont;

	headingFont: UIFont;

	headingTextColor: UIColor;

	textColor: UIColor;
}

declare class STPThreeDSLabelCustomization extends NSObject {

	static alloc(): STPThreeDSLabelCustomization; // inherited from NSObject

	static defaultSettings(): STPThreeDSLabelCustomization;

	static new(): STPThreeDSLabelCustomization; // inherited from NSObject

	font: UIFont;

	headingFont: UIFont;

	headingTextColor: UIColor;

	textColor: UIColor;
}

declare class STPThreeDSNavigationBarCustomization extends NSObject {

	static alloc(): STPThreeDSNavigationBarCustomization; // inherited from NSObject

	static defaultSettings(): STPThreeDSNavigationBarCustomization;

	static new(): STPThreeDSNavigationBarCustomization; // inherited from NSObject

	barStyle: UIBarStyle;

	barTintColor: UIColor;

	buttonText: string;

	font: UIFont;

	headerText: string;

	textColor: UIColor;

	translucent: boolean;
}

declare class STPThreeDSSelectionCustomization extends NSObject {

	static alloc(): STPThreeDSSelectionCustomization; // inherited from NSObject

	static defaultSettings(): STPThreeDSSelectionCustomization;

	static new(): STPThreeDSSelectionCustomization; // inherited from NSObject

	primarySelectedColor: UIColor;

	secondarySelectedColor: UIColor;

	unselectedBackgroundColor: UIColor;

	unselectedBorderColor: UIColor;
}

declare class STPThreeDSTextFieldCustomization extends NSObject {

	static alloc(): STPThreeDSTextFieldCustomization; // inherited from NSObject

	static defaultSettings(): STPThreeDSTextFieldCustomization;

	static new(): STPThreeDSTextFieldCustomization; // inherited from NSObject

	borderColor: UIColor;

	borderWidth: number;

	cornerRadius: number;

	font: UIFont;

	keyboardAppearance: UIKeyboardAppearance;

	placeholderTextColor: UIColor;

	textColor: UIColor;
}

declare class STPThreeDSUICustomization extends NSObject {

	static alloc(): STPThreeDSUICustomization; // inherited from NSObject

	static defaultSettings(): STPThreeDSUICustomization;

	static new(): STPThreeDSUICustomization; // inherited from NSObject

	activityIndicatorViewStyle: UIActivityIndicatorViewStyle;

	backgroundColor: UIColor;

	blurStyle: UIBlurEffectStyle;

	footerCustomization: STPThreeDSFooterCustomization;

	labelCustomization: STPThreeDSLabelCustomization;

	navigationBarCustomization: STPThreeDSNavigationBarCustomization;

	selectionCustomization: STPThreeDSSelectionCustomization;

	textFieldCustomization: STPThreeDSTextFieldCustomization;

	buttonCustomizationForButtonType(buttonType: STPThreeDSCustomizationButtonType): STPThreeDSButtonCustomization;

	setButtonCustomizationForType(buttonCustomization: STPThreeDSButtonCustomization, buttonType: STPThreeDSCustomizationButtonType): void;
}

declare class STPToken extends NSObject implements STPAPIResponseDecodable, STPSourceProtocol {

	static alloc(): STPToken; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPToken;

	static new(): STPToken; // inherited from NSObject

	readonly bankAccount: STPBankAccount;

	readonly card: STPCard;

	readonly created: Date;

	readonly livemode: boolean;

	readonly tokenId: string;

	readonly type: STPTokenType;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly stripeID: string; // inherited from STPSourceProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare const enum STPTokenType {

	Account = 0,

	BankAccount = 1,

	Card = 2,

	PII = 3,

	CvcUpdate = 4
}

declare class STPUserInformation extends NSObject implements NSCopying {

	static alloc(): STPUserInformation; // inherited from NSObject

	static new(): STPUserInformation; // inherited from NSObject

	billingAddress: STPAddress;

	shippingAddress: STPAddress;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	setBillingAddressWithBillingDetails(billingDetails: STPPaymentMethodBillingDetails): void;
}

declare class STP_Internal_AddressViewController extends UIViewController implements UIGestureRecognizerDelegate {

	static alloc(): STP_Internal_AddressViewController; // inherited from NSObject

	static new(): STP_Internal_AddressViewController; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceiveEvent(gestureRecognizer: UIGestureRecognizer, event: _UIEvent): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

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

declare function SecCertificateCopyKey(certificate: any): any;

declare var Stripe3DS2ProtocolVersion: string;

declare var Stripe3DS2VersionNumber: number;

declare var Stripe3DS2VersionString: interop.Reference<number>;

declare class StripeAPI extends NSObject {

	static alloc(): StripeAPI; // inherited from NSObject

	static canSubmitPaymentRequest(paymentRequest: PKPaymentRequest): boolean;

	static deviceSupportsApplePay(): boolean;

	static handleStripeURLCallbackWithURL(url: NSURL): boolean;

	static new(): StripeAPI; // inherited from NSObject

	static paymentRequestWithMerchantIdentifier(merchantIdentifier: string): PKPaymentRequest;

	static paymentRequestWithMerchantIdentifierCountryCurrency(merchantIdentifier: string, countryCode: string, currencyCode: string): PKPaymentRequest;

	static setAdditionalEnabledApplePayNetworks(newValue: NSArray<string> | string[]): void;

	static setAdvancedFraudSignalsEnabled(newValue: boolean): void;

	static setDefaultPublishableKey(newValue: string): void;

	static setJcbPaymentNetworkSupported(newValue: boolean): void;

	static setMaxRetries(newValue: number): void;

	static additionalEnabledApplePayNetworks: NSArray<string>;

	static advancedFraudSignalsEnabled: boolean;

	static defaultPublishableKey: string;

	static jcbPaymentNetworkSupported: boolean;

	static maxRetries: number;
}

declare var StripeVersionNumber: number;

declare var StripeVersionString: interop.Reference<number>;

declare function _stds_import_nsdata_jwehelpers(): void;

declare function _stds_import_nsdictionary_decodinghelpers(): void;

declare function _stds_import_nserror_stripe3ds2(): void;

declare function _stds_import_nslayoutconstraint_layoutsupport(): void;

declare function _stds_import_nsstring_emptychecking(): void;

declare function _stds_import_nsstring_jwehelpers(): void;

declare function _stds_import_uibutton_custominitialization(): void;

declare function _stds_import_uicolor_defaultcolors(): void;

declare function _stds_import_uicolor_thirteensupport(): void;

declare function _stds_import_uifont_defaultfonts(): void;

declare function _stds_import_uiview_layoutsupport(): void;

declare function _stds_import_uiviewcontroller_stripe3ds2(): void;

interface _stpinternal_apContextDelegate extends _stpinternal_STPApplePayContextDelegateBase {

	applePayContextDidCompleteWithStatusError(context: _stpinternal_APContextSwift, status: STPPaymentStatus, error: NSError): void;

	applePayContextDidCreatePaymentMethodPaymentInformationCompletion(context: _stpinternal_APContextSwift, paymentMethod: STPPaymentMethod, paymentInformation: PKPayment, completion: (p1: string, p2: NSError) => void): void;
}
declare var _stpinternal_apContextDelegate: {

	prototype: _stpinternal_apContextDelegate;
};

declare var kSTDSConfigDefaultGroupName: string;

declare var kSTDSRuntimeErrorCodeEncryptionError: string;

declare var kSTDSRuntimeErrorCodeParsingError: string;
