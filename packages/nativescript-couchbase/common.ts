// Type-only: Collection is platform specific, and importing it as a type keeps
// this module free of any runtime dependency on the platform files.
import type { Collection } from '.';

export enum QueryMeta {
	ALL = 'COUCHBASE_ALL',
	ID = 'COUCHBASE_ID',
}

export enum QueryLogicalOperator {
	AND = 'and',
	OR = 'or',
}

export enum QueryArrayOperator {
	CONTAINS = 'contains',
}

export const DEFAULT_MIME_TYPE = 'application/octet-stream';

export const mimeTypes = {
	md: 'text/markdown',
	html: 'text/html',
	htm: 'text/html',
	shtml: 'text/html',
	css: 'text/css',
	xml: 'text/xml',
	gif: 'image/gif',
	jpeg: 'image/jpeg',
	jpg: 'image/jpeg',
	js: 'application/javascript',
	atom: 'application/atom+xml',
	rss: 'application/rss+xml',
	mml: 'text/mathml',
	txt: 'text/plain',
	jad: 'text/vnd.sun.j2me.app-descriptor',
	wml: 'text/vnd.wap.wml',
	htc: 'text/x-component',
	png: 'image/png',
	tif: 'image/tiff',
	tiff: 'image/tiff',
	wbmp: 'image/vnd.wap.wbmp',
	ico: 'image/x-icon',
	jng: 'image/x-jng',
	bmp: 'image/x-ms-bmp',
	svg: 'image/svg+xml',
	svgz: 'image/svg+xml',
	webp: 'image/webp',
	woff: 'application/font-woff',
	jar: 'application/java-archive',
	war: 'application/java-archive',
	ear: 'application/java-archive',
	json: 'application/json',
	hqx: 'application/mac-binhex40',
	doc: 'application/msword',
	pdf: 'application/pdf',
	ps: 'application/postscript',
	eps: 'application/postscript',
	ai: 'application/postscript',
	rtf: 'application/rtf',
	m3u8: 'application/vnd.apple.mpegurl',
	xls: 'application/vnd.ms-excel',
	eot: 'application/vnd.ms-fontobject',
	ppt: 'application/vnd.ms-powerpoint',
	wmlc: 'application/vnd.wap.wmlc',
	kml: 'application/vnd.google-earth.kml+xml',
	kmz: 'application/vnd.google-earth.kmz',
	'7z': 'application/x-7z-compressed',
	cco: 'application/x-cocoa',
	jardiff: 'application/x-java-archive-diff',
	jnlp: 'application/x-java-jnlp-file',
	run: 'application/x-makeself',
	pl: 'application/x-perl',
	pm: 'application/x-perl',
	prc: 'application/x-pilot',
	pdb: 'application/x-pilot',
	rar: 'application/x-rar-compressed',
	rpm: 'application/x-redhat-package-manager',
	sea: 'application/x-sea',
	swf: 'application/x-shockwave-flash',
	sit: 'application/x-stuffit',
	tcl: 'application/x-tcl',
	tk: 'application/x-tcl',
	der: 'application/x-x509-ca-cert',
	pem: 'application/x-x509-ca-cert',
	crt: 'application/x-x509-ca-cert',
	xpi: 'application/x-xpinstall',
	xhtml: 'application/xhtml+xml',
	xspf: 'application/xspf+xml',
	zip: 'application/zip',
	bin: 'application/octet-stream',
	exe: 'application/octet-stream',
	dll: 'application/octet-stream',
	deb: 'application/octet-stream',
	dmg: 'application/octet-stream',
	iso: 'application/octet-stream',
	img: 'application/octet-stream',
	msi: 'application/octet-stream',
	msp: 'application/octet-stream',
	msm: 'application/octet-stream',
	docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
	mid: 'audio/midi',
	midi: 'audio/midi',
	kar: 'audio/midi',
	mp3: 'audio/mpeg',
	ogg: 'audio/ogg',
	m4a: 'audio/x-m4a',
	ra: 'audio/x-realaudio',
	'3gpp': 'video/3gpp',
	'3gp': 'video/3gpp',
	ts: 'video/mp2t',
	mp4: 'video/mp4',
	mpeg: 'video/mpeg',
	mpg: 'video/mpeg',
	mov: 'video/quicktime',
	webm: 'video/webm',
	flv: 'video/x-flv',
	m4v: 'video/x-m4v',
	mng: 'video/x-mng',
	asx: 'video/x-ms-asf',
	asf: 'video/x-ms-asf',
	wmv: 'video/x-ms-wmv',
	avi: 'video/x-msvideo',
};

/**
 * The file extension a mime type is usually stored under, or `bin` when the
 * type is unknown. Used to resolve a `res://` blob to a bundled resource.
 */
export function getExtension(mimeType: string): string {
	if (typeof mimeType !== 'string' || !mimeType) {
		return 'bin';
	}
	// The type can carry parameters, as in `text/html; charset=utf-8`.
	const type = mimeType.split(';')[0].trim().toLowerCase();
	for (const extension of Object.keys(mimeTypes)) {
		if (mimeTypes[extension] === type) {
			return extension;
		}
	}
	return 'bin';
}

/**
 * Everything a Replicator needs, in plain values - the native configuration is
 * built from this when the Replicator is constructed.
 */
export class ReplicatorConfiguration {
	remoteUrl: string;
	direction: 'push' | 'pull' | 'both' = 'both';
	continuous: boolean = false;
	username: string = null;
	password: string = null;
	sessionId: string = null;
	cookieName: string = null;
	collections: Collection[] = [];
	channels: Map<Collection, string[]> = new Map<Collection, string[]>();
	autoPurge: boolean = true;
	headers: Map<string, string> = new Map<string, string>();
	/** iOS only - the Android SDK has no equivalent and ignores this. */
	networkInterface: string = null;

	constructor(remoteUrl: string, direction: 'push' | 'pull' | 'both' = 'both') {
		this.remoteUrl = remoteUrl;
		this.direction = direction;
	}
}
