import {DemoSharedBase} from '../utils';
import {EventData, ObservableArray} from "@nativescript/core";

export class DemoSharedNativescriptAccordion extends DemoSharedBase {
  public items: ObservableArray<any>;
  public selectedIndexes = [0, 1];
  public allowMultiple = true;
  private _accordion: any;

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

  accordionLoaded(args: EventData) {
    this._accordion = args.object;
  }

  toggleAllowMultiple() {
    this.set('allowMultiple', !this.allowMultiple);
    // allowMultiple is a plain accessor rather than a Property, so the view has
    // to be told; collapsing everything also clears any now-illegal second
    // expanded section.
    if (this._accordion) {
      this._accordion.allowMultiple = this.allowMultiple;
      this._accordion.collapseAll();
    }
    this.set('selectedIndexes', []);
  }

  expandAll() {
    this._accordion?.expandAll();
  }

  collapseAll() {
    this._accordion?.collapseAll();
  }

  // Drives the sections through the property rather than the view, which has to
  // collapse what it drops as well as expand what it gains.
  selectFirst() {
    this.set('selectedIndexes', [0]);
  }

  selectLast() {
    this.set('selectedIndexes', [this.items.length - 1]);
  }

  onItemContentTap(args: any) {
    console.log('itemContentTap', 'index', args.index, 'childIndex', args.childIndex, 'text', args.data && args.data.text);
  }

  onItemHeaderTap(args: any) {
    console.log('itemHeaderTap', 'index', args.parentIndex);
  }
}
