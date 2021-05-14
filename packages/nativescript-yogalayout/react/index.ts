import {registerElement} from 'react-nativescript';

registerElement('view', () => require('../').View);
import type {View} from '../';
import {ViewAttributes as NSViewAttributes, NativeScriptProps} from 'react-nativescript';

export declare type ViewAttributes = NSViewAttributes & {};

declare global {
  module JSX {
    interface IntrinsicElements {
      // @ts-ignore
      view: NativeScriptProps<ViewAttributes, View>;
    }
  }
}
