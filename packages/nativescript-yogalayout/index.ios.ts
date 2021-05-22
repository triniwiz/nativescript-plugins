import {
  CSSType,
  View as NSView,
  PercentLength,
  Length,
  profile,
  paddingTopProperty,
  paddingRightProperty,
  paddingBottomProperty,
  paddingLeftProperty,
  marginTopProperty,
  marginRightProperty,
  marginBottomProperty, marginLeftProperty
} from '@nativescript/core';
import {layout} from '@nativescript/core/utils';
import {
  maxHeightProperty,
  maxWidthProperty,
  SizeType,
  ViewBase,
  ParsedValueType,
  FlexDirection,
  FlexAlignItems,
  Overflow,
  Position,
  alignItemsProperty,
  overflowProperty,
  positionProperty,
  toYGValue,
  FlexJustify,
  FlexWrap,
  FlexAlignSelf,
  alignSelfProperty,
  flexGrowProperty,
  flexShrinkProperty,
  flexBasisProperty,
  flexProperty,
  flexDirectionProperty,
  FlexAlignContent,
  alignContentProperty,
  aspectRatioProperty,
  Direction,
  _toYGFlexAlignSelf,
  _toYGDirection,
  _toYGPosition, _toNativeYG
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

declare class NSYogaView extends UIView {
  readonly isYogaEnabled: boolean;
  readonly yoga: YGLayout;

  configureLayoutWithBlock(block: (p1: YGLayout) => void): void;
}

@CSSType('View')
export class View extends ViewBase {
  nativeView: NSYogaView;
  _children: NSView[] = [];

  constructor() {
    super();
  }

  @profile
  createNativeView() {
    const nativeView = UIView.new() as NSYogaView;
    nativeView.yoga.isEnabled = true;
    return nativeView;
  }

  initNativeView() {
    super.initNativeView();
    this._init();
  }


  _init() {
    this.nativeView.configureLayoutWithBlock((layout) => {
      this._updateWidth(this.style.width, false, null, layout);
      this._updateHeight(this.style.height, false, null, layout);
      this._updateMinWidth(this.style.minWidth, false, null, layout);
      this._updateMinHeight(this.style.minHeight, false, null, layout);
      this._updateMaxWidth(this.style.maxWidth, false, null, layout);
      this._updateMaxHeight(this.style.maxHeight, false, null, layout);
      this._updateAlignItems(this.style.alignItems, false, null, layout);
      this._updateOverflow(this.style.overflow, false, null, layout);
      this._updatePosition(this.style.position, false, null, layout);
      this._updateLeft(this.style.left, false, null, layout);
      this._updateTop(this.style.top, false, null, layout);
      this._updateRight(this.style.right, false, null, layout);
      this._updateBottom(this.style.bottom, false, null, layout);
      this._updatePaddingLeft(this.style.paddingLeft, false, null, layout);
      this._updatePaddingTop(this.style.paddingTop, false, null, layout);
      this._updatePaddingRight(this.style.paddingRight, false, null, layout);
      this._updatePaddingBottom(this.style.paddingBottom, false, null, layout);
      this._updateMarginLeft(this.style.marginLeft, false, null, layout);
      this._updateMarginTop(this.style.marginTop, false, null, layout);
      this._updateMarginRight(this.style.marginRight, false, null, layout);
      this._updateMarginBottom(this.style.marginBottom, false, null, layout);
      this._updateJustifyContent(this.style.justifyContent, false, null, layout);
      this._updateFlexWrap(this.style.flexWrap, false, null, layout);
      this._updateFlex(this.style.flex, false, null, layout);
      this._updateFlexDirection(this.style.flexDirection, false, null, layout);
      this._updateAlignSelf(this.style.alignSelf, false, null, layout);
      this._updateFlexGrow(this.style.flexGrow, false, null, layout);
      this._updateFlexShrink(this.style.flexShrink, false, null, layout);
      this._updateFlexBasis(this.style.flexBasis, false, null, layout);
      this._updateAlignContent(this.style.alignContent, false, null, layout);
      this._updateAspectRatio(this.aspectRatio, false, null, layout);
      this._updateDirection(this.style.direction, false, null, layout);
      this._updateStart(this.style.start, false, null, layout);
      this._updateEnd(this.style.end, false, null, layout);
    });
  }

  @profile
  onLoaded() {
    super.onLoaded();
    this._children.forEach((child) => {
      this._addChild(child);
    });
  }

  public eachChild(callback: (child: View) => boolean): void {
    this._children.forEach((view, key) => {
      callback(view as any);
    });
  }

  public eachChildView(callback: (child: View) => boolean): void {
    this._children.forEach((view, key) => {
      callback(view as any);
    });
  }

  public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {
    super.onMeasure(widthMeasureSpec, heightMeasureSpec);
    this._children.forEach((childView: any, i) => {
      View.measureChild(this, childView, childView._currentWidthMeasureSpec, childView._currentHeightMeasureSpec);
    });
  }

  onLayout(left: number, top: number, right: number, bottom: number) {
    super.onLayout(left, top, right, bottom);
    this._children.forEach((childView, i) => {
      View.layoutChild(this, childView, left, top, right, bottom);
    });
    this.nativeView.yoga.applyLayoutPreservingOrigin(true);
  }

  get ios() {
    return this.nativeView;
  }

  get yoga() {
    return this.nativeView.yoga;
  }

  get yogaNode() {
    return this.nativeView.yoga as any;
  }

  _addChildFromBuilder(name: string, value: any): void {
    if (value.parent !== this) {
      this._children.push(value);
    }
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
    return this.nativeView.yoga.width.value;
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
    return this.nativeView.yoga.height.value;
  }

  set minWidth(value) {
    this.style.minWidth = value;
    this._updateMinWidth(value);
  }


  get minWidth() {
    return this.style.minWidth;
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
    return this._getPositionValue("top");
  }

  set right(value) {
    this.style.right = value;
    this._updateRight(value);
  }

  get right() {
    if (!this.nativeView) {
      return this.style.right;
    }
    return this._getPositionValue("right");
  }

  set bottom(value) {
    this.style.bottom = value;
    this._updateBottom(value);
  }

  get bottom() {
    if (!this.nativeView) {
      return this.style.bottom;
    }
    return this._getPositionValue("bottom");
  }


  [alignItemsProperty.setNative](value) {
    this._updateAlignItems(value);
  }

  [overflowProperty.setNative](value) {
    this._updateOverflow(value);
  }

  [positionProperty.setNative](value) {
    this._updatePosition(value);
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

  set flex(value) {
    this.style.flex = value;
    this._updateFlex(value);
  }

  get flex() {
    return this.style.flex;
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

  set flexDirection(value) {
    this.style.flexDirection = value;
    this._updateFlexDirection(value);
  }

  get flexDirection() {
    return this.style.flexDirection as FlexDirection;
  }


  set position(value) {
    this.style.position = value;
    this._updatePosition(value);
  }

  get position() {
    return this.style.position;
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
    this._updateStart(value);
  }

  get end() {
    return this.style.end;
  }

  set end(value) {
    this._updateEnd(value);
  }

  get direction() {
    if (this.nativeView) {
      switch (this.nativeView.yoga.direction) {
        case YGDirection.LTR:
          return Direction.Ltr;
        case YGDirection.RTL:
          return Direction.Rtl;
        case YGDirection.Inherit:
          return Direction.Inherit;
      }
    }
    return Direction.Inherit
  }

  set direction(value) {
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

  private _addChild(child: NSView, addToChildren: boolean = false) {
    if (!child) {
      return;
    }
    if (child.parent && child.parent !== this) {
      child.parent._removeView(child);
    }

    if (child.parent !== this) {
      if (!this.nativeView) {
        this._children.push(child);
        return;
      }
      if (addToChildren) {
        this._children.push(child);
      }
      this._addPropertyChangeHandler(child);
      this._addView(child);
      child.nativeView.configureLayoutWithBlock((yoga) => {
        yoga.isEnabled = true;
        yoga.position = _toYGPosition(child.style.position);
        yoga.flex = child.style.flex;
        yoga.alignSelf = _toYGFlexAlignSelf(child.style.alignSelf as any);
        if (child.style.flexGrow !== 0) {
          yoga.flexGrow = child.style.flexGrow;
        }
        yoga.flexShrink = child.style.flexShrink;
        const direction = _toYGDirection(child.style.direction);
        if (direction > 0) {
          yoga.direction = direction;
        }
        if (child.style.minWidth !== 'none') {
          yoga.minWidth = _toNativeYG(child.style.minWidth);
        }
        if (child.style.minHeight !== 'none') {
          yoga.minHeight = _toNativeYG(child.style.minHeight);
        }
        if (child.style.maxWidth !== 'none') {
          yoga.maxWidth = _toNativeYG(child.style.maxWidth);
        }
        if (child.style.maxHeight !== 'none') {
          yoga.maxHeight = _toNativeYG(child.style.maxHeight);
        }

      });
      this.nativeView.addSubview(child.nativeView);
    }
  }

  addChild(view: NSView) {
    this._addChild(view, true);
  }

  addChildren(views: NSView[]) {
    if (Array.isArray(views)) {
      views.forEach(child => {
        this._addChild(child, true);
      });
    }
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
    this._children.forEach(child => {
      this._removeView(child);
    })
    this._children.splice(0);
  }

  removeChild(view: NSView) {
    if (view?.nativeView) {
      const index = this._children.indexOf(view);
      if (index !== -1) {
        view?.nativeView?.removeFromSuperview?.();
        view.parent._removeView(view);
        this._children.splice(index, 1);
      }
    }
  }
}
