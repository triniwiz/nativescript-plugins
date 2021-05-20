import {
  CSSType,
  marginBottomProperty,
  marginLeftProperty,
  marginRightProperty,
  marginTopProperty,
  paddingBottomProperty,
  paddingLeftProperty,
  paddingRightProperty,
  paddingTopProperty,
  profile,
  View as NSView
} from '@nativescript/core';
import {
  alignSelfProperty,
  FlexAlignItems, FlexAlignSelf, flexBasisProperty,
  FlexDirection, flexDirectionProperty, flexGrowProperty,
  FlexJustify, flexProperty, flexShrinkProperty,
  FlexWrap,
  Overflow,
  Position,
  ViewBase,
  alignContentProperty, aspectRatioProperty,
  Direction
} from './common';

export {
  FlexDirection,
  FlexAlignItems,
  FlexAlignSelf,
  FlexWrap,
  FlexJustify,
  Overflow,
  Position,
  Direction
} from './common';


@CSSType('View')
export class View extends ViewBase {
  nativeView: com.facebook.yoga.android.YogaLayout;
  _yogaNode: com.facebook.yoga.YogaNode;

  get yogaNode(): com.facebook.yoga.YogaNode {
    if (!this._yogaNode) {
      if (this.nativeView) {
        this._yogaNode = this.nativeView.getYogaNode();
      }
    }
    return this._yogaNode;
  }

  _children: NSView[] = [];
  _childrenQueue: NSView[] = [];
  private static _didInit = false;

  constructor() {
    super();
  }

  @profile
  createNativeView() {
    let nativeView;
    if (!View._didInit) {
      nativeView = io.github.triniwiz.yogalayout.Utils.createLayout(this._context, true);
      View._didInit = true;
    } else {
      nativeView = io.github.triniwiz.yogalayout.Utils.createLayout(this._context, false);
    }

    return nativeView;
  }

  @profile
  initNativeView() {
    super.initNativeView();
    this._init();
  }

  _isSingle(value: string) {
    if (typeof value === 'string') {
      return value.split(' ').length > 1;
    }
    return true;
  }

  _init() {
    const json = {};
    this._updateWidth(this.style.width, null, json);
    this._updateHeight(this.style.height, null, json);
    this._updateMaxWidth(this.style.maxWidth, null, json);
    this._updateMaxHeight(this.style.maxHeight, null, json);
    this._updateAlignItems(this.style.alignItems as any, null, json);
    this._updateOverflow(this.style.overflow as any, null, json);
    this._updatePosition(this.style.position, null, json);
    this._updateLeft(this.style.left, null, json);
    this._updateTop(this.style.top, null, json);
    this._updateRight(this.style.right, null, json);
    this._updateBottom(this.style.bottom, null, json);
    if (this._isSingle(this.style.padding as any)) {
      this._updatePadding(this.style.padding, null, json);
    } else {
      this._updatePaddingLeft(this.style.paddingLeft, null, json);
      this._updatePaddingTop(this.style.paddingTop, null, json);
      this._updatePaddingRight(this.style.paddingRight, null, json);
      this._updatePaddingBottom(this.style.paddingBottom, null, json);
    }

    if (this._isSingle(this.style.margin as any)) {
      this._updateMargin(this.style.margin, null, json);
    } else {
      this._updateMarginLeft(this.style.marginLeft, null, json);
      this._updateMarginTop(this.style.marginTop, null, json);
      this._updateMarginRight(this.style.marginRight, null, json);
      this._updateMarginBottom(this.style.marginBottom, null, json);
    }

    this._updateJustifyContent(this.style.justifyContent, null, json);
    this._updateFlexWrap(this.style.flexWrap, null, json);
    this._updateFlex(this.style.flex, null, json);
    this._updateFlexDirection(this.style.flexDirection, null, json);
    this._updateAlignSelf(this.style.alignSelf, null, json);

    this._updateFlexGrow(this.style.flexGrow, null, json);
    this._updateFlexShrink(this.style.flexShrink, null, json);
    this._updateFlexBasis(this.style.flexBasis, null, json);
    this._updateAlignContent(this.style.alignContent, null, json);

    this._updateAspectRatio(this.aspectRatio, null, json);
    this._updateDirection(this.style.direction, null, json);
    this._updateStart(this.style.start, null, json);
    this._updateEnd(this.style.end, null, json);

    const data = JSON.stringify(json);
    io.github.triniwiz.yogalayout.Utils.batch(data, this.nativeView);
  }

  private _childrenBatchProperties = [];
  private _childrenBatchViews = [];

  private _processBatch() {
    if (this._children.length && this._childrenBatchProperties.length && this._childrenBatchViews.length) {
      io.github.triniwiz.yogalayout.Utils.batchChildren(JSON.stringify(this._childrenBatchProperties), this.nativeView, this._childrenBatchViews);
      this._childrenBatchViews.splice(0);
      this._childrenBatchProperties.splice(0);
    }
  }


  @profile
  onLoaded() {
    super.onLoaded();
    this._children.forEach((child) => {
      this._addChild(child, false, true);
    });
    this._childrenQueue.forEach((child) => {
      this._addChild(child, true, true);
    });
    if (this._childrenQueue.length) {
      this._childrenQueue.splice(0);
    }
    this._processBatch();
  }

  disposeNativeView() {
    super.disposeNativeView();
    this._children.forEach(view => {
      this._removePropertyChangeHandler(view);
      this._removeView(view);
    });
    this._children.splice(0);
  }

  _addChildFromBuilder(name: string, value: any): void {
    if (value.parent !== this) {
      this._children.push(value);
    }
  }

  public eachChildView(callback: (child: View) => boolean): void {
    this._children.forEach((view, key) => {
      callback(view as any);
    });
  }

  get android() {
    return this.nativeView;
  }

  get yoga() {
    return this.nativeView;
  }

  // @ts-ignore
  set width(value) {
    this.style.width = value;
    this._updateWidth(value);
  }

  get width() {
    if (!this.nativeView) {
      return this.style.width;
    }

    if (this.style.width === 'auto') {
      return 'auto';
    }
    return this.yogaNode.getWidth().value;
  }

  // @ts-ignore
  set height(value) {
    this.style.height = value;
    this._updateHeight(value);
  }

  get height() {
    if (!this.nativeView) {
      return this.style.height;
    }

    if (this.style.height === 'auto') {
      return 'auto';
    }
    return this.yogaNode.getHeight().value;
  }


  set left(value) {
    this.style.left = value;
    this._updateLeft(value);
  }

  get left() {
    if (!this.nativeView) {
      return this.style.left;
    }
    return this._getPositionValue("left");
  }

  set top(value) {
    this.style.top = value;
    this._updateTop(value);
  }

  get top() {
    if (!this.nativeView) {
      return this.style.top;
    }
    this._getPositionValue("top");
  }

  set right(value) {
    this.style.right = value;
    this._updateRight(value);
  }

  get right() {
    if (!this.nativeView) {
      return this.style.right;
    }
    this._getPositionValue("right");
  }

  set bottom(value) {
    this.style.bottom = value;
    this._updateBottom(value);
  }

  get bottom() {
    if (!this.nativeView) {
      return this.style.bottom;
    }
    this._getPositionValue("bottom");
  }


  set maxWidth(value) {
    this.style.maxWidth = value;
    this._updateMaxWidth(value);
  }


  get maxWidth() {
    return this.style.maxWidth;
  }


  set maxHeight(value) {
    this.style.maxHeight = value;
    this._updateMaxHeight(value);
  }


  get maxHeight() {
    return this.style.maxHeight;
  }


  set alignItems(value) {
    this.style.alignItems = value;
    this._updateAlignItems(value);
  }

  get alignItems() {
    return this.style.alignItems as FlexAlignItems;
  }

  set overflow(value) {
    this.style.overflow = value;
    this._updateOverflow(value);
  }

  get overflow() {
    return this.style.overflow;
  }

  set position(value) {
    this.style.position = value;
    this._updatePosition(value);
  }

  get position() {
    return this.style.position;
  }

  set padding(value) {
    this.style.padding = value;
  }

  [paddingTopProperty.setNative](value) {
    this._updatePaddingTop(value);
  }

  [paddingRightProperty.setNative](value) {
    this._updatePaddingRight(value);
  }

  [paddingBottomProperty.setNative](value) {
    this._updatePaddingBottom(value);
  }

  [paddingLeftProperty.setNative](value) {
    this._updatePaddingLeft(value);
  }

  set margin(value) {
    this.style.margin = value;
  }

  [marginTopProperty.setNative](value) {
    this._updateMarginTop(value);
  }

  [marginRightProperty.setNative](value) {
    this._updateMarginRight(value);
  }

  [marginBottomProperty.setNative](value) {
    this._updateMarginBottom(value);
  }

  [marginLeftProperty.setNative](value) {
    this._updateMarginLeft(value);
  }

  set justifyContent(value) {
    this.style.justifyContent = value;
    this._updateJustifyContent(value);
  }

  get justifyContent() {
    return this.style.justifyContent;
  }

  set flexWrap(value) {
    this.style.flexWrap = value;
    this._updateFlexWrap(value);
  }

  get flexWrap() {
    return this.style.flexWrap;
  }

  [alignSelfProperty.setNative](value) {
    this._updateAlignSelf(value);
  }

  [flexProperty.setNative](value) {
    this._updateFlex(value);
  }

  [flexGrowProperty.setNative](value) {
    this._updateFlexGrow(value);
  }

  [flexShrinkProperty.setNative](value) {
    this._updateFlexShrink(value);
  }

  [flexBasisProperty.setNative](value) {
    this._updateFlexBasis(value);
  }

  [flexDirectionProperty.setNative](value) {
    this._updateFlexDirection(value);
  }

  [alignContentProperty.setNative](value) {
    this._updateAlignContent(value);
  }

  [aspectRatioProperty.setNative](value) {
    this._updateAspectRatio(value);
  }

  get start() {
    return this.style.start;
  }

  set start(value) {
    this.style.start = value;
    this._updateStart(value);
  }

  get end() {
    return this.style.end;
  }

  set end(value) {
    this.style.end = value;
    this._updateEnd(value);
  }

  get direction() {
    if (!this.nativeView) {
      return Direction.Inherit;
    }
    return io.github.triniwiz.yogalayout.Utils.getLayoutDirection(this.yogaNode) as any
  }

  set direction(value) {
    this.style.direction = value;
    this._updateDirection(value);
  }

  get marginVertical(): any {
    return this.style.marginVertical;
  }

  set marginVertical(value) {
    this.style.marginVertical = value;
    this._updateMarginVertical(value);
  }

  get marginHorizontal(): any {
    return this.style.marginHorizontal;
  }

  set marginHorizontal(value) {
    this.style.marginHorizontal = value;
    this._updateMarginHorizontal(value);
  }

  get paddingHorizontal() {
    return this.style.paddingHorizontal;
  }

  set paddingHorizontal(value) {
    this.style.paddingHorizontal = value;
    this._updatePaddingHorizontal(value);
  }

  get paddingVertical() {
    return this.style.paddingVertical;
  }

  set paddingVertical(value) {
    this.style.paddingVertical = value;
    this._updatePaddingVertical(value);
  }

  private _addChild(child: NSView, addToChildren: boolean = false, batchingChildren: boolean = false) {
    if (!child) {
      return;
    }
    if (child.parent && child.parent !== this) {
      child.parent._removeView(child);
    }

    if (child.parent !== this) {
      const wasAdded = this._children.indexOf(child) !== -1;
      if (!this.nativeView) {
        this._childrenQueue.push(child);
        return;
      }
      if (addToChildren && !wasAdded) {
        this._children.push(child);
      }
      this._addPropertyChangeHandler(child);
      this._addView(child);

      const json = {
        alignSelf: child.style.alignSelf,
        flexGrow: child.style.flexGrow,
        flexShrink: child.style.flexShrink,
        flex: child.style.flex,
        direction: child.style.direction,
        position: child.style.position
      };
      if (batchingChildren) {
        this._childrenBatchProperties.push(json);
        this._childrenBatchViews.push(child.nativeView);
      } else {
        // @ts-ignore
        this.nativeView.addView(child.nativeView);

        const data = JSON.stringify(json);
        io.github.triniwiz.yogalayout.Utils.batchChild(data, this.nativeView, child.nativeView);
      }
    }
  }

  addChildren(views: View[]) {
    if (Array.isArray(views)) {
      views.forEach(child => {
        this._addChild(child, true, true);
      });
      this._processBatch();
    }
  }

  addChild(view: NSView) {
    this._addChild(view, true);
  }

  getChildAt(index: number): NSView {
    return this._children[index];
  }

  getChildIndex(view: NSView): number {
    return this._children.indexOf(view);
  }

  getChildrenCount(): number {
    return this._children.length;
  }

  removeAllChildren() {
    this.nativeView?.removeAllViews();
    this._children.forEach(child => {
      this._removeView(child);
    })
    this._children.splice(0);
  }

  removeChild(view: NSView) {
    if (view?.nativeView) {
      const index = this._children.indexOf(view);
      if (index !== -1) {
        this.nativeView.removeView(view.nativeView);
        view.parent._removeView(view);
        this._children.splice(index, 1);
      }
    }
  }

}
