module.exports = {
	message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
	pageSize: 32,
	scripts: {
		default: 'nps-i',
		nx: {
			script: 'nx',
			description: 'Execute any command with the @nrwl/cli',
		},
		format: {
			script: 'nx format:write',
			description: 'Format source code of the entire workspace (auto-run on precommit hook)',
		},
		'🔧': {
			script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
			description: '_____________  Apps to demo plugins with  _____________',
		},
		// demos
		apps: {
			'...Vanilla...': {
				script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
				description: ` 🔻 Vanilla`,
			},
			demo: {
				clean: {
					script: 'nx run demo:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo:android',
					description: '⚆  Run Android  🤖',
				},
			},
			'...Angular...': {
				script: `npx cowsay "Test all the Angles!"`,
				description: ` 🔻 Angular`,
			},
			'demo-angular': {
				clean: {
					script: 'nx run demo-angular:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo-angular:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo-angular:android',
					description: '⚆  Run Android  🤖',
				},
			},
			'...React...': {
				script: `npx cowsay "Nothing wrong with React, either ⚛️"`,
				description: ` 🔻 React`,
			},
			'demo-react': {
				clean: {
					script: 'nx run demo-react:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo-react:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo-react:android',
					description: '⚆  Run Android  🤖',
				},
			},
			'...Vue...': {
				script: `npx cowsay "What a nice Vue"`,
				description: ` 🔻 Vue`,
			},
			'demo-vue': {
				clean: {
					script: 'nx run demo-vue:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo-vue:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo-vue:android',
					description: '⚆  Run Android  🤖',
				},
			},
		},
		'⚙️': {
			script: `npx cowsay "@triniwiz/* packages will keep your ⚙️ cranking"`,
			description: '_____________  @triniwiz/*  _____________',
		},
		// packages
		// build output is always in dist/packages
		'@triniwiz': {
			// @triniwiz/nativescript-couchbase
			'nativescript-couchbase': {
				build: {
					script: 'nx run nativescript-couchbase:build.all',
					description: '@triniwiz/nativescript-couchbase: Build',
				},
			},
			// @triniwiz/nativescript-stripe
			'nativescript-stripe': {
				build: {
					script: 'nx run nativescript-stripe:build.all',
					description: '@triniwiz/nativescript-stripe: Build',
				},
			},
			// @triniwiz/nativescript-toasty
			'nativescript-toasty': {
				build: {
					script: 'nx run nativescript-toasty:build.all',
					description: '@triniwiz/nativescript-toasty: Build',
				},
			},
			// @triniwiz/nativescript-image-cache-it
			'nativescript-image-cache-it': {
				build: {
					script: 'nx run nativescript-image-cache-it:build.all',
					description: '@triniwiz/nativescript-image-cache-it: Build',
				},
			},
			// @triniwiz/nativescript-socketio
			'nativescript-socketio': {
				build: {
					script: 'nx run nativescript-socketio:build.all',
					description: '@triniwiz/nativescript-socketio: Build',
				},
			},
			// @triniwiz/nativescript-webrtc
			'nativescript-webrtc': {
				build: {
					script: 'nx run nativescript-webrtc:build.all',
					description: '@triniwiz/nativescript-webrtc: Build',
				},
			},
			// @triniwiz/nativescript-accordion
			'nativescript-accordion': {
				build: {
					script: 'nx run nativescript-accordion:build.all',
					description: '@triniwiz/nativescript-accordion: Build',
				},
			},
			// @triniwiz/nativescript-downloader
			'nativescript-downloader': {
				build: {
					script: 'nx run nativescript-downloader:build.all',
					description: '@triniwiz/nativescript-downloader: Build',
				},
			},
			// @triniwiz/nativescript-radar-io
			'nativescript-radar-io': {
				build: {
					script: 'nx run nativescript-radar-io:build.all',
					description: '@triniwiz/nativescript-radar-io: Build',
				},
			},
			// @triniwiz/nativescript-youtubeplayer
			'nativescript-youtubeplayer': {
				build: {
					script: 'nx run nativescript-youtubeplayer:build.all',
					description: '@triniwiz/nativescript-youtubeplayer: Build',
				},
			},
			// @triniwiz/nativescript-image-zoom
			'nativescript-image-zoom': {
				build: {
					script: 'nx run nativescript-image-zoom:build.all',
					description: '@triniwiz/nativescript-image-zoom: Build',
				},
			},
			// @triniwiz/nativescript-sse
			'nativescript-sse': {
				build: {
					script: 'nx run nativescript-sse:build.all',
					description: '@triniwiz/nativescript-sse: Build',
				},
			},
			// @triniwiz/nativescript-star-ratings
			'nativescript-star-ratings': {
				build: {
					script: 'nx run nativescript-star-ratings:build.all',
					description: '@triniwiz/nativescript-star-ratings: Build',
				},
			},
			// @triniwiz/nativescript-awesome-loaders
			'nativescript-awesome-loaders': {
				build: {
					script: 'nx run nativescript-awesome-loaders:build.all',
					description: '@triniwiz/nativescript-awesome-loaders: Build',
				},
			},
			// @triniwiz/nativescript-textdrawable
			'nativescript-textdrawable': {
				build: {
					script: 'nx run nativescript-textdrawable:build.all',
					description: '@triniwiz/nativescript-textdrawable: Build',
				},
			},
			// @triniwiz/nativescript-pubnub
			'nativescript-pubnub': {
				build: {
					script: 'nx run nativescript-pubnub:build.all',
					description: '@triniwiz/nativescript-pubnub: Build',
				},
			},
			// @triniwiz/nativescript-popup
			'nativescript-popup': {
				build: {
					script: 'nx run nativescript-popup:build.all',
					description: '@triniwiz/nativescript-popup: Build',
				},
			},
			// @triniwiz/nativescript-nested-scrollview
			'nativescript-nested-scrollview': {
				build: {
					script: 'nx run nativescript-nested-scrollview:build.all',
					description: '@triniwiz/nativescript-nested-scrollview: Build',
				},
			},
			// @triniwiz/nativescript-tooltip
			'nativescript-tooltip': {
				build: {
					script: 'nx run nativescript-tooltip:build.all',
					description: '@triniwiz/nativescript-tooltip: Build',
				},
			},
			// @triniwiz/nativescript-twitter
			'nativescript-twitter': {
				build: {
					script: 'nx run nativescript-twitter:build.all',
					description: '@triniwiz/nativescript-twitter: Build',
				},
			},
			// @triniwiz/nativescript-splashscreen
			'nativescript-splashscreen': {
				build: {
					script: 'nx run nativescript-splashscreen:build.all',
					description: '@triniwiz/nativescript-splashscreen: Build',
				},
			},
			// @triniwiz/nativescript-fancy-list-view
			'nativescript-fancy-list-view': {
				build: {
					script: 'nx run nativescript-fancy-list-view:build.all',
					description: '@triniwiz/nativescript-fancy-list-view: Build',
				},
			},
			// @triniwiz/nativescript-autocomplete
			'nativescript-autocomplete': {
				build: {
					script: 'nx run nativescript-autocomplete:build.all',
					description: '@triniwiz/nativescript-autocomplete: Build',
				},
			},
			// @triniwiz/nativescript-here
			'nativescript-here': {
				build: {
					script: 'nx run nativescript-here:build.all',
					description: '@triniwiz/nativescript-here: Build',
				},
			},
			// @triniwiz/nativescript-video-editor
			'nativescript-video-editor': {
				build: {
					script: 'nx run nativescript-video-editor:build.all',
					description: '@triniwiz/nativescript-video-editor: Build',
				},
			},
			// @triniwiz/nativescript-ffmpeg
			'nativescript-ffmpeg': {
				build: {
					script: 'nx run nativescript-ffmpeg:build.all',
					description: '@triniwiz/nativescript-ffmpeg: Build',
				},
			},
			// @triniwiz/nativescript-imageoptimize
			'nativescript-imageoptimize': {
				build: {
					script: 'nx run nativescript-imageoptimize:build.all',
					description: '@triniwiz/nativescript-imageoptimize: Build',
				},
			},
			// @triniwiz/nativescript-aws-sdk
			'nativescript-aws-sdk': {
				build: {
					script: 'nx run nativescript-aws-sdk:build.all',
					description: '@triniwiz/nativescript-aws-sdk: Build',
				},
			},
			// @triniwiz/nativescript-card-io
			'nativescript-card-io': {
				build: {
					script: 'nx run nativescript-card-io:build.all',
					description: '@triniwiz/nativescript-card-io: Build',
				},
			},
			// @triniwiz/nativescript-sinch
			'nativescript-sinch': {
				build: {
					script: 'nx run nativescript-sinch:build.all',
					description: '@triniwiz/nativescript-sinch: Build',
				},
			},
			// @triniwiz/nativescript-ddp-login
			'nativescript-ddp-login': {
				build: {
					script: 'nx run nativescript-ddp-login:build.all',
					description: '@triniwiz/nativescript-ddp-login: Build',
				},
			},
			// @triniwiz/nativescript-fancy-camera
			'nativescript-fancy-camera': {
				build: {
					script: 'nx run nativescript-fancy-camera:build.all',
					description: '@triniwiz/nativescript-fancy-camera: Build',
				},
			},
			// @triniwiz/nativescript-mongo-stitch-core
			'nativescript-mongo-stitch-core': {
				build: {
					script: 'nx run nativescript-mongo-stitch-core:build.all',
					description: '@triniwiz/nativescript-mongo-stitch-core: Build',
				},
			},
			// @triniwiz/nativescript-mongo-stitch-services-mongodb-remote
			'nativescript-mongo-stitch-services-mongodb-remote': {
				build: {
					script: 'nx run nativescript-mongo-stitch-services-mongodb-remote:build.all',
					description: '@triniwiz/nativescript-mongo-stitch-services-mongodb-remote: Build',
				},
			},
			// @triniwiz/nativescript-mongo-stitch-sdk
			'nativescript-mongo-stitch-sdk': {
				build: {
					script: 'nx run nativescript-mongo-stitch-sdk:build.all',
					description: '@triniwiz/nativescript-mongo-stitch-sdk: Build',
				},
			},
			// @triniwiz/nativescript-pusher-channels
			'nativescript-pusher-channels': {
				build: {
					script: 'nx run nativescript-pusher-channels:build.all',
					description: '@triniwiz/nativescript-pusher-channels: Build',
				},
			},
			// @triniwiz/nativescript-pusher-beams
			'nativescript-pusher-beams': {
				build: {
					script: 'nx run nativescript-pusher-beams:build.all',
					description: '@triniwiz/nativescript-pusher-beams: Build',
				},
			},
			// @triniwiz/nativescript-aws-sdk-s3
			'nativescript-aws-sdk-s3': {
				build: {
					script: 'nx run nativescript-aws-sdk-s3:build.all',
					description: '@triniwiz/nativescript-aws-sdk-s3: Build',
				},
			},
			// @triniwiz/nativescript-videorecorder
			'nativescript-videorecorder': {
				build: {
					script: 'nx run nativescript-videorecorder:build.all',
					description: '@triniwiz/nativescript-videorecorder: Build',
				},
			},
			// @triniwiz/nativescript-pager
			'nativescript-pager': {
				build: {
					script: 'nx run nativescript-pager:build.all',
					description: '@triniwiz/nativescript-pager: Build',
				},
			},
			// @triniwiz/nativescript-accelerometer
			'nativescript-accelerometer': {
				build: {
					script: 'nx run nativescript-accelerometer:build.all',
					description: '@triniwiz/nativescript-accelerometer: Build',
				},
			},
			// @triniwiz/nativescript-file-manager
			'nativescript-file-manager': {
				build: {
					script: 'nx run nativescript-file-manager:build.all',
					description: '@triniwiz/nativescript-file-manager: Build',
				},
			},
			// @triniwiz/nativescript-yogalayout
			'nativescript-yogalayout': {
				build: {
					script: 'nx run nativescript-yogalayout:build.all',
					description: '@triniwiz/nativescript-yogalayout: Build',
				},
			},
			// @triniwiz/nativescript-parsesdk
			'nativescript-parsesdk': {
				build: {
					script: 'nx run nativescript-parsesdk:build.all',
					description: '@triniwiz/nativescript-parsesdk: Build',
				},
			},
			// @triniwiz/nativescript-supabase
			'nativescript-supabase': {
				build: {
					script: 'nx run nativescript-supabase:build.all',
					description: '@triniwiz/nativescript-supabase: Build',
				},
			},
			// @triniwiz/nativescript-supabase-gotrue
			'nativescript-supabase-gotrue': {
				build: {
					script: 'nx run nativescript-supabase-gotrue:build.all',
					description: '@triniwiz/nativescript-supabase-gotrue: Build',
				},
			},
			// @triniwiz/nativescript-supabase-postgrest
			'nativescript-supabase-postgrest': {
				build: {
					script: 'nx run nativescript-supabase-postgrest:build.all',
					description: '@triniwiz/nativescript-supabase-postgrest: Build',
				},
			},
			// @triniwiz/nativescript-supabase-realtime
			'nativescript-supabase-realtime': {
				build: {
					script: 'nx run nativescript-supabase-realtime:build.all',
					description: '@triniwiz/nativescript-supabase-realtime: Build',
				},
			},
			// @triniwiz/nativescript-supabase-storage
			'nativescript-supabase-storage': {
				build: {
					script: 'nx run nativescript-supabase-storage:build.all',
					description: '@triniwiz/nativescript-supabase-storage: Build',
				},
			},
			// @triniwiz/nativescript-opentok
			'nativescript-opentok': {
				build: {
					script: 'nx run nativescript-opentok:build.all',
					description: '@triniwiz/nativescript-opentok: Build',
				},
			},
			'build-all': {
				script: 'nx run-many --target=build.all --all',
				description: 'Build all packages',
			},
		},
		'⚡': {
			script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
			description: '_____________  Focus (VS Code supported)  _____________',
		},
		focus: {
			'nativescript-couchbase': {
				script: 'nx run nativescript-couchbase:focus',
				description: 'Focus on @triniwiz/nativescript-couchbase',
			},
			'nativescript-stripe': {
				script: 'nx run nativescript-stripe:focus',
				description: 'Focus on @triniwiz/nativescript-stripe',
			},
			'nativescript-toasty': {
				script: 'nx run nativescript-toasty:focus',
				description: 'Focus on @triniwiz/nativescript-toasty',
			},
			'nativescript-image-cache-it': {
				script: 'nx run nativescript-image-cache-it:focus',
				description: 'Focus on @triniwiz/nativescript-image-cache-it',
			},
			'nativescript-socketio': {
				script: 'nx run nativescript-socketio:focus',
				description: 'Focus on @triniwiz/nativescript-socketio',
			},
			'nativescript-webrtc': {
				script: 'nx run nativescript-webrtc:focus',
				description: 'Focus on @triniwiz/nativescript-webrtc',
			},
			'nativescript-accordion': {
				script: 'nx run nativescript-accordion:focus',
				description: 'Focus on @triniwiz/nativescript-accordion',
			},
			'nativescript-downloader': {
				script: 'nx run nativescript-downloader:focus',
				description: 'Focus on @triniwiz/nativescript-downloader',
			},
			'nativescript-radar-io': {
				script: 'nx run nativescript-radar-io:focus',
				description: 'Focus on @triniwiz/nativescript-radar-io',
			},
			'nativescript-youtubeplayer': {
				script: 'nx run nativescript-youtubeplayer:focus',
				description: 'Focus on @triniwiz/nativescript-youtubeplayer',
			},
			'nativescript-image-zoom': {
				script: 'nx run nativescript-image-zoom:focus',
				description: 'Focus on @triniwiz/nativescript-image-zoom',
			},
			'nativescript-sse': {
				script: 'nx run nativescript-sse:focus',
				description: 'Focus on @triniwiz/nativescript-sse',
			},
			'nativescript-star-ratings': {
				script: 'nx run nativescript-star-ratings:focus',
				description: 'Focus on @triniwiz/nativescript-star-ratings',
			},
			'nativescript-awesome-loaders': {
				script: 'nx run nativescript-awesome-loaders:focus',
				description: 'Focus on @triniwiz/nativescript-awesome-loaders',
			},
			'nativescript-textdrawable': {
				script: 'nx run nativescript-textdrawable:focus',
				description: 'Focus on @triniwiz/nativescript-textdrawable',
			},
			'nativescript-pubnub': {
				script: 'nx run nativescript-pubnub:focus',
				description: 'Focus on @triniwiz/nativescript-pubnub',
			},
			'nativescript-popup': {
				script: 'nx run nativescript-popup:focus',
				description: 'Focus on @triniwiz/nativescript-popup',
			},
			'nativescript-nested-scrollview': {
				script: 'nx run nativescript-nested-scrollview:focus',
				description: 'Focus on @triniwiz/nativescript-nested-scrollview',
			},
			'nativescript-tooltip': {
				script: 'nx run nativescript-tooltip:focus',
				description: 'Focus on @triniwiz/nativescript-tooltip',
			},
			'nativescript-twitter': {
				script: 'nx run nativescript-twitter:focus',
				description: 'Focus on @triniwiz/nativescript-twitter',
			},
			'nativescript-splashscreen': {
				script: 'nx run nativescript-splashscreen:focus',
				description: 'Focus on @triniwiz/nativescript-splashscreen',
			},
			'nativescript-fancy-list-view': {
				script: 'nx run nativescript-fancy-list-view:focus',
				description: 'Focus on @triniwiz/nativescript-fancy-list-view',
			},
			'nativescript-autocomplete': {
				script: 'nx run nativescript-autocomplete:focus',
				description: 'Focus on @triniwiz/nativescript-autocomplete',
			},
			'nativescript-here': {
				script: 'nx run nativescript-here:focus',
				description: 'Focus on @triniwiz/nativescript-here',
			},
			'nativescript-video-editor': {
				script: 'nx run nativescript-video-editor:focus',
				description: 'Focus on @triniwiz/nativescript-video-editor',
			},
			'nativescript-ffmpeg': {
				script: 'nx run nativescript-ffmpeg:focus',
				description: 'Focus on @triniwiz/nativescript-ffmpeg',
			},
			'nativescript-imageoptimize': {
				script: 'nx run nativescript-imageoptimize:focus',
				description: 'Focus on @triniwiz/nativescript-imageoptimize',
			},
			'nativescript-aws-sdk': {
				script: 'nx run nativescript-aws-sdk:focus',
				description: 'Focus on @triniwiz/nativescript-aws-sdk',
			},
			'nativescript-card-io': {
				script: 'nx run nativescript-card-io:focus',
				description: 'Focus on @triniwiz/nativescript-card-io',
			},
			'nativescript-sinch': {
				script: 'nx run nativescript-sinch:focus',
				description: 'Focus on @triniwiz/nativescript-sinch',
			},
			'nativescript-ddp-login': {
				script: 'nx run nativescript-ddp-login:focus',
				description: 'Focus on @triniwiz/nativescript-ddp-login',
			},
			'nativescript-fancy-camera': {
				script: 'nx run nativescript-fancy-camera:focus',
				description: 'Focus on @triniwiz/nativescript-fancy-camera',
			},
			'nativescript-mongo-stitch-core': {
				script: 'nx run nativescript-mongo-stitch-core:focus',
				description: 'Focus on @triniwiz/nativescript-mongo-stitch-core',
			},
			'nativescript-mongo-stitch-services-mongodb-remote': {
				script: 'nx run nativescript-mongo-stitch-services-mongodb-remote:focus',
				description: 'Focus on @triniwiz/nativescript-mongo-stitch-services-mongodb-remote',
			},
			'nativescript-mongo-stitch-sdk': {
				script: 'nx run nativescript-mongo-stitch-sdk:focus',
				description: 'Focus on @triniwiz/nativescript-mongo-stitch-sdk',
			},
			'nativescript-pusher-channels': {
				script: 'nx run nativescript-pusher-channels:focus',
				description: 'Focus on @triniwiz/nativescript-pusher-channels',
			},
			'nativescript-pusher-beams': {
				script: 'nx run nativescript-pusher-beams:focus',
				description: 'Focus on @triniwiz/nativescript-pusher-beams',
			},
			'nativescript-aws-sdk-s3': {
				script: 'nx run nativescript-aws-sdk-s3:focus',
				description: 'Focus on @triniwiz/nativescript-aws-sdk-s3',
			},
			'nativescript-videorecorder': {
				script: 'nx run nativescript-videorecorder:focus',
				description: 'Focus on @triniwiz/nativescript-videorecorder',
			},
			'nativescript-pager': {
				script: 'nx run nativescript-pager:focus',
				description: 'Focus on @triniwiz/nativescript-pager',
			},
			'nativescript-accelerometer': {
				script: 'nx run nativescript-accelerometer:focus',
				description: 'Focus on @triniwiz/nativescript-accelerometer',
			},
			'nativescript-file-manager': {
				script: 'nx run nativescript-file-manager:focus',
				description: 'Focus on @triniwiz/nativescript-file-manager',
			},
			'nativescript-yogalayout': {
				script: 'nx run nativescript-yogalayout:focus',
				description: 'Focus on @triniwiz/nativescript-yogalayout',
			},
			'nativescript-parsesdk': {
				script: 'nx run nativescript-parsesdk:focus',
				description: 'Focus on @triniwiz/nativescript-parsesdk',
			},
			'nativescript-supabase': {
				script: 'nx run nativescript-supabase:focus',
				description: 'Focus on @triniwiz/nativescript-supabase',
			},
			'nativescript-supabase-gotrue': {
				script: 'nx run nativescript-supabase-gotrue:focus',
				description: 'Focus on @triniwiz/nativescript-supabase-gotrue',
			},
			'nativescript-supabase-postgrest': {
				script: 'nx run nativescript-supabase-postgrest:focus',
				description: 'Focus on @triniwiz/nativescript-supabase-postgrest',
			},
			'nativescript-supabase-realtime': {
				script: 'nx run nativescript-supabase-realtime:focus',
				description: 'Focus on @triniwiz/nativescript-supabase-realtime',
			},
			'nativescript-supabase-storage': {
				script: 'nx run nativescript-supabase-storage:focus',
				description: 'Focus on @triniwiz/nativescript-supabase-storage',
			},
			'nativescript-opentok': {
				script: 'nx run nativescript-opentok:focus',
				description: 'Focus on @triniwiz/nativescript-opentok',
			},
			reset: {
				script: 'nx g @nativescript/plugin-tools:focus-packages',
				description: 'Reset Focus',
			},
		},
		'.....................': {
			script: `npx cowsay "That's all for now folks ~"`,
			description: '.....................',
		},
	},
};
