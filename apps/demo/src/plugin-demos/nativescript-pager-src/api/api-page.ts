import { ApiViewModel } from './api-view-model';
import {Page} from "@nativescript/core";
import {Pager} from "@triniwiz/nativescript-pager";

let vm = new ApiViewModel();
let page;

export function pageLoaded(args) {
    page = <Page>args.object;
    const pager: Pager = <Pager>page.getViewById('pager');
    if (pager) {
        pager.on('loadMoreItems', loadMoreItems.bind(this));
    }
    if (!args.isBackNavigation) {
        page.bindingContext = vm;
    }
}

export const loadMoreItems = (event) => {
    vm.loadMoreItems();
};

export const init = () => {
    vm.getItems();
};
