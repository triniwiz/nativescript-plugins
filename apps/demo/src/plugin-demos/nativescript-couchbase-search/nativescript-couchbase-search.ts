import {EventData, Page} from "@nativescript/core";
import {SearchModel} from "./nativescript-couchbase-search-view-model";

let vm;
let page;

export function pageLoaded(args: EventData) {
  vm = new SearchModel();
  page = args.object as Page;
  page.bindingContext = vm;
  page.getViewById('search').on('textChange', (args: any) => {
    vm.set('input', args.object.text);
  });
}
