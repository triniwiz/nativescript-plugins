import {Observable, ObservableArray} from "@nativescript/core";
import {CouchBase} from "@triniwiz/nativescript-couchbase";

export class SearchModel extends Observable {
  private db: CouchBase;
  items = new ObservableArray([]);
  input = '';

  constructor() {
    super();
    this.db = new CouchBase('tns-couchbase');
  }

  search(args) {
    const query = this.db.query({
      select: [],
      where: [
        {
          property: 'title',
          comparison: 'equalTo',
          value: this.input
        }
      ]
    });
    this.set('items', new ObservableArray([...query]));
  }
}
