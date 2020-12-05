import {
  KeyedTemplate,
  Length,
  View,
  Color,
  profile,
  fromObject,
  Observable,
  ProxyViewContainer,
  StackLayout,
  Utils
} from '@nativescript/core';
import {
  AccordionBase,
  footerTemplatesProperty,
  headerTemplatesProperty,
  iosEstimatedFooterRowHeightProperty,
  iosEstimatedHeaderRowHeightProperty,
  iosEstimatedItemContentRowHeightProperty,
  iosEstimatedItemHeaderRowHeightProperty,
  itemContentTemplatesProperty,
  itemHeaderTemplatesProperty,
  selectedIndexesProperty
} from './common';

export const ITEMTAP = 'itemTap';

const DEFAULT_HEIGHT: number = 44;
const infinity = Utils.layout.makeMeasureSpec(0, Utils.layout.UNSPECIFIED);

function notifyForItemAtIndex(owner, nativeView: any, view: any, eventName: string, indexPath: NSIndexPath) {
  let args = {
    eventName: eventName,
    object: owner,
    index: indexPath.section,
    childIndex: indexPath.row,
    view: view,
    ios: nativeView,
    android: undefined
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
    ios: nativeView,
    android: undefined
  };
  owner.notify(args);
  return args;
}

const DefaultAccordionHeaderViewHeight = 44.0;


interface ChildItemIndex {
  _accordionChildItemIndex?: number;
  _accordionItemIndex?: number;
}

interface ItemIndex {
  _accordionItemIndex?: number;
}

type ChildItemView = View & ChildItemIndex;

type ItemView = View & ItemIndex;

export class Accordion extends AccordionBase {
  private _preparingItemHeaderCell: boolean;
  private _preparingItemContentCell: boolean;
  private _preparingHeaderCell: boolean;
  private _preparingFooterCell: boolean;
  _isDataDirty: boolean;

  public updateNativeItems(oldItems: any, newItems: any) {
    this._ios.reloadData();
  }

  _expandedViews: Map<any, any>;
  _indexSet: NSMutableIndexSet;

  private _itemContentHeights: Array<number>;
  private _itemHeaderHeights: Array<number>;
  private _headerHeights: Array<number>;
  private _footerHeights: Array<number>;
  private _ios: UITableView;
  private _accordion;
  public widthMeasureSpec: number;
  public heightMeasureSpec: number;
  nativeViewProtected: UITableViewImpl;
  _dataSource: AccordionDataSource;
  _delegate;
  private _map: Map<AccordionItemContentCell, ChildItemView>;
  private _mapItemHeader: Map<AccordionItemHeaderCell, ItemView>;
  private _mapItemContent: Map<AccordionItemContentCell, ChildItemView>;
  private _mapHeader: Map<AccordionHeaderCell, ItemView>;
  private _mapFooter: Map<AccordionFooterCell, ItemView>;

  constructor() {
    super();
    this._itemContentHeights = [];
    this._itemHeaderHeights = [];
    this._headerHeights = [];
    this._footerHeights = [];
    this._map = new Map<AccordionItemContentCell, ChildItemView>();
    this._mapItemContent = new Map<AccordionItemContentCell, ChildItemView>();
    this._mapItemHeader = new Map<AccordionHeaderCell, ItemView>();
    this._mapHeader = new Map<AccordionHeaderCell, ItemView>();
    this._mapFooter = new Map<AccordionFooterCell, ItemView>();
  }


  public createNativeView() {
    return UITableViewImpl.initWithOwner(new WeakRef<Accordion>(this));
  }

  estimatedItemHeaderRowHeight = DEFAULT_HEIGHT;
  estimatedItemContentRowHeight = DEFAULT_HEIGHT;
  estimatedHeaderRowHeight = DEFAULT_HEIGHT;
  estimatedFooterRowHeight = DEFAULT_HEIGHT;

  public initNativeView() {
    super.initNativeView();
    const nativeView = this.nativeViewProtected;
    nativeView.registerClassForCellReuseIdentifier(AccordionItemHeaderCell.class(), this._defaultItemHeaderTemplate.key);
    nativeView.registerClassForCellReuseIdentifier(AccordionItemContentCell.class(), this._defaultItemContentTemplate.key);
    nativeView.registerClassForCellReuseIdentifier(AccordionHeaderCell.class(), this._defaultHeaderTemplate.key);
    nativeView.registerClassForCellReuseIdentifier(AccordionFooterCell.class(), this._defaultFooterTemplate.key);
    // nativeView.autoresizingMask = UIViewAutoresizing.None;
    nativeView.estimatedRowHeight = DEFAULT_HEIGHT;
    nativeView.rowHeight = UITableViewAutomaticDimension;

    this.ios.separatorColor = UIColor.clearColor;

    this.ios.tableFooterView = UIView.new();
    if (this.separatorColor) {
      this.ios.separatorColor = new Color(this.separatorColor).ios;
    }
    this._dataSource = AccordionDataSource.initWithOwner(new WeakRef(this));
    this._delegate = UITableViewDelegateImpl.initWithOwner(new WeakRef(this));
    this._setNativeClipToBounds();
    this._expandedViews = new Map();
    this._indexSet = NSMutableIndexSet.alloc().init();
  }


  @profile
  public onLoaded() {
    super.onLoaded();
    if (this._isDataDirty) {
      this.requestLayout();
      this.refresh();
    }
    this.ios.dataSource = this._dataSource;
    this.ios.delegate = this._delegate;
  }

  public onUnloaded() {
    this.ios.delegate = null;
    super.onUnloaded();
  }


  public getItemHeaderHeight(index: number): number {
    return this._itemHeaderHeights[index];
  }

  public setItemHeaderHeight(index: number, value: number): void {
    this._itemHeaderHeights[index] = value;
  }

  public getItemContentHeight(index: number): number {
    return this._itemContentHeights[index];
  }

  public setItemContentHeight(index: number, value: number): void {
    this._itemContentHeights[index] = value;
  }


  public getHeaderHeight(index: number): number {
    return this._headerHeights[index];
  }

  public setHeaderHeight(index: number, value: number): void {
    this._headerHeights[index] = value;
  }

  public getFooterHeight(index: number): number {
    return this._footerHeights[index];
  }

  public setFooterHeight(index: number, value: number): void {
    this._footerHeights[index] = value;
  }

  public disposeNativeView() {
    this.ios.delegate = null;
    if (this._indexSet) {
      this._indexSet.removeAllIndexes();
    }
  }

  _setNativeClipToBounds() {
    this.ios.clipsToBounds = true;
  }

  get ios() {
    return this.nativeViewProtected;
  }

  public refresh() {
    // clear bindingContext when it is not observable because otherwise bindings to items won't reevaluate
    this._map.forEach((view, nativeView, map) => {
      if (!(view.bindingContext instanceof Observable)) {
        view.bindingContext = null;
      }
    });

    this._mapItemContent.forEach((view, nativeView, map) => {
      if (!(view.bindingContext instanceof Observable)) {
        view.bindingContext = null;
      }
    });

    this._mapItemHeader.forEach((view, nativeView, map) => {
      if (!(view.bindingContext instanceof Observable)) {
        view.bindingContext = null;
      }
    });
    this._mapHeader.forEach((view, nativeView, map) => {
      if (!(view.bindingContext instanceof Observable)) {
        view.bindingContext = null;
      }
    });

    this._mapFooter.forEach((view, nativeView, map) => {
      if (!(view.bindingContext instanceof Observable)) {
        view.bindingContext = null;
      }
    });

    if (this.isLoaded) {
      this.ios.reloadData();
      this.requestLayout();
      this._isDataDirty = false;
    } else {
      this._isDataDirty = true;
    }
  }

  _selectedIndexesUpdatedFromNative(newIndexes: any) {
    selectedIndexesProperty.nativeValueChange(this, newIndexes);
  }

  public scrollToIndex(index: number) {
    if (this.ios) {
      this.ios.scrollToRowAtIndexPathAtScrollPositionAnimated(NSIndexPath.indexPathForItemInSection(index, 0),
        UITableViewScrollPosition.Top, false);
    }
  }

  public requestLayout(): void {
    // When preparing cell don't call super - no need to invalidate our measure when cell desiredSize is changed.
    if (!this._preparingItemHeaderCell || !this._preparingItemContentCell || !this._preparingFooterCell || !this._preparingHeaderCell) {
      super.requestLayout();
    }
  }

  public measure(widthMeasureSpec: number, heightMeasureSpec: number): void {
    this.widthMeasureSpec = widthMeasureSpec;
    // @ts-ignore
    let changed = this._setCurrentMeasureSpecs(widthMeasureSpec, heightMeasureSpec);
    super.measure(widthMeasureSpec, heightMeasureSpec);
    if (changed) {
      this.ios.reloadData();
    }
  }

  public onLayout(left: number, top: number, right: number, bottom: number): void {
    super.onLayout(left, top, right, bottom);
    this._mapItemHeader.forEach((childView, accordionHeader) => {
      let rowHeight = this._effectiveItemHeaderRowHeight;
      let cellHeight = rowHeight > 0 ? rowHeight : this.getItemHeaderHeight(childView._accordionItemIndex);
      if (cellHeight) {
        let width = Utils.layout.getMeasureSpecSize(this.widthMeasureSpec);
        View.layoutChild(this, childView, 0, 0, width, cellHeight);
      }
    });

    this._map.forEach((childView, accordionCell) => {
      let rowHeight = this._effectiveItemContentRowHeight;
      let cellHeight = rowHeight > 0 ? rowHeight : this.getItemContentHeight(parseInt(`${childView._accordionItemIndex + 1}${childView._accordionChildItemIndex - 1 - (this._getHasHeader() ? 1 : 0)}`));
      if (cellHeight) {
        let width = Utils.layout.getMeasureSpecSize(this.widthMeasureSpec);
        View.layoutChild(this, childView, 0, 0, width, cellHeight);
      }
    });


    this._mapHeader.forEach((childView, accordionHeaderCell) => {
      let rowHeight = this._effectiveHeaderRowHeight;
      let cellHeight = rowHeight > 0 ? rowHeight : this.getItemHeaderHeight(childView._accordionItemIndex);
      if (cellHeight) {
        let width = Utils.layout.getMeasureSpecSize(this.widthMeasureSpec);
        View.layoutChild(this, childView, 0, 0, width, cellHeight);
      }
    });


    this._mapFooter.forEach((childView, accordionFooterCell) => {
      let rowHeight = this._effectiveFooterRowHeight;
      let cellHeight = rowHeight > 0 ? rowHeight : this.getItemHeaderHeight(childView._accordionItemIndex);
      if (cellHeight) {
        let width = Utils.layout.getMeasureSpecSize(this.widthMeasureSpec);
        View.layoutChild(this, childView, 0, 0, width, cellHeight);
      }
    });
  }

  public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {
    super.onMeasure(widthMeasureSpec, heightMeasureSpec);

    this._map.forEach((childView, accordionCell) => {
      // @ts-ignore
      View.measureChild(this, childView, childView._currentWidthMeasureSpec, childView._currentHeightMeasureSpec);
    });

    this._mapItemHeader.forEach((childView, accordionHeader) => {
      // @ts-ignore
      View.measureChild(this, childView, childView._currentWidthMeasureSpec, childView._currentHeightMeasureSpec);
    });

    this._mapItemContent.forEach((childView, accordionCell) => {
      // @ts-ignore
      View.measureChild(this, childView, childView._currentWidthMeasureSpec, childView._currentHeightMeasureSpec);
    });

    this._mapHeader.forEach((childView, accordionHeaderCell) => {
      // @ts-ignore
      View.measureChild(this, childView, childView._currentWidthMeasureSpec, childView._currentHeightMeasureSpec);
    });

    this._mapFooter.forEach((childView, accordionFooterCell) => {
      // @ts-ignore
      View.measureChild(this, childView, childView._currentWidthMeasureSpec, childView._currentHeightMeasureSpec);
    });
  }

  private _layoutItemHeaderCell(cellView: View, indexPath: NSIndexPath): number {
    if (cellView) {
      const rowHeight = this._effectiveItemHeaderRowHeight;
      const heightMeasureSpec: number = rowHeight >= 0 ? Utils.layout.makeMeasureSpec(rowHeight, Utils.layout.EXACTLY) : infinity;
      const measuredSize = View.measureChild(this, cellView, this.widthMeasureSpec, heightMeasureSpec);
      const height = measuredSize.measuredHeight;
      this.setItemHeaderHeight(indexPath.section, height);
      return height;
    }

    return this.ios.estimatedItemHeaderRowHeight;
  }

  private _layoutHeaderCell(cellView: View, indexPath: NSIndexPath): number {
    if (cellView) {
      const rowHeight = this._effectiveHeaderRowHeight;
      const heightMeasureSpec: number = rowHeight >= 0 ? Utils.layout.makeMeasureSpec(rowHeight, Utils.layout.EXACTLY) : infinity;
      const measuredSize = View.measureChild(this, cellView, this.widthMeasureSpec, heightMeasureSpec);
      const height = measuredSize.measuredHeight;
      this.setHeaderHeight(indexPath.section, height);
      return height;
    }

    return this.ios.estimatedHeaderRowHeight;
  }

  private _layoutItemContentCell(cellView: View, indexPath: NSIndexPath): number {
    if (cellView) {
      const rowHeight = this._effectiveItemContentRowHeight;
      const heightMeasureSpec: number = rowHeight >= 0 ? Utils.layout.makeMeasureSpec(rowHeight, Utils.layout.EXACTLY) : infinity;
      const measuredSize = View.measureChild(this, cellView, this.widthMeasureSpec, heightMeasureSpec);
      const height = measuredSize.measuredHeight;
      this.setItemContentHeight(parseInt(`${indexPath.section + 1}${indexPath.row - 1 - (this._getHasHeader() ? 1 : 0)}`), height);
      return height;
    }

    return this.ios.estimatedItemContentRowHeight;
  }

  private _layoutFooterCell(cellView: View, indexPath: NSIndexPath): number {
    if (cellView) {
      const rowHeight = this._effectiveFooterRowHeight;
      const heightMeasureSpec: number = rowHeight >= 0 ? Utils.layout.makeMeasureSpec(rowHeight, Utils.layout.EXACTLY) : infinity;
      const measuredSize = View.measureChild(this, cellView, this.widthMeasureSpec, heightMeasureSpec);
      const height = measuredSize.measuredHeight;
      this.setFooterHeight(indexPath.section, height);
      return height;
    }

    return this.ios.estimatedFooterRowHeight;
  }

  public _prepareItemHeaderCell(cell: AccordionItemHeaderCell, indexPath: NSIndexPath): number {
    cell.selectionStyle = UITableViewCellSelectionStyle.None;
    let cellHeight: number;
    try {
      this._preparingItemHeaderCell = true;
      let view: ItemView = cell.view;

      if (!view) {
        view = this._getItemHeaderTemplate(indexPath.section).createView();
      }

      let args = {
        eventName: AccordionBase.itemHeaderLoadingEvent,
        object: this,
        index: indexPath.section,
        view: view,
        ios: null,
        android: undefined
      };

      this.notify(args);
      view = args.view || this._getDefaultItemHeaderContent(indexPath.section);

      // Proxy containers should not get treated as layouts.
      // Wrap them in a real layout as well.
      if (view instanceof ProxyViewContainer) {
        let sp = new StackLayout();
        sp.addChild(view);
        view = sp;
      }

      // If cell is reused it have old content - remove it first.
      if (!cell.view) {
        cell.owner = new WeakRef(view);
      } else if (cell.view !== view) {
        this._removeItemHeaderContainer(cell);
        (<UIView>cell.view.nativeViewProtected).removeFromSuperview();
        cell.owner = new WeakRef(view);
      }

      this._prepareItemHeader(view, indexPath.section);
      view._accordionItemIndex = indexPath.section;
      this._mapItemHeader.set(cell, view);

      // We expect that views returned from itemLoading are new (e.g. not reused).
      if (view && !view.parent) {
        this._addView(view);
        cell.contentView.addSubview(view.nativeViewProtected);
      }

      cellHeight = this._layoutItemHeaderCell(view, indexPath);
    } finally {
      this._preparingItemHeaderCell = false;
    }
    return cellHeight;
  }

  public _prepareItemContentCell(cell: AccordionItemContentCell, indexPath: NSIndexPath): number {
    let cellHeight: number;
    try {
      this._preparingItemContentCell = true;
      let view: ChildItemView = cell.view;

      if (!view) {
        view = this._getItemContentTemplate(indexPath.section, indexPath.row).createView();
      }

      let args = {
        eventName: AccordionBase.itemContentLoadingEvent,
        object: this,
        index: indexPath.section,
        childIndex: (indexPath.row - (1 + (this._getHasHeader() ? 1 : 0))),
        view: view,
        ios: null,
        android: undefined
      };

      this.notify(args);

      view = args.view || this._getDefaultItemContentContent(indexPath.section, indexPath.row);

      // Proxy containers should not get treated as layouts.
      // Wrap them in a real layout as well.
      if (view instanceof ProxyViewContainer) {
        let sp = new StackLayout();
        sp.addChild(view);
        view = sp;
      }

      // If cell is reused it have old content - remove it first.
      if (!cell.view) {
        cell.owner = new WeakRef(view);
      } else if (cell.view !== view) {
        this._removeItemContentContainer(cell);
        (<UIView>cell.view.nativeViewProtected).removeFromSuperview();
        cell.owner = new WeakRef(view);
      }

      this._prepareItemContent(view, indexPath.section, indexPath.row);
      view._accordionChildItemIndex = indexPath.row;
      view._accordionItemIndex = indexPath.section;
      this._map.set(cell, view);

      // We expect that views returned from itemLoading are new (e.g. not reused).
      if (view && !view.parent) {
        this._addView(view);
        cell.contentView.addSubview(view.nativeViewProtected);
      }

      cellHeight = this._layoutItemContentCell(view, indexPath);
    } finally {
      this._preparingItemContentCell = false;
    }
    return cellHeight;
  }

  public _prepareHeaderCell(cell: AccordionHeaderCell, indexPath: NSIndexPath): number {
    let cellHeight: number;
    try {
      this._preparingHeaderCell = true;
      let view: ChildItemView = cell.view;
      if (!view) {
        view = this._getHeaderTemplate(indexPath.section).createView();
      }

      let args = {
        eventName: AccordionBase.footerLoadingEvent,
        object: this,
        index: indexPath.section,
        view: view,
        ios: null,
        android: undefined
      };

      this.notify(args);

      view = args.view || this._getDefaultHeaderContent(indexPath.row);

      // Proxy containers should not get treated as layouts.
      // Wrap them in a real layout as well.
      if (view instanceof ProxyViewContainer) {
        let sp = new StackLayout();
        sp.addChild(view);
        view = sp;
      }

      // If cell is reused it have old content - remove it first.
      if (!cell.view) {
        cell.owner = new WeakRef(view);
      } else if (cell.view !== view) {
        this._removeHeaderContainer(cell);
        (<UIView>cell.view.nativeViewProtected).removeFromSuperview();
        cell.owner = new WeakRef(view);
      }

      this._prepareItemHeader(view, indexPath.section);
      view._accordionChildItemIndex = indexPath.section;
      this._map.set(cell, view);

      // We expect that views returned from itemLoading are new (e.g. not reused).
      if (view && !view.parent) {
        this._addView(view);
        cell.contentView.addSubview(view.nativeViewProtected);
      }

      cellHeight = this._layoutHeaderCell(view, indexPath);
    } finally {
      this._preparingHeaderCell = false;
    }
    return cellHeight;
  }

  public _prepareFooterCell(cell: AccordionFooterCell, indexPath: NSIndexPath): number {
    let cellHeight: number;
    try {
      this._preparingFooterCell = true;
      let view: ChildItemView = cell.view;
      if (!view) {
        view = this._getFooterTemplate(indexPath.section).createView();
      }

      let args = {
        eventName: AccordionBase.headerLoadingEvent,
        object: this,
        index: indexPath.section,
        view: view,
        ios: null,
        android: undefined
      };

      this.notify(args);

      view = args.view || this._getDefaultFooterContent(indexPath.section);

      // Proxy containers should not get treated as layouts.
      // Wrap them in a real layout as well.
      if (view instanceof ProxyViewContainer) {
        let sp = new StackLayout();
        sp.addChild(view);
        view = sp;
      }

      // If cell is reused it have old content - remove it first.
      if (!cell.view) {
        cell.owner = new WeakRef(view);
      } else if (cell.view !== view) {
        this._removeFooterContainer(cell);
        (<UIView>cell.view.nativeViewProtected).removeFromSuperview();
        cell.owner = new WeakRef(view);
      }

      this._prepareFooterItem(view, indexPath.section);
      view._accordionChildItemIndex = indexPath.section;
      this._map.set(cell, view);

      // We expect that views returned from itemLoading are new (e.g. not reused).
      if (view && !view.parent) {
        this._addView(view);
        cell.contentView.addSubview(view.nativeViewProtected);
      }

      cellHeight = this._layoutFooterCell(view, indexPath);
    } finally {
      this._preparingFooterCell = false;
    }
    return cellHeight;
  }

  public _removeItemHeaderContainer(header: AccordionItemHeaderCell): void {
    let view: ItemView = header.view;
    // This is to clear the StackLayout that is used to wrap ProxyViewContainer instances.
    if (!(view.parent instanceof Accordion)) {
      this._removeView(view.parent);
    }

    // No need to request layout when we are removing cells.
    const preparing = this._preparingItemHeaderCell;
    this._preparingItemHeaderCell = true;
    view.parent._removeView(view);
    view._accordionItemIndex = undefined;
    this._preparingItemHeaderCell = preparing;
    this._mapItemHeader.delete(header);
  }

  public _removeItemContentContainer(cell: AccordionItemContentCell): void {
    let view: ChildItemView = cell.view;
    // This is to clear the StackLayout that is used to wrap ProxyViewContainer instances.
    if (!(view.parent instanceof Accordion)) {
      this._removeView(view.parent);
    }

    // No need to request layout when we are removing cells.
    const preparing = this._preparingItemContentCell;
    this._preparingItemContentCell = true;
    view.parent._removeView(view);
    view._accordionChildItemIndex = undefined;
    view._accordionItemIndex = undefined;
    this._preparingItemContentCell = preparing;
    this._map.delete(cell);
  }

  public _removeHeaderContainer(cell: AccordionHeaderCell): void {
    let view: ChildItemView = cell.view;
    // This is to clear the StackLayout that is used to wrap ProxyViewContainer instances.
    if (!(view.parent instanceof Accordion)) {
      this._removeView(view.parent);
    }

    // No need to request layout when we are removing cells.
    const preparing = this._preparingHeaderCell;
    this._preparingHeaderCell = true;
    view.parent._removeView(view);
    view._accordionChildItemIndex = undefined;
    this._preparingHeaderCell = preparing;
    this._mapHeader.delete(cell);
  }

  public _removeFooterContainer(cell: AccordionFooterCell): void {
    let view: ChildItemView = cell.view;
    // This is to clear the StackLayout that is used to wrap ProxyViewContainer instances.
    if (!(view.parent instanceof Accordion)) {
      this._removeView(view.parent);
    }

    // No need to request layout when we are removing cells.
    const preparing = this._preparingFooterCell;
    this._preparingFooterCell = true;
    view.parent._removeView(view);
    view._accordionChildItemIndex = undefined;
    this._preparingFooterCell = preparing;
    this._mapFooter.delete(cell);
  }

  get _childrenCount(): number {
    return this._map.size;
  }

  public eachChildView(callback: (child: View) => boolean): void {
    this._map.forEach((view, key) => {
      callback(view);
    });
  }

  updateNativeIndexes(oldIndexes: any, newIndexes: any) {
    const allowMultiple = String(this.allowMultiple) === 'true';
    if (this._expandedViews)
      if (newIndexes.toString() === Array.from(this._expandedViews.keys()).toString()) return;
    if (allowMultiple) {
      newIndexes.forEach(index => {
        if (!this._expandedViews.get(index)) {
          this._expandedViews.set(index, true);
          this._indexSet.addIndex(index);
        }
      });
      this.ios.reloadData();
    } else {
      if (newIndexes.length > 0) {
        const index = newIndexes.length - 1;
        const newItems = [index];
        this._expandedViews.clear();
        this._indexSet.removeAllIndexes();
        if (!this._expandedViews.get(index)) {
          this._expandedViews.set(index, true);
          this._indexSet.addIndex(index);
          this.ios.reloadData();
        }
      }
    }
  }

  expandAll(): void {
    const length = this.items ? this.items.length : 0;
    const allowMultiple = String(this.allowMultiple) === 'true';
    if (!allowMultiple) {
      this._expandedViews.clear();
      this._indexSet.removeAllIndexes();
      this._expandedViews.set(length - 1, true);
      this._indexSet.addIndex(length - 1);
      this.ios.reloadData();
      return;
    }
    for (let i = 0; i < length; i++) {
      this._expandedViews.set(i, true);
      this._indexSet.addIndex(0);
    }
    this.ios.reloadData();
  }

  collapseAll(): void {
    this._expandedViews.clear();
    this._indexSet.removeAllIndexes();
    this.ios.reloadData();
  }

  collapseItem(index: number) {
    if (this._expandedViews.has(index)) {
      this._expandedViews.delete(index);
      this._indexSet.removeIndex(index);
      this.ios.reloadData();
    }
  }

  expandItem(index: number) {
    const reloadSection = (index: number) => {
      let section = NSMutableIndexSet.alloc().initWithIndex(index);
      this.ios.reloadSectionsWithRowAnimation(section, UITableViewRowAnimation.Automatic);
    };

    const removeSection = (index: number) => {
      let section = NSMutableIndexSet.alloc().initWithIndex(index);
      this.ios.reloadSectionsWithRowAnimation(section, UITableViewRowAnimation.Bottom);
    };
    const allowMultiple = String(this.allowMultiple) === 'true';

    if (allowMultiple) {
      if (!this._expandedViews.get(index)) {
        this.itemExpanded(index);
        this._expandedViews.set(index, true);
        this._indexSet.addIndex(index);
      } else {
        this._expandedViews.delete(index);
        this._indexSet.removeIndex(index);
        this.itemCollapsed(index);
      }
      reloadSection(index);
      this._selectedIndexesUpdatedFromNative(Array.from(this._expandedViews.keys()));
    } else {

      if (this._expandedViews.has(index)) {
        this._expandedViews.delete(index);
        this._indexSet.removeIndex(index);
        this.itemCollapsed(index);
        reloadSection(index);
      } else if (this._expandedViews.size > 0) {
        const old = this._expandedViews.keys().next().value;
        this._expandedViews.delete(old);
        this._indexSet.removeIndex(old);
        reloadSection(old);
        this.itemCollapsed(old);
        this._expandedViews.set(index, true);
        this._indexSet.addIndex(index);
        reloadSection(index);
        this.itemExpanded(index);
      } else {
        this._expandedViews.set(index, true);
        this._indexSet.addIndex(index);
        this.itemExpanded(index);
        reloadSection(index);
      }
      this._selectedIndexesUpdatedFromNative(Array.from(this._expandedViews.keys()));
    }
  }

  itemIsExpanded(index: number): boolean {
    if (this._expandedViews.has(index)) {
      return this._expandedViews.get(index);
    }
    return false;
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

  public _onHeaderRowHeightPropertyChanged(oldValue: Length, newValue: Length) {
    const value = Utils.layout.toDeviceIndependentPixels(this._effectiveHeaderRowHeight);
    const nativeView = this.ios;

    if (value < 0) {
      nativeView.sectionHeaderHeight = UITableViewAutomaticDimension;
      nativeView.estimatedSectionHeaderHeight = DEFAULT_HEIGHT;
      this._delegate = UITableViewDelegateImpl.initWithOwner(new WeakRef(this));
    } else {
      nativeView.sectionHeaderHeight = value;
      nativeView.estimatedSectionHeaderHeight = value;
      this._delegate = UITableViewRowHeightDelegateImpl.initWithOwner(new WeakRef(this));
    }

    if (this.isLoaded) {
      nativeView.delegate = this._delegate;
    }

    super._onItemHeaderRowHeightPropertyChanged(oldValue, newValue);
  }

  public _onItemHeaderRowHeightPropertyChanged(oldValue: Length, newValue: Length) {
    const value = Utils.layout.toDeviceIndependentPixels(this._effectiveItemHeaderRowHeight);
    const nativeView = this.ios;

    if (value < 0) {
      nativeView.sectionHeaderHeight = UITableViewAutomaticDimension;
      nativeView.estimatedSectionHeaderHeight = DEFAULT_HEIGHT;
      this._delegate = UITableViewDelegateImpl.initWithOwner(new WeakRef(this));
    } else {
      nativeView.sectionHeaderHeight = value;
      nativeView.estimatedSectionHeaderHeight = value;
      this._delegate = UITableViewRowHeightDelegateImpl.initWithOwner(new WeakRef(this));
    }

    if (this.isLoaded) {
      nativeView.delegate = this._delegate;
    }

    super._onItemHeaderRowHeightPropertyChanged(oldValue, newValue);
  }

  public _onItemContentRowHeightPropertyChanged(oldValue: Length, newValue: Length) {
    const value = Utils.layout.toDeviceIndependentPixels(this._effectiveItemContentRowHeight);
    const nativeView = this.ios;

    if (value < 0) {
      nativeView.rowHeight = UITableViewAutomaticDimension;
      nativeView.estimatedRowHeight = DEFAULT_HEIGHT;
      this._delegate = UITableViewDelegateImpl.initWithOwner(new WeakRef(this));
    } else {
      nativeView.rowHeight = value;
      nativeView.estimatedRowHeight = value;
      this._delegate = UITableViewRowHeightDelegateImpl.initWithOwner(new WeakRef(this));
    }

    if (this.isLoaded) {
      nativeView.delegate = this._delegate;
    }

    super._onItemContentRowHeightPropertyChanged(oldValue, newValue);
  }

  public _onFooterRowHeightPropertyChanged(oldValue: Length, newValue: Length) {
    const value = Utils.layout.toDeviceIndependentPixels(this._effectiveFooterRowHeight);
    const nativeView = this.ios;

    if (value < 0) {
      nativeView.sectionHeaderHeight = UITableViewAutomaticDimension;
      nativeView.estimatedSectionHeaderHeight = DEFAULT_HEIGHT;
      this._delegate = UITableViewDelegateImpl.initWithOwner(new WeakRef(this));
    } else {
      nativeView.sectionHeaderHeight = value;
      nativeView.estimatedSectionHeaderHeight = value;
      this._delegate = UITableViewRowHeightDelegateImpl.initWithOwner(new WeakRef(this));
    }

    if (this.isLoaded) {
      nativeView.delegate = this._delegate;
    }

    super._onItemHeaderRowHeightPropertyChanged(oldValue, newValue);
  }

  [itemHeaderTemplatesProperty.getDefault](): KeyedTemplate[] {
    return null;
  }

  [itemHeaderTemplatesProperty.setNative](value: KeyedTemplate[]) {
    this._itemHeaderTemplatesInternal = new Array<KeyedTemplate>(this._defaultItemHeaderTemplate);
    if (value) {
      for (let i = 0, length = value.length; i < length; i++) {
        this.ios.registerClassForCellReuseIdentifier(AccordionItemHeaderCell.class(), `item-header-${value[i].key}`);
      }
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
      for (let i = 0, length = value.length; i < length; i++) {
        this.ios.registerClassForCellReuseIdentifier(AccordionItemContentCell.class(), `item-content-${value[i].key}`);
      }
      this._itemContentTemplatesInternal = this._itemContentTemplatesInternal.concat(value);
    }

    this.refresh();
  }


  [footerTemplatesProperty.getDefault](): KeyedTemplate[] {
    return null;
  }

  [footerTemplatesProperty.setNative](value: KeyedTemplate[]) {
    this._footerTemplatesInternal = new Array<KeyedTemplate>(this._defaultFooterTemplate);
    if (value) {
      for (let i = 0, length = value.length; i < length; i++) {
        this.ios.registerClassForCellReuseIdentifier(AccordionFooterCell.class(), `footer-${value[i].key}`);
      }
      this._footerTemplatesInternal = this._footerTemplatesInternal.concat(value);
    }

    this.refresh();
  }


  [headerTemplatesProperty.getDefault](): KeyedTemplate[] {
    return null;
  }

  [headerTemplatesProperty.setNative](value: KeyedTemplate[]) {
    this._headerTemplatesInternal = new Array<KeyedTemplate>(this._defaultHeaderTemplate);
    if (value) {
      for (let i = 0, length = value.length; i < length; i++) {
        this.ios.registerClassForCellReuseIdentifier(AccordionHeaderCell.class(), `header-${value[i].key}`);
      }
      this._headerTemplatesInternal = this._headerTemplatesInternal.concat(value);
    }

    this.refresh();
  }

  [iosEstimatedHeaderRowHeightProperty.getDefault](): Length {
    return DEFAULT_HEIGHT;
  }

  [iosEstimatedHeaderRowHeightProperty.setNative](value: Length) {
    const nativeView = this.ios;
    const estimatedHeight = Length.toDevicePixels(value, 0);
    nativeView.estimatedHeaderRowHeight = estimatedHeight < 0 ? DEFAULT_HEIGHT : estimatedHeight;
  }

  [iosEstimatedItemHeaderRowHeightProperty.getDefault](): Length {
    return DEFAULT_HEIGHT;
  }

  [iosEstimatedItemHeaderRowHeightProperty.setNative](value: Length) {
    const nativeView = this.ios;
    const estimatedHeight = Length.toDevicePixels(value, 0);
    nativeView.estimatedItemHeaderRowHeight = estimatedHeight < 0 ? DEFAULT_HEIGHT : estimatedHeight;
  }

  [iosEstimatedItemContentRowHeightProperty.getDefault](): Length {
    return DEFAULT_HEIGHT;
  }

  [iosEstimatedItemContentRowHeightProperty.setNative](value: Length) {
    const nativeView = this.ios;
    const estimatedHeight = Length.toDevicePixels(value, 0);
    nativeView.estimatedItemContentRowHeight = estimatedHeight < 0 ? DEFAULT_HEIGHT : estimatedHeight;
  }


  [iosEstimatedFooterRowHeightProperty.getDefault](): Length {
    return DEFAULT_HEIGHT;
  }

  [iosEstimatedFooterRowHeightProperty.setNative](value: Length) {
    const nativeView = this.ios;
    const estimatedHeight = Length.toDevicePixels(value, 0);
    nativeView.estimatedFooterRowHeight = estimatedHeight < 0 ? DEFAULT_HEIGHT : estimatedHeight;
  }
}

@NativeClass()
export class AccordionItemHeaderCell extends UITableViewCell {
  public static initWithEmptyBackground(): AccordionItemHeaderCell {
    const cell = <AccordionHeaderCell>AccordionHeaderCell.new();
    // Clear background by default - this will make cells transparent
    cell.backgroundColor = null;
    return cell;
  }

  initWithStyleReuseIdentifier(style: UITableViewCellStyle, reuseIdentifier: string): this {
    const cell = <this>super.initWithStyleReuseIdentifier(style, reuseIdentifier);
    // Clear background by default - this will make cells transparent
    cell.backgroundColor = null;
    return cell;
  }

  public willMoveToSuperview(newSuperview: UIView): void {
    let parent = <Accordion>(this.view ? this.view.parent : null);

    // When inside ListView and there is no newSuperview this cell is
    // removed from native visual tree so we remove it from our tree too.
    if (parent && !newSuperview) {
      parent._removeItemContentContainer(this);
    }
  }

  public get view(): View {
    return this.owner ? this.owner.get() : null;
  }

  public owner: WeakRef<View>;
}

@NativeClass()
export class AccordionItemContentCell extends UITableViewCell {
  public static initWithEmptyBackground(): AccordionItemContentCell {
    const cell = <AccordionItemContentCell>AccordionItemContentCell.new();
    // Clear background by default - this will make cells transparent
    cell.backgroundColor = null;
    return cell;
  }

  initWithStyleReuseIdentifier(style: UITableViewCellStyle, reuseIdentifier: string): this {
    const cell = <this>super.initWithStyleReuseIdentifier(style, reuseIdentifier);
    // Clear background by default - this will make cells transparent
    cell.backgroundColor = null;
    return cell;
  }

  public willMoveToSuperview(newSuperview: UIView): void {
    let parent = <Accordion>(this.view ? this.view.parent : null);

    // When inside ListView and there is no newSuperview this cell is
    // removed from native visual tree so we remove it from our tree too.
    if (parent && !newSuperview) {
      parent._removeItemContentContainer(this);
    }
  }

  public get view(): View {
    return this.owner ? this.owner.get() : null;
  }

  public owner: WeakRef<View>;
}

@NativeClass()
export class AccordionHeaderCell extends UITableViewCell {
  public static initWithEmptyBackground(): AccordionHeaderCell {
    const cell = <AccordionHeaderCell>AccordionHeaderCell.new();
    // Clear background by default - this will make cells transparent
    cell.backgroundColor = null;
    return cell;
  }

  initWithStyleReuseIdentifier(style: UITableViewCellStyle, reuseIdentifier: string): this {
    const cell = <this>super.initWithStyleReuseIdentifier(style, reuseIdentifier);
    // Clear background by default - this will make cells transparent
    cell.backgroundColor = null;
    return cell;
  }

  public willMoveToSuperview(newSuperview: UIView): void {
    let parent = <Accordion>(this.view ? this.view.parent : null);

    // When inside ListView and there is no newSuperview this cell is
    // removed from native visual tree so we remove it from our tree too.
    if (parent && !newSuperview) {
      parent._removeHeaderContainer(this);
    }
  }

  public get view(): View {
    return this.owner ? this.owner.get() : null;
  }

  public owner: WeakRef<View>;
}

@NativeClass()
export class AccordionFooterCell extends UITableViewCell {
  public static initWithEmptyBackground(): AccordionFooterCell {
    const cell = <AccordionFooterCell>AccordionFooterCell.new();
    // Clear background by default - this will make cells transparent
    cell.backgroundColor = null;
    return cell;
  }

  initWithStyleReuseIdentifier(style: UITableViewCellStyle, reuseIdentifier: string): this {
    const cell = <this>super.initWithStyleReuseIdentifier(style, reuseIdentifier);
    // Clear background by default - this will make cells transparent
    cell.backgroundColor = null;
    return cell;
  }

  public willMoveToSuperview(newSuperview: UIView): void {
    let parent = <Accordion>(this.view ? this.view.parent : null);

    // When inside ListView and there is no newSuperview this cell is
    // removed from native visual tree so we remove it from our tree too.
    if (parent && !newSuperview) {
      parent._removeFooterContainer(this);
    }
  }

  public get view(): View {
    return this.owner ? this.owner.get() : null;
  }

  public owner: WeakRef<View>;
}

@NativeClass()
export class AccordionDataSource extends NSObject implements UITableViewDataSource {
  public static ObjCProtocols = [UITableViewDataSource];
  private _owner: WeakRef<Accordion>;

  public static initWithOwner(owner: WeakRef<Accordion>): AccordionDataSource {
    let dataSource = <AccordionDataSource>AccordionDataSource.new();
    dataSource._owner = owner;
    return dataSource;
  }

  public tableViewNumberOfRowsInSection(tableView: UITableView, section: number) {
    let owner = this._owner.get();
    if (owner._expandedViews.has(section) && owner._expandedViews.get(section)) {
      const parentData = owner && owner.items ? owner._getParentData(section) : [];
      return parentData[owner.childItems] ? (parentData[owner.childItems].length + 1 + (owner._getHasHeader() ? 1 : 0) + (owner._getHasFooter() ? 1 : 0)) : 0;
    } else {
      return 1;
    }
  }

  public numberOfSectionsInTableView(tableView) {
    let owner = this._owner.get();
    return (owner && owner.items) ? owner.items.length : 0;
  }

  public tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath) {
    let owner = this._owner.get();
    let cell: AccordionItemContentCell | AccordionItemHeaderCell | AccordionHeaderCell | AccordionFooterCell;
    const total = this.tableViewNumberOfRowsInSection(tableView, indexPath.section);
    if (indexPath.row === 0) {
      if (owner) {
        let template = owner._getItemHeaderTemplate(indexPath.section);
        cell = <AccordionHeaderCell>(tableView.dequeueReusableCellWithIdentifier(`item-header-${template.key}`) || AccordionItemHeaderCell.initWithEmptyBackground());
        owner._prepareItemHeaderCell(cell, indexPath);

        let cellView: View = cell.view;
        if (cellView && (cellView as any).isLayoutRequired) {
          // Arrange cell views. We do it here instead of _layoutCell because _layoutCell is called
          // from 'tableViewHeightForRowAtIndexPath' method too (in iOS 7.1) and we don't want to arrange the fake cell.
          let width = Utils.layout.getMeasureSpecSize(owner.widthMeasureSpec);
          let rowHeight = owner._effectiveItemHeaderRowHeight;
          let cellHeight = rowHeight > 0 ? rowHeight : owner.getItemHeaderHeight(indexPath.row);
          View.layoutChild(owner, cellView, 0, 0, width, cellHeight ? cellHeight : 0);
        }
      } else {
        cell = <AccordionItemHeaderCell>AccordionItemHeaderCell.initWithEmptyBackground();
      }

      return cell;
    }

    if (indexPath.row === 1 && owner._getHasHeader()) {
      if (owner) {
        let template = owner._getHeaderTemplate(indexPath.section);
        cell = <AccordionHeaderCell>(tableView.dequeueReusableCellWithIdentifier(`header-${template.key}`) || AccordionHeaderCell.initWithEmptyBackground());
        owner._prepareHeaderCell(cell, indexPath);

        let cellView: View = cell.view;
        if (cellView && (cellView as any).isLayoutRequired) {
          // Arrange cell views. We do it here instead of _layoutCell because _layoutCell is called
          // from 'tableViewHeightForRowAtIndexPath' method too (in iOS 7.1) and we don't want to arrange the fake cell.
          let width = Utils.layout.getMeasureSpecSize(owner.widthMeasureSpec);
          let rowHeight = owner._effectiveHeaderRowHeight;
          let cellHeight = rowHeight > 0 ? rowHeight : owner.getHeaderHeight(indexPath.row);
          View.layoutChild(owner, cellView, 0, 0, width, cellHeight ? cellHeight : 0);
        }
      } else {
        cell = <AccordionHeaderCell>AccordionHeaderCell.initWithEmptyBackground();
      }

      return cell;
    }

    if (indexPath.row !== 0 && indexPath.row === total - 1 && owner._getHasFooter()) {
      if (owner) {
        let template = owner._getFooterTemplate(indexPath.section);
        cell = <AccordionFooterCell>(tableView.dequeueReusableCellWithIdentifier(`footer-${template.key}`) || AccordionFooterCell.initWithEmptyBackground());
        owner._prepareFooterCell(cell, indexPath);

        let cellView: View = cell.view;
        if (cellView && (cellView as any).isLayoutRequired) {
          // Arrange cell views. We do it here instead of _layoutCell because _layoutCell is called
          // from 'tableViewHeightForRowAtIndexPath' method too (in iOS 7.1) and we don't want to arrange the fake cell.
          let width = Utils.layout.getMeasureSpecSize(owner.widthMeasureSpec);
          let rowHeight = owner._effectiveFooterRowHeight;
          let cellHeight = rowHeight > 0 ? rowHeight : owner.getFooterHeight(indexPath.row);
          View.layoutChild(owner, cellView, 0, 0, width, cellHeight ? cellHeight : 0);
        }
      } else {
        cell = <AccordionFooterCell>AccordionFooterCell.initWithEmptyBackground();
      }

      return cell;
    }

    if (owner) {
      let template = owner._getItemContentTemplate(indexPath.section, indexPath.row);
      cell = <AccordionItemContentCell>(tableView.dequeueReusableCellWithIdentifier(`item-content-${template.key}`) || AccordionItemContentCell.initWithEmptyBackground());
      owner._prepareItemContentCell(cell, indexPath);

      let cellView: View = cell.view;
      if (cellView && (cellView as any).isLayoutRequired) {
        // Arrange cell views. We do it here instead of _layoutCell because _layoutCell is called
        // from 'tableViewHeightForRowAtIndexPath' method too (in iOS 7.1) and we don't want to arrange the fake cell.
        let width = Utils.layout.getMeasureSpecSize(owner.widthMeasureSpec);
        let rowHeight = owner._effectiveItemContentRowHeight;

        let cellHeight = rowHeight > 0 ? rowHeight : owner.getItemContentHeight(parseInt(`${indexPath.section + 1}${indexPath.row - 1 - (owner._getHasHeader() ? 1 : 0)}`));
        View.layoutChild(owner, cellView, 0, 0, width, cellHeight ? cellHeight : 0);
      }
    } else {
      cell = <AccordionItemContentCell>AccordionItemContentCell.initWithEmptyBackground();
    }

    return cell;
  }

}

@NativeClass()
export class UITableViewRowHeightDelegateImpl extends NSObject implements UITableViewDelegate {
  public static ObjCProtocols = [UITableViewDelegate];

  private _owner: WeakRef<Accordion>;

  public static initWithOwner(owner: WeakRef<Accordion>): UITableViewRowHeightDelegateImpl {
    let delegate = <UITableViewRowHeightDelegateImpl>UITableViewRowHeightDelegateImpl.new();
    delegate._owner = owner;
    return delegate;
  }

  public tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath) {
    let owner = this._owner.get();
    if (owner && (indexPath.row === owner.items.length - 1)) {
      owner.notify({eventName: Accordion.loadMoreItemsEvent, object: owner});
    }
  }

  public tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath {
    let owner = this._owner.get();
    const ios = tableView.cellForRowAtIndexPath(indexPath);
    const total = tableView.numberOfRowsInSection(indexPath.section);
    let args = {
      eventName: '',
      data: null,
      object: owner,
      childIndex: undefined,
      index: null,
      view: null,
      ios: ios,
      android: undefined
    };

    if (indexPath.row === 0) {
      handleTap(owner, indexPath.section, ios);
    } else if (indexPath.row === 1 && owner._getHasHeader()) {
    } else if (indexPath.row !== 0 && indexPath.row === total - 1 && owner._getHasFooter()) {
    } else {
      const data = owner._getChildData(indexPath.section, indexPath.row);
      args.index = indexPath.section;
      args.childIndex = indexPath.row;
      args.eventName = AccordionBase.itemContentTapEvent;
      args.data = data;
      owner.notify(args);
    }
    return indexPath;
  }

  public tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath {
    tableView.deselectRowAtIndexPathAnimated(indexPath, true);
    return indexPath;
  }

  public tableViewHeightForRowAtIndexPath(tableView: UITableViewImpl, indexPath: NSIndexPath): number {
    let owner = this._owner.get();

    const total = tableView.numberOfRowsInSection(indexPath.section);
    if (indexPath.row === 0) {
      if (!owner) {
        return tableView.estimatedItemHeaderRowHeight;
      }

      return Utils.layout.toDeviceIndependentPixels(owner._effectiveItemHeaderRowHeight);
    } else if (indexPath.row === 1 && owner._getHasHeader()) {
      if (!owner) {
        return tableView.estimatedHeaderRowHeight;
      }

      return Utils.layout.toDeviceIndependentPixels(owner._effectiveHeaderRowHeight);
    } else if (indexPath.row !== 0 && indexPath.row === total - 1 && owner._getHasFooter()) {
      if (!owner) {
        return tableView.estimatedFooterRowHeight;
      }

      return Utils.layout.toDeviceIndependentPixels(owner._effectiveFooterRowHeight);
    } else {
      if (!owner) {
        return tableView.estimatedItemContentRowHeight;
      }

      return Utils.layout.toDeviceIndependentPixels(owner._effectiveItemContentRowHeight);
    }

  }

  public tableViewHeightForFooterInSection?(tableView: UITableView, section: number): number {
    return 0;
  }

  public tableViewHeightForHeaderInSection?(tableView: UITableView, section: number): number {
    return 0;
  }
}

@NativeClass()
export class UITableViewDelegateImpl extends NSObject implements UITableViewDelegate {
  public static ObjCProtocols = [UITableViewDelegate];
  private _owner: WeakRef<Accordion>;

  private _measureItemHeaderMap: Map<string, AccordionItemHeaderCell>;
  private _measureItemContentMap: Map<string, AccordionItemContentCell>;
  private _measureHeaderMap: Map<string, AccordionHeaderCell>;
  private _measureFooterMap: Map<string, AccordionFooterCell>;

  public static initWithOwner(owner: WeakRef<Accordion>): UITableViewDelegateImpl {
    let delegate = <UITableViewDelegateImpl>UITableViewDelegateImpl.new();
    delegate._owner = owner;
    delegate._measureItemHeaderMap = new Map<string, AccordionItemHeaderCell>();
    delegate._measureItemContentMap = new Map<string, AccordionItemContentCell>();
    delegate._measureHeaderMap = new Map<string, AccordionHeaderCell>();
    delegate._measureFooterMap = new Map<string, AccordionFooterCell>();
    return delegate;
  }

  public tableViewHeightForRowAtIndexPath(tableView: UITableViewImpl, indexPath: NSIndexPath) {

    const owner = this._owner.get();

    let height;
    const total = tableView.numberOfRowsInSection(indexPath.section);

    if (indexPath.row === 0) {
      if (!owner) {
        return tableView.estimatedItemHeaderRowHeight;
      }


      height = owner.getItemHeaderHeight(indexPath.section);
      if (height === undefined) {
        // in iOS8+ after call to scrollToRowAtIndexPath:atScrollPosition:animated: this method is called before tableViewCellForRowAtIndexPath so we need fake cell to measure its content.
        const template = owner._getItemHeaderTemplate(indexPath.section);
        let cell = this._measureItemHeaderMap.get(template.key);
        if (!cell) {
          cell = (<any>tableView.dequeueReusableCellWithIdentifier(`item-header-${template.key}`)) || AccordionItemHeaderCell.initWithEmptyBackground();
          this._measureItemHeaderMap.set(template.key, cell);
        }

        height = owner._prepareItemHeaderCell(cell, indexPath);
      }

      return Utils.layout.toDeviceIndependentPixels(height);
    }

    if (indexPath.row === 1 && owner._getHasHeader()) {
      if (!owner) {
        return tableView.estimatedHeaderRowHeight;
      }

      height = owner.getHeaderHeight(indexPath.section);
      if (height === undefined) {
        // in iOS8+ after call to scrollToRowAtIndexPath:atScrollPosition:animated: this method is called before tableViewCellForRowAtIndexPath so we need fake cell to measure its content.
        const template = owner._getHeaderTemplate(indexPath.section);
        let cell = this._measureHeaderMap.get(template.key);
        if (!cell) {
          cell = (<any>tableView.dequeueReusableCellWithIdentifier(`header-${template.key}`)) || AccordionHeaderCell.initWithEmptyBackground();
          this._measureHeaderMap.set(template.key, cell);
        }

        height = owner._prepareHeaderCell(cell, indexPath);
      }

      return Utils.layout.toDeviceIndependentPixels(height);
    }

    if (indexPath.row !== 0 && indexPath.row === total - 1 && owner._getHasFooter()) {
      if (!owner) {
        return tableView.estimatedFooterRowHeight;
      }

      let height = owner.getFooterHeight(indexPath.section);
      if (height === undefined) {
        // in iOS8+ after call to scrollToRowAtIndexPath:atScrollPosition:animated: this method is called before tableViewCellForRowAtIndexPath so we need fake cell to measure its content.
        const template = owner._getFooterTemplate(indexPath.section);
        let cell = this._measureFooterMap.get(template.key);
        if (!cell) {
          cell = (<any>tableView.dequeueReusableCellWithIdentifier(`footer-${template.key}`)) || AccordionFooterCell.initWithEmptyBackground();
          this._measureFooterMap.set(template.key, cell);
        }

        height = owner._prepareFooterCell(cell, indexPath);
      }

      return Utils.layout.toDeviceIndependentPixels(height);
    }

    if (!owner) {
      return tableView.estimatedItemContentRowHeight;
    }

    height = owner.getItemContentHeight(parseInt(`${indexPath.section + 1}${indexPath.row - 1 - (owner._getHasHeader() ? 1 : 0)}`));

    if (height === undefined) {
      // in iOS8+ after call to scrollToRowAtIndexPath:atScrollPosition:animated: this method is called before tableViewCellForRowAtIndexPath so we need fake cell to measure its content.
      const template = owner._getItemContentTemplate(indexPath.section, indexPath.row);
      let cell = this._measureItemContentMap.get(template.key);
      if (!cell) {
        cell = (<any>tableView.dequeueReusableCellWithIdentifier(`item-content-${template.key}`)) || AccordionItemContentCell.initWithEmptyBackground();
        this._measureItemContentMap.set(template.key, cell);
      }

      height = owner._prepareItemContentCell(cell, indexPath);
    }

    return Utils.layout.toDeviceIndependentPixels(height);
  }

  public tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath {
    let owner = this._owner.get();
    const ios = tableView.cellForRowAtIndexPath(indexPath);
    const total = tableView.numberOfRowsInSection(indexPath.section);

    let args = {
      eventName: '',
      data: null,
      object: owner,
      childIndex: undefined,
      index: null,
      view: null,
      ios: ios,
      android: undefined
    };

    if (indexPath.row === 0) {
      handleTap(owner, indexPath.section, ios);
    } else if (indexPath.row === 1 && owner._getHasHeader()) {
    } else if (indexPath.row !== 0 && indexPath.row === total - 1 && owner._getHasFooter()) {
    } else {
      const data = owner._getChildData(indexPath.section, indexPath.row);
      args.index = indexPath.section;
      args.childIndex = indexPath.row;
      args.eventName = AccordionBase.itemContentTapEvent;
      args.data = data;
      owner.notify(args);
    }
    return indexPath;
  }

  public tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath) {
    tableView.deselectRowAtIndexPathAnimated(indexPath, true);
    return indexPath;
  }

  public tableViewHeightForFooterInSection?(tableView: UITableView, section: number): number {
    return 0;
  }

  public tableViewHeightForHeaderInSection?(tableView: UITableView, section: number): number {
    return 0;
  }
}

function handleTap(owner, current, view) {

  const data = owner._getParentData(current);
  let _args = {
    eventName: AccordionBase.itemHeaderTapEvent,
    data: data,
    object: owner,
    parentIndex: current,
    view: null,
    ios: view,
    android: undefined
  };
  owner.notify(_args);

  const reloadSection = (index: number) => {
    let section = NSMutableIndexSet.alloc().initWithIndex(index);
    owner.ios.reloadSectionsWithRowAnimation(section, UITableViewRowAnimation.Automatic);
  };

  const removeSection = (index: number) => {
    let section = NSMutableIndexSet.alloc().initWithIndex(index);
    owner.ios.reloadSectionsWithRowAnimation(section, UITableViewRowAnimation.Bottom);
  };
  const allowMultiple = String(owner.allowMultiple) === 'true';


  /**
   *  Checks the allowMultiple property
   */
  if (allowMultiple) {
    /**
     * Checks if the current tapped header is expanded
     * If expanded close item then remove  item from the indexSet
     */
    if (!owner._expandedViews.get(current)) {
      owner.itemExpanded(current);
      owner._expandedViews.set(current, true);
      owner._indexSet.addIndex(current);
    } else {
      owner._expandedViews.delete(current);
      owner._indexSet.removeIndex(current);
      owner.itemCollapsed(current);
    }
    /**
     * Call reload to expand or collapse section
     */
    reloadSection(current);
    owner._selectedIndexesUpdatedFromNative(Array.from(owner._expandedViews.keys()));
  } else {

    if (owner._expandedViews.has(current)) {
      owner._expandedViews.delete(current);
      owner._indexSet.removeIndex(current);
      owner.itemCollapsed(current);
      reloadSection(current);
      // owner.ios.reloadData();
    } else if (owner._expandedViews.size > 0) {
      const old = owner._expandedViews.keys().next().value;
      owner._expandedViews.delete(old);
      owner._indexSet.removeIndex(old);
      reloadSection(old);
      owner.itemCollapsed(old);
      owner._expandedViews.set(current, true);
      owner._indexSet.addIndex(current);
      reloadSection(current);
      owner.itemExpanded(current);
    } else {
      owner._expandedViews.set(current, true);
      owner._indexSet.addIndex(current);
      owner.itemExpanded(current);
      reloadSection(current);
    }
    owner._selectedIndexesUpdatedFromNative(Array.from(owner._expandedViews.keys()));

    /**
     * Call reload to collapse section
     */
    // owner.ios.reloadData();

  }
}

@NativeClass()
export class UITableViewImpl extends UITableView {
  owner: WeakRef<Accordion>;
  estimatedItemHeaderRowHeight = 0;
  estimatedItemContentRowHeight = 0;
  estimatedHeaderRowHeight = 0;
  estimatedFooterRowHeight = 0;

  public static initWithOwner(owner: WeakRef<Accordion>) {
    const table = <UITableViewImpl>UITableViewImpl.new();
    table.owner = owner;
    return table;
  }
}
