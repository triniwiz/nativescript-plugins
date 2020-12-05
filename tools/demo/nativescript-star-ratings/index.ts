import {DemoSharedBase} from '../utils';
import {FillMode} from '@triniwiz/nativescript-star-ratings';

export class DemoSharedNativescriptStarRatings extends DemoSharedBase {
  value = 5;
  max = 6;
  fillMode = FillMode.FULL;

  full() {
    this.set('fillMode',FillMode.FULL);
  }

  half() {
    this.set('fillMode',FillMode.HALF);
  }

  precise() {
    this.set('fillMode',FillMode.PRECISE);
  }
}
