import {DemoSharedBase} from '../utils';
import {Pager} from '@triniwiz/nativescript-pager';
import {Frame, ObservableArray, Page} from "@nativescript/core";

export class DemoSharedNativescriptPager extends DemoSharedBase {
  items: ObservableArray<any>;
  index: number;

  _itemsInternal: any[];

  get _items() {
    return this._itemsInternal;
  }

  _originalItems = [
    {
      title: 'Slide 1',
      image: 'https://images.unsplash.com/photo-1581538398499-ae6e89710b14',
      items: this._items,
      text: ''
    },
    {
      title: 'Slide 2',
      image: 'https://images.unsplash.com/photo-1458724338480-79bc7a8352e4',
      items: this._items,
      text: ''
    },
    {
      title: 'Slide 3',
      image: 'https://images.unsplash.com/photo-1456318019777-ccdc4d5b2396',
      items: this._items,
      text: ''
    },
    {
      title: 'Slide 4',
      image: 'https://images.unsplash.com/photo-1455098934982-64c622c5e066',
      items: this._items,
      text: ''
    },
    {
      title: 'Slide 5',
      image: 'https://images.unsplash.com/photo-1454817481404-7e84c1b73b4a',
      items: this._items
    },
    {
      title: 'Slide 6',
      image: 'https://images.unsplash.com/photo-1454982523318-4b6396f39d3a',
      items: this._items,
      text: ''
    },
    {
      title: 'Slide 7',
      image: 'https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab',
      items: this._items,
      text: ''
    },
    {
      title: 'Slide 8',
      image: 'https://images.unsplash.com/photo-1423768164017-3f27c066407f',
      items: this._items,
      text: ''
    },
    {
      title: 'Slide 9',
      image: 'https://images.unsplash.com/photo-1433360405326-e50f909805b3',
      items: this._items,
      text: ''
    },
    {
      title: 'Slide 10',
      image: 'https://images.unsplash.com/photo-1421749810611-438cc492b581',
      items: this._items,
      text: ''
    }
  ];

  circularMode: boolean = false;
  showIndicator: boolean = false;
  autoPlay: boolean = false;

  // itemsCount: number = 0;
  get toSlice() {
    const now = Date.now();
    return [
      {title: `Slide ${now}`, image: '~/images/Hulk_(comics_character).png', items: this._items},
      {
        title: `Slide ${now}`,
        image:
          `https://robohash.org/${now}.png`,
        items: this._items
      }
    ];
  }

  constructor() {
    super();
    // this.set('circularMode', false);
    // this.set('showIndicator', true);
    if (!this._itemsInternal) {
      const count = 10;
      this._itemsInternal = [];
      for (let i = 0; i < count; i++) {
        this._itemsInternal.push({
          title: `Slide ${i + 1}`,
          image: `https://robohash.org/${i + 1}.png?set=2`
        })
      }
    }

    this.items = new ObservableArray(this._originalItems);
    this.set('itemsCount', this.items.length);
    this.items.on('change', args => {
      this.set('itemsCount', this.items.length);
    });
  }

  public pager: Pager;

  pagerLoaded(event) {
    this.pager = event.object;
    this.pager.on('loadMore',()=>{
      console.log('loadMore');
    })
  }

  public resetItems() {
    this.items.splice(0);
    this.items.push(...this._originalItems);
  }


  toggleAutoPlay() {
    let autoPlay = this.get('autoPlay');
    this.set('autoPlay', !autoPlay);
  }

  toggleSwipe() {
    if (this.pager) {
      this.pager.disableSwipe = !this.pager.disableSwipe;
    }
  }

  onScroll(event) {
    // console.log('x', event.scrollX, 'y', event.scrollY);
  }

  textChange(event) {
    const item = this.items.getItem(0);
    item['text'] = event.value;
    this.items.setItem(0, item);
  }

  removeNextItems() {
    console.log('removeNextItems')
    if (this.pager) {
      console.log('removeNextItems')
      const selectedIndex = this.pager.selectedIndex;
      const count = (this.pager.items.length) - (selectedIndex + 1);
      this.items.splice(selectedIndex + 1, count);
      const item = this.items.getItem(selectedIndex);
      item['title'] = `After Reset ${selectedIndex + 1}`;
      this.items.setItem(selectedIndex, item);
    }

  }

  page: Page;

  loaded(event) {
    this.page = event.object
  }

  goToApi(event) {
    Frame.topmost().navigate('~/plugin-demos/nativescript-pager-src/api/api-page');
  }


  goToPagerWithLists(event) {
    Frame.topmost().navigate('~/plugin-demos/nativescript-pager-src/list-page');
  }

  goToStatic(event) {
    Frame.topmost().navigate('~/plugin-demos/nativescript-pager-src/static/static-page');
  }

  goToRegular(event) {
    Frame.topmost().navigate('~/plugin-demos/nativescript-pager-src/regular/regular-page');
  }

  goToNested(event) {
    Frame.topmost().navigate('~/plugin-demos/nativescript-pager-src/nested/nested-page');
  }

  prevPage() {
    if (this.pager) {
      --this.pager.selectedIndex;
    }
  }

  nextPage() {
    if (this.pager) {
      ++this.pager.selectedIndex;
    }
  }

  firstPage() {
    if (this.pager) {
      this.pager.selectedIndex = 0;
    }
  }

  lastPage() {
    if (this.pager) {
      this.pager.selectedIndex = this.pager.items.length - 1;
    }
  }

  loadedImage($event: any) {
    const image = $event.object;
    // console.log(
    //   `onLoaded: ${image}, size: ${JSON.stringify(image.getActualSize())}}`
    // );
  }

  itemTemplateSelector(
    item: any,
    index: number,
    items: Array<any>
  ) {
    return index % 2 === 0 ? 'even' : 'odd';
  }

  selectedIndexChange(event) {
    const selectedIndex = event.object.get('selectedIndex');
    this.set('index', selectedIndex);
  }

  loadMoreItems(event) {
    const selectedIndex = event.object.get('selectedIndex');
    this.set('index', selectedIndex);
    this.items.push(...this.generateMore(10));
  }

  generateMore(count: number = 0){
    const array = [];
    for(let i = 0;i < count;i++){
      array.push({
        title: 'Slide ' + (this.items.length + (i + 1)),
        image: `https://robohash.org/${this.items.length + (i + 1)}.png`,
        items: this._items
      })
    }
    return array;
  }

  navigate() {
    Frame.topmost().navigate('dummy-page');
  }

  toggleIndicator(event) {
    const state = this.get('showIndicator');
    this.set('showIndicator', !state);
    console.log('toggleIndicator', state, this.get('showIndicator'));
  }

  toggleCircularMode(event) {
    const state = this.get('circularMode');
    console.log('circularMode', state);
    this.set('circularMode', !state);
    console.log('circularMode', state, this.get('circularMode'));
  }
}
