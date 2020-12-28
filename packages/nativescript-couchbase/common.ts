export abstract class Common {
  abstract ios: any;
  
  abstract android: any;

  abstract close();

  abstract createDocument(data: Object, documentId?: string, concurrencyMode?: ConcurrencyMode);

  abstract getDocument(documentId: string);

  abstract updateDocument(documentId: string, data: any, concurrencyMode?: ConcurrencyMode);

  abstract deleteDocument(documentId: string, concurrencyMode?: ConcurrencyMode);

  abstract destroyDatabase();

  abstract query(query: Query): any[];

  abstract createPullReplication(remoteUrl: string);

  abstract createPushReplication(remoteUrl: string);

  abstract createReplication(remoteUrl: string, direction: 'push' | 'pull' | 'both');

  abstract addDatabaseChangeListener(callback: (ids?: string[]) => void);

  abstract removeDatabaseChangeListener(callback: (ids?: string[]) => void): void;

  abstract addDocumentChangeListener(documentId: string, callback: (id: string) => void): void;

  abstract removeDocumentChangeListener(callback: (id: string) => void): void;

  abstract inBatch(batch: () => void);

  abstract setBlob(id: string, name: string, blob: any, mimeType: string, concurrencyMode?: ConcurrencyMode);

  abstract getBlob(id: string, name: string);
}

export abstract class ReplicatorBase {
  replicator: any;

  constructor(replicator: any) {
    this.replicator = replicator;
  }

  abstract start();

  abstract stop();

  abstract isRunning();

  abstract setContinuous(isContinuous: boolean);

  abstract setUserNameAndPassword(username: string, password: string);

  abstract setChannels(channels: string[]);

  abstract setSessionIdAndCookieName(sessionId: string, cookieName: string);

  abstract setSessionId(sessionId: string);
}

export enum QueryMeta {
  ALL = 'COUCHBASE_ALL',
  ID = 'COUCHBASE_ID'
}

export type QueryComparisonOperator =
  | 'modulo'
  | 'is'
  | 'between'
  | 'isNot'
  | 'collate'
  | 'in'
  | 'add'
  | 'isNullOrMissing'
  | 'greaterThan'
  | 'divide'
  | 'notEqualTo'
  | 'greaterThanOrEqualTo'
  | 'like'
  | 'subtract'
  | 'lessThanOrEqualTo'
  | 'lessThan'
  | 'notNullOrMissing'
  | 'regex'
  | 'equalTo'
  | 'multiply';

export enum QueryLogicalOperator {
  AND = 'and',
  OR = 'or'
}

export enum QueryArrayOperator {
  CONTAINS = 'contains'
}

export interface Query {
  select: any[];
  // join?: any[];
  where?: QueryWhereItem[];
  groupBy?: any;
  // having?: any;
  order?: QueryOrderItem[];
  limit?: any;
  offset?: any;
  from?: string;
}

export interface QueryWhereItem {
  logical?: QueryLogicalOperator;
  property: string;
  comparison: QueryComparisonOperator;
  value: any;
}

export interface QueryOrderItem {
  property: string;
  direction: 'asc' | 'desc';
}


export abstract class BlobBase {
  abstract readonly ios: any;

  abstract readonly android: any;

  abstract readonly content: any;

  abstract readonly contentStream: any;

  abstract readonly contentType: string;

  abstract readonly length: number;

  abstract readonly digest: string;

  abstract readonly properties: Map<string, any>;

}

export enum ConcurrencyMode {
  'LastWriteWins' = 0,
  'FailOnConflict' = 1
}
