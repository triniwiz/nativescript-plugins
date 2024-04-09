import {DemoSharedNativescriptStripe} from '@demo/shared';
import {EventData, Page} from "@nativescript/core";

export function pageLoaded(args: EventData) {
  const page = <Page>args.object;
  const vm = new CcViewStripeDemoModel();
  page.bindingContext = vm;
  vm.ccViewPageLoaded(null);
}

export class CcViewStripeDemoModel extends DemoSharedNativescriptStripe {
}
