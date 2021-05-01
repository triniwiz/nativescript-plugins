import { DemoSharedBase } from '../utils';
import { FFmpeg } from '@triniwiz/nativescript-ffmpeg';
import { File, path, knownFolders, Folder } from '@nativescript/core';
export class DemoSharedNativescriptFfmpeg extends DemoSharedBase {
	src: string;
	constructor() {
		super();
		FFmpeg.enableStatisticsCallback(function (stats) {
			console.dir(stats);
		});
	}

	convertToMp4() {
		const file = path.join(knownFolders.currentApp().path, 'assets/big_buck_bunny.mp4');
		const newPath = path.join(knownFolders.documents().path, 'assets');
		Folder.fromPath(newPath); // creates new directory;
		const newFile = path.join(knownFolders.documents().path, 'assets/big_buck_bunny.mp4');
		if (File.exists(newFile)) {
			console.log('oldFile size', File.fromPath(file).size, 'newFile size', File.fromPath(newFile).size);
			//this.set('src', newFile);
			this.getFileInfo();
			File.fromPath(newFile).removeSync();
		}

		FFmpeg.resetStatistics();
		FFmpeg.execute(`-i ${file} -r 15 -c:v mpeg4 ${newFile}`)
			.then((success) => {
				console.log('success', success.arguments);
				this.set('src', newFile);
				this.getFileInfo();
			})
			.catch((error) => {
				console.error(error);
			});
	}

	getFileInfo() {
		const newFile = path.join(knownFolders.documents().path, 'assets/big_buck_bunny.mp4');
		FFmpeg.getMediaInformation(newFile)
			.then((info) => {
				console.log(
					info.tags
				);
			})
			.catch((error) => {
				console.error(error.message);
			});
	}
}
