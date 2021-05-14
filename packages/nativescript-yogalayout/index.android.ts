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
import {layout} from '@nativescript/core/utils';
import {
  alignSelfProperty, FlexAlignContent,
  FlexAlignItems, FlexAlignSelf, flexBasisProperty,
  FlexDirection, flexDirectionProperty, flexGrowProperty,
  FlexJustify, flexProperty, flexShrinkProperty,
  FlexWrap,
  Overflow,
  ParsedValueType,
  Position,
  toYGValue,
  ViewBase,
  alignContentProperty
} from './common';


declare const io;

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
    const json = {};

    this._updateWidth(this.width, null, json);
    this._updateHeight(this.height, null, json);
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

    const data = JSON.stringify(json);
    io.github.triniwiz.yogalayout.Utils.batch(data, this.nativeView);
  }

  _isSingle(value: string) {
    if (typeof value === 'string') {
      return value.split(' ').length > 1;
    }
    return true;
  }

  @profile
  onLoaded() {
    super.onLoaded();
    this._children.forEach((child) => {
      if (child.parent !== this) {
        this._addPropertyChangeHandler(child);
        this._addView(child);
      }
      const json = {
        alignSelf: child.style.alignSelf,
        flexGrow: child.style.flexGrow,
        flexShrink: child.style.flexShrink,
        flex: child.style.flex
      };
      // @ts-ignore
      this.nativeView.addView(child.nativeView);
    /*  const node = this.nativeView.getYogaNodeForView(child.nativeView);
      //  node.setFlexGrow(child.flexGrow);
      //  node.setFlexShrink(child.flexShrink);
      switch (child.alignSelf) {
        case "auto":
          node.setAlignSelf(com.facebook.yoga.YogaAlign.AUTO);
          break;
        case "center":
          node.setAlignSelf(com.facebook.yoga.YogaAlign.CENTER);
          break;
        case "baseline":
          node.setAlignSelf(com.facebook.yoga.YogaAlign.BASELINE);
          break;
        case "flex-end":
          node.setAlignSelf(com.facebook.yoga.YogaAlign.FLEX_END);
          break;
        case "flex-start":
          node.setAlignSelf(com.facebook.yoga.YogaAlign.FLEX_START);
          break;
        case "stretch":
          node.setAlignSelf(com.facebook.yoga.YogaAlign.STRETCH);
          break;
      }
      */

      const data = JSON.stringify(json);
      console.log('data', data);
      io.github.triniwiz.yogalayout.Utils.batchChild(data, this.nativeView, child.nativeView);
    });
  }

  disposeNativeView() {
    super.disposeNativeView();
    this._children.forEach(view => {
      this._removePropertyChangeHandler(view);
    })
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

  _updateWidth(value, force = false, json = null) {
    if (this.nativeView) {
      const yg = toYGValue(value);
      switch (yg.type) {
        case ParsedValueType.Auto:
          if (json) {
            json['width'] = 'auto';
          } else {
            this.yogaNode.setWidthAuto();
          }

          break;
        case ParsedValueType.Px:
          if (json) {
            json['width'] = `${yg.value}`;
          } else {
            this.yogaNode.setWidth(yg.value);
          }

          break;
        case ParsedValueType.Percent:
          if (json) {
            json['width'] = `${yg.value * 100}%`
          } else {
            this.yogaNode.setWidthPercent(yg.value * 100);
          }

          break;
        case ParsedValueType.Dip:
          if (json) {
            json['width'] = `${layout.toDevicePixels(yg.value)}`;
          } else {
            this.yogaNode.setWidth(layout.toDevicePixels(yg.value));
          }
          break;
      }
    }
  }

  _updateHeight(value, force = false, json = null) {
    if (this.nativeView) {
      const yg = toYGValue(value);
      switch (yg.type) {
        case ParsedValueType.Auto:
          if (json) {
            json['height'] = 'auto';
          } else {
            this.yogaNode.setHeightAuto();
          }
          break;
        case ParsedValueType.Px:
          if (json) {
            json['height'] = `${yg.value}`;
          } else {
            this.yogaNode.setHeight(yg.value);
          }
          break;
        case ParsedValueType.Percent:
          if (json) {
            json['height'] = `${yg.value * 100}%`
          } else {
            this.yogaNode.setHeightPercent(yg.value * 100);
          }
          break;
        case ParsedValueType.Dip:
          if (json) {
            json['height'] = `${layout.toDevicePixels(yg.value)}`;
          } else {
            this.yogaNode.setHeight(layout.toDevicePixels(yg.value));
          }
          break;
      }
    }
  }

  _updateMaxWidth(value, force = false, json = null) {
    if (value !== 'auto') {
      if (this.nativeView) {
        const yg = toYGValue(value);
        switch (yg.type) {
          case ParsedValueType.Auto:
            break;
          case ParsedValueType.Px:
            if (json) {
              json['maxWidth'] = `${yg.value}`;
            } else {
              this.yogaNode.setMaxWidth(yg.value);
            }
            break;
          case ParsedValueType.Percent:
            if (json) {
              json['maxWidth'] = `${yg.value * 100}%`
            } else {
              this.yogaNode.setMaxWidthPercent(yg.value * 100);
            }
            break;
          case ParsedValueType.Dip:
            if (json) {
              json['maxWidth'] = `${layout.toDevicePixels(yg.value)}`;
            } else {
              this.yogaNode.setMaxWidth(layout.toDevicePixels(yg.value));
            }
            break;
        }
      }
    }
  }

  _updateMaxHeight(value, force = false, json = null) {
    if (value !== 'auto') {
      const yg = toYGValue(value);
      switch (yg.type) {
        case ParsedValueType.Auto:
          break;
        case ParsedValueType.Px:
          if (json) {
            json['maxHeight'] = `${yg.value}`;
          } else {
            this.yogaNode.setMaxHeight(yg.value);
          }
          break;
        case ParsedValueType.Percent:
          if (json) {
            json['maxHeight'] = `${yg.value * 100}%`
          } else {
            this.yogaNode.setMaxHeightPercent(yg.value * 100);
          }


          break;
        case ParsedValueType.Dip:
          if (json) {
            json['maxHeight'] = `${layout.toDevicePixels(yg.value)}`;
          } else {
            this.yogaNode.setMaxHeight(layout.toDevicePixels(yg.value));
          }


          break;
      }
    }
  }

  _updateAlignItems(value, force = false, json = null) {
    if (this.nativeView) {
      if (json) {
        json['alignItems'] = value;
      } else {
        this.yogaNode.setAlignItems(_toYGFlexAlignItems(value));
      }
    }
  }

  _updateOverflow(value, force = false, json = null) {
    if (this.nativeView) {
      if (json) {
        json['overflow'] = value;
      } else {
        this.yogaNode.setOverflow(_toYGOverflow(value));
      }
    }
  }

  _updatePosition(value, force = false, json = null) {
    if (this.nativeView) {
      if (json) {
        json['position'] = value;
      } else {
        this.yogaNode.setPositionType(_toYGPosition(value));
      }
    }
  }

  _updateFlex(value, force = false, json = null) {
    if (this.nativeView) {
      if (json) {
        json['flex'] = value;
      } else {
        this.yogaNode.setFlex(value);
      }
    }
  }

  _updateFlexDirection(value, force = false, json = null) {
    if (this.nativeView) {
      if (json) {
        json['flexDirection'] = value;
      } else {
        this.yogaNode.setFlexDirection(_toYGFlexDirection(value));
      }
    }
  }

  _setPositionValue(value, position, json) {
    if (!this.nativeView || value === 'auto' || value?.type === 'auto') {
      return
    }
    const yg = toYGValue(value);
    switch (yg.type) {
      case ParsedValueType.Auto:
        break;
      case ParsedValueType.Px:
        if (json) {
          json[position] = `${yg.value}`;
        } else {
          this.nativeView.getYogaNode().setPosition(_toYGEdge(position), yg.value);
        }

        break;
      case ParsedValueType.Percent:
        if (json) {
          json[position] = `${yg.value * 100}%`;
        } else {
          this.nativeView.getYogaNode().setPositionPercent(_toYGEdge(position), yg.value * 100);
        }
        break;
      case ParsedValueType.Dip:
        if (json) {
          json[position] = `${layout.toDevicePixels(yg.value)}`;
        } else {
          this.nativeView.getYogaNode().setPosition(_toYGEdge(position), layout.toDevicePixels(yg.value));
        }
        break;
    }
  }

  _getPositionValue(position) {
    const value = this.nativeView.getYogaNode().getPosition(_toYGEdge(position));
    switch (value.unit) {
      case com.facebook.yoga.YogaUnit.POINT:
        return {value: value.value, unit: "px"};
      case com.facebook.yoga.YogaUnit.PERCENT:
        return {value: value.value / 100, unit: "%"}
      case com.facebook.yoga.YogaUnit.AUTO:
        return "auto";
      case com.facebook.yoga.YogaUnit.UNDEFINED:
        return undefined;
    }
  }

  _updateLeft(value, force = false, json = null) {
    if (this.nativeView) {
      this._setPositionValue(value, "left", json);
    }
  }

  _updateTop(value, force = false, json = null) {
    if (this.nativeView) {
      this._setPositionValue(value, "top", json);
    }
  }

  _updateRight(value, force = false, json = null) {
    if (this.nativeView) {
      this._setPositionValue(value, "right", json);
    }
  }

  _updateBottom(value, force = false, json = null) {
    if (this.nativeView) {
      this._setPositionValue(value, "bottom", json);
    }
  }

  _setPaddingValue(value, position, json) {
    if (!this.yogaNode || value === 'auto' || value?.type === 'auto') {
      return
    }
    const yg = toYGValue(value);
    const unit = yg.type === ParsedValueType.Percent ? '%' : '';
    let padding = 0;
    switch (yg.type) {
      case ParsedValueType.Auto:
        break;
      case ParsedValueType.Px:
        if (json) {
          padding = yg.value;
        } else {
          this.yogaNode.setPadding(_toYGEdge(position), yg.value);
        }

        break;
      case ParsedValueType.Percent:
        if (json) {
          padding = yg.value * 100;
        } else {
          this.yogaNode.setPaddingPercent(_toYGEdge(position), yg.value * 100);
        }

        break;
      case ParsedValueType.Dip:
        if (json) {
          padding = layout.toDevicePixels(yg.value);
        } else {
          this.yogaNode.setPadding(_toYGEdge(position), layout.toDevicePixels(yg.value));
        }

        break;
    }

    if (json) {
      if (position === 'all') {
        json['paddingLeft'] = `${padding}${unit}`;
        json['paddingTop'] = `${padding}${unit}`;
        json['paddingRight'] = `${padding}${unit}`;
        json['paddingBottom'] = `${padding}${unit}`;
      } else {
        json[`padding${firstCharToUpperCase(position)}`] = `${padding}${unit}`;
      }
    }
  }

  _getPaddingValue(position) {
    const value = this.yogaNode.getPadding(_toYGEdge(position));
    switch (value.unit) {
      case com.facebook.yoga.YogaUnit.POINT:
        return {value: value.value, unit: "px"};
      case com.facebook.yoga.YogaUnit.PERCENT:
        return {value: value.value / 100, unit: "%"}
      case com.facebook.yoga.YogaUnit.AUTO:
        return "auto";
      case com.facebook.yoga.YogaUnit.UNDEFINED:
        return undefined;
    }
  }

  _updatePadding(value, force = false, json = null) {
    if (this.nativeView) {
      this._setPaddingValue(value, "all", json);
    }
  }

  _updatePaddingLeft(value, force = false, json = null) {
    if (this.nativeView) {
      this._setPaddingValue(value, "left", json);
    }
  }

  _updatePaddingTop(value, force = false, json = null) {
    if (this.nativeView) {
      this._setPaddingValue(value, "top", json);
    }
  }

  _updatePaddingRight(value, force = false, json = null) {
    if (this.nativeView) {
      this._setPaddingValue(value, "right", json);
    }
  }

  _updatePaddingBottom(value, force = false, json = null) {
    if (this.nativeView) {
      this._setPaddingValue(value, "bottom", json);
    }
  }

  _setMarginValue(value, position, json) {
    if (!this.yogaNode || value === undefined || value === 'auto' || value?.type === 'auto') {
      return
    }
    const yg = toYGValue(value);
    const unit = yg.type === ParsedValueType.Percent ? '%' : '';
    let margin = 0;
    switch (yg.type) {
      case ParsedValueType.Auto:
        break;
      case ParsedValueType.Px:
        if (json) {
          margin = yg.value;
        } else {
          this.yogaNode.setMargin(_toYGEdge(position), yg.value);
        }

        break;
      case ParsedValueType.Percent:
        if (json) {
          margin = yg.value * 100;
        } else {
          this.yogaNode.setMarginPercent(_toYGEdge(position), yg.value * 100);
        }

        break;
      case ParsedValueType.Dip:
        if (json) {
          margin = layout.toDevicePixels(yg.value);
        } else {
          this.yogaNode.setMargin(_toYGEdge(position), layout.toDevicePixels(yg.value));
        }

        break;
    }

    if (json) {
      if (position === 'all') {
        json['marginLeft'] = `${margin}${unit}`;
        json['marginTop'] = `${margin}${unit}`;
        json['marginRight'] = `${margin}${unit}`;
        json['marginBottom'] = `${margin}${unit}`;
      } else {
        json[`margin${firstCharToUpperCase(position)}`] = `${margin}${unit}`;
      }
    }
  }

  _getMarginValue(position) {
    const value = this.nativeView.getYogaNode().getMargin(_toYGEdge(position));
    switch (value.unit) {
      case com.facebook.yoga.YogaUnit.POINT:
        return {value: value.value, unit: "px"};
      case com.facebook.yoga.YogaUnit.PERCENT:
        return {value: value.value / 100, unit: "%"}
      case com.facebook.yoga.YogaUnit.AUTO:
        return "auto";
      case com.facebook.yoga.YogaUnit.UNDEFINED:
        return undefined;
    }
  }

  _updateMargin(value, force = false, json = null) {
    if (this.nativeView) {
      this._setMarginValue(value, "all", json);
    }
  }

  _updateMarginLeft(value, force = false, json = null) {
    if (this.nativeView) {
      this._setMarginValue(value, "left", json);
    }
  }

  _updateMarginTop(value, force = false, json = null) {
    if (this.nativeView) {
      this._setMarginValue(value, "top", json);
    }
  }

  _updateMarginRight(value, force = false, json = null) {
    if (this.nativeView) {
      this._setMarginValue(value, "right", json);
    }
  }

  _updateMarginBottom(value, force = false, json = null) {
    if (this.nativeView) {
      this._setMarginValue(value, "bottom", json);
    }
  }

  _updateJustifyContent(value: any, force = false, json = null) {
    if (this.nativeView) {
      if (json) {
        json['justifyContent'] = value;
      } else {
        switch (value) {
          case FlexJustify.FlexStart:
            this.nativeView.getYogaNode().setJustifyContent(com.facebook.yoga.YogaJustify.FLEX_START);
            break;
          case FlexJustify.FlexEnd:
            this.nativeView.getYogaNode().setJustifyContent(com.facebook.yoga.YogaJustify.FLEX_END);
            break;
          case FlexJustify.Center:
            this.nativeView.getYogaNode().setJustifyContent(com.facebook.yoga.YogaJustify.CENTER);
            break;
          case FlexJustify.SpaceAround:
            this.nativeView.getYogaNode().setJustifyContent(com.facebook.yoga.YogaJustify.SPACE_AROUND);
            break;
          case FlexJustify.SpaceBetween:
            this.nativeView.getYogaNode().setJustifyContent(com.facebook.yoga.YogaJustify.SPACE_BETWEEN);
            break;
          case FlexJustify.SpaceEvenly:
            this.nativeView.getYogaNode().setJustifyContent(com.facebook.yoga.YogaJustify.SPACE_EVENLY);
            break;
        }
      }
    }
  }

  _updateFlexWrap(value: any, force = false, json = null) {
    if (this.nativeView) {
      if (json) {
        json['flexWrap'] = value;
      } else {
        switch (value) {
          case FlexWrap.NoWrap:
            this.nativeView.getYogaNode().setWrap(com.facebook.yoga.YogaWrap.NO_WRAP);
            break;
          case FlexWrap.Wrap:
            this.nativeView.getYogaNode().setWrap(com.facebook.yoga.YogaWrap.WRAP);
            break
          case FlexWrap.WrapReverse:
            this.nativeView.getYogaNode().setWrap(com.facebook.yoga.YogaWrap.WRAP_REVERSE);
            break
        }
      }
    }
  }

  _updateAlignSelf(value, force = false, json = null) {
    if (this.nativeView) {
      if (json) {
        json['alignItems'] = value;
      } else {
        this.yogaNode.setAlignSelf(_toYGFlexAlignSelf(value));
      }
    }
  }

  _updateFlexGrow(value, force = false, json = null) {
    if (this.nativeView) {
      if (json) {
        json['flexGrow'] = value;
      } else {
        this.yogaNode.setFlexGrow(value);
      }
    }
  }

  _updateFlexShrink(value, force = false, json = null) {
    if (this.nativeView) {
      if (json) {
        json['flexShrink'] = value
      } else {
        this.yogaNode.setFlexShrink(value);
      }
    }
  }

  _updateFlexBasis(value, force = false, json = null) {
    if (this.nativeView) {
      const yg = toYGValue(value);
      switch (yg.type) {
        case ParsedValueType.Auto:
          if (json) {
            json['flexBasis'] = 'auto';
          } else {
            this.yogaNode.setFlexBasisAuto();
          }
          break;
        case ParsedValueType.Px:
          if (json) {
            json['flexBasis'] = `${yg.value}`;
          } else {
            this.yogaNode.setFlexBasis(yg.value);
          }
          break;
        case ParsedValueType.Percent:
          if (json) {
            json['flexBasis'] = `${yg.value * 100}%`
          } else {
            this.yogaNode.setFlexBasisPercent(yg.value * 100);
          }

          break;
        case ParsedValueType.Dip:
          if (json) {
            json['flexBasis'] = `${layout.toDevicePixels(yg.value)}`;
          } else {
            this.yogaNode.setFlexBasis(layout.toDevicePixels(yg.value));
          }
          break;
      }
    }
  }

  _updateAlignContent(value, force = false, json = null) {
    if (this.nativeView) {
      if (json) {
        json['alignContent'] = value;
      } else {
        this.yogaNode.setAlignContent(_toYGFlexAlignContent(value));
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


  // @ts-ignore
  set alignItems(value) {
    this.style.alignItems = value;
    this._updateAlignItems(value);
  }

  // @ts-ignore
  get alignItems() {
    return this.style.alignItems;
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

}

function _toYGFlexDirection(value: FlexDirection) {
  switch (value) {
    case FlexDirection.Row:
      return com.facebook.yoga.YogaFlexDirection.ROW;
    case FlexDirection.Column:
      return com.facebook.yoga.YogaFlexDirection.COLUMN;
    case FlexDirection.ColumnReverse:
      return com.facebook.yoga.YogaFlexDirection.COLUMN_REVERSE;
    case FlexDirection.RowReverse:
      return com.facebook.yoga.YogaFlexDirection.ROW_REVERSE;
  }
}

function _toYGFlexAlignItems(value: FlexAlignItems) {
  switch (value) {
    case FlexAlignItems.Stretch:
      return com.facebook.yoga.YogaAlign.STRETCH;
    case FlexAlignItems.Center:
      return com.facebook.yoga.YogaAlign.CENTER;
    case FlexAlignItems.FlexEnd:
      return com.facebook.yoga.YogaAlign.FLEX_END;
    case FlexAlignItems.FlexStart:
      return com.facebook.yoga.YogaAlign.FLEX_START;
    case FlexAlignItems.BaseLine:
      return com.facebook.yoga.YogaAlign.BASELINE;
  }
}

function _toYGOverflow(value: Overflow) {
  switch (value) {
    case Overflow.Visible:
      return com.facebook.yoga.YogaOverflow.VISIBLE;
    case Overflow.Hidden:
      return com.facebook.yoga.YogaOverflow.HIDDEN;
    case Overflow.Scroll:
      return com.facebook.yoga.YogaOverflow.SCROLL;
  }
}

function _toYGPosition(value: Position) {
  switch (value) {
    case Position.Relative:
      return com.facebook.yoga.YogaPositionType.RELATIVE;
    case Position.Absolute:
      return com.facebook.yoga.YogaPositionType.ABSOLUTE;
  }
}

function _toYGEdge(value: "left" | "top" | "right" | "bottom" | "start" | "end" | "all" | "vertical" | "horizontal") {
  switch (value) {
    case "left":
      return com.facebook.yoga.YogaEdge.LEFT;
    case "top":
      return com.facebook.yoga.YogaEdge.TOP;
    case "right":
      return com.facebook.yoga.YogaEdge.RIGHT;
    case "bottom":
      return com.facebook.yoga.YogaEdge.BOTTOM;
    case "start":
      return com.facebook.yoga.YogaEdge.START;
    case "end":
      return com.facebook.yoga.YogaEdge.END;
    case "vertical":
      return com.facebook.yoga.YogaEdge.VERTICAL;
    case "horizontal":
      return com.facebook.yoga.YogaEdge.HORIZONTAL;
    case "all":
      return com.facebook.yoga.YogaEdge.ALL;
  }
}

function firstCharToUpperCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function _toYGFlexAlignSelf(value: FlexAlignSelf) {
  switch (value) {
    case FlexAlignSelf.Stretch:
      return com.facebook.yoga.YogaAlign.STRETCH;
    case FlexAlignSelf.Center:
      return com.facebook.yoga.YogaAlign.CENTER;
    case FlexAlignSelf.FlexEnd:
      return com.facebook.yoga.YogaAlign.FLEX_END;
    case FlexAlignSelf.FlexStart:
      return com.facebook.yoga.YogaAlign.FLEX_START;
    case FlexAlignSelf.BaseLine:
      return com.facebook.yoga.YogaAlign.BASELINE;
    case FlexAlignSelf.Auto:
      return com.facebook.yoga.YogaAlign.BASELINE;
  }
}

function _toYGFlexAlignContent(value: FlexAlignContent) {
  switch (value) {
    case FlexAlignContent.Stretch:
      return com.facebook.yoga.YogaAlign.STRETCH;
    case FlexAlignContent.Center:
      return com.facebook.yoga.YogaAlign.CENTER;
    case FlexAlignContent.FlexEnd:
      return com.facebook.yoga.YogaAlign.FLEX_END;
    case FlexAlignContent.FlexStart:
      return com.facebook.yoga.YogaAlign.FLEX_START;
    case FlexAlignContent.SpaceBetween:
      return com.facebook.yoga.YogaAlign.SPACE_BETWEEN;
    case FlexAlignContent.SpaceAround:
      return com.facebook.yoga.YogaAlign.SPACE_AROUND;
  }
}
