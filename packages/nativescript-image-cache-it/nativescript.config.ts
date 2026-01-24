import { NativeScriptConfig } from '@nativescript/core';

export default {
	ios: {
		SPMPackages: [
			{
				name: 'SDWebImage',
				libs: ['SDWebImage'],
				repositoryURL: 'https://github.com/SDWebImage/SDWebImage.git',
				version: '5.21.2',
			},
		],
	},
} as NativeScriptConfig;
