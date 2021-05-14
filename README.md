# @triniwiz/\* plugins

```
npm run setup
npm start
```

- [@triniwiz/nativescript-accelerometer](https://github.com/triniwiz/nativescript-plugins/tree/master/packages/nativescript-accelerometer)
  - [![npm](https://img.shields.io/npm/dm/@triniwiz/nativescript-accelerometer.svg)](https://www.npmjs.com/package/@triniwiz/nativescript-accelerometer)
- @triniwiz/nativescript-accelerometer
- @triniwiz/nativescript-accordion
- @triniwiz/nativescript-autocomplete
- @triniwiz/nativescript-awesome-loaders
- @triniwiz/nativescript-aws-sdk
- @triniwiz/nativescript-aws-sdk-s3
- @triniwiz/nativescript-card-io
- @triniwiz/nativescript-couchbase
- @triniwiz/nativescript-ddp-login
- @triniwiz/nativescript-downloader
- @triniwiz/nativescript-fancy-camera
- @triniwiz/nativescript-fancy-list-view
- @triniwiz/nativescript-ffmpeg
- @triniwiz/nativescript-file-manager
- @triniwiz/nativescript-here
- @triniwiz/nativescript-image-cache-it
- @triniwiz/nativescript-image-zoom
- @triniwiz/nativescript-imageoptimize
- @triniwiz/nativescript-mongo-stitch-core
- @triniwiz/nativescript-mongo-stitch-sdk
- @triniwiz/nativescript-mongo-stitch-services-mongodb-remote
- @triniwiz/nativescript-nested-scrollview
- @triniwiz/nativescript-pager
- @triniwiz/nativescript-popup
- @triniwiz/nativescript-pubnub
- @triniwiz/nativescript-pusher-beams
- @triniwiz/nativescript-pusher-channels
- @triniwiz/nativescript-radar-io
- @triniwiz/nativescript-sinch
- @triniwiz/nativescript-socketio
- @triniwiz/nativescript-splashscreen
- @triniwiz/nativescript-sse
- @triniwiz/nativescript-star-ratings
- @triniwiz/nativescript-stripe
- @triniwiz/nativescript-textdrawable
- @triniwiz/nativescript-toasty
- @triniwiz/nativescript-tooltip
- @triniwiz/nativescript-twitter
- @triniwiz/nativescript-video-editor
- @triniwiz/nativescript-videorecorder
- @triniwiz/nativescript-webrtc
- @triniwiz/nativescript-yogalayout
- @triniwiz/nativescript-youtubeplayer

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
