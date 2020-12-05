import {
  Color,
  KeyedTemplate,
  View,
  fromObject,
  Observable,
  ProxyViewContainer,
  StackLayout,
  profile,
  LayoutBase
} from '@nativescript/core';
import {
  AccordionBase,
  footerTemplatesProperty,
  headerTemplatesProperty,
  itemContentTemplatesProperty,
  itemHeaderTemplatesProperty,
  ItemsSource,
  selectedIndexesProperty
} from './common';


function notifyForItemAtIndex(owner, nativeView: any, view: any, eventName: string, parentIndex: number, childIndex: number) {
  let args = {
    eventName: eventName,
    object: owner,
    index: parentIndex,
    childIndex: childIndex,
    view: view,
    ios: undefined,
    android: nativeView
  };
  owner.notify(args);
  return args;
}

function notifyForHeaderOrFooterAtIndex(owner, nativeView: any, view: any, eventName: string, parentIndex: number) {
  let args = {
    eventName: eventName,
    object: owner,
    index: parentIndex,
    view: view,
    ios: undefined,
    android: nativeView
  };
  owner.notify(args);
  return args;
}

function notifyForHeaderOrFooterStartAtIndex(owner, eventName: string, parentIndex: number) {
  let args = {eventName: eventName, object: owner, parentIndex: parentIndex};
  owner.notify(args);
  return args;
}

function notifyForItemStartAtIndex(owner, eventName: string, parentIndex: number, childIndex: number) {
  let args = {eventName: eventName, object: owner, parentIndex: parentIndex, childIndex: childIndex};
  owner.notify(args);
  return args;
}

export class Accordion extends AccordionBase {
  private _listAdapter: AccordionListAdapter;
  private _previousGroup: number = -1;
  private _androidViewId: number = -1;
  public _realizedItems = new Map<android.view.View, View>();
  public _realizedHeaderTemplates = new Map<string, Map<android.view.View, View>>();
  public _realizedItemHeaderTemplates = new Map<string, Map<android.view.View, View>>();
  public _realizedItemContentTemplates = new Map<string, Map<android.view.View, View>>();
  public _realizedFooterTemplates = new Map<string, Map<android.view.View, View>>();
  _itemsMap: Map<any, any>;
  _headerMap: Map<any, any>;
  _footerMap: Map<any, any>;
  _expandedViews: Map<any, any>;

  constructor() {
    super();
    this._itemsMap = new Map();
    this._headerMap = new Map();
    this._itemsMap = new Map();
    this._expandedViews = new Map();
  }

  expandAll() {
    const length = this.items.length;
    for (let i = 0; i < length; i++) {
      this.expandItem(i);
    }
  }

  collapseAll() {
    const length = this.items.length;
    for (let i = 0; i < length; i++) {
      this.collapseItem(i);
    }
  }

  get android() {
    return this.nativeView;
  }


  @profile
  public createNativeView() {
    const nativeView = new android.widget.ExpandableListView(this._context);

    nativeView.setDivider(new android.graphics.drawable.ColorDrawable(new Color('transparent').android));
    nativeView.setDividerHeight(1);

    if (this.separatorColor) {
      nativeView.setDivider(new android.graphics.drawable.ColorDrawable(new Color(this.separatorColor).android));
      nativeView.setDividerHeight(1);
    }
    return nativeView;
  }

  public initNativeView() {
    super.initNativeView();
    const that = new WeakRef(this);
    this.nativeView.setOnGroupClickListener(new android.widget.ExpandableListView.OnGroupClickListener({
      onGroupClick(listView: android.widget.ExpandableListView, view: android.view.View, groupPosition: number, id: number): boolean {

        let owner = that.get();
        const data = owner._getParentData(groupPosition);
        let args = {
          eventName: AccordionBase.itemHeaderTapEvent,
          data: data,
          object: owner,
          index: groupPosition,
          view: null,
          ios: null,
          android: view
        };
        owner.notify(args);
        return false;
      }
    }));
    this.nativeView.setOnChildClickListener(new android.widget.ExpandableListView.OnChildClickListener({
      onChildClick(listView: android.widget.ExpandableListView, view: android.view.View, groupPosition: number, childPosition: number, id: number): boolean {
        let owner = that.get();
        const data = owner._getChildData(groupPosition, childPosition);
        let args = {
          eventName: AccordionBase.itemContentTapEvent,
          data: data,
          object: owner,
          childIndex: childPosition,
          index: groupPosition,
          view: null,
          ios: null,
          android: view
        };
        owner.notify(args);
        return false;
      }
    }));
    this.nativeView.setGroupIndicator(null);
    this.nativeView.setOnGroupExpandListener(new android.widget.ExpandableListView.OnGroupExpandListener({
      onGroupExpand(groupPosition: number) {
        const owner = that.get();
        owner._expandedViews.set(groupPosition, true);
        owner.itemExpanded(groupPosition);
        const allowMultiple = String(owner.allowMultiple) === 'true';

        if (!allowMultiple) {
          if ((owner._previousGroup !== -1) && (groupPosition !== owner._previousGroup)) {
            owner.android.collapseGroup(owner._previousGroup);
          }
          owner._previousGroup = groupPosition;
        }

        const oldIndexes = owner.selectedIndexes.slice();
        oldIndexes.push(groupPosition);
        const newIndexes = Array.from(new Set(oldIndexes));
        selectedIndexesProperty.nativeValueChange(owner, newIndexes);

      }
    }));
    this.nativeView.setOnGroupCollapseListener(new android.widget.ExpandableListView.OnGroupCollapseListener({
      onGroupCollapse(groupPosition: number) {
        const owner = that.get();
        owner._expandedViews.set(groupPosition, false);
        owner.itemCollapsed(groupPosition);
        const oldIndexes = owner.selectedIndexes.slice();

        const newIndexes = oldIndexes.filter((item) => {
          if (item !== groupPosition) {
            return item;
          }
        });
        selectedIndexesProperty.nativeValueChange(owner, newIndexes);
      }
    }));
    this._listAdapter = new AccordionListAdapter(new WeakRef(this));
    this.nativeView.setAdapter(this._listAdapter);
    if (this.selectedIndexes) {
      this.selectedIndexes.forEach((item) => {
        this.nativeView.expandGroup(item);
      });
    }

    if (this._androidViewId < 0) {
      this._androidViewId = android.view.View.generateViewId();
    }
    this.nativeView.setId(this._androidViewId);
  }

  public disposeNativeView() {
    const nativeView = this.nativeViewProtected;
    nativeView.setAdapter(new EmptyListAdapter());
    this.clearRealizedCells();
    super.disposeNativeView();
  }

  public eachChildView(callback: (child: View) => boolean): void {
    this._realizedItems.forEach((view, nativeView) => {
      if (view.parent instanceof Accordion) {
        callback(view);
      } else {
        // in some cases (like item is unloaded from another place (like angular) view.parent becomes undefined)
        if (view.parent) {
          callback(<View>view.parent);
        }
      }
    });
  }

  public refresh() {
    if (!this.nativeView || !this.nativeView.getExpandableListAdapter()) {
      return;
    }
    // clear bindingContext when it is not observable because otherwise bindings to items won't reevaluate
    this._realizedItems.forEach((view, nativeView) => {
      if (!(view.bindingContext instanceof Observable)) {
        view.bindingContext = null;
      }
    });

    this._listAdapter.notifyDataSetChanged();
  }

  updateNativeIndexes(oldIndexes: any, newIndexes: any) {
  }

  [selectedIndexesProperty.getDefault](): any {
    return [];
  }

  [selectedIndexesProperty.setNative](value: any) {
    if (value) {
      value.forEach((item) => {
        this.nativeView.expandGroup(item);
      });
    }
  }


  public updateNativeItems(oldItems: any, newItems: any) {
  }

  _selectedIndexUpdatedFromNative(newIndex: number[]) {
    selectedIndexesProperty.nativeValueChange(this, newIndex);
  }

  itemExpanded(index: number) {
    this.notify({
      eventName: 'itemExpanded',
      object: fromObject({
        value: index
      })
    });
  }

  itemCollapsed(index: number) {
    this.notify({
      eventName: 'itemCollapsed',
      object: fromObject({
        value: index
      })
    });
  }

  public expandItem(id: number) {
    this.nativeView.expandGroup(id, true);
  }

  public collapseItem(id: number) {
    this.nativeView.collapseGroup(id);
  }

  public itemIsExpanded(id: number): boolean {
    return this.nativeView.isGroupExpanded(id);
  }

  private clearRealizedCells(): void {
    // clear the cache
    this._realizedItems.forEach((view, nativeView) => {
      if (view.parent) {
        // This is to clear the StackLayout that is used to wrap non LayoutBase & ProxyViewContainer instances.
        if (!(view.parent instanceof Accordion)) {
          this._removeView(view.parent);
        }
        view.parent._removeView(view);
      }
    });

    this._realizedItems.clear();
    this._realizedItemContentTemplates.clear();
    this._realizedItemHeaderTemplates.clear();
    this._realizedHeaderTemplates.clear();
    this._realizedFooterTemplates.clear();
  }


  [headerTemplatesProperty.getDefault](): KeyedTemplate[] {
    return null;
  }

  [headerTemplatesProperty.setNative](value: KeyedTemplate[]) {
    this._headerTemplatesInternal = new Array<KeyedTemplate>(this._defaultHeaderTemplate);
    if (value) {
      this._headerTemplatesInternal = this._headerTemplatesInternal.concat(value);
    }

    this.refresh();
  }


  [itemHeaderTemplatesProperty.getDefault](): KeyedTemplate[] {
    return null;
  }

  [itemHeaderTemplatesProperty.setNative](value: KeyedTemplate[]) {
    this._itemHeaderTemplatesInternal = new Array<KeyedTemplate>(this._defaultItemHeaderTemplate);
    if (value) {
      this._itemHeaderTemplatesInternal = this._itemHeaderTemplatesInternal.concat(value);
    }
    this.refresh();
  }


  [itemContentTemplatesProperty.getDefault](): KeyedTemplate[] {
    return null;
  }

  [itemContentTemplatesProperty.setNative](value: KeyedTemplate[]) {
    this._itemContentTemplatesInternal = new Array<KeyedTemplate>(this._defaultItemContentTemplate);
    if (value) {
      this._itemContentTemplatesInternal = this._itemContentTemplatesInternal.concat(value);
    }
    this.refresh();
  }


  [headerTemplatesProperty.getDefault](): KeyedTemplate[] {
    return null;
  }

  [headerTemplatesProperty.setNative](value: KeyedTemplate[]) {
    this._headerTemplatesInternal = new Array<KeyedTemplate>(this._defaultHeaderTemplate);
    if (value) {
      this._headerTemplatesInternal = this._headerTemplatesInternal.concat(value);
    }
    this.refresh();
  }


  [footerTemplatesProperty.getDefault](): KeyedTemplate[] {
    return null;
  }

  [footerTemplatesProperty.setNative](value: KeyedTemplate[]) {
    this._footerTemplatesInternal = new Array<KeyedTemplate>(this._defaultFooterTemplate);
    if (value) {
      this._footerTemplatesInternal = this._footerTemplatesInternal.concat(value);
    }
    this.refresh();
  }
}

@NativeClass()
class EmptyListAdapter extends android.widget.BaseExpandableListAdapter {

  getChild(i: number, childPosition: number) {
    return null;
  }

  getGroupId(i: number): number {
    return 0;
  }

  getGroup(i: number) {
    return null;
  }

  hasStableIds(): boolean {
    return true;
  }

  getGroupView(groupPosition: number, isExpanded: boolean, convertView: android.view.View, parent: android.view.ViewGroup) {
    return convertView;
  }

  getGroupCount(): number {
    return 0;
  }


  getChildView(groupPosition: number, childPosition: number, isLastChild: boolean, convertView: android.view.View, parent: android.view.ViewGroup) {
    return convertView;
  }

  getChildId(i: number, childPosition: number): number {
    return 0;
  }

  getChildrenCount(groupPosition: number): number {
    return 0;
  }

  isChildSelectable(groupPosition: number, childPosition: number) {
    return false;
  }

  constructor() {
    super();
    return global.__native(this);
  }

}

@NativeClass()
class AccordionListAdapter extends android.widget.BaseExpandableListAdapter {
  owner: WeakRef<Accordion>;

  constructor(owner: WeakRef<Accordion>) {
    super();
    this.owner = owner;
    return global.__native(this);
  }

  getChild(i: number, childPosition: number) {
    const owner = this.owner ? this.owner.get() : null;
    if (!owner) {
      return false;
    }
    if (owner.items && i < owner.items.length) {
      let getItem = owner._getChildData(i, childPosition);
      const item = typeof getItem === 'function' ? getItem.call(owner.items, i) : owner.items[i];

      if (item) {
        let childItems = item[owner.childItems];
        if (!childItems) return null;
        let childItem = childItems.getItem;
        return childItem ? childItem.call(childItems, childPosition) : childItems[childPosition];
      }

      return null;
    }

    return null;
  }

  getGroupId(i: number): number {
    const owner = this.owner ? this.owner.get() : null;
    let item = this.getGroup(i);
    let id = i;
    if (owner && item && owner.items) {
      id = owner.itemIdGenerator(item, i, owner.items);
    }
    return long(id);
  }

  getGroup(i: number) {
    const owner = this.owner ? this.owner.get() : null;
    if (!owner) {
      return false;
    }
    if (owner.items && i < owner.items.length) {
      let getItem = (owner.items as ItemsSource).getItem;
      return getItem ? getItem.call(owner.items, i) : owner.items[i];
    }

    return null;
  }

  hasStableIds(): boolean {
    return true;
  }

  getGroupView(groupPosition: number, isExpanded: boolean, convertView: android.view.View, parent: android.view.ViewGroup) {
    const owner = this.owner ? this.owner.get() : null;

    if (!owner) {
      return null;
    }

    let totalItemCount = owner.items ? owner.items.length : 0;
    if (groupPosition === (totalItemCount - 1)) {
      owner.notify({eventName: AccordionBase.loadMoreItemsEvent, object: owner});
    }

    let template = owner._getItemHeaderTemplate(groupPosition);

    let view: View;
    if (convertView) {
      const cachedItemHeader = owner._realizedItemHeaderTemplates.get(template.key);
      view = cachedItemHeader ? cachedItemHeader.get(convertView) : null;
      if (!view) {
        // throw new Error(`There is no entry with key '${convertView}' in the realized views cache for template with key'${template.key}'.`);
        view = template.createView();
      }
    } else {
      view = template.createView();
    }

    let args = notifyForHeaderOrFooterAtIndex(owner, view ? view.nativeView : null, view, AccordionBase.itemHeaderLoadingEvent, groupPosition);

    owner.notify(args);

    if (!args.view) {
      args.view = owner._getDefaultItemHeaderContent(groupPosition);
    }


    if (args.view) {
      if (owner._effectiveItemHeaderRowHeight > -1) {
        args.view.height = owner.itemHeaderRowHeight;
      }

      owner._prepareItemHeader(args.view, groupPosition);
      if (!args.view.parent) {
        // Proxy containers should not get treated as layouts.
        // Wrap them in a real layout as well.
        if (args.view instanceof LayoutBase &&
          !(args.view instanceof ProxyViewContainer)) {
          owner._addView(args.view);
          convertView = args.view.nativeViewProtected;
        } else {
          let sp = new StackLayout();
          sp.addChild(args.view);
          owner._addView(sp);

          convertView = sp.nativeViewProtected;
        }
      }

      // Cache the view for recycling
      let realizedItemsForTemplateKey = owner._realizedItemHeaderTemplates.get(template.key);
      if (!realizedItemsForTemplateKey) {
        realizedItemsForTemplateKey = new Map<android.view.View, View>();
        owner._realizedItemHeaderTemplates.set(template.key, realizedItemsForTemplateKey);
      }
      realizedItemsForTemplateKey.set(convertView, args.view);
      owner._realizedItems.set(convertView, args.view);
    }

    return convertView;


  }

  getGroupCount(): number {
    const owner = this.owner ? this.owner.get() : null;
    return owner.items && owner.items.length ? owner.items.length : 0;
  }


  getChildView(groupPosition: number, childPosition: number, isLastChild: boolean, convertView: android.view.View, parent: android.view.ViewGroup) {
    const owner = this.owner ? this.owner.get() : null;

    if (!owner) {
      return null;
    }

    let totalItemCount = (owner.items ? owner.items.length : 0) + (owner._getHasHeader() ? 1 : 0) + (owner._getHasFooter() ? 1 : 0);

    if (groupPosition === (totalItemCount - 1)) {
      owner.notify({eventName: AccordionBase.loadMoreItemsEvent, object: owner});
    }

    if (childPosition === 0 && owner._getHasHeader()) {
      let template = owner._getHeaderTemplate(groupPosition);


      let view: View;
      if (convertView) {
        const cachedHeader = owner._realizedHeaderTemplates.get(template.key);
        view = cachedHeader ? cachedHeader.get(convertView) : null;
        if (!view) {
          // TODO check why this needs to be recreated once per header
          // main template works fine w/o header or footer
          view = template.createView();
        }
      } else {
        view = template.createView();
      }

      let args = notifyForHeaderOrFooterAtIndex(owner, view ? view.nativeView : null, view, AccordionBase.headerLoadingEvent, groupPosition);

      owner.notify(args);

      if (!args.view) {
        args.view = owner._getDefaultHeaderContent(groupPosition);
      }


      if (args.view) {
        if (owner._effectiveHeaderRowHeight > -1) {
          args.view.height = owner.footerRowHeight;
        }

        owner._prepareHeaderItem(args.view, groupPosition);
        if (!args.view.parent) {
          // Proxy containers should not get treated as layouts.
          // Wrap them in a real layout as well.
          if (args.view instanceof LayoutBase &&
            !(args.view instanceof ProxyViewContainer)) {
            owner._addView(args.view);
            convertView = args.view.nativeViewProtected;
          } else {
            let sp = new StackLayout();
            sp.addChild(args.view);
            owner._addView(sp);

            convertView = sp.nativeViewProtected;
          }
        }

        // Cache the view for recycling
        let realizedItemsForTemplateKey = owner._realizedHeaderTemplates.get(template.key);
        if (!realizedItemsForTemplateKey) {
          realizedItemsForTemplateKey = new Map<android.view.View, View>();
          owner._realizedHeaderTemplates.set(template.key, realizedItemsForTemplateKey);
        }
        realizedItemsForTemplateKey.set(convertView, args.view);
        owner._realizedItems.set(convertView, args.view);
      }

      return convertView;
    }

    if (isLastChild && owner._getHasFooter()) {
      let template = owner._getFooterTemplate(groupPosition);


      let view: View;
      if (convertView) {
        const cachedFooter = owner._realizedFooterTemplates.get(template.key);
        view = cachedFooter ? cachedFooter.get(convertView) : null;
        if (!view) {
          // TODO check why this needs to be recreated once per footer
          // main template works fine w/o header or footer
          view = template.createView();
        }
      } else {
        view = template.createView();
      }

      let args = notifyForHeaderOrFooterAtIndex(owner, view ? view.nativeView : null, view, AccordionBase.footerLoadingEvent, groupPosition);

      owner.notify(args);

      if (!args.view) {
        args.view = owner._getDefaultFooterContent(groupPosition);
      }


      if (args.view) {
        if (owner._effectiveFooterRowHeight > -1) {
          args.view.height = owner.itemContentRowHeight;
        }

        owner._prepareFooterItem(args.view, groupPosition);
        if (!args.view.parent) {
          // Proxy containers should not get treated as layouts.
          // Wrap them in a real layout as well.
          if (args.view instanceof LayoutBase &&
            !(args.view instanceof ProxyViewContainer)) {
            owner._addView(args.view);
            convertView = args.view.nativeViewProtected;
          } else {
            let sp = new StackLayout();
            sp.addChild(args.view);
            owner._addView(sp);

            convertView = sp.nativeViewProtected;
          }
        }

        // Cache the view for recycling
        let realizedItemsForTemplateKey = owner._realizedFooterTemplates.get(template.key);
        if (!realizedItemsForTemplateKey) {
          realizedItemsForTemplateKey = new Map<android.view.View, View>();
          owner._realizedFooterTemplates.set(template.key, realizedItemsForTemplateKey);
        }
        realizedItemsForTemplateKey.set(convertView, args.view);
        owner._realizedItems.set(convertView, args.view);
      }

      return convertView;
    }

    let template = owner._getItemContentTemplate(groupPosition, childPosition);

    let view: View;
    if (convertView) {
      const cacheContent = owner._realizedItemContentTemplates.get(template.key);
      view = cacheContent ? cacheContent.get(convertView) : null;
      if (!view) {
        // throw new Error(`There is no entry with key '${convertView}' in the realized views cache for template with key'${template.key}'.`);
        view = template.createView();
      }
    } else {
      view = template.createView();
    }

    let args = notifyForItemAtIndex(owner, view ? view.nativeView : null, view, AccordionBase.itemContentLoadingEvent, groupPosition, (childPosition - (owner._getHasHeader() ? 1 : 0)));

    owner.notify(args);

    if (!args.view) {
      args.view = owner._getDefaultItemContentContent(groupPosition, childPosition);
    }


    if (args.view) {
      if (owner._effectiveItemContentRowHeight > -1) {
        args.view.height = owner.itemContentRowHeight;
      }

      owner._prepareItemContent(args.view, groupPosition, childPosition);
      if (!args.view.parent) {
        // Proxy containers should not get treated as layouts.
        // Wrap them in a real layout as well.
        if (args.view instanceof LayoutBase &&
          !(args.view instanceof ProxyViewContainer)) {
          owner._addView(args.view);
          convertView = args.view.nativeViewProtected;
        } else {
          let sp = new StackLayout();
          sp.addChild(args.view);
          owner._addView(sp);

          convertView = sp.nativeViewProtected;
        }
      }

      // Cache the view for recycling
      let realizedItemsForTemplateKey = owner._realizedItemContentTemplates.get(template.key);
      if (!realizedItemsForTemplateKey) {
        realizedItemsForTemplateKey = new Map<android.view.View, View>();
        owner._realizedItemContentTemplates.set(template.key, realizedItemsForTemplateKey);
      }
      realizedItemsForTemplateKey.set(convertView, args.view);
      owner._realizedItems.set(convertView, args.view);
    }

    return convertView;
  }

  getChildId(i: number, childPosition: number): number {
    const owner = this.owner ? this.owner.get() : null;
    let item = this.getChild(i, childPosition);
    let id = parseInt(`${i}${childPosition}`);
    if (owner && item && owner.items) {
      id = owner.childIdGenerator(item, i, childPosition, owner.items);
    }
    return long(id);
  }

  getChildrenCount(groupPosition: number): number {
    const owner = this.owner ? this.owner.get() : null;
    if (owner && owner.items && owner._getParentData(groupPosition)) {
      if (typeof owner._getParentData(groupPosition).get === 'function') {
        return owner._getParentData(groupPosition).get(owner.childItems).length + (owner._getHasHeader() ? 1 : 0) + (owner._getHasFooter() ? 1 : 0);
      } else {
        return owner._getParentData(groupPosition)[owner.childItems].length + (owner._getHasHeader() ? 1 : 0) + (owner._getHasFooter() ? 1 : 0);
      }
    }
    return 0;
  }

  isChildSelectable(groupPosition: number, childPosition: number) {
    return true;
  }

}

