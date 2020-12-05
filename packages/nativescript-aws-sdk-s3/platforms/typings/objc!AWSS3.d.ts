
declare class AWSS3 extends AWSService {

	static S3ForKey(key: string): AWSS3;

	static alloc(): AWSS3; // inherited from NSObject

	static defaultS3(): AWSS3;

	static new(): AWSS3; // inherited from NSObject

	static registerS3WithConfigurationForKey(configuration: AWSServiceConfiguration, key: string): void;

	static removeS3ForKey(key: string): void;

	readonly configuration: AWSServiceConfiguration;

	abortMultipartUpload(request: AWSS3AbortMultipartUploadRequest): AWSTask<AWSS3AbortMultipartUploadOutput>;

	abortMultipartUploadCompletionHandler(request: AWSS3AbortMultipartUploadRequest, completionHandler: (p1: AWSS3AbortMultipartUploadOutput, p2: NSError) => void): void;

	completeMultipartUpload(request: AWSS3CompleteMultipartUploadRequest): AWSTask<AWSS3CompleteMultipartUploadOutput>;

	completeMultipartUploadCompletionHandler(request: AWSS3CompleteMultipartUploadRequest, completionHandler: (p1: AWSS3CompleteMultipartUploadOutput, p2: NSError) => void): void;

	createBucket(request: AWSS3CreateBucketRequest): AWSTask<AWSS3CreateBucketOutput>;

	createBucketCompletionHandler(request: AWSS3CreateBucketRequest, completionHandler: (p1: AWSS3CreateBucketOutput, p2: NSError) => void): void;

	createMultipartUpload(request: AWSS3CreateMultipartUploadRequest): AWSTask<AWSS3CreateMultipartUploadOutput>;

	createMultipartUploadCompletionHandler(request: AWSS3CreateMultipartUploadRequest, completionHandler: (p1: AWSS3CreateMultipartUploadOutput, p2: NSError) => void): void;

	deleteBucket(request: AWSS3DeleteBucketRequest): AWSTask<any>;

	deleteBucketAnalyticsConfiguration(request: AWSS3DeleteBucketAnalyticsConfigurationRequest): AWSTask<any>;

	deleteBucketAnalyticsConfigurationCompletionHandler(request: AWSS3DeleteBucketAnalyticsConfigurationRequest, completionHandler: (p1: NSError) => void): void;

	deleteBucketCompletionHandler(request: AWSS3DeleteBucketRequest, completionHandler: (p1: NSError) => void): void;

	deleteBucketCors(request: AWSS3DeleteBucketCorsRequest): AWSTask<any>;

	deleteBucketCorsCompletionHandler(request: AWSS3DeleteBucketCorsRequest, completionHandler: (p1: NSError) => void): void;

	deleteBucketEncryption(request: AWSS3DeleteBucketEncryptionRequest): AWSTask<any>;

	deleteBucketEncryptionCompletionHandler(request: AWSS3DeleteBucketEncryptionRequest, completionHandler: (p1: NSError) => void): void;

	deleteBucketInventoryConfiguration(request: AWSS3DeleteBucketInventoryConfigurationRequest): AWSTask<any>;

	deleteBucketInventoryConfigurationCompletionHandler(request: AWSS3DeleteBucketInventoryConfigurationRequest, completionHandler: (p1: NSError) => void): void;

	deleteBucketLifecycle(request: AWSS3DeleteBucketLifecycleRequest): AWSTask<any>;

	deleteBucketLifecycleCompletionHandler(request: AWSS3DeleteBucketLifecycleRequest, completionHandler: (p1: NSError) => void): void;

	deleteBucketMetricsConfiguration(request: AWSS3DeleteBucketMetricsConfigurationRequest): AWSTask<any>;

	deleteBucketMetricsConfigurationCompletionHandler(request: AWSS3DeleteBucketMetricsConfigurationRequest, completionHandler: (p1: NSError) => void): void;

	deleteBucketPolicy(request: AWSS3DeleteBucketPolicyRequest): AWSTask<any>;

	deleteBucketPolicyCompletionHandler(request: AWSS3DeleteBucketPolicyRequest, completionHandler: (p1: NSError) => void): void;

	deleteBucketReplication(request: AWSS3DeleteBucketReplicationRequest): AWSTask<any>;

	deleteBucketReplicationCompletionHandler(request: AWSS3DeleteBucketReplicationRequest, completionHandler: (p1: NSError) => void): void;

	deleteBucketTagging(request: AWSS3DeleteBucketTaggingRequest): AWSTask<any>;

	deleteBucketTaggingCompletionHandler(request: AWSS3DeleteBucketTaggingRequest, completionHandler: (p1: NSError) => void): void;

	deleteBucketWebsite(request: AWSS3DeleteBucketWebsiteRequest): AWSTask<any>;

	deleteBucketWebsiteCompletionHandler(request: AWSS3DeleteBucketWebsiteRequest, completionHandler: (p1: NSError) => void): void;

	deleteObject(request: AWSS3DeleteObjectRequest): AWSTask<AWSS3DeleteObjectOutput>;

	deleteObjectCompletionHandler(request: AWSS3DeleteObjectRequest, completionHandler: (p1: AWSS3DeleteObjectOutput, p2: NSError) => void): void;

	deleteObjectTagging(request: AWSS3DeleteObjectTaggingRequest): AWSTask<AWSS3DeleteObjectTaggingOutput>;

	deleteObjectTaggingCompletionHandler(request: AWSS3DeleteObjectTaggingRequest, completionHandler: (p1: AWSS3DeleteObjectTaggingOutput, p2: NSError) => void): void;

	deleteObjects(request: AWSS3DeleteObjectsRequest): AWSTask<AWSS3DeleteObjectsOutput>;

	deleteObjectsCompletionHandler(request: AWSS3DeleteObjectsRequest, completionHandler: (p1: AWSS3DeleteObjectsOutput, p2: NSError) => void): void;

	deletePublicAccessBlock(request: AWSS3DeletePublicAccessBlockRequest): AWSTask<any>;

	deletePublicAccessBlockCompletionHandler(request: AWSS3DeletePublicAccessBlockRequest, completionHandler: (p1: NSError) => void): void;

	getBucketAccelerateConfiguration(request: AWSS3GetBucketAccelerateConfigurationRequest): AWSTask<AWSS3GetBucketAccelerateConfigurationOutput>;

	getBucketAccelerateConfigurationCompletionHandler(request: AWSS3GetBucketAccelerateConfigurationRequest, completionHandler: (p1: AWSS3GetBucketAccelerateConfigurationOutput, p2: NSError) => void): void;

	getBucketAcl(request: AWSS3GetBucketAclRequest): AWSTask<AWSS3GetBucketAclOutput>;

	getBucketAclCompletionHandler(request: AWSS3GetBucketAclRequest, completionHandler: (p1: AWSS3GetBucketAclOutput, p2: NSError) => void): void;

	getBucketAnalyticsConfiguration(request: AWSS3GetBucketAnalyticsConfigurationRequest): AWSTask<AWSS3GetBucketAnalyticsConfigurationOutput>;

	getBucketAnalyticsConfigurationCompletionHandler(request: AWSS3GetBucketAnalyticsConfigurationRequest, completionHandler: (p1: AWSS3GetBucketAnalyticsConfigurationOutput, p2: NSError) => void): void;

	getBucketCors(request: AWSS3GetBucketCorsRequest): AWSTask<AWSS3GetBucketCorsOutput>;

	getBucketCorsCompletionHandler(request: AWSS3GetBucketCorsRequest, completionHandler: (p1: AWSS3GetBucketCorsOutput, p2: NSError) => void): void;

	getBucketEncryption(request: AWSS3GetBucketEncryptionRequest): AWSTask<AWSS3GetBucketEncryptionOutput>;

	getBucketEncryptionCompletionHandler(request: AWSS3GetBucketEncryptionRequest, completionHandler: (p1: AWSS3GetBucketEncryptionOutput, p2: NSError) => void): void;

	getBucketInventoryConfiguration(request: AWSS3GetBucketInventoryConfigurationRequest): AWSTask<AWSS3GetBucketInventoryConfigurationOutput>;

	getBucketInventoryConfigurationCompletionHandler(request: AWSS3GetBucketInventoryConfigurationRequest, completionHandler: (p1: AWSS3GetBucketInventoryConfigurationOutput, p2: NSError) => void): void;

	getBucketLifecycle(request: AWSS3GetBucketLifecycleRequest): AWSTask<AWSS3GetBucketLifecycleOutput>;

	getBucketLifecycleCompletionHandler(request: AWSS3GetBucketLifecycleRequest, completionHandler: (p1: AWSS3GetBucketLifecycleOutput, p2: NSError) => void): void;

	getBucketLifecycleConfiguration(request: AWSS3GetBucketLifecycleConfigurationRequest): AWSTask<AWSS3GetBucketLifecycleConfigurationOutput>;

	getBucketLifecycleConfigurationCompletionHandler(request: AWSS3GetBucketLifecycleConfigurationRequest, completionHandler: (p1: AWSS3GetBucketLifecycleConfigurationOutput, p2: NSError) => void): void;

	getBucketLocation(request: AWSS3GetBucketLocationRequest): AWSTask<AWSS3GetBucketLocationOutput>;

	getBucketLocationCompletionHandler(request: AWSS3GetBucketLocationRequest, completionHandler: (p1: AWSS3GetBucketLocationOutput, p2: NSError) => void): void;

	getBucketLogging(request: AWSS3GetBucketLoggingRequest): AWSTask<AWSS3GetBucketLoggingOutput>;

	getBucketLoggingCompletionHandler(request: AWSS3GetBucketLoggingRequest, completionHandler: (p1: AWSS3GetBucketLoggingOutput, p2: NSError) => void): void;

	getBucketMetricsConfiguration(request: AWSS3GetBucketMetricsConfigurationRequest): AWSTask<AWSS3GetBucketMetricsConfigurationOutput>;

	getBucketMetricsConfigurationCompletionHandler(request: AWSS3GetBucketMetricsConfigurationRequest, completionHandler: (p1: AWSS3GetBucketMetricsConfigurationOutput, p2: NSError) => void): void;

	getBucketNotification(request: AWSS3GetBucketNotificationConfigurationRequest): AWSTask<AWSS3NotificationConfigurationDeprecated>;

	getBucketNotificationCompletionHandler(request: AWSS3GetBucketNotificationConfigurationRequest, completionHandler: (p1: AWSS3NotificationConfigurationDeprecated, p2: NSError) => void): void;

	getBucketNotificationConfiguration(request: AWSS3GetBucketNotificationConfigurationRequest): AWSTask<AWSS3NotificationConfiguration>;

	getBucketNotificationConfigurationCompletionHandler(request: AWSS3GetBucketNotificationConfigurationRequest, completionHandler: (p1: AWSS3NotificationConfiguration, p2: NSError) => void): void;

	getBucketPolicy(request: AWSS3GetBucketPolicyRequest): AWSTask<AWSS3GetBucketPolicyOutput>;

	getBucketPolicyCompletionHandler(request: AWSS3GetBucketPolicyRequest, completionHandler: (p1: AWSS3GetBucketPolicyOutput, p2: NSError) => void): void;

	getBucketPolicyStatus(request: AWSS3GetBucketPolicyStatusRequest): AWSTask<AWSS3GetBucketPolicyStatusOutput>;

	getBucketPolicyStatusCompletionHandler(request: AWSS3GetBucketPolicyStatusRequest, completionHandler: (p1: AWSS3GetBucketPolicyStatusOutput, p2: NSError) => void): void;

	getBucketReplication(request: AWSS3GetBucketReplicationRequest): AWSTask<AWSS3GetBucketReplicationOutput>;

	getBucketReplicationCompletionHandler(request: AWSS3GetBucketReplicationRequest, completionHandler: (p1: AWSS3GetBucketReplicationOutput, p2: NSError) => void): void;

	getBucketRequestPayment(request: AWSS3GetBucketRequestPaymentRequest): AWSTask<AWSS3GetBucketRequestPaymentOutput>;

	getBucketRequestPaymentCompletionHandler(request: AWSS3GetBucketRequestPaymentRequest, completionHandler: (p1: AWSS3GetBucketRequestPaymentOutput, p2: NSError) => void): void;

	getBucketTagging(request: AWSS3GetBucketTaggingRequest): AWSTask<AWSS3GetBucketTaggingOutput>;

	getBucketTaggingCompletionHandler(request: AWSS3GetBucketTaggingRequest, completionHandler: (p1: AWSS3GetBucketTaggingOutput, p2: NSError) => void): void;

	getBucketVersioning(request: AWSS3GetBucketVersioningRequest): AWSTask<AWSS3GetBucketVersioningOutput>;

	getBucketVersioningCompletionHandler(request: AWSS3GetBucketVersioningRequest, completionHandler: (p1: AWSS3GetBucketVersioningOutput, p2: NSError) => void): void;

	getBucketWebsite(request: AWSS3GetBucketWebsiteRequest): AWSTask<AWSS3GetBucketWebsiteOutput>;

	getBucketWebsiteCompletionHandler(request: AWSS3GetBucketWebsiteRequest, completionHandler: (p1: AWSS3GetBucketWebsiteOutput, p2: NSError) => void): void;

	getObject(request: AWSS3GetObjectRequest): AWSTask<AWSS3GetObjectOutput>;

	getObjectAcl(request: AWSS3GetObjectAclRequest): AWSTask<AWSS3GetObjectAclOutput>;

	getObjectAclCompletionHandler(request: AWSS3GetObjectAclRequest, completionHandler: (p1: AWSS3GetObjectAclOutput, p2: NSError) => void): void;

	getObjectCompletionHandler(request: AWSS3GetObjectRequest, completionHandler: (p1: AWSS3GetObjectOutput, p2: NSError) => void): void;

	getObjectLegalHold(request: AWSS3GetObjectLegalHoldRequest): AWSTask<AWSS3GetObjectLegalHoldOutput>;

	getObjectLegalHoldCompletionHandler(request: AWSS3GetObjectLegalHoldRequest, completionHandler: (p1: AWSS3GetObjectLegalHoldOutput, p2: NSError) => void): void;

	getObjectLockConfiguration(request: AWSS3GetObjectLockConfigurationRequest): AWSTask<AWSS3GetObjectLockConfigurationOutput>;

	getObjectLockConfigurationCompletionHandler(request: AWSS3GetObjectLockConfigurationRequest, completionHandler: (p1: AWSS3GetObjectLockConfigurationOutput, p2: NSError) => void): void;

	getObjectRetention(request: AWSS3GetObjectRetentionRequest): AWSTask<AWSS3GetObjectRetentionOutput>;

	getObjectRetentionCompletionHandler(request: AWSS3GetObjectRetentionRequest, completionHandler: (p1: AWSS3GetObjectRetentionOutput, p2: NSError) => void): void;

	getObjectTagging(request: AWSS3GetObjectTaggingRequest): AWSTask<AWSS3GetObjectTaggingOutput>;

	getObjectTaggingCompletionHandler(request: AWSS3GetObjectTaggingRequest, completionHandler: (p1: AWSS3GetObjectTaggingOutput, p2: NSError) => void): void;

	getObjectTorrent(request: AWSS3GetObjectTorrentRequest): AWSTask<AWSS3GetObjectTorrentOutput>;

	getObjectTorrentCompletionHandler(request: AWSS3GetObjectTorrentRequest, completionHandler: (p1: AWSS3GetObjectTorrentOutput, p2: NSError) => void): void;

	getPublicAccessBlock(request: AWSS3GetPublicAccessBlockRequest): AWSTask<AWSS3GetPublicAccessBlockOutput>;

	getPublicAccessBlockCompletionHandler(request: AWSS3GetPublicAccessBlockRequest, completionHandler: (p1: AWSS3GetPublicAccessBlockOutput, p2: NSError) => void): void;

	headBucket(request: AWSS3HeadBucketRequest): AWSTask<any>;

	headBucketCompletionHandler(request: AWSS3HeadBucketRequest, completionHandler: (p1: NSError) => void): void;

	headObject(request: AWSS3HeadObjectRequest): AWSTask<AWSS3HeadObjectOutput>;

	headObjectCompletionHandler(request: AWSS3HeadObjectRequest, completionHandler: (p1: AWSS3HeadObjectOutput, p2: NSError) => void): void;

	listBucketAnalyticsConfigurations(request: AWSS3ListBucketAnalyticsConfigurationsRequest): AWSTask<AWSS3ListBucketAnalyticsConfigurationsOutput>;

	listBucketAnalyticsConfigurationsCompletionHandler(request: AWSS3ListBucketAnalyticsConfigurationsRequest, completionHandler: (p1: AWSS3ListBucketAnalyticsConfigurationsOutput, p2: NSError) => void): void;

	listBucketInventoryConfigurations(request: AWSS3ListBucketInventoryConfigurationsRequest): AWSTask<AWSS3ListBucketInventoryConfigurationsOutput>;

	listBucketInventoryConfigurationsCompletionHandler(request: AWSS3ListBucketInventoryConfigurationsRequest, completionHandler: (p1: AWSS3ListBucketInventoryConfigurationsOutput, p2: NSError) => void): void;

	listBucketMetricsConfigurations(request: AWSS3ListBucketMetricsConfigurationsRequest): AWSTask<AWSS3ListBucketMetricsConfigurationsOutput>;

	listBucketMetricsConfigurationsCompletionHandler(request: AWSS3ListBucketMetricsConfigurationsRequest, completionHandler: (p1: AWSS3ListBucketMetricsConfigurationsOutput, p2: NSError) => void): void;

	listBuckets(request: AWSRequest): AWSTask<AWSS3ListBucketsOutput>;

	listBucketsCompletionHandler(request: AWSRequest, completionHandler: (p1: AWSS3ListBucketsOutput, p2: NSError) => void): void;

	listMultipartUploads(request: AWSS3ListMultipartUploadsRequest): AWSTask<AWSS3ListMultipartUploadsOutput>;

	listMultipartUploadsCompletionHandler(request: AWSS3ListMultipartUploadsRequest, completionHandler: (p1: AWSS3ListMultipartUploadsOutput, p2: NSError) => void): void;

	listObjectVersions(request: AWSS3ListObjectVersionsRequest): AWSTask<AWSS3ListObjectVersionsOutput>;

	listObjectVersionsCompletionHandler(request: AWSS3ListObjectVersionsRequest, completionHandler: (p1: AWSS3ListObjectVersionsOutput, p2: NSError) => void): void;

	listObjects(request: AWSS3ListObjectsRequest): AWSTask<AWSS3ListObjectsOutput>;

	listObjectsCompletionHandler(request: AWSS3ListObjectsRequest, completionHandler: (p1: AWSS3ListObjectsOutput, p2: NSError) => void): void;

	listObjectsV2(request: AWSS3ListObjectsV2Request): AWSTask<AWSS3ListObjectsV2Output>;

	listObjectsV2CompletionHandler(request: AWSS3ListObjectsV2Request, completionHandler: (p1: AWSS3ListObjectsV2Output, p2: NSError) => void): void;

	listParts(request: AWSS3ListPartsRequest): AWSTask<AWSS3ListPartsOutput>;

	listPartsCompletionHandler(request: AWSS3ListPartsRequest, completionHandler: (p1: AWSS3ListPartsOutput, p2: NSError) => void): void;

	putBucketAccelerateConfiguration(request: AWSS3PutBucketAccelerateConfigurationRequest): AWSTask<any>;

	putBucketAccelerateConfigurationCompletionHandler(request: AWSS3PutBucketAccelerateConfigurationRequest, completionHandler: (p1: NSError) => void): void;

	putBucketAcl(request: AWSS3PutBucketAclRequest): AWSTask<any>;

	putBucketAclCompletionHandler(request: AWSS3PutBucketAclRequest, completionHandler: (p1: NSError) => void): void;

	putBucketAnalyticsConfiguration(request: AWSS3PutBucketAnalyticsConfigurationRequest): AWSTask<any>;

	putBucketAnalyticsConfigurationCompletionHandler(request: AWSS3PutBucketAnalyticsConfigurationRequest, completionHandler: (p1: NSError) => void): void;

	putBucketCors(request: AWSS3PutBucketCorsRequest): AWSTask<any>;

	putBucketCorsCompletionHandler(request: AWSS3PutBucketCorsRequest, completionHandler: (p1: NSError) => void): void;

	putBucketEncryption(request: AWSS3PutBucketEncryptionRequest): AWSTask<any>;

	putBucketEncryptionCompletionHandler(request: AWSS3PutBucketEncryptionRequest, completionHandler: (p1: NSError) => void): void;

	putBucketInventoryConfiguration(request: AWSS3PutBucketInventoryConfigurationRequest): AWSTask<any>;

	putBucketInventoryConfigurationCompletionHandler(request: AWSS3PutBucketInventoryConfigurationRequest, completionHandler: (p1: NSError) => void): void;

	putBucketLifecycle(request: AWSS3PutBucketLifecycleRequest): AWSTask<any>;

	putBucketLifecycleCompletionHandler(request: AWSS3PutBucketLifecycleRequest, completionHandler: (p1: NSError) => void): void;

	putBucketLifecycleConfiguration(request: AWSS3PutBucketLifecycleConfigurationRequest): AWSTask<any>;

	putBucketLifecycleConfigurationCompletionHandler(request: AWSS3PutBucketLifecycleConfigurationRequest, completionHandler: (p1: NSError) => void): void;

	putBucketLogging(request: AWSS3PutBucketLoggingRequest): AWSTask<any>;

	putBucketLoggingCompletionHandler(request: AWSS3PutBucketLoggingRequest, completionHandler: (p1: NSError) => void): void;

	putBucketMetricsConfiguration(request: AWSS3PutBucketMetricsConfigurationRequest): AWSTask<any>;

	putBucketMetricsConfigurationCompletionHandler(request: AWSS3PutBucketMetricsConfigurationRequest, completionHandler: (p1: NSError) => void): void;

	putBucketNotification(request: AWSS3PutBucketNotificationRequest): AWSTask<any>;

	putBucketNotificationCompletionHandler(request: AWSS3PutBucketNotificationRequest, completionHandler: (p1: NSError) => void): void;

	putBucketNotificationConfiguration(request: AWSS3PutBucketNotificationConfigurationRequest): AWSTask<any>;

	putBucketNotificationConfigurationCompletionHandler(request: AWSS3PutBucketNotificationConfigurationRequest, completionHandler: (p1: NSError) => void): void;

	putBucketPolicy(request: AWSS3PutBucketPolicyRequest): AWSTask<any>;

	putBucketPolicyCompletionHandler(request: AWSS3PutBucketPolicyRequest, completionHandler: (p1: NSError) => void): void;

	putBucketReplication(request: AWSS3PutBucketReplicationRequest): AWSTask<any>;

	putBucketReplicationCompletionHandler(request: AWSS3PutBucketReplicationRequest, completionHandler: (p1: NSError) => void): void;

	putBucketRequestPayment(request: AWSS3PutBucketRequestPaymentRequest): AWSTask<any>;

	putBucketRequestPaymentCompletionHandler(request: AWSS3PutBucketRequestPaymentRequest, completionHandler: (p1: NSError) => void): void;

	putBucketTagging(request: AWSS3PutBucketTaggingRequest): AWSTask<any>;

	putBucketTaggingCompletionHandler(request: AWSS3PutBucketTaggingRequest, completionHandler: (p1: NSError) => void): void;

	putBucketVersioning(request: AWSS3PutBucketVersioningRequest): AWSTask<any>;

	putBucketVersioningCompletionHandler(request: AWSS3PutBucketVersioningRequest, completionHandler: (p1: NSError) => void): void;

	putBucketWebsite(request: AWSS3PutBucketWebsiteRequest): AWSTask<any>;

	putBucketWebsiteCompletionHandler(request: AWSS3PutBucketWebsiteRequest, completionHandler: (p1: NSError) => void): void;

	putObject(request: AWSS3PutObjectRequest): AWSTask<AWSS3PutObjectOutput>;

	putObjectAcl(request: AWSS3PutObjectAclRequest): AWSTask<AWSS3PutObjectAclOutput>;

	putObjectAclCompletionHandler(request: AWSS3PutObjectAclRequest, completionHandler: (p1: AWSS3PutObjectAclOutput, p2: NSError) => void): void;

	putObjectCompletionHandler(request: AWSS3PutObjectRequest, completionHandler: (p1: AWSS3PutObjectOutput, p2: NSError) => void): void;

	putObjectLegalHold(request: AWSS3PutObjectLegalHoldRequest): AWSTask<AWSS3PutObjectLegalHoldOutput>;

	putObjectLegalHoldCompletionHandler(request: AWSS3PutObjectLegalHoldRequest, completionHandler: (p1: AWSS3PutObjectLegalHoldOutput, p2: NSError) => void): void;

	putObjectLockConfiguration(request: AWSS3PutObjectLockConfigurationRequest): AWSTask<AWSS3PutObjectLockConfigurationOutput>;

	putObjectLockConfigurationCompletionHandler(request: AWSS3PutObjectLockConfigurationRequest, completionHandler: (p1: AWSS3PutObjectLockConfigurationOutput, p2: NSError) => void): void;

	putObjectRetention(request: AWSS3PutObjectRetentionRequest): AWSTask<AWSS3PutObjectRetentionOutput>;

	putObjectRetentionCompletionHandler(request: AWSS3PutObjectRetentionRequest, completionHandler: (p1: AWSS3PutObjectRetentionOutput, p2: NSError) => void): void;

	putObjectTagging(request: AWSS3PutObjectTaggingRequest): AWSTask<AWSS3PutObjectTaggingOutput>;

	putObjectTaggingCompletionHandler(request: AWSS3PutObjectTaggingRequest, completionHandler: (p1: AWSS3PutObjectTaggingOutput, p2: NSError) => void): void;

	putPublicAccessBlock(request: AWSS3PutPublicAccessBlockRequest): AWSTask<any>;

	putPublicAccessBlockCompletionHandler(request: AWSS3PutPublicAccessBlockRequest, completionHandler: (p1: NSError) => void): void;

	replicateObject(request: AWSS3ReplicateObjectRequest): AWSTask<AWSS3ReplicateObjectOutput>;

	replicateObjectCompletionHandler(request: AWSS3ReplicateObjectRequest, completionHandler: (p1: AWSS3ReplicateObjectOutput, p2: NSError) => void): void;

	restoreObject(request: AWSS3RestoreObjectRequest): AWSTask<AWSS3RestoreObjectOutput>;

	restoreObjectCompletionHandler(request: AWSS3RestoreObjectRequest, completionHandler: (p1: AWSS3RestoreObjectOutput, p2: NSError) => void): void;

	selectObjectContent(request: AWSS3SelectObjectContentRequest): AWSTask<AWSS3SelectObjectContentOutput>;

	selectObjectContentCompletionHandler(request: AWSS3SelectObjectContentRequest, completionHandler: (p1: AWSS3SelectObjectContentOutput, p2: NSError) => void): void;

	uploadPart(request: AWSS3UploadPartRequest): AWSTask<AWSS3UploadPartOutput>;

	uploadPartCompletionHandler(request: AWSS3UploadPartRequest, completionHandler: (p1: AWSS3UploadPartOutput, p2: NSError) => void): void;

	uploadPartCopy(request: AWSS3UploadPartCopyRequest): AWSTask<AWSS3UploadPartCopyOutput>;

	uploadPartCopyCompletionHandler(request: AWSS3UploadPartCopyRequest, completionHandler: (p1: AWSS3UploadPartCopyOutput, p2: NSError) => void): void;
}

declare class AWSS3AbortIncompleteMultipartUpload extends AWSModel {

	static alloc(): AWSS3AbortIncompleteMultipartUpload; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3AbortIncompleteMultipartUpload; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3AbortIncompleteMultipartUpload; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3AbortIncompleteMultipartUpload; // inherited from AWSMTLModel

	static new(): AWSS3AbortIncompleteMultipartUpload; // inherited from NSObject

	daysAfterInitiation: number;
}

declare class AWSS3AbortMultipartUploadOutput extends AWSModel {

	static alloc(): AWSS3AbortMultipartUploadOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3AbortMultipartUploadOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3AbortMultipartUploadOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3AbortMultipartUploadOutput; // inherited from AWSMTLModel

	static new(): AWSS3AbortMultipartUploadOutput; // inherited from NSObject

	requestCharged: AWSS3RequestCharged;
}

declare class AWSS3AbortMultipartUploadRequest extends AWSRequest {

	static alloc(): AWSS3AbortMultipartUploadRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3AbortMultipartUploadRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3AbortMultipartUploadRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3AbortMultipartUploadRequest; // inherited from AWSMTLModel

	static new(): AWSS3AbortMultipartUploadRequest; // inherited from NSObject

	bucket: string;

	key: string;

	requestPayer: AWSS3RequestPayer;

	uploadId: string;
}

declare class AWSS3AccelerateConfiguration extends AWSModel {

	static alloc(): AWSS3AccelerateConfiguration; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3AccelerateConfiguration; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3AccelerateConfiguration; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3AccelerateConfiguration; // inherited from AWSMTLModel

	static new(): AWSS3AccelerateConfiguration; // inherited from NSObject

	status: AWSS3BucketAccelerateStatus;
}

declare class AWSS3AccessControlPolicy extends AWSModel {

	static alloc(): AWSS3AccessControlPolicy; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3AccessControlPolicy; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3AccessControlPolicy; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3AccessControlPolicy; // inherited from AWSMTLModel

	static new(): AWSS3AccessControlPolicy; // inherited from NSObject

	grants: NSArray<AWSS3Grant>;

	owner: AWSS3Owner;
}

declare class AWSS3AccessControlTranslation extends AWSModel {

	static alloc(): AWSS3AccessControlTranslation; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3AccessControlTranslation; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3AccessControlTranslation; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3AccessControlTranslation; // inherited from AWSMTLModel

	static new(): AWSS3AccessControlTranslation; // inherited from NSObject

	owner: AWSS3OwnerOverride;
}

declare class AWSS3AnalyticsAndOperator extends AWSModel {

	static alloc(): AWSS3AnalyticsAndOperator; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3AnalyticsAndOperator; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3AnalyticsAndOperator; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3AnalyticsAndOperator; // inherited from AWSMTLModel

	static new(): AWSS3AnalyticsAndOperator; // inherited from NSObject

	prefix: string;

	tags: NSArray<AWSS3Tag>;
}

declare class AWSS3AnalyticsConfiguration extends AWSModel {

	static alloc(): AWSS3AnalyticsConfiguration; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3AnalyticsConfiguration; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3AnalyticsConfiguration; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3AnalyticsConfiguration; // inherited from AWSMTLModel

	static new(): AWSS3AnalyticsConfiguration; // inherited from NSObject

	filter: AWSS3AnalyticsFilter;

	identifier: string;

	storageClassAnalysis: AWSS3StorageClassAnalysis;
}

declare class AWSS3AnalyticsExportDestination extends AWSModel {

	static alloc(): AWSS3AnalyticsExportDestination; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3AnalyticsExportDestination; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3AnalyticsExportDestination; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3AnalyticsExportDestination; // inherited from AWSMTLModel

	static new(): AWSS3AnalyticsExportDestination; // inherited from NSObject

	s3BucketDestination: AWSS3AnalyticsS3BucketDestination;
}

declare class AWSS3AnalyticsFilter extends AWSModel {

	static alloc(): AWSS3AnalyticsFilter; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3AnalyticsFilter; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3AnalyticsFilter; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3AnalyticsFilter; // inherited from AWSMTLModel

	static new(): AWSS3AnalyticsFilter; // inherited from NSObject

	AND: AWSS3AnalyticsAndOperator;

	prefix: string;

	tag: AWSS3Tag;
}

declare class AWSS3AnalyticsS3BucketDestination extends AWSModel {

	static alloc(): AWSS3AnalyticsS3BucketDestination; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3AnalyticsS3BucketDestination; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3AnalyticsS3BucketDestination; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3AnalyticsS3BucketDestination; // inherited from AWSMTLModel

	static new(): AWSS3AnalyticsS3BucketDestination; // inherited from NSObject

	bucket: string;

	bucketAccountId: string;

	format: AWSS3AnalyticsS3ExportFileFormat;

	prefix: string;
}

declare const enum AWSS3AnalyticsS3ExportFileFormat {

	Unknown = 0,

	Csv = 1
}

declare class AWSS3Bucket extends AWSModel {

	static alloc(): AWSS3Bucket; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3Bucket; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3Bucket; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3Bucket; // inherited from AWSMTLModel

	static new(): AWSS3Bucket; // inherited from NSObject

	creationDate: Date;

	name: string;
}

declare const enum AWSS3BucketAccelerateStatus {

	Unknown = 0,

	Enabled = 1,

	Suspended = 2
}

declare const enum AWSS3BucketCannedACL {

	Unknown = 0,

	Private = 1,

	PublicRead = 2,

	PublicReadWrite = 3,

	AuthenticatedRead = 4
}

declare class AWSS3BucketLifecycleConfiguration extends AWSModel {

	static alloc(): AWSS3BucketLifecycleConfiguration; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3BucketLifecycleConfiguration; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3BucketLifecycleConfiguration; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3BucketLifecycleConfiguration; // inherited from AWSMTLModel

	static new(): AWSS3BucketLifecycleConfiguration; // inherited from NSObject

	rules: NSArray<AWSS3LifecycleRule>;
}

declare const enum AWSS3BucketLocationConstraint {

	Unknown = 0,

	Blank = 1,

	EU = 2,

	EUWest1 = 3,

	USWest1 = 4,

	USWest2 = 5,

	EUWest2 = 6,

	EUWest3 = 7,

	USEast2 = 8,

	APSouth1 = 9,

	APSoutheast1 = 10,

	APSoutheast2 = 11,

	APNortheast1 = 12,

	APNortheast2 = 13,

	SAEast1 = 14,

	CNNorth1 = 15,

	CNNorthwest1 = 16,

	USGovWest1 = 17,

	EUCentral1 = 18,

	CACentral1 = 19,

	USGovEast1 = 20,

	EUNorth1 = 21,

	APEast1 = 22,

	MESouth1 = 23,

	AFSouth1 = 24,

	EUSouth1 = 25
}

declare class AWSS3BucketLoggingStatus extends AWSModel {

	static alloc(): AWSS3BucketLoggingStatus; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3BucketLoggingStatus; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3BucketLoggingStatus; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3BucketLoggingStatus; // inherited from AWSMTLModel

	static new(): AWSS3BucketLoggingStatus; // inherited from NSObject

	loggingEnabled: AWSS3LoggingEnabled;
}

declare const enum AWSS3BucketLogsPermission {

	Unknown = 0,

	FullControl = 1,

	Read = 2,

	Write = 3
}

declare const enum AWSS3BucketVersioningStatus {

	Unknown = 0,

	Enabled = 1,

	Suspended = 2
}

declare class AWSS3CORSConfiguration extends AWSModel {

	static alloc(): AWSS3CORSConfiguration; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3CORSConfiguration; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3CORSConfiguration; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3CORSConfiguration; // inherited from AWSMTLModel

	static new(): AWSS3CORSConfiguration; // inherited from NSObject

	CORSRules: NSArray<AWSS3CORSRule>;
}

declare class AWSS3CORSRule extends AWSModel {

	static alloc(): AWSS3CORSRule; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3CORSRule; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3CORSRule; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3CORSRule; // inherited from AWSMTLModel

	static new(): AWSS3CORSRule; // inherited from NSObject

	allowedHeaders: NSArray<string>;

	allowedMethods: NSArray<string>;

	allowedOrigins: NSArray<string>;

	exposeHeaders: NSArray<string>;

	maxAgeSeconds: number;
}

declare class AWSS3CSVInput extends AWSModel {

	static alloc(): AWSS3CSVInput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3CSVInput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3CSVInput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3CSVInput; // inherited from AWSMTLModel

	static new(): AWSS3CSVInput; // inherited from NSObject

	allowQuotedRecordDelimiter: number;

	comments: string;

	fieldDelimiter: string;

	fileHeaderInfo: AWSS3FileHeaderInfo;

	quoteCharacter: string;

	quoteEscapeCharacter: string;

	recordDelimiter: string;
}

declare class AWSS3CSVOutput extends AWSModel {

	static alloc(): AWSS3CSVOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3CSVOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3CSVOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3CSVOutput; // inherited from AWSMTLModel

	static new(): AWSS3CSVOutput; // inherited from NSObject

	fieldDelimiter: string;

	quoteCharacter: string;

	quoteEscapeCharacter: string;

	quoteFields: AWSS3QuoteFields;

	recordDelimiter: string;
}

declare class AWSS3CloudFunctionConfiguration extends AWSModel {

	static alloc(): AWSS3CloudFunctionConfiguration; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3CloudFunctionConfiguration; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3CloudFunctionConfiguration; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3CloudFunctionConfiguration; // inherited from AWSMTLModel

	static new(): AWSS3CloudFunctionConfiguration; // inherited from NSObject

	cloudFunction: string;

	event: AWSS3Event;

	events: NSArray<string>;

	identifier: string;

	invocationRole: string;
}

declare class AWSS3CommonPrefix extends AWSModel {

	static alloc(): AWSS3CommonPrefix; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3CommonPrefix; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3CommonPrefix; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3CommonPrefix; // inherited from AWSMTLModel

	static new(): AWSS3CommonPrefix; // inherited from NSObject

	prefix: string;
}

declare class AWSS3CompleteMultipartUploadOutput extends AWSModel {

	static alloc(): AWSS3CompleteMultipartUploadOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3CompleteMultipartUploadOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3CompleteMultipartUploadOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3CompleteMultipartUploadOutput; // inherited from AWSMTLModel

	static new(): AWSS3CompleteMultipartUploadOutput; // inherited from NSObject

	ETag: string;

	SSEKMSKeyId: string;

	bucket: string;

	expiration: string;

	key: string;

	location: string;

	requestCharged: AWSS3RequestCharged;

	serverSideEncryption: AWSS3ServerSideEncryption;

	versionId: string;
}

declare class AWSS3CompleteMultipartUploadRequest extends AWSRequest {

	static alloc(): AWSS3CompleteMultipartUploadRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3CompleteMultipartUploadRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3CompleteMultipartUploadRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3CompleteMultipartUploadRequest; // inherited from AWSMTLModel

	static new(): AWSS3CompleteMultipartUploadRequest; // inherited from NSObject

	bucket: string;

	key: string;

	multipartUpload: AWSS3CompletedMultipartUpload;

	requestPayer: AWSS3RequestPayer;

	uploadId: string;
}

declare class AWSS3CompletedMultipartUpload extends AWSModel {

	static alloc(): AWSS3CompletedMultipartUpload; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3CompletedMultipartUpload; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3CompletedMultipartUpload; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3CompletedMultipartUpload; // inherited from AWSMTLModel

	static new(): AWSS3CompletedMultipartUpload; // inherited from NSObject

	parts: NSArray<AWSS3CompletedPart>;
}

declare class AWSS3CompletedPart extends AWSModel {

	static alloc(): AWSS3CompletedPart; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3CompletedPart; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3CompletedPart; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3CompletedPart; // inherited from AWSMTLModel

	static new(): AWSS3CompletedPart; // inherited from NSObject

	ETag: string;

	partNumber: number;
}

declare const enum AWSS3CompressionType {

	Unknown = 0,

	None = 1,

	Gzip = 2,

	Bzip2 = 3
}

declare class AWSS3Condition extends AWSModel {

	static alloc(): AWSS3Condition; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3Condition; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3Condition; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3Condition; // inherited from AWSMTLModel

	static new(): AWSS3Condition; // inherited from NSObject

	httpErrorCodeReturnedEquals: string;

	keyPrefixEquals: string;
}

declare class AWSS3ContinuationEvent extends AWSModel {

	static alloc(): AWSS3ContinuationEvent; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ContinuationEvent; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ContinuationEvent; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ContinuationEvent; // inherited from AWSMTLModel

	static new(): AWSS3ContinuationEvent; // inherited from NSObject
}

declare class AWSS3CreateBucketConfiguration extends AWSModel {

	static alloc(): AWSS3CreateBucketConfiguration; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3CreateBucketConfiguration; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3CreateBucketConfiguration; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3CreateBucketConfiguration; // inherited from AWSMTLModel

	static new(): AWSS3CreateBucketConfiguration; // inherited from NSObject

	locationConstraint: AWSS3BucketLocationConstraint;
}

declare class AWSS3CreateBucketOutput extends AWSModel {

	static alloc(): AWSS3CreateBucketOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3CreateBucketOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3CreateBucketOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3CreateBucketOutput; // inherited from AWSMTLModel

	static new(): AWSS3CreateBucketOutput; // inherited from NSObject

	location: string;
}

declare class AWSS3CreateBucketRequest extends AWSRequest {

	static alloc(): AWSS3CreateBucketRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3CreateBucketRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3CreateBucketRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3CreateBucketRequest; // inherited from AWSMTLModel

	static new(): AWSS3CreateBucketRequest; // inherited from NSObject

	ACL: AWSS3BucketCannedACL;

	bucket: string;

	createBucketConfiguration: AWSS3CreateBucketConfiguration;

	grantFullControl: string;

	grantRead: string;

	grantReadACP: string;

	grantWrite: string;

	grantWriteACP: string;

	objectLockEnabledForBucket: number;
}

declare class AWSS3CreateMultipartUploadOutput extends AWSModel {

	static alloc(): AWSS3CreateMultipartUploadOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3CreateMultipartUploadOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3CreateMultipartUploadOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3CreateMultipartUploadOutput; // inherited from AWSMTLModel

	static new(): AWSS3CreateMultipartUploadOutput; // inherited from NSObject

	SSECustomerAlgorithm: string;

	SSECustomerKeyMD5: string;

	SSEKMSKeyId: string;

	abortDate: Date;

	abortRuleId: string;

	bucket: string;

	key: string;

	requestCharged: AWSS3RequestCharged;

	serverSideEncryption: AWSS3ServerSideEncryption;

	uploadId: string;
}

declare class AWSS3CreateMultipartUploadRequest extends AWSRequest {

	static alloc(): AWSS3CreateMultipartUploadRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3CreateMultipartUploadRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3CreateMultipartUploadRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3CreateMultipartUploadRequest; // inherited from AWSMTLModel

	static new(): AWSS3CreateMultipartUploadRequest; // inherited from NSObject

	ACL: AWSS3ObjectCannedACL;

	SSECustomerAlgorithm: string;

	SSECustomerKey: string;

	SSECustomerKeyMD5: string;

	SSEKMSKeyId: string;

	bucket: string;

	cacheControl: string;

	contentDisposition: string;

	contentEncoding: string;

	contentLanguage: string;

	contentType: string;

	expires: Date;

	grantFullControl: string;

	grantRead: string;

	grantReadACP: string;

	grantWriteACP: string;

	key: string;

	metadata: NSDictionary<string, string>;

	objectLockLegalHoldStatus: AWSS3ObjectLockLegalHoldStatus;

	objectLockMode: AWSS3ObjectLockMode;

	objectLockRetainUntilDate: Date;

	requestPayer: AWSS3RequestPayer;

	serverSideEncryption: AWSS3ServerSideEncryption;

	storageClass: AWSS3StorageClass;

	tagging: string;

	websiteRedirectLocation: string;
}

declare class AWSS3DefaultRetention extends AWSModel {

	static alloc(): AWSS3DefaultRetention; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3DefaultRetention; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3DefaultRetention; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3DefaultRetention; // inherited from AWSMTLModel

	static new(): AWSS3DefaultRetention; // inherited from NSObject

	days: number;

	mode: AWSS3ObjectLockRetentionMode;

	years: number;
}

declare class AWSS3DeleteBucketAnalyticsConfigurationRequest extends AWSRequest {

	static alloc(): AWSS3DeleteBucketAnalyticsConfigurationRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteBucketAnalyticsConfigurationRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteBucketAnalyticsConfigurationRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3DeleteBucketAnalyticsConfigurationRequest; // inherited from AWSMTLModel

	static new(): AWSS3DeleteBucketAnalyticsConfigurationRequest; // inherited from NSObject

	bucket: string;

	identifier: string;
}

declare class AWSS3DeleteBucketCorsRequest extends AWSRequest {

	static alloc(): AWSS3DeleteBucketCorsRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteBucketCorsRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteBucketCorsRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3DeleteBucketCorsRequest; // inherited from AWSMTLModel

	static new(): AWSS3DeleteBucketCorsRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3DeleteBucketEncryptionRequest extends AWSRequest {

	static alloc(): AWSS3DeleteBucketEncryptionRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteBucketEncryptionRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteBucketEncryptionRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3DeleteBucketEncryptionRequest; // inherited from AWSMTLModel

	static new(): AWSS3DeleteBucketEncryptionRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3DeleteBucketInventoryConfigurationRequest extends AWSRequest {

	static alloc(): AWSS3DeleteBucketInventoryConfigurationRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteBucketInventoryConfigurationRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteBucketInventoryConfigurationRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3DeleteBucketInventoryConfigurationRequest; // inherited from AWSMTLModel

	static new(): AWSS3DeleteBucketInventoryConfigurationRequest; // inherited from NSObject

	bucket: string;

	identifier: string;
}

declare class AWSS3DeleteBucketLifecycleRequest extends AWSRequest {

	static alloc(): AWSS3DeleteBucketLifecycleRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteBucketLifecycleRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteBucketLifecycleRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3DeleteBucketLifecycleRequest; // inherited from AWSMTLModel

	static new(): AWSS3DeleteBucketLifecycleRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3DeleteBucketMetricsConfigurationRequest extends AWSRequest {

	static alloc(): AWSS3DeleteBucketMetricsConfigurationRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteBucketMetricsConfigurationRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteBucketMetricsConfigurationRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3DeleteBucketMetricsConfigurationRequest; // inherited from AWSMTLModel

	static new(): AWSS3DeleteBucketMetricsConfigurationRequest; // inherited from NSObject

	bucket: string;

	identifier: string;
}

declare class AWSS3DeleteBucketPolicyRequest extends AWSRequest {

	static alloc(): AWSS3DeleteBucketPolicyRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteBucketPolicyRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteBucketPolicyRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3DeleteBucketPolicyRequest; // inherited from AWSMTLModel

	static new(): AWSS3DeleteBucketPolicyRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3DeleteBucketReplicationRequest extends AWSRequest {

	static alloc(): AWSS3DeleteBucketReplicationRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteBucketReplicationRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteBucketReplicationRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3DeleteBucketReplicationRequest; // inherited from AWSMTLModel

	static new(): AWSS3DeleteBucketReplicationRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3DeleteBucketRequest extends AWSRequest {

	static alloc(): AWSS3DeleteBucketRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteBucketRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteBucketRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3DeleteBucketRequest; // inherited from AWSMTLModel

	static new(): AWSS3DeleteBucketRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3DeleteBucketTaggingRequest extends AWSRequest {

	static alloc(): AWSS3DeleteBucketTaggingRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteBucketTaggingRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteBucketTaggingRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3DeleteBucketTaggingRequest; // inherited from AWSMTLModel

	static new(): AWSS3DeleteBucketTaggingRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3DeleteBucketWebsiteRequest extends AWSRequest {

	static alloc(): AWSS3DeleteBucketWebsiteRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteBucketWebsiteRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteBucketWebsiteRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3DeleteBucketWebsiteRequest; // inherited from AWSMTLModel

	static new(): AWSS3DeleteBucketWebsiteRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3DeleteMarkerEntry extends AWSModel {

	static alloc(): AWSS3DeleteMarkerEntry; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteMarkerEntry; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteMarkerEntry; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3DeleteMarkerEntry; // inherited from AWSMTLModel

	static new(): AWSS3DeleteMarkerEntry; // inherited from NSObject

	isLatest: number;

	key: string;

	lastModified: Date;

	owner: AWSS3Owner;

	versionId: string;
}

declare class AWSS3DeleteMarkerReplication extends AWSModel {

	static alloc(): AWSS3DeleteMarkerReplication; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteMarkerReplication; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteMarkerReplication; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3DeleteMarkerReplication; // inherited from AWSMTLModel

	static new(): AWSS3DeleteMarkerReplication; // inherited from NSObject

	status: AWSS3DeleteMarkerReplicationStatus;
}

declare const enum AWSS3DeleteMarkerReplicationStatus {

	Unknown = 0,

	Enabled = 1,

	Disabled = 2
}

declare class AWSS3DeleteObjectOutput extends AWSModel {

	static alloc(): AWSS3DeleteObjectOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteObjectOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteObjectOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3DeleteObjectOutput; // inherited from AWSMTLModel

	static new(): AWSS3DeleteObjectOutput; // inherited from NSObject

	deleteMarker: number;

	requestCharged: AWSS3RequestCharged;

	versionId: string;
}

declare class AWSS3DeleteObjectRequest extends AWSRequest {

	static alloc(): AWSS3DeleteObjectRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteObjectRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteObjectRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3DeleteObjectRequest; // inherited from AWSMTLModel

	static new(): AWSS3DeleteObjectRequest; // inherited from NSObject

	MFA: string;

	bucket: string;

	bypassGovernanceRetention: number;

	key: string;

	requestPayer: AWSS3RequestPayer;

	versionId: string;
}

declare class AWSS3DeleteObjectTaggingOutput extends AWSModel {

	static alloc(): AWSS3DeleteObjectTaggingOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteObjectTaggingOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteObjectTaggingOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3DeleteObjectTaggingOutput; // inherited from AWSMTLModel

	static new(): AWSS3DeleteObjectTaggingOutput; // inherited from NSObject

	versionId: string;
}

declare class AWSS3DeleteObjectTaggingRequest extends AWSRequest {

	static alloc(): AWSS3DeleteObjectTaggingRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteObjectTaggingRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteObjectTaggingRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3DeleteObjectTaggingRequest; // inherited from AWSMTLModel

	static new(): AWSS3DeleteObjectTaggingRequest; // inherited from NSObject

	bucket: string;

	key: string;

	versionId: string;
}

declare class AWSS3DeleteObjectsOutput extends AWSModel {

	static alloc(): AWSS3DeleteObjectsOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteObjectsOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteObjectsOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3DeleteObjectsOutput; // inherited from AWSMTLModel

	static new(): AWSS3DeleteObjectsOutput; // inherited from NSObject

	deleted: NSArray<AWSS3DeletedObject>;

	errors: NSArray<AWSS3Error>;

	requestCharged: AWSS3RequestCharged;
}

declare class AWSS3DeleteObjectsRequest extends AWSRequest {

	static alloc(): AWSS3DeleteObjectsRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteObjectsRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3DeleteObjectsRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3DeleteObjectsRequest; // inherited from AWSMTLModel

	static new(): AWSS3DeleteObjectsRequest; // inherited from NSObject

	MFA: string;

	bucket: string;

	bypassGovernanceRetention: number;

	remove: AWSS3Remove;

	requestPayer: AWSS3RequestPayer;
}

declare class AWSS3DeletePublicAccessBlockRequest extends AWSRequest {

	static alloc(): AWSS3DeletePublicAccessBlockRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3DeletePublicAccessBlockRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3DeletePublicAccessBlockRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3DeletePublicAccessBlockRequest; // inherited from AWSMTLModel

	static new(): AWSS3DeletePublicAccessBlockRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3DeletedObject extends AWSModel {

	static alloc(): AWSS3DeletedObject; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3DeletedObject; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3DeletedObject; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3DeletedObject; // inherited from AWSMTLModel

	static new(): AWSS3DeletedObject; // inherited from NSObject

	deleteMarker: number;

	deleteMarkerVersionId: string;

	key: string;

	versionId: string;
}

declare class AWSS3Destination extends AWSModel {

	static alloc(): AWSS3Destination; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3Destination; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3Destination; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3Destination; // inherited from AWSMTLModel

	static new(): AWSS3Destination; // inherited from NSObject

	accessControlTranslation: AWSS3AccessControlTranslation;

	account: string;

	bucket: string;

	encryptionConfiguration: AWSS3EncryptionConfiguration;

	storageClass: AWSS3StorageClass;
}

declare const enum AWSS3EncodingType {

	Unknown = 0,

	URL = 1
}

declare class AWSS3Encryption extends AWSModel {

	static alloc(): AWSS3Encryption; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3Encryption; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3Encryption; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3Encryption; // inherited from AWSMTLModel

	static new(): AWSS3Encryption; // inherited from NSObject

	KMSContext: string;

	KMSKeyId: string;

	encryptionType: AWSS3ServerSideEncryption;
}

declare class AWSS3EncryptionConfiguration extends AWSModel {

	static alloc(): AWSS3EncryptionConfiguration; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3EncryptionConfiguration; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3EncryptionConfiguration; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3EncryptionConfiguration; // inherited from AWSMTLModel

	static new(): AWSS3EncryptionConfiguration; // inherited from NSObject

	replicaKmsKeyID: string;
}

declare class AWSS3EndEvent extends AWSModel {

	static alloc(): AWSS3EndEvent; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3EndEvent; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3EndEvent; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3EndEvent; // inherited from AWSMTLModel

	static new(): AWSS3EndEvent; // inherited from NSObject
}

declare class AWSS3Error extends AWSModel {

	static alloc(): AWSS3Error; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3Error; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3Error; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3Error; // inherited from AWSMTLModel

	static new(): AWSS3Error; // inherited from NSObject

	code: string;

	key: string;

	message: string;

	versionId: string;
}

declare class AWSS3ErrorDocument extends AWSModel {

	static alloc(): AWSS3ErrorDocument; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ErrorDocument; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ErrorDocument; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ErrorDocument; // inherited from AWSMTLModel

	static new(): AWSS3ErrorDocument; // inherited from NSObject

	key: string;
}

declare var AWSS3ErrorDomain: string;

declare const enum AWSS3ErrorType {

	Unknown = 0,

	BucketAlreadyExists = 1,

	BucketAlreadyOwnedByYou = 2,

	NoSuchBucket = 3,

	NoSuchKey = 4,

	NoSuchUpload = 5,

	ObjectAlreadyInActiveTier = 6,

	ObjectNotInActiveTier = 7
}

declare const enum AWSS3Event {

	Unknown = 0,

	S3ReducedRedundancyLostObject = 1,

	S3ObjectCreated = 2,

	S3ObjectCreatedPut = 3,

	S3ObjectCreatedPost = 4,

	S3ObjectCreatedCopy = 5,

	S3ObjectCreatedCompleteMultipartUpload = 6,

	S3ObjectRemoved = 7,

	S3ObjectRemovedDelete = 8,

	S3ObjectRemovedDeleteMarkerCreated = 9,

	S3ObjectRestorePost = 10,

	S3ObjectRestoreCompleted = 11
}

declare const enum AWSS3ExpirationStatus {

	Unknown = 0,

	Enabled = 1,

	Disabled = 2
}

declare const enum AWSS3ExpressionType {

	Unknown = 0,

	Sql = 1
}

declare const enum AWSS3FileHeaderInfo {

	Unknown = 0,

	Use = 1,

	Ignore = 2,

	None = 3
}

declare class AWSS3FilterRule extends AWSModel {

	static alloc(): AWSS3FilterRule; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3FilterRule; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3FilterRule; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3FilterRule; // inherited from AWSMTLModel

	static new(): AWSS3FilterRule; // inherited from NSObject

	name: AWSS3FilterRuleName;

	value: string;
}

declare const enum AWSS3FilterRuleName {

	Unknown = 0,

	Prefix = 1,

	Suffix = 2
}

declare class AWSS3GetBucketAccelerateConfigurationOutput extends AWSModel {

	static alloc(): AWSS3GetBucketAccelerateConfigurationOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketAccelerateConfigurationOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketAccelerateConfigurationOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketAccelerateConfigurationOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketAccelerateConfigurationOutput; // inherited from NSObject

	status: AWSS3BucketAccelerateStatus;
}

declare class AWSS3GetBucketAccelerateConfigurationRequest extends AWSRequest {

	static alloc(): AWSS3GetBucketAccelerateConfigurationRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketAccelerateConfigurationRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketAccelerateConfigurationRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketAccelerateConfigurationRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketAccelerateConfigurationRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3GetBucketAclOutput extends AWSModel {

	static alloc(): AWSS3GetBucketAclOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketAclOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketAclOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketAclOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketAclOutput; // inherited from NSObject

	grants: NSArray<AWSS3Grant>;

	owner: AWSS3Owner;
}

declare class AWSS3GetBucketAclRequest extends AWSRequest {

	static alloc(): AWSS3GetBucketAclRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketAclRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketAclRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketAclRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketAclRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3GetBucketAnalyticsConfigurationOutput extends AWSModel {

	static alloc(): AWSS3GetBucketAnalyticsConfigurationOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketAnalyticsConfigurationOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketAnalyticsConfigurationOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketAnalyticsConfigurationOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketAnalyticsConfigurationOutput; // inherited from NSObject

	analyticsConfiguration: AWSS3AnalyticsConfiguration;
}

declare class AWSS3GetBucketAnalyticsConfigurationRequest extends AWSRequest {

	static alloc(): AWSS3GetBucketAnalyticsConfigurationRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketAnalyticsConfigurationRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketAnalyticsConfigurationRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketAnalyticsConfigurationRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketAnalyticsConfigurationRequest; // inherited from NSObject

	bucket: string;

	identifier: string;
}

declare class AWSS3GetBucketCorsOutput extends AWSModel {

	static alloc(): AWSS3GetBucketCorsOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketCorsOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketCorsOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketCorsOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketCorsOutput; // inherited from NSObject

	CORSRules: NSArray<AWSS3CORSRule>;
}

declare class AWSS3GetBucketCorsRequest extends AWSRequest {

	static alloc(): AWSS3GetBucketCorsRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketCorsRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketCorsRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketCorsRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketCorsRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3GetBucketEncryptionOutput extends AWSModel {

	static alloc(): AWSS3GetBucketEncryptionOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketEncryptionOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketEncryptionOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketEncryptionOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketEncryptionOutput; // inherited from NSObject

	serverSideEncryptionConfiguration: AWSS3ServerSideEncryptionConfiguration;
}

declare class AWSS3GetBucketEncryptionRequest extends AWSRequest {

	static alloc(): AWSS3GetBucketEncryptionRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketEncryptionRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketEncryptionRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketEncryptionRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketEncryptionRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3GetBucketInventoryConfigurationOutput extends AWSModel {

	static alloc(): AWSS3GetBucketInventoryConfigurationOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketInventoryConfigurationOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketInventoryConfigurationOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketInventoryConfigurationOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketInventoryConfigurationOutput; // inherited from NSObject

	inventoryConfiguration: AWSS3InventoryConfiguration;
}

declare class AWSS3GetBucketInventoryConfigurationRequest extends AWSRequest {

	static alloc(): AWSS3GetBucketInventoryConfigurationRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketInventoryConfigurationRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketInventoryConfigurationRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketInventoryConfigurationRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketInventoryConfigurationRequest; // inherited from NSObject

	bucket: string;

	identifier: string;
}

declare class AWSS3GetBucketLifecycleConfigurationOutput extends AWSModel {

	static alloc(): AWSS3GetBucketLifecycleConfigurationOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketLifecycleConfigurationOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketLifecycleConfigurationOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketLifecycleConfigurationOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketLifecycleConfigurationOutput; // inherited from NSObject

	rules: NSArray<AWSS3LifecycleRule>;
}

declare class AWSS3GetBucketLifecycleConfigurationRequest extends AWSRequest {

	static alloc(): AWSS3GetBucketLifecycleConfigurationRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketLifecycleConfigurationRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketLifecycleConfigurationRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketLifecycleConfigurationRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketLifecycleConfigurationRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3GetBucketLifecycleOutput extends AWSModel {

	static alloc(): AWSS3GetBucketLifecycleOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketLifecycleOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketLifecycleOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketLifecycleOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketLifecycleOutput; // inherited from NSObject

	rules: NSArray<AWSS3Rule>;
}

declare class AWSS3GetBucketLifecycleRequest extends AWSRequest {

	static alloc(): AWSS3GetBucketLifecycleRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketLifecycleRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketLifecycleRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketLifecycleRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketLifecycleRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3GetBucketLocationOutput extends AWSModel {

	static alloc(): AWSS3GetBucketLocationOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketLocationOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketLocationOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketLocationOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketLocationOutput; // inherited from NSObject

	locationConstraint: AWSS3BucketLocationConstraint;
}

declare class AWSS3GetBucketLocationRequest extends AWSRequest {

	static alloc(): AWSS3GetBucketLocationRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketLocationRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketLocationRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketLocationRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketLocationRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3GetBucketLoggingOutput extends AWSModel {

	static alloc(): AWSS3GetBucketLoggingOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketLoggingOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketLoggingOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketLoggingOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketLoggingOutput; // inherited from NSObject

	loggingEnabled: AWSS3LoggingEnabled;
}

declare class AWSS3GetBucketLoggingRequest extends AWSRequest {

	static alloc(): AWSS3GetBucketLoggingRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketLoggingRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketLoggingRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketLoggingRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketLoggingRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3GetBucketMetricsConfigurationOutput extends AWSModel {

	static alloc(): AWSS3GetBucketMetricsConfigurationOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketMetricsConfigurationOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketMetricsConfigurationOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketMetricsConfigurationOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketMetricsConfigurationOutput; // inherited from NSObject

	metricsConfiguration: AWSS3MetricsConfiguration;
}

declare class AWSS3GetBucketMetricsConfigurationRequest extends AWSRequest {

	static alloc(): AWSS3GetBucketMetricsConfigurationRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketMetricsConfigurationRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketMetricsConfigurationRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketMetricsConfigurationRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketMetricsConfigurationRequest; // inherited from NSObject

	bucket: string;

	identifier: string;
}

declare class AWSS3GetBucketNotificationConfigurationRequest extends AWSRequest {

	static alloc(): AWSS3GetBucketNotificationConfigurationRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketNotificationConfigurationRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketNotificationConfigurationRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketNotificationConfigurationRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketNotificationConfigurationRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3GetBucketPolicyOutput extends AWSModel {

	static alloc(): AWSS3GetBucketPolicyOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketPolicyOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketPolicyOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketPolicyOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketPolicyOutput; // inherited from NSObject

	policy: string;
}

declare class AWSS3GetBucketPolicyRequest extends AWSRequest {

	static alloc(): AWSS3GetBucketPolicyRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketPolicyRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketPolicyRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketPolicyRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketPolicyRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3GetBucketPolicyStatusOutput extends AWSModel {

	static alloc(): AWSS3GetBucketPolicyStatusOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketPolicyStatusOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketPolicyStatusOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketPolicyStatusOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketPolicyStatusOutput; // inherited from NSObject

	policyStatus: AWSS3PolicyStatus;
}

declare class AWSS3GetBucketPolicyStatusRequest extends AWSRequest {

	static alloc(): AWSS3GetBucketPolicyStatusRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketPolicyStatusRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketPolicyStatusRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketPolicyStatusRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketPolicyStatusRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3GetBucketReplicationOutput extends AWSModel {

	static alloc(): AWSS3GetBucketReplicationOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketReplicationOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketReplicationOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketReplicationOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketReplicationOutput; // inherited from NSObject

	replicationConfiguration: AWSS3ReplicationConfiguration;
}

declare class AWSS3GetBucketReplicationRequest extends AWSRequest {

	static alloc(): AWSS3GetBucketReplicationRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketReplicationRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketReplicationRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketReplicationRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketReplicationRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3GetBucketRequestPaymentOutput extends AWSModel {

	static alloc(): AWSS3GetBucketRequestPaymentOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketRequestPaymentOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketRequestPaymentOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketRequestPaymentOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketRequestPaymentOutput; // inherited from NSObject

	payer: AWSS3Payer;
}

declare class AWSS3GetBucketRequestPaymentRequest extends AWSRequest {

	static alloc(): AWSS3GetBucketRequestPaymentRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketRequestPaymentRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketRequestPaymentRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketRequestPaymentRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketRequestPaymentRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3GetBucketTaggingOutput extends AWSModel {

	static alloc(): AWSS3GetBucketTaggingOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketTaggingOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketTaggingOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketTaggingOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketTaggingOutput; // inherited from NSObject

	tagSet: NSArray<AWSS3Tag>;
}

declare class AWSS3GetBucketTaggingRequest extends AWSRequest {

	static alloc(): AWSS3GetBucketTaggingRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketTaggingRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketTaggingRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketTaggingRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketTaggingRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3GetBucketVersioningOutput extends AWSModel {

	static alloc(): AWSS3GetBucketVersioningOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketVersioningOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketVersioningOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketVersioningOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketVersioningOutput; // inherited from NSObject

	MFADelete: AWSS3MFADeleteStatus;

	status: AWSS3BucketVersioningStatus;
}

declare class AWSS3GetBucketVersioningRequest extends AWSRequest {

	static alloc(): AWSS3GetBucketVersioningRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketVersioningRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketVersioningRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketVersioningRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketVersioningRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3GetBucketWebsiteOutput extends AWSModel {

	static alloc(): AWSS3GetBucketWebsiteOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketWebsiteOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketWebsiteOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketWebsiteOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketWebsiteOutput; // inherited from NSObject

	errorDocument: AWSS3ErrorDocument;

	indexDocument: AWSS3IndexDocument;

	redirectAllRequestsTo: AWSS3RedirectAllRequestsTo;

	routingRules: NSArray<AWSS3RoutingRule>;
}

declare class AWSS3GetBucketWebsiteRequest extends AWSRequest {

	static alloc(): AWSS3GetBucketWebsiteRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketWebsiteRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetBucketWebsiteRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetBucketWebsiteRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetBucketWebsiteRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3GetObjectAclOutput extends AWSModel {

	static alloc(): AWSS3GetObjectAclOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectAclOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectAclOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetObjectAclOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetObjectAclOutput; // inherited from NSObject

	grants: NSArray<AWSS3Grant>;

	owner: AWSS3Owner;

	requestCharged: AWSS3RequestCharged;
}

declare class AWSS3GetObjectAclRequest extends AWSRequest {

	static alloc(): AWSS3GetObjectAclRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectAclRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectAclRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetObjectAclRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetObjectAclRequest; // inherited from NSObject

	bucket: string;

	key: string;

	requestPayer: AWSS3RequestPayer;

	versionId: string;
}

declare class AWSS3GetObjectLegalHoldOutput extends AWSModel {

	static alloc(): AWSS3GetObjectLegalHoldOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectLegalHoldOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectLegalHoldOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetObjectLegalHoldOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetObjectLegalHoldOutput; // inherited from NSObject

	legalHold: AWSS3ObjectLockLegalHold;
}

declare class AWSS3GetObjectLegalHoldRequest extends AWSRequest {

	static alloc(): AWSS3GetObjectLegalHoldRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectLegalHoldRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectLegalHoldRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetObjectLegalHoldRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetObjectLegalHoldRequest; // inherited from NSObject

	bucket: string;

	key: string;

	requestPayer: AWSS3RequestPayer;

	versionId: string;
}

declare class AWSS3GetObjectLockConfigurationOutput extends AWSModel {

	static alloc(): AWSS3GetObjectLockConfigurationOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectLockConfigurationOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectLockConfigurationOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetObjectLockConfigurationOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetObjectLockConfigurationOutput; // inherited from NSObject

	objectLockConfiguration: AWSS3ObjectLockConfiguration;
}

declare class AWSS3GetObjectLockConfigurationRequest extends AWSRequest {

	static alloc(): AWSS3GetObjectLockConfigurationRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectLockConfigurationRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectLockConfigurationRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetObjectLockConfigurationRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetObjectLockConfigurationRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3GetObjectOutput extends AWSModel {

	static alloc(): AWSS3GetObjectOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetObjectOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetObjectOutput; // inherited from NSObject

	ETag: string;

	SSECustomerAlgorithm: string;

	SSECustomerKeyMD5: string;

	SSEKMSKeyId: string;

	acceptRanges: string;

	body: any;

	cacheControl: string;

	contentDisposition: string;

	contentEncoding: string;

	contentLanguage: string;

	contentLength: number;

	contentRange: string;

	contentType: string;

	deleteMarker: number;

	expiration: string;

	expires: Date;

	lastModified: Date;

	metadata: NSDictionary<string, string>;

	missingMeta: number;

	objectLockLegalHoldStatus: AWSS3ObjectLockLegalHoldStatus;

	objectLockMode: AWSS3ObjectLockMode;

	objectLockRetainUntilDate: Date;

	partsCount: number;

	replicationStatus: AWSS3ReplicationStatus;

	requestCharged: AWSS3RequestCharged;

	restore: string;

	serverSideEncryption: AWSS3ServerSideEncryption;

	storageClass: AWSS3StorageClass;

	tagCount: number;

	versionId: string;

	websiteRedirectLocation: string;
}

declare class AWSS3GetObjectRequest extends AWSRequest {

	static alloc(): AWSS3GetObjectRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetObjectRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetObjectRequest; // inherited from NSObject

	SSECustomerAlgorithm: string;

	SSECustomerKey: string;

	SSECustomerKeyMD5: string;

	bucket: string;

	ifMatch: string;

	ifModifiedSince: Date;

	ifNoneMatch: string;

	ifUnmodifiedSince: Date;

	key: string;

	partNumber: number;

	range: string;

	requestPayer: AWSS3RequestPayer;

	responseCacheControl: string;

	responseContentDisposition: string;

	responseContentEncoding: string;

	responseContentLanguage: string;

	responseContentType: string;

	responseExpires: Date;

	versionId: string;
}

declare class AWSS3GetObjectRetentionOutput extends AWSModel {

	static alloc(): AWSS3GetObjectRetentionOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectRetentionOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectRetentionOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetObjectRetentionOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetObjectRetentionOutput; // inherited from NSObject

	retention: AWSS3ObjectLockRetention;
}

declare class AWSS3GetObjectRetentionRequest extends AWSRequest {

	static alloc(): AWSS3GetObjectRetentionRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectRetentionRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectRetentionRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetObjectRetentionRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetObjectRetentionRequest; // inherited from NSObject

	bucket: string;

	key: string;

	requestPayer: AWSS3RequestPayer;

	versionId: string;
}

declare class AWSS3GetObjectTaggingOutput extends AWSModel {

	static alloc(): AWSS3GetObjectTaggingOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectTaggingOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectTaggingOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetObjectTaggingOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetObjectTaggingOutput; // inherited from NSObject

	tagSet: NSArray<AWSS3Tag>;

	versionId: string;
}

declare class AWSS3GetObjectTaggingRequest extends AWSRequest {

	static alloc(): AWSS3GetObjectTaggingRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectTaggingRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectTaggingRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetObjectTaggingRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetObjectTaggingRequest; // inherited from NSObject

	bucket: string;

	key: string;

	versionId: string;
}

declare class AWSS3GetObjectTorrentOutput extends AWSModel {

	static alloc(): AWSS3GetObjectTorrentOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectTorrentOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectTorrentOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetObjectTorrentOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetObjectTorrentOutput; // inherited from NSObject

	body: any;

	requestCharged: AWSS3RequestCharged;
}

declare class AWSS3GetObjectTorrentRequest extends AWSRequest {

	static alloc(): AWSS3GetObjectTorrentRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectTorrentRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetObjectTorrentRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetObjectTorrentRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetObjectTorrentRequest; // inherited from NSObject

	bucket: string;

	key: string;

	requestPayer: AWSS3RequestPayer;
}

declare class AWSS3GetPreSignedURLRequest extends NSObject {

	static alloc(): AWSS3GetPreSignedURLRequest; // inherited from NSObject

	static new(): AWSS3GetPreSignedURLRequest; // inherited from NSObject

	HTTPMethod: AWSHTTPMethod;

	accelerateModeEnabled: boolean;

	bucket: string;

	contentMD5: string;

	contentType: string;

	expires: Date;

	key: string;

	minimumCredentialsExpirationInterval: number;

	readonly requestHeaders: NSDictionary<string, string>;

	readonly requestParameters: NSDictionary<string, string>;

	setValueForRequestHeader(value: string, requestHeader: string): void;

	setValueForRequestParameter(value: string, requestParameter: string): void;
}

declare class AWSS3GetPublicAccessBlockOutput extends AWSModel {

	static alloc(): AWSS3GetPublicAccessBlockOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetPublicAccessBlockOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetPublicAccessBlockOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetPublicAccessBlockOutput; // inherited from AWSMTLModel

	static new(): AWSS3GetPublicAccessBlockOutput; // inherited from NSObject

	publicAccessBlockConfiguration: AWSS3PublicAccessBlockConfiguration;
}

declare class AWSS3GetPublicAccessBlockRequest extends AWSRequest {

	static alloc(): AWSS3GetPublicAccessBlockRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GetPublicAccessBlockRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GetPublicAccessBlockRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GetPublicAccessBlockRequest; // inherited from AWSMTLModel

	static new(): AWSS3GetPublicAccessBlockRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3GlacierJobParameters extends AWSModel {

	static alloc(): AWSS3GlacierJobParameters; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3GlacierJobParameters; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3GlacierJobParameters; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3GlacierJobParameters; // inherited from AWSMTLModel

	static new(): AWSS3GlacierJobParameters; // inherited from NSObject

	tier: AWSS3Tier;
}

declare class AWSS3Grant extends AWSModel {

	static alloc(): AWSS3Grant; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3Grant; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3Grant; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3Grant; // inherited from AWSMTLModel

	static new(): AWSS3Grant; // inherited from NSObject

	grantee: AWSS3Grantee;

	permission: AWSS3Permission;
}

declare class AWSS3Grantee extends AWSModel {

	static alloc(): AWSS3Grantee; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3Grantee; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3Grantee; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3Grantee; // inherited from AWSMTLModel

	static new(): AWSS3Grantee; // inherited from NSObject

	URI: string;

	displayName: string;

	emailAddress: string;

	identifier: string;

	types: AWSS3Types;
}

declare class AWSS3HeadBucketRequest extends AWSRequest {

	static alloc(): AWSS3HeadBucketRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3HeadBucketRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3HeadBucketRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3HeadBucketRequest; // inherited from AWSMTLModel

	static new(): AWSS3HeadBucketRequest; // inherited from NSObject

	bucket: string;
}

declare class AWSS3HeadObjectOutput extends AWSModel {

	static alloc(): AWSS3HeadObjectOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3HeadObjectOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3HeadObjectOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3HeadObjectOutput; // inherited from AWSMTLModel

	static new(): AWSS3HeadObjectOutput; // inherited from NSObject

	ETag: string;

	SSECustomerAlgorithm: string;

	SSECustomerKeyMD5: string;

	SSEKMSKeyId: string;

	acceptRanges: string;

	cacheControl: string;

	contentDisposition: string;

	contentEncoding: string;

	contentLanguage: string;

	contentLength: number;

	contentType: string;

	deleteMarker: number;

	expiration: string;

	expires: Date;

	lastModified: Date;

	metadata: NSDictionary<string, string>;

	missingMeta: number;

	objectLockLegalHoldStatus: AWSS3ObjectLockLegalHoldStatus;

	objectLockMode: AWSS3ObjectLockMode;

	objectLockRetainUntilDate: Date;

	partsCount: number;

	replicationStatus: AWSS3ReplicationStatus;

	requestCharged: AWSS3RequestCharged;

	restore: string;

	serverSideEncryption: AWSS3ServerSideEncryption;

	storageClass: AWSS3StorageClass;

	versionId: string;

	websiteRedirectLocation: string;
}

declare class AWSS3HeadObjectRequest extends AWSRequest {

	static alloc(): AWSS3HeadObjectRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3HeadObjectRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3HeadObjectRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3HeadObjectRequest; // inherited from AWSMTLModel

	static new(): AWSS3HeadObjectRequest; // inherited from NSObject

	SSECustomerAlgorithm: string;

	SSECustomerKey: string;

	SSECustomerKeyMD5: string;

	bucket: string;

	ifMatch: string;

	ifModifiedSince: Date;

	ifNoneMatch: string;

	ifUnmodifiedSince: Date;

	key: string;

	partNumber: number;

	range: string;

	requestPayer: AWSS3RequestPayer;

	versionId: string;
}

declare class AWSS3IndexDocument extends AWSModel {

	static alloc(): AWSS3IndexDocument; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3IndexDocument; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3IndexDocument; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3IndexDocument; // inherited from AWSMTLModel

	static new(): AWSS3IndexDocument; // inherited from NSObject

	suffix: string;
}

declare class AWSS3Initiator extends AWSModel {

	static alloc(): AWSS3Initiator; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3Initiator; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3Initiator; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3Initiator; // inherited from AWSMTLModel

	static new(): AWSS3Initiator; // inherited from NSObject

	displayName: string;

	identifier: string;
}

declare class AWSS3InputSerialization extends AWSModel {

	static alloc(): AWSS3InputSerialization; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3InputSerialization; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3InputSerialization; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3InputSerialization; // inherited from AWSMTLModel

	static new(): AWSS3InputSerialization; // inherited from NSObject

	CSV: AWSS3CSVInput;

	JSON: AWSS3JSONInput;

	compressionType: AWSS3CompressionType;

	parquet: AWSS3ParquetInput;
}

declare class AWSS3InventoryConfiguration extends AWSModel {

	static alloc(): AWSS3InventoryConfiguration; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3InventoryConfiguration; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3InventoryConfiguration; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3InventoryConfiguration; // inherited from AWSMTLModel

	static new(): AWSS3InventoryConfiguration; // inherited from NSObject

	destination: AWSS3InventoryDestination;

	filter: AWSS3InventoryFilter;

	identifier: string;

	includedObjectVersions: AWSS3InventoryIncludedObjectVersions;

	isEnabled: number;

	optionalFields: NSArray<string>;

	schedule: AWSS3InventorySchedule;
}

declare class AWSS3InventoryDestination extends AWSModel {

	static alloc(): AWSS3InventoryDestination; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3InventoryDestination; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3InventoryDestination; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3InventoryDestination; // inherited from AWSMTLModel

	static new(): AWSS3InventoryDestination; // inherited from NSObject

	s3BucketDestination: AWSS3InventoryS3BucketDestination;
}

declare class AWSS3InventoryEncryption extends AWSModel {

	static alloc(): AWSS3InventoryEncryption; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3InventoryEncryption; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3InventoryEncryption; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3InventoryEncryption; // inherited from AWSMTLModel

	static new(): AWSS3InventoryEncryption; // inherited from NSObject

	SSEKMS: AWSS3SSEKMS;

	SSES3: AWSS3SSES3;
}

declare class AWSS3InventoryFilter extends AWSModel {

	static alloc(): AWSS3InventoryFilter; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3InventoryFilter; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3InventoryFilter; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3InventoryFilter; // inherited from AWSMTLModel

	static new(): AWSS3InventoryFilter; // inherited from NSObject

	prefix: string;
}

declare const enum AWSS3InventoryFormat {

	Unknown = 0,

	Csv = 1,

	Orc = 2,

	Parquet = 3
}

declare const enum AWSS3InventoryFrequency {

	Unknown = 0,

	Daily = 1,

	Weekly = 2
}

declare const enum AWSS3InventoryIncludedObjectVersions {

	Unknown = 0,

	All = 1,

	Current = 2
}

declare const enum AWSS3InventoryOptionalField {

	Unknown = 0,

	Size = 1,

	LastModifiedDate = 2,

	StorageClass = 3,

	ETag = 4,

	IsMultipartUploaded = 5,

	ReplicationStatus = 6,

	EncryptionStatus = 7,

	ObjectLockRetainUntilDate = 8,

	ObjectLockMode = 9,

	ObjectLockLegalHoldStatus = 10
}

declare class AWSS3InventoryS3BucketDestination extends AWSModel {

	static alloc(): AWSS3InventoryS3BucketDestination; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3InventoryS3BucketDestination; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3InventoryS3BucketDestination; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3InventoryS3BucketDestination; // inherited from AWSMTLModel

	static new(): AWSS3InventoryS3BucketDestination; // inherited from NSObject

	accountId: string;

	bucket: string;

	encryption: AWSS3InventoryEncryption;

	format: AWSS3InventoryFormat;

	prefix: string;
}

declare class AWSS3InventorySchedule extends AWSModel {

	static alloc(): AWSS3InventorySchedule; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3InventorySchedule; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3InventorySchedule; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3InventorySchedule; // inherited from AWSMTLModel

	static new(): AWSS3InventorySchedule; // inherited from NSObject

	frequency: AWSS3InventoryFrequency;
}

declare class AWSS3JSONInput extends AWSModel {

	static alloc(): AWSS3JSONInput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3JSONInput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3JSONInput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3JSONInput; // inherited from AWSMTLModel

	static new(): AWSS3JSONInput; // inherited from NSObject

	types: AWSS3JSONType;
}

declare class AWSS3JSONOutput extends AWSModel {

	static alloc(): AWSS3JSONOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3JSONOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3JSONOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3JSONOutput; // inherited from AWSMTLModel

	static new(): AWSS3JSONOutput; // inherited from NSObject

	recordDelimiter: string;
}

declare const enum AWSS3JSONType {

	Unknown = 0,

	Document = 1,

	Lines = 2
}

declare class AWSS3LambdaFunctionConfiguration extends AWSModel {

	static alloc(): AWSS3LambdaFunctionConfiguration; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3LambdaFunctionConfiguration; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3LambdaFunctionConfiguration; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3LambdaFunctionConfiguration; // inherited from AWSMTLModel

	static new(): AWSS3LambdaFunctionConfiguration; // inherited from NSObject

	events: NSArray<string>;

	filter: AWSS3NotificationConfigurationFilter;

	identifier: string;

	lambdaFunctionArn: string;
}

declare class AWSS3LifecycleConfiguration extends AWSModel {

	static alloc(): AWSS3LifecycleConfiguration; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3LifecycleConfiguration; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3LifecycleConfiguration; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3LifecycleConfiguration; // inherited from AWSMTLModel

	static new(): AWSS3LifecycleConfiguration; // inherited from NSObject

	rules: NSArray<AWSS3Rule>;
}

declare class AWSS3LifecycleExpiration extends AWSModel {

	static alloc(): AWSS3LifecycleExpiration; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3LifecycleExpiration; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3LifecycleExpiration; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3LifecycleExpiration; // inherited from AWSMTLModel

	static new(): AWSS3LifecycleExpiration; // inherited from NSObject

	date: Date;

	days: number;

	expiredObjectDeleteMarker: number;
}

declare class AWSS3LifecycleRule extends AWSModel {

	static alloc(): AWSS3LifecycleRule; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3LifecycleRule; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3LifecycleRule; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3LifecycleRule; // inherited from AWSMTLModel

	static new(): AWSS3LifecycleRule; // inherited from NSObject

	abortIncompleteMultipartUpload: AWSS3AbortIncompleteMultipartUpload;

	expiration: AWSS3LifecycleExpiration;

	filter: AWSS3LifecycleRuleFilter;

	identifier: string;

	noncurrentVersionExpiration: AWSS3NoncurrentVersionExpiration;

	noncurrentVersionTransitions: NSArray<AWSS3NoncurrentVersionTransition>;

	prefix: string;

	status: AWSS3ExpirationStatus;

	transitions: NSArray<AWSS3Transition>;
}

declare class AWSS3LifecycleRuleAndOperator extends AWSModel {

	static alloc(): AWSS3LifecycleRuleAndOperator; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3LifecycleRuleAndOperator; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3LifecycleRuleAndOperator; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3LifecycleRuleAndOperator; // inherited from AWSMTLModel

	static new(): AWSS3LifecycleRuleAndOperator; // inherited from NSObject

	prefix: string;

	tags: NSArray<AWSS3Tag>;
}

declare class AWSS3LifecycleRuleFilter extends AWSModel {

	static alloc(): AWSS3LifecycleRuleFilter; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3LifecycleRuleFilter; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3LifecycleRuleFilter; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3LifecycleRuleFilter; // inherited from AWSMTLModel

	static new(): AWSS3LifecycleRuleFilter; // inherited from NSObject

	AND: AWSS3LifecycleRuleAndOperator;

	prefix: string;

	tag: AWSS3Tag;
}

declare class AWSS3ListBucketAnalyticsConfigurationsOutput extends AWSModel {

	static alloc(): AWSS3ListBucketAnalyticsConfigurationsOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ListBucketAnalyticsConfigurationsOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ListBucketAnalyticsConfigurationsOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ListBucketAnalyticsConfigurationsOutput; // inherited from AWSMTLModel

	static new(): AWSS3ListBucketAnalyticsConfigurationsOutput; // inherited from NSObject

	analyticsConfigurationList: NSArray<AWSS3AnalyticsConfiguration>;

	continuationToken: string;

	isTruncated: number;

	nextContinuationToken: string;
}

declare class AWSS3ListBucketAnalyticsConfigurationsRequest extends AWSRequest {

	static alloc(): AWSS3ListBucketAnalyticsConfigurationsRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ListBucketAnalyticsConfigurationsRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ListBucketAnalyticsConfigurationsRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ListBucketAnalyticsConfigurationsRequest; // inherited from AWSMTLModel

	static new(): AWSS3ListBucketAnalyticsConfigurationsRequest; // inherited from NSObject

	bucket: string;

	continuationToken: string;
}

declare class AWSS3ListBucketInventoryConfigurationsOutput extends AWSModel {

	static alloc(): AWSS3ListBucketInventoryConfigurationsOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ListBucketInventoryConfigurationsOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ListBucketInventoryConfigurationsOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ListBucketInventoryConfigurationsOutput; // inherited from AWSMTLModel

	static new(): AWSS3ListBucketInventoryConfigurationsOutput; // inherited from NSObject

	continuationToken: string;

	inventoryConfigurationList: NSArray<AWSS3InventoryConfiguration>;

	isTruncated: number;

	nextContinuationToken: string;
}

declare class AWSS3ListBucketInventoryConfigurationsRequest extends AWSRequest {

	static alloc(): AWSS3ListBucketInventoryConfigurationsRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ListBucketInventoryConfigurationsRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ListBucketInventoryConfigurationsRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ListBucketInventoryConfigurationsRequest; // inherited from AWSMTLModel

	static new(): AWSS3ListBucketInventoryConfigurationsRequest; // inherited from NSObject

	bucket: string;

	continuationToken: string;
}

declare class AWSS3ListBucketMetricsConfigurationsOutput extends AWSModel {

	static alloc(): AWSS3ListBucketMetricsConfigurationsOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ListBucketMetricsConfigurationsOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ListBucketMetricsConfigurationsOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ListBucketMetricsConfigurationsOutput; // inherited from AWSMTLModel

	static new(): AWSS3ListBucketMetricsConfigurationsOutput; // inherited from NSObject

	continuationToken: string;

	isTruncated: number;

	metricsConfigurationList: NSArray<AWSS3MetricsConfiguration>;

	nextContinuationToken: string;
}

declare class AWSS3ListBucketMetricsConfigurationsRequest extends AWSRequest {

	static alloc(): AWSS3ListBucketMetricsConfigurationsRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ListBucketMetricsConfigurationsRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ListBucketMetricsConfigurationsRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ListBucketMetricsConfigurationsRequest; // inherited from AWSMTLModel

	static new(): AWSS3ListBucketMetricsConfigurationsRequest; // inherited from NSObject

	bucket: string;

	continuationToken: string;
}

declare class AWSS3ListBucketsOutput extends AWSModel {

	static alloc(): AWSS3ListBucketsOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ListBucketsOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ListBucketsOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ListBucketsOutput; // inherited from AWSMTLModel

	static new(): AWSS3ListBucketsOutput; // inherited from NSObject

	buckets: NSArray<AWSS3Bucket>;

	owner: AWSS3Owner;
}

declare class AWSS3ListMultipartUploadsOutput extends AWSModel {

	static alloc(): AWSS3ListMultipartUploadsOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ListMultipartUploadsOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ListMultipartUploadsOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ListMultipartUploadsOutput; // inherited from AWSMTLModel

	static new(): AWSS3ListMultipartUploadsOutput; // inherited from NSObject

	bucket: string;

	commonPrefixes: NSArray<AWSS3CommonPrefix>;

	delimiter: string;

	encodingType: AWSS3EncodingType;

	isTruncated: number;

	keyMarker: string;

	maxUploads: number;

	nextKeyMarker: string;

	nextUploadIdMarker: string;

	prefix: string;

	uploadIdMarker: string;

	uploads: NSArray<AWSS3MultipartUpload>;
}

declare class AWSS3ListMultipartUploadsRequest extends AWSRequest {

	static alloc(): AWSS3ListMultipartUploadsRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ListMultipartUploadsRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ListMultipartUploadsRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ListMultipartUploadsRequest; // inherited from AWSMTLModel

	static new(): AWSS3ListMultipartUploadsRequest; // inherited from NSObject

	bucket: string;

	delimiter: string;

	encodingType: AWSS3EncodingType;

	keyMarker: string;

	maxUploads: number;

	prefix: string;

	uploadIdMarker: string;
}

declare class AWSS3ListObjectVersionsOutput extends AWSModel {

	static alloc(): AWSS3ListObjectVersionsOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ListObjectVersionsOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ListObjectVersionsOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ListObjectVersionsOutput; // inherited from AWSMTLModel

	static new(): AWSS3ListObjectVersionsOutput; // inherited from NSObject

	commonPrefixes: NSArray<AWSS3CommonPrefix>;

	deleteMarkers: NSArray<AWSS3DeleteMarkerEntry>;

	delimiter: string;

	encodingType: AWSS3EncodingType;

	isTruncated: number;

	keyMarker: string;

	maxKeys: number;

	name: string;

	nextKeyMarker: string;

	nextVersionIdMarker: string;

	prefix: string;

	versionIdMarker: string;

	versions: NSArray<AWSS3ObjectVersion>;
}

declare class AWSS3ListObjectVersionsRequest extends AWSRequest {

	static alloc(): AWSS3ListObjectVersionsRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ListObjectVersionsRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ListObjectVersionsRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ListObjectVersionsRequest; // inherited from AWSMTLModel

	static new(): AWSS3ListObjectVersionsRequest; // inherited from NSObject

	bucket: string;

	delimiter: string;

	encodingType: AWSS3EncodingType;

	keyMarker: string;

	maxKeys: number;

	prefix: string;

	versionIdMarker: string;
}

declare class AWSS3ListObjectsOutput extends AWSModel {

	static alloc(): AWSS3ListObjectsOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ListObjectsOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ListObjectsOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ListObjectsOutput; // inherited from AWSMTLModel

	static new(): AWSS3ListObjectsOutput; // inherited from NSObject

	commonPrefixes: NSArray<AWSS3CommonPrefix>;

	contents: NSArray<AWSS3Object>;

	delimiter: string;

	encodingType: AWSS3EncodingType;

	isTruncated: number;

	marker: string;

	maxKeys: number;

	name: string;

	nextMarker: string;

	prefix: string;
}

declare class AWSS3ListObjectsRequest extends AWSRequest {

	static alloc(): AWSS3ListObjectsRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ListObjectsRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ListObjectsRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ListObjectsRequest; // inherited from AWSMTLModel

	static new(): AWSS3ListObjectsRequest; // inherited from NSObject

	bucket: string;

	delimiter: string;

	encodingType: AWSS3EncodingType;

	marker: string;

	maxKeys: number;

	prefix: string;

	requestPayer: AWSS3RequestPayer;
}

declare class AWSS3ListObjectsV2Output extends AWSModel {

	static alloc(): AWSS3ListObjectsV2Output; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ListObjectsV2Output; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ListObjectsV2Output; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ListObjectsV2Output; // inherited from AWSMTLModel

	static new(): AWSS3ListObjectsV2Output; // inherited from NSObject

	commonPrefixes: NSArray<AWSS3CommonPrefix>;

	contents: NSArray<AWSS3Object>;

	continuationToken: string;

	delimiter: string;

	encodingType: AWSS3EncodingType;

	isTruncated: number;

	keyCount: number;

	maxKeys: number;

	name: string;

	nextContinuationToken: string;

	prefix: string;

	startAfter: string;
}

declare class AWSS3ListObjectsV2Request extends AWSRequest {

	static alloc(): AWSS3ListObjectsV2Request; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ListObjectsV2Request; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ListObjectsV2Request; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ListObjectsV2Request; // inherited from AWSMTLModel

	static new(): AWSS3ListObjectsV2Request; // inherited from NSObject

	bucket: string;

	continuationToken: string;

	delimiter: string;

	encodingType: AWSS3EncodingType;

	fetchOwner: number;

	maxKeys: number;

	prefix: string;

	requestPayer: AWSS3RequestPayer;

	startAfter: string;
}

declare class AWSS3ListPartsOutput extends AWSModel {

	static alloc(): AWSS3ListPartsOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ListPartsOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ListPartsOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ListPartsOutput; // inherited from AWSMTLModel

	static new(): AWSS3ListPartsOutput; // inherited from NSObject

	abortDate: Date;

	abortRuleId: string;

	bucket: string;

	initiator: AWSS3Initiator;

	isTruncated: number;

	key: string;

	maxParts: number;

	nextPartNumberMarker: number;

	owner: AWSS3Owner;

	partNumberMarker: number;

	parts: NSArray<AWSS3Part>;

	requestCharged: AWSS3RequestCharged;

	storageClass: AWSS3StorageClass;

	uploadId: string;
}

declare class AWSS3ListPartsRequest extends AWSRequest {

	static alloc(): AWSS3ListPartsRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ListPartsRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ListPartsRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ListPartsRequest; // inherited from AWSMTLModel

	static new(): AWSS3ListPartsRequest; // inherited from NSObject

	bucket: string;

	key: string;

	maxParts: number;

	partNumberMarker: number;

	requestPayer: AWSS3RequestPayer;

	uploadId: string;
}

declare class AWSS3LoggingEnabled extends AWSModel {

	static alloc(): AWSS3LoggingEnabled; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3LoggingEnabled; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3LoggingEnabled; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3LoggingEnabled; // inherited from AWSMTLModel

	static new(): AWSS3LoggingEnabled; // inherited from NSObject

	targetBucket: string;

	targetGrants: NSArray<AWSS3TargetGrant>;

	targetPrefix: string;
}

declare const enum AWSS3MFADelete {

	Unknown = 0,

	Enabled = 1,

	Disabled = 2
}

declare const enum AWSS3MFADeleteStatus {

	Unknown = 0,

	Enabled = 1,

	Disabled = 2
}

declare const enum AWSS3MetadataDirective {

	Unknown = 0,

	Copy = 1,

	Replace = 2
}

declare class AWSS3MetadataEntry extends AWSModel {

	static alloc(): AWSS3MetadataEntry; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3MetadataEntry; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3MetadataEntry; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3MetadataEntry; // inherited from AWSMTLModel

	static new(): AWSS3MetadataEntry; // inherited from NSObject

	name: string;

	value: string;
}

declare class AWSS3MetricsAndOperator extends AWSModel {

	static alloc(): AWSS3MetricsAndOperator; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3MetricsAndOperator; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3MetricsAndOperator; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3MetricsAndOperator; // inherited from AWSMTLModel

	static new(): AWSS3MetricsAndOperator; // inherited from NSObject

	prefix: string;

	tags: NSArray<AWSS3Tag>;
}

declare class AWSS3MetricsConfiguration extends AWSModel {

	static alloc(): AWSS3MetricsConfiguration; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3MetricsConfiguration; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3MetricsConfiguration; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3MetricsConfiguration; // inherited from AWSMTLModel

	static new(): AWSS3MetricsConfiguration; // inherited from NSObject

	filter: AWSS3MetricsFilter;

	identifier: string;
}

declare class AWSS3MetricsFilter extends AWSModel {

	static alloc(): AWSS3MetricsFilter; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3MetricsFilter; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3MetricsFilter; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3MetricsFilter; // inherited from AWSMTLModel

	static new(): AWSS3MetricsFilter; // inherited from NSObject

	AND: AWSS3MetricsAndOperator;

	prefix: string;

	tag: AWSS3Tag;
}

declare class AWSS3MultipartUpload extends AWSModel {

	static alloc(): AWSS3MultipartUpload; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3MultipartUpload; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3MultipartUpload; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3MultipartUpload; // inherited from AWSMTLModel

	static new(): AWSS3MultipartUpload; // inherited from NSObject

	initiated: Date;

	initiator: AWSS3Initiator;

	key: string;

	owner: AWSS3Owner;

	storageClass: AWSS3StorageClass;

	uploadId: string;
}

declare class AWSS3NoncurrentVersionExpiration extends AWSModel {

	static alloc(): AWSS3NoncurrentVersionExpiration; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3NoncurrentVersionExpiration; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3NoncurrentVersionExpiration; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3NoncurrentVersionExpiration; // inherited from AWSMTLModel

	static new(): AWSS3NoncurrentVersionExpiration; // inherited from NSObject

	noncurrentDays: number;
}

declare class AWSS3NoncurrentVersionTransition extends AWSModel {

	static alloc(): AWSS3NoncurrentVersionTransition; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3NoncurrentVersionTransition; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3NoncurrentVersionTransition; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3NoncurrentVersionTransition; // inherited from AWSMTLModel

	static new(): AWSS3NoncurrentVersionTransition; // inherited from NSObject

	noncurrentDays: number;

	storageClass: AWSS3TransitionStorageClass;
}

declare class AWSS3NotificationConfiguration extends AWSModel {

	static alloc(): AWSS3NotificationConfiguration; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3NotificationConfiguration; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3NotificationConfiguration; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3NotificationConfiguration; // inherited from AWSMTLModel

	static new(): AWSS3NotificationConfiguration; // inherited from NSObject

	lambdaFunctionConfigurations: NSArray<AWSS3LambdaFunctionConfiguration>;

	queueConfigurations: NSArray<AWSS3QueueConfiguration>;

	topicConfigurations: NSArray<AWSS3TopicConfiguration>;
}

declare class AWSS3NotificationConfigurationDeprecated extends AWSModel {

	static alloc(): AWSS3NotificationConfigurationDeprecated; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3NotificationConfigurationDeprecated; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3NotificationConfigurationDeprecated; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3NotificationConfigurationDeprecated; // inherited from AWSMTLModel

	static new(): AWSS3NotificationConfigurationDeprecated; // inherited from NSObject

	cloudFunctionConfiguration: AWSS3CloudFunctionConfiguration;

	queueConfiguration: AWSS3QueueConfigurationDeprecated;

	topicConfiguration: AWSS3TopicConfigurationDeprecated;
}

declare class AWSS3NotificationConfigurationFilter extends AWSModel {

	static alloc(): AWSS3NotificationConfigurationFilter; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3NotificationConfigurationFilter; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3NotificationConfigurationFilter; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3NotificationConfigurationFilter; // inherited from AWSMTLModel

	static new(): AWSS3NotificationConfigurationFilter; // inherited from NSObject

	key: AWSS3S3KeyFilter;
}

declare class AWSS3Object extends AWSModel {

	static alloc(): AWSS3Object; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3Object; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3Object; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3Object; // inherited from AWSMTLModel

	static new(): AWSS3Object; // inherited from NSObject

	ETag: string;

	key: string;

	lastModified: Date;

	owner: AWSS3Owner;

	size: number;

	storageClass: AWSS3ObjectStorageClass;
}

declare const enum AWSS3ObjectCannedACL {

	Unknown = 0,

	Private = 1,

	PublicRead = 2,

	PublicReadWrite = 3,

	AuthenticatedRead = 4,

	AwsExecRead = 5,

	BucketOwnerRead = 6,

	BucketOwnerFullControl = 7
}

declare class AWSS3ObjectIdentifier extends AWSModel {

	static alloc(): AWSS3ObjectIdentifier; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ObjectIdentifier; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ObjectIdentifier; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ObjectIdentifier; // inherited from AWSMTLModel

	static new(): AWSS3ObjectIdentifier; // inherited from NSObject

	key: string;

	versionId: string;
}

declare class AWSS3ObjectLockConfiguration extends AWSModel {

	static alloc(): AWSS3ObjectLockConfiguration; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ObjectLockConfiguration; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ObjectLockConfiguration; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ObjectLockConfiguration; // inherited from AWSMTLModel

	static new(): AWSS3ObjectLockConfiguration; // inherited from NSObject

	objectLockEnabled: AWSS3ObjectLockEnabled;

	rule: AWSS3ObjectLockRule;
}

declare const enum AWSS3ObjectLockEnabled {

	Unknown = 0,

	Enabled = 1
}

declare class AWSS3ObjectLockLegalHold extends AWSModel {

	static alloc(): AWSS3ObjectLockLegalHold; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ObjectLockLegalHold; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ObjectLockLegalHold; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ObjectLockLegalHold; // inherited from AWSMTLModel

	static new(): AWSS3ObjectLockLegalHold; // inherited from NSObject

	status: AWSS3ObjectLockLegalHoldStatus;
}

declare const enum AWSS3ObjectLockLegalHoldStatus {

	Unknown = 0,

	On = 1,

	Off = 2
}

declare const enum AWSS3ObjectLockMode {

	Unknown = 0,

	Governance = 1,

	Compliance = 2
}

declare class AWSS3ObjectLockRetention extends AWSModel {

	static alloc(): AWSS3ObjectLockRetention; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ObjectLockRetention; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ObjectLockRetention; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ObjectLockRetention; // inherited from AWSMTLModel

	static new(): AWSS3ObjectLockRetention; // inherited from NSObject

	mode: AWSS3ObjectLockRetentionMode;

	retainUntilDate: Date;
}

declare const enum AWSS3ObjectLockRetentionMode {

	Unknown = 0,

	Governance = 1,

	Compliance = 2
}

declare class AWSS3ObjectLockRule extends AWSModel {

	static alloc(): AWSS3ObjectLockRule; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ObjectLockRule; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ObjectLockRule; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ObjectLockRule; // inherited from AWSMTLModel

	static new(): AWSS3ObjectLockRule; // inherited from NSObject

	defaultRetention: AWSS3DefaultRetention;
}

declare const enum AWSS3ObjectStorageClass {

	Unknown = 0,

	Standard = 1,

	ReducedRedundancy = 2,

	Glacier = 3,

	StandardIa = 4,

	OnezoneIa = 5,

	IntelligentTiering = 6
}

declare class AWSS3ObjectVersion extends AWSModel {

	static alloc(): AWSS3ObjectVersion; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ObjectVersion; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ObjectVersion; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ObjectVersion; // inherited from AWSMTLModel

	static new(): AWSS3ObjectVersion; // inherited from NSObject

	ETag: string;

	isLatest: number;

	key: string;

	lastModified: Date;

	owner: AWSS3Owner;

	size: number;

	storageClass: AWSS3ObjectVersionStorageClass;

	versionId: string;
}

declare const enum AWSS3ObjectVersionStorageClass {

	Unknown = 0,

	Standard = 1
}

declare class AWSS3OutputLocation extends AWSModel {

	static alloc(): AWSS3OutputLocation; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3OutputLocation; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3OutputLocation; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3OutputLocation; // inherited from AWSMTLModel

	static new(): AWSS3OutputLocation; // inherited from NSObject

	s3: AWSS3S3Location;
}

declare class AWSS3OutputSerialization extends AWSModel {

	static alloc(): AWSS3OutputSerialization; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3OutputSerialization; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3OutputSerialization; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3OutputSerialization; // inherited from AWSMTLModel

	static new(): AWSS3OutputSerialization; // inherited from NSObject

	CSV: AWSS3CSVOutput;

	JSON: AWSS3JSONOutput;
}

declare class AWSS3Owner extends AWSModel {

	static alloc(): AWSS3Owner; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3Owner; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3Owner; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3Owner; // inherited from AWSMTLModel

	static new(): AWSS3Owner; // inherited from NSObject

	displayName: string;

	identifier: string;
}

declare const enum AWSS3OwnerOverride {

	Unknown = 0,

	Destination = 1
}

declare class AWSS3ParquetInput extends AWSModel {

	static alloc(): AWSS3ParquetInput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ParquetInput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ParquetInput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ParquetInput; // inherited from AWSMTLModel

	static new(): AWSS3ParquetInput; // inherited from NSObject
}

declare class AWSS3Part extends AWSModel {

	static alloc(): AWSS3Part; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3Part; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3Part; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3Part; // inherited from AWSMTLModel

	static new(): AWSS3Part; // inherited from NSObject

	ETag: string;

	lastModified: Date;

	partNumber: number;

	size: number;
}

declare const enum AWSS3Payer {

	Unknown = 0,

	Requester = 1,

	BucketOwner = 2
}

declare const enum AWSS3Permission {

	Unknown = 0,

	FullControl = 1,

	Write = 2,

	WriteAcp = 3,

	Read = 4,

	ReadAcp = 5
}

declare class AWSS3PolicyStatus extends AWSModel {

	static alloc(): AWSS3PolicyStatus; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PolicyStatus; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PolicyStatus; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PolicyStatus; // inherited from AWSMTLModel

	static new(): AWSS3PolicyStatus; // inherited from NSObject

	isPublic: number;
}

declare class AWSS3PreSignedURLBuilder extends AWSService {

	static S3PreSignedURLBuilderForKey(key: string): AWSS3PreSignedURLBuilder;

	static alloc(): AWSS3PreSignedURLBuilder; // inherited from NSObject

	static defaultS3PreSignedURLBuilder(): AWSS3PreSignedURLBuilder;

	static new(): AWSS3PreSignedURLBuilder; // inherited from NSObject

	static registerS3PreSignedURLBuilderWithConfigurationForKey(configuration: AWSServiceConfiguration, key: string): void;

	static removeS3PreSignedURLBuilderForKey(key: string): void;

	getPreSignedURL(getPreSignedURLRequest: AWSS3GetPreSignedURLRequest): AWSTask<NSURL>;
}

declare var AWSS3PresignedURLErrorDomain: string;

declare const enum AWSS3PresignedURLErrorType {

	signedURLErrorUnknown = 0,

	signedURLErrorAccessKeyIsNil = 1,

	signedURLErrorSecretKeyIsNil = 2,

	signedURLErrorBucketNameIsNil = 3,

	signedURLErrorKeyNameIsNil = 4,

	signedURLErrorInvalidExpiresDate = 5,

	signedURLErrorUnsupportedHTTPVerbs = 6,

	signedURLErrorEndpointIsNil = 7,

	signedURLErrorInvalidServiceType = 8,

	SignedURLErrorCredentialProviderIsNil = 9,

	SignedURLErrorInternalError = 10,

	signedURLErrorInvalidRequestParameters = 11,

	signedURLErrorInvalidBucketName = 12,

	signedURLErrorInvalidBucketNameForAccelerateModeEnabled = 13
}

declare class AWSS3Progress extends AWSModel {

	static alloc(): AWSS3Progress; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3Progress; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3Progress; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3Progress; // inherited from AWSMTLModel

	static new(): AWSS3Progress; // inherited from NSObject

	bytesProcessed: number;

	bytesReturned: number;

	bytesScanned: number;
}

declare class AWSS3ProgressEvent extends AWSModel {

	static alloc(): AWSS3ProgressEvent; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ProgressEvent; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ProgressEvent; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ProgressEvent; // inherited from AWSMTLModel

	static new(): AWSS3ProgressEvent; // inherited from NSObject

	details: AWSS3Progress;
}

declare const enum AWSS3Protocols {

	Unknown = 0,

	HTTP = 1,

	HTTPS = 2
}

declare class AWSS3PublicAccessBlockConfiguration extends AWSModel {

	static alloc(): AWSS3PublicAccessBlockConfiguration; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PublicAccessBlockConfiguration; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PublicAccessBlockConfiguration; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PublicAccessBlockConfiguration; // inherited from AWSMTLModel

	static new(): AWSS3PublicAccessBlockConfiguration; // inherited from NSObject

	blockPublicAcls: number;

	blockPublicPolicy: number;

	ignorePublicAcls: number;

	restrictPublicBuckets: number;
}

declare class AWSS3PutBucketAccelerateConfigurationRequest extends AWSRequest {

	static alloc(): AWSS3PutBucketAccelerateConfigurationRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketAccelerateConfigurationRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketAccelerateConfigurationRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutBucketAccelerateConfigurationRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutBucketAccelerateConfigurationRequest; // inherited from NSObject

	accelerateConfiguration: AWSS3AccelerateConfiguration;

	bucket: string;
}

declare class AWSS3PutBucketAclRequest extends AWSRequest {

	static alloc(): AWSS3PutBucketAclRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketAclRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketAclRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutBucketAclRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutBucketAclRequest; // inherited from NSObject

	ACL: AWSS3BucketCannedACL;

	accessControlPolicy: AWSS3AccessControlPolicy;

	bucket: string;

	contentMD5: string;

	grantFullControl: string;

	grantRead: string;

	grantReadACP: string;

	grantWrite: string;

	grantWriteACP: string;
}

declare class AWSS3PutBucketAnalyticsConfigurationRequest extends AWSRequest {

	static alloc(): AWSS3PutBucketAnalyticsConfigurationRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketAnalyticsConfigurationRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketAnalyticsConfigurationRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutBucketAnalyticsConfigurationRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutBucketAnalyticsConfigurationRequest; // inherited from NSObject

	analyticsConfiguration: AWSS3AnalyticsConfiguration;

	bucket: string;

	identifier: string;
}

declare class AWSS3PutBucketCorsRequest extends AWSRequest {

	static alloc(): AWSS3PutBucketCorsRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketCorsRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketCorsRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutBucketCorsRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutBucketCorsRequest; // inherited from NSObject

	CORSConfiguration: AWSS3CORSConfiguration;

	bucket: string;

	contentMD5: string;
}

declare class AWSS3PutBucketEncryptionRequest extends AWSRequest {

	static alloc(): AWSS3PutBucketEncryptionRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketEncryptionRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketEncryptionRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutBucketEncryptionRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutBucketEncryptionRequest; // inherited from NSObject

	bucket: string;

	contentMD5: string;

	serverSideEncryptionConfiguration: AWSS3ServerSideEncryptionConfiguration;
}

declare class AWSS3PutBucketInventoryConfigurationRequest extends AWSRequest {

	static alloc(): AWSS3PutBucketInventoryConfigurationRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketInventoryConfigurationRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketInventoryConfigurationRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutBucketInventoryConfigurationRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutBucketInventoryConfigurationRequest; // inherited from NSObject

	bucket: string;

	identifier: string;

	inventoryConfiguration: AWSS3InventoryConfiguration;
}

declare class AWSS3PutBucketLifecycleConfigurationRequest extends AWSRequest {

	static alloc(): AWSS3PutBucketLifecycleConfigurationRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketLifecycleConfigurationRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketLifecycleConfigurationRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutBucketLifecycleConfigurationRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutBucketLifecycleConfigurationRequest; // inherited from NSObject

	bucket: string;

	lifecycleConfiguration: AWSS3BucketLifecycleConfiguration;
}

declare class AWSS3PutBucketLifecycleRequest extends AWSRequest {

	static alloc(): AWSS3PutBucketLifecycleRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketLifecycleRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketLifecycleRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutBucketLifecycleRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutBucketLifecycleRequest; // inherited from NSObject

	bucket: string;

	contentMD5: string;

	lifecycleConfiguration: AWSS3LifecycleConfiguration;
}

declare class AWSS3PutBucketLoggingRequest extends AWSRequest {

	static alloc(): AWSS3PutBucketLoggingRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketLoggingRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketLoggingRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutBucketLoggingRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutBucketLoggingRequest; // inherited from NSObject

	bucket: string;

	bucketLoggingStatus: AWSS3BucketLoggingStatus;

	contentMD5: string;
}

declare class AWSS3PutBucketMetricsConfigurationRequest extends AWSRequest {

	static alloc(): AWSS3PutBucketMetricsConfigurationRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketMetricsConfigurationRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketMetricsConfigurationRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutBucketMetricsConfigurationRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutBucketMetricsConfigurationRequest; // inherited from NSObject

	bucket: string;

	identifier: string;

	metricsConfiguration: AWSS3MetricsConfiguration;
}

declare class AWSS3PutBucketNotificationConfigurationRequest extends AWSRequest {

	static alloc(): AWSS3PutBucketNotificationConfigurationRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketNotificationConfigurationRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketNotificationConfigurationRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutBucketNotificationConfigurationRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutBucketNotificationConfigurationRequest; // inherited from NSObject

	bucket: string;

	notificationConfiguration: AWSS3NotificationConfiguration;
}

declare class AWSS3PutBucketNotificationRequest extends AWSRequest {

	static alloc(): AWSS3PutBucketNotificationRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketNotificationRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketNotificationRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutBucketNotificationRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutBucketNotificationRequest; // inherited from NSObject

	bucket: string;

	contentMD5: string;

	notificationConfiguration: AWSS3NotificationConfigurationDeprecated;
}

declare class AWSS3PutBucketPolicyRequest extends AWSRequest {

	static alloc(): AWSS3PutBucketPolicyRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketPolicyRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketPolicyRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutBucketPolicyRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutBucketPolicyRequest; // inherited from NSObject

	bucket: string;

	confirmRemoveSelfBucketAccess: number;

	contentMD5: string;

	policy: string;
}

declare class AWSS3PutBucketReplicationRequest extends AWSRequest {

	static alloc(): AWSS3PutBucketReplicationRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketReplicationRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketReplicationRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutBucketReplicationRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutBucketReplicationRequest; // inherited from NSObject

	bucket: string;

	contentMD5: string;

	replicationConfiguration: AWSS3ReplicationConfiguration;
}

declare class AWSS3PutBucketRequestPaymentRequest extends AWSRequest {

	static alloc(): AWSS3PutBucketRequestPaymentRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketRequestPaymentRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketRequestPaymentRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutBucketRequestPaymentRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutBucketRequestPaymentRequest; // inherited from NSObject

	bucket: string;

	contentMD5: string;

	requestPaymentConfiguration: AWSS3RequestPaymentConfiguration;
}

declare class AWSS3PutBucketTaggingRequest extends AWSRequest {

	static alloc(): AWSS3PutBucketTaggingRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketTaggingRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketTaggingRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutBucketTaggingRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutBucketTaggingRequest; // inherited from NSObject

	bucket: string;

	contentMD5: string;

	tagging: AWSS3Tagging;
}

declare class AWSS3PutBucketVersioningRequest extends AWSRequest {

	static alloc(): AWSS3PutBucketVersioningRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketVersioningRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketVersioningRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutBucketVersioningRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutBucketVersioningRequest; // inherited from NSObject

	MFA: string;

	bucket: string;

	contentMD5: string;

	versioningConfiguration: AWSS3VersioningConfiguration;
}

declare class AWSS3PutBucketWebsiteRequest extends AWSRequest {

	static alloc(): AWSS3PutBucketWebsiteRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketWebsiteRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutBucketWebsiteRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutBucketWebsiteRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutBucketWebsiteRequest; // inherited from NSObject

	bucket: string;

	contentMD5: string;

	websiteConfiguration: AWSS3WebsiteConfiguration;
}

declare class AWSS3PutObjectAclOutput extends AWSModel {

	static alloc(): AWSS3PutObjectAclOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutObjectAclOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutObjectAclOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutObjectAclOutput; // inherited from AWSMTLModel

	static new(): AWSS3PutObjectAclOutput; // inherited from NSObject

	requestCharged: AWSS3RequestCharged;
}

declare class AWSS3PutObjectAclRequest extends AWSRequest {

	static alloc(): AWSS3PutObjectAclRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutObjectAclRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutObjectAclRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutObjectAclRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutObjectAclRequest; // inherited from NSObject

	ACL: AWSS3ObjectCannedACL;

	accessControlPolicy: AWSS3AccessControlPolicy;

	bucket: string;

	contentMD5: string;

	grantFullControl: string;

	grantRead: string;

	grantReadACP: string;

	grantWrite: string;

	grantWriteACP: string;

	key: string;

	requestPayer: AWSS3RequestPayer;

	versionId: string;
}

declare class AWSS3PutObjectLegalHoldOutput extends AWSModel {

	static alloc(): AWSS3PutObjectLegalHoldOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutObjectLegalHoldOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutObjectLegalHoldOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutObjectLegalHoldOutput; // inherited from AWSMTLModel

	static new(): AWSS3PutObjectLegalHoldOutput; // inherited from NSObject

	requestCharged: AWSS3RequestCharged;
}

declare class AWSS3PutObjectLegalHoldRequest extends AWSRequest {

	static alloc(): AWSS3PutObjectLegalHoldRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutObjectLegalHoldRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutObjectLegalHoldRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutObjectLegalHoldRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutObjectLegalHoldRequest; // inherited from NSObject

	bucket: string;

	contentMD5: string;

	key: string;

	legalHold: AWSS3ObjectLockLegalHold;

	requestPayer: AWSS3RequestPayer;

	versionId: string;
}

declare class AWSS3PutObjectLockConfigurationOutput extends AWSModel {

	static alloc(): AWSS3PutObjectLockConfigurationOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutObjectLockConfigurationOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutObjectLockConfigurationOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutObjectLockConfigurationOutput; // inherited from AWSMTLModel

	static new(): AWSS3PutObjectLockConfigurationOutput; // inherited from NSObject

	requestCharged: AWSS3RequestCharged;
}

declare class AWSS3PutObjectLockConfigurationRequest extends AWSRequest {

	static alloc(): AWSS3PutObjectLockConfigurationRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutObjectLockConfigurationRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutObjectLockConfigurationRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutObjectLockConfigurationRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutObjectLockConfigurationRequest; // inherited from NSObject

	bucket: string;

	contentMD5: string;

	objectLockConfiguration: AWSS3ObjectLockConfiguration;

	requestPayer: AWSS3RequestPayer;

	token: string;
}

declare class AWSS3PutObjectOutput extends AWSModel {

	static alloc(): AWSS3PutObjectOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutObjectOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutObjectOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutObjectOutput; // inherited from AWSMTLModel

	static new(): AWSS3PutObjectOutput; // inherited from NSObject

	ETag: string;

	SSECustomerAlgorithm: string;

	SSECustomerKeyMD5: string;

	SSEKMSKeyId: string;

	expiration: string;

	requestCharged: AWSS3RequestCharged;

	serverSideEncryption: AWSS3ServerSideEncryption;

	versionId: string;
}

declare class AWSS3PutObjectRequest extends AWSRequest {

	static alloc(): AWSS3PutObjectRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutObjectRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutObjectRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutObjectRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutObjectRequest; // inherited from NSObject

	ACL: AWSS3ObjectCannedACL;

	SSECustomerAlgorithm: string;

	SSECustomerKey: string;

	SSECustomerKeyMD5: string;

	SSEKMSKeyId: string;

	body: any;

	bucket: string;

	cacheControl: string;

	contentDisposition: string;

	contentEncoding: string;

	contentLanguage: string;

	contentLength: number;

	contentMD5: string;

	contentType: string;

	expires: Date;

	grantFullControl: string;

	grantRead: string;

	grantReadACP: string;

	grantWriteACP: string;

	key: string;

	metadata: NSDictionary<string, string>;

	objectLockLegalHoldStatus: AWSS3ObjectLockLegalHoldStatus;

	objectLockMode: AWSS3ObjectLockMode;

	objectLockRetainUntilDate: Date;

	requestPayer: AWSS3RequestPayer;

	serverSideEncryption: AWSS3ServerSideEncryption;

	storageClass: AWSS3StorageClass;

	tagging: string;

	websiteRedirectLocation: string;
}

declare class AWSS3PutObjectRetentionOutput extends AWSModel {

	static alloc(): AWSS3PutObjectRetentionOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutObjectRetentionOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutObjectRetentionOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutObjectRetentionOutput; // inherited from AWSMTLModel

	static new(): AWSS3PutObjectRetentionOutput; // inherited from NSObject

	requestCharged: AWSS3RequestCharged;
}

declare class AWSS3PutObjectRetentionRequest extends AWSRequest {

	static alloc(): AWSS3PutObjectRetentionRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutObjectRetentionRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutObjectRetentionRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutObjectRetentionRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutObjectRetentionRequest; // inherited from NSObject

	bucket: string;

	bypassGovernanceRetention: number;

	contentMD5: string;

	key: string;

	requestPayer: AWSS3RequestPayer;

	retention: AWSS3ObjectLockRetention;

	versionId: string;
}

declare class AWSS3PutObjectTaggingOutput extends AWSModel {

	static alloc(): AWSS3PutObjectTaggingOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutObjectTaggingOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutObjectTaggingOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutObjectTaggingOutput; // inherited from AWSMTLModel

	static new(): AWSS3PutObjectTaggingOutput; // inherited from NSObject

	versionId: string;
}

declare class AWSS3PutObjectTaggingRequest extends AWSRequest {

	static alloc(): AWSS3PutObjectTaggingRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutObjectTaggingRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutObjectTaggingRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutObjectTaggingRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutObjectTaggingRequest; // inherited from NSObject

	bucket: string;

	contentMD5: string;

	key: string;

	tagging: AWSS3Tagging;

	versionId: string;
}

declare class AWSS3PutPublicAccessBlockRequest extends AWSRequest {

	static alloc(): AWSS3PutPublicAccessBlockRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3PutPublicAccessBlockRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3PutPublicAccessBlockRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3PutPublicAccessBlockRequest; // inherited from AWSMTLModel

	static new(): AWSS3PutPublicAccessBlockRequest; // inherited from NSObject

	bucket: string;

	contentMD5: string;

	publicAccessBlockConfiguration: AWSS3PublicAccessBlockConfiguration;
}

declare class AWSS3QueueConfiguration extends AWSModel {

	static alloc(): AWSS3QueueConfiguration; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3QueueConfiguration; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3QueueConfiguration; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3QueueConfiguration; // inherited from AWSMTLModel

	static new(): AWSS3QueueConfiguration; // inherited from NSObject

	events: NSArray<string>;

	filter: AWSS3NotificationConfigurationFilter;

	identifier: string;

	queueArn: string;
}

declare class AWSS3QueueConfigurationDeprecated extends AWSModel {

	static alloc(): AWSS3QueueConfigurationDeprecated; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3QueueConfigurationDeprecated; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3QueueConfigurationDeprecated; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3QueueConfigurationDeprecated; // inherited from AWSMTLModel

	static new(): AWSS3QueueConfigurationDeprecated; // inherited from NSObject

	event: AWSS3Event;

	events: NSArray<string>;

	identifier: string;

	queue: string;
}

declare const enum AWSS3QuoteFields {

	Unknown = 0,

	Always = 1,

	Asneeded = 2
}

declare class AWSS3RecordsEvent extends AWSModel {

	static alloc(): AWSS3RecordsEvent; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3RecordsEvent; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3RecordsEvent; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3RecordsEvent; // inherited from AWSMTLModel

	static new(): AWSS3RecordsEvent; // inherited from NSObject

	payload: any;
}

declare class AWSS3Redirect extends AWSModel {

	static alloc(): AWSS3Redirect; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3Redirect; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3Redirect; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3Redirect; // inherited from AWSMTLModel

	static new(): AWSS3Redirect; // inherited from NSObject

	hostName: string;

	httpRedirectCode: string;

	protocols: AWSS3Protocols;

	replaceKeyPrefixWith: string;

	replaceKeyWith: string;
}

declare class AWSS3RedirectAllRequestsTo extends AWSModel {

	static alloc(): AWSS3RedirectAllRequestsTo; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3RedirectAllRequestsTo; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3RedirectAllRequestsTo; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3RedirectAllRequestsTo; // inherited from AWSMTLModel

	static new(): AWSS3RedirectAllRequestsTo; // inherited from NSObject

	hostName: string;

	protocols: AWSS3Protocols;
}

declare class AWSS3Remove extends AWSModel {

	static alloc(): AWSS3Remove; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3Remove; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3Remove; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3Remove; // inherited from AWSMTLModel

	static new(): AWSS3Remove; // inherited from NSObject

	objects: NSArray<AWSS3ObjectIdentifier>;

	quiet: number;
}

declare class AWSS3ReplicateObjectOutput extends AWSModel {

	static alloc(): AWSS3ReplicateObjectOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ReplicateObjectOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ReplicateObjectOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ReplicateObjectOutput; // inherited from AWSMTLModel

	static new(): AWSS3ReplicateObjectOutput; // inherited from NSObject

	SSECustomerAlgorithm: string;

	SSECustomerKeyMD5: string;

	SSEKMSKeyId: string;

	expiration: string;

	replicateObjectResult: AWSS3ReplicateObjectResult;

	replicateSourceVersionId: string;

	requestCharged: AWSS3RequestCharged;

	serverSideEncryption: AWSS3ServerSideEncryption;

	versionId: string;
}

declare class AWSS3ReplicateObjectRequest extends AWSRequest {

	static alloc(): AWSS3ReplicateObjectRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ReplicateObjectRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ReplicateObjectRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ReplicateObjectRequest; // inherited from AWSMTLModel

	static new(): AWSS3ReplicateObjectRequest; // inherited from NSObject

	ACL: AWSS3ObjectCannedACL;

	SSECustomerAlgorithm: string;

	SSECustomerKey: string;

	SSECustomerKeyMD5: string;

	SSEKMSKeyId: string;

	bucket: string;

	cacheControl: string;

	contentDisposition: string;

	contentEncoding: string;

	contentLanguage: string;

	contentType: string;

	expires: Date;

	grantFullControl: string;

	grantRead: string;

	grantReadACP: string;

	grantWriteACP: string;

	key: string;

	metadata: NSDictionary<string, string>;

	metadataDirective: AWSS3MetadataDirective;

	objectLockLegalHoldStatus: AWSS3ObjectLockLegalHoldStatus;

	objectLockMode: AWSS3ObjectLockMode;

	objectLockRetainUntilDate: Date;

	replicateSource: string;

	replicateSourceIfMatch: string;

	replicateSourceIfModifiedSince: Date;

	replicateSourceIfNoneMatch: string;

	replicateSourceIfUnmodifiedSince: Date;

	replicateSourceSSECustomerAlgorithm: string;

	replicateSourceSSECustomerKey: string;

	replicateSourceSSECustomerKeyMD5: string;

	requestPayer: AWSS3RequestPayer;

	serverSideEncryption: AWSS3ServerSideEncryption;

	storageClass: AWSS3StorageClass;

	tagging: string;

	taggingDirective: AWSS3TaggingDirective;

	websiteRedirectLocation: string;
}

declare class AWSS3ReplicateObjectResult extends AWSModel {

	static alloc(): AWSS3ReplicateObjectResult; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ReplicateObjectResult; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ReplicateObjectResult; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ReplicateObjectResult; // inherited from AWSMTLModel

	static new(): AWSS3ReplicateObjectResult; // inherited from NSObject

	ETag: string;

	lastModified: Date;
}

declare class AWSS3ReplicatePartResult extends AWSModel {

	static alloc(): AWSS3ReplicatePartResult; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ReplicatePartResult; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ReplicatePartResult; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ReplicatePartResult; // inherited from AWSMTLModel

	static new(): AWSS3ReplicatePartResult; // inherited from NSObject

	ETag: string;

	lastModified: Date;
}

declare class AWSS3ReplicationConfiguration extends AWSModel {

	static alloc(): AWSS3ReplicationConfiguration; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ReplicationConfiguration; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ReplicationConfiguration; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ReplicationConfiguration; // inherited from AWSMTLModel

	static new(): AWSS3ReplicationConfiguration; // inherited from NSObject

	role: string;

	rules: NSArray<AWSS3ReplicationRule>;
}

declare class AWSS3ReplicationRule extends AWSModel {

	static alloc(): AWSS3ReplicationRule; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ReplicationRule; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ReplicationRule; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ReplicationRule; // inherited from AWSMTLModel

	static new(): AWSS3ReplicationRule; // inherited from NSObject

	deleteMarkerReplication: AWSS3DeleteMarkerReplication;

	destination: AWSS3Destination;

	filter: AWSS3ReplicationRuleFilter;

	identifier: string;

	prefix: string;

	priority: number;

	sourceSelectionCriteria: AWSS3SourceSelectionCriteria;

	status: AWSS3ReplicationRuleStatus;
}

declare class AWSS3ReplicationRuleAndOperator extends AWSModel {

	static alloc(): AWSS3ReplicationRuleAndOperator; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ReplicationRuleAndOperator; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ReplicationRuleAndOperator; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ReplicationRuleAndOperator; // inherited from AWSMTLModel

	static new(): AWSS3ReplicationRuleAndOperator; // inherited from NSObject

	prefix: string;

	tags: NSArray<AWSS3Tag>;
}

declare class AWSS3ReplicationRuleFilter extends AWSModel {

	static alloc(): AWSS3ReplicationRuleFilter; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ReplicationRuleFilter; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ReplicationRuleFilter; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ReplicationRuleFilter; // inherited from AWSMTLModel

	static new(): AWSS3ReplicationRuleFilter; // inherited from NSObject

	AND: AWSS3ReplicationRuleAndOperator;

	prefix: string;

	tag: AWSS3Tag;
}

declare const enum AWSS3ReplicationRuleStatus {

	Unknown = 0,

	Enabled = 1,

	Disabled = 2
}

declare const enum AWSS3ReplicationStatus {

	Unknown = 0,

	Complete = 1,

	Pending = 2,

	Failed = 3,

	Replica = 4
}

declare const enum AWSS3RequestCharged {

	Unknown = 0,

	Requester = 1
}

declare const enum AWSS3RequestPayer {

	Unknown = 0,

	Requester = 1
}

declare class AWSS3RequestPaymentConfiguration extends AWSModel {

	static alloc(): AWSS3RequestPaymentConfiguration; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3RequestPaymentConfiguration; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3RequestPaymentConfiguration; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3RequestPaymentConfiguration; // inherited from AWSMTLModel

	static new(): AWSS3RequestPaymentConfiguration; // inherited from NSObject

	payer: AWSS3Payer;
}

declare class AWSS3RequestProgress extends AWSModel {

	static alloc(): AWSS3RequestProgress; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3RequestProgress; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3RequestProgress; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3RequestProgress; // inherited from AWSMTLModel

	static new(): AWSS3RequestProgress; // inherited from NSObject

	enabled: number;
}

declare class AWSS3RequestRetryHandler extends AWSURLRequestRetryHandler {

	static alloc(): AWSS3RequestRetryHandler; // inherited from NSObject

	static new(): AWSS3RequestRetryHandler; // inherited from NSObject
}

declare class AWSS3RequestSerializer extends NSObject implements AWSURLRequestSerializer {

	static alloc(): AWSS3RequestSerializer; // inherited from NSObject

	static new(): AWSS3RequestSerializer; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { JSONDefinition: NSDictionary<any, any>; actionName: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithJSONDefinitionActionName(JSONDefinition: NSDictionary<any, any>, actionName: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	serializeRequestHeadersParameters(request: NSMutableURLRequest, headers: NSDictionary<any, any>, parameters: NSDictionary<any, any>): AWSTask<any>;

	validateRequest(request: NSURLRequest): AWSTask<any>;
}

declare class AWSS3Resources extends NSObject {

	static alloc(): AWSS3Resources; // inherited from NSObject

	static new(): AWSS3Resources; // inherited from NSObject

	static sharedInstance(): AWSS3Resources;

	JSONObject(): NSDictionary<any, any>;
}

declare class AWSS3ResponseSerializer extends NSObject implements AWSHTTPURLResponseSerializer {

	static alloc(): AWSS3ResponseSerializer; // inherited from NSObject

	static new(): AWSS3ResponseSerializer; // inherited from NSObject

	outputClass: typeof NSObject;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { JSONDefinition: NSDictionary<any, any>; actionName: string; outputClass: typeof NSObject; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithJSONDefinitionActionNameOutputClass(JSONDefinition: NSDictionary<any, any>, actionName: string, outputClass: typeof NSObject): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	responseObjectForResponseOriginalRequestCurrentRequestDataError(response: NSHTTPURLResponse, originalRequest: NSURLRequest, currentRequest: NSURLRequest, data: any): any;

	retainCount(): number;

	self(): this;

	validateResponseFromRequestDataError(response: NSHTTPURLResponse, request: NSURLRequest, data: any): boolean;
}

declare class AWSS3RestoreObjectOutput extends AWSModel {

	static alloc(): AWSS3RestoreObjectOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3RestoreObjectOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3RestoreObjectOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3RestoreObjectOutput; // inherited from AWSMTLModel

	static new(): AWSS3RestoreObjectOutput; // inherited from NSObject

	requestCharged: AWSS3RequestCharged;

	restoreOutputPath: string;
}

declare class AWSS3RestoreObjectRequest extends AWSRequest {

	static alloc(): AWSS3RestoreObjectRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3RestoreObjectRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3RestoreObjectRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3RestoreObjectRequest; // inherited from AWSMTLModel

	static new(): AWSS3RestoreObjectRequest; // inherited from NSObject

	bucket: string;

	key: string;

	requestPayer: AWSS3RequestPayer;

	restoreRequest: AWSS3RestoreRequest;

	versionId: string;
}

declare class AWSS3RestoreRequest extends AWSModel {

	static alloc(): AWSS3RestoreRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3RestoreRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3RestoreRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3RestoreRequest; // inherited from AWSMTLModel

	static new(): AWSS3RestoreRequest; // inherited from NSObject

	days: number;

	detail: string;

	glacierJobParameters: AWSS3GlacierJobParameters;

	outputLocation: AWSS3OutputLocation;

	selectParameters: AWSS3SelectParameters;

	tier: AWSS3Tier;

	types: AWSS3RestoreRequestType;
}

declare const enum AWSS3RestoreRequestType {

	Unknown = 0,

	Select = 1
}

declare class AWSS3RoutingRule extends AWSModel {

	static alloc(): AWSS3RoutingRule; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3RoutingRule; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3RoutingRule; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3RoutingRule; // inherited from AWSMTLModel

	static new(): AWSS3RoutingRule; // inherited from NSObject

	condition: AWSS3Condition;

	redirect: AWSS3Redirect;
}

declare class AWSS3Rule extends AWSModel {

	static alloc(): AWSS3Rule; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3Rule; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3Rule; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3Rule; // inherited from AWSMTLModel

	static new(): AWSS3Rule; // inherited from NSObject

	abortIncompleteMultipartUpload: AWSS3AbortIncompleteMultipartUpload;

	expiration: AWSS3LifecycleExpiration;

	identifier: string;

	noncurrentVersionExpiration: AWSS3NoncurrentVersionExpiration;

	noncurrentVersionTransition: AWSS3NoncurrentVersionTransition;

	prefix: string;

	status: AWSS3ExpirationStatus;

	transition: AWSS3Transition;
}

declare class AWSS3S3KeyFilter extends AWSModel {

	static alloc(): AWSS3S3KeyFilter; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3S3KeyFilter; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3S3KeyFilter; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3S3KeyFilter; // inherited from AWSMTLModel

	static new(): AWSS3S3KeyFilter; // inherited from NSObject

	filterRules: NSArray<AWSS3FilterRule>;
}

declare class AWSS3S3Location extends AWSModel {

	static alloc(): AWSS3S3Location; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3S3Location; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3S3Location; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3S3Location; // inherited from AWSMTLModel

	static new(): AWSS3S3Location; // inherited from NSObject

	accessControlList: NSArray<AWSS3Grant>;

	bucketName: string;

	cannedACL: AWSS3ObjectCannedACL;

	encryption: AWSS3Encryption;

	prefix: string;

	storageClass: AWSS3StorageClass;

	tagging: AWSS3Tagging;

	userMetadata: NSArray<AWSS3MetadataEntry>;
}

declare var AWSS3SDKVersion: string;

declare class AWSS3SSEKMS extends AWSModel {

	static alloc(): AWSS3SSEKMS; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3SSEKMS; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3SSEKMS; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3SSEKMS; // inherited from AWSMTLModel

	static new(): AWSS3SSEKMS; // inherited from NSObject

	keyId: string;
}

declare class AWSS3SSES3 extends AWSModel {

	static alloc(): AWSS3SSES3; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3SSES3; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3SSES3; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3SSES3; // inherited from AWSMTLModel

	static new(): AWSS3SSES3; // inherited from NSObject
}

declare class AWSS3SelectObjectContentEventStream extends AWSModel {

	static alloc(): AWSS3SelectObjectContentEventStream; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3SelectObjectContentEventStream; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3SelectObjectContentEventStream; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3SelectObjectContentEventStream; // inherited from AWSMTLModel

	static new(): AWSS3SelectObjectContentEventStream; // inherited from NSObject

	cont: AWSS3ContinuationEvent;

	end: AWSS3EndEvent;

	progress: AWSS3ProgressEvent;

	records: AWSS3RecordsEvent;

	stats: AWSS3StatsEvent;
}

declare class AWSS3SelectObjectContentOutput extends AWSModel {

	static alloc(): AWSS3SelectObjectContentOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3SelectObjectContentOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3SelectObjectContentOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3SelectObjectContentOutput; // inherited from AWSMTLModel

	static new(): AWSS3SelectObjectContentOutput; // inherited from NSObject

	payload: AWSS3SelectObjectContentEventStream;
}

declare class AWSS3SelectObjectContentRequest extends AWSRequest {

	static alloc(): AWSS3SelectObjectContentRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3SelectObjectContentRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3SelectObjectContentRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3SelectObjectContentRequest; // inherited from AWSMTLModel

	static new(): AWSS3SelectObjectContentRequest; // inherited from NSObject

	SSECustomerAlgorithm: string;

	SSECustomerKey: string;

	SSECustomerKeyMD5: string;

	bucket: string;

	expression: string;

	expressionType: AWSS3ExpressionType;

	inputSerialization: AWSS3InputSerialization;

	key: string;

	outputSerialization: AWSS3OutputSerialization;

	requestProgress: AWSS3RequestProgress;
}

declare class AWSS3SelectParameters extends AWSModel {

	static alloc(): AWSS3SelectParameters; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3SelectParameters; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3SelectParameters; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3SelectParameters; // inherited from AWSMTLModel

	static new(): AWSS3SelectParameters; // inherited from NSObject

	expression: string;

	expressionType: AWSS3ExpressionType;

	inputSerialization: AWSS3InputSerialization;

	outputSerialization: AWSS3OutputSerialization;
}

declare const enum AWSS3ServerSideEncryption {

	Unknown = 0,

	AES256 = 1,

	AwsKms = 2
}

declare class AWSS3ServerSideEncryptionByDefault extends AWSModel {

	static alloc(): AWSS3ServerSideEncryptionByDefault; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ServerSideEncryptionByDefault; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ServerSideEncryptionByDefault; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ServerSideEncryptionByDefault; // inherited from AWSMTLModel

	static new(): AWSS3ServerSideEncryptionByDefault; // inherited from NSObject

	KMSMasterKeyID: string;

	SSEAlgorithm: AWSS3ServerSideEncryption;
}

declare class AWSS3ServerSideEncryptionConfiguration extends AWSModel {

	static alloc(): AWSS3ServerSideEncryptionConfiguration; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ServerSideEncryptionConfiguration; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ServerSideEncryptionConfiguration; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ServerSideEncryptionConfiguration; // inherited from AWSMTLModel

	static new(): AWSS3ServerSideEncryptionConfiguration; // inherited from NSObject

	rules: NSArray<AWSS3ServerSideEncryptionRule>;
}

declare class AWSS3ServerSideEncryptionRule extends AWSModel {

	static alloc(): AWSS3ServerSideEncryptionRule; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3ServerSideEncryptionRule; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3ServerSideEncryptionRule; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3ServerSideEncryptionRule; // inherited from AWSMTLModel

	static new(): AWSS3ServerSideEncryptionRule; // inherited from NSObject

	applyServerSideEncryptionByDefault: AWSS3ServerSideEncryptionByDefault;
}

declare class AWSS3SourceSelectionCriteria extends AWSModel {

	static alloc(): AWSS3SourceSelectionCriteria; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3SourceSelectionCriteria; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3SourceSelectionCriteria; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3SourceSelectionCriteria; // inherited from AWSMTLModel

	static new(): AWSS3SourceSelectionCriteria; // inherited from NSObject

	sseKmsEncryptedObjects: AWSS3SseKmsEncryptedObjects;
}

declare class AWSS3SseKmsEncryptedObjects extends AWSModel {

	static alloc(): AWSS3SseKmsEncryptedObjects; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3SseKmsEncryptedObjects; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3SseKmsEncryptedObjects; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3SseKmsEncryptedObjects; // inherited from AWSMTLModel

	static new(): AWSS3SseKmsEncryptedObjects; // inherited from NSObject

	status: AWSS3SseKmsEncryptedObjectsStatus;
}

declare const enum AWSS3SseKmsEncryptedObjectsStatus {

	Unknown = 0,

	Enabled = 1,

	Disabled = 2
}

declare class AWSS3Stats extends AWSModel {

	static alloc(): AWSS3Stats; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3Stats; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3Stats; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3Stats; // inherited from AWSMTLModel

	static new(): AWSS3Stats; // inherited from NSObject

	bytesProcessed: number;

	bytesReturned: number;

	bytesScanned: number;
}

declare class AWSS3StatsEvent extends AWSModel {

	static alloc(): AWSS3StatsEvent; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3StatsEvent; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3StatsEvent; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3StatsEvent; // inherited from AWSMTLModel

	static new(): AWSS3StatsEvent; // inherited from NSObject

	details: AWSS3Stats;
}

declare const enum AWSS3StorageClass {

	Unknown = 0,

	Standard = 1,

	ReducedRedundancy = 2,

	StandardIa = 3,

	OnezoneIa = 4,

	IntelligentTiering = 5,

	Glacier = 6
}

declare class AWSS3StorageClassAnalysis extends AWSModel {

	static alloc(): AWSS3StorageClassAnalysis; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3StorageClassAnalysis; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3StorageClassAnalysis; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3StorageClassAnalysis; // inherited from AWSMTLModel

	static new(): AWSS3StorageClassAnalysis; // inherited from NSObject

	dataExport: AWSS3StorageClassAnalysisDataExport;
}

declare class AWSS3StorageClassAnalysisDataExport extends AWSModel {

	static alloc(): AWSS3StorageClassAnalysisDataExport; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3StorageClassAnalysisDataExport; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3StorageClassAnalysisDataExport; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3StorageClassAnalysisDataExport; // inherited from AWSMTLModel

	static new(): AWSS3StorageClassAnalysisDataExport; // inherited from NSObject

	destination: AWSS3AnalyticsExportDestination;

	outputSchemaVersion: AWSS3StorageClassAnalysisSchemaVersion;
}

declare const enum AWSS3StorageClassAnalysisSchemaVersion {

	Unknown = 0,

	V1 = 1
}

declare class AWSS3Tag extends AWSModel {

	static alloc(): AWSS3Tag; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3Tag; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3Tag; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3Tag; // inherited from AWSMTLModel

	static new(): AWSS3Tag; // inherited from NSObject

	key: string;

	value: string;
}

declare class AWSS3Tagging extends AWSModel {

	static alloc(): AWSS3Tagging; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3Tagging; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3Tagging; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3Tagging; // inherited from AWSMTLModel

	static new(): AWSS3Tagging; // inherited from NSObject

	tagSet: NSArray<AWSS3Tag>;
}

declare const enum AWSS3TaggingDirective {

	Unknown = 0,

	Copy = 1,

	Replace = 2
}

declare class AWSS3TargetGrant extends AWSModel {

	static alloc(): AWSS3TargetGrant; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3TargetGrant; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3TargetGrant; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3TargetGrant; // inherited from AWSMTLModel

	static new(): AWSS3TargetGrant; // inherited from NSObject

	grantee: AWSS3Grantee;

	permission: AWSS3BucketLogsPermission;
}

declare const enum AWSS3Tier {

	Unknown = 0,

	Standard = 1,

	Bulk = 2,

	Expedited = 3
}

declare class AWSS3TopicConfiguration extends AWSModel {

	static alloc(): AWSS3TopicConfiguration; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3TopicConfiguration; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3TopicConfiguration; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3TopicConfiguration; // inherited from AWSMTLModel

	static new(): AWSS3TopicConfiguration; // inherited from NSObject

	events: NSArray<string>;

	filter: AWSS3NotificationConfigurationFilter;

	identifier: string;

	topicArn: string;
}

declare class AWSS3TopicConfigurationDeprecated extends AWSModel {

	static alloc(): AWSS3TopicConfigurationDeprecated; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3TopicConfigurationDeprecated; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3TopicConfigurationDeprecated; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3TopicConfigurationDeprecated; // inherited from AWSMTLModel

	static new(): AWSS3TopicConfigurationDeprecated; // inherited from NSObject

	event: AWSS3Event;

	events: NSArray<string>;

	identifier: string;

	topic: string;
}

declare class AWSS3TransferManager extends AWSService {

	static S3TransferManagerForKey(key: string): AWSS3TransferManager;

	static alloc(): AWSS3TransferManager; // inherited from NSObject

	static defaultS3TransferManager(): AWSS3TransferManager;

	static new(): AWSS3TransferManager; // inherited from NSObject

	static registerS3TransferManagerWithConfigurationForKey(configuration: AWSServiceConfiguration, key: string): void;

	static removeS3TransferManagerForKey(key: string): void;

	cancelAll(): AWSTask<any>;

	clearCache(): AWSTask<any>;

	download(downloadRequest: AWSS3TransferManagerDownloadRequest): AWSTask<any>;

	pauseAll(): AWSTask<any>;

	resumeAll(block: (p1: AWSRequest) => void): AWSTask<any>;

	upload(uploadRequest: AWSS3TransferManagerUploadRequest): AWSTask<any>;
}

declare class AWSS3TransferManagerDownloadOutput extends AWSS3GetObjectOutput {

	static alloc(): AWSS3TransferManagerDownloadOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3TransferManagerDownloadOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3TransferManagerDownloadOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3TransferManagerDownloadOutput; // inherited from AWSMTLModel

	static new(): AWSS3TransferManagerDownloadOutput; // inherited from NSObject
}

declare class AWSS3TransferManagerDownloadRequest extends AWSS3GetObjectRequest {

	static alloc(): AWSS3TransferManagerDownloadRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3TransferManagerDownloadRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3TransferManagerDownloadRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3TransferManagerDownloadRequest; // inherited from AWSMTLModel

	static new(): AWSS3TransferManagerDownloadRequest; // inherited from NSObject

	readonly state: AWSS3TransferManagerRequestState;
}

declare var AWSS3TransferManagerErrorDomain: string;

declare const enum AWSS3TransferManagerErrorType {

	Unknown = 0,

	Cancelled = 1,

	Paused = 2,

	Completed = 3,

	InternalInConsistency = 4,

	MissingRequiredParameters = 5,

	InvalidParameters = 6
}

declare const enum AWSS3TransferManagerRequestState {

	NotStarted = 0,

	Running = 1,

	Paused = 2,

	Canceling = 3,

	Completed = 4
}

declare class AWSS3TransferManagerUploadOutput extends AWSS3PutObjectOutput {

	static alloc(): AWSS3TransferManagerUploadOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3TransferManagerUploadOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3TransferManagerUploadOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3TransferManagerUploadOutput; // inherited from AWSMTLModel

	static new(): AWSS3TransferManagerUploadOutput; // inherited from NSObject
}

declare class AWSS3TransferManagerUploadRequest extends AWSS3PutObjectRequest {

	static alloc(): AWSS3TransferManagerUploadRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3TransferManagerUploadRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3TransferManagerUploadRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3TransferManagerUploadRequest; // inherited from AWSMTLModel

	static new(): AWSS3TransferManagerUploadRequest; // inherited from NSObject

	body: NSURL;

	readonly state: AWSS3TransferManagerRequestState;
}

declare class AWSS3TransferUtility extends AWSService {

	static S3TransferUtilityForKey(key: string): AWSS3TransferUtility;

	static alloc(): AWSS3TransferUtility; // inherited from NSObject

	static defaultS3TransferUtility(): AWSS3TransferUtility;

	static interceptApplicationHandleEventsForBackgroundURLSessionCompletionHandler(application: UIApplication, identifier: string, completionHandler: () => void): void;

	static new(): AWSS3TransferUtility; // inherited from NSObject

	static registerS3TransferUtilityWithConfigurationForKey(configuration: AWSServiceConfiguration, key: string): void;

	static registerS3TransferUtilityWithConfigurationForKeyCompletionHandler(configuration: AWSServiceConfiguration, key: string, completionHandler: (p1: NSError) => void): void;

	static registerS3TransferUtilityWithConfigurationTransferUtilityConfigurationForKey(configuration: AWSServiceConfiguration, transferUtilityConfiguration: AWSS3TransferUtilityConfiguration, key: string): void;

	static registerS3TransferUtilityWithConfigurationTransferUtilityConfigurationForKeyCompletionHandler(configuration: AWSServiceConfiguration, transferUtilityConfiguration: AWSS3TransferUtilityConfiguration, key: string, completionHandler: (p1: NSError) => void): void;

	static removeS3TransferUtilityForKey(key: string): void;

	readonly configuration: AWSServiceConfiguration;

	downloadDataForKeyExpressionCompletionHandler(key: string, expression: AWSS3TransferUtilityDownloadExpression, completionHandler: (p1: AWSS3TransferUtilityDownloadTask, p2: NSURL, p3: NSData, p4: NSError) => void): AWSTask<AWSS3TransferUtilityDownloadTask>;

	downloadDataFromBucketKeyExpressionCompletionHandler(bucket: string, key: string, expression: AWSS3TransferUtilityDownloadExpression, completionHandler: (p1: AWSS3TransferUtilityDownloadTask, p2: NSURL, p3: NSData, p4: NSError) => void): AWSTask<AWSS3TransferUtilityDownloadTask>;

	downloadToURLBucketKeyExpressionCompletionHandler(fileURL: NSURL, bucket: string, key: string, expression: AWSS3TransferUtilityDownloadExpression, completionHandler: (p1: AWSS3TransferUtilityDownloadTask, p2: NSURL, p3: NSData, p4: NSError) => void): AWSTask<AWSS3TransferUtilityDownloadTask>;

	downloadToURLKeyExpressionCompletionHandler(fileURL: NSURL, key: string, expression: AWSS3TransferUtilityDownloadExpression, completionHandler: (p1: AWSS3TransferUtilityDownloadTask, p2: NSURL, p3: NSData, p4: NSError) => void): AWSTask<AWSS3TransferUtilityDownloadTask>;

	enumerateToAssignBlocksForUploadTaskDownloadTask(uploadBlocksAssigner: (p1: AWSS3TransferUtilityUploadTask, p2: interop.Pointer | interop.Reference<(p1: AWSS3TransferUtilityTask, p2: NSProgress) => void>, p3: interop.Pointer | interop.Reference<(p1: AWSS3TransferUtilityUploadTask, p2: NSError) => void>) => void, downloadBlocksAssigner: (p1: AWSS3TransferUtilityDownloadTask, p2: interop.Pointer | interop.Reference<(p1: AWSS3TransferUtilityTask, p2: NSProgress) => void>, p3: interop.Pointer | interop.Reference<(p1: AWSS3TransferUtilityDownloadTask, p2: NSURL, p3: NSData, p4: NSError) => void>) => void): void;

	enumerateToAssignBlocksForUploadTaskMultiPartUploadBlocksAssignerDownloadBlocksAssigner(uploadBlocksAssigner: (p1: AWSS3TransferUtilityUploadTask, p2: interop.Pointer | interop.Reference<(p1: AWSS3TransferUtilityTask, p2: NSProgress) => void>, p3: interop.Pointer | interop.Reference<(p1: AWSS3TransferUtilityUploadTask, p2: NSError) => void>) => void, multiPartUploadBlocksAssigner: (p1: AWSS3TransferUtilityMultiPartUploadTask, p2: interop.Pointer | interop.Reference<(p1: AWSS3TransferUtilityMultiPartUploadTask, p2: NSProgress) => void>, p3: interop.Pointer | interop.Reference<(p1: AWSS3TransferUtilityMultiPartUploadTask, p2: NSError) => void>) => void, downloadBlocksAssigner: (p1: AWSS3TransferUtilityDownloadTask, p2: interop.Pointer | interop.Reference<(p1: AWSS3TransferUtilityTask, p2: NSProgress) => void>, p3: interop.Pointer | interop.Reference<(p1: AWSS3TransferUtilityDownloadTask, p2: NSURL, p3: NSData, p4: NSError) => void>) => void): void;

	getAllTasks(): AWSTask<NSArray<AWSS3TransferUtilityTask>>;

	getDownloadTasks(): AWSTask<NSArray<AWSS3TransferUtilityDownloadTask>>;

	getMultiPartUploadTasks(): AWSTask<NSArray<AWSS3TransferUtilityMultiPartUploadTask>>;

	getUploadTasks(): AWSTask<NSArray<AWSS3TransferUtilityUploadTask>>;

	uploadDataBucketKeyContentTypeExpressionCompletionHandler(data: NSData, bucket: string, key: string, contentType: string, expression: AWSS3TransferUtilityUploadExpression, completionHandler: (p1: AWSS3TransferUtilityUploadTask, p2: NSError) => void): AWSTask<AWSS3TransferUtilityUploadTask>;

	uploadDataKeyContentTypeExpressionCompletionHandler(data: NSData, key: string, contentType: string, expression: AWSS3TransferUtilityUploadExpression, completionHandler: (p1: AWSS3TransferUtilityUploadTask, p2: NSError) => void): AWSTask<AWSS3TransferUtilityUploadTask>;

	uploadDataUsingMultiPartBucketKeyContentTypeExpressionCompletionHandler(data: NSData, bucket: string, key: string, contentType: string, expression: AWSS3TransferUtilityMultiPartUploadExpression, completionHandler: (p1: AWSS3TransferUtilityMultiPartUploadTask, p2: NSError) => void): AWSTask<AWSS3TransferUtilityMultiPartUploadTask>;

	uploadDataUsingMultiPartKeyContentTypeExpressionCompletionHandler(data: NSData, key: string, contentType: string, expression: AWSS3TransferUtilityMultiPartUploadExpression, completionHandler: (p1: AWSS3TransferUtilityMultiPartUploadTask, p2: NSError) => void): AWSTask<AWSS3TransferUtilityMultiPartUploadTask>;

	uploadFileBucketKeyContentTypeExpressionCompletionHandler(fileURL: NSURL, bucket: string, key: string, contentType: string, expression: AWSS3TransferUtilityUploadExpression, completionHandler: (p1: AWSS3TransferUtilityUploadTask, p2: NSError) => void): AWSTask<AWSS3TransferUtilityUploadTask>;

	uploadFileKeyContentTypeExpressionCompletionHandler(fileURL: NSURL, key: string, contentType: string, expression: AWSS3TransferUtilityUploadExpression, completionHandler: (p1: AWSS3TransferUtilityUploadTask, p2: NSError) => void): AWSTask<AWSS3TransferUtilityUploadTask>;

	uploadFileUsingMultiPartBucketKeyContentTypeExpressionCompletionHandler(fileURL: NSURL, bucket: string, key: string, contentType: string, expression: AWSS3TransferUtilityMultiPartUploadExpression, completionHandler: (p1: AWSS3TransferUtilityMultiPartUploadTask, p2: NSError) => void): AWSTask<AWSS3TransferUtilityMultiPartUploadTask>;

	uploadFileUsingMultiPartKeyContentTypeExpressionCompletionHandler(fileURL: NSURL, key: string, contentType: string, expression: AWSS3TransferUtilityMultiPartUploadExpression, completionHandler: (p1: AWSS3TransferUtilityMultiPartUploadTask, p2: NSError) => void): AWSTask<AWSS3TransferUtilityMultiPartUploadTask>;
}

declare class AWSS3TransferUtilityConfiguration extends NSObject implements NSCopying {

	static alloc(): AWSS3TransferUtilityConfiguration; // inherited from NSObject

	static new(): AWSS3TransferUtilityConfiguration; // inherited from NSObject

	accelerateModeEnabled: boolean;

	bucket: string;

	multiPartConcurrencyLimit: number;

	retryLimit: number;

	timeoutIntervalForResource: number;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class AWSS3TransferUtilityDatabaseHelper extends NSObject {

	static alloc(): AWSS3TransferUtilityDatabaseHelper; // inherited from NSObject

	static new(): AWSS3TransferUtilityDatabaseHelper; // inherited from NSObject
}

declare class AWSS3TransferUtilityDownloadExpression extends AWSS3TransferUtilityExpression {

	static alloc(): AWSS3TransferUtilityDownloadExpression; // inherited from NSObject

	static new(): AWSS3TransferUtilityDownloadExpression; // inherited from NSObject
}

declare class AWSS3TransferUtilityDownloadTask extends AWSS3TransferUtilityTask {

	static alloc(): AWSS3TransferUtilityDownloadTask; // inherited from NSObject

	static new(): AWSS3TransferUtilityDownloadTask; // inherited from NSObject

	setCompletionHandler(completionHandler: (p1: AWSS3TransferUtilityDownloadTask, p2: NSURL, p3: NSData, p4: NSError) => void): void;

	setProgressBlock(progressBlock: (p1: AWSS3TransferUtilityTask, p2: NSProgress) => void): void;
}

declare var AWSS3TransferUtilityErrorDomain: string;

declare const enum AWSS3TransferUtilityErrorType {

	Unknown = 0,

	Redirection = 1,

	ClientError = 2,

	ServerError = 3,

	LocalFileNotFound = 4
}

declare class AWSS3TransferUtilityExpression extends NSObject {

	static alloc(): AWSS3TransferUtilityExpression; // inherited from NSObject

	static new(): AWSS3TransferUtilityExpression; // inherited from NSObject

	progressBlock: (p1: AWSS3TransferUtilityTask, p2: NSProgress) => void;

	readonly requestHeaders: NSDictionary<string, string>;

	readonly requestParameters: NSDictionary<string, string>;

	setValueForRequestHeader(value: string, requestHeader: string): void;

	setValueForRequestParameter(value: string, requestParameter: string): void;
}

declare class AWSS3TransferUtilityMultiPartUploadExpression extends NSObject {

	static alloc(): AWSS3TransferUtilityMultiPartUploadExpression; // inherited from NSObject

	static new(): AWSS3TransferUtilityMultiPartUploadExpression; // inherited from NSObject

	progressBlock: (p1: AWSS3TransferUtilityMultiPartUploadTask, p2: NSProgress) => void;

	readonly requestHeaders: NSDictionary<string, string>;

	readonly requestParameters: NSDictionary<string, string>;

	setValueForRequestHeader(value: string, requestHeader: string): void;

	setValueForRequestParameter(value: string, requestParameter: string): void;
}

declare class AWSS3TransferUtilityMultiPartUploadTask extends NSObject {

	static alloc(): AWSS3TransferUtilityMultiPartUploadTask; // inherited from NSObject

	static new(): AWSS3TransferUtilityMultiPartUploadTask; // inherited from NSObject

	readonly bucket: string;

	readonly key: string;

	readonly progress: NSProgress;

	readonly status: AWSS3TransferUtilityTransferStatusType;

	readonly transferID: string;

	cancel(): void;

	resume(): void;

	setCompletionHandler(completionHandler: (p1: AWSS3TransferUtilityMultiPartUploadTask, p2: NSError) => void): void;

	setProgressBlock(progressBlock: (p1: AWSS3TransferUtilityMultiPartUploadTask, p2: NSProgress) => void): void;

	suspend(): void;
}

declare class AWSS3TransferUtilityTask extends NSObject {

	static alloc(): AWSS3TransferUtilityTask; // inherited from NSObject

	static new(): AWSS3TransferUtilityTask; // inherited from NSObject

	readonly bucket: string;

	readonly key: string;

	readonly progress: NSProgress;

	readonly request: NSURLRequest;

	readonly response: NSHTTPURLResponse;

	readonly sessionTask: NSURLSessionTask;

	readonly status: AWSS3TransferUtilityTransferStatusType;

	readonly taskIdentifier: number;

	readonly transferID: string;

	cancel(): void;

	resume(): void;

	suspend(): void;
}

declare const enum AWSS3TransferUtilityTransferStatusType {

	Unknown = 0,

	InProgress = 1,

	Paused = 2,

	Completed = 3,

	Waiting = 4,

	Error = 5,

	Cancelled = 6
}

declare var AWSS3TransferUtilityURLSessionDidBecomeInvalidNotification: string;

declare class AWSS3TransferUtilityUploadExpression extends AWSS3TransferUtilityExpression {

	static alloc(): AWSS3TransferUtilityUploadExpression; // inherited from NSObject

	static new(): AWSS3TransferUtilityUploadExpression; // inherited from NSObject

	contentMD5: string;
}

declare class AWSS3TransferUtilityUploadSubTask extends NSObject {

	static alloc(): AWSS3TransferUtilityUploadSubTask; // inherited from NSObject

	static new(): AWSS3TransferUtilityUploadSubTask; // inherited from NSObject
}

declare class AWSS3TransferUtilityUploadTask extends AWSS3TransferUtilityTask {

	static alloc(): AWSS3TransferUtilityUploadTask; // inherited from NSObject

	static new(): AWSS3TransferUtilityUploadTask; // inherited from NSObject

	setCompletionHandler(completionHandler: (p1: AWSS3TransferUtilityUploadTask, p2: NSError) => void): void;

	setProgressBlock(progressBlock: (p1: AWSS3TransferUtilityTask, p2: NSProgress) => void): void;
}

declare class AWSS3Transition extends AWSModel {

	static alloc(): AWSS3Transition; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3Transition; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3Transition; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3Transition; // inherited from AWSMTLModel

	static new(): AWSS3Transition; // inherited from NSObject

	date: Date;

	days: number;

	storageClass: AWSS3TransitionStorageClass;
}

declare const enum AWSS3TransitionStorageClass {

	Unknown = 0,

	Glacier = 1,

	StandardIa = 2,

	OnezoneIa = 3,

	IntelligentTiering = 4
}

declare const enum AWSS3Types {

	Unknown = 0,

	CanonicalUser = 1,

	AmazonCustomerByEmail = 2,

	Group = 3
}

declare class AWSS3UploadPartCopyOutput extends AWSModel {

	static alloc(): AWSS3UploadPartCopyOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3UploadPartCopyOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3UploadPartCopyOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3UploadPartCopyOutput; // inherited from AWSMTLModel

	static new(): AWSS3UploadPartCopyOutput; // inherited from NSObject

	SSECustomerAlgorithm: string;

	SSECustomerKeyMD5: string;

	SSEKMSKeyId: string;

	replicatePartResult: AWSS3ReplicatePartResult;

	replicateSourceVersionId: string;

	requestCharged: AWSS3RequestCharged;

	serverSideEncryption: AWSS3ServerSideEncryption;
}

declare class AWSS3UploadPartCopyRequest extends AWSRequest {

	static alloc(): AWSS3UploadPartCopyRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3UploadPartCopyRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3UploadPartCopyRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3UploadPartCopyRequest; // inherited from AWSMTLModel

	static new(): AWSS3UploadPartCopyRequest; // inherited from NSObject

	SSECustomerAlgorithm: string;

	SSECustomerKey: string;

	SSECustomerKeyMD5: string;

	bucket: string;

	key: string;

	partNumber: number;

	replicateSource: string;

	replicateSourceIfMatch: string;

	replicateSourceIfModifiedSince: Date;

	replicateSourceIfNoneMatch: string;

	replicateSourceIfUnmodifiedSince: Date;

	replicateSourceRange: string;

	replicateSourceSSECustomerAlgorithm: string;

	replicateSourceSSECustomerKey: string;

	replicateSourceSSECustomerKeyMD5: string;

	requestPayer: AWSS3RequestPayer;

	uploadId: string;
}

declare class AWSS3UploadPartOutput extends AWSModel {

	static alloc(): AWSS3UploadPartOutput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3UploadPartOutput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3UploadPartOutput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3UploadPartOutput; // inherited from AWSMTLModel

	static new(): AWSS3UploadPartOutput; // inherited from NSObject

	ETag: string;

	SSECustomerAlgorithm: string;

	SSECustomerKeyMD5: string;

	SSEKMSKeyId: string;

	requestCharged: AWSS3RequestCharged;

	serverSideEncryption: AWSS3ServerSideEncryption;
}

declare class AWSS3UploadPartRequest extends AWSRequest {

	static alloc(): AWSS3UploadPartRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3UploadPartRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3UploadPartRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3UploadPartRequest; // inherited from AWSMTLModel

	static new(): AWSS3UploadPartRequest; // inherited from NSObject

	SSECustomerAlgorithm: string;

	SSECustomerKey: string;

	SSECustomerKeyMD5: string;

	body: any;

	bucket: string;

	contentLength: number;

	contentMD5: string;

	key: string;

	partNumber: number;

	requestPayer: AWSS3RequestPayer;

	uploadId: string;
}

declare var AWSS3VersionNumber: number;

declare var AWSS3VersionNumberVar: number;

declare var AWSS3VersionString: interop.Reference<number>;

declare var AWSS3VersionStringVar: interop.Reference<number>;

declare class AWSS3VersioningConfiguration extends AWSModel {

	static alloc(): AWSS3VersioningConfiguration; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3VersioningConfiguration; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3VersioningConfiguration; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3VersioningConfiguration; // inherited from AWSMTLModel

	static new(): AWSS3VersioningConfiguration; // inherited from NSObject

	MFADelete: AWSS3MFADelete;

	status: AWSS3BucketVersioningStatus;
}

declare class AWSS3WebsiteConfiguration extends AWSModel {

	static alloc(): AWSS3WebsiteConfiguration; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSS3WebsiteConfiguration; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSS3WebsiteConfiguration; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSS3WebsiteConfiguration; // inherited from AWSMTLModel

	static new(): AWSS3WebsiteConfiguration; // inherited from NSObject

	errorDocument: AWSS3ErrorDocument;

	indexDocument: AWSS3IndexDocument;

	redirectAllRequestsTo: AWSS3RedirectAllRequestsTo;

	routingRules: NSArray<AWSS3RoutingRule>;
}
