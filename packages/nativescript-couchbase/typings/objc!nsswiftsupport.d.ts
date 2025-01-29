declare class NSCCouchbase extends NSObject {
	static alloc(): NSCCouchbase; // inherited from NSObject

	static asyncNext(queue: NSObject & OS_dispatch_queue, result: CBLQueryResultSet, callback: (p1: any) => void): void;

	static createQueue(name: string, concurrent: boolean): NSObject & OS_dispatch_queue;

	static new(): NSCCouchbase; // inherited from NSObject
}
