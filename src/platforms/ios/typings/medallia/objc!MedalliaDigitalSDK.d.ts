
declare class BannerContentView extends UIView {

	static alloc(): BannerContentView; // inherited from NSObject

	static appearance(): BannerContentView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BannerContentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BannerContentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BannerContentView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BannerContentView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BannerContentView; // inherited from UIAppearance

	static new(): BannerContentView; // inherited from NSObject
}

declare class BannerView extends UIView {

	static alloc(): BannerView; // inherited from NSObject

	static appearance(): BannerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BannerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BannerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BannerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BannerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BannerView; // inherited from UIAppearance

	static new(): BannerView; // inherited from NSObject

	dismiss(): void;
}

declare class BannerViewController extends UIViewController {

	static alloc(): BannerViewController; // inherited from NSObject

	static new(): BannerViewController; // inherited from NSObject
}

declare class BaseFormViewController extends UIViewController implements UIScrollViewDelegate, WKNavigationDelegate, WKScriptMessageHandler, WKUIDelegate {

	static alloc(): BaseFormViewController; // inherited from NSObject

	static new(): BaseFormViewController; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	appDidBecomeActiveWithNotification(notification: NSNotification): void;

	appWillResignActiveWithNotification(notification: NSNotification): void;

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

	showActivityIndicator(): void;

	userContentControllerDidReceiveScriptMessage(userContentController: WKUserContentController, message: WKScriptMessage): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;

	webViewCommitPreviewingViewController(webView: WKWebView, previewingViewController: UIViewController): void;

	webViewContextMenuConfigurationForElementCompletionHandler(webView: WKWebView, elementInfo: WKContextMenuElementInfo, completionHandler: (p1: UIContextMenuConfiguration) => void): void;

	webViewContextMenuDidEndForElement(webView: WKWebView, elementInfo: WKContextMenuElementInfo): void;

	webViewContextMenuForElementWillCommitWithAnimator(webView: WKWebView, elementInfo: WKContextMenuElementInfo, animator: UIContextMenuInteractionCommitAnimating): void;

	webViewContextMenuWillPresentForElement(webView: WKWebView, elementInfo: WKContextMenuElementInfo): void;

	webViewCreateWebViewWithConfigurationForNavigationActionWindowFeatures(webView: WKWebView, configuration: WKWebViewConfiguration, navigationAction: WKNavigationAction, windowFeatures: WKWindowFeatures): WKWebView;

	webViewDecidePolicyForNavigationActionDecisionHandler(webView: WKWebView, navigationAction: WKNavigationAction, decisionHandler: (p1: WKNavigationActionPolicy) => void): void;

	webViewDecidePolicyForNavigationActionPreferencesDecisionHandler(webView: WKWebView, navigationAction: WKNavigationAction, preferences: WKWebpagePreferences, decisionHandler: (p1: WKNavigationActionPolicy, p2: WKWebpagePreferences) => void): void;

	webViewDecidePolicyForNavigationResponseDecisionHandler(webView: WKWebView, navigationResponse: WKNavigationResponse, decisionHandler: (p1: WKNavigationResponsePolicy) => void): void;

	webViewDidClose(webView: WKWebView): void;

	webViewDidCommitNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewDidFailNavigationWithError(webView: WKWebView, navigation: WKNavigation, error: NSError): void;

	webViewDidFailProvisionalNavigationWithError(webView: WKWebView, navigation: WKNavigation, error: NSError): void;

	webViewDidFinishNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewDidReceiveAuthenticationChallengeCompletionHandler(webView: WKWebView, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	webViewDidReceiveServerRedirectForProvisionalNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewDidStartProvisionalNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewPreviewingViewControllerForElementDefaultActions(webView: WKWebView, elementInfo: WKPreviewElementInfo, previewActions: NSArray<WKPreviewActionItem> | WKPreviewActionItem[]): UIViewController;

	webViewRunJavaScriptAlertPanelWithMessageInitiatedByFrameCompletionHandler(webView: WKWebView, message: string, frame: WKFrameInfo, completionHandler: () => void): void;

	webViewRunJavaScriptConfirmPanelWithMessageInitiatedByFrameCompletionHandler(webView: WKWebView, message: string, frame: WKFrameInfo, completionHandler: (p1: boolean) => void): void;

	webViewRunJavaScriptTextInputPanelWithPromptDefaultTextInitiatedByFrameCompletionHandler(webView: WKWebView, prompt: string, defaultText: string, frame: WKFrameInfo, completionHandler: (p1: string) => void): void;

	webViewShouldPreviewElement(webView: WKWebView, elementInfo: WKPreviewElementInfo): boolean;

	webViewWebContentProcessDidTerminate(webView: WKWebView): void;
}

interface ClientRequestDataAPI {

	body: NSDictionary<string, any>;

	endpointUrl?: string;

	headers: NSDictionary<string, any>;

	params: NSDictionary<string, string>;
}
declare var ClientRequestDataAPI: {

	prototype: ClientRequestDataAPI;
};

declare class FeedbackTableData {

	feedbackData: string;

	feedbackUUID: string;

	formId: string;

	formTriggerType: string;

	numberOfRetries: number;

	submittedTimestamp: number;

	constructor(o: { entity: NSEntityDescription; insertIntoManagedObjectContext: NSManagedObjectContext; });

	initWithEntityInsertIntoManagedObjectContext(entity: NSEntityDescription, context: NSManagedObjectContext): this;
}

declare class FormDataTableData {

	backgroundColor: string;

	font: string;

	formId: string;

	formJson: string;

	formStatus: number;

	formViewType: string;

	handleTextColor: string;

	invitationBody: string;

	invitationTimeout: number;

	invitationTitle: string;

	invitationType: string;

	inviteMaybeButtonText: string;

	inviteMessage: string;

	inviteNegativeButtonText: string;

	invitePositiveButtonText: string;

	inviteTitle: string;

	position: string;

	templatePath: string;

	templateUrl: string;

	textColor: string;

	title: string;

	titleBackgroundColor: string;

	titleTextColor: string;

	transitionType: number;

	constructor(o: { entity: NSEntityDescription; insertIntoManagedObjectContext: NSManagedObjectContext; });

	initWithEntityInsertIntoManagedObjectContext(entity: NSEntityDescription, context: NSManagedObjectContext): this;
}

declare class FormHeaderView extends UIView {

	static alloc(): FormHeaderView; // inherited from NSObject

	static appearance(): FormHeaderView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FormHeaderView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FormHeaderView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FormHeaderView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FormHeaderView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FormHeaderView; // inherited from UIAppearance

	static new(): FormHeaderView; // inherited from NSObject

	closeButtonWasTapped(): void;
}

declare class FullFormViewController extends BaseFormViewController {

	static alloc(): FullFormViewController; // inherited from NSObject

	static new(): FullFormViewController; // inherited from NSObject

	didTapBackButton(sender: UIButton): void;
}

declare class FullScreenWKWebView extends WKWebView {

	static alloc(): FullScreenWKWebView; // inherited from NSObject

	static appearance(): FullScreenWKWebView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FullScreenWKWebView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FullScreenWKWebView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FullScreenWKWebView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FullScreenWKWebView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FullScreenWKWebView; // inherited from UIAppearance

	static new(): FullScreenWKWebView; // inherited from NSObject
}

declare class InvitationAlertController extends UIAlertController {

	static alertControllerWithTitleMessagePreferredStyle(title: string, message: string, preferredStyle: UIAlertControllerStyle): InvitationAlertController; // inherited from UIAlertController

	static alloc(): InvitationAlertController; // inherited from NSObject

	static new(): InvitationAlertController; // inherited from NSObject
}

declare class LoadResourcesOperation extends MDOperation {

	static alloc(): LoadResourcesOperation; // inherited from NSObject

	static new(): LoadResourcesOperation; // inherited from NSObject
}

declare class LoadSingleResourceOperation extends MDOperation {

	static alloc(): LoadSingleResourceOperation; // inherited from NSObject

	static new(): LoadSingleResourceOperation; // inherited from NSObject
}

declare class LoadSingleTemplateOperation extends MDOperation {

	static alloc(): LoadSingleTemplateOperation; // inherited from NSObject

	static new(): LoadSingleTemplateOperation; // inherited from NSObject
}

declare class LoadTemplatesOperation extends MDOperation {

	static alloc(): LoadTemplatesOperation; // inherited from NSObject

	static new(): LoadTemplatesOperation; // inherited from NSObject
}

declare const enum MDEngagementType {

	Form = 0,

	AppRating = 1
}

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

interface MDFormDelegate {

	formDidBlockExternalUrlWithTimestampFormIdFormTriggerTypeBlockedUrl?(timestamp: number, formId: string, formTriggerType: MDFormTriggerType, blockedUrl: string): void;

	formDidCloseWithTimestampFormIdFormTriggerType?(timestamp: number, formId: string, formTriggerType: MDFormTriggerType): void;

	formDidDismissWithTimestampFormIdFormTriggerType?(timestamp: number, formId: string, formTriggerType: MDFormTriggerType): void;

	formDidDisplayWithTimestampFormIdFormTriggerType?(timestamp: number, formId: string, formTriggerType: MDFormTriggerType): void;

	formDidSubmitWithTimestampFormIdFormTriggerType?(timestamp: number, formId: string, formTriggerType: MDFormTriggerType): void;
}
declare var MDFormDelegate: {

	prototype: MDFormDelegate;
};

declare const enum MDFormTriggerType {

	Code = 0,

	Invite = 1
}

declare class MDFormWindow extends UIWindow {

	static alloc(): MDFormWindow; // inherited from NSObject

	static appearance(): MDFormWindow; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDFormWindow; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDFormWindow; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDFormWindow; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDFormWindow; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDFormWindow; // inherited from UIAppearance

	static new(): MDFormWindow; // inherited from NSObject
}

interface MDInterceptDelegate {

	interceptDidAcceptWithTimestampInterceptIdEngagementType?(timestamp: number, interceptId: string, engagementType: MDEngagementType): void;

	interceptDidDeclineWithTimestampInterceptIdEngagementType?(timestamp: number, interceptId: string, engagementType: MDEngagementType): void;

	interceptDidDeferWithTimestampInterceptIdEngagementType?(timestamp: number, interceptId: string, engagementType: MDEngagementType): void;

	interceptDidDisplayWithTimestampInterceptIdEngagementType?(timestamp: number, interceptId: string, engagementType: MDEngagementType): void;
}
declare var MDInterceptDelegate: {

	prototype: MDInterceptDelegate;
};

interface MDInterceptV3Delegate {

	interceptDidAcceptWithTimestampEngagementIdEngagementType?(timestamp: number, engagementId: string, engagementType: MDEngagementType): void;

	interceptDidDeclineWithTimestampEngagementIdEngagementType?(timestamp: number, engagementId: string, engagementType: MDEngagementType): void;

	interceptDidDeferWithTimestampEngagementIdEngagementType?(timestamp: number, engagementId: string, engagementType: MDEngagementType): void;

	interceptDidDisplayWithTimestampEngagementIdEngagementType?(timestamp: number, engagementId: string, engagementType: MDEngagementType): void;
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

declare class MDOperation extends NSOperation {

	static alloc(): MDOperation; // inherited from NSObject

	static new(): MDOperation; // inherited from NSObject

	executing: boolean;

	finished: boolean;
}

declare class MDOperationQueue extends NSOperationQueue {

	static alloc(): MDOperationQueue; // inherited from NSObject

	static new(): MDOperationQueue; // inherited from NSObject
}

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

	static setFormDelegate(formDelegate: MDFormDelegate): void;

	static setInterceptDelegate(interceptDelegate: MDInterceptDelegate): void;

	static setInterceptV3Delegate(interceptV3Delegate: MDInterceptV3Delegate): void;

	static setInvitationDelegate(invitationDelegate: MDInvitationDelegate): void;

	static setLogLevel(logLevel: MDLogLevel): void;

	static showFormSuccessFailure(formId: string, success: () => void, failure: (p1: MDExternalError) => void): void;

	static stopSDKWithClearData(clearData: boolean): void;
}

declare class ModalFormViewController extends BaseFormViewController {

	static alloc(): ModalFormViewController; // inherited from NSObject

	static new(): ModalFormViewController; // inherited from NSObject
}

declare class NavigationController extends UINavigationController {

	static alloc(): NavigationController; // inherited from NSObject

	static new(): NavigationController; // inherited from NSObject
}

declare class NotificationBanner extends BannerView {

	static alloc(): NotificationBanner; // inherited from NSObject

	static appearance(): NotificationBanner; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): NotificationBanner; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NotificationBanner; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NotificationBanner; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NotificationBanner; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NotificationBanner; // inherited from UIAppearance

	static new(): NotificationBanner; // inherited from NSObject
}

declare class ResourceContractTableData {

	checksum: string;

	formId: string;

	isGlobal: boolean;

	localUrl: string;

	remoteUrl: string;

	constructor(o: { entity: NSEntityDescription; insertIntoManagedObjectContext: NSManagedObjectContext; });

	initWithEntityInsertIntoManagedObjectContext(entity: NSEntityDescription, context: NSManagedObjectContext): this;
}

declare class TemplateTableData {

	templatePath: string;

	templateUrl: string;

	constructor(o: { entity: NSEntityDescription; insertIntoManagedObjectContext: NSManagedObjectContext; });

	initWithEntityInsertIntoManagedObjectContext(entity: NSEntityDescription, context: NSManagedObjectContext): this;
}

declare class TransitionViewController extends UIViewController {

	static alloc(): TransitionViewController; // inherited from NSObject

	static new(): TransitionViewController; // inherited from NSObject

	deviceOrientationDidChangeWithNotification(notification: NSNotification): void;
}

interface UniversalTasksProtocol {

	clearAndDisconnect?(): void;

	clearAndDisconnectWithCompletion?(completion: () => void): void;
}
declare var UniversalTasksProtocol: {

	prototype: UniversalTasksProtocol;
};

declare class UserJourneyTableData {

	groupType: string;

	lifetime: number;

	name: string;

	sessionId: string;

	timestamp: number;

	value: string;

	valueType: number;

	constructor(o: { entity: NSEntityDescription; insertIntoManagedObjectContext: NSManagedObjectContext; });

	initWithEntityInsertIntoManagedObjectContext(entity: NSEntityDescription, context: NSManagedObjectContext): this;
}
