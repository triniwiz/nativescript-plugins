import {DemoSharedBase} from '../utils';
import {ObservableArray} from "@nativescript/core";

export class DemoSharedNativescriptAccordion extends DemoSharedBase {
  public items: ObservableArray<any>;
  public selectedIndexes = [0, 1];

  constructor() {
    super();
    this.items = new ObservableArray([
      {
        title: '1',
        footer: '10',
        headerText: 'First',
        footerText: '4',
        image: 'http://placehold.it/120x120&text=First',
        items: [
          {image: '~/images/a9ff17db85f8136619feb0d5a200c0e4.png', text: 'Stop'},
          {
            text: 'Drop',
            image: '~/images/shazam.jpg'
          }]
      },
      {
        title: '2',
        footer: '20',
        headerText: 'Second',
        footerText: '5',
        image: 'http://placehold.it/120x120&text=Second',
        items: [{
          text: 'Drop',
          image: '~/images/batman.jpg'
        }, {text: 'Drop', image: '~/images/f29.png'}]
      },
      {
        title: '3',
        footer: '30',
        headerText: 'Third',
        footerText: '6',
        image: 'http://placehold.it/120x120&text=Third',
        items: [{text: 'Drop', image: '~/images/strider.png'}, {
          text: 'Drop',
          image: '~/images/f29.png'
        }]
      }
    ]);
  }
}
