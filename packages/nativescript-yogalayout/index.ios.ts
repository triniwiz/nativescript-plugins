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
  FlexAlignContent, alignContentProperty, aspectRatioProperty, Direction, _toYGFlexAlignSelf, _toYGDirection
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
      this._updateWidth(this.width);
      this._updateHeight(this.height);
      this._updateMaxWidth(this.style.maxWidth);
      this._updateMaxHeight(this.style.maxHeight);
      this._updateAlignItems(this.style.alignItems);
      this._updateOverflow(this.style.overflow);
      this._updatePosition(this.style.position);
      this._updateLeft(this.style.left);
      this._updateTop(this.style.top);
      this._updateRight(this.style.right);
      this._updateBottom(this.style.bottom);
      this._updatePaddingLeft(this.style.paddingLeft);
      this._updatePaddingTop(this.style.paddingTop);
      this._updatePaddingRight(this.style.paddingRight);
      this._updatePaddingBottom(this.style.paddingBottom);
      this._updateMarginLeft(this.style.marginLeft);
      this._updateMarginTop(this.style.marginTop);
      this._updateMarginRight(this.style.marginRight);
      this._updateMarginBottom(this.style.marginBottom);
      this._updateJustifyContent(this.style.justifyContent);
      this._updateFlexWrap(this.style.flexWrap);
      this._updateFlex(this.style.flex);
      this._updateFlexDirection(this.style.flexDirection);
      this._updateAlignSelf(this.style.alignSelf);
      this._updateFlexGrow(this.style.flexGrow);
      this._updateFlexShrink(this.style.flexShrink);
      this._updateFlexBasis(this.style.flexBasis);
      this._updateAlignContent(this.style.alignContent);
      this._updateAspectRatio(this.aspectRatio);
      this._updateDirection(this.style.direction);
      this._updateStart(this.style.start);
      this._updateEnd(this.style.end);
    });
  }

  @profile
  onLoaded() {
    super.onLoaded();
    this._children.forEach((child) => {
      this._addChild(child);
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
    const size = this.nativeView.frame.size;
    this._children.forEach((childView, i) => {
      const width = layout.toDevicePixels(size.width);
      const height = layout.toDevicePixels(size.height);
      View.layoutChild(this, childView, 0, 0, width, height);
    });
    this.nativeView.yoga.applyLayoutPreservingOrigin(true);
  }

  requestLayout() {
    super.requestLayout();
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
      const yoga = child.nativeView.yoga as YGLayout;
      yoga.isEnabled = true;
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
      this.nativeView.addSubview(child.nativeView);
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
