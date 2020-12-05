import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
	{ path: 'nativescript-accordion', loadChildren: () => import('./plugin-demos/nativescript-accordion.module').then(m => m.NativescriptAccordionModule) },
	{ path: 'nativescript-autocomplete', loadChildren: () => import('./plugin-demos/nativescript-autocomplete.module').then(m => m.NativescriptAutocompleteModule) },
	{ path: 'nativescript-awesome-loaders', loadChildren: () => import('./plugin-demos/nativescript-awesome-loaders.module').then(m => m.NativescriptAwesomeLoadersModule) },
	{ path: 'nativescript-aws-sdk', loadChildren: () => import('./plugin-demos/nativescript-aws-sdk.module').then(m => m.NativescriptAwsSdkModule) },
	{ path: 'nativescript-aws-sdk-s3', loadChildren: () => import('./plugin-demos/nativescript-aws-sdk-s3.module').then(m => m.NativescriptAwsSdkS3Module) },
	{ path: 'nativescript-card-io', loadChildren: () => import('./plugin-demos/nativescript-card-io.module').then(m => m.NativescriptCardIoModule) },
	{ path: 'nativescript-couchbase', loadChildren: () => import('./plugin-demos/nativescript-couchbase.module').then(m => m.NativescriptCouchbaseModule) },
	{ path: 'nativescript-ddp-login', loadChildren: () => import('./plugin-demos/nativescript-ddp-login.module').then(m => m.NativescriptDdpLoginModule) },
	{ path: 'nativescript-downloader', loadChildren: () => import('./plugin-demos/nativescript-downloader.module').then(m => m.NativescriptDownloaderModule) },
	{ path: 'nativescript-fancy-camera', loadChildren: () => import('./plugin-demos/nativescript-fancy-camera.module').then(m => m.NativescriptFancyCameraModule) },
	{ path: 'nativescript-fancy-list-view', loadChildren: () => import('./plugin-demos/nativescript-fancy-list-view.module').then(m => m.NativescriptFancyListViewModule) },
	{ path: 'nativescript-ffmpeg', loadChildren: () => import('./plugin-demos/nativescript-ffmpeg.module').then(m => m.NativescriptFfmpegModule) },
	{ path: 'nativescript-here', loadChildren: () => import('./plugin-demos/nativescript-here.module').then(m => m.NativescriptHereModule) },
	{ path: 'nativescript-image-cache-it', loadChildren: () => import('./plugin-demos/nativescript-image-cache-it.module').then(m => m.NativescriptImageCacheItModule) },
	{ path: 'nativescript-image-zoom', loadChildren: () => import('./plugin-demos/nativescript-image-zoom.module').then(m => m.NativescriptImageZoomModule) },
	{ path: 'nativescript-imageoptimize', loadChildren: () => import('./plugin-demos/nativescript-imageoptimize.module').then(m => m.NativescriptImageoptimizeModule) },
	{ path: 'nativescript-mongo-stitch-core', loadChildren: () => import('./plugin-demos/nativescript-mongo-stitch-core.module').then(m => m.NativescriptMongoStitchCoreModule) },
	{ path: 'nativescript-mongo-stitch-sdk', loadChildren: () => import('./plugin-demos/nativescript-mongo-stitch-sdk.module').then(m => m.NativescriptMongoStitchSdkModule) },
	{ path: 'nativescript-mongo-stitch-services-mongodb-remote', loadChildren: () => import('./plugin-demos/nativescript-mongo-stitch-services-mongodb-remote.module').then(m => m.NativescriptMongoStitchServicesMongodbRemoteModule) },
	{ path: 'nativescript-nested-scrollview', loadChildren: () => import('./plugin-demos/nativescript-nested-scrollview.module').then(m => m.NativescriptNestedScrollviewModule) },
	{ path: 'nativescript-pager', loadChildren: () => import('./plugin-demos/nativescript-pager.module').then(m => m.NativescriptPagerModule) },
	{ path: 'nativescript-popup', loadChildren: () => import('./plugin-demos/nativescript-popup.module').then(m => m.NativescriptPopupModule) },
	{ path: 'nativescript-pubnub', loadChildren: () => import('./plugin-demos/nativescript-pubnub.module').then(m => m.NativescriptPubnubModule) },
	{ path: 'nativescript-pusher-beams', loadChildren: () => import('./plugin-demos/nativescript-pusher-beams.module').then(m => m.NativescriptPusherBeamsModule) },
	{ path: 'nativescript-pusher-channels', loadChildren: () => import('./plugin-demos/nativescript-pusher-channels.module').then(m => m.NativescriptPusherChannelsModule) },
	{ path: 'nativescript-radar-io', loadChildren: () => import('./plugin-demos/nativescript-radar-io.module').then(m => m.NativescriptRadarIoModule) },
	{ path: 'nativescript-sinch', loadChildren: () => import('./plugin-demos/nativescript-sinch.module').then(m => m.NativescriptSinchModule) },
	{ path: 'nativescript-socketio', loadChildren: () => import('./plugin-demos/nativescript-socketio.module').then(m => m.NativescriptSocketioModule) },
	{ path: 'nativescript-splashscreen', loadChildren: () => import('./plugin-demos/nativescript-splashscreen.module').then(m => m.NativescriptSplashscreenModule) },
	{ path: 'nativescript-sse', loadChildren: () => import('./plugin-demos/nativescript-sse.module').then(m => m.NativescriptSseModule) },
	{ path: 'nativescript-star-ratings', loadChildren: () => import('./plugin-demos/nativescript-star-ratings.module').then(m => m.NativescriptStarRatingsModule) },
	{ path: 'nativescript-stripe', loadChildren: () => import('./plugin-demos/nativescript-stripe.module').then(m => m.NativescriptStripeModule) },
	{ path: 'nativescript-textdrawable', loadChildren: () => import('./plugin-demos/nativescript-textdrawable.module').then(m => m.NativescriptTextdrawableModule) },
	{ path: 'nativescript-toasty', loadChildren: () => import('./plugin-demos/nativescript-toasty.module').then(m => m.NativescriptToastyModule) },
	{ path: 'nativescript-tooltip', loadChildren: () => import('./plugin-demos/nativescript-tooltip.module').then(m => m.NativescriptTooltipModule) },
	{ path: 'nativescript-twitter', loadChildren: () => import('./plugin-demos/nativescript-twitter.module').then(m => m.NativescriptTwitterModule) },
	{ path: 'nativescript-video-editor', loadChildren: () => import('./plugin-demos/nativescript-video-editor.module').then(m => m.NativescriptVideoEditorModule) },
	{ path: 'nativescript-videorecorder', loadChildren: () => import('./plugin-demos/nativescript-videorecorder.module').then(m => m.NativescriptVideorecorderModule) },
	{ path: 'nativescript-webrtc', loadChildren: () => import('./plugin-demos/nativescript-webrtc.module').then(m => m.NativescriptWebrtcModule) },
	{ path: 'nativescript-youtubeplayer', loadChildren: () => import('./plugin-demos/nativescript-youtubeplayer.module').then(m => m.NativescriptYoutubeplayerModule) }
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
