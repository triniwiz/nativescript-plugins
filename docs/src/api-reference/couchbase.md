# Couchbase

|   Android Device  |   Android Emulator    |   iOS Device  |   iOS Simulator   |
| :-------------:     |:-------------:        |:-------------:| :-----:            |
| :white_check_mark:|:white_check_mark:     |:white_check_mark:|    :white_check_mark:| 


## Installing 

```base
    ns plugin add @triniwiz/nativescript-couchbase
```

## Android

::: warning
The minimum required SDK is version 22 (Lollipop :lollipop:)
:::



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

## API

```ts
import { Couchbase } from '@triniwiz/nativescript-couchbase';
```




