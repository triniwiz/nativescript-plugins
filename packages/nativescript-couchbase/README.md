# NativeScript-Couchbase

## Installation

`tns plugin add @triniwiz/nativescript-couchbase`

## Usage
**Note Android min-sdk is 19**


```ts
import { Couchbase, ConcurrencyMode } from 'nativescript-couchbase-plugin';
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
import { Couchbase } from 'nativescript-couchbase-plugin';
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
import { Couchbase } from 'nativescript-couchbase-plugin';
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

## License

Apache License Version 2.0, January 2004
