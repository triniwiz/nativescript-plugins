
declare class DoneButtonToolbar extends UIToolbar {

	static alloc(): DoneButtonToolbar; // inherited from NSObject

	static appearance(): DoneButtonToolbar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): DoneButtonToolbar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): DoneButtonToolbar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): DoneButtonToolbar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): DoneButtonToolbar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): DoneButtonToolbar; // inherited from UIAppearance

	static new(): DoneButtonToolbar; // inherited from NSObject
}

declare class DropdownFieldElement extends NSObject implements UIPickerViewDataSource, UIPickerViewDelegate {

	static alloc(): DropdownFieldElement; // inherited from NSObject

	static new(): DropdownFieldElement; // inherited from NSObject

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

declare class DynamicHeightContainerView extends UIView {

	static alloc(): DynamicHeightContainerView; // inherited from NSObject

	static appearance(): DynamicHeightContainerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): DynamicHeightContainerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): DynamicHeightContainerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): DynamicHeightContainerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): DynamicHeightContainerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): DynamicHeightContainerView; // inherited from UIAppearance

	static new(): DynamicHeightContainerView; // inherited from NSObject
}

declare class STPEmailAddressValidator extends NSObject {

	static alloc(): STPEmailAddressValidator; // inherited from NSObject

	static new(): STPEmailAddressValidator; // inherited from NSObject
}

declare var StripeUICoreVersionNumber: number;

declare var StripeUICoreVersionString: interop.Reference<number>;
