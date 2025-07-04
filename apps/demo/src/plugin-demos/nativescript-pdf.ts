import { Observable, EventData, Page, ImageSource } from '@nativescript/core';
import { DemoSharedNativescriptPdf } from '@demo/shared';
import { PDFDocument, IPDFDocument, TextOptions, PDFView, StyleDef } from '@triniwiz/nativescript-pdf';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptPdf {
	src = 'https://files.testfile.org/PDF/100MB-TESTFILE.ORG.pdf';
	loaded(args: EventData) {
		const pdfView = args.object as never as PDFView;
		const document = new PDFDocument();

		//	this.renderDocument(document, pdfView);
		this.renderTable(document, pdfView);
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
				],
			],
			body: [
				['Osei', 'Fortune'],
				['Liam', 'Nguyen'],
				['Sofia', 'Martinez'],
				['Ethan', 'Wang'],
				['Chloe', 'Okafor'],
				['Noah', 'Ivanov'],
				['Maya', 'Patel'],
				['Lucas', 'Kim'],
				['Zara', 'Haddad'],
				['Emma', 'Singh'],
				['Oliver', 'Garcia'],
				['Ava', 'Kowalski'],
				['Elijah', 'Ahmed'],
				['Isabella', 'Chen'],
				['Benjamin', 'Tanaka'],
				['Amelia', 'Dubois'],
				['James', 'López'],
				['Mila', 'Nakamura'],
				['Henry', 'Jensen'],
				['Grace', 'Kumar'],
				['William', 'Bakshi'],
				['Ella', 'Morales'],
				['Jack', 'Petrov'],
				['Lily', 'Hassan'],
				['Alexander', 'Silva'],
				['Aria', 'Bianchi'],
				['Daniel', "O'Connor"],
				['Layla', 'Nasser'],
				['Logan', 'Schneider'],
				['Emily', 'Jin'],
				['Jacob', 'Popov'],
				['Hannah', 'Ali'],
				['Michael', 'Fernandez'],
				['Abigail', 'Iqbal'],
				['Sebastian', 'Nowak'],
				['Nora', 'Salim'],
				['Matthew', 'Carvalho'],
				['Leah', 'Georgiou'],
				['Aiden', 'Rossi'],
				['Zoey', 'Yilmaz'],
				['Jackson', 'Mehta'],
				['Riley', 'Santos'],
				['David', 'Müller'],
				['Luna', 'Andersson'],
				['Joseph', 'Kimura'],
				['Hazel', 'Jafari'],
				['Samuel', 'Takahashi'],
				['Ellie', 'Volkov'],
				['Carter', 'Dupont'],
				['Avery', 'Zhang'],
				['Wyatt', 'Costa'],
				['Violet', 'Matsumoto'],
				['Jayden', 'León'],
				['Penelope', 'Adebayo'],
				['Luke', 'van Dijk'],
				['Stella', 'Pereira'],
				['Grayson', 'Aliyev'],
				['Aurora', 'Rana'],
				['Levi', 'Ndlovu'],
				['Naomi', 'Andreev'],
				['Gabriel', 'Berger'],
				['Camila', 'Seo'],
				['Isaac', 'Sato'],
				['Eleanor', 'Toure'],
				['Julian', 'Obrien'],
				['Madeline', 'Koenig'],
				['Anthony', 'Padilla'],
				['Bella', 'Nakamoto'],
				['Andrew', 'Ahmedov'],
				['Sadie', 'Jabari'],
				['Joshua', 'Qureshi'],
				['Skylar', 'Iverson'],
				['Christopher', 'Tan'],
				['Paisley', 'Yamamoto'],
				['Lincoln', 'Duarte'],
				['Savannah', 'Berg'],
				['Nathan', 'Gomez'],
				['Brooklyn', 'Rahman'],
				['Dylan', 'Kapoor'],
				['Claire', 'Samaras'],
				['Ezra', 'Habib'],
				['Lucy', 'Wojcik'],
				['Thomas', 'Arslan'],
				['Aaliyah', 'Bukhari'],
				['Aaron', 'Hwang'],
				['Isla', 'Choudhury'],
				['Ryan', 'Markovic'],
				['Caroline', 'Gonzalez'],
				['Asher', 'Demir'],
				['Ivy', 'Stefanov'],
				['Nolan', 'Ng'],
				['Elena', 'Rahimi'],
				['Adrian', 'Saleh'],
				['Piper', 'Sharma'],
				['Eli', 'Svensson'],
				['Nova', 'Velasquez'],
				['Jonathan', 'Usman'],
				['Melody', 'Hashimoto'],
				['Jason', 'Khan'],
				['Alice', 'Roshan'],
				['Leo', 'Deng'],
				['Hailey', 'Abebe'],
			],
			foot: [],
		});

		pdfView.document = document;
	}

	renderDocument(document: PDFDocument, pdfView: PDFView) {
		const width = document.width;
		document.setFontSize(20);
		document.setFontColor(100, 100, 100, 255);
		let options: TextOptions = {
			align: 'center',
			baseline: 'top',
		};
		document.addText('Hello World 1', width / 2 - 250, 0, options);
		ImageSource.fromUrl('https://static.wikia.nocookie.net/xmenmovies/images/9/94/Deadpool_Textless.jpg')
			.then((image: ImageSource) => {
				document.addImage(image, 0, 0, 50, 50);
				document.addPage();
				document.setFontSize(50);
				document.setFontColor(255, 0, 0, 255);
				document.addText('Hello World 2', 10, 100);
				document.addPage();
				document.setFontColor(0, 0, 0, 255);
				document.addText('Hello World 3', 10, 100);
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
