import {DemoSharedBase} from '../utils';
import {View} from "@triniwiz/nativescript-yogalayout";
import {Color, Label, Page} from "@nativescript/core";

const data = require('./text.json');

export class DemoSharedNativescriptYogalayout extends DemoSharedBase {
  longText;
  flex = 1;
  textView: any;
  page: Page;

  constructor(page: Page) {
    super();
    this.longText = data.content;
    this.page = page;
  }

  updateProps() {

  }

  textViewLoaded(args) {
    this.textView = args.object;
  }

  sliderLoaded(args) {
  }

  loaded(event) {
    this.addChild();
  }

  randomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    if (randomColor.length < 7) {
      return 'black';
    }
    return randomColor;
  }


  createDynamicLabelView(id: string, text: string) {
    const view = new View();
    view.id = id;
    view.backgroundColor = new Color(this.randomColor());
    view.flex = .1;
    const label = new Label();
    label.text = text;
    view.addChild(label);
    return view;
  }

  addChild() {
    const rootView = this.page.getViewById('rootView') as View;
    if (!rootView) {
      return
    }
    const container = this.page.getViewById('container') as View;
    if (container) {
      const views = [
        this.createDynamicLabelView('1', `${Date.now()}`),
        this.createDynamicLabelView('2', `${Date.now()}`),
        this.createDynamicLabelView('3', `${Date.now()}`),
        this.createDynamicLabelView('4', `${Date.now()}`),
        this.createDynamicLabelView('5', `${Date.now()}`),
      ];
      container.addChildren(views);
    }
  }
}
