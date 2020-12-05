import {EventData, Page} from '@nativescript/core';
import {DemoSharedNativescriptPager} from '@demo/shared';

export class DemoModel extends DemoSharedNativescriptPager {
}

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}
