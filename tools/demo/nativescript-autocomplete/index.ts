import {DemoSharedBase} from '../utils';
import {ObservableArray} from "@nativescript/core";

export class DemoSharedNativescriptAutocomplete extends DemoSharedBase {
  text = "";
  list: ObservableArray<string>;

  constructor() {
    super();
    this.list = new ObservableArray<string>(['home', 'work', 'walker', 'witch', 'which', 'school', 'women', 'nativescript', 'none', 'brad', 'stuff', 'holland'])
  }

  addText(args) {
    this.list.push(this.text);
    this.set('text', '');
  }

  delayedAddText(args) {
    setTimeout(() => {
      this.list.push(this.text);
      this.set('text', '');
    }, 5000);
  }

}
