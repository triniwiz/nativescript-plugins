- [@triniwiz/nativescript-accelerometer](packages/nativescript-accelerometer/README.md)
- [@triniwiz/nativescript-accordion](packages/nativescript-accordion/README.md)
- [@triniwiz/nativescript-autocomplete](packages/nativescript-autocomplete/README.md)
- [@triniwiz/nativescript-aws-sdk](packages/nativescript-aws-sdk/README.md)
- [@triniwiz/nativescript-aws-sdk-s3](packages/nativescript-aws-sdk-s3/README.md)
- [@triniwiz/nativescript-couchbase](packages/nativescript-couchbase/README.md)
- [@triniwiz/nativescript-downloader](packages/nativescript-downloader/README.md)
- [@triniwiz/nativescript-ffmpeg](packages/nativescript-ffmpeg/README.md)
- [@triniwiz/nativescript-here](packages/nativescript-here/README.md)
- [@triniwiz/nativescript-image-cache-it](packages/nativescript-image-cache-it/README.md)
- [@triniwiz/nativescript-image-zoom](packages/nativescript-image-zoom/README.md)
- [@triniwiz/nativescript-imageoptimize](packages/nativescript-imageoptimize/README.md)
- [@triniwiz/nativescript-nested-scrollview](packages/nativescript-nested-scrollview/README.md)
- [@triniwiz/nativescript-opentok](packages/nativescript-opentok/README.md)
- [@triniwiz/nativescript-pager](packages/nativescript-pager/README.md)
- [@triniwiz/nativescript-parsesdk](packages/nativescript-parsesdk/README.md)
- [@triniwiz/nativescript-popup](packages/nativescript-popup/README.md)
- [@triniwiz/nativescript-pubnub](packages/nativescript-pubnub/README.md)
- [@triniwiz/nativescript-pusher-beams](packages/nativescript-pusher-beams/README.md)
- [@triniwiz/nativescript-pusher-channels](packages/nativescript-pusher-channels/README.md)
- [@triniwiz/nativescript-radar-io](packages/nativescript-radar-io/README.md)
- [@triniwiz/nativescript-sinch](packages/nativescript-sinch/README.md)
- [@triniwiz/nativescript-socketio](packages/nativescript-socketio/README.md)
- [@triniwiz/nativescript-splashscreen](packages/nativescript-splashscreen/README.md)
- [@triniwiz/nativescript-sse](packages/nativescript-sse/README.md)
- [@triniwiz/nativescript-star-ratings](packages/nativescript-star-ratings/README.md)
- [@triniwiz/nativescript-stripe](packages/nativescript-stripe/README.md)
- [@triniwiz/nativescript-supabase](packages/nativescript-supabase/README.md)
- [@triniwiz/nativescript-supabase-gotrue](packages/nativescript-supabase-gotrue/README.md)
- [@triniwiz/nativescript-supabase-postgrest](packages/nativescript-supabase-postgrest/README.md)
- [@triniwiz/nativescript-supabase-realtime](packages/nativescript-supabase-realtime/README.md)
- [@triniwiz/nativescript-supabase-storage](packages/nativescript-supabase-storage/README.md)
- [@triniwiz/nativescript-textdrawable](packages/nativescript-textdrawable/README.md)
- [@triniwiz/nativescript-toasty](packages/nativescript-toasty/README.md)
- [@triniwiz/nativescript-tooltip](packages/nativescript-tooltip/README.md)
- [@triniwiz/nativescript-twitter](packages/nativescript-twitter/README.md)
- [@triniwiz/nativescript-video-editor](packages/nativescript-video-editor/README.md)
- [@triniwiz/nativescript-videorecorder](packages/nativescript-videorecorder/README.md)
- [@triniwiz/nativescript-webrtc](packages/nativescript-webrtc/README.md)
- [@triniwiz/nativescript-yogalayout](packages/nativescript-yogalayout/README.md)
- [@triniwiz/nativescript-youtubeplayer](packages/nativescript-youtubeplayer/README.md)

# How to use?

This workspace manages the suite of plugins listed above.

In general, when in doubt with what to do, just `npm start`.

## How to add a new package to workspace?

```
npm run add
```

At the prompt, enter the name of the new package.

- This adds a plugin harness in `packages` with the necessary boilerplate to just start developing
- Updates all demo app flavors to support demoing the new package
- Adds shared code in `tools/demo` where you can write demo code **once** and share across all demo flavors
- Updates build tooling to support the new package
- Updates the `npm start` interactive display
- Updates the README here to list the new package

## How to add Angular compatibility to a package

```
npm run add-angular
```

At the prompt, enter the name of the package to add an `angular` folder to it with the necessary boilerplate to provide Angular support to the package.

## How to focus on just 1 package to develop in isolation

```
npm start
```

- Choose the focus commands for the package you wish to focus on and hit enter.
- All the demo app's will be updated to isolate that 1 package and for supported IDE's (currently VS Code), the source code will also become isolated in the workspace.

Note: _good to always clean the demo you plan to run after focusing. (You can clean any demo from `npm start` as well)_

## How to publish packages?

```
npm run publish-packages
```

- You will be prompted for the package names to publish. Leaving blank and hitting enter will publish them all.
- You will then be prompted for the version to use. Leaving blank will auto bump the patch version (it also handles prerelease types like alpha, beta, rc, etc. - It even auto tags the corresponding prelease type on npm).
- You will then be given a brief sanity check 🧠😊

<h3 align="center">Made with ❤️</h3>
