# CouchBase

<p>
<a href="https://www.npmjs.com/package/@triniwiz/nativescript-couchbase">
<img src="https://img.shields.io/npm/v/@triniwiz/nativescript-couchbase.svg?style=for-the-badge"
            alt="NativeScript CouchBase on NPM"/></a>

<a href="https://www.npmjs.com/package/@triniwiz/nativescript-couchbase">
<img src="https://img.shields.io/npm/dt/@triniwiz/nativescript-couchbase.svg?style=for-the-badge&label=npm%20downloads&" alt="NativeScript CouchBase on NPM"></a>

<a href="https://twitter.com/intent/follow?screen_name=triniwiz">
<img src="https://img.shields.io/twitter/follow/triniwiz?style=style=for-the-badge&logo=twitter" alt="follow on Twitter"></a>
</p>


|   Android Device   |  Android Emulator  |     iOS Device     |   iOS Simulator    |
| :----------------: | :----------------: | :----------------: | :----------------: |
| :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |

[Couchbase Lite](https://docs.couchbase.com/couchbase-lite/current/introduction.html) is an embedded, NoSQL JSON Document Style database for your mobile apps.

You can use Couchbase Lite as a standalone embedded database within your mobile apps, or with [Sync Gateway](https://docs.couchbase.com/sync-gateway/current/introduction.html) and [Couchbase Server](https://docs.couchbase.com/home/server.html) to provide a complete cloud to edge synchronized solution

- [Usage](couchbase.md#usage)
- [Collections and scopes](couchbase.md#collections-and-scopes)
- [Documents](couchbase.md#documents)
- [Blobs](couchbase.md#blobs)
- [Queries](couchbase.md#queries)
- [Listening for changes](couchbase.md#listening-for-changes)
- [Indexes](couchbase.md#indexes)
- [Transactions](couchbase.md#transactions)
- [Replication](couchbase.md#replication)
- [API](couchbase.md#api)
- [Interfaces](couchbase.md#interfaces)
- [Enums](couchbase.md#enums)
- [Types](couchbase.md#types)

## Android

::: warning Note
The minimum required SDK is version 22 (Lollipop :lollipop:)
:::

::: tip
Include the following in the android {} section of you app.gradle:

```groovy
android {
    // Set minimum JVM level to ensure availability of, for example, lambda expressions
    compileOptions {
        targetCompatibility 1.8
        sourceCompatibility 1.8
    }
}
```

:::

## iOS

::: warning Note
The minimum required platform is version 10
:::

## Installing

```bash
    ns plugin add @triniwiz/nativescript-couchbase
```

## Usage

Documents live in collections, collections live in scopes, and every database
has a `_default` collection in the `_default` scope.

```ts
import { CouchBase, MutableDocument } from '@triniwiz/nativescript-couchbase';

const database = new CouchBase('my-database');
const collection = database.defaultCollection;

collection.save(new MutableDocument('triniwiz').setString('firstname', 'Osei').setString('lastname', 'Fortune'));

const person = collection.getDocument('triniwiz');
console.log(person.getString('firstname'));

collection.delete(person);
```

### Collections and scopes

```ts
const collection = database.createCollection('people'); // in the default scope
const inScope = database.createCollection('people', 'contacts');

database.getCollection('people');
database.deleteCollection('people');

database.defaultScope.collections; // Collection[]
collection.scope; // the Scope it belongs to
collection.count; // documents in the collection
```

### Documents

A `Document` is read-only. Call `toMutable()` to get a `MutableDocument` you can
change, then save it back to the collection.

```ts
const doc = new MutableDocument('some-id') // omit the id for a generated one
	.setString('firstname', 'Osei')
	.setLong('visits', 3)
	.setDate('joined', new Date())
	.setBoolean('active', true);

collection.save(doc);

// Default concurrency mode is LastWriteWins if you don't pass one
collection.save(doc, ConcurrencyMode.FailOnConflict);

const updated = collection.getDocument('some-id').toMutable();
updated.setString('firstname', 'O');
collection.save(updated);

collection.purge('some-id'); // remove without replicating a deletion
collection.setDocumentExpiration('some-id', new Date(Date.now() + 86400000));
```

Setters return the document, so they chain. Getters come in typed pairs:
`getString`, `getFloat`, `getDouble`, `getLong`, `getBoolean`, `getBlob`,
`getArray`, `getDictionary`, and `getValue` for whatever is there. `toJSON()`
returns the whole document as a plain object.

### Blobs

```ts
import { Blob } from '@triniwiz/nativescript-couchbase';

const blob = Blob.fromFile('image/png', '~/images/logo.png');
collection.save(new MutableDocument('logo').setBlob('image', blob));

const stored = collection.getDocument('logo').getBlob('image');
stored.contentType; // 'image/png'
stored.length;
stored.content; // the bytes
```

`Blob.fromFile` accepts `file://` and absolute paths on both platforms, `~/` for
app-relative paths, and `res://` for a bundled resource. Android additionally
accepts a `content:` URI.

### Queries

```ts
import { QueryBuilder, QueryMeta } from '@triniwiz/nativescript-couchbase';

const query = new QueryBuilder()
	.setSelect([QueryMeta.ALL, QueryMeta.ID])
	.setFrom(collection)
	.setWhere([{ property: 'firstname', comparison: 'equalTo', value: 'Osei' }])
	.setOrder([{ property: 'firstname', direction: 'desc' }])
	.setLimit(20)
	.setOffset(0)
	.build();

for (const result of query.execute()) {
	console.log(result);
}
```

`setSelect` defaults to `[QueryMeta.ALL, QueryMeta.ID]`. `execute()` returns a
`ResultSet`, which is iterable and also has `allResults()`.

### Listening for changes

```ts
const collectionListener = collection.addChangeListener((collection, documentIDs) => {
	for (const id of documentIDs) {
		console.log(id, collection.getDocument(id)?.toJSON());
	}
});

const documentListener = collection.addDocumentChangeListener('triniwiz', (id, collection) => {
	console.log(collection.getDocument(id)?.toJSON());
});

const queryListener = query.addChangeListener((query, results, error) => {
	console.log(results.allResults());
});

// each returns a Listener
collectionListener.remove();
```

### Indexes

```ts
import { ValueIndexConfiguration, FullTextIndexConfiguration } from '@triniwiz/nativescript-couchbase';

collection.createIndex('by-name', new ValueIndexConfiguration(['firstname', 'lastname']));
collection.createIndex('search', new FullTextIndexConfiguration(['bio']).setLanguage('en').ignoreAccents(true));

collection.indexes; // string[]
collection.deleteIndex('by-name');
```

### Transactions

`inBatch` runs a group of operations as one commit. Use it for bulk writes - it
saves the overhead of committing each one separately.

```ts
database.inBatch(() => {
	for (const person of people) {
		collection.save(new MutableDocument(person.id).setString('firstname', person.firstname));
	}
});
```

### Replication

A `Replicator` is built from a `ReplicatorConfiguration`, which is plain data.

```ts
import { Replicator, ReplicatorConfiguration } from '@triniwiz/nativescript-couchbase';

const config = new ReplicatorConfiguration('ws://sync-gateway-host:4984/my-database', 'both');
config.collections = [collection];
config.continuous = true;
config.username = 'user';
config.password = 'password';
config.channels = new Map([[collection, ['channel-a']]]);

const replicator = new Replicator(config);
replicator.start();
replicator.isRunning();
replicator.stop();
```

## API

### CouchBase

| Member | Description |
| --- | --- |
| `new CouchBase(name)` | Open, or create, a database. |
| `defaultCollection` | The `_default` collection. |
| `defaultScope` | The `_default` scope. |
| `createCollection(name, scope?)` | Create a collection, in the default scope unless one is named. |
| `getCollection(name, scope?)` | An existing collection, or `null`. |
| `deleteCollection(name, scope?)` | Delete a collection and its documents. |
| `createQuery(query)` | Build a `Query` from an N1QL string. |
| `inBatch(fn)` | Run `fn` as a single commit. |
| `close()` | Close the database. |
| `destroyDatabase()` | Close and delete the database from disk. |

### Collection

| Member | Description |
| --- | --- |
| `name`, `scope`, `count` | Identity and document count. |
| `save(document, concurrencyMode?)` | Write a `MutableDocument`. |
| `delete(document, concurrencyMode?)` | Delete a document, replicating the deletion. |
| `purge(documentOrId)` | Remove a document locally without replicating. |
| `getDocument(id)` | A `Document`, or `null`. |
| `getDocumentExpiration(id)` / `setDocumentExpiration(id, date)` | Read or set a document's expiry. |
| `addChangeListener(cb)` | Notified with the ids that changed. Returns a `Listener`. |
| `addDocumentChangeListener(id, cb)` | Notified when one document changes. Returns a `Listener`. |
| `createIndex(name, index)`, `deleteIndex(name)`, `indexes` | Manage indexes. |
| `close()` | Close the collection. |

### QueryBuilder

`setSelect`, `setFrom`, `setWhere`, `setGroupBy`, `setOrder`, `setLimit` and
`setOffset` each return the builder; `build()` returns a `Query`.

### Replicator

| Member | Description |
| --- | --- |
| `new Replicator(config)` | Build from a `ReplicatorConfiguration`. |
| `start()` / `stop()` | Start and stop replicating. |
| `isRunning()` | Whether it is currently replicating. |

### ReplicatorConfiguration

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `remoteUrl` | `string` | — | Sync Gateway endpoint. |
| `direction` | `'push' \| 'pull' \| 'both'` | `'both'` | Which way to replicate. |
| `continuous` | `boolean` | `false` | Keep replicating rather than running once. |
| `collections` | `Collection[]` | `[]` | Collections to replicate. |
| `channels` | `Map<Collection, string[]>` | empty | Channels to pull, per collection. |
| `username` / `password` | `string` | `null` | Basic authentication. |
| `sessionId` / `cookieName` | `string` | `null` | Session authentication. |
| `headers` | `Map<string, string>` | empty | Extra request headers. |
| `autoPurge` | `boolean` | `true` | Purge documents the user loses access to. |
| `networkInterface` | `string` | `null` | iOS only. The Android SDK has no equivalent and ignores it. |

### Blob

| Member | Type | Description |
| --- | --- | --- |
| `Blob.fromFile(mimeType, file)` | `Blob` | From a file path or URI. |
| `Blob.fromBytes(mimeType, content)` | `Blob` | From raw bytes. |
| `content` | `any` | The bytes. |
| `contentStream` | `Stream` | A stream over the content. |
| `contentType` | `string` | The mime type. |
| `length` | `number` | Size in bytes. |
| `digest` | `string` | Content digest. |
| `properties` | `Map<string, any>` | Blob metadata. |
| `toJSON()` | `any` | The blob's JSON representation. |

### Platform differences

| API | Note |
| --- | --- |
| `ReplicatorConfiguration.networkInterface` | iOS only; ignored on Android. |
| `Blob.fromFile` with a `content:` URI | Android only. |

## Interfaces

### QueryWhereItem

|    Prop    |                              Type                               |
| :--------: | :-------------------------------------------------------------: |
|  logical   |    [QueryLogicalOperator](couchbase.md#querylogicaloperator)    |
|  property  |                             string                              |
| comparison | [QueryComparisonOperator](couchbase.md#querycomparisonoperator) |
|   value    |                               any                               |

### QueryOrderItem

|   Prop    |  Type  |
| :-------: | :----: |
| property  | string |
| direction | 'asc'  | 'desc' |

## Enums

### QueryMeta

| Members |      Value      |
| :-----: | :-------------: |
|   ALL   | "COUCHBASE_ALL" |
|   ID    | "COUCHBASE_ID"  |

### QueryLogicalOperator

| Members | Value |
| :-----: | :---: |
|   AND   | "and" |
|   OR    | "or"  |

### QueryArrayOperator

| Members  |   Value    |
| :------: | :--------: |
| CONTAINS | "contains" |

### ConcurrencyMode

|    Members     | Value | Description                                               |
| :------------: | :---: | :-------------------------------------------------------- |
| LastWriteWins  |   0   | (default) The last operation wins if there is a conflict. |
| FailOnConflict |   1   | The operation will fail if there is a conflict.           |

## Types

### QueryComparisonOperator

<code>
"modulo"            |<br/>
"is"                |<br/>
"between"           |<br/> 
"isNot"             |<br/> 
"collate"           |<br/> 
"in"                |<br/> 
"add"               |<br/>
"isNullOrMissing"   |<br/>
"greaterThan"       |<br/>
"divide"            |<br/> 
"notEqualTo"        |<br/> 
"like"              |<br/> 
"subtract"          |<br/>
"lessThanOrEqualTo" |<br/> 
"lessThan"          |<br/>
"notNullOrMissing"  |<br/>
"regex"             |<br/>
"equalTo"           |<br/>
"multiply";
</code>
