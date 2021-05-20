import {ViewBase} from './common';
import {View as NSView} from '@nativescript/core';

export declare class View extends ViewBase {
  _addChildFromBuilder(name: string, value: any): void;

  addChild(view: NSView);

  getChildAt(index: number): NSView;

  getChildIndex(view: NSView): number;

  getChildrenCount(): number;

  removeAllChildren();

  removeChild(view: NSView);
}
