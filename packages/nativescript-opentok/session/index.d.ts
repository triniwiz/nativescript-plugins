import { TNSStreamVideoType } from '../common';
import { Observable } from '@nativescript/core';
export declare class TNSConnection {
	readonly connectionId: string;
	readonly creationTime: Date;
	readonly data: string;
	readonly android: any;
	readonly ios: any;
}

export declare class TNSStream {
	readonly android: any;
	readonly ios: any;
	readonly connection: TNSConnection;
	readonly creationTime: Date;
	readonly hasAudio: boolean;
	readonly hasVideo: boolean;
	readonly name: string;

	readonly session: TNSSession;

	readonly streamId: string;

	readonly videoDimensions: { width: number; height: number };

	readonly videoType: TNSStreamVideoType;
}

export declare class TNSSessionCapabilities {
	readonly android: any;
	readonly ios: any;
	readonly canForceMute: boolean;

	readonly canPublish: boolean;

	readonly canSubscribe: boolean;
}

export declare class TNSSession extends Observable {
	static initSession(apiKey: string, sessionId: string, settings?: TNSSessionSettings): TNSSession;

	readonly sessionId: string;
	connect(token: string);
	disconnect();

	forceMuteAll(excludedStreams: TNSStream[]);

	forceMuteStream(stream: TNSStream);

	readonly capabilities: TNSSessionCapabilities;

	publish(publisher: TNSPublisher);

	unpublish(publisher: TNSPublisher);

	subscribe(subscriber: TNSSubscriber);

	unsubscribe(subscriber: TNSSubscriber);

	readonly android: any;
	readonly ios: any;
}
