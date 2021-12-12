
declare const enum MDEngagementType {

	Form = 0,

	AppRating = 1
}

@NativeClass()
declare class MDExternalError extends NSObject {

	static alloc(): MDExternalError; // inherited from NSObject

	static new(): MDExternalError; // inherited from NSObject

	message: string;

	statusCode: number;
}

interface MDFeedbackDelegate {

	feedbackDidSubmitWithTimestampFeedbackUUIDPayload?(timestamp: number, feedbackUUID: string, payload: NSDictionary<string, any>): void;
}
declare var MDFeedbackDelegate: {

	prototype: MDFeedbackDelegate;
};

interface MDFeedbackV2Delegate {

	feedbackDidSubmitWithTimestampFeedbackClientCorrelationIdPayload?(timestamp: number, feedbackClientCorrelationId: string, payload: NSDictionary<string, any>): void;
}
declare var MDFeedbackV2Delegate: {

	prototype: MDFeedbackV2Delegate;
};

interface MDFormDelegate {

	formDidBlockExternalUrlWithTimestampFormIdFormTriggerTypeBlockedUrl?(timestamp: number, formId: string, formTriggerType: MDFormTriggerType, blockedUrl: string): void;

	formDidCloseWithTimestampFormIdFormTriggerType?(timestamp: number, formId: string, formTriggerType: MDFormTriggerType): void;

	formDidDismissWithTimestampFormIdFormTriggerType?(timestamp: number, formId: string, formTriggerType: MDFormTriggerType): void;

	formDidDisplayV2WithTimestampFormIdFormTriggerTypeFormLocaleSetFormLocaleDisplay?(timestamp: number, formId: string, formTriggerType: MDFormTriggerType, formLocaleSet: string, formLocaleDisplay: string): void;

	formDidDisplayWithTimestampFormIdFormTriggerType?(timestamp: number, formId: string, formTriggerType: MDFormTriggerType): void;

	formDidLinkSelectWithTimestampFormIdFormTriggerTypeUrlIsBlocked?(timestamp: number, formId: string, formTriggerType: MDFormTriggerType, url: string, isBlocked: boolean): void;

	formDidSubmitWithTimestampFormIdFormTriggerType?(timestamp: number, formId: string, formTriggerType: MDFormTriggerType): void;

	formDidThankYouPromptWithTimestampEngagementIdFormTriggerType?(timestamp: number, engagementId: string, formTriggerType: MDFormTriggerType): void;
}
declare var MDFormDelegate: {

	prototype: MDFormDelegate;
};

declare const enum MDFormTriggerType {

	Code = 0,

	Invite = 1
}

interface MDInterceptDelegate {

	interceptDidAcceptWithTimestampInterceptIdEngagementType?(timestamp: number, interceptId: string, engagementType: MDEngagementType): void;

	interceptDidDeclineWithTimestampInterceptIdEngagementType?(timestamp: number, interceptId: string, engagementType: MDEngagementType): void;

	interceptDidDeferWithTimestampInterceptIdEngagementType?(timestamp: number, interceptId: string, engagementType: MDEngagementType): void;

	interceptDidDisplayWithTimestampInterceptIdEngagementType?(timestamp: number, interceptId: string, engagementType: MDEngagementType): void;

	interceptDidTriggerSKStoreReviewControllerWithTimestampInterceptId?(timestamp: number, interceptId: string): void;
}
declare var MDInterceptDelegate: {

	prototype: MDInterceptDelegate;
};

interface MDInterceptV3Delegate {

	interceptDidAcceptWithTimestampEngagementIdEngagementType?(timestamp: number, engagementId: string, engagementType: MDEngagementType): void;

	interceptDidDeclineWithTimestampEngagementIdEngagementType?(timestamp: number, engagementId: string, engagementType: MDEngagementType): void;

	interceptDidDeferWithTimestampEngagementIdEngagementType?(timestamp: number, engagementId: string, engagementType: MDEngagementType): void;

	interceptDidDisplayWithTimestampEngagementIdEngagementType?(timestamp: number, engagementId: string, engagementType: MDEngagementType): void;

	interceptDidTriggerSKStoreReviewControllerWithTimestampInterceptId?(timestamp: number, interceptId: string): void;
}
declare var MDInterceptV3Delegate: {

	prototype: MDInterceptV3Delegate;
};

interface MDInvitationDelegate {

	invitationDidAcceptWithTimestampFormId?(timestamp: number, formId: string): void;

	invitationDidDeclineWithTimestampFormId?(timestamp: number, formId: string): void;

	invitationDidDeferWithTimestampFormId?(timestamp: number, formId: string): void;

	invitationDidDisplayWithTimestampFormId?(timestamp: number, formId: string): void;
}
declare var MDInvitationDelegate: {

	prototype: MDInvitationDelegate;
};

declare const enum MDLogLevel {

	Off = 0,

	Fatal = 1,

	Error = 2,

	Warn = 3,

	Info = 4,

	Debug = 5
}

declare const enum MDSDKFrameworkType {

	Native = 0,

	ReactNative = 1,

	Cordova = 2
}

@NativeClass()
declare class MedalliaDigital extends NSObject {

	static alloc(): MedalliaDigital; // inherited from NSObject

	static disableIntercept(): void;

	static enableIntercept(): void;

	static handleNotificationSuccessFailure(formId: string, success: () => void, failure: (p1: MDExternalError) => void): void;

	static new(): MedalliaDigital; // inherited from NSObject

	static revertStopSDK(): void;

	static sdkInitWithTokenSuccessFailure(token: string, success: () => void, failure: (p1: MDExternalError) => void): void;

	static setCustomParameterWithNameValue(name: string, value: any): void;

	static setCustomParameters(parameters: NSDictionary<string, any>): void;

	static setFeedbackDelegate(feedbackDelegate: MDFeedbackDelegate): void;

	static setFeedbackV2Delegate(feedbackV2Delegate: MDFeedbackV2Delegate): void;

	static setFormDelegate(formDelegate: MDFormDelegate): void;

	static setInterceptDelegate(interceptDelegate: MDInterceptDelegate): void;

	static setInterceptV3Delegate(interceptV3Delegate: MDInterceptV3Delegate): void;

	static setInvitationDelegate(invitationDelegate: MDInvitationDelegate): void;

	static setLogLevel(logLevel: MDLogLevel): void;

	static setSdkFramework(mdSdkFrameworkType: MDSDKFrameworkType): void;

	static showFormSuccessFailure(formId: string, success: () => void, failure: (p1: MDExternalError) => void): void;

	static stopSDKWithClearData(clearData: boolean): void;

	static updateCustomLocaleSuccessFailure(locale: string, success: (p1: string) => void, failure: (p1: MDExternalError) => void): void;
}
