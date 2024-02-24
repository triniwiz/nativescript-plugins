import {Observable, ObservableArray} from "@nativescript/core";
import {getJSON} from "@nativescript/core/http";

export class ApiViewModel extends Observable {
    public page = 1;
    public count = 10;
    public items = new ObservableArray([]);

    public getItems() {
        getJSON(`https://randomuser.me/api/?page=${this.page}&results=${this.count}`)
            .then((data) => {
                const items = data['results'] || [];
                this.items.push(...items);
            })
            .catch(error => {
                console.error(error);
            });
    }

    public loadMoreItems() {
        this.page += 1;
        this.getItems();
    }
}
