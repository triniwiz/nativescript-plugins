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
  FlexAlignContent, alignContentProperty
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
    });
  }

  @profile
  onLoaded() {
    super.onLoaded();
    this._children.forEach((child) => {
      if (child.parent !== this) {
        this._addView(child);
        child.nativeView.yoga.isEnabled = true;
        this.nativeView.addSubview(child.nativeView);
      }
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

  _addChildFromBuilder(name: string, value: any): void {
    if (value.parent !== this) {
      this._children.push(value);
    }
  }

  _updateWidth(value, force = false) {
    if (this.nativeView) {
      this.nativeView.yoga.width = _toNativeYG(value);
      if (force) {
        this.nativeView.yoga.applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updateHeight(value, force = false) {
    if (this.nativeView) {
      this.nativeView.yoga.height = _toNativeYG(value);
      if (force) {
        this.nativeView.yoga.applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updateMaxWidth(value, force = false) {
    if (value !== 'auto') {
      if (this.nativeView) {
        this.nativeView.yoga.maxWidth = _toNativeYG(value);
        if (force) {
          this.nativeView.yoga.applyLayoutPreservingOrigin(true);
        }
      }
    }
  }

  _updateMaxHeight(value, force = false) {
    if (value !== 'auto') {
      if (this.nativeView) {
        this.nativeView.yoga.maxHeight = _toNativeYG(value);
        if (force) {
          this.nativeView.yoga.applyLayoutPreservingOrigin(true);
        }
      }
    }
  }

  _updateAlignItems(value, force = false) {
    if (this.nativeView) {
      this.nativeView.yoga.alignItems = _toYGFlexAlignItems(value);
      if (force) {
        this.nativeView.yoga.applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updateOverflow(value, force = false) {
    if (this.nativeView) {
      this.nativeView.yoga.overflow = _toYGOverflow(value);
      if (force) {
        this.nativeView.yoga.applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updatePosition(value, force = false) {
    if (this.nativeView) {
      this.nativeView.yoga.position = _toYGPosition(value);
      if (force) {
        this.nativeView.yoga.applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updateFlex(value, force = false) {
    if (this.nativeView) {
      this.nativeView.yoga.flex = value;
      if (force) {
        this.nativeView.yoga.applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updateFlexDirection(value, force = false) {
    if (this.nativeView) {
      this.nativeView.yoga.flexDirection = _toYGFlexDirection(value);
      if (force) {
        this.nativeView.yoga.applyLayoutPreservingOrigin(true);
      }
    }
  }

  _setPositionValue(value, position: "left" | "top" | "right" | "bottom" | "start" | "end" | "all" | "vertical" | "horizontal") {
    if (value === undefined || value === 'auto' || value?.type === 'auto') {
      return
    }
    switch (position) {
      case "left":
        this.nativeView.yoga.left = _toNativeYG(value);
        break;
      case "top":
        this.nativeView.yoga.top = _toNativeYG(value);
        break;
      case "right":
        this.nativeView.yoga.right = _toNativeYG(value);
        break;
      case "bottom":
        this.nativeView.yoga.bottom = _toNativeYG(value);
        break;
      case "start":
        this.nativeView.yoga.start = _toNativeYG(value);
        break;
      case "end":
        this.nativeView.yoga.end = _toNativeYG(value);
        break;
      case "vertical":
        break;
      case "horizontal":
        break;
      case "all":
        break;
    }
  }

  _getPositionValue(position) {
    const value = YGNodeStyleGetPosition(this.nativeView.yoga as any, _toYGEdge(position))
    switch (value.unit) {
      case YGUnit.Point:
        return {value: value.value, unit: "px"};
      case YGUnit.Percent:
        return {value: value.value / 100, unit: "%"}
      case YGUnit.Auto:
        return "auto";
      case YGUnit.Undefined:
        return undefined;
    }
  }

  _updateLeft(value, force = false) {
    if (this.nativeView) {
      this._setPositionValue(value, "left");
      if (force) {
        this.nativeView.yoga.applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updateTop(value, force = false) {
    if (this.nativeView) {
      this._setPositionValue(value, "top");
      if (force) {
        this.nativeView.yoga.applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updateRight(value, force = false) {
    if (this.nativeView) {
      this._setPositionValue(value, "right");
      if (force) {
        this.nativeView.yoga.applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updateBottom(value, force = false) {
    if (this.nativeView) {
      this._setPositionValue(value, "bottom");
      if (force) {
        this.nativeView.yoga.applyLayoutPreservingOrigin(true);
      }
    }
  }

  _setPaddingValue(value, position: "left" | "top" | "right" | "bottom" | "start" | "end" | "all" | "vertical" | "horizontal") {
    if (value === undefined || value === 'auto' || value?.type === 'auto') {
      return
    }
    switch (position) {
      case "left":
        this.nativeView.yoga.paddingLeft = _toNativeYG(value);
        break;
      case "top":
        this.nativeView.yoga.paddingTop = _toNativeYG(value);
        break;
      case "right":
        this.nativeView.yoga.paddingRight = _toNativeYG(value);
        break;
      case "bottom":
        this.nativeView.yoga.paddingBottom = _toNativeYG(value);
        break;
      case "start":
        this.nativeView.yoga.paddingStart = _toNativeYG(value);
        break;
      case "end":
        this.nativeView.yoga.paddingEnd = _toNativeYG(value);
        break;
      case "vertical":
        this.nativeView.yoga.paddingVertical = _toNativeYG(value);
        break;
      case "horizontal":
        this.nativeView.yoga.paddingHorizontal = _toNativeYG(value);
        break;
      case "all":
        this.nativeView.yoga.padding = _toNativeYG(value);
        break;
    }
  }

  _getPaddingValue(position) {
    const value = YGNodeStyleGetPosition(this.nativeView.yoga as any, _toYGEdge(position))
    switch (value.unit) {
      case YGUnit.Point:
        return {value: value.value, unit: "px"};
      case YGUnit.Percent:
        return {value: value.value / 100, unit: "%"}
      case YGUnit.Auto:
        return "auto";
      case YGUnit.Undefined:
        return undefined;
    }
  }

  _updatePaddingLeft(value, force = false) {
    if (this.nativeView) {
      this._setPaddingValue(value, "left");
    }
  }

  _updatePaddingTop(value, force = false) {
    if (this.nativeView) {
      this._setPaddingValue(value, "top");
    }
  }

  _updatePaddingRight(value, force = false) {
    if (this.nativeView) {
      this._setPaddingValue(value, "right");
    }
  }

  _updatePaddingBottom(value, force = false) {
    if (this.nativeView) {
      this._setPaddingValue(value, "bottom");
    }
  }

  _setMarginValue(value, position: "left" | "top" | "right" | "bottom" | "start" | "end" | "all" | "vertical" | "horizontal") {
    if (value === undefined || value === 'auto' || value?.type === 'auto') {
      return
    }
    switch (position) {
      case "left":
        this.nativeView.yoga.marginLeft = _toNativeYG(value);
        break;
      case "top":
        this.nativeView.yoga.marginTop = _toNativeYG(value);
        break;
      case "right":
        this.nativeView.yoga.marginRight = _toNativeYG(value);
        break;
      case "bottom":
        this.nativeView.yoga.marginBottom = _toNativeYG(value);
        break;
      case "start":
        this.nativeView.yoga.marginStart = _toNativeYG(value);
        break;
      case "end":
        this.nativeView.yoga.marginEnd = _toNativeYG(value);
        break;
      case "vertical":
        this.nativeView.yoga.marginVertical = _toNativeYG(value);
        break;
      case "horizontal":
        this.nativeView.yoga.marginHorizontal = _toNativeYG(value);
        break;
      case "all":
        this.nativeView.yoga.margin = _toNativeYG(value);
        break;
    }
  }

  _getMarginValue(position) {
    const value = YGNodeStyleGetPosition(this.nativeView.yoga as any, _toYGEdge(position))
    switch (value.unit) {
      case YGUnit.Point:
        return {value: value.value, unit: "px"};
      case YGUnit.Percent:
        return {value: value.value / 100, unit: "%"}
      case YGUnit.Auto:
        return "auto";
      case YGUnit.Undefined:
        return undefined;
    }
  }

  _updateMarginLeft(value, force = false) {
    if (this.nativeView) {
      this._setMarginValue(value, "left");
    }
  }

  _updateMarginTop(value, force = false) {
    if (this.nativeView) {
      this._setMarginValue(value, "top");
    }
  }

  _updateMarginRight(value, force = false) {
    if (this.nativeView) {
      this._setMarginValue(value, "right");
    }
  }

  _updateMarginBottom(value, force = false) {
    if (this.nativeView) {
      this._setMarginValue(value, "bottom");
    }
  }

  _updateJustifyContent(value: any, force = false) {
    if (this.nativeView) {
      switch (value) {
        case FlexJustify.FlexStart:
          this.nativeView.yoga.justifyContent = YGJustify.FlexStart;
          break;
        case FlexJustify.FlexEnd:
          this.nativeView.yoga.justifyContent = YGJustify.FlexEnd;
          break;
        case FlexJustify.Center:
          this.nativeView.yoga.justifyContent = YGJustify.Center;
          break;
        case FlexJustify.SpaceAround:
          this.nativeView.yoga.justifyContent = YGJustify.SpaceAround;
          break;
        case FlexJustify.SpaceBetween:
          this.nativeView.yoga.justifyContent = YGJustify.SpaceBetween;
          break;
        case FlexJustify.SpaceEvenly:
          this.nativeView.yoga.justifyContent = YGJustify.SpaceEvenly;
          break;
      }
      if (force) {
        this.nativeView.yoga.applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updateFlexWrap(value: any, force = false) {
    if (this.nativeView) {
      switch (value) {
        case FlexWrap.NoWrap:
          this.nativeView.yoga.flexWrap = YGWrap.NoWrap;
          break;
        case FlexWrap.Wrap:
          this.nativeView.yoga.flexWrap = YGWrap.Wrap;
          break
        case FlexWrap.WrapReverse:
          this.nativeView.yoga.flexWrap = YGWrap.WrapReverse;
          break
      }

      if (force) {
        this.nativeView.yoga.applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updateAlignSelf(value, force = false) {
    if (this.nativeView) {
      this.nativeView.yoga.alignSelf = _toYGFlexAlignSelf(value);
      if (force) {
        this.nativeView.yoga.applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updateFlexGrow(value, force = false) {
    if (this.nativeView) {
      if (this.nativeView.yoga.flexGrow === value) {
        return
      }
      this.nativeView.yoga.flexGrow = value;
      if (force) {
        this.nativeView.yoga.applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updateFlexShrink(value, force = false) {
    if (this.nativeView) {
      if (this.nativeView.yoga.flexShrink === value) {
        return
      }
      this.nativeView.yoga.flexShrink = value;
      if (force) {
        this.nativeView.yoga.applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updateFlexBasis(value, force = false) {
    if (this.nativeView) {
      if (this.nativeView.yoga.flexBasis === value) {
        return
      }
      this.nativeView.yoga.flexBasis = _toNativeYG(value);
      if (force) {
        this.nativeView.yoga.applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updateAlignContent(value, force = false) {
    if (this.nativeView) {
      this.nativeView.yoga.alignContent = _toYGFlexAlignContent(value);
      if (force) {
        this.nativeView.yoga.applyLayoutPreservingOrigin(true);
      }
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

  // @ts-ignore
  set flexDirection(value) {
    this.style.flexDirection = value;
    this._updateFlexDirection(value);
  }

  // @ts-ignore
  get flexDirection() {
    return this.style.flexDirection;
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
}

function _toYGFlexDirection(value: FlexDirection) {
  switch (value) {
    case FlexDirection.Row:
      return YGFlexDirection.Row;
    case FlexDirection.Column:
      return YGFlexDirection.Column;
    case FlexDirection.ColumnReverse:
      return YGFlexDirection.ColumnReverse;
    case FlexDirection.RowReverse:
      return YGFlexDirection.RowReverse;
  }
}

function _toYGFlexAlignSelf(value: FlexAlignSelf) {
  switch (value) {
    case FlexAlignSelf.Stretch:
      return YGAlign.Stretch;
    case FlexAlignSelf.Center:
      return YGAlign.Center;
    case FlexAlignSelf.FlexEnd:
      return YGAlign.FlexEnd;
    case FlexAlignSelf.FlexStart:
      return YGAlign.FlexStart;
    case FlexAlignSelf.BaseLine:
      return YGAlign.Baseline;
    case FlexAlignSelf.Auto:
      return YGAlign.Auto;
  }
}

function _toYGFlexAlignItems(value: FlexAlignItems) {
  switch (value) {
    case FlexAlignItems.Stretch:
      return YGAlign.Stretch;
    case FlexAlignItems.Center:
      return YGAlign.Center;
    case FlexAlignItems.FlexEnd:
      return YGAlign.FlexEnd;
    case FlexAlignItems.FlexStart:
      return YGAlign.FlexStart;
    case FlexAlignItems.BaseLine:
      return YGAlign.Baseline;
  }
}

function _toYGOverflow(value: Overflow) {
  switch (value) {
    case Overflow.Visible:
      return YGOverflow.Visible;
    case Overflow.Hidden:
      return YGOverflow.Hidden;
    case Overflow.Scroll:
      return YGOverflow.Scroll;
  }
}

function _toYGPosition(value: Position) {
  switch (value) {
    case Position.Relative:
      return YGPositionType.Relative;
    case Position.Absolute:
      return YGPositionType.Absolute;
  }
}

function _toNativeYG(value) {
  const yg = toYGValue(value);
  switch (yg.type) {
    case ParsedValueType.Auto:
      return YGValueAuto;
    case ParsedValueType.Px:
      return {value: yg.value, unit: YGUnit.Point};
    case ParsedValueType.Percent:
      return YGPercentValue(yg.value);
    case ParsedValueType.Dip:
      return YGPointValue(yg.value);
  }
  return YGValueZero;
}

function _toYGEdge(value: "left" | "top" | "right" | "bottom" | "start" | "end" | "all" | "vertical" | "horizontal") {
  switch (value) {
    case "left":
      return YGEdge.Left;
    case "top":
      return YGEdge.Top;
    case "right":
      return YGEdge.Right;
    case "bottom":
      return YGEdge.Bottom;
    case "start":
      return YGEdge.Start;
    case "end":
      return YGEdge.End;
    case "vertical":
      return YGEdge.Vertical;
    case "horizontal":
      return YGEdge.Horizontal;
    case "all":
      return YGEdge.All;
  }
}


function _toYGFlexAlignContent(value: FlexAlignContent) {
  switch (value) {
    case FlexAlignContent.Stretch:
      return YGAlign.Stretch;
    case FlexAlignContent.Center:
      return YGAlign.Center;
    case FlexAlignContent.FlexEnd:
      return YGAlign.FlexEnd;
    case FlexAlignContent.FlexStart:
      return YGAlign.FlexStart;
    case FlexAlignContent.SpaceAround:
      return YGAlign.SpaceAround;
    case FlexAlignContent.SpaceBetween:
      return YGAlign.SpaceBetween;
  }
}
