import { DemoSharedBase } from '../utils';
import { Blob, CouchBase, MutableArray, MutableDocument, QueryBuilder, QueryLogicalOperator, Replicator } from '@triniwiz/nativescript-couchbase';
import { ObservableArray } from '@nativescript/core';
import { getFile, getJSON } from '@nativescript/core/http';

export class DemoSharedNativescriptCouchbase extends DemoSharedBase {
	private db: CouchBase;
	items: ObservableArray<any> = new ObservableArray([]);
	input: string = '';
	replicator: Replicator;

	constructor() {
		super();
		this.init();
	}

	async init() {
		this.db = new CouchBase('tns-couchbase');
		const collection = this.db.defaultCollection;
		let triniwiz = collection.getDocument('triniwiz');
		if (!triniwiz) {
			console.log('init');
			const document = new MutableDocument('triniwiz').setString('first', 'Osei').setString('last', 'Fortune');
			console.log('?');
			collection.save(document);
			triniwiz = collection.getDocument('triniwiz');
		}

		collection.addDocumentChangeListener('triniwiz', (id, collection) => {
			const document = collection.getDocument('triniwiz');
			if (document) {
				console.log('changed', document.toJSON());
			}
		});

		const mutDoc = collection.getDocument('triniwiz').toMutable();
		mutDoc.setString('first', 'Osei').setString('dob', '04/10/1991');
		collection.save(mutDoc);

		const newDoc = new MutableDocument('asha').setString('first', 'Asha').setString('last', 'Paul').setString('dob', '12/05/1995');

		console.log(newDoc.toJSON());

		collection.save(newDoc);

		console.log(collection.getDocument('asha')?.toJSON());

		// console.time('query');
		// const query = this.db.query();
		// console.timeEnd('query');

		//

		const query = new QueryBuilder().setFrom(this.db.defaultCollection).build();
		const result = query.execute();

		console.time('allResults');
		for (const item of result) {
			console.log('iter', item);
		}
		console.timeEnd('allResults');

		// this.replicator = new Replicator('ws://192.168.0.10:4984/tns-couchbase', 'both', this.db.defaultCollection);
		// this.replicator.addCollection(this.db.defaultCollection);
		// this.replicator.setContinuous(true);
		this.db.defaultCollection.addChangeListener((collection, documentIDs) => {
			for (let change of documentIDs) {
				const doc = collection.getDocument(change);
				if (doc) {
					const length = this.items.length;
					if (length === 0) {
						this.items.push(doc);
					} else {
						for (let i = 0; i < length; i++) {
							const item = this.items.getItem(i);
							if (item.id === change) {
								this.items.setItem(i, doc);
								break;
							} else if (i === length - 1) {
								this.items.push(doc);
							}
						}
					}
				} else {
					this.items.forEach((item, index) => {
						if (item.id === change) {
							this.items.splice(index, 1);
						}
					});
				}
			}
		});
		//this.replicator.start();
		// const query = this.db.query();
		// this.items.push(...query);
	}

	addLargeItem() {
		getJSON('https://randomuser.me/api/?results=5000')
			.then((json: any) => {
				const results = json.results;
				const collection = this.db.defaultCollection;
				console.time('addLargeItem');
				const document = new MutableDocument().setString('title', this.input).setDate('created_at', new Date()).setArray('large_array', new MutableArray(results));
				console.timeEnd('addLargeItem');

				collection.save(document);
			})
			.catch((e) => {
				console.log('error getting ' + e);
			});
	}

	nukeIt() {
		//this.replicator.stop();
		this.db.destroyDatabase();
		this.db = null;
		this.items.splice(0);
		this.init();
	}

	addItem() {
		getJSON('https://randomuser.me/api/')
			.then((json: any) => {
				const result = json.results;
				return result[0].picture.large;
			})
			.then((url) => {
				return getFile(url).then((file) => {
					console.log(' this.input', this.input);
					const document = new MutableDocument({
						title: this.input,
						created_at: new Date().toJSON(),
					});

					document.setBlob('image', Blob.fromFile('image/png', file.path));

					this.db.defaultCollection.save(document);
				});
			})
			.catch((e) => {
				console.log('error getting ' + e);
			});
	}

	generateId(): string {
		return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			const r = (Math.random() * 16) | 0,
				v = c === 'x' ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		});
	}
}
