import {Toasty} from '@triniwiz/nativescript-toasty';

export function modalToast() {
  new Toasty({
    text: 'Fourth Toast'
  }).show();
}

export function navigate() {
}

export function close(args) {
  args.object.closeModal();
}
