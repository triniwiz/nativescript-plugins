import { DemoSharedBase } from '../utils';
import { VideoRecorder } from '@triniwiz/nativescript-videorecorder';
import { CameraPosition, CameraPositionType } from '@triniwiz/nativescript-videorecorder/common';

export class DemoSharedNativescriptVideorecorder extends DemoSharedBase {
	vr: VideoRecorder;
	error: string;
	selectedVideo: string;
	position: CameraPositionType;
	constructor() {
		super();
		this.vr = new VideoRecorder({ hd: true, position: CameraPosition.NONE, saveToGallery: true });
	}

	videoplayerLoaded() {
		console.log('videoplayerLoaded');
	}

	videoFinished() {
		console.log('videoFinished');
	}

	recordVideo() {
		this.vr
			.record()
			.then((data) => {
				if (data && data.file) {
					this.set('selectedVideo', data.file);
				}
			})
			.catch((err) => {
				console.log(err);
				this.error = err.event || err.message;
			});
	}

	toggleCamera() {
		this.vr.options.position = this.vr.options.position === CameraPosition.BACK ? CameraPosition.FRONT : this.vr.options.position === CameraPosition.FRONT ? CameraPosition.NONE : CameraPosition.BACK;
		this.position = this.vr.options.position;
	}
}
