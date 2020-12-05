# Couchbase

[![npm](https://img.shields.io/npm/v/@triniwiz/nativescript-couchbase.svg)](https://www.npmjs.com/package/@triniwiz/nativescript-couchbase)
[![npm](https://img.shields.io/npm/dt/@triniwiz/nativescript-couchbase.svg?label=npm%20downloads)](https://www.npmjs.com/package/@triniwiz/nativescript-couchbase)

|   Android Device  |   Android Emulator    |   iOS Device  |   iOS Simulator   |
| :-------------:     |:-------------:        |:-------------:| :-----:            |
| :white_check_mark:|:white_check_mark:     |:white_check_mark:|    :white_check_mark:| 

[Couchbase Lite](https://docs.couchbase.com/couchbase-lite/current/introduction.html) is an embedded, NoSQL JSON Document Style database for your mobile apps.

You can use Couchbase Lite as a standalone embedded database within your mobile apps, or with [Sync Gateway](https://docs.couchbase.com/sync-gateway/current/introduction.html) and [Couchbase Server](https://docs.couchbase.com/home/server.html) to provide a complete cloud to edge synchronized solution


- [Couchbase(...)](couchbase.md#couchbase-2)
- [close()](couchbase.md#close)
- [createDocument(...)](couchbase.md#createdocument)
- [setBlob(...)](couchbase.md#setblob)
- [getBlob(...)](couchbase.md#getblob)
- [getDocument(...)](couchbase.md#getDocument)
- [updateDocument(...)](couchbase.md#updateDocument)
- [deleteDocument(...)](couchbase.md#deleteDocument)
- [destroyDatabase(...)](couchbase.md#destroydatabase)
- [query(...)](couchbase.md#query)
- [createReplication(...)](couchbase.md#createreplication)
- [createPullReplication(...)](couchbase.md#createpullreplication)
- [createPushReplication(...)](couchbase.md#createpushreplication)
- [addDatabaseChangeListener(...)](couchbase.md#adddatabasechangelistener)
- [removeDatabaseChangeListener(...)](couchbase.md#removedatabasechangelistener)
- [inBatch(...)](couchbase.md#inbatch)
- [Classes](couchbase.md#classes)
- [Intefaces](couchbase.md#interfaces)
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

```base
    ns plugin add @triniwiz/nativescript-couchbase
```


## Usage

```ts
import { Couchbase, ConcurrencyMode } from '@triniwiz/nativescript-couchbase';
const database = new Couchbase('my-database');

const documentId = database.createDocument({
    "firstname": "O",
    "lastname": "Fortune",
    "address": {
        "country": "Trinidad and Tobago"
    },
    "twitter": "https://www.twitter.com/triniwiz"
});

const person = database.getDocument(documentId);


database.updateDocument(documentId, {
    "firstname": "Osei",
    "lastname": "Fortune",
    "twitter": "https://www.twitter.com/triniwiz"
});

// Default concurrency mode is FailOnConflict if you don't pass it
const isDeleted = database.deleteDocument(documentId, ConcurrencyMode.FailOnConflict);
```


### Synchronization with Couchbase Sync Gateway and Couchbase Server

```ts
import { Couchbase } from '@triniwiz/nativescript-couchbase';
const database = new Couchbase('my-database');

const push = database.createPushReplication(
  'ws://sync-gateway-host:4984/my-database'
);
push.setUserNameAndPassword("user","password");
const pull = database.createPullReplication(
  'ws://sync-gateway-host:4984/my-database'
);
pull.setSessionId("SomeId");
pull.setSessionIdAndCookieName("SomeId","SomeCookieName");

push.setContinuous(true);
pull.setContinuous(true);
push.start();
pull.start();
```

### Listening for Changes

```ts
database.addDatabaseChangeListener(function(changes) {
  for (var i = 0; i < changes.length; i++) {
    const documentId = changes[i];
    console.log(documentId);
  }
});
```

### Query

```ts
const results = database.query({
  select: [], // Leave empty to query for all
  from: 'otherDatabaseName', // Omit or set null to use current db
  where: [{ property: 'firstName', comparison: 'equalTo', value: 'Osei' }],
  order: [{ property: 'firstName', direction: 'desc' }],
  limit: 2
});
```

### Transactions
Using the method `inBatch` to run group of database operations in a batch/transaction. Use this when performing bulk write operations like multiple inserts/updates; it saves the overhead of multiple database commits, greatly improving performance.

```ts
import { Couchbase } from '@triniwiz/nativescript-couchbase';
const database = new Couchbase('my-database');

database.inBatch(() => {
    const documentId = database.createDocument({
        "firstname": "O",
        "lastname": "Fortune",
        "address": {
            "country": "Trinidad and Tobago"
        }
        "twitter": "https://www.twitter.com/triniwiz"
    });
    
    const person = database.getDocument(documentId);
    
    
    database.updateDocument(documentId, {
        "firstname": "Osei",
        "lastname": "Fortune",
        "twitter": "https://www.twitter.com/triniwiz"
    });
    
    const isDeleted = database.deleteDocument(documentId);
});
```

## API

### Couchbase(...)
```ts
 new Couchbase("nsDB");
```

Creates or opens a database

| Param   | Type    |
| :---:   | :---:   |
| name    | string  |

**Returns**: 

---

### close()
```ts
 close(): void;
```

Closes the currently opened database

---

### createDocument(...)
```ts
 createDocument(data: Object, documentId?: string, concurrencyMode?: ConcurrencyMode): string;
```

Creates a new document

| Param   | Type    |
| :---:   | :---:   |
| data    | Object  |
| documentId    | string  | *set optional id of the created document
| concurrencyMode   |  [ConcurrencyMode](couchbase.md#concurrencymode) |

**Returns**: <code>string</code>

--- 

### setBlob(...)
```ts
 setBlob(id: string, name: string, blob: any, mimeType?: string, concurrencyMode?: ConcurrencyMode): void;
```

| Param   | Type    |
| :---:   | :---:   |
| id    | string  |
| name    | string  |
| blob  | any |
|mimeType   | string |
| concurrencyMode   |  [ConcurrencyMode](couchbase.md#concurrencymode) |

Adds a blob to a document

---

### getBlob(...)
```ts
 getBlob(id: string, name: string): Blob;
```

| Param   | Type    |
| :---:   | :---:   |
| id    | string  |
| name    | string  |

Gets a blob from a document

**Returns**: <code>[Blob](coucbase.md#blob)</code>

---

### getDocument(...)
```ts
 getDocument(documentId: string): Object;
```

| Param   | Type    |
| :---:   | :---:   |
| documentId    | string  |

Gets  a document

**Return**: <code>Object</code>

---

### updateDocument(...)
```ts
 updateDocument(documentId: string, data: Object, concurrencyMode?: ConcurrencyMode): void;
```

| Param   | Type    |
| :---:   | :---:   |
| documentId    | string  |
| data    | Object  |
| concurrencyMode   |  [ConcurrencyMode](couchbase.md#concurrencymode) |

Updates a document

---


### deleteDocument(...)
```ts
 deleteDocument(documentId: string, concurrencyMode?: ConcurrencyMode): void;
```

| Param   | Type    |
| :---:   | :---:   |
| documentId    | string  |
| data    | [ConcurrencyMode](couchbase.md#concurrencymode)  |

Deletes a document

---


### destroyDatabase(...)
```ts
 destroyDatabase(): void;
```

Destroys the currently opened database

---

### query(...)
```ts
 query(query?: Query): Array<Object>;
```

| Param   | Type    |
| :---:   | :---:   |
| query    | [Query](couchbase.md#query-2) |


Queries the currently opened database

**Returns**: `Array<Object>`

---

### createReplication(...)
```ts
 createReplication(remoteUrl: string, direction: 'push' | 'pull' | 'both'): Replicator;
```

| Param   | Type    |
| :---:   | :---:   |
| remoteUrl    | string |
| direction    | `'push' | 'pull' | 'both'` |

Creates a replicator which can be used later on to sync updates with a remote database

**Returns**: <code>[Replicator](couchbase.md#replicator)</code>

---

### createPullReplication(...)
```ts
 createPullReplication(remoteUrl: string, username?: string, password?: string): Replicator;
```

| Param   | Type    |
| :---:   | :---:   |
| remoteUrl    | string |
| username    | string |
| password    | string |

Creates a pull replicator which can be used later on to sync updates with a remote database

**Returns**: <code>[Replicator](couchbase.md#replicator)</code>

---

### createPushReplication(...)
```ts
 createPushReplication(remoteUrl: string, username?: string, password?: string): Replicator;
```

| Param   | Type    |
| :---:   | :---:   |
| remoteUrl    | string |
| username    | string |
| password    | string |

Creates a push replicator which can be used later on to sync updates with a remote database

**Returns**: <code>[Replicator](couchbase.md#replicator)</code>

---


### addDatabaseChangeListener(...)
```ts
 addDatabaseChangeListener(callback: (ids?: string[]) => void): void;
```

| Param   | Type    |
| :---:   | :---:   |
| callback    | (ids?: string[]) => void |

Adds a database change listener

---

### removeDatabaseChangeListener(...)
```ts
  removeDatabaseChangeListener(callback: (ids?: string[]) => void): void;
```

| Param   | Type    |
| :---:   | :---:   |
| callback    | (ids?: string[]) => void |

Removes a database change listener


---


### inBatch(...)
```ts
 inBatch(batch: () => void): void;
```

| Param   | Type    |
| :---:   | :---:   |
| batch    | Function |

Runs a group of operations in a batch. Use this when performing bulk write operations like multiple create/update; it saves the overhead of multiple database commits, greatly improving performance.


---


## Classes

### Replicator

| Method    | Type  |
| :---:     |:---: |
| start()   | void|
| stop()    |void  |
| isRunning()| boolean |
| setContinuous(isContinuous: boolean) | void  |
| setUserNameAndPassword(username: string, password: string) |  void    |
| setChannels(channels: string[])  |  void |
| setSessionIdAndCookieName(sessionId: string, cookieName: string)   |  void | 
| setSessionId(sessionId: string)   | void   |


### Blob

| Prop      | Type                                              |
| :---:     | :---:                                             |
| ios    |   any                                          |
| android     |  any  |
| content   |   any                                             |
| contentStream     |  any |
| contentType     |   any                                             |
| length    |   number                                             |
| digest      |   string                                          |
| properties      |   Map<string, any>                                          |

## Interfaces

### Query
| Prop      | Type                                              |
| :---:     | :---:                                             |
| select    |   any[]                                           |
| where     |  [QueryWhereItem](couchbase.md#querywhereitem)[]  |
| groupBy   |   any                                             |
| order     |  [QueryOrderItem](couchbase.md#queryorderitem)[]  |
| limit     |   any                                             |
| offset    |   any                                             |
| from      |   string                                          |

### QueryWhereItem

| Prop      | Type                                              |
| :---:     | :---:                                             |
| logical   |  [QueryLogicalOperator](couchbase.md#querylogicaloperator)|
| property  |  string  |
| comparison|   [QueryComparisonOperator](couchbase.md#querycomparisonoperator)|
| value     |  any|

### QueryOrderItem

| Prop      | Type |
| :---:     | :---:|
| property  |  string  |
| direction|   'asc' | 'desc' |


## Enums

### QueryMeta

| Members | Value           |
| :---:   | :---:           |
| ALL     | "COUCHBASE_ALL" |
| ID      | "COUCHBASE_ID"  |

### QueryLogicalOperator

| Members | Value |
| :---:   | :---: |
| AND     | "and" |
| OR      | "or"  |

### QueryArrayOperator

| Members   | Value     |
| :---:     | :---:     |
| CONTAINS  | "contains" |


### ConcurrencyMode

| Members   | Value     | Description |
| :---:     | :---:     | :---       |
| LastWriteWins    | 0  | (default) The last operation wins if there is a conflict. |
| FailOnConflict      | 1    | The operation will fail if there is a conflict. |


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
