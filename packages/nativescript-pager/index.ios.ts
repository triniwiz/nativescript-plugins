import {
  ChangeType,
  Color,
  EventData,
  KeyedTemplate,
  ObservableArray,
  profile,
  ProxyViewContainer,
  StackLayout,
  Utils,
  View,
} from "@nativescript/core";
import * as common from "./common";
import {
  autoplayDelayProperty,
  autoPlayProperty,
  disableSwipeProperty,
  Indicator,
  indicatorColorProperty,
  indicatorProperty,
  indicatorSelectedColorProperty,
  ITEMDISPOSING,
  ItemEventData,
  ITEMLOADING,
  itemsProperty,
  itemTemplatesProperty,
  LOADMOREITEMS,
  Orientation,
  orientationProperty,
  PagerBase,
  selectedIndexProperty,
  showIndicatorProperty,
} from "./common";

export * from './common';
export { ItemsSource, Transformer } from './common';

function notifyForItemAtIndex(owner, nativeView: any, view: any, eventName: string, index: number) {
	let args = {
		eventName: eventName,
		object: owner,
		index: index,
		view: view,
		ios: nativeView,
		android: undefined,
	};
	owner.notify(args);
	return args;
}

declare var CHIPageControlAji, CHIPageControlAleppo, CHIPageControlChimayo, CHIPageControlFresno, CHIPageControlJalapeno, CHIPageControlJaloro, CHIPageControlPuya, PagerPoint;

const main_queue = dispatch_get_current_queue();

const PFLAG_FORCE_LAYOUT = 1;
export class Pager extends PagerBase {
  lastEvent: number = 0;
  private _disableSwipe: boolean = false;
  private _disableAnimation: boolean = false;
  _layout: any; /*UICollectionViewFlowLinearLayoutImpl*/
  _preparingCell: boolean = false;
  _delegate: any; /*UICollectionDelegateImpl*/
  private _dataSource;
  _map: Map<PagerCell, View>;
  borderRadius: number;
  borderWidth: number;
  borderColor: string;
  backgroundColor: any;
  _isDirty: boolean = false;
  _isRefreshing: boolean = false;
  private _pager: UICollectionView;
  private _indicatorView: any;
  private _observableArrayInstance: ObservableArray<any>;
  _isAnimatedScrolling: boolean = false
  _scrollingToIndex = -1;
  _isInit: boolean = false;

  constructor() {
    super();
    this._map = new Map<PagerCell, View>();
    this._childrenViews = new Map<number, View>();
  }

  get pager() {
    return this._pager;
  }

  get indicatorView() {
    return this._indicatorView;
  }

  createNativeView() {
    const nativeView = UIView.new();
    this._layout = UICollectionViewFlowLinearLayoutImpl.new();
    this._layout.scrollDirection =
      UICollectionViewScrollDirection.Horizontal;
    this._layout.minimumInteritemSpacing = 0;
    this._pager = UICollectionView.alloc().initWithFrameCollectionViewLayout(
      CGRectZero,
      this._layout
    );
    this.pager.showsHorizontalScrollIndicator = false;
    this.pager.showsVerticalScrollIndicator = false;
    this.pager.decelerationRate = UIScrollViewDecelerationRateFast;
    nativeView.addSubview(this.pager);
    return nativeView;
  }

  initNativeView() {
    super.initNativeView();
    const nativeView = this.pager;
    nativeView.registerClassForCellWithReuseIdentifier(
      PagerCell.class(),
      this._defaultTemplate.key
    );
    nativeView.backgroundColor = UIColor.clearColor;
    nativeView.autoresizesSubviews = false;
    nativeView.autoresizingMask = UIViewAutoresizing.None;
    nativeView.dataSource = this._dataSource = UICollectionViewDataSourceImpl.initWithOwner(
      new WeakRef(this)
    );
    nativeView.scrollEnabled = !(String(this.disableSwipe) === "true");
    if (this.orientation === "vertical") {
      this._layout.scrollDirection =
        UICollectionViewScrollDirection.Vertical;
      nativeView.alwaysBounceVertical = true;
      nativeView.alwaysBounceHorizontal = false;
    } else {
      this._layout.scrollDirection =
        UICollectionViewScrollDirection.Horizontal;
      nativeView.alwaysBounceHorizontal = true;
      nativeView.alwaysBounceVertical = false;
    }
    this._setIndicator(this.indicator);
    this._delegate = UICollectionDelegateImpl.initWithOwner(
      new WeakRef(this)
    );
    this._setNativeClipToBounds();
    this._initAutoPlay(this.autoPlay);
  }

  _getRealWidthHeight(): { width: number; height: number } {
    let height = 0;
    let width = 0;
    width =
      (Utils.layout.toDeviceIndependentPixels(this._effectiveItemWidth) -
        (this.perPage * 2 * this._getSpacing() +
          this._getPeaking() * 2)) /
      this.perPage;
    height =
      (Utils.layout.toDeviceIndependentPixels(this._effectiveItemHeight) -
        (this.perPage * 2 * this._getSpacing() +
          this._getPeaking() * 2)) /
      this.perPage;
    return { height, width };
  }

  _nextIndex(): number {
    if (this.circularMode) {
      // TODO
      return 0;
    } else {
      let next = this.selectedIndex + 1;
      if (next > this.lastIndex) {
        return 0;
      }
      return next;
    }
  }

  _initAutoPlay(value: boolean) {
    if (!this.items || this.items.length === 0) {
      return;
    }
    if (!value) {
      if (this._autoPlayInterval) {
        clearInterval(this._autoPlayInterval);
        this._autoPlayInterval = undefined;
      }
    } else {
      if (this.isLayoutValid && !this._autoPlayInterval) {
        this._autoPlayInterval = setInterval(() => {
          this.selectedIndex = this._nextIndex();
        }, this.autoPlayDelay);
      }
    }
  }

  getPosition(index: number): number {
    let position = index;
    if (this.circularMode) {
      if (position === 0) {
        position = this.lastDummy;
      } else if (position === this.firstDummy) {
        position = 0;
      } else {
        position = position - 1;
      }
    }
    return position;
  }

  get itemCount(): number {
    return this._childrenCount
      ? this._childrenCount + (this.circularMode ? 2 : 0)
      : 0;
  }

  get lastIndex(): number {
    if (this.items && this.items.length === 0) {
      return 0;
    }
    return this.circularMode ? this.itemCount - 3 : this.itemCount - 1;
  }

  get firstDummy(): number {
    const count = this.itemCount;
    if (count === 0) {
      return 0;
    }
    return this.itemCount - 1;
  }

  get lastDummy(): number {
    return this.lastIndex;
  }

  // @ts-ignore
  get ios(): any /*UIView*/ {
    return this.nativeView;
  }

  private _setIndicator(value: Indicator) {
    if (this._indicatorView) {
      this._indicatorView.removeFromSuperview();
    }
    switch (value) {
      case Indicator.None:
        this._indicatorView = CHIPageControlAji.new();
        break;
      case Indicator.Worm:
        this._indicatorView = CHIPageControlAleppo.new();
        break;
      case Indicator.Fill:
        this._indicatorView = CHIPageControlChimayo.new();
        break;
      case Indicator.Swap:
        this._indicatorView = CHIPageControlPuya.new();
        break;
      case Indicator.THIN_WORM:
        this._indicatorView = CHIPageControlJalapeno.new();
        break;
      case Indicator.Flat:
        this._indicatorView = CHIPageControlJaloro.new();
        break;
      default:
        break;
    }
    this._indicatorView.tintColor = UIColor.whiteColor;
    this._indicatorView.currentPageTintColor = UIColor.whiteColor;
  }

  public get _childrenCount() {
    return this.items
      ? this.items.length
      : this._childrenViews
        ? this._childrenViews.size
        : 0;
  }

  public itemTemplateUpdated(oldData: any, newData: any): void { }

  public _setNativeClipToBounds(): void {
    this.pager.clipsToBounds = true;
  }

  public [orientationProperty.setNative](value: Orientation) {
    if (value === "horizontal") {
      this._layout.scrollDirection =
        UICollectionViewScrollDirection.Horizontal;
    } else {
      this._layout.scrollDirection =
        UICollectionViewScrollDirection.Vertical;
    }
  }

  public eachChildView(callback: (child: View) => boolean): void {
    this._map.forEach((view, key) => {
      callback(view);
    });
  }

  _updateScrollPosition() {
    const view = this.pager as UICollectionView;
    const size =
      this.orientation === "vertical"
        ? view.contentSize.height
        : view.contentSize.width;
    if (!view || size === 0) {
      return;
    }
    this._scrollToIndexAnimated(this.selectedIndex, false);
  }

  [selectedIndexProperty.setNative](value: number) {
    if (this.isLoaded) {
      this.scrollToIndexAnimated(value, !this.disableAnimation);
    }
  }

  [itemTemplatesProperty.getDefault](): KeyedTemplate[] {
    return null;
  }

  [itemTemplatesProperty.setNative](value: KeyedTemplate[]) {
    this._itemTemplatesInternal = new Array<KeyedTemplate>(
      this._defaultTemplate
    );
    if (value) {
      for (let i = 0, length = value.length; i < length; i++) {
        this.pager.registerClassForCellWithReuseIdentifier(
          PagerCell.class(),
          value[i].key
        );
      }
      this._itemTemplatesInternal = this._itemTemplatesInternal.concat(
        value
      );
    }
  }

  [itemsProperty.setNative](value: any) {
    if (this.indicatorView && value && value.length) {
      this.indicatorView.numberOfPages = value.length;
    }
    // remove old instance
    if (this._observableArrayInstance) {
      this._observableArrayInstance.off(
        ObservableArray.changeEvent,
        this._observableArrayHandler
      );
      this._observableArrayInstance = null;
    }
    if (value instanceof ObservableArray) {
      this._observableArrayInstance = value as any;
      this._observableArrayInstance.on(
        ObservableArray.changeEvent,
        this._observableArrayHandler
      );
    } else {
      this.refresh();
    }

    if (!value) {
      this._isInit = false;
    }
    selectedIndexProperty.coerce(this);
  }

  [autoPlayProperty.setNative](value: boolean) {
    this._initAutoPlay(value);
  }

  private _autoPlayInterval: any;

  [autoplayDelayProperty.setNative](value: number) {
    if (this._autoPlayInterval) {
      clearInterval(this._autoPlayInterval);
      this._autoPlayInterval = undefined;
      this._initAutoPlay(this.autoPlay);
    }
  }

  [showIndicatorProperty.setNative](value: boolean) {
    if (!this.indicatorView) {
      this._setIndicator(this.indicatorView);
    }
    if (!this.nativeView) {
      return;
    }
    this.indicatorView.center = CGPointMake(
      this.nativeView.center.x,
      this.nativeView.bounds.size.height -
      this.indicatorView.intrinsicContentSize.height
    );
    const hasParent = this.indicatorView.superview;
    if (value) {
      if (!hasParent) {
        this.nativeView.addSubview(this.indicatorView);
        this.nativeView.bringSubviewToFront(this.indicatorView)
      }
    } else {
      if (hasParent) {
        this.indicatorView.removeFromSuperview();
      }
    }
  }

  private _observableArrayHandler = (args) => {
    if (!this.pager) {
      return;
    }
    if (
      this.indicatorView &&
      this._observableArrayInstance &&
      this._observableArrayInstance.length
    ) {
      this.indicatorView.numberOfPages = this._observableArrayInstance.length;
    }

    const collectionView = this.pager as UICollectionView;
    if (collectionView) {
      // @ts-ignore
      PagerUtils.updateCollection(
        {
          action: args.action,
          index: args.index,
          addedCount: args.addedCount,
          removedCount: args.removed ? args.removed.length : 0
        } as any,
        collectionView
      );
    }
  };

  _onItemsChanged(oldValue: any, newValue: any): void { }

  _scrollToIndexAnimated(index: number, animate: boolean) {
    if (!this.pager) return;
    const contentSize = this.pager.contentSize;
    const size =
      this.orientation === "vertical"
        ? contentSize.height
        : contentSize.width;
    if (size === 0) {
      return;
    }
    if (this._childrenCount === 0) {
      return;
    }
    let maxMinIndex = -1;
    const max = this._childrenCount - 1;
    if (index < 0) {
      maxMinIndex = 0;
    } else if (index > max) {
      maxMinIndex = max;
    } else {
      maxMinIndex = index;
    }

    if (maxMinIndex === -1) {
      maxMinIndex = 0;
    }

    dispatch_async(main_queue, () => {
      this.pager.scrollToItemAtIndexPathAtScrollPositionAnimated(
        NSIndexPath.indexPathForItemInSection(maxMinIndex, 0),
        this.orientation === "vertical"
          ? UICollectionViewScrollPosition.CenteredVertically
          : UICollectionViewScrollPosition.CenteredHorizontally,
        !!animate
      );
      selectedIndexProperty.nativeValueChange(this, maxMinIndex);
    });
  }

  public scrollToIndexAnimated(index: number, animate: boolean) {
    this._scrollToIndexAnimated(index, animate);
  }

  private _reset() {
    if (!this.pager) {
      return;
    }
    this.pager.reloadData();
    this.pager.collectionViewLayout.invalidateLayout();
    this._updateScrollPosition();
  }

  private _refresh() {
    if (!this.pager) {
      return;
    }
    if (this.items instanceof ObservableArray) {
      this.pager.performBatchUpdatesCompletion(() => {
        this._reset();
      }, null);
    } else {
      this._reset();
    }
  }

  refresh() {
    dispatch_async(main_queue, () => {
      this._refresh();
    });
  }

  @profile
  public onLoaded() {
    super.onLoaded();
    if (this.showIndicator && this.indicatorView) {
      this.nativeView.addSubview(this.indicatorView);
      this.nativeView.bringSubviewToFront(this.indicatorView)
    }
    if (!this._isDirty) {
      this.refresh();
      this._isDirty = true;
    }

    this.pager.delegate = this._delegate;

    if (!this.items && this._childrenCount > 0) {
      selectedIndexProperty.coerce(this);
      this._updateScrollPosition();
    }
  }

  public onUnloaded() {
    if (this.pager) {
      this.pager.delegate = null;
    }
    super.onUnloaded();
  }

  public disposeNativeView() {
    this._delegate = null;
    this._dataSource = null;
    this._layout = null;
    if (this._observableArrayInstance) {
      this._observableArrayInstance.off(
        ObservableArray.changeEvent,
        this._observableArrayHandler
      );
      this._observableArrayInstance = null;
    }
    super.disposeNativeView();
  }

  [indicatorProperty.setNative](value: Indicator) {
    this._setIndicator(value);
  }

  [indicatorColorProperty.setNative](value: Color | string) {
    if (this.indicatorView) {
      if (value instanceof Color) {
        this.indicatorView.tintColor = value.ios;
      } else if (Utils.isString(value)) {
        this.indicatorView.tintColor = new Color(value).ios;
      }
    }
  }

  [indicatorSelectedColorProperty.setNative](value: Color | string) {
    if (this.indicatorView) {
      if (value instanceof Color) {
        this.indicatorView.currentPageTintColor = value.ios;
      } else if (Utils.isString(value)) {
        this.indicatorView.currentPageTintColor = new Color(value).ios;
      }
    }
  }

  [disableSwipeProperty.setNative](value: boolean) {
    if (this.pager) {
      this.pager.scrollEnabled = !(String(value) === "true");
    }
    this._disableSwipe = String(value) === "true";
  }

  get disableAnimation(): boolean {
    return this._disableAnimation;
  }

  set disableAnimation(value: boolean) {
    this._disableAnimation = value;
  }

  public _removeContainer(cell: PagerCell, indexPath?: NSIndexPath): void {
    let view = cell.view;

    let args = <ItemEventData>{
      eventName: ITEMDISPOSING,
      object: this,
      index: indexPath.row,
      android: undefined,
      ios: cell,
      view: view,
    };
    this.notify(args);
    view = args.view;
    if (view && view.parent) {
      // This is to clear the StackLayout that is used to wrap ProxyViewContainer instances.
      if (!(view.parent instanceof Pager)) {
        this._removeView(view.parent);
      }

      view.parent._removeView(view);
    }
    this._map.delete(cell);
  }

  
  public measure(widthMeasureSpec: number, heightMeasureSpec: number): void {
    const changed = (this as any)._setCurrentMeasureSpecs(
      widthMeasureSpec,
      heightMeasureSpec
    );
    super.measure(widthMeasureSpec, heightMeasureSpec);
    // @ts-ignore
    let forceLayout = (this._privateFlags & PFLAG_FORCE_LAYOUT) === PFLAG_FORCE_LAYOUT;
    if (changed) {
      dispatch_async(main_queue, () => {
        if (!this.pager) {
          return;
        }
        if (changed) {
          this._updateScrollPosition();
        }
        this._initAutoPlay(this.autoPlay);
      });
    }
  }
  

  

  public onMeasure(
    widthMeasureSpec: number,
    heightMeasureSpec: number
  ): void {
    super.onMeasure(widthMeasureSpec, heightMeasureSpec);
    this._map.forEach((childView: any, pagerCell) => {
      View.measureChild(
        this,
        childView,
        childView._currentWidthMeasureSpec,
        childView._currentHeightMeasureSpec
      );
    });
  }

  public onLayout(left: number, top: number, right: number, bottom: number) {
    super.onLayout(left, top, right, bottom);
    this.pager.frame = this.nativeView.bounds;
    if (this.indicatorView && this.indicatorView.intrinsicContentSize) {
      this.indicatorView.center = CGPointMake(
        this.nativeView.center.x,
        this.nativeView.bounds.size.height -
        this.indicatorView.intrinsicContentSize.height
      );
    }
    const size = this._getSize();
    this._map.forEach((childView, pagerCell) => {
      const width = Utils.layout.toDevicePixels(size.width);
      const height = Utils.layout.toDevicePixels(size.height);
      View.layoutChild(this, childView, 0, 0, width, height);
    });
  }

  public requestLayout(): void {
    // When preparing cell don't call super - no need to invalidate our measure when cell desiredSize is changed.
    if (!this._preparingCell) {
      super.requestLayout();
    }
  }

  public _prepareCell(cell: PagerCell, indexPath: NSIndexPath) {
    try {
      this._preparingCell = true;

      let view = cell.view;
      const template = this._getItemTemplate(indexPath.row);

      if (!view) {
        view = template.createView();
        if (!view && this._itemViewLoader !== undefined) {
          view = this._itemViewLoader(
            this._getItemTemplateKey(indexPath.row)
          );
        }
      }
      const bindingContext = this._getDataItem(indexPath.row);
      let args = <ItemEventData>{
        eventName: ITEMLOADING,
        object: this,
        index: indexPath.row,
        android: undefined,
        ios: cell,
        view: view,
        bindingContext,
      };

      this.notify(args);

      view = args.view || this._getDefaultItemContent(indexPath.row);

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
        this._map.delete(cell);
        this._removeContainer(cell, indexPath);
        (cell.view.ios as UIView).removeFromSuperview();
        cell.owner = new WeakRef(view);
      }
      if (view) {
        view.bindingContext = bindingContext;
      }
      this._map.set(cell, view);

      if (view && !view.parent) {
        this._addView(view);
        cell.contentView.addSubview(view.ios);
      }

      this._layoutCell(view, indexPath);
    } finally {
      this._preparingCell = false;
    }
  }

  _layoutCell(cellView: View, index: NSIndexPath) {
    if (cellView) {
      const size = this._getSize();
      let width = Utils.layout.toDevicePixels(size.width);
      let height = Utils.layout.toDevicePixels(size.height);
      const widthMeasureSpec = Utils.layout.makeMeasureSpec(
        width,
        Utils.layout.EXACTLY
      );

      const heightMeasureSpec = Utils.layout.makeMeasureSpec(
        height,
        Utils.layout.EXACTLY
      );

      const measured = View.measureChild(
        this,
        cellView,
        widthMeasureSpec,
        heightMeasureSpec
      );
    }
  }

  _addChildFromBuilder(name: string, value: any): void {
    if (value instanceof common.PagerItem) {
      if (!this._childrenViews) {
        this._childrenViews = new Map<number, View>();
      }
      const count = this._childrenViews.size;
      const keys = Array.from(this._childrenViews.keys());

      if (count === 0) {
        this._childrenViews.set(this._childrenCount, value);
      } else {
        for (let i = 0; i < count; i++) {
          const key = keys[i];
          const view = this._childrenViews.get(key);
          if (i === keys.length - 1 && value !== view) {
            this._childrenViews.set(this._childrenCount, value);
          }
        }
      }
    }
  }

  get horizontalOffset(): number {
    return this.pager ? this.pager.contentOffset.x : 0;
  }

  get verticalOffset(): number {
    return this.pager ? this.pager.contentOffset.y : 0;
  }

  _getSpacing(): number {
    return Utils.layout.toDeviceIndependentPixels(
      this.convertToSize(this.spacing)
    );
  }

  _getPeaking(): number {
    return Utils.layout.toDeviceIndependentPixels(
      this.convertToSize(this.peaking)
    );
  }

  _getSize(w: number = 0, h: number = 0): { width: number; height: number } {
    let width = 0;
    let height = 0;
    if (width === 0) {
      width = Utils.layout.toDeviceIndependentPixels(this._effectiveItemWidth);
    }
    if (height === 0) {
      height = Utils.layout.toDeviceIndependentPixels(
        this._effectiveItemHeight
      );
    }
    if (this.orientation === "vertical") {
      height =
        (height - (this._getSpacing() * 2 + this._getPeaking() * 2)) /
        this.perPage;
    } else {
      width =
        (width - (this._getSpacing() * 2 + this._getPeaking() * 2)) /
        this.perPage;
    }
    if (Number.isNaN(width)) {
      width = 0;
    }

    if (Number.isNaN(height)) {
      height = 0;
    }
    return { width, height };
  }
}

@NativeClass
class PagerCell extends UICollectionViewCell {
	public owner: WeakRef<View>;
	public index: NSIndexPath;

	public get view(): View {
		return this.owner ? this.owner.get() : null;
	}

	public static initWithEmptyBackground(): PagerCell {
		const cell = <PagerCell>PagerCell.new();
		// Clear background by default - this will make cells transparent
		cell.backgroundColor = null;
		return cell;
	}

	public willMoveToSuperview(newSuperview: UIView): void {
		let parent = <Pager>(this.view ? this.view.parent : null);

		// When inside Pager and there is no newSuperview this cell is
		// removed from native visual tree so we remove it from our tree too.
		if (parent && !newSuperview) {
			parent._removeContainer(this, this.index);
		}
	}
}

@NativeClass
@ObjCClass(UICollectionViewDelegate, UICollectionViewDelegateFlowLayout)
class UICollectionDelegateImpl extends NSObject implements UICollectionViewDelegate, UICollectionViewDelegateFlowLayout {
	private _owner: WeakRef<Pager>;

	public static initWithOwner(owner: WeakRef<Pager>): UICollectionDelegateImpl {
		const delegate = UICollectionDelegateImpl.alloc().init() as UICollectionDelegateImpl;
		delegate._owner = owner;
		return delegate;
	}

	public collectionViewLayoutSizeForItemAtIndexPath(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, indexPath: NSIndexPath): CGSize {
		let owner = this._owner && this._owner.get();
		if (!owner) return CGSizeZero;
		const size = owner._getSize();
		return CGSizeMake(size.width, size.height);
	}

	public collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath) {
		const owner = this._owner && this._owner.get();
		if (owner) {
			if (!owner._isInit) {
				owner._updateScrollPosition();
				owner._isInit = true;
			}
			if (owner.items && owner.loadMoreCount !== -1 && indexPath.row === owner.lastIndex - owner.loadMoreCount) {
				owner.notify<EventData>({
					eventName: LOADMOREITEMS,
					object: owner,
				});
			}
		}

		if (cell.preservesSuperviewLayoutMargins) {
			cell.preservesSuperviewLayoutMargins = false;
		}

		if (cell.layoutMargins) {
			cell.layoutMargins = UIEdgeInsetsZero;
		}
	}

	public scrollViewWillBeginDragging(scrollView: UIScrollView): void {
		let owner = this._owner && this._owner.get();
		if (owner) {
			if (owner.lastEvent === 0) {
				owner.notify({
					eventName: Pager.swipeStartEvent,
					object: owner,
				});
				owner.lastEvent = 1;
			}
		}
	}

	public scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void {
		let owner = this._owner ? this._owner.get() : null;
		if (owner) {
			selectedIndexProperty.nativeValueChange(owner, owner._scrollingToIndex);
			owner._isAnimatedScrolling = false;
			owner._scrollingToIndex = -1;
			owner.notify({
				eventName: Pager.swipeEvent,
				object: owner,
			});
		}
	}

	public scrollViewDidScroll(scrollView: UIScrollView): void {
		let owner = this._owner.get();
		if (owner) {
			let width: number;
			let offset: number;
			let size = owner._getRealWidthHeight();
			let total: number;
			let percent: number;
			if (owner.orientation === 'vertical') {
				width = size.height;
				offset = scrollView.contentOffset.y;
				total = scrollView.contentSize.height - scrollView.bounds.size.height;
			} else {
				width = size.width;
				offset = scrollView.contentOffset.x;
				total = scrollView.contentSize.width - scrollView.bounds.size.width;
			}
			percent = offset / total;
			let progress = percent * (owner.itemCount - 1);
			if (owner.indicatorView && owner.indicatorView.setWithProgressAnimated && !Number.isNaN(progress)) {
				owner.indicatorView.progress = progress;
			}
			if (!owner._isAnimatedScrolling) {
				const index = parseInt(progress.toFixed(0), 10);
				if (owner.selectedIndex !== index && !Number.isNaN(index)) {
					owner._scrollingToIndex = -1;
					selectedIndexProperty.nativeValueChange(owner, index);
				}
			}
			owner.notify({
				object: owner,
				eventName: Pager.scrollEvent,
				scrollX: owner.horizontalOffset,
				scrollY: owner.verticalOffset,
			});

			if (owner.lastEvent === 1) {
				owner.notify({
					eventName: Pager.swipeOverEvent,
					object: owner,
				});
				owner.lastEvent = 1;
			}
		}
	}

	public scrollViewDidEndDecelerating(scrollView: UIScrollView): void {
		let owner = this._owner.get();
		if (owner) {
			let width: number;
			let offset: number;
			let size = owner._getRealWidthHeight();
			let total: number;
			let percent: number;
			if (owner.orientation === 'vertical') {
				width = size.height;
				offset = scrollView.contentOffset.y;
				total = scrollView.contentSize.height - scrollView.bounds.size.height;
			} else {
				width = size.width;
				offset = scrollView.contentOffset.x;
				total = scrollView.contentSize.width - scrollView.bounds.size.width;
			}
			percent = offset / total;
			const progress = percent * (owner.itemCount - 1);
			selectedIndexProperty.nativeValueChange(owner, Math.round(progress));
		}
	}

	public scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>) {
		let owner = this._owner ? this._owner.get() : null;

		if (!owner) return;

		if (owner.lastEvent === 1) {
			if (owner.enableEvents) {
				owner.notify({
					eventName: Pager.swipeEndEvent,
					object: owner,
				});
			}
			owner.lastEvent = 0;
		}
	}
}

@NativeClass
@ObjCClass(UICollectionViewDataSource)
class UICollectionViewDataSourceImpl extends NSObject implements UICollectionViewDataSource {
	_owner: WeakRef<Pager>;

	public static initWithOwner(owner: WeakRef<Pager>): UICollectionViewDataSourceImpl {
		const delegate = UICollectionViewDataSourceImpl.alloc().init() as UICollectionViewDataSourceImpl;
		delegate._owner = owner;
		return delegate;
	}

	public collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell {
		const owner = this._owner ? this._owner.get() : null;
		let cell;
		let count = 0;
		if (owner) {
			count = owner._childrenCount;
			if (owner.circularMode) {
				count = owner.itemCount;
				switch (indexPath.row) {
					case 0:
						indexPath = NSIndexPath.indexPathForRowInSection(owner.lastDummy, 0);
						break;
					case owner.firstDummy:
						indexPath = NSIndexPath.indexPathForRowInSection(0, 0);
						break;
					default:
						indexPath = NSIndexPath.indexPathForRowInSection(indexPath.row - 1, 0);
						break;
				}
			}
		}
		if (owner && !owner.items && count > 0) {
			owner._preparingCell = true;
			const size = owner._getSize();

			collectionView.registerClassForCellWithReuseIdentifier(PagerCell.class(), `static-${indexPath.row}`);

			cell = collectionView.dequeueReusableCellWithReuseIdentifierForIndexPath(`static-${indexPath.row}`, indexPath) || PagerCell.initWithEmptyBackground();
			cell.index = indexPath;
			let view = owner._childrenViews.get(indexPath.row);

			if (view instanceof ProxyViewContainer) {
				let sp = new StackLayout();
				sp.addChild(view);
				view = sp;
			}

			// If cell is reused it has old content - remove it first.
			if (!cell.view) {
				cell.owner = new WeakRef(view);
			} else if (cell.view !== view) {
				(cell.view.ios as UIView).removeFromSuperview();
				cell.owner = new WeakRef(view);
			}

			if (view && !view.parent) {
				owner._addView(view);
				cell.contentView.addSubview(view.ios);
			} else if (view && view.ios) {
				cell.contentView.addSubview(view.ios);
			}

			owner._layoutCell(view, indexPath);
			const width = Utils.layout.toDevicePixels(size.width);
			const height = Utils.layout.toDevicePixels(size.height);
			if (view) {
				View.layoutChild(owner, view, 0, 0, width, height);
			}
			owner._preparingCell = false;
			return cell;
		}

		const template = owner && owner._getItemTemplate(indexPath.row);
		cell = collectionView.dequeueReusableCellWithReuseIdentifierForIndexPath(template.key, indexPath) || PagerCell.initWithEmptyBackground();
		cell.index = indexPath;
		if (owner) {
			const size = owner._getSize();
			owner._prepareCell(<PagerCell>cell, indexPath);
			const cellView: any = (cell as PagerCell).view;
			if (cellView) {
				View.layoutChild(owner, cellView, 0, 0, Utils.layout.toDevicePixels(size.width), Utils.layout.toDevicePixels(size.height));
			}
		}

		return cell;
	}

	public collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number {
		const owner = this._owner ? this._owner.get() : null;
		if (!owner) return 0;
		return owner.circularMode ? owner.itemCount : owner._childrenCount;
	}

	public numberOfSectionsInCollectionView(collectionView: UICollectionView): number {
		return 1;
	}
}
