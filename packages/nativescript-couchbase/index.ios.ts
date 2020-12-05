import {
  BlobBase,
  Common,
  ConcurrencyMode,
  Query,
  QueryComparisonOperator,
  QueryLogicalOperator,
  QueryMeta,
  ReplicatorBase
} from './common';
import {getClass, isNullOrUndefined} from "@nativescript/core/utils/types";
import {knownFolders, path} from "@nativescript/core";

export {
  Query, QueryMeta, QueryArrayOperator, QueryComparisonOperator, QueryLogicalOperator, QueryOrderItem, QueryWhereItem
} from './common';


declare var CBLDatabase,
  CBLMutableDocument,
  CBLURLEndpoint,
  CBLReplicatorConfiguration,
  CBLReplicatorType,
  CBLBasicAuthenticator,
  CBLReplicator,
  CBLQueryExpression,
  CBLQueryOrdering,
  CBLQueryBuilder,
  CBLReplicatorActivityLevel,
  CBLQueryDataSource,
  CBLQuerySelectResult,
  CBLQueryMeta;

export class CouchBase extends Common {

  private __nativeInstance: CBLDatabase;

  get ios() {
    return this.__nativeInstance;
  }

  constructor(databaseName: string) {
    super(databaseName);
    this.__nativeInstance = CBLDatabase.alloc().initWithNameError(databaseName);
  }

  close() {
    this.ios.close();
  }

  inBatch(batch: () => void) {
    const errorRef = new interop.Reference() as interop.Reference<NSError>;
    this.ios.inBatchUsingBlock(errorRef, batch);
  }

  createDocument(data: Object, documentId?: string) {
    let doc: CBLMutableDocument;
    if (documentId) {
      doc = CBLMutableDocument.alloc().initWithID(documentId);
    } else {
      doc = CBLMutableDocument.alloc().init();
    }

    const keys = Object.keys(data);
    for (let key of keys) {
      const item = data[key];
      this.serialize(item, doc, key);
    }
    this.ios.saveDocumentError(doc);
    return doc.id;
  }

  setBlob(id: string, name: string, blob: any, mimeType: string = 'application/octet-stream') {
    try {
      const document = this.ios.documentWithID(id).toMutable();
      if (typeof blob === 'string') {
        if (blob.startsWith(`file`)) {
          const nativeBlob = CBLBlob.alloc().initWithContentTypeFileURLError(mimeType, NSURL.URLWithString(blob));
          document.setBlobForKey(nativeBlob, name);
        } else if (blob.startsWith(`/`)) {
          const nativeBlob = CBLBlob.alloc().initWithContentTypeFileURLError(mimeType, NSURL.fileURLWithPath(blob));
          document.setBlobForKey(nativeBlob, name);
        } else if (blob.startsWith(`~`)) {
          const filePath = path.join(knownFolders.currentApp().path, blob.replace('~', ''));
          const nativeBlob = CBLBlob.alloc().initWithContentTypeFileURLError(mimeType, NSURL.URLWithString(filePath));
          document.setBlobForKey(nativeBlob, name);
        } else if (blob.startsWith(`res`)) {
          const bundle = NSBundle.mainBundle;
          const path = bundle.pathForResourceOfType(blob.replace('res://', ''), CouchBase.getExtension(mimeType));
          const nativeBlob = CBLBlob.alloc().initWithContentTypeFileURLError(mimeType, NSURL.URLWithString(path));
          document.setBlobForKey(nativeBlob, name);
        } else {
          // TODO what else to check?
        }
        this.ios.saveDocumentError(document);
      } else {
        // TODO what else to check ... maybe native objects ??
      }
    } catch (e) {
      console.debug(e);
    }
  }

  getBlob(id: string, name: string) {
    let document = this.ios.documentWithID(id) as CBLDocument;
    if (!document) return null;
    const blob = document.blobForKey(name);
    if (!blob) return null;
    return new Blob(blob);
  }

  private static fromISO8601UTC(date: string) {
    const dateFormatter = NSDateFormatter.new();
    dateFormatter.dateFormat = 'yyyy-MM-dd\'T\'HH:mm:ss.SSSZ';
    return dateFormatter.dateFromString(date);
  }

  private serializeObject(item: any, object: CBLMutableDictionary, key: string) {
    if (item === null) {
      object.setValueForKey(null, key);
      return;
    }

    switch (typeof item) {
      case 'object':
        if (item instanceof Date) {
          object.setDateForKey(CouchBase.fromISO8601UTC(item.toISOString()), key);
          return;
        }

        if (Array.isArray(item)) {
          const array = CBLMutableArray.new();
          item.forEach((data) => {
            this.serializeArray(data, array);
          });
          object.setArrayForKey(array, key);
          return;
        }

        const nativeObject = CBLMutableDictionary.new();
        Object.keys(item).forEach((itemKey) => {
          const obj = item[itemKey];
          this.serializeObject(obj, nativeObject, itemKey);
        });
        object.setDictionaryForKey(nativeObject, key);
        break;
      case 'number':
        if (this.numberIs64Bit(item)) {
          if (this.numberHasDecimals(item)) {
            object.setDoubleForKey(item, key);
          } else {
            object.setLongLongForKey(item, key);
          }
        } else {
          if (this.numberHasDecimals(item)) {
            object.setFloatForKey(item, key);
          } else {
            object.setIntegerForKey(item, key);
          }
        }
        break;
      case 'boolean':
        object.setBooleanForKey(item, key);
        break;
      default:
        object.setValueForKey(item, key);
    }
  }

  private serializeArray(item: any, array: CBLMutableArray) {
    if (item === null) {
      array.addValue(null);
      return;
    }

    switch (typeof item) {
      case 'object':
        if (item instanceof Date) {
          array.addDate(CouchBase.fromISO8601UTC(item.toISOString()));
          return;
        }

        if (Array.isArray(item)) {
          const nativeArray = CBLMutableArray.new();
          item.forEach((data) => {
            this.serializeArray(data, nativeArray);
          });
          array.addArray(nativeArray);
          return;
        }

        const object = CBLMutableDictionary.new();
        Object.keys(item).forEach((itemKey) => {
          const obj = item[itemKey];
          this.serializeObject(obj, object, itemKey);
        });
        array.addDictionary(object);
        break;
      case 'number':
        if (this.numberIs64Bit(item)) {
          if (this.numberHasDecimals(item)) {
            array.addDouble(item);
          } else {
            array.addLongLong(item);
          }
        } else {
          if (this.numberHasDecimals(item)) {
            array.addFloat(item);
          } else {
            array.addInteger(item);
          }
        }
        break;
      case 'boolean':
        array.addBoolean(item);
        break;
      default:
        array.addValue(item);
    }
  }

  private serialize(item: any, doc: CBLMutableDocument, key: string) {
    if (item === null) {
      doc.setValueForKey(null, key);
      return;
    }

    switch (typeof item) {
      case 'object':
        if (item instanceof Date) {
          doc.setDateForKey(CouchBase.fromISO8601UTC(item.toISOString()), key);
          return;
        }

        if (Array.isArray(item)) {
          const array = CBLMutableArray.new();
          item.forEach((data) => {
            this.serializeArray(data, array);
          });
          doc.setArrayForKey(array, key);
          return;
        }

        const object = CBLMutableDictionary.new();
        Object.keys(item).forEach((itemKey) => {
          const obj = item[itemKey];
          this.serializeObject(obj, object, itemKey);
        });
        doc.setDictionaryForKey(object, key);
        break;
      case 'number':
        if (this.numberIs64Bit(item)) {
          if (this.numberHasDecimals(item)) {
            doc.setDoubleForKey(item, key);
          } else {
            doc.setLongLongForKey(item, key);
          }
        } else {
          if (this.numberHasDecimals(item)) {
            doc.setFloatForKey(item, key);
          } else {
            doc.setIntegerForKey(item, key);
          }
        }
        break;
      case 'boolean':
        doc.setBooleanForKey(item, key);
        break;
      default:
        doc.setValueForKey(item, key);
    }
  }

  getDocument(documentId: string): any {
    const doc = this.ios.documentWithID(documentId);
    if (doc) {
      let obj = {};
      const keys = doc.keys;
      const size = keys.count;
      obj['id'] = doc.id;
      for (let i = 0; i < size; i++) {
        const key = keys.objectAtIndex(i);
        const value = doc.valueForKey(key);
        const newValue = {};
        newValue[key] = this.deserialize(value);
        obj = Object.assign(obj, newValue);
      }
      return obj;
    }
    return null;
  }

  numberHasDecimals(item: number) {
    return !(item % 1 === 0);
  }

  numberIs64Bit(item: number) {
    return item < -Math.pow(2, 31) + 1 || item > Math.pow(2, 31) - 1;
  }

  private deserialize(data: any) {
    if (typeof data === 'string' || typeof data === 'number' || typeof data === 'boolean' || typeof data !== 'object') return data;

    if (isNullOrUndefined(data)) {
      return data;
    }

    if (data instanceof NSNull) {
      return null;
    }

    if (data instanceof CBLDictionary) {
      const keys = data.keys;
      const length = keys.count;
      const object = {};
      for (let i = 0; i < length; i++) {
        const key = keys.objectAtIndex(i);
        const nativeItem = data.valueForKey(key);
        object[key] = this.deserialize(nativeItem);
      }
      return object;
    }

    if (data instanceof CBLArray) {
      const array = [];
      const size = data.count;
      for (let i = 0; i < size; i++) {
        const nativeItem = data.valueAtIndex(i);
        const item = this.deserialize(nativeItem);
        array.push(item);
      }
      return array;
    }

    return data;
  }

  updateDocument(documentId: string, data: any) {
    const original = this.ios.documentWithID(documentId);
    const newDoc = original.toMutable();
    const keys = Object.keys(data);
    for (let key of keys) {
      const item = data[key];
      this.serialize(item, newDoc, key);
    }
    this.ios.saveDocumentError(newDoc);
  }

  deleteDocument(documentId: string, concurrencyMode: ConcurrencyMode = 1) {

    const doc = this.ios.documentWithID(documentId);
    return this.ios.deleteDocumentConcurrencyControlError(doc,
      concurrencyMode === 1 ? CBLConcurrencyControl.kCBLConcurrencyControlFailOnConflict :
        CBLConcurrencyControl.kCBLConcurrencyControlLastWriteWins);
  }

  destroyDatabase() {
    return this.ios.delete();
  }

  createReplication(remoteUrl: string, direction: 'push' | 'pull' | 'both') {
    const url = NSURL.alloc().initWithString(remoteUrl);
    const targetEndpoint = CBLURLEndpoint.alloc().initWithURL(url);
    const replConfig = CBLReplicatorConfiguration.alloc().initWithDatabaseTarget(
      this.ios,
      targetEndpoint
    );
    if (direction === 'pull') {
      replConfig.replicatorType = CBLReplicatorType.kCBLReplicatorTypePull;
    } else if (direction === 'push') {
      replConfig.replicatorType = CBLReplicatorType.kCBLReplicatorTypePush;
    } else {
      replConfig.replicatorType = CBLReplicatorType.kCBLReplicatorTypePushAndPull;
    }

    const replicator = CBLReplicator.alloc().initWithConfig(replConfig);

    return new Replicator(replicator);
  }

  createPushReplication(
    remoteUrl: string
  ) {
    return this.createReplication(remoteUrl, 'push');
  }

  createPullReplication(
    remoteUrl: string
  ) {
    return this.createReplication(remoteUrl, 'pull');
  }

  private _listenerMap = {};

  addDatabaseChangeListener(callback: any) {
    const token = this.ios.addChangeListener((change: any) => {
      if (callback && typeof callback === 'function') {
        const ids = [];
        const documentIds = change.documentIDs;
        const size = documentIds.count;
        for (let i = 0; i < size; i++) {
          const item = documentIds[i];
          ids.push(item);
        }
        callback(ids);
      }
    });
    if (!isNullOrUndefined(token)) {
      this._listenerMap[callback] = token;
    }
  }

  removeDatabaseChangeListener(callback: any) {
    const token = this._listenerMap[callback];
    if (!isNullOrUndefined(token)) {
      this.ios.removeChangeListenerWithToken(token);
      delete this._listenerMap[callback];
    }
  }

  private serializeExpression(item) {
    if (item === null) {
      return null;
    }

    switch (typeof item) {
      case 'string':
        return CBLQueryExpression.string(item);
      case 'object':
        if (item instanceof Date) {
          return CBLQueryExpression.date(CouchBase.fromISO8601UTC(item.toISOString()));
        }
        return CBLQueryExpression.value(item);

      case 'number':
        if (this.numberIs64Bit(item)) {
          if (this.numberHasDecimals(item)) {
            return CBLQueryExpression.double(item);
          } else {
            return CBLQueryExpression.longLong(item);
          }
        } else {
          if (this.numberHasDecimals(item)) {
            return CBLQueryExpression.float(item);
          } else {
            return CBLQueryExpression.integer(item);
          }
        }
      case 'boolean':
        return CBLQueryExpression.boolean(item);
      default:
        return CBLQueryExpression.value(item);
    }
  }

  private setComparison(item) {
    let nativeQuery;
    switch (item.comparison as QueryComparisonOperator) {
      case 'equalTo':
        nativeQuery = CBLQueryExpression.property(
          item.property
        ).equalTo(this.serializeExpression(item.value));
        break;
      case 'add':
        nativeQuery = CBLQueryExpression.property(
          item.property
        ).add(this.serializeExpression(item.value));
        break;
      case 'between':
        if (Array.isArray(item.value) && item.value.length === 2) {
          nativeQuery = CBLQueryExpression.property(
            item.property
          ).between(this.serializeExpression(item.value[0])).andExpression(this.serializeExpression(item.value[1]));
        }
        break;
      case 'collate':
        nativeQuery = CBLQueryExpression.property(
          item.property
        ).collate(this.serializeExpression(item.value));
        break;
      case 'divide':
        nativeQuery = CBLQueryExpression.property(
          item.property
        ).divide(this.serializeExpression(item.value));
        break;
      case 'greaterThan':
        nativeQuery = CBLQueryExpression.property(
          item.property
        ).greaterThan(this.serializeExpression(item.value));
        break;
      case 'greaterThanOrEqualTo':
        nativeQuery = CBLQueryExpression.property(
          item.property
        ).greaterThanOrEqualTo(this.serializeExpression(item.value));
        break;
      case 'in':
        const inArray = [];
        if (Array.isArray(item.value)) {
          for (let exp of item.value) {
            inArray.push(this.serializeExpression(exp));
          }
        } else {
          inArray.push(this.serializeExpression(item.value));
        }
        nativeQuery = CBLQueryExpression.property(item.property).in(
          inArray
        );
        break;
      case 'is':
        nativeQuery = CBLQueryExpression.property(item.property).is(
          this.serializeExpression(item.value)
        );
        break;
      case 'isNot':
        nativeQuery = CBLQueryExpression.property(item.property).isNot(
          this.serializeExpression(item.value)
        );
        break;
      case 'isNullOrMissing':
        nativeQuery = CBLQueryExpression.property(
          item.property
        ).isNullOrMissing();
        break;
      case 'lessThan':
        nativeQuery = CBLQueryExpression.property(
          item.property
        ).lessThan(this.serializeExpression(item.value));
        break;
      case 'lessThanOrEqualTo':
        nativeQuery = CBLQueryExpression.property(
          item.property
        ).lessThanOrEqualTo(this.serializeExpression(item.value));
        break;
      case 'like':
        nativeQuery = CBLQueryFunction.lower(CBLQueryExpression.property(item.property)).like(
          this.serializeExpression(item.value)
        );
        break;
      case 'modulo':
        nativeQuery = CBLQueryExpression.property(item.property).modulo(
          this.serializeExpression(item.value)
        );
        break;
      case 'multiply':
        nativeQuery = CBLQueryExpression.property(
          item.property
        ).multiply(this.serializeExpression(item.value));
        break;

      case 'notEqualTo':
        nativeQuery = CBLQueryExpression.property(
          item.property
        ).notEqualTo(this.serializeExpression(item.value));
        break;

      case 'notNullOrMissing':
        nativeQuery = CBLQueryExpression.property(
          item.property
        ).notNullOrMissing();
        break;
      case 'regex':
        nativeQuery = CBLQueryFunction.lower(item.property).regex(
          this.serializeExpression(item.value)
        );
        break;
    }
    return nativeQuery;
  }

  query(query: Query = {select: [QueryMeta.ALL, QueryMeta.ID]}) {
    const items = [];
    let select = [];
    let from;
    let join = null;
    let where;
    let groupBy = null;
    let orderBy = null;
    let limit = null;
    let having = null;
    let isAll = false;
    if (!query.select || query.select.length === 0) {
      isAll = true;
      select.push(CBLQuerySelectResult.all());
      select.push(CBLQuerySelectResult.expression(CBLQueryMeta.id()));
    } else {
      query.select.forEach(item => {
        if (item === QueryMeta.ID) {
          select.push(CBLQuerySelectResult.expression(CBLQueryMeta.id()));
        } else if (item === QueryMeta.ALL) {
          isAll = true;
          select.push(CBLQuerySelectResult.all());
        } else {
          select.push(CBLQueryExpression.property(item));
        }
      });
    }

    if (query.from) {
      const db = new CouchBase(query.from);
      from = CBLQueryDataSource.database(db.ios);
    } else {
      from = CBLQueryDataSource.database(this.ios);
    }

    let nativeQuery = null;
    if (query.where) {
      for (let item of query.where) {
        if (item.logical === QueryLogicalOperator.AND) {
          if (!nativeQuery) break;
          nativeQuery = nativeQuery.andExpression(this.setComparison(item));
        } else if (item.logical === QueryLogicalOperator.OR) {
          if (!nativeQuery) break;
          nativeQuery = nativeQuery.orExpression(this.setComparison(item));
        } else {
          nativeQuery = this.setComparison(item);
        }
      }
    }

    if (query.groupBy) {
      if (query.groupBy.length > 0) {
        groupBy = [];
      }
      for (let prop of query.groupBy) {
        groupBy.push(CBLQueryExpression.property(prop));
      }
    }
    if (query.order) {
      if (query.order.length > 0) {
        orderBy = [];
      }
      for (let item of query.order) {
        switch (item.direction) {
          case 'desc':
            orderBy.push(CBLQueryOrdering.property(item.property).descending());
            break;
          default:
            orderBy.push(CBLQueryOrdering.property(item.property).ascending());
            break;
        }
      }
    }

    if (query.limit && typeof query.limit === 'number') {
      if (query.offset && typeof query.offset === 'number') {
        limit = CBLQueryLimit.limitOffset(CBLQueryExpression.integer(query.limit), CBLQueryExpression.integer(query.offset));
      } else {
        limit = CBLQueryLimit.limit(CBLQueryExpression.integer(query.limit));
      }
    }

    let queryBuilder = CBLQueryBuilder.selectFromJoinWhereGroupByHavingOrderByLimit(
      select,
      from,
      join,
      nativeQuery,
      groupBy,
      having,
      orderBy,
      limit
    );

    const result = queryBuilder.execute().allResults();
    const size = result.count;
    for (let i = 0; i < size; i++) {
      const item = result.objectAtIndex(i);
      const keys = item.keys;
      const keysSize = keys.count;
      const obj = {};
      for (let keyId = 0; keyId < keysSize; keyId++) {
        const key = keys.objectAtIndex(keyId);
        const nativeItem = item.valueForKey(key);
        if (isAll && getClass(nativeItem) === 'CBLDictionary') {
          const cblKeys = nativeItem.keys;
          const cblKeysSize = cblKeys.count;
          for (let cblKeysId = 0; cblKeysId < cblKeysSize; cblKeysId++) {
            const cblKey = cblKeys.objectAtIndex(cblKeysId);
            obj[cblKey] = this.deserialize(nativeItem.valueForKey(cblKey));
          }
        } else {
          obj[key] = this.deserialize(nativeItem);
        }
      }
      items.push(obj);
    }
    return items;
  }

  private static getExtension(mimeType: string) {
    if (!mimeType) return 'bin';
    for (let key of Object.keys(mimeTypes)) {
      let mime = mimeType[key];
      if (typeof mimeType === 'string' && mimeType.indexOf(mime) > -1) {
        return key;
      }
    }
    return 'bin';
  }
}

export class Replicator extends ReplicatorBase {
  constructor(replicator: any) {
    super(replicator);
  }

  start() {
    this.replicator.start();
  }

  stop() {
    this.replicator.stop();
  }

  isRunning() {
    if (this.replicator && this.replicator.status && this.replicator.status.activity) {
      return (
        this.replicator.status.activity ===
        CBLReplicatorActivityLevel.kCBLReplicatorBusy
      );
    }
    return false;
  }

  setContinuous(isContinuous: boolean) {
    const newConfig = CBLReplicatorConfiguration.alloc().initWithConfig(this.replicator.config);
    newConfig.continuous = isContinuous;
    this.replicator = CBLReplicator.alloc().initWithConfig(newConfig);
  }

  setUserNameAndPassword(username: string, password: string) {
    const newConfig = CBLReplicatorConfiguration.alloc().initWithConfig(this.replicator.config);
    newConfig.authenticator = CBLBasicAuthenticator.alloc().initWithUsernamePassword(
      username,
      password
    );
    this.replicator = CBLReplicator.alloc().initWithConfig(newConfig);
  }

  setChannels(channels: string[]) {
    const newConfig = CBLReplicatorConfiguration.alloc().initWithConfig(this.replicator.config);
    newConfig.channels = NSArray.arrayWithArray(channels);
    this.replicator = CBLReplicator.alloc().initWithConfig(newConfig);
  }

  setSessionIdAndCookieName(sessionId: string, cookieName: string) {
    const newConfig = CBLReplicatorConfiguration.alloc().initWithConfig(this.replicator.config);
    newConfig.authenticator = CBLSessionAuthenticator.alloc().initWithSessionIDCookieName(
      sessionId,
      cookieName
    );
    this.replicator = CBLReplicator.alloc().initWithConfig(newConfig);
  }

  setSessionId(sessionId: string) {
    const newConfig = CBLReplicatorConfiguration.alloc().initWithConfig(this.replicator.config);
    newConfig.authenticator = CBLSessionAuthenticator.alloc().initWithSessionID(
      sessionId
    );
    this.replicator = CBLReplicator.alloc().initWithConfig(newConfig);
  }
}


export class Blob extends BlobBase {

  constructor(blob: any) {
    super(blob);
  }

  get ios() {
    return this.blob;
  }

  get content(): any {
    if (!this.ios) return null;
    return this.ios.content;
  }

  get contentStream(): any {
    if (!this.ios) return null;
    return this.ios.contentStream;
  }

  get contentType(): string {
    if (!this.ios) return null;
    return this.ios.contentType;
  }

  get length(): number {
    if (!this.ios) return 0;
    return this.ios.length;
  }


  get digest(): string {
    if (!this.ios) return null;
    return this.ios.digest;
  }

  get properties(): Map<string, any> {
    const map = new Map();
    if (!this.ios) return map;
    const nativeMap = this.ios.properties;
    const mapKeysArray = nativeMap.allKeys;
    const length = mapKeysArray.count;
    for (let i = 0; i < length; i++) {
      const key = mapKeysArray[i];
      const value = nativeMap.valueForKey(key);
      map.set(key, value);
    }
    return map;
  }

}


let DEFAULT_MIME_TYPE = 'application/octet-stream';

let mimeTypes = {
  'md': 'text/markdown',
  'html': 'text/html',
  'htm': 'text/html',
  'shtml': 'text/html',
  'css': 'text/css',
  'xml': 'text/xml',
  'gif': 'image/gif',
  'jpeg': 'image/jpeg',
  'jpg': 'image/jpeg',
  'js': 'application/javascript',
  'atom': 'application/atom+xml',
  'rss': 'application/rss+xml',
  'mml': 'text/mathml',
  'txt': 'text/plain',
  'jad': 'text/vnd.sun.j2me.app-descriptor',
  'wml': 'text/vnd.wap.wml',
  'htc': 'text/x-component',
  'png': 'image/png',
  'tif': 'image/tiff',
  'tiff': 'image/tiff',
  'wbmp': 'image/vnd.wap.wbmp',
  'ico': 'image/x-icon',
  'jng': 'image/x-jng',
  'bmp': 'image/x-ms-bmp',
  'svg': 'image/svg+xml',
  'svgz': 'image/svg+xml',
  'webp': 'image/webp',
  'woff': 'application/font-woff',
  'jar': 'application/java-archive',
  'war': 'application/java-archive',
  'ear': 'application/java-archive',
  'json': 'application/json',
  'hqx': 'application/mac-binhex40',
  'doc': 'application/msword',
  'pdf': 'application/pdf',
  'ps': 'application/postscript',
  'eps': 'application/postscript',
  'ai': 'application/postscript',
  'rtf': 'application/rtf',
  'm3u8': 'application/vnd.apple.mpegurl',
  'xls': 'application/vnd.ms-excel',
  'eot': 'application/vnd.ms-fontobject',
  'ppt': 'application/vnd.ms-powerpoint',
  'wmlc': 'application/vnd.wap.wmlc',
  'kml': 'application/vnd.google-earth.kml+xml',
  'kmz': 'application/vnd.google-earth.kmz',
  '7z': 'application/x-7z-compressed',
  'cco': 'application/x-cocoa',
  'jardiff': 'application/x-java-archive-diff',
  'jnlp': 'application/x-java-jnlp-file',
  'run': 'application/x-makeself',
  'pl': 'application/x-perl',
  'pm': 'application/x-perl',
  'prc': 'application/x-pilot',
  'pdb': 'application/x-pilot',
  'rar': 'application/x-rar-compressed',
  'rpm': 'application/x-redhat-package-manager',
  'sea': 'application/x-sea',
  'swf': 'application/x-shockwave-flash',
  'sit': 'application/x-stuffit',
  'tcl': 'application/x-tcl',
  'tk': 'application/x-tcl',
  'der': 'application/x-x509-ca-cert',
  'pem': 'application/x-x509-ca-cert',
  'crt': 'application/x-x509-ca-cert',
  'xpi': 'application/x-xpinstall',
  'xhtml': 'application/xhtml+xml',
  'xspf': 'application/xspf+xml',
  'zip': 'application/zip',
  'bin': 'application/octet-stream',
  'exe': 'application/octet-stream',
  'dll': 'application/octet-stream',
  'deb': 'application/octet-stream',
  'dmg': 'application/octet-stream',
  'iso': 'application/octet-stream',
  'img': 'application/octet-stream',
  'msi': 'application/octet-stream',
  'msp': 'application/octet-stream',
  'msm': 'application/octet-stream',
  'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'mid': 'audio/midi',
  'midi': 'audio/midi',
  'kar': 'audio/midi',
  'mp3': 'audio/mpeg',
  'ogg': 'audio/ogg',
  'm4a': 'audio/x-m4a',
  'ra': 'audio/x-realaudio',
  '3gpp': 'video/3gpp',
  '3gp': 'video/3gpp',
  'ts': 'video/mp2t',
  'mp4': 'video/mp4',
  'mpeg': 'video/mpeg',
  'mpg': 'video/mpeg',
  'mov': 'video/quicktime',
  'webm': 'video/webm',
  'flv': 'video/x-flv',
  'm4v': 'video/x-m4v',
  'mng': 'video/x-mng',
  'asx': 'video/x-ms-asf',
  'asf': 'video/x-ms-asf',
  'wmv': 'video/x-ms-wmv',
  'avi': 'video/x-msvideo'
};
