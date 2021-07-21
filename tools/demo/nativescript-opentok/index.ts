import { DemoSharedBase } from '../utils';
import { TNSSession, TNSPublisher, TNSSubscriber } from '@triniwiz/nativescript-opentok';
import { Frame, GridLayout } from '@nativescript/core';

export class DemoSharedNativescriptOpentok extends DemoSharedBase {
	session: TNSSession;
	publisher: TNSPublisher;
	subscriber: TNSSubscriber;
	isEnabled = false;
	init() {
		this.session = TNSSession.initSession('47283564', '2_MX40NzI4MzU2NH5-MTYyNjg0NzYzNTY4M35OQjVURUtMSXBpY2FTak4yTGs2eEQvV1F-fg');
		this.set('isEnabled', true);
	}
	initPublisher() {
		const init = () => {
			this.publisher = TNSPublisher.initPublisher('publisher');
			this.publisher.on('streamCreated', (args: any) => {
				this.subscriber = TNSSubscriber.initSubscriber(args.stream);
				if (!this.subscriber?.view?.parent) {
					const subContainer = Frame.topmost().getViewById('sub') as GridLayout;
					subContainer.addChild(this.subscriber.view);
					this.session.subscribe(this.subscriber);
				}
			});
			if (!this.publisher?.view?.parent) {
				const pubContainer = Frame.topmost().getViewById('pub') as GridLayout;
				pubContainer.addChild(this.publisher.view);
				this.session.publish(this.publisher);
			}
		};
		if (!this.publisher) {
			const connect = () => {
				this.session.on('connected', (args) => {
					init();
				});
				this.session.connect('T1==cGFydG5lcl9pZD00NzI4MzU2NCZzaWc9OWJhOTZkNmQ1ZDBlOTExZjM1NmRlMTI3MmQyYzdjZTQ5ZGMwZmIzNDpzZXNzaW9uX2lkPTJfTVg0ME56STRNelUyTkg1LU1UWXlOamcwTnpZek5UWTRNMzVPUWpWVVJVdE1TWEJwWTJGVGFrNHlUR3MyZUVRdlYxRi1mZyZjcmVhdGVfdGltZT0xNjI2ODUyNDMwJm5vbmNlPTAuMDM1OTIzOTk3NDQ2MDg2NTQmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTYyNzQ1NzIyOSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==');
			};
			if (global.isAndroid) {
				const permissions = require('nativescript-permissions');
				if (android.os.Build.VERSION.SDK_INT >= 23) {
					const perms = [android.Manifest.permission.CAMERA, android.Manifest.permission.RECORD_AUDIO];
					permissions.requestPermission(perms).then((args) => {
						connect();
					});
				} else {
					connect();
				}
			} else {
				connect();
			}
		}
	}
}
