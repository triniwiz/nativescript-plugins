import {
  CoercibleProperty,
  CssProperty,
  CSSType,
  KeyedTemplate,
  Length,
  Property,
  Style,
  Template,
  View,
  ContainerView,
  Observable,
  ChangedData, ObservableArray,
  addWeakEventListener, removeWeakEventListener,
  Label, Builder
} from '@nativescript/core';

const autoEffectiveRowHeight = -1;

export module knownCollections {
  export const items = 'items';
}
export module knownTemplates {
  export const itemHeaderTemplate = 'itemHeaderTemplate';
  export const itemContentTemplate = 'itemContentTemplate';
  export const headerTemplate = 'headerTemplate';
  export const footerTemplate = 'footerTemplate';
}

export module knownMultiTemplates {
  export const itemHeaderTemplates = 'itemHeaderTemplates';
  export const itemContentTemplates = 'itemContentTemplates';
  export const headerTemplates = 'headerTemplates';
  export const footerTemplates = 'footerTemplates';
}

export interface ItemsSource {
  length: number;

  getItem(index: number): any;
}

@CSSType('Accordion')
export abstract class AccordionBase extends ContainerView {
  public static headerLoadingEvent = 'headerLoading';
  public static footerLoadingEvent = 'footerLoading';
  public static itemHeaderLoadingEvent = 'itemHeaderLoading';
  public static itemContentLoadingEvent = 'itemContentLoading';
  public static itemHeaderTapEvent = 'itemHeaderTap';
  public static itemContentTapEvent = 'itemContentTap';
  public static loadMoreItemsEvent = 'loadMoreItems';
  private _allowMultiple: boolean = false;
  public _effectiveHeaderRowHeight: number = autoEffectiveRowHeight;
  public _effectiveItemHeaderRowHeight: number = autoEffectiveRowHeight;
  public _effectiveItemContentRowHeight: number = autoEffectiveRowHeight;
  public _effectiveFooterRowHeight: number = autoEffectiveRowHeight;
  headerRowHeight: Length;
  itemHeaderRowHeight: Length;
  itemContentRowHeight: Length;
  footerRowHeight: Length;
  iosEstimatedHeaderRowHeight: Length;
  iosEstimatedItemHeaderRowHeight: Length;
  iosEstimatedItemContentRowHeight: Length;
  iosEstimatedFooterRowHeight: Length;
  public static selectedIndexesChangeEvent = 'selectedIndexesChange';
  public static knownFunctions = [
    'itemHeaderTemplateSelector', 'itemContentTemplateSelector', 'headerTemplateSelector',
    'footerTemplateSelector', 'itemIdGenerator', 'childIdGenerator'
  ];
  public items: any[] | ItemsSource;

  public itemHeaderTemplate: string | Template;
  public itemHeaderTemplates: string | Array<KeyedTemplate>;

  public itemContentTemplate: string | Template;
  public itemContentTemplates: string | Array<KeyedTemplate>;

  public headerTemplate: string | Template;
  public headerTemplates: string | Array<KeyedTemplate>;

  public footerTemplate: string | Template;
  public footerTemplates: string | Array<KeyedTemplate>;

  public selectedIndexes: any;

  public childItems: string = 'items';


  private _itemIdGenerator: (item: any, index: number, items: any) => number = (_item: any, index: number) => index;

  get itemIdGenerator(): (item: any, index: number, items: any) => number {
    return this._itemIdGenerator;
  }

  set itemIdGenerator(generatorFn: (item: any, index: number, items: any) => number) {
    this._itemIdGenerator = generatorFn;
  }


  private _childIdGenerator: (item: any, index: number, childIndex: number, items: any) => number = (_item: any, index: number) => index;

  get childIdGenerator(): (item: any, index: number, childIndex: number, items: any) => number {
    return this._itemIdGenerator;
  }

  set childIdGenerator(generatorFn: (item: any, index: number, childIndex: number, items: any) => number) {
    this._childIdGenerator = generatorFn;
  }


  private _headerTemplateSelector: (item: any, index: number, items: any) => string;
  private _headerTemplateSelectorBindable = new Label();
  public _defaultHeaderTemplate: KeyedTemplate = {
    key: 'default',
    createView: () => {
      if (this.headerTemplate) {
        return Builder.parse(this.headerTemplate, this);
      }
      return undefined;
    }
  }
  public _headerTemplatesInternal = new Array<KeyedTemplate>(this._defaultHeaderTemplate);

  private _itemHeaderTemplateSelector: (item: any, index: number, items: any) => string;
  private _itemHeaderTemplateSelectorBindable = new Label();
  public _defaultItemHeaderTemplate: KeyedTemplate = {
    key: 'default',
    createView: () => {
      if (this.itemHeaderTemplate) {
        return Builder.parse(this.itemHeaderTemplate, this);
      }
      return undefined;
    }
  }
  public _itemHeaderTemplatesInternal = new Array<KeyedTemplate>(this._defaultItemHeaderTemplate);

  private _itemContentTemplateSelector: (item: any, parentIndex: number, index: number, items: any) => string;
  private _itemContentTemplateSelectorBindable = new Label();
  public _defaultItemContentTemplate: KeyedTemplate = {
    key: 'default',
    createView: () => {
      if (this.itemContentTemplate) {
        return Builder.parse(this.itemContentTemplate, this);
      }
      return undefined;
    }
  }

  public _itemContentTemplatesInternal = new Array<KeyedTemplate>(this._defaultItemContentTemplate);

  private _footerTemplateSelector: (item: any, index: number, items: any) => string;
  private _footerTemplateSelectorBindable = new Label();
  public _defaultFooterTemplate: KeyedTemplate = {
    key: 'default',
    createView: () => {
      if (this.footerTemplate) {
        return Builder.parse(this.footerTemplate, this);
      }
      return undefined;
    }
  }

  public _footerTemplatesInternal = new Array<KeyedTemplate>(this._defaultFooterTemplate);


  get headerTemplateSelector(): string | ((item: any, index: number, items: any) => string) {
    return this._headerTemplateSelector;
  }

  set headerTemplateSelector(value: string | ((item: any, index: number, items: any) => string)) {
    if (typeof value === 'string') {
      this._headerTemplateSelectorBindable.bind({
        sourceProperty: null,
        targetProperty: 'templateKey',
        expression: value
      });
      this._headerTemplateSelector = (item: any, index: number, items: any) => {
        item['$index'] = index;
        this._headerTemplateSelectorBindable.bindingContext = item;
        return this._headerTemplateSelectorBindable.get('templateKey');
      };
    } else if (typeof value === 'function') {
      this._headerTemplateSelector = value;
    }
  }


  get itemHeaderTemplateSelector(): string | ((item: any, index: number, items: any) => string) {
    return this._itemHeaderTemplateSelector;
  }

  set itemHeaderTemplateSelector(value: string | ((item: any, index: number, items: any) => string)) {
    if (typeof value === 'string') {
      this._itemHeaderTemplateSelectorBindable.bind({
        sourceProperty: null,
        targetProperty: 'templateKey',
        expression: value
      });
      this._itemHeaderTemplateSelector = (item: any, index: number, items: any) => {
        item['$index'] = index;
        this._itemHeaderTemplateSelectorBindable.bindingContext = item;
        return this._itemHeaderTemplateSelectorBindable.get('templateKey');
      };
    } else if (typeof value === 'function') {
      this._itemHeaderTemplateSelector = value;
    }
  }

  get itemContentTemplateSelector(): string | ((item: any, parentIndex: number, index: number, items: any) => string) {
    return this._itemContentTemplateSelector;
  }

  set itemContentTemplateSelector(value: string | ((item: any, parentIndex: number, index: number, items: any) => string)) {
    if (typeof value === 'string') {
      this._itemContentTemplateSelectorBindable.bind({
        sourceProperty: null,
        targetProperty: 'templateKey',
        expression: value
      });
      this._itemContentTemplateSelector = (item: any, parentIndex: number, index: number, items: any) => {
        item['$index'] = index;
        item['$parentIndex'] = parentIndex;
        this._itemContentTemplateSelectorBindable.bindingContext = item;
        return this._itemContentTemplateSelectorBindable.get('templateKey');
      };
    } else if (typeof value === 'function') {
      this._itemContentTemplateSelector = value;
    }
  }

  get footerTemplateSelector(): string | ((item: any, index: number, items: any) => string) {
    return this._footerTemplateSelector;
  }

  set footerTemplateSelector(value: string | ((item: any, index: number, items: any) => string)) {
    if (typeof value === 'string') {
      this._footerTemplateSelectorBindable.bind({
        sourceProperty: null,
        targetProperty: 'templateKey',
        expression: value
      });
      this._footerTemplateSelector = (item: any, index: number, items: any) => {
        item['$index'] = index;
        this._footerTemplateSelectorBindable.bindingContext = item;
        return this._footerTemplateSelectorBindable.get('templateKey');
      };
    } else if (typeof value === 'function') {
      this._footerTemplateSelector = value;
    }
  }

  public _getHeaderTemplate(index: number): KeyedTemplate {
    let templateKey = 'default';
    if (this.headerTemplateSelector) {
      let dataItem = this._getParentData(index);
      templateKey = this._headerTemplateSelector(dataItem, index, this.items);
    }

    for (let i = 0, length = this._headerTemplatesInternal.length; i < length; i++) {
      if (this._headerTemplatesInternal[i].key === templateKey) {
        return this._headerTemplatesInternal[i];
      }
    }

    // This is the default template
    return this._headerTemplatesInternal[0];
  }

  public _getItemHeaderTemplate(index: number): KeyedTemplate {
    let templateKey = 'default';
    if (this.itemHeaderTemplateSelector) {
      let dataItem = this._getParentData(index);
      templateKey = this._itemHeaderTemplateSelector(dataItem, index, this.items);
    }

    for (let i = 0, length = this._itemHeaderTemplatesInternal.length; i < length; i++) {
      if (this._itemHeaderTemplatesInternal[i].key === templateKey) {
        return this._itemHeaderTemplatesInternal[i];
      }
    }

    // This is the default template
    return this._itemHeaderTemplatesInternal[0];
  }

  public _getHasHeader = (): boolean => {
    const contains = this._headerTemplatesInternal && this._headerTemplatesInternal.length > 1;
    return !!(this.headerTemplate || contains);

  }

  public _getHasFooter = (): boolean => {
    const contains = this._footerTemplatesInternal && this._footerTemplatesInternal.length > 1;
    return !!(this.footerTemplate || contains);
  }

  public _getItemContentTemplate(index: number, childIndex: number): KeyedTemplate {
    let templateKey = 'default';
    if (this.itemContentTemplateSelector) {
      const _childIndex = (global.isIOS ? childIndex - 1 : childIndex);
      let dataItem = this._getChildData(index, this._getHasHeader() ? _childIndex - 1 : _childIndex);
      const items = (<ItemsSource>this.items).getItem ? (<ItemsSource>this.items).getItem(index)[this.childItems] : this.items[this.childItems];
      templateKey = this._itemContentTemplateSelector(dataItem, index, childIndex, items);
    }

    for (let i = 0, length = this._itemContentTemplatesInternal.length; i < length; i++) {
      if (this._itemContentTemplatesInternal[i].key === templateKey) {
        return this._itemContentTemplatesInternal[i];
      }
    }

    // This is the default template
    return this._itemContentTemplatesInternal[0];
  }

  public _getFooterTemplate(index: number): KeyedTemplate {
    let templateKey = 'default';
    if (this.footerTemplateSelector) {
      let dataItem = this._getParentData(index);
      templateKey = this._footerTemplateSelector(dataItem, index, this.items);
    }

    for (let i = 0, length = this._footerTemplatesInternal.length; i < length; i++) {
      if (this._footerTemplatesInternal[i].key === templateKey) {
        return this._footerTemplatesInternal[i];
      }
    }

    // This is the default template
    return this._footerTemplatesInternal[0];
  }


  public _getDefaultHeaderContent(index: number): View {
    let lbl = new Label();
    lbl.bind({
      targetProperty: 'text',
      sourceProperty: '$value'
    });
    return lbl;
  }


  public _getDefaultItemHeaderContent(index: number): View {
    let lbl = new Label();
    lbl.bind({
      targetProperty: 'text',
      sourceProperty: '$value'
    });
    return lbl;
  }

  public _getDefaultItemContentContent(index: number, childIndex: number): View {
    let lbl = new Label();
    lbl.bind({
      targetProperty: 'text',
      sourceProperty: '$value'
    });
    return lbl;
  }


  public _getDefaultFooterContent(index: number): View {
    let lbl = new Label();
    lbl.bind({
      targetProperty: 'text',
      sourceProperty: '$value'
    });
    return lbl;
  }


  public _prepareHeaderItem(item: View, index: number) {
    if (item) {
      item.bindingContext = this._getParentData(index);
    }
  }

  public _prepareItemHeader(item: View, index: number) {
    if (item) {
      item.bindingContext = this._getParentData(index);
    }
  }

  public _prepareItemContent(item: View, index: number, childIndex: number) {
    if (item) {
      item.bindingContext = this._getChildData(index, childIndex);
    }
  }

  public _prepareFooterItem(item: View, index: number) {
    if (item) {
      item.bindingContext = this._getParentData(index);
    }
  }

  public _onHeaderRowHeightPropertyChanged(oldValue: Length, newValue: Length) {
    this.refresh();
  }

  public _onItemHeaderRowHeightPropertyChanged(oldValue: Length, newValue: Length) {
    this.refresh();
  }

  public _onItemContentRowHeightPropertyChanged(oldValue: Length, newValue: Length) {
    this.refresh();
  }

  public _onFooterRowHeightPropertyChanged(oldValue: Length, newValue: Length) {
    this.refresh();
  }

  protected updateEffectiveItemHeaderRowHeight(): void {
    itemHeaderRowHeightProperty.coerce(this);
  }


  protected updateEffectiveItemContentRowHeight(): void {
    itemContentRowHeightProperty.coerce(this);
  }

  _getParentData(parentIndex: number) {
    let items = <any>this.items;
    return items.getItem ? items.getItem(parentIndex) : items[parentIndex];
  }

  _getChildData(parentIndex: number, childIndex: number) {
    let items = <any>this.items;
    return items.getItem ? items.getItem(parentIndex)[this.childItems][childIndex] : items[parentIndex][this.childItems][childIndex];
  }

  get allowMultiple() {
    return this._allowMultiple;
  }

  set allowMultiple(value: boolean) {
    this._allowMultiple = value;
  }

  get separatorColor() {
    return this.style.separatorColor;
  }

  set separatorColor(value: any) {
    this.style.separatorColor = value;
  }

  public abstract refresh(): void;

  public _onItemsChanged(args: ChangedData<any>) {
    this.refresh();
  }


  public abstract updateNativeItems(oldItems: Array<any>, newItems: Array<any>): void;

  public abstract updateNativeIndexes(oldData, newData): void;

  public abstract itemCollapsed(index: number): void;

  public abstract itemExpanded(index: number): void;

  public abstract itemIsExpanded(index: number): boolean;

  public abstract expandAll(): void;

  public abstract collapseAll(): void;

  public abstract expandItem(index: number): void;

  public abstract collapseItem(index: number): void;


}


export const separatorColorProperty = new CssProperty<Style, string>({
  name: 'separatorColor',
  cssName: 'separator-color',
  valueConverter: (v) => String(v)
});

separatorColorProperty.register(Style);


export const headerTemplateProperty = new Property<AccordionBase, string>({
  name: 'headerTemplate',
  affectsLayout: true,
  valueChanged: (target) => {
    target.refresh();
  }
});
headerTemplateProperty.register(AccordionBase);

export const headerTemplatesProperty = new Property<AccordionBase, string | Array<KeyedTemplate>>({
  name: 'headerTemplates', valueConverter: (value) => {
    if (typeof value === 'string') {
      return Builder.parseMultipleTemplates(value);
    }

    return value;
  }
});
headerTemplatesProperty.register(AccordionBase);

export const itemHeaderTemplateProperty = new Property<AccordionBase, string>({
  name: 'itemHeaderTemplate',
  affectsLayout: true,
  valueChanged: (target) => {
    target.refresh();
  }
});
itemHeaderTemplateProperty.register(AccordionBase);


export const itemHeaderTemplatesProperty = new Property<AccordionBase, string | Array<KeyedTemplate>>({
  name: 'itemHeaderTemplates', valueConverter: (value) => {
    if (typeof value === 'string') {
      return Builder.parseMultipleTemplates(value);
    }

    return value;
  }
});

itemHeaderTemplatesProperty.register(AccordionBase);

export const itemContentTemplateProperty = new Property<AccordionBase, string>({
  name: 'itemContentTemplate',
  affectsLayout: true,
  valueChanged: (target) => {
    target.refresh();
  }
});
itemContentTemplateProperty.register(AccordionBase);

export const itemContentTemplatesProperty = new Property<AccordionBase, string | Array<KeyedTemplate>>({
  name: 'itemContentTemplates', valueConverter: (value) => {
    if (typeof value === 'string') {
      return Builder.parseMultipleTemplates(value);
    }

    return value;
  }
});
itemContentTemplatesProperty.register(AccordionBase);

export const footerTemplateProperty = new Property<AccordionBase, string>({
  name: 'footerTemplate',
  affectsLayout: true,
  valueChanged: (target) => {
    target.refresh();
  }
});

footerTemplateProperty.register(AccordionBase);


export const footerTemplatesProperty = new Property<AccordionBase, string | Array<KeyedTemplate>>({
  name: 'footerTemplates', valueConverter: (value) => {
    if (typeof value === 'string') {
      return Builder.parseMultipleTemplates(value);
    }

    return value;
  }
});
footerTemplatesProperty.register(AccordionBase);

export const itemsProperty = new Property<AccordionBase, any>({
  name: 'items',
  affectsLayout: true,
  valueChanged: (target, oldValue, newValue) => {
    if (oldValue instanceof Observable) {
      removeWeakEventListener(oldValue, ObservableArray.changeEvent, target._onItemsChanged, target);
    }

    if (newValue instanceof Observable) {
      addWeakEventListener(newValue, ObservableArray.changeEvent, target._onItemsChanged, target);
    }

    target.refresh();
  }
});

itemsProperty.register(AccordionBase);


export const selectedIndexesProperty = new Property<AccordionBase, any>({
  name: 'selectedIndexes',
  defaultValue: [],
  valueChanged: (target, oldValue, newValue) => {

    target.notify({
      eventName: AccordionBase.selectedIndexesChangeEvent,
      object: target,
      oldIndex: oldValue,
      newIndex: newValue
    });

    target.updateNativeIndexes(oldValue, newValue);
  }
});

selectedIndexesProperty.register(AccordionBase);


const defaultRowHeight: Length = 'auto';

export const headerRowHeightProperty = new CoercibleProperty<AccordionBase, Length>({
  name: 'headerRowHeight', defaultValue: defaultRowHeight, equalityComparer: Length.equals,
  coerceValue: (target, value) => {
    // We coerce to default value if we don't have display density.
    return target.nativeViewProtected ? value : defaultRowHeight;
  },
  valueChanged: (target, oldValue, newValue) => {
    target._effectiveHeaderRowHeight = Length.toDevicePixels(newValue, autoEffectiveRowHeight);
    target._onHeaderRowHeightPropertyChanged(oldValue, newValue);
  }, valueConverter: Length.parse
});
headerRowHeightProperty.register(AccordionBase);

export const itemHeaderRowHeightProperty = new CoercibleProperty<AccordionBase, Length>({
  name: 'itemHeaderRowHeight', defaultValue: defaultRowHeight, equalityComparer: Length.equals,
  coerceValue: (target, value) => {
    // We coerce to default value if we don't have display density.
    return target.nativeViewProtected ? value : defaultRowHeight;
  },
  valueChanged: (target, oldValue, newValue) => {
    target._effectiveItemHeaderRowHeight = Length.toDevicePixels(newValue, autoEffectiveRowHeight);
    target._onItemHeaderRowHeightPropertyChanged(oldValue, newValue);
  }, valueConverter: Length.parse
});
itemHeaderRowHeightProperty.register(AccordionBase);

export const itemContentRowHeightProperty = new CoercibleProperty<AccordionBase, Length>({
  name: 'itemContentRowHeight', defaultValue: defaultRowHeight, equalityComparer: Length.equals,
  coerceValue: (target, value) => {
    // We coerce to default value if we don't have display density.
    return target.nativeViewProtected ? value : defaultRowHeight;
  },
  valueChanged: (target, oldValue, newValue) => {
    target._effectiveItemContentRowHeight = Length.toDevicePixels(newValue, autoEffectiveRowHeight);
    target._onItemContentRowHeightPropertyChanged(oldValue, newValue);
  }, valueConverter: Length.parse
});
itemContentRowHeightProperty.register(AccordionBase);

export const footerRowHeightProperty = new CoercibleProperty<AccordionBase, Length>({
  name: 'footerRowHeight', defaultValue: defaultRowHeight, equalityComparer: Length.equals,
  coerceValue: (target, value) => {
    // We coerce to default value if we don't have display density.
    return target.nativeViewProtected ? value : defaultRowHeight;
  },
  valueChanged: (target, oldValue, newValue) => {
    target._effectiveFooterRowHeight = Length.toDevicePixels(newValue, autoEffectiveRowHeight);
    target._onFooterRowHeightPropertyChanged(oldValue, newValue);
  }, valueConverter: Length.parse
});
footerRowHeightProperty.register(AccordionBase);

export const iosEstimatedHeaderRowHeightProperty = new Property<AccordionBase, Length>({
  name: 'iosEstimatedHeaderRowHeight', valueConverter: (v) => Length.parse(v)
});
iosEstimatedHeaderRowHeightProperty.register(AccordionBase);

export const iosEstimatedItemHeaderRowHeightProperty = new Property<AccordionBase, Length>({
  name: 'iosEstimatedItemHeaderRowHeight', valueConverter: (v) => Length.parse(v)
});
iosEstimatedItemHeaderRowHeightProperty.register(AccordionBase);

export const iosEstimatedItemContentRowHeightProperty = new Property<AccordionBase, Length>({
  name: 'iosEstimatedItemContentRowHeight', valueConverter: (v) => Length.parse(v)
});
iosEstimatedItemContentRowHeightProperty.register(AccordionBase);

export const iosEstimatedFooterRowHeightProperty = new Property<AccordionBase, Length>({
  name: 'iosEstimatedFooterRowHeight', valueConverter: (v) => Length.parse(v)
});
iosEstimatedFooterRowHeightProperty.register(AccordionBase);
