import { Observable, EventData, Page, ImageSource } from '@nativescript/core';
import { DemoSharedNativescriptPdf } from '@demo/shared';
import { PDFDocument, IPDFDocument, TextOptions, PDFView, StyleDef, PdfImage } from '@triniwiz/nativescript-pdf';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptPdf {
	src = 'https://files.testfile.org/PDF/100MB-TESTFILE.ORG.pdf';
	image: PdfImage;
	base64Image: string;
	loaded(args: EventData) {
		const pdfView = args.object as never as PDFView;
		const document = new PDFDocument();
		// document.willDrawCell = (data) => {
		// 	return true;
		// };
		document.didDrawCell = (data) => {
			if (data.section === 'body' && data.columnIndex === 3 && data.rowIndex % 2 === 0) {
				const width = data.width / 2;
				if (this.base64Image) {
					document.addImage(this.base64Image, 'PNG', data.x + width, data.y + 4, 8, 8);
				} else {
					document.addImage(this.image, data.x + width, data.y + 4, 8, 8);
				}
			}
		};

		ImageSource.fromUrl('https://static.wikia.nocookie.net/xmenmovies/images/9/94/Deadpool_Textless.jpg').then(async (image: ImageSource) => {
			try {
				// this.base64Image = await image.toBase64String('png');
			} catch {}

			try {
				this.image = await PdfImage.fromAsync(image);
			} catch {}

			if (this.image || this.base64Image) {
				this.renderTable(document, pdfView);
			}
		});
	}

	renderTable(document: PDFDocument, pdfView: PDFView) {
		const style: StyleDef = {
			fontStyle: 'bold',
			fontSize: 24,
			verticalAlign: 'middle',
			fillColor: [41, 128, 185],
			lineColor: [255, 0, 0],
		};
		document.table({
			theme: 'grid',
			bodyStyles: {
				...style,
				fontSize: 18,
				fontStyle: 'normal',
				fillColor: null,
				horizontalAlign: 'center',
			},
			head: [
				[
					{
						content: 'First Name',
						rowSpan: 1,
						colSpan: 1,
						style: { ...style },
					},
					{
						content: 'Last Name',
						rowSpan: 1,
						colSpan: 1,
						style: { ...style },
					},
					{
						content: 'Photo',
						rowSpan: 1,
						colSpan: 1,
						style: { ...style },
					},
					{
						content: 'Gender',
						rowSpan: 1,
						colSpan: 1,
						style: { ...style },
					},
				],
			],
			body: this.data.slice(0, 5),
			foot: [],
		});

		try {
			pdfView.document = document;
		} catch (error) {
			console.log('Error setting document', error);
		}
	}

	renderDocument(document: PDFDocument, pdfView: PDFView) {
		const width = document.width;
		document.setFontSize(20);
		document.setFontColor(100, 100, 100, 255);
		let options: TextOptions = {
			align: 'center',
			baseline: 'top',
		};
		document.text('Hello World 1', width / 2 - 250, 0, options);
		ImageSource.fromUrl('https://static.wikia.nocookie.net/xmenmovies/images/9/94/Deadpool_Textless.jpg')
			.then((image: ImageSource) => {
				this.image = PdfImage.from(image);
				document.addImage(image, 0, 0, 50, 50);
				document.addPage();
				document.setFontSize(50);
				document.setFontColor(255, 0, 0, 255);
				document.text('Hello World 2', 10, 100);
				document.addPage();
				document.setFontColor(0, 0, 0, 255);
				document.text('Hello World 3', 10, 100);
				document.addPage();

				document.ellipse(40, 20, 10, 5);

				document.setFillColor(0, 0, 255);
				document.ellipse(80, 20, 10, 5, 'F');

				document.setLineWidth(1);
				document.setDrawColor(0, 0, 0);
				document.setFillColor(255, 0, 0);
				document.circle(120, 20, 5, 'FD');

				document.addPage();

				// Empty square
				document.rect(20, 20, 10, 10);

				// Filled square
				document.rect(40, 20, 10, 10, 'F');

				// Empty red square
				document.setDrawColor(255, 0, 0);
				document.rect(60, 20, 10, 10);

				// Filled square with red borders
				document.setDrawColor(255, 0, 0);
				document.rect(80, 20, 10, 10, 'FD');

				// Filled red square
				document.setDrawColor(0, 0, 0);
				document.setFillColor(255, 0, 0);
				document.rect(100, 20, 10, 10, 'F');

				// Filled red square with black borders
				document.setDrawColor(0, 0, 0);
				document.setFillColor(255, 0, 0);
				document.rect(120, 20, 10, 10, 'FD');

				console.log('Document created', document);

				pdfView.document = document;
			})
			.catch((err) => {
				console.error('Error loading image', err);
			});
	}
}
