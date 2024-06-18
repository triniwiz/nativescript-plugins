import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, Directive, DoCheck, ElementRef, EmbeddedViewRef, EventEmitter, forwardRef, Host, Inject, InjectionToken, Input, IterableDiffer, IterableDiffers, NgModule, NO_ERRORS_SCHEMA, OnDestroy, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { EventData, ItemEventData, ItemsSource, KeyedTemplate, LayoutBase, ObservableArray, profile, Template, View } from '@nativescript/core';

import { extractSingleViewRecursive, isListLikeIterable, registerElement } from '@nativescript/angular';
import { Accordion } from '@triniwiz/nativescript-accordion';

registerElement('Accordion', () => Accordion);

const NG_VIEW = '_ngViewRef';

export class ItemContext {
	constructor(public $implicit?: any, public item?: any, public index?: number, public even?: boolean, public odd?: boolean) {}
}

export class ChildItemContext {
	constructor(public $implicit?: any, public item?: any, public parentIndex?: number, public index?: number, public even?: boolean, public odd?: boolean) {}
}

export interface SetupItemViewArgs {
	view: EmbeddedViewRef<any>;
	data: any;
	index: number;
	context: ItemContext;
}

export interface AccordionItemsView {
	items: any[] | ItemsSource;
	headerTemplate: string | Template;
	headerTemplates?: string | Array<KeyedTemplate>;
	itemHeaderTemplate: string | Template;
	itemHeaderTemplates?: string | Array<KeyedTemplate>;
	itemContentTemplate: string | Template;
	itemContentTemplates?: string | Array<KeyedTemplate>;
	footerTemplate: string | Template;
	footerTemplates?: string | Array<KeyedTemplate>;
	childItems: string;
	headerTemplateSelector: string | ((item: any, index: number, items: any) => string);
	itemHeaderTemplateSelector: string | ((item: any, index: number, items: any) => string);
	itemContentTemplateSelector: string | ((item: any, parentIndex: number, index: number, items: any) => string);
	footerTemplateSelector: string | ((item: any, index: number, items: any) => string);
	_getHasHeader: any;
	_getHasFooter: any;

	refresh(): void;

	on(event: 'headerLoading', callback: (args: EventData) => void, thisArg?: any);

	off(event: 'headerLoading', callback: (args: EventData) => void, thisArg?: any);

	on(event: 'itemHeaderLoading', callback: (args: EventData) => void, thisArg?: any);

	off(event: 'itemHeaderLoading', callback: (args: EventData) => void, thisArg?: any);

	on(event: 'itemContentLoading', callback: (args: EventData) => void, thisArg?: any);

	off(event: 'itemContentLoading', callback: (args: EventData) => void, thisArg?: any);

	on(event: 'footerLoading', callback: (args: EventData) => void, thisArg?: any);

	off(event: 'footerLoading', callback: (args: EventData) => void, thisArg?: any);
}

@Directive()
export abstract class AccordionItemsComponent implements DoCheck, OnDestroy, AfterContentInit {
	public abstract get nativeElement(): any;

	protected accordionItemsView: any;
	protected _items: any;
	protected _differ: IterableDiffer<KeyedTemplate>;
	protected _templateHeaderMap: Map<string, KeyedTemplate>;
	protected _templateItemHeaderMap: Map<string, KeyedTemplate>;
	protected _templateItemContentMap: Map<string, KeyedTemplate>;
	protected _templateFooterMap: Map<string, KeyedTemplate>;

	@ViewChild('loader', { read: ViewContainerRef, static: false })
	loader: ViewContainerRef;

	@Output()
	public setupItemView = new EventEmitter<SetupItemViewArgs>();

	@ContentChild(TemplateRef, { static: false })
	itemTemplateQuery: TemplateRef<ItemContext>;

	headerTemplate: TemplateRef<ItemContext>;

	itemHeaderTemplate: TemplateRef<ItemContext>;

	itemContentTemplate: TemplateRef<ItemContext>;

	footerTemplate: TemplateRef<ItemContext>;

	@Input()
	get items() {
		return this._items;
	}

	set items(value: any) {
		this._items = value;
		let needDiffer = true;
		if (value instanceof ObservableArray) {
			needDiffer = false;
		}
		if (needDiffer && !this._differ && isListLikeIterable(value)) {
			this._differ = this._iterableDiffers.find(this._items).create((_index, item) => {
				return item;
			});
		}

		this.accordionItemsView.items = this._items;
	}

	constructor(_elementRef: ElementRef, private _iterableDiffers: IterableDiffers) {
		this.accordionItemsView = _elementRef.nativeElement;
		this.accordionItemsView.on('headerLoading', this.onHeaderLoading, this);
		this.accordionItemsView.on('itemHeaderLoading', this.onItemHeaderLoading, this);
		this.accordionItemsView.on('itemContentLoading', this.onItemContentLoading, this);
		this.accordionItemsView.on('footerLoading', this.onFooterLoading, this);
	}

	ngAfterContentInit() {
		this.setItemTemplates();
	}

	ngOnDestroy() {
		this.accordionItemsView.off('headerLoading', this.onHeaderLoading, this);
		this.accordionItemsView.off('itemHeaderLoading', this.onItemHeaderLoading, this);
		this.accordionItemsView.off('itemContentLoading', this.onItemContentLoading, this);
		this.accordionItemsView.off('footerLoading', this.onFooterLoading, this);
	}

	private setItemTemplates() {
		this.itemHeaderTemplate = this.itemTemplateQuery;

		this.accordionItemsView._getHasHeader = () => {
			return false;
		};

		this.accordionItemsView._getHasFooter = () => {
			return false;
		};
		if (this._templateHeaderMap) {
			const templates: KeyedTemplate[] = [];
			this._templateHeaderMap.forEach((value) => {
				templates.push(value);
			});

			if (templates.length === 1) {
				this.accordionItemsView.headerTemplateSelector = (item: any, index: number, items: any) => {
					return 'header';
				};
			}

			if (templates.length > 0) {
				this.accordionItemsView._getHasHeader = () => {
					return true;
				};
			}
			this.accordionItemsView.headerTemplates = templates;
		}

		if (this._templateItemHeaderMap) {
			const templates: KeyedTemplate[] = [];
			this._templateItemHeaderMap.forEach((value) => {
				templates.push(value);
			});

			this.accordionItemsView.itemHeaderTemplates = templates;

			if (templates.length === 1) {
				this.accordionItemsView.itemHeaderTemplateSelector = (item: any, index: number, items: any) => {
					return 'title';
				};
			}
		} else {
			this.getItemTemplateViewFactory(this.itemHeaderTemplate);
		}

		if (this._templateItemContentMap) {
			const templates: KeyedTemplate[] = [];
			this._templateItemContentMap.forEach((value) => {
				templates.push(value);
			});

			if (templates.length === 1) {
				this.accordionItemsView.itemContentTemplateSelector = (item: any, parentIndex: number, index: number, items: any) => {
					return 'content';
				};
			}

			this.accordionItemsView.itemContentTemplates = templates;
		}

		if (this._templateFooterMap) {
			const templates: KeyedTemplate[] = [];
			this._templateFooterMap.forEach((value) => {
				templates.push(value);
			});

			if (templates.length === 1) {
				this.accordionItemsView.footerTemplateSelector = (item: any, index: number, items: any) => {
					return 'footer';
				};
			}

			if (templates.length > 0) {
				this.accordionItemsView._getHasFooter = () => {
					return true;
				};
			}

			this.accordionItemsView.footerTemplates = templates;
		}
	}

	public registerTemplate(key: string, template: TemplateRef<ItemContext>) {
		if (key === 'header' || key.startsWith('header-')) {
			if (!this._templateHeaderMap) {
				this._templateHeaderMap = new Map<string, KeyedTemplate>();
			}

			const keyedTemplate = {
				key,
				createView: this.getItemTemplateViewFactory(template),
			};

			this._templateHeaderMap.set(key, keyedTemplate);
		}

		if (key === 'title' || key.startsWith('title-')) {
			if (!this._templateItemHeaderMap) {
				this._templateItemHeaderMap = new Map<string, KeyedTemplate>();
			}

			const keyedTemplate = {
				key,
				createView: this.getItemTemplateViewFactory(template),
			};

			this._templateItemHeaderMap.set(key, keyedTemplate);
		}

		if (key === 'content' || key.startsWith('content-')) {
			if (!this._templateItemContentMap) {
				this._templateItemContentMap = new Map<string, KeyedTemplate>();
			}

			const keyedTemplate = {
				key,
				createView: this.getChildItemTemplateViewFactory(template),
			};

			this._templateItemContentMap.set(key, keyedTemplate);
		}

		if (key === 'footer' || key.startsWith('footer-')) {
			if (!this._templateFooterMap) {
				this._templateFooterMap = new Map<string, KeyedTemplate>();
			}

			const keyedTemplate = {
				key,
				createView: this.getItemTemplateViewFactory(template),
			};

			this._templateFooterMap.set(key, keyedTemplate);
		}
	}

	@profile
	public onHeaderLoading(args: ItemEventData) {
		if (!args.view && !this.headerTemplate) {
			return;
		}

		const index = args.index;
		const items = (<any>args.object).items;
		const currentItem = typeof items.getItem === 'function' ? items.getItem(index) : items[index];
		let viewRef: EmbeddedViewRef<ItemContext>;

		if (args.view) {
			viewRef = args.view[NG_VIEW];
			// Getting angular view from original element (in cases when ProxyViewContainer
			// is used NativeScript internally wraps it in a StackLayout)
			if (!viewRef && args.view instanceof LayoutBase && args.view.getChildrenCount() > 0) {
				viewRef = args.view.getChildAt(0)[NG_VIEW];
			}
		}

		if (!viewRef) {
			viewRef = this.loader.createEmbeddedView(this.headerTemplate, new ItemContext(), 0);
			args.view = getItemViewRoot(viewRef);
			args.view[NG_VIEW] = viewRef;
		}

		this.setupViewRef(viewRef, currentItem, index);

		this.detectChangesOnChild(viewRef, index);
	}

	@profile
	public onItemHeaderLoading(args: ItemEventData) {
		if (!args.view && !this.itemHeaderTemplate) {
			return;
		}

		const index = args.index;
		const items = (<any>args.object).items;
		const currentItem = typeof items.getItem === 'function' ? items.getItem(index) : items[index];
		let viewRef: EmbeddedViewRef<ItemContext>;

		if (args.view) {
			viewRef = args.view[NG_VIEW];
			// Getting angular view from original element (in cases when ProxyViewContainer
			// is used NativeScript internally wraps it in a StackLayout)
			if (!viewRef && args.view instanceof LayoutBase && args.view.getChildrenCount() > 0) {
				viewRef = args.view.getChildAt(0)[NG_VIEW];
			}
		}

		if (!viewRef) {
			viewRef = this.loader.createEmbeddedView(this.itemHeaderTemplate, new ItemContext(), 0);
			args.view = getItemViewRoot(viewRef);
			args.view[NG_VIEW] = viewRef;
		}

		this.setupViewRef(viewRef, currentItem, index);

		this.detectChangesOnChild(viewRef, index);
	}

	@profile
	public onItemContentLoading(args: ItemEventData) {
		if (!args.view && !this.itemContentTemplate) {
			return;
		}

		const index = args.index;
		const childIndex = (args as any).childIndex;
		const childItems = this.accordionItemsView.childItems;
		const items = (<any>args.object).items;
		const currentItem = typeof items.getItem === 'function' ? items.getItem(index)[childItems][childIndex] : items[index][childItems][childIndex];

		let viewRef: EmbeddedViewRef<ChildItemContext>;

		if (args.view) {
			viewRef = args.view[NG_VIEW];
			// Getting angular view from original element (in cases when ProxyViewContainer
			// is used NativeScript internally wraps it in a StackLayout)
			if (!viewRef && args.view instanceof LayoutBase && args.view.getChildrenCount() > 0) {
				viewRef = args.view.getChildAt(0)[NG_VIEW];
			}
		}

		if (!viewRef) {
			viewRef = this.loader.createEmbeddedView(this.itemContentTemplate, new ChildItemContext(), 0);
			args.view = getItemViewRoot(viewRef);
			args.view[NG_VIEW] = viewRef;
		}

		this.setupChildViewRef(viewRef, currentItem, index, childIndex);

		this.detectChangesOnChild(viewRef, index);
	}

	@profile
	public onFooterLoading(args: ItemEventData) {
		if (!args.view && !this.footerTemplate) {
			return;
		}

		const index = args.index;
		const items = (<any>args.object).items;
		const currentItem = typeof items.getItem === 'function' ? items.getItem(index) : items[index];
		let viewRef: EmbeddedViewRef<ItemContext>;

		if (args.view) {
			viewRef = args.view[NG_VIEW];
			// Getting angular view from original element (in cases when ProxyViewContainer
			// is used NativeScript internally wraps it in a StackLayout)
			if (!viewRef && args.view instanceof LayoutBase && args.view.getChildrenCount() > 0) {
				viewRef = args.view.getChildAt(0)[NG_VIEW];
			}
		}

		if (!viewRef) {
			viewRef = this.loader.createEmbeddedView(this.footerTemplate, new ItemContext(), 0);
			args.view = getItemViewRoot(viewRef);
			args.view[NG_VIEW] = viewRef;
		}

		this.setupViewRef(viewRef, currentItem, index);

		this.detectChangesOnChild(viewRef, index);
	}

	public setupViewRef(viewRef: EmbeddedViewRef<ItemContext>, data: any, index: number): void {
		const context = viewRef.context;
		context.$implicit = data;
		context.item = data;
		context.index = index;
		context.even = index % 2 === 0;
		context.odd = !context.even;

		this.setupItemView.next({ view: viewRef, data: data, index: index, context: context });
	}

	public setupChildViewRef(viewRef: EmbeddedViewRef<ChildItemContext>, data: any, parentIndex: number, index: number): void {
		const context = viewRef.context;
		context.$implicit = data;
		context.item = data;
		context.parentIndex = parentIndex;
		context.index = index;
		context.even = index % 2 === 0;
		context.odd = !context.even;

		this.setupItemView.next({ view: viewRef, data: data, index: index, context: context });
	}

	protected getItemTemplateViewFactory(template: TemplateRef<ItemContext>): () => View {
		return () => {
			const viewRef = this.loader.createEmbeddedView(template, new ItemContext(), 0);
			const resultView = getItemViewRoot(viewRef);
			resultView[NG_VIEW] = viewRef;

			return resultView;
		};
	}

	protected getChildItemTemplateViewFactory(template: TemplateRef<ChildItemContext>): () => View {
		return () => {
			const viewRef = this.loader.createEmbeddedView(template, new ChildItemContext(), 0);
			const resultView = getItemViewRoot(viewRef);
			resultView[NG_VIEW] = viewRef;

			return resultView;
		};
	}

	@profile
	private detectChangesOnChild(viewRef: EmbeddedViewRef<ItemContext>, index: number) {
		viewRef.markForCheck();
		viewRef.detectChanges();
	}

	ngDoCheck() {
		if (this._differ) {
			const changes = this._differ.diff(this._items);
			if (changes) {
				this.accordionItemsView.refresh();
			}
		}
	}
}

export interface ComponentView {
	rootNodes: Array<any>;

	destroy(): void;
}

export type RootLocator = (nodes: Array<any>, nestLevel: number) => View;

export function getItemViewRoot(viewRef: ComponentView, rootLocator: RootLocator = extractSingleViewRecursive): View {
	return rootLocator(viewRef.rootNodes, 0);
}

export const ACCORDION_ITEMS_COMPONENT = new InjectionToken<AccordionItemsView>('AccordionItemsComponent');

@Directive({ selector: '[acTemplateKey]' })
export class TemplateKeyDirective {
	constructor(private templateRef: TemplateRef<any>, @Inject(ACCORDION_ITEMS_COMPONENT) @Host() private comp: AccordionItemsComponent) {}

	@Input()
	set acTemplateKey(value: any) {
		if (this.comp && this.templateRef) {
			this.comp.registerTemplate(value, this.templateRef);
		}
	}
}

@Component({
	selector: 'Accordion',
	template: ` <DetachedContainer>
		<Placeholder #loader></Placeholder>
	</DetachedContainer>`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [{ provide: ACCORDION_ITEMS_COMPONENT, useExisting: forwardRef(() => AccordionComponent) }],
})
export class AccordionComponent extends AccordionItemsComponent {
	public get nativeElement(): Accordion {
		return this.accordionItemsView;
	}

	// @ts-ignore
	protected accordionItemsView: Accordion;

	constructor(_elementRef: ElementRef, _iterableDiffers: IterableDiffers) {
		super(_elementRef, _iterableDiffers);
	}
}

@NgModule({
	declarations: [AccordionComponent, TemplateKeyDirective],
	exports: [AccordionComponent, TemplateKeyDirective],
	schemas: [NO_ERRORS_SCHEMA],
})
export class AccordionModule {}
