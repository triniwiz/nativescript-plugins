import {Frame} from '@nativescript/core';
import {Toasty} from '@triniwiz/nativescript-toasty';

export function modalToast() {
  new Toasty({
    text: 'Third Toast'
  }).show();
}

export function navigate() {
  Frame.topmost().navigate('~/modal/fourth/fourth');
}

export function close(args) {
  args.object.closeModal();
}
