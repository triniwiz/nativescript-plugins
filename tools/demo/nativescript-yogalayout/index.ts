import {DemoSharedBase} from '../utils';

const data = require('./text.json');

export class DemoSharedNativescriptYogalayout extends DemoSharedBase {
  longText;
  flex = 1;
  textView: any;

  constructor() {
    super();
    this.longText = data.content;
  }

  updateProps() {

  }

  textViewLoaded(args) {
    this.textView = args.object;
  }

  sliderLoaded(args) {
  }
}
