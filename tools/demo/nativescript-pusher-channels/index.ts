import { DemoSharedBase } from '../utils';
import { TNSPusher, TNSAuthorizer } from '@triniwiz/nativescript-pusher-channels';
import { Http } from '@nativescript/core';
// change to your ip
const HOST_IP = '192.168.0.4';
export class DemoSharedNativescriptPusherChannels extends DemoSharedBase {
	pusher: TNSPusher;
	authorizer: TNSAuthorizer;

	constructor() {
		super();
		this.authorizer = new TNSAuthorizer(this.authorizerCallback.bind(this));
		// this.pusher = new TNSPusher('APP_KEY', {
		// 	authorizer: this.authorizer,
		// 	cluster: 'APP_CLUSTER',
		// });
		this.pusher = new TNSPusher('APP_KEY', {
			authEndpoint: `http://${HOST_IP}:5000/pusher/auth`,
			cluster: 'APP_CLUSTER',
			auth: {
				params: {
					first: 'Osei',
					last: 'Fortune',
				},
				headers: {
					place: 'Trinidad',
				},
			},
		});
		this.pusher.connection.bind('state_change', (states) => {
			console.log('Channels current state is ' + states.current);
			const channel = this.pusher.subscribe('private-my-channel');
			channel.bind('message', (event) => {
				console.log('private-my-channel', 'message', event);
			});
		});
		this.pusher.connect();
	}

	authorizerCallback(channelName: string, socketID: string) {
		Http.request({
			method: 'POST',
			url: `http://${HOST_IP}:5000/pusher/auth`,
			headers: {
				'Content-Type': 'application/json',
			},
			content: JSON.stringify({
				channel_name: channelName,
				socket_id: socketID,
				userName: 'triniwiz',
			}),
		})
			.then((result) => {
				this.authorizer.completed(result.content.toString());
			})
			.catch((error) => {
				console.error(error);
				this.authorizer.completed(null, error.message);
			});
	}
}
