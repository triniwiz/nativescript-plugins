import {DemoSharedBase} from '../utils';
import {ImageZoom} from '@triniwiz/nativescript-image-zoom';
import {Frame, ImageSource} from "@nativescript/core";

export class DemoSharedNativescriptImageZoom extends DemoSharedBase {
  image: ImageZoom;

  loadRemoteSrc() {
    if (!this.image) {
      this.image = Frame.topmost().currentPage.getViewById('image');
    }
    this.image.src =
      'https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=1951&q=100';
  }

  loadResource() {
    if (!this.image) {
      this.image = Frame.topmost().currentPage.getViewById('image');
    }
    this.image.src = 'res://logo'
  }

  loadImgSrc() {
    if (!this.image) {
      this.image = Frame.topmost().currentPage.getViewById('image');
    }
    this.image.src = '~/nativescript-image-zoom/assets/image_302063.jpg';
  }
}
