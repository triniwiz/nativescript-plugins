import {Frame} from '@nativescript/core';
import {Toasty} from '@triniwiz/nativescript-toasty';

export function modalToast() {
  new Toasty({
    text: 'First Toast'
  }).show();
}

export function onPageLoaded(args) {
  console.log(args.object.frame);
}

export function navigate(args) {
  Frame.topmost().navigate('~/modal/second/second');
}

export function close(args) {
  args.object.closeModal();
}
