import { EventData, Page, Observable, View } from '@nativescript/core';
import { DemoSharedNativescriptAccelerometer } from '@demo/shared';
import { AccelerometerData } from '@triniwiz/nativescript-accelerometer';

import { ShakeDetector } from './shake-detector';

const context = new Observable();
let shakeView: View;
const shakeDetector = new ShakeDetector(() => {
	shakeView.opacity = 1;
	shakeView.scaleX = 1;
	shakeView.scaleY = 1;
	shakeView.animate({
		duration: 1000,
		opacity: 0,
		scale: { x: 2, y: 2 },
		curve: 'easeOut',
	});
});

function update(data: AccelerometerData) {
	context.set('x', data.x.toFixed(2));
	context.set('y', data.y.toFixed(2));
	context.set('z', data.z.toFixed(2));

	shakeDetector.onSensorData(data);
}

const demoShared: DemoSharedNativescriptAccelerometer = new DemoSharedNativescriptAccelerometer();

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
	// Get the event sender
	const page = <Page>args.object;
	page.bindingContext = context;
	shakeView = page.getViewById('shake-view');
	console.log('shake-view', shakeView);
	try {
		demoShared.start(update);
	} catch (e) {
		alert('Error: ' + e.message);
	}

	context.set('isListening', demoShared.isAccelerometerListening());
}

export function navigatingFrom(args: EventData) {
	demoShared.stop();
}

export function toggleUpdates() {
	try {
		demoShared.toggleUpdates();
	} catch (e) {
		alert('Error: ' + e.message);
	}

	context.set('isListening', demoShared.isAccelerometerListening());
}
