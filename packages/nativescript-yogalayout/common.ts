import {
  AddChildFromBuilder,
  Property,
  View as NSView,
  PercentLength,
  Style,
  CssProperty,
  PropertyChangeData
} from '@nativescript/core';
import {layout as nsLayout} from '@nativescript/core/utils';

declare const com, io, YGNodeStyleGetPosition, YGUnit, YGJustify, YGWrap, YGFlexDirection, YGAlign, YGOverflow, YGPositionType, YGValueAuto, YGPercentValue, YGPointValue, YGValueZero, YGEdge, YGDirection;

export enum ParsedValueType {
  Auto = 'auto',
  Px = 'px',
  Dip = 'dip',
  Percent = '%',
}

export interface ParsedValue {
  type: ParsedValueType;
  value: number;
}

export type SizeType = PercentLength | string;

export enum FlexDirection {
  Row = 'row',
  RowReverse = 'row-reverse',
  Column = 'column',
  ColumnReverse = 'column-reverse',
}

export enum FlexAlignSelf {
  Auto = 'auto',
  FlexStart = 'flex-start',
  FlexEnd = 'flex-end',
  Center = 'center',
  Stretch = 'stretch',
  BaseLine = 'baseline',
}

export enum FlexAlignItems {
  FlexStart = 'flex-start',
  FlexEnd = 'flex-end',
  Center = 'center',
  Stretch = 'stretch',
  BaseLine = 'baseline',
}

export enum FlexJustify {
  FlexStart = 'flex-start',
  Center = 'center',
  FlexEnd = 'flex-end',
  SpaceBetween = 'space-between',
  SpaceAround = 'space-around',
  SpaceEvenly = 'space-evenly',
}

export enum FlexAlignContent {
  Stretch = 'stretch',
  FlexStart = 'flex-start',
  Center = 'center',
  FlexEnd = 'flex-end',
  SpaceBetween = 'space-between',
  SpaceAround = 'space-around',
}

export enum Overflow {
  Visible = 'visible',
  Hidden = 'hidden',
  Scroll = 'scroll',
}

export enum Position {
  Relative = 'relative',
  Absolute = 'absolute',
}

export enum FlexWrap {
  Wrap = 'wrap',
  NoWrap = 'no-wrap',
  WrapReverse = 'wrap-reverse',
}

export enum Direction {
  Inherit = 'inherit',
  Ltr = 'ltr',
  Rtl = 'rtl',
}

export function toYGValue(value: SizeType): ParsedValue {
  if (typeof value === 'string') {
    if (value === 'auto') {
      return {type: ParsedValueType.Auto, value: 0};
    } else {
      const val = parseInt(value, 10);

      if (!isNaN(val)) {
        return {type: ParsedValueType.Dip, value: val};
      }
    }
  } else if (typeof value === 'number') {
    return {type: ParsedValueType.Dip, value};
  } else {
    if (value) {
      // @ts-ignore
      switch (value.unit) {
        case '%':
          // @ts-ignore
          return {type: ParsedValueType.Percent, value: value.value};
        case 'px':
          // @ts-ignore
          return {type: ParsedValueType.Px, value: value.value};
        case 'dip':
          // @ts-ignore
          return {type: ParsedValueType.Dip, value: value.value};
      }
    }
  }

  return {type: ParsedValueType.Auto, value: 0};
}

export abstract class ViewBase extends NSView implements AddChildFromBuilder {
  maxWidth: SizeType;
  maxHeight: SizeType;
  flex: number;
  flexDirection: FlexDirection;
  alignItems: FlexAlignItems;
  overflow: Overflow;
  position: Position;
  aspectRatio: number;

  left: any; /* SizeType */
  top: any; /* SizeType */
  right: any; /* SizeType */
  bottom: any; /* SizeType */
  start: any;
  end: any;
  direction: Direction;
  paddingHorizontal: any;
  paddingVertical: any;
  marginHorizontal: any;
  marginVertical: any;
  ios: any;
  android: any;
  yoga: any;
  yogaNode;

  abstract _addChildFromBuilder(name: string, value: any): void;

  abstract addChild(views: NSView);

  abstract addChildren(view: NSView[]);

  abstract removeChild(view: NSView);

  abstract getChildAt(index: number): NSView;

  abstract getChildIndex(view: NSView): number;

  abstract getChildrenCount(): number;

  abstract removeAllChildren();

  _addPropertyChangeHandler(view: NSView) {
    const style = view.style;
    style.on('flexChange', this._onPropertyChange, this);
    style.on('flexGrowChange', this._onPropertyChange, this);
    style.on('flexShrinkChange', this._onPropertyChange, this);
    style.on('flexWrapBeforeChange', this._onPropertyChange, this);
    style.on('alignSelfChange', this._onPropertyChange, this);
    style.on('orderChange', this._onPropertyChange, this);
  }

  _removePropertyChangeHandler(view: NSView) {
    const style = view.style;
    style.off('flexChange', this._onPropertyChange, this);
    style.off('flexGrowChange', this._onPropertyChange, this);
    style.off('flexShrinkChange', this._onPropertyChange, this);
    style.off('flexWrapBeforeChange', this._onPropertyChange, this);
    style.off('alignSelfChange', this._onPropertyChange, this);
    style.off('orderChange', this._onPropertyChange, this);
  }

  _onPropertyChange(data: PropertyChangeData) {
    /* switch (data.propertyName) {
       case 'flexGrowChange':
         break;
       case 'flexShrinkChange':
         break;
       case 'flexWrapBeforeChange':
         break;
       case 'alignSelfChange':
         break;
     }
     */
  }

  _updateWidth(value, force = false, json = null, layout = null) {
    if (this.nativeView) {
      if (global.isAndroid) {
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
              json['width'] = `${yg.value * 100}%`;
            } else {
              this.yogaNode.setWidthPercent(yg.value * 100);
            }
            break;
          case ParsedValueType.Dip:
            if (json) {
              json['width'] = `${nsLayout.toDevicePixels(yg.value)}`;
            } else {
              this.yogaNode.setWidth(nsLayout.toDevicePixels(yg.value));
            }
            break;
        }
      } else if (global.isIOS) {
        (layout || this.nativeView.yoga).width = _toNativeYG(value);
        if (force) {
          (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
        }
      }
    }
  }

  _updateHeight(value, force = false, json = null, layout = null) {
    if (this.nativeView) {
      if (global.isAndroid) {
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
              json['height'] = `${yg.value * 100}%`;
            } else {
              this.yogaNode.setHeightPercent(yg.value * 100);
            }
            break;
          case ParsedValueType.Dip:
            if (json) {
              json['height'] = `${nsLayout.toDevicePixels(yg.value)}`;
            } else {
              this.yogaNode.setHeight(nsLayout.toDevicePixels(yg.value));
            }
            break;
        }
      } else if (global.isIOS) {
        (layout || this.nativeView.yoga).height = _toNativeYG(value);
        if (force) {
          (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
        }
      }
    }
  }

  _updateMinWidth(value, force = false, json = null, layout = null) {
    if (value !== 'none') {
      if (this.nativeView) {
        if (global.isAndroid) {
          const yg = toYGValue(value);
          switch (yg.type) {
            case ParsedValueType.Auto:
              break;
            case ParsedValueType.Px:
              if (json) {
                json['minWidth'] = `${yg.value}`;
              } else {
                this.yogaNode.setMinWidth(yg.value);
              }
              break;
            case ParsedValueType.Percent:
              if (json) {
                json['minWidth'] = `${yg.value * 100}%`;
              } else {
                this.yogaNode.setMinWidthPercent(yg.value * 100);
              }
              break;
            case ParsedValueType.Dip:
              if (json) {
                json['minWidth'] = `${nsLayout.toDevicePixels(yg.value)}`;
              } else {
                this.yogaNode.setMinWidth(nsLayout.toDevicePixels(yg.value));
              }
              break;
          }
        } else if (global.isIOS) {
          (layout || this.nativeView.yoga).minWidth = _toNativeYG(value);
          if (force) {
            (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
          }
        }
      }
    }
  }

  _updateMinHeight(value, force = false, json = null, layout = null) {
    if (value !== 'none') {
      if (this.nativeView) {
        if (global.isAndroid) {
          const yg = toYGValue(value);
          switch (yg.type) {
            case ParsedValueType.Auto:
              break;
            case ParsedValueType.Px:
              if (json) {
                json['minHeight'] = `${yg.value}`;
              } else {
                this.yogaNode.setMinHeight(yg.value);
              }
              break;
            case ParsedValueType.Percent:
              if (json) {
                json['minHeight'] = `${yg.value * 100}%`;
              } else {
                this.yogaNode.setMinHeightPercent(yg.value * 100);
              }

              break;
            case ParsedValueType.Dip:
              if (json) {
                json['minHeight'] = `${nsLayout.toDevicePixels(yg.value)}`;
              } else {
                this.yogaNode.setMinHeight(nsLayout.toDevicePixels(yg.value));
              }

              break;
          }
        } else if (global.isIOS) {
          (layout || this.nativeView.yoga).minHeight = _toNativeYG(value);
          if (force) {
            (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
          }
        }
      }
    }
  }

  _updateMaxWidth(value, force = false, json = null, layout = null) {
    if (value !== 'none') {
      if (this.nativeView) {
        if (global.isAndroid) {
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
                json['maxWidth'] = `${yg.value * 100}%`;
              } else {
                this.yogaNode.setMaxWidthPercent(yg.value * 100);
              }
              break;
            case ParsedValueType.Dip:
              if (json) {
                json['maxWidth'] = `${nsLayout.toDevicePixels(yg.value)}`;
              } else {
                this.yogaNode.setMaxWidth(nsLayout.toDevicePixels(yg.value));
              }
              break;
          }
        } else if (global.isIOS) {
          (layout || this.nativeView.yoga).maxWidth = _toNativeYG(value);
          if (force) {
            (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
          }
        }
      }
    }
  }

  _updateMaxHeight(value, force = false, json = null, layout = null) {
    if (value !== 'none') {
      if (this.nativeView) {
        if (global.isAndroid) {
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
                json['maxHeight'] = `${yg.value * 100}%`;
              } else {
                this.yogaNode.setMaxHeightPercent(yg.value * 100);
              }

              break;
            case ParsedValueType.Dip:
              if (json) {
                json['maxHeight'] = `${nsLayout.toDevicePixels(yg.value)}`;
              } else {
                this.yogaNode.setMaxHeight(nsLayout.toDevicePixels(yg.value));
              }

              break;
          }
        } else if (global.isIOS) {
          (layout || this.nativeView.yoga).maxHeight = _toNativeYG(value);
          if (force) {
            (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
          }
        }
      }
    }
  }

  _updateAlignItems(value, force = false, json = null, layout = null) {
    if (this.nativeView) {
      if (global.isAndroid) {
        if (json) {
          json['alignItems'] = value;
        } else {
          this.yogaNode.setAlignItems(_toYGFlexAlignItems(value));
        }
      } else if (global.isIOS) {
        (layout || this.nativeView.yoga).alignItems = _toYGFlexAlignItems(value);
        if (force) {
          (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
        }
      }
    }
  }

  _updateOverflow(value, force = false, json = null, layout = null) {
    if (this.nativeView) {
      if (global.isAndroid) {
        if (json) {
          json['overflow'] = value;
        } else {
          this.yogaNode.setOverflow(_toYGOverflow(value));
        }
      } else if (global.isIOS) {
        (layout || this.nativeView.yoga).overflow = _toYGOverflow(value);
        console.log('flow ?',_toYGOverflow(value), value);
        if (force) {
          (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
        }
      }
    }
  }

  _updatePosition(value, force = false, json = null, layout = null) {
    if (this.nativeView) {
      if (global.isAndroid) {
        if (json) {
          json['position'] = value;
        } else {
          this.yogaNode.setPositionType(_toYGPosition(value));
        }
      } else if (global.isIOS) {
        (layout || this.nativeView.yoga).position = _toYGPosition(value);
        if (force) {
          (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
        }
      }
    }
  }

  _updateFlex(value, force = false, json = null, layout = null) {
    if (value === 1) {
      return;
    }
    if (this.nativeView) {
      if (global.isAndroid) {
        if (json) {
          json['flex'] = value;
        } else {
          this.yogaNode.setFlex(value);
        }
      } else if (global.isIOS) {
        (layout || this.nativeView.yoga).flex = value;
        if (force) {
          (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
        }
      }
    }
  }

  _updateFlexDirection(value, force = false, json = null, layout = null) {
    if (this.nativeView) {
      if (global.isAndroid) {
        if (json) {
          json['flexDirection'] = value;
        } else {
          this.yogaNode.setFlexDirection(_toYGFlexDirection(value));
        }
      } else if (global.isIOS) {
        (layout || this.nativeView.yoga).flexDirection = _toYGFlexDirection(value);
        if (force) {
          (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
        }
      }
    }
  }

  _setPositionValue(value, position, json = null, layout = null) {
    if (value === undefined || !this.nativeView || value === 'auto' || value?.type === 'auto') {
      return;
    }
    if (global.isAndroid) {
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
            json[position] = `${nsLayout.toDevicePixels(yg.value)}`;
          } else {
            this.nativeView.getYogaNode().setPosition(_toYGEdge(position), nsLayout.toDevicePixels(yg.value));
          }
          break;
      }
    } else if (global.isIOS) {
      switch (position) {
        case 'left':
          (layout || this.nativeView.yoga).left = _toNativeYG(value);
          break;
        case 'top':
          (layout || this.nativeView.yoga).top = _toNativeYG(value);
          break;
        case 'right':
          (layout || this.nativeView.yoga).right = _toNativeYG(value);
          break;
        case 'bottom':
          (layout || this.nativeView.yoga).bottom = _toNativeYG(value);
          break;
        case 'start':
          (layout || this.nativeView.yoga).start = _toNativeYG(value);
          break;
        case 'end':
          (layout || this.nativeView.yoga).end = _toNativeYG(value);
          break;
        case 'vertical':
          break;
        case 'horizontal':
          break;
        case 'all':
          break;
      }
    }
  }

  _getPositionValue(position, layout = null) {
    if (global.isAndroid) {
      const value = this.nativeView.getYogaNode().getPosition(_toYGEdge(position));
      switch (value.unit) {
        case com.facebook.yoga.YogaUnit.POINT:
          return {value: value.value, unit: 'px'};
        case com.facebook.yoga.YogaUnit.PERCENT:
          return {value: value.value / 100, unit: '%'};
        case com.facebook.yoga.YogaUnit.AUTO:
          return 'auto';
        case com.facebook.yoga.YogaUnit.UNDEFINED:
          return undefined;
      }
    } else if (global.isIOS) {
      const value = YGNodeStyleGetPosition((layout || this.nativeView.yoga) as any, _toYGEdge(position));
      switch (value.unit) {
        case YGUnit.Point:
          return {value: value.value, unit: 'px'};
        case YGUnit.Percent:
          return {value: value.value / 100, unit: '%'};
        case YGUnit.Auto:
          return 'auto';
        case YGUnit.Undefined:
          return undefined;
      }
    }
  }

  _updateLeft(value, force = false, json = null, layout = null) {
    if (this.nativeView) {
      this._setPositionValue(value, 'left', json);
      if (global.isIOS) {
        (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updateTop(value, force = false, json = null, layout = null) {
    if (this.nativeView) {
      this._setPositionValue(value, 'top', json);
      if (global.isIOS) {
        (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updateRight(value, force = false, json = null, layout = null) {
    if (this.nativeView) {
      this._setPositionValue(value, 'right', json);
      if (global.isIOS) {
        (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updateBottom(value, force = false, json = null, layout = null) {
    if (this.nativeView) {
      this._setPositionValue(value, 'bottom', json);
      if (global.isIOS) {
        (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
      }
    }
  }

  _setPaddingValue(value, position, json = null, layout = null) {
    if (value === undefined || !this.yogaNode || value === 'auto' || value?.type === 'auto') {
      return;
    }
    if (global.isAndroid) {
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
            padding = nsLayout.toDevicePixels(yg.value);
          } else {
            this.yogaNode.setPadding(_toYGEdge(position), nsLayout.toDevicePixels(yg.value));
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
    } else if (global.isIOS) {
      switch (position) {
        case 'left':
          (layout || this.nativeView.yoga).paddingLeft = _toNativeYG(value);
          break;
        case 'top':
          (layout || this.nativeView.yoga).paddingTop = _toNativeYG(value);
          break;
        case 'right':
          (layout || this.nativeView.yoga).paddingRight = _toNativeYG(value);
          break;
        case 'bottom':
          (layout || this.nativeView.yoga).paddingBottom = _toNativeYG(value);
          break;
        case 'start':
          (layout || this.nativeView.yoga).paddingStart = _toNativeYG(value);
          break;
        case 'end':
          (layout || this.nativeView.yoga).paddingEnd = _toNativeYG(value);
          break;
        case 'vertical':
          (layout || this.nativeView.yoga).paddingVertical = _toNativeYG(value);
          break;
        case 'horizontal':
          (layout || this.nativeView.yoga).paddingHorizontal = _toNativeYG(value);
          break;
        case 'all':
          (layout || this.nativeView.yoga).padding = _toNativeYG(value);
          break;
      }
    }
  }

  _getPaddingValue(position, layout = null) {
    if (global.isAndroid) {
      const value = this.yogaNode.getPadding(_toYGEdge(position));
      switch (value.unit) {
        case com.facebook.yoga.YogaUnit.POINT:
          return {value: value.value, unit: 'px'};
        case com.facebook.yoga.YogaUnit.PERCENT:
          return {value: value.value / 100, unit: '%'};
        case com.facebook.yoga.YogaUnit.AUTO:
          return 'auto';
        case com.facebook.yoga.YogaUnit.UNDEFINED:
          return undefined;
      }
    } else if (global.isIOS) {
      const value = YGNodeStyleGetPosition((layout || this.nativeView.yoga) as any, _toYGEdge(position));
      switch (value.unit) {
        case YGUnit.Point:
          return {value: value.value, unit: 'px'};
        case YGUnit.Percent:
          return {value: value.value / 100, unit: '%'};
        case YGUnit.Auto:
          return 'auto';
        case YGUnit.Undefined:
          return undefined;
      }
    }
  }

  _updatePadding(value, force = false, json = null, layout = null) {
    if (this.nativeView) {
      this._setPaddingValue(value, 'all', json);
      if (global.isIOS) {
        (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updatePaddingLeft(value, force = false, json = null, layout = null) {
    if (this.nativeView) {
      this._setPaddingValue(value, 'left', json);
      if (global.isIOS) {
        (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updatePaddingTop(value, force = false, json = null, layout = null) {
    if (this.nativeView) {
      this._setPaddingValue(value, 'top', json);
      if (global.isIOS) {
        (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updatePaddingRight(value, force = false, json = null, layout = null) {
    if (this.nativeView) {
      this._setPaddingValue(value, 'right', json);
      if (global.isIOS) {
        (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updatePaddingBottom(value, force = false, json = null, layout = null) {
    if (this.nativeView) {
      this._setPaddingValue(value, 'bottom', json);
      if (global.isIOS) {
        (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
      }
    }
  }

  _setMarginValue(value, position, json = null, layout = null) {
    if (!this.yogaNode || value === undefined || value === 'auto' || value?.type === 'auto') {
      return;
    }
    if (global.isAndroid) {
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
            margin = nsLayout.toDevicePixels(yg.value);
          } else {
            this.yogaNode.setMargin(_toYGEdge(position), nsLayout.toDevicePixels(yg.value));
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
    } else if (global.isIOS) {
      if (value === undefined || value === 'auto' || value?.type === 'auto') {
        return;
      }
      switch (position) {
        case 'left':
          (layout || this.nativeView.yoga).marginLeft = _toNativeYG(value);
          break;
        case 'top':
          (layout || this.nativeView.yoga).marginTop = _toNativeYG(value);
          break;
        case 'right':
          (layout || this.nativeView.yoga).marginRight = _toNativeYG(value);
          break;
        case 'bottom':
          (layout || this.nativeView.yoga).marginBottom = _toNativeYG(value);
          break;
        case 'start':
          (layout || this.nativeView.yoga).marginStart = _toNativeYG(value);
          break;
        case 'end':
          (layout || this.nativeView.yoga).marginEnd = _toNativeYG(value);
          break;
        case 'vertical':
          (layout || this.nativeView.yoga).marginVertical = _toNativeYG(value);
          break;
        case 'horizontal':
          (layout || this.nativeView.yoga).marginHorizontal = _toNativeYG(value);
          break;
        case 'all':
          (layout || this.nativeView.yoga).margin = _toNativeYG(value);
          break;
      }
    }
  }

  _getMarginValue(position, layout = null) {
    if (global.isAndroid) {
      const value = this.nativeView.getYogaNode().getMargin(_toYGEdge(position));
      switch (value.unit) {
        case com.facebook.yoga.YogaUnit.POINT:
          return {value: value.value, unit: 'px'};
        case com.facebook.yoga.YogaUnit.PERCENT:
          return {value: value.value / 100, unit: '%'};
        case com.facebook.yoga.YogaUnit.AUTO:
          return 'auto';
        case com.facebook.yoga.YogaUnit.UNDEFINED:
          return undefined;
      }
    } else if (global.isIOS) {
      const value = YGNodeStyleGetPosition((layout || this.nativeView.yoga) as any, _toYGEdge(position));
      switch (value.unit) {
        case YGUnit.Point:
          return {value: value.value, unit: 'px'};
        case YGUnit.Percent:
          return {value: value.value / 100, unit: '%'};
        case YGUnit.Auto:
          return 'auto';
        case YGUnit.Undefined:
          return undefined;
      }
    }
  }

  _updateMargin(value, force = false, json = null, layout = null) {
    if (this.nativeView) {
      this._setMarginValue(value, 'all', json);
      if (global.isIOS) {
        (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updateMarginLeft(value, force = false, json = null, layout = null) {
    if (this.nativeView) {
      this._setMarginValue(value, 'left', json);
      if (global.isIOS) {
        (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updateMarginTop(value, force = false, json = null, layout = null) {
    if (this.nativeView) {
      this._setMarginValue(value, 'top', json);
      if (global.isIOS) {
        (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updateMarginRight(value, force = false, json = null, layout = null) {
    if (this.nativeView) {
      this._setMarginValue(value, 'right', json);
      if (global.isIOS) {
        (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updateMarginBottom(value, force = false, json = null, layout = null) {
    if (this.nativeView) {
      this._setMarginValue(value, 'bottom', json);
      if (global.isIOS) {
        (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
      }
    }
  }

  _updateJustifyContent(value: any, force = false, json = null, layout = null) {
    if (this.nativeView) {
      if (global.isAndroid) {
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
      } else if (global.isIOS) {
        switch (value) {
          case FlexJustify.FlexStart:
            (layout || this.nativeView.yoga).justifyContent = YGJustify.FlexStart;
            break;
          case FlexJustify.FlexEnd:
            (layout || this.nativeView.yoga).justifyContent = YGJustify.FlexEnd;
            break;
          case FlexJustify.Center:
            (layout || this.nativeView.yoga).justifyContent = YGJustify.Center;
            break;
          case FlexJustify.SpaceAround:
            (layout || this.nativeView.yoga).justifyContent = YGJustify.SpaceAround;
            break;
          case FlexJustify.SpaceBetween:
            (layout || this.nativeView.yoga).justifyContent = YGJustify.SpaceBetween;
            break;
          case FlexJustify.SpaceEvenly:
            (layout || this.nativeView.yoga).justifyContent = YGJustify.SpaceEvenly;
            break;
        }
        if (force) {
          (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
        }
      }
    }
  }

  _updateFlexWrap(value: any, force = false, json = null, layout = null) {
    if (this.nativeView) {
      if (global.isAndroid) {
        if (json) {
          json['flexWrap'] = value;
        } else {
          switch (value) {
            case FlexWrap.NoWrap:
              this.nativeView.getYogaNode().setWrap(com.facebook.yoga.YogaWrap.NO_WRAP);
              break;
            case FlexWrap.Wrap:
              this.nativeView.getYogaNode().setWrap(com.facebook.yoga.YogaWrap.WRAP);
              break;
            case FlexWrap.WrapReverse:
              this.nativeView.getYogaNode().setWrap(com.facebook.yoga.YogaWrap.WRAP_REVERSE);
              break;
          }
        }
      } else if (global.isIOS) {
        switch (value) {
          case FlexWrap.NoWrap:
            (layout || this.nativeView.yoga).flexWrap = YGWrap.NoWrap;
            break;
          case FlexWrap.Wrap:
            (layout || this.nativeView.yoga).flexWrap = YGWrap.Wrap;
            break;
          case FlexWrap.WrapReverse:
            (layout || this.nativeView.yoga).flexWrap = YGWrap.WrapReverse;
            break;
        }

        if (force) {
          (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
        }
      }
    }
  }

  _updateAlignSelf(value, force = false, json = null, layout = null) {
    if (this.nativeView) {
      if (global.isAndroid) {
        if (json) {
          json['alignSelf'] = value;
        } else {
          this.yogaNode.setAlignSelf(_toYGFlexAlignSelf(value));
        }
      } else if (global.isIOS) {
        (layout || this.nativeView.yoga).alignSelf = _toYGFlexAlignSelf(value);
        if (force) {
          (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
        }
      }
    }
  }

  _updateFlexGrow(value, force = false, json = null, layout = null) {
    if (this.nativeView) {
      if (global.isAndroid) {
        if (json) {
          json['flexGrow'] = value;
        } else {
          this.yogaNode.setFlexGrow(value);
        }
      } else if (global.isIOS) {
        if ((layout || this.nativeView.yoga).flexGrow === value) {
          return;
        }
        (layout || this.nativeView.yoga).flexGrow = value;
        if (force) {
          (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
        }
      }
    }
  }

  _updateFlexShrink(value, force = false, json = null, layout = null) {
    if (this.nativeView) {
      if (global.isAndroid) {
        if (json) {
          json['flexShrink'] = value;
        } else {
          this.yogaNode.setFlexShrink(value);
        }
      } else if (global.isIOS) {
        if ((layout || this.nativeView.yoga).flexShrink === value) {
          return;
        }
        (layout || this.nativeView.yoga).flexShrink = value;
        if (force) {
          (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
        }
      }
    }
  }

  _updateFlexBasis(value, force = false, json = null, layout = null) {
    if (this.nativeView) {
      if (global.isAndroid) {
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
              json['flexBasis'] = `${yg.value * 100}%`;
            } else {
              this.yogaNode.setFlexBasisPercent(yg.value * 100);
            }

            break;
          case ParsedValueType.Dip:
            if (json) {
              json['flexBasis'] = `${nsLayout.toDevicePixels(yg.value)}`;
            } else {
              this.yogaNode.setFlexBasis(nsLayout.toDevicePixels(yg.value));
            }
            break;
        }
      } else if (global.isIOS) {
        if ((layout || this.nativeView.yoga).flexBasis === value) {
          return;
        }
        (layout || this.nativeView.yoga).flexBasis = _toNativeYG(value);
        if (force) {
          (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
        }
      }
    }
  }

  _updateAlignContent(value, force = false, json = null, layout = null) {
    if (!value) {
      return;
    }
    if (this.nativeView) {
      if (global.isAndroid) {
        if (json) {
          json['alignContent'] = value;
        } else {
          this.yogaNode.setAlignContent(_toYGFlexAlignContent(value));
        }
      } else if (global.isIOS) {
        (layout || this.nativeView.yoga).alignContent = _toYGFlexAlignContent(value);
        if (force) {
          (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
        }
      }
    }
  }

  _updateAspectRatio(value: number, force = false, json = null, layout = null) {
    if (typeof value !== 'number') return;
    if (this.nativeView) {
      if (global.isAndroid) {
        if (json) {
          json['aspectRatio'] = value;
        } else {
          this.yogaNode.setAspectRatio(value);
        }
      } else if (global.isIOS) {
        (layout || this.nativeView.yoga).aspectRatio = value;
        if (force) {
          (layout || this.nativeView.yoga).applyLayoutPreservingOrigin(true);
        }
      }
    }
  }

  _setStartOrEnd(value: number, position: 'start' | 'end', force = false, json = null, layout = null) {
    if (this.nativeView) {
      let direction;
      if (global.isAndroid) {
        direction = io.github.triniwiz.yogalayout.Utils.getLayoutDirection(this.yogaNode);
      } else if (global.isIOS) {
        direction = (layout || this.nativeView).direction;
      }

      switch (direction) {
        case 'rtl':
          if (position === 'start') {
            this._updateRight(value, force, json, layout);
          }
          if (position === 'end') {
            this._updateLeft(value, force, json, layout);
          }
          break;
        case 'ltr':
          if (position === 'start') {
            this._updateLeft(value, force, json, layout);
          }
          if (position === 'end') {
            this._updateRight(value, force, json, layout);
          }
          break;
      }
    }
  }

  _updateStart(value: number, force = false, json = null, layout = null) {
    this._setStartOrEnd(value, 'start', force, json, layout);
  }

  _updateEnd(value: number, force = false, json = null, layout = null) {
    this._setStartOrEnd(value, 'end', force, json, layout);
  }

  _updateDirection(value: Direction, force = false, json = null, layout = null) {
    if (!value) {
      return;
    }
    if (this.nativeView) {
      if (global.isAndroid) {
        if (json) {
          json['direction'] = value;
        } else {
          this.yogaNode.setDirection(_toYGDirection(value));
        }
      } else if (global.isIOS) {
        (layout || this.nativeView.yoga).direction = _toYGDirection(value);
      }
    }
  }

  _updateMarginVertical(value: any, force = false, json = null, layout = null) {
    if (this.nativeView) {
      this._setMarginValue(value, 'vertical', json, layout);
    }
  }

  _updateMarginHorizontal(value: any, force = false, json = null, layout = null) {
    if (this.nativeView) {
      this._setMarginValue(value, 'horizontal', json, layout);
    }
  }

  _updatePaddingHorizontal(value: any, force = false, json = null, layout = null) {
    if (this.nativeView) {
      this._setPaddingValue(value, 'horizontal', json, layout);
    }
  }

  _updatePaddingVertical(value: any, force = false, json = null, layout = null) {
    if (this.nativeView) {
      this._setPaddingValue(value, 'vertical', json, layout);
    }
  }
}

export const minWidthProperty = new CssProperty<Style, SizeType>({
  name: 'minWidth',
  cssName: 'min-width',
  defaultValue: 'none',
});

minWidthProperty.register(Style);

export const minHeightProperty = new CssProperty<Style, SizeType>({
  name: 'minHeight',
  cssName: 'min-height',
  defaultValue: 'none',
});

minHeightProperty.register(Style);

export const maxWidthProperty = new CssProperty<Style, SizeType>({
  name: 'maxWidth',
  cssName: 'max-width',
  defaultValue: 'none',
});

maxWidthProperty.register(Style);

export const maxHeightProperty = new CssProperty<Style, SizeType>({
  name: 'maxHeight',
  cssName: 'max-height',
  defaultValue: 'none',
});

maxHeightProperty.register(Style);

export const flexProperty = new CssProperty<Style, number>({
  name: 'flex',
  cssName: 'flex',
  defaultValue: 1.0,
  valueConverter: (val) => Number(val),
});

flexProperty.register(Style);

export const flexDirectionProperty = new CssProperty<Style, FlexDirection>({
  name: 'flexDirection',
  cssName: 'flex-direction',
  defaultValue: FlexDirection.Row,
});

flexDirectionProperty.register(Style);

export const flexGrowProperty = new CssProperty<Style, number>({
  name: 'flexGrow',
  cssName: 'flex-grow',
  defaultValue: 0,
  valueConverter: (val) => Number(val),
});

flexGrowProperty.register(Style);

export const flexShrinkProperty = new CssProperty<Style, number>({
  name: 'flexShrink',
  cssName: 'flex-shrink',
  defaultValue: 1,
  valueConverter: (val) => Number(val),
});

flexShrinkProperty.register(Style);

export const flexBasisProperty = new CssProperty<Style, SizeType>({
  name: 'flexBasis',
  cssName: 'flex-basis',
  defaultValue: 'auto',
});

flexBasisProperty.register(Style);

export const alignContentProperty = new CssProperty<Style, FlexAlignContent>({
  name: 'alignContent',
  cssName: 'align-content',
});

alignContentProperty.register(Style);

export const alignItemsProperty = new CssProperty<Style, FlexAlignItems>({
  name: 'alignItems',
  cssName: 'align-items',
  defaultValue: FlexAlignItems.Stretch,
});

alignItemsProperty.register(Style);

export const alignSelfProperty = new CssProperty<Style, FlexAlignSelf>({
  name: 'alignSelf',
  cssName: 'align-self',
  defaultValue: FlexAlignSelf.Auto,
});

alignSelfProperty.register(Style);

export const overflowProperty = new CssProperty<Style, Overflow>({
  name: 'overflow',
  cssName: 'overflow',
  defaultValue: Overflow.Visible,
});

overflowProperty.register(Style);

export const positionProperty = new CssProperty<Style, Position>({
  name: 'position',
  cssName: 'position',
  defaultValue: Position.Relative,
});

positionProperty.register(Style);

export const leftProperty = new CssProperty<Style, SizeType>({
  name: 'left',
  cssName: 'left',
});

leftProperty.register(Style);

export const topProperty = new CssProperty<Style, SizeType>({
  name: 'top',
  cssName: 'top',
});

topProperty.register(Style);

export const rightProperty = new CssProperty<Style, SizeType>({
  name: 'right',
  cssName: 'right',
});

rightProperty.register(Style);

export const bottomProperty = new CssProperty<Style, SizeType>({
  name: 'bottom',
  cssName: 'bottom',
});

bottomProperty.register(Style);

export const justifyContentProperty = new CssProperty<Style, FlexJustify>({
  name: 'justifyContent',
  cssName: 'justify-content',
  defaultValue: FlexJustify.FlexStart,
});

justifyContentProperty.register(Style);

export const flexWrapProperty = new CssProperty<Style, FlexWrap>({
  name: 'flexWrap',
  cssName: 'flex-wrap',
  defaultValue: FlexWrap.NoWrap,
});

flexWrapProperty.register(Style);

export const aspectRatioProperty = new Property<ViewBase, number>({
  name: 'aspectRatio',
});

aspectRatioProperty.register(ViewBase);

export const endProperty = new CssProperty<Style, number | string>({
  name: 'end',
  cssName: 'end',
});

endProperty.register(Style);

export const startProperty = new CssProperty<Style, number | string>({
  name: 'start',
  cssName: 'start',
});
startProperty.register(Style);

export const directionProperty = new CssProperty<Style, Direction>({
  name: 'direction',
  cssName: 'direction',
  defaultValue: Direction.Inherit,
});
directionProperty.register(Style);

export const paddingHorizontalProperty = new CssProperty<Style, SizeType>({
  name: 'paddingHorizontal',
  cssName: 'padding-horizontal',
});

paddingHorizontalProperty.register(Style);

export const paddingVerticalProperty = new CssProperty<Style, SizeType>({
  name: 'paddingVertical',
  cssName: 'padding-vertical',
});

paddingVerticalProperty.register(Style);

export const marginHorizontalProperty = new CssProperty<Style, SizeType>({
  name: 'marginHorizontal',
  cssName: 'margin-horizontal',
});

marginHorizontalProperty.register(Style);

export const marginVerticalProperty = new CssProperty<Style, SizeType>({
  name: 'marginVertical',
  cssName: 'margin-vertical',
});

marginVerticalProperty.register(Style);

declare module '@nativescript/core/ui/styling/style' {
  interface Style {
    left: any;
    top: any;
    right: any;
    bottom: any;
    start: any;
    end: any;
    marginVertical: any;
    marginHorizontal: any;
    paddingHorizontal: any;
    paddingVertical: any;
    // @ts-ignore
    justifyContent: any;
    maxWidth: any;
    maxHeight: any;
    flex: number;
    overflow: Overflow;
    position: Position;
    flexBasis: any;
    direction: Direction;
  }
}

export function _toYGFlexDirection(value: FlexDirection): any {
  if (global.isIOS) {
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
  } else if (global.isAndroid) {
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
}

export function _toYGFlexAlignSelf(value: FlexAlignSelf): any {
  if (global.isIOS) {
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
  } else if (global.isAndroid) {
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
}

export function _toYGFlexAlignItems(value: FlexAlignItems): any {
  if (global.isIOS) {
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
  } else if (global.isAndroid) {
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
}

export function _toYGOverflow(value: Overflow): any {
  if (global.isIOS) {
    switch (value) {
      case Overflow.Visible:
        return YGOverflow.Visible;
      case Overflow.Hidden:
        return YGOverflow.Hidden;
      case Overflow.Scroll:
        return YGOverflow.Scroll;
    }
  } else if (global.isAndroid) {
    switch (value) {
      case Overflow.Visible:
        return com.facebook.yoga.YogaOverflow.VISIBLE;
      case Overflow.Hidden:
        return com.facebook.yoga.YogaOverflow.HIDDEN;
      case Overflow.Scroll:
        return com.facebook.yoga.YogaOverflow.SCROLL;
    }
  }
}

export function _toYGPosition(value: Position): any {
  if (global.isIOS) {
    switch (value) {
      case Position.Absolute:
        return YGPositionType.Absolute;
      default:
        return YGPositionType.Relative;
    }
  } else if (global.isAndroid) {
    switch (value) {
      case Position.Absolute:
        return com.facebook.yoga.YogaPositionType.ABSOLUTE;
      default:
        return com.facebook.yoga.YogaPositionType.RELATIVE;
    }
  }
}

export function _toNativeYG(value): any {
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

export function _toYGEdge(value: 'left' | 'top' | 'right' | 'bottom' | 'start' | 'end' | 'all' | 'vertical' | 'horizontal'): any {
  if (global.isIOS) {
    switch (value) {
      case 'left':
        return YGEdge.Left;
      case 'top':
        return YGEdge.Top;
      case 'right':
        return YGEdge.Right;
      case 'bottom':
        return YGEdge.Bottom;
      case 'start':
        return YGEdge.Start;
      case 'end':
        return YGEdge.End;
      case 'vertical':
        return YGEdge.Vertical;
      case 'horizontal':
        return YGEdge.Horizontal;
      case 'all':
        return YGEdge.All;
    }
  } else if (global.isAndroid) {
    switch (value) {
      case 'left':
        return com.facebook.yoga.YogaEdge.LEFT;
      case 'top':
        return com.facebook.yoga.YogaEdge.TOP;
      case 'right':
        return com.facebook.yoga.YogaEdge.RIGHT;
      case 'bottom':
        return com.facebook.yoga.YogaEdge.BOTTOM;
      case 'start':
        return com.facebook.yoga.YogaEdge.START;
      case 'end':
        return com.facebook.yoga.YogaEdge.END;
      case 'vertical':
        return com.facebook.yoga.YogaEdge.VERTICAL;
      case 'horizontal':
        return com.facebook.yoga.YogaEdge.HORIZONTAL;
      case 'all':
        return com.facebook.yoga.YogaEdge.ALL;
    }
  }
}

export function _toYGFlexAlignContent(value: FlexAlignContent): any {
  if (global.isIOS) {
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
  } else if (global.isAndroid) {
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
}

function firstCharToUpperCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function _toYGDirection(value: Direction): any {
  if (global.isAndroid) {
    switch (value) {
      case Direction.Rtl:
        return com.facebook.yoga.YogaDirection.RTL;
      case Direction.Ltr:
        return com.facebook.yoga.YogaDirection.LTR;
      default:
        return com.facebook.yoga.YogaDirection.INHERIT;
    }
  } else if (global.isIOS) {
    switch (value) {
      case Direction.Rtl:
        return YGDirection.RTL;
      case Direction.Ltr:
        return YGDirection.LTR;
      default:
        return YGDirection.Inherit;
    }
  }
}
