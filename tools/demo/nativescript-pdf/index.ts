import { DemoSharedBase } from '../utils';
import {} from '@triniwiz/nativescript-pdf';

export class DemoSharedNativescriptPdf extends DemoSharedBase {
	data = [];
	constructor() {
		super();

		try {
			this.data = require('~/assets/names.json');
		} catch (error) {
			console.error('Error loading names.json:', error);
		}
	}
}
