import {Observable, EventData, Page, Color, Frame} from '@nativescript/core';
import {DemoSharedNativescriptToasty} from '@demo/shared';
import {ToastDuration, Toasty, ToastPosition} from '@triniwiz/nativescript-toasty';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export function openModal(args) {
  args.object.showModal('~/modal/modal-root', {
    closeCallback: args => {
    },
    context: {},
    fullscreen: true
  });
}

export class DemoModel extends DemoSharedNativescriptToasty {
}
