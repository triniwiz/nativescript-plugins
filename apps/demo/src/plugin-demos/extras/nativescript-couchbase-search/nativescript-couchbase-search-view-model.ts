import { Observable, ObservableArray } from '@nativescript/core';
import { CouchBase, QueryBuilder } from '@triniwiz/nativescript-couchbase';

export class SearchModel extends Observable {
	private db: CouchBase;
	items = new ObservableArray([]);
	input = '';

	constructor() {
		super();
		this.db = new CouchBase('tns-couchbase');
	}

	search(args) {
		const query = new QueryBuilder()
			.setFrom(this.db.defaultCollection)
			.setWhere([
				{
					property: 'title',
					comparison: 'equalTo',
					value: this.input,
				},
			])
			.build();
		const results = query.execute();
		for (const result of results) {
			console.log(result);
		}
		//	this.set('items', new ObservableArray([...results]));
	}
}
