
declare class STPEmailAddressValidator extends NSObject {

	static alloc(): STPEmailAddressValidator; // inherited from NSObject

	static new(): STPEmailAddressValidator; // inherited from NSObject
}

declare class STPVPANumberValidator extends NSObject {

	static alloc(): STPVPANumberValidator; // inherited from NSObject

	static new(): STPVPANumberValidator; // inherited from NSObject
}

declare class STP_Internal_ActivityIndicator extends UIView {

	static alloc(): STP_Internal_ActivityIndicator; // inherited from NSObject

	static appearance(): STP_Internal_ActivityIndicator; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STP_Internal_ActivityIndicator; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STP_Internal_ActivityIndicator; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STP_Internal_ActivityIndicator; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STP_Internal_ActivityIndicator; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STP_Internal_ActivityIndicator; // inherited from UIAppearance

	static new(): STP_Internal_ActivityIndicator; // inherited from NSObject
}

declare class STP_Internal_Button extends UIControl {

	static alloc(): STP_Internal_Button; // inherited from NSObject

	static appearance(): STP_Internal_Button; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STP_Internal_Button; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STP_Internal_Button; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STP_Internal_Button; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STP_Internal_Button; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STP_Internal_Button; // inherited from UIAppearance

	static new(): STP_Internal_Button; // inherited from NSObject
}

declare class STP_Internal_CheckboxButton extends UIControl implements UITextViewDelegate {

	static alloc(): STP_Internal_CheckboxButton; // inherited from NSObject

	static appearance(): STP_Internal_CheckboxButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STP_Internal_CheckboxButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STP_Internal_CheckboxButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STP_Internal_CheckboxButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STP_Internal_CheckboxButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STP_Internal_CheckboxButton; // inherited from UIAppearance

	static new(): STP_Internal_CheckboxButton; // inherited from NSObject

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

declare class STP_Internal_DoneButtonToolbar extends UIToolbar {

	static alloc(): STP_Internal_DoneButtonToolbar; // inherited from NSObject

	static appearance(): STP_Internal_DoneButtonToolbar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STP_Internal_DoneButtonToolbar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STP_Internal_DoneButtonToolbar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STP_Internal_DoneButtonToolbar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STP_Internal_DoneButtonToolbar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STP_Internal_DoneButtonToolbar; // inherited from UIAppearance

	static new(): STP_Internal_DoneButtonToolbar; // inherited from NSObject
}

declare class STP_Internal_DropdownFieldElement extends NSObject implements UIPickerViewDataSource, UIPickerViewDelegate {

	static alloc(): STP_Internal_DropdownFieldElement; // inherited from NSObject

	static new(): STP_Internal_DropdownFieldElement; // inherited from NSObject

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

	numberOfComponentsInPickerView(pickerView: UIPickerView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	pickerViewAttributedTitleForRowForComponent(pickerView: UIPickerView, row: number, component: number): NSAttributedString;

	pickerViewDidSelectRowInComponent(pickerView: UIPickerView, row: number, component: number): void;

	pickerViewNumberOfRowsInComponent(pickerView: UIPickerView, component: number): number;

	pickerViewRowHeightForComponent(pickerView: UIPickerView, component: number): number;

	pickerViewTitleForRowForComponent(pickerView: UIPickerView, row: number, component: number): string;

	pickerViewViewForRowForComponentReusingView(pickerView: UIPickerView, row: number, component: number, view: UIView): UIView;

	pickerViewWidthForComponent(pickerView: UIPickerView, component: number): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class STP_Internal_DynamicHeightContainerView extends UIView {

	static alloc(): STP_Internal_DynamicHeightContainerView; // inherited from NSObject

	static appearance(): STP_Internal_DynamicHeightContainerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STP_Internal_DynamicHeightContainerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STP_Internal_DynamicHeightContainerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STP_Internal_DynamicHeightContainerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STP_Internal_DynamicHeightContainerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STP_Internal_DynamicHeightContainerView; // inherited from UIAppearance

	static new(): STP_Internal_DynamicHeightContainerView; // inherited from NSObject
}

declare class STP_Internal_FormView extends UIView {

	static alloc(): STP_Internal_FormView; // inherited from NSObject

	static appearance(): STP_Internal_FormView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STP_Internal_FormView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STP_Internal_FormView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STP_Internal_FormView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STP_Internal_FormView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STP_Internal_FormView; // inherited from UIAppearance

	static new(): STP_Internal_FormView; // inherited from NSObject
}

declare class STP_Internal_StackViewWithSeparator extends UIStackView {

	static alloc(): STP_Internal_StackViewWithSeparator; // inherited from NSObject

	static appearance(): STP_Internal_StackViewWithSeparator; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STP_Internal_StackViewWithSeparator; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STP_Internal_StackViewWithSeparator; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STP_Internal_StackViewWithSeparator; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STP_Internal_StackViewWithSeparator; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STP_Internal_StackViewWithSeparator; // inherited from UIAppearance

	static new(): STP_Internal_StackViewWithSeparator; // inherited from NSObject
}

declare var StripeUICoreVersionNumber: number;

declare var StripeUICoreVersionString: interop.Reference<number>;
