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
import {isNullOrUndefined} from "@nativescript/core/utils/types";
import {knownFolders, path, Utils} from "@nativescript/core";

export {
  Query,
  QueryMeta,
  QueryArrayOperator,
  QueryComparisonOperator,
  QueryLogicalOperator,
  QueryOrderItem,
  QueryWhereItem
} from './common';

declare const com;

export class CouchBase extends Common {
  config: com.couchbase.lite.DatabaseConfiguration;
  android: com.couchbase.lite.Database;
  private static didInit = false;

  constructor(name: string) {
    super(name);
    if (!CouchBase.didInit) {
      CouchBase.didInit = true;
      com.couchbase.lite.CouchbaseLite.init(Utils.ad.getApplicationContext());
    }
    this.config = new com.couchbase.lite.DatabaseConfiguration();
    this.android = new com.couchbase.lite.Database(name, this.config);
  }

  close() {
    this.android.close();
  }

  inBatch(batch: () => void) {
    const runnable = new java.lang.Runnable({
      run: () => {
        batch();
      }
    });

    this.android.inBatch(runnable);
  }

  createDocument(data: Object, documentId?: string) {
    try {
      let doc;
      if (documentId) {
        doc = new com.couchbase.lite.MutableDocument(documentId);
      } else {
        doc = new com.couchbase.lite.MutableDocument();
      }
      const keys = Object.keys(data);
      for (let key of keys) {
        const item = data[key];
        this.serialize(item, doc, key);
      }
      this.android.save(doc);
      return doc.getId();
    } catch (e) {
      console.error(e.message);
      return null;
    }
  }

  setBlob(id: string, name: string, blob: any, mimeType: string = 'application/octet-stream') {
    try {
      const document = this.android.getDocument(id).toMutable();
      if (typeof blob === 'string') {
        if (blob.startsWith(`file`)) {
          const nativeBlob = new com.couchbase.lite.Blob(mimeType, new java.net.URL(blob));
          document.setBlob(name, nativeBlob);
        } else if (blob.startsWith(`/`)) {
          const nativeBlob = new com.couchbase.lite.Blob(mimeType, new java.net.URL(`file://${blob}`));
          document.setBlob(name, nativeBlob);
        } else if (blob.startsWith(`~`)) {
          const filePath = path.join(knownFolders.currentApp().path, blob.replace('~', ''));
          const nativeBlob = new com.couchbase.lite.Blob(mimeType, new java.net.URL(`file://${filePath}`));
          document.setBlob(name, nativeBlob);
        } else if (blob.startsWith(`res`)) {
          const ctx = Utils.ad.getApplicationContext() as android.content.Context;
          const is = ctx.getAssets().open(blob.replace('res://', ''));
          const nativeBlob = new com.couchbase.lite.Blob(mimeType, is);
          document.setBlob(name, nativeBlob);
        } else {
          // TODO what else to check?
        }
        this.android.save(document);
      } else {
        // TODO what else to check ... maybe native objects ??
      }
    } catch (e) {
      console.debug(e);
    }
  }

  getBlob(id: string, name: string) {
    let document = this.android.getDocument(id) as com.couchbase.lite.Document;
    if (!document) return null;
    const blob = document.getBlob(name);
    if (!blob) return null;
    return new Blob(blob);
  }

  private deserialize(data: any) {
    if (
      typeof data === 'string' ||
      typeof data === 'number' ||
      typeof data === 'boolean' ||
      typeof data !== 'object'
    )
      return data;

    if (isNullOrUndefined(data)) {
      return data;
    }

    switch (data.getClass().getName()) {
      case 'java.lang.String':
        return String(data);
      case 'java.lang.Boolean':
        return String(data) === 'true';
      case 'java.lang.Integer':
      case 'java.lang.Long':
      case 'java.lang.Double':
      case 'java.lang.Short':
      case 'java.lang.Float':
        return Number(data);
      case 'com.couchbase.lite.Dictionary':
        const keys = data.getKeys();
        const length = keys.size();
        const object = {};
        for (let i = 0; i < length; i++) {
          const key = keys.get(i);
          const nativeItem = data.getValue(key);
          object[key] = this.deserialize(nativeItem);
        }
        return object;
      case 'com.couchbase.lite.Array':
        const array = [];
        const size = data.count();
        for (let i = 0; i < size; i++) {
          const nativeItem = data.getValue(i);
          const item = this.deserialize(nativeItem);
          array.push(item);
        }
        return array;
      default:
        return data;
    }
  }

  getDocument(documentId: string): any {
    try {
      const doc = this.android.getDocument(documentId);
      if (!doc) return null;
      const keys = doc.getKeys();
      const size = keys.size();
      let object = {};
      object['id'] = doc.getId();
      for (let i = 0; i < size; i++) {
        const key = keys.get(i);
        const nativeItem = doc.getValue(key);
        const newItem = {};
        newItem[key] = this.deserialize(nativeItem);
        object = Object.assign(object, newItem);
      }
      return object;
    } catch (e) {
      console.error(e.message);
      return null;
    }
  }

  private static fromISO8601UTC(date: string) {
    const dateFormat = new java.text.SimpleDateFormat(
      'yyyy-MM-dd\'T\'HH:mm:ss.SSS'
    );
    const tz = java.util.TimeZone.getTimeZone('UTC');
    dateFormat.setTimeZone(tz);
    return dateFormat.parse(date);
  }

  private static toISO8601UTC(date: Date) {
    const dateFormat = new java.text.SimpleDateFormat(
      'yyyy-MM-dd\'T\'HH:mm:ss.SSS'
    );
    const tz = java.util.TimeZone.getTimeZone('UTC');
    dateFormat.setTimeZone(tz);

    return dateFormat.format(date);
  }

  updateDocument(documentId: string, data: any) {
    try {
      const origin = this.android.getDocument(
        documentId
      ) as com.couchbase.lite.Document;
      if (origin) {
        const doc = origin.toMutable();
        const keys = Object.keys(data);
        for (let key of keys) {
          const item = data[key];
          this.serialize(item, doc, key);
        }
        this.android.save(doc);
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  private serializeObject(item: any, object: com.couchbase.lite.MutableDictionary, key: string) {
    if (item === null) {
      object.setValue(key, null);
      return;
    }

    switch (typeof item) {
      case 'object':
        if (item instanceof Date) {
          object.setDate(key, CouchBase.fromISO8601UTC(item.toISOString()));
          return;
        }

        if (Array.isArray(item)) {
          const array = new com.couchbase.lite.MutableArray();
          item.forEach(data => {
            this.serializeArray(data, array);
          });
          object.setArray(key, array);
          return;
        }

        const nativeObject = new com.couchbase.lite.MutableDictionary();
        Object.keys(item).forEach(itemKey => {
          const obj = item[itemKey];
          this.serializeObject(obj, nativeObject, itemKey);
        });
        object.setDictionary(key, nativeObject);
        break;
      case 'number':
        if (this.numberIs64Bit(item)) {
          if (this.numberHasDecimals(item)) {
            object.setDouble(key, item);
          } else {
            object.setLong(key, item);
          }
        } else {
          if (this.numberHasDecimals(item)) {
            object.setFloat(key, item);
          } else {
            object.setInt(key, item);
          }
        }
        break;
      case 'boolean':
        object.setBoolean(key, item);
        break;
      default:
        object.setValue(key, item);
    }
  }

  private serializeArray(item: any, array: com.couchbase.lite.MutableArray) {
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
          const nativeArray = new com.couchbase.lite.MutableArray();
          item.forEach(data => {
            this.serializeArray(data, nativeArray);
          });
          array.addArray(nativeArray);
          return;
        }

        const object = new com.couchbase.lite.MutableDictionary();
        Object.keys(item).forEach(itemKey => {
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
            array.addLong(item);
          }
        } else {
          if (this.numberHasDecimals(item)) {
            array.addFloat(item);
          } else {
            array.addInt(item);
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

  private serialize(item: any, doc: com.couchbase.lite.MutableDocument, key: string) {
    if (item === null) {
      doc.setValue(key, null);
      return;
    }

    switch (typeof item) {
      case 'object':
        if (item instanceof Date) {
          doc.setDate(key, CouchBase.fromISO8601UTC(item.toISOString()));
          return;
        }

        if (Array.isArray(item)) {
          const array = new com.couchbase.lite.MutableArray();
          item.forEach(data => {
            this.serializeArray(data, array);
          });
          doc.setArray(key, array);
          return;
        }

        const object = new com.couchbase.lite.MutableDictionary();
        Object.keys(item).forEach(itemKey => {
          const obj = item[itemKey];
          this.serializeObject(obj, object, itemKey);
        });
        doc.setDictionary(key, object);
        break;
      case 'number':
        if (this.numberIs64Bit(item)) {
          if (this.numberHasDecimals(item)) {
            doc.setDouble(key, item);
          } else {
            doc.setLong(key, item);
          }
        } else {
          if (this.numberHasDecimals(item)) {
            doc.setFloat(key, item);
          } else {
            doc.setInt(key, item);
          }
        }
        break;
      case 'boolean':
        doc.setBoolean(key, item);
        break;
      default:
        doc.setValue(key, item);
    }
  }

  numberHasDecimals(item: number) {
    return !(item % 1 === 0);
  }

  numberIs64Bit(item: number) {
    return item < -Math.pow(2, 31) + 1 || item > Math.pow(2, 31) - 1;
  }

  deleteDocument(documentId: string, concurrencyMode: ConcurrencyMode = 1) {
    try {
      const doc = this.android.getDocument(documentId);
      return this.android.delete(doc, concurrencyMode === 1 ? com.couchbase.lite.ConcurrencyControl.FAIL_ON_CONFLICT :
        com.couchbase.lite.ConcurrencyControl.LAST_WRITE_WINS);
    } catch (e) {
      console.error(e.message);
      return false;
    }
  }

  destroyDatabase() {
    try {
      this.android.delete();
    } catch (e) {
      console.error(e.message);
    }
  }

  private serializeExpression(item) {
    if (item === null) {
      return null;
    }

    switch (typeof item) {
      case 'string':
        return com.couchbase.lite.Expression.string(item);
      case 'object':
        if (item instanceof Date) {
          return com.couchbase.lite.Expression.date(CouchBase.fromISO8601UTC(item.toISOString()));
        }
        return com.couchbase.lite.Expression.value(item);

      case 'number':
        if (this.numberIs64Bit(item)) {
          if (this.numberHasDecimals(item)) {
            return com.couchbase.lite.Expression.doubleValue(item);
          } else {
            return com.couchbase.lite.Expression.longValue(item);
          }
        } else {
          if (this.numberHasDecimals(item)) {
            return com.couchbase.lite.Expression.floatValue(item);
          } else {
            return com.couchbase.lite.Expression.intValue(item);
          }
        }
      case 'boolean':
        return com.couchbase.lite.Expression.booleanValue(item);
      default:
        return com.couchbase.lite.Expression.value(item);
    }
  }

  private setComparison(item) {
    let nativeQuery;
    switch (item.comparison as QueryComparisonOperator) {
      case 'equalTo':
        nativeQuery = com.couchbase.lite.Expression.property(
          item.property
        ).equalTo(this.serializeExpression(item.value));
        break;
      case 'add':
        nativeQuery = com.couchbase.lite.Expression.property(item.property).add(
          this.serializeExpression(item.value)
        );
        break;
      case 'between':
        if (Array.isArray(item.value) && item.value.length === 2) {
          nativeQuery = com.couchbase.lite.Expression.property(
            item.property
          ).between(
            com.couchbase.lite.Expression.value(this.serializeExpression(item.value[0])),
            com.couchbase.lite.Expression.value(this.serializeExpression(item.value[1]))
          );
        }
        break;
      case 'collate':
        nativeQuery = com.couchbase.lite.Expression.property(
          item.property
        ).collate(this.serializeExpression(item.value));
        break;
      case 'divide':
        nativeQuery = com.couchbase.lite.Expression.property(
          item.property
        ).divide(this.serializeExpression(item.value));
        break;
      case 'greaterThan':
        nativeQuery = com.couchbase.lite.Expression.property(
          item.property
        ).greaterThan(this.serializeExpression(item.value));
        break;
      case 'greaterThanOrEqualTo':
        nativeQuery = com.couchbase.lite.Expression.property(
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
        nativeQuery = com.couchbase.lite.Expression.property(item.property).in(
          inArray
        );
        break;
      case 'is':
        nativeQuery = com.couchbase.lite.Expression.property(item.property).is(
          this.serializeExpression(item.value)
        );
        break;
      case 'isNot':
        nativeQuery = com.couchbase.lite.Expression.property(
          item.property
        ).isNot(this.serializeExpression(item.value));
        break;
      case 'isNullOrMissing':
        nativeQuery = com.couchbase.lite.Expression.property(
          item.property
        ).isNullOrMissing();
        break;
      case 'lessThan':
        nativeQuery = com.couchbase.lite.Expression.property(
          item.property
        ).lessThan(this.serializeExpression(item.value));
        break;
      case 'lessThanOrEqualTo':
        nativeQuery = com.couchbase.lite.Expression.property(
          item.property
        ).lessThanOrEqualTo(this.serializeExpression(item.value));
        break;
      case 'like':
        nativeQuery = com.couchbase.lite.Function.lower(
          com.couchbase.lite.Expression.property(item.property)
        ).like(this.serializeExpression(item.value));
        break;
      case 'modulo':
        nativeQuery = com.couchbase.lite.Expression.property(
          item.property
        ).modulo(this.serializeExpression(item.value));
        break;
      case 'multiply':
        nativeQuery = com.couchbase.lite.Expression.property(
          item.property
        ).multiply(this.serializeExpression(item.value));
        break;

      case 'notEqualTo':
        nativeQuery = com.couchbase.lite.Expression.property(
          item.property
        ).notEqualTo(this.serializeExpression(item.value));
        break;

      case 'notNullOrMissing':
        nativeQuery = com.couchbase.lite.Expression.property(
          item.property
        ).notNullOrMissing();
        break;
      case 'regex':
        nativeQuery = com.couchbase.lite.Function.lower(item.property)
          .regex(this.serializeExpression(item.value));
        break;
    }
    return nativeQuery;
  }

  query(query: Query = {select: [QueryMeta.ALL, QueryMeta.ID]}) {
    const items = [];
    let select = [];
    let isAll = false;
    if (!query.select || query.select.length === 0) {
      isAll = true;
      select.push(com.couchbase.lite.SelectResult.all());
      select.push(
        com.couchbase.lite.SelectResult.expression(com.couchbase.lite.Meta.id)
      );
    } else {
      query.select.forEach(item => {
        if (item === QueryMeta.ID) {
          select.push(
            com.couchbase.lite.SelectResult.expression(
              com.couchbase.lite.Meta.id
            )
          );
        } else if (item === QueryMeta.ALL) {
          isAll = true;
          select.push(com.couchbase.lite.SelectResult.all());
        } else {
          select.push(com.couchbase.lite.SelectResult.property(item));
        }
      });
    }
    let queryBuilder: any = com.couchbase.lite.QueryBuilder.select(select);
    if (query.from) {
      const db = new CouchBase(query.from);
      queryBuilder = queryBuilder.from(
        com.couchbase.lite.DataSource.database(db.android)
      );
    } else {
      queryBuilder = queryBuilder.from(
        com.couchbase.lite.DataSource.database(this.android)
      );
    }

    let nativeQuery = null;
    if (query.where) {
      for (let item of query.where) {
        if (item.logical === QueryLogicalOperator.AND) {
          if (!nativeQuery) break;
          nativeQuery = nativeQuery.and(this.setComparison(item));
        } else if (item.logical === QueryLogicalOperator.OR) {
          if (!nativeQuery) break;
          nativeQuery = nativeQuery.or(this.setComparison(item));
        } else {
          nativeQuery = this.setComparison(item);
        }
      }
      if (nativeQuery) {
        queryBuilder = queryBuilder.where(nativeQuery);
      }
    }
    if (query.groupBy) {
      const groupBy = [];
      for (let prop of query.groupBy) {
        groupBy.push(com.couchbase.lite.Expression.property(prop));
      }
      if (groupBy.length > 0) {
        queryBuilder = queryBuilder.groupBy(groupBy);
      }
    }
    if (query.order) {
      const orderBy = [];
      for (let item of query.order) {
        if (item.direction === 'desc') {
          orderBy.push(
            com.couchbase.lite.Ordering.property(item.property).descending()
          );
        } else {
          orderBy.push(
            com.couchbase.lite.Ordering.property(item.property).ascending()
          );
        }
      }
      if (orderBy.length > 0) {
        queryBuilder = queryBuilder.orderBy(orderBy);
      }
    }

    if (query.limit && typeof query.limit === 'number') {
      if (query.offset && typeof query.offset === 'number') {
        queryBuilder = queryBuilder.limit(
          com.couchbase.lite.Expression.intValue(query.limit),
          com.couchbase.lite.Expression.intValue(query.offset)
        );
      } else {
        queryBuilder = queryBuilder.limit(
          com.couchbase.lite.Expression.intValue(query.limit)
        );
      }
    }

    const result = queryBuilder.execute().allResults();
    const size = result.size();
    for (let i = 0; i < size; i++) {
      const item = result.get(i);
      const keys = item.getKeys();
      const keysSize = keys.size();
      const obj = {};
      for (let keyId = 0; keyId < keysSize; keyId++) {
        const key = keys.get(keyId);
        const nativeItem = item.getValue(key);
        if (
          isAll &&
          nativeItem &&
          nativeItem.getClass &&
          nativeItem.getClass() &&
          nativeItem.getClass().getName() === 'com.couchbase.lite.Dictionary'
        ) {
          const cblKeys = nativeItem.getKeys();
          const cblKeysSize = cblKeys.size();
          for (let cblKeysId = 0; cblKeysId < cblKeysSize; cblKeysId++) {
            const cblKey = cblKeys.get(cblKeysId);
            obj[cblKey] = this.deserialize(nativeItem.getValue(cblKey));
          }
        } else {
          obj[key] = this.deserialize(nativeItem);
        }
      }
      items.push(obj);
    }
    return items;
  }

  createReplication(remoteUrl: string, direction: 'push' | 'pull' | 'both') {

    const uri = new com.couchbase.lite.URLEndpoint(new java.net.URI(remoteUrl));
    const repConfig = new com.couchbase.lite.ReplicatorConfiguration(
      this.android,
      uri
    );
    if (direction === 'pull') {
      com.github.triniwiz.couchbase.TNSReplicatorConfiguration.setReplicatorType('pull', repConfig);
    } else if (direction === 'push') {
      com.github.triniwiz.couchbase.TNSReplicatorConfiguration.setReplicatorType('push', repConfig);
    } else {
      com.github.triniwiz.couchbase.TNSReplicatorConfiguration.setReplicatorType('push_and_pull', repConfig);
    }

    const replicator = new com.couchbase.lite.Replicator(repConfig);
    return new Replicator(replicator);

  }

  createPullReplication(
    remoteUrl: string
  ) {
    return this.createReplication(remoteUrl, 'pull');
  }

  createPushReplication(
    remoteUrl: string
  ) {
    return this.createReplication(remoteUrl, 'push');
  }

  private _listenerMap = {};

  addDatabaseChangeListener(callback: any) {
    const listener = (com as any).couchbase.lite.DatabaseChangeListener.extend({
      changed(changes: any) {
        console.log(changes)
        if (callback && typeof callback === 'function') {
          const ids = [];
          const documentIds = changes.getDocumentIDs();
          const size = documentIds.size();
          for (let i = 0; i < size; i++) {
            const item = documentIds.get(i);
            ids.push(item);
          }
          callback(ids);
        }
      }
    });
    const token = this.android.addChangeListener(new listener());
    if (!isNullOrUndefined(token)) {
      this._listenerMap[callback] = token;
    }
  }

  removeDatabaseChangeListener(callback: any) {
    const token = this._listenerMap[callback];
    if (!isNullOrUndefined(token)) {
      this.android.removeChangeListener(token);
      delete this._listenerMap[callback];
    }
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
    return (
      this.replicator.getStatus().getActivityLevel() ===
      com.couchbase.lite.AbstractReplicator.ActivityLevel.BUSY
    );
  }

  setContinuous(isContinuous: boolean) {
    const newConfig = new com.couchbase.lite.ReplicatorConfiguration(this.replicator.getConfig());
    newConfig.setContinuous(isContinuous);
    this.replicator = new com.couchbase.lite.Replicator(newConfig);
  }

  setSessionId(sessionId: string) {
    const newConfig = new com.couchbase.lite.ReplicatorConfiguration(this.replicator.getConfig());
    newConfig.setAuthenticator(
      new com.couchbase.lite.SessionAuthenticator(sessionId)
    );
    this.replicator = new com.couchbase.lite.Replicator(newConfig);
  }

  setSessionIdAndCookieName(sessionId: string, cookieName: string) {
    const newConfig = new com.couchbase.lite.ReplicatorConfiguration(this.replicator.getConfig());
    newConfig.setAuthenticator(
      new com.couchbase.lite.SessionAuthenticator(sessionId, cookieName)
    );
    this.replicator = new com.couchbase.lite.Replicator(newConfig);
  }

  setUserNameAndPassword(username: string, password: string) {
    const newConfig = new com.couchbase.lite.ReplicatorConfiguration(this.replicator.getConfig());
    newConfig.setAuthenticator(
      new com.couchbase.lite.BasicAuthenticator(username, password)
    );
    this.replicator = new com.couchbase.lite.Replicator(newConfig);
  }

  setChannels(channels: string[]) {
    const newConfig = new com.couchbase.lite.ReplicatorConfiguration(this.replicator.getConfig());
    newConfig.setChannels(java.util.Arrays.asList(channels));
    this.replicator = new com.couchbase.lite.Replicator(newConfig);
  };
}

export class Blob extends BlobBase {
  constructor(blob: any) {
    super(blob);
  }

  get android() {
    return this.blob;
  }

  get content(): any {
    if (!this.android) return null;
    return this.android.getContent();
  }

  get contentStream(): any {
    if (!this.android) return null;
    this.android.length();
    return this.android.getContentStream();
  }

  get contentType(): string {
    if (!this.android) return null;
    return this.android.getContentType();
  }

  get length(): number {
    if (!this.android) return 0;
    return this.android.length();
  }

  get digest(): string {
    if (!this.android) return null;
    return this.android.digest();
  }

  get properties(): Map<string, any> {
    const map = new Map();
    if (!this.android) return map;
    const nativeMap = this.android.getProperties();
    const mapKeys = nativeMap.keySet();
    const mapKeysArray = mapKeys.toArray();
    const length = mapKeysArray.length;
    for (let i = 0; i < length; i++) {
      const key = mapKeysArray[i];
      const value = nativeMap.get(key);
      map.set(key, value);
    }
    return map;
  }

}
