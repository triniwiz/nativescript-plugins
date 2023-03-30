import { DemoSharedBase } from '../utils';
import { ImageCacheIt } from '@triniwiz/nativescript-image-cache-it';
import { Frame, ImageSource, ObservableArray } from '@nativescript/core';

export class DemoSharedNativescriptImageCacheIt extends DemoSharedBase {
	public images: ObservableArray<{
		stretch: string;
		url: string;
	}>;
	public progress: ObservableArray<number>;
	public newImg: string;
	public stretch = 'none';

	getUUID(): string {
		if (global.isIOS) {
			return NSUUID.UUID().UUIDString;
		} else {
			return java.util.UUID.randomUUID().toString();
		}
	}

	getBasicAuthHeader(username: string, password: string) {
		const headers = new Map();
		if (global.isIOS) {
			let text = NSString.stringWithString(username + ':' + password);
			let data = text.dataUsingEncoding(NSUTF8StringEncoding);
			headers.set('Authorization', `Basic ${data.base64EncodedStringWithOptions(0)}`);
			console.dir(headers);
		} else {
			const header = `Basic ${android.util.Base64.encodeToString(new java.lang.String(username + ':' + password).getBytes(), android.util.Base64.NO_WRAP)}`;
			headers.set('Authorization', header);
		}
		return headers;
	}

	defaultHeaders = new Map();
	placeHolder;

	constructor() {
		super();

		this.placeHolder = ImageSource.fromFileOrResourceSync('res://law');
		this.images = new ObservableArray([
			{
				stretch: 'none',
				url: null,
			},
			// {
			// 	stretch: 'none',
			// 	url: 'https://www.httpwatch.com/httpgallery/authentication/authenticatedimage/default.aspx',
			// 	auth: this.getBasicAuthHeader('httpwatch', this.getUUID()),
			// },
			{ stretch: 'none', url: 'https://source.unsplash.com/random/800x600' },
			{ stretch: 'none', url: 'res://law' },
			{ stretch: 'none', url: null },
			{ stretch: 'none', url: '~/nativescript-image-cache-it/assets/naruto.jpg' },
			{ stretch: 'none', url: '~/nativescript-image-cache-it/assets/vDNZM1D.gif' },
			{
				stretch: 'none',
				url: 'http://i.kinja-img.com/gawker-media/image/upload/arjw8wqvwnihalb6fq3k.png',
			},
			{ stretch: 'none', url: 'http://i.imgur.com/gHkiBKr.jpg' },
			{ stretch: 'none', url: 'https://images.alphacoders.com/112/112131.jpg' },
			{
				stretch: 'none',
				url: 'http://screenrant.com/wp-content/uploads/flash-movie-director-writer-grahame-smith.jpg',
			},
			{
				stretch: 'none',
				url: 'http://i.newsarama.com/images/i/000/165/825/i02/Jim_Lee_Superman.jpg?',
			},
			{
				stretch: 'none',
				url: 'http://www.studiocity-macau.com/uploads/images/SC/Entertainment/Batman/batman_share.jpg',
			},
			{
				stretch: 'none',
				url: 'http://media.dcentertainment.com/sites/default/files/GalleryChar_1900x900_Shazam_JLWar_52efe00221d5e8.67242484.jpg',
			},
			{
				stretch: 'none',
				url: 'http://media.dcentertainment.com/sites/default/files/GalleryComics_1920x1080_20150617_WW_Cv41_55775bb30cf485.93762653.jpg',
			},
			{
				stretch: 'none',
				url: 'http://media.dcentertainment.com/sites/default/files/GalleryComics_1920x1080_20150826_CYB_Cv2_55cceb0d8f1d31.28141728.jpg',
			},
			{
				stretch: 'none',
				url: 'http://media.dcentertainment.com/sites/default/files/GalleryChar_1900x900_GL_JLWar_05_52efdf431a6f06.20788146.jpg',
			},
			{
				stretch: 'none',
				url: 'http://media.dcentertainment.com/sites/default/files/GalleryChar_1900x900_aquaman1_04_52ab5de7275bb2.59639997.jpg',
			},
			{
				stretch: 'none',
				url: 'http://i.newsarama.com/images/i/000/146/771/i02/MM_02_CVR_CMYK.jpg?',
			},
			{ stretch: 'none', url: 'http://cdn.hitfix.com/photos/6206789/The-Green-Arrow.jpg' },
			{ stretch: 'none', url: 'http://www.cinemablend.com/images/news/32429/_1447230516.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/7983112-lg.jpg' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1458724338480-79bc7a8352e4' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1456318019777-ccdc4d5b2396' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1455098934982-64c622c5e066' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1454817481404-7e84c1b73b4a' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1454982523318-4b6396f39d3a' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1423768164017-3f27c066407f' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1433360405326-e50f909805b3' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1421749810611-438cc492b581' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1437652010333-fbf2cd02a4f8' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1458640904116-093b74971de9' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1454047637795-79e3325dfa0e' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1440227537815-f4476b789291' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1428189923803-e9801d464d76' },
			{
				stretch: 'none',
				url: 'https://images.unsplash.com/reserve/eNu5TtyHRnWf9627TvZN_IMG_7791.JPG',
			},
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1441986380878-c4248f5b8b5b' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1439736637365-748f240b24fb' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1440557653082-e8e186733eeb' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1443926886562-c91054221a5c' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1447958374760-1ce70cf11ee3' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1449452198679-05c7fd30f416' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1452723312111-3a7d0db0e024' },
			{ stretch: 'none', url: 'https://images.unsplash.com/uploads/14128434147336bfb286b/e76494ac' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1421987392252-38a07781c07e' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1422157245273-e08b638b4b00' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1453106037972-08fbfe790762' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1452110040644-6751c0c95836' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1449960238630-7e720e630019' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1433190152045-5a94184895da' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1437382944886-45a9f73d4158' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1433878455169-4698e60005b1' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1453282716202-de94e528067c' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1437382944886-45a9f73d4158' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1453282716202-de94e528067c' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1451188502541-13943edb6acb' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1449024540548-94f5d5a59230' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1447877085163-3cce903855cd' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1445346366695-5bf62de05412' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1442473483905-95eb436675f1' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1434871619871-1f315a50efba' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1433162653888-a571db5ccccf' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1453743327117-664e2bf4e951' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1453170804045-277782641dca' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1452800185063-6db5e12b8e2e' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1452274381522-521513015433' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1451417379553-15d8e8f49cde' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1449057528837-7ca097b3520c' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1447834353189-91c48abf20e1' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1443890484047-5eaa67d1d630' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1451303688941-9e06d4b1277a' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1451186859696-371d9477be93' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1445299370299-fba06c02df22' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1444044205806-38f3ed106c10' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1442589031151-61d5645469d7' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1439723680580-bfd9d28ef9b6' },
			{ stretch: 'none', url: 'https://images.unsplash.com/photo-1434472007488-8d47f604f644' },
			{
				stretch: 'none',
				url: 'http://cdn.pcwallart.com/images/spring-nature-wallpapers-high-resolution-wallpaper-4.jpg',
			},
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/11298470-lg.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/5602504-md.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/9734091-md.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/4797337-md.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/7141529-md.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/7232968-md.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/12871773-md.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/12721293-md.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/6892014-md.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/3269153-md.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/8189453-md.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/2693222-lg.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/3606595-md.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/5433159-lg.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/6183491-lg.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/2747674-md.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/8362141-md.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/6456351-lg.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/4087789-md.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/8667486-md.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/11014502-md.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/8829472-lg.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/3536082-md.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/10348290-md.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/6004788-md.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/5724374-lg.jpg' },
			{ stretch: 'none', url: 'http://gallery.photo.net/photo/9703314-md.jpg' },
			{
				stretch: 'none',
				url: 'http://cdn.wonderfulengineering.com/wp-content/uploads/2014/03/high-resolution-wallpapers-25.jpg',
			},
			{ stretch: 'none', url: 'http://gratisography.com/pictures/259_1.jpg' },
			{ stretch: 'none', url: 'http://gratisography.com/pictures/248_1.jpg' },
			{ stretch: 'none', url: 'http://gratisography.com/pictures/245_1.jpg' },
			{
				stretch: 'none',
				url: 'https://www.hdwallpapers.net/previews/lamborghini-centenario-lp770-4-1000.jpg',
			},
			{ stretch: 'none', url: 'http://gratisography.com/pictures/235_1.jpg' },
			{ stretch: 'none', url: 'http://gratisography.com/pictures/225_1.jpg' },
			{
				stretch: 'none',
				url: 'https://www.hdwallpapers.net/previews/jiraiya-fan-art-naruto-845.jpg',
			},
			{
				stretch: 'none',
				url: 'http://www.planwallpaper.com/static/images/magic-of-blue-universe-images.jpg',
			},
			{
				stretch: 'none',
				url: 'http://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_900.jpg',
			},
			{
				stretch: 'none',
				url: 'http://interrete.org/wp-content/uploads/2014/04/Miniature-World-of-Insects6.png',
			},
			{
				stretch: 'none',
				url: 'http://www.isharearena.com/wp-content/uploads/2012/12/wallpaper-281049.jpg',
			},
			{
				stretch: 'none',
				url: 'http://excellzone.com/wp-content/uploads/2015/06/anime-front.jpg',
			},
			{
				stretch: 'none',
				url: 'http://otakukart.com/animeblog/wp-content/uploads/2015/12/Top-10-Anime-Character-That-Really-Started-From-The-Bottom.png',
			},
		]);
		this.progress = new ObservableArray<number>([]);
		this.newImg = '';

		const auth = this.images.getItem(1) as any;

		ImageCacheIt.getItem(auth.url, auth.auth)
			.then((value) => {
				console.log(value);
			})
			.catch((error) => {
				console.log('getItem: headers error', error);
			});
	}

	addImage() {
		this.images.push({ stretch: 'none', url: this.get('newImg') });
		this.set('newImg', '');
	}

	deleteRandom() {
		const listView = Frame.topmost().getViewById('listView') as any;
		ImageCacheIt.deleteItem('https://source.unsplash.com/random/800x600').then(() => {
			ImageCacheIt.getItem('https://source.unsplash.com/random/800x600')
				.then((j) => {
					if (listView) {
						listView.refresh();
					}
				})
				.catch((e) => {
					console.log(e);
				});
		});
	}

	onTapEven(event) {
		console.log('even tapped ' + Date.now());
	}

	onTapOdd(event) {
		console.log('odd tapped ' + Date.now());
	}

	imageLoaded(event) {
		event.object.on('loadStart', (args: any) => {
			console.log('started', args.url);
		});
		event.object.on('progress', function (args: any) {
			// console.log('progress', args.progress);
		});
		event.object.on('error', (args: any) => {
			//console.log('error', args.message, args.url);
		});
		event.object.on('loadEnd', (args: any) => {
			console.log('ended', args.url);
		});
	}

	onLoadStart(event) {
		console.log('onLoadStart');
	}
}
