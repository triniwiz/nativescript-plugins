declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export class Color {
						public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.Color>;
						public equals(other: any): boolean;
						public getValues(value: java.nio.ByteBuffer): void;
						public constructor(r: number, g: number, b: number, a: number);
						public getG(): number;
						public getA(): number;
						public hashCode(): number;
						public component4(): number;
						public toString(): string;
						public component2(): number;
						public getR(): number;
						public copy(r: number, g: number, b: number, a: number): io.github.triniwiz.plugins.pdf.Color;
						public getB(): number;
						public component1(): number;
						public component3(): number;
					}
					export module Color {
						export class Companion {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.Color.Companion>;
							public fromHex(hex: number): io.github.triniwiz.plugins.pdf.Color;
							public getRed(): io.github.triniwiz.plugins.pdf.Color;
							public getBlack(): io.github.triniwiz.plugins.pdf.Color;
							public fromHex($this$fromHex_u24lambda_u240: string): io.github.triniwiz.plugins.pdf.Color;
							public getWhite(): io.github.triniwiz.plugins.pdf.Color;
							public grey(value: number): io.github.triniwiz.plugins.pdf.Color;
							public getGreen(): io.github.triniwiz.plugins.pdf.Color;
							public getBlue(): io.github.triniwiz.plugins.pdf.Color;
							public fromFloats(r: number, g: number, b: number, a: number): io.github.triniwiz.plugins.pdf.Color;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export class JNIHelpers {
						public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.JNIHelpers>;
						public constructor();
						public static pairFirst(pair: globalAndroid.util.Pair<java.lang.Boolean, string>): boolean;
						public static pairSecond(pair: globalAndroid.util.Pair<java.lang.Boolean, string>): string;
					}
					export module JNIHelpers {
						export class Companion {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.JNIHelpers.Companion>;
							public pairFirst(pair: globalAndroid.util.Pair<java.lang.Boolean, string>): boolean;
							public pairSecond(pair: globalAndroid.util.Pair<java.lang.Boolean, string>): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export class Pdf {
						public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.Pdf>;
						public static loadLib(): void;
						public constructor();
						public loadFromBuffer(buffer: java.nio.ByteBuffer): io.github.triniwiz.plugins.pdf.PdfDocument;
						public loadFromBytes(bytes: androidNative.Array<number>): io.github.triniwiz.plugins.pdf.PdfDocument;
						public getScale(): number;
						public loadFromPath(this_: string, path: string): io.github.triniwiz.plugins.pdf.PdfDocument;
						public loadFromBytes(this_: androidNative.Array<number>, bytes: string): io.github.triniwiz.plugins.pdf.PdfDocument;
						public setScale(value: number): void;
						public loadFromPath(path: string): io.github.triniwiz.plugins.pdf.PdfDocument;
						public loadFromBuffer(this_: java.nio.ByteBuffer, buffer: string): io.github.triniwiz.plugins.pdf.PdfDocument;
					}
					export module Pdf {
						export class Companion {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.Pdf.Companion>;
							public isLibraryLoaded$pdf_release(): boolean;
							public loadLib(): void;
							public setLibraryLoaded$pdf_release(value: boolean): void;
							public getPDFInstance$pdf_release(): number;
							public setPDFInstance$pdf_release(value: number): void;
							public getInstance(): io.github.triniwiz.plugins.pdf.Pdf;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export class PdfDocument {
						public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfDocument>;
						public getFileFromVFS(fileName: string): string;
						public setFont(this_: string, fontName: string, fontStyle: string): void;
						public circle(x: number, y: number, r: number, style: io.github.triniwiz.plugins.pdf.PdfStyle): void;
						public setFillColor(r: number, g: number, b: number): void;
						public setDrawColor(r: number, g: number, b: number, a: number): void;
						public addPage(size: io.github.triniwiz.plugins.pdf.PdfPagerSize, orientation: io.github.triniwiz.plugins.pdf.PdfOrientation): void;
						public finalize(): void;
						public addImage(image: string, mime: string, x: number, y: number, width: number): void;
						public rect(x: number, y: number, width: number, height: number): void;
						public addImage(bytes: androidNative.Array<number>, x: number, y: number): void;
						public addText(this_: string, text: number, x: number, y: io.github.triniwiz.plugins.pdf.PdfTextOptions): void;
						public constructor(document: java.lang.Long, config: io.github.triniwiz.plugins.pdf.PdfDocumentConfig);
						public rect(x: number, y: number, width: number, height: number, style: io.github.triniwiz.plugins.pdf.PdfStyle): void;
						public setDrawColor(r: number, g: number, b: number): void;
						public addFileToVFS(fileName: string, fileContent: string): void;
						public getConfig(): io.github.triniwiz.plugins.pdf.PdfDocumentConfig;
						public constructor();
						public setFont(fontName: string, fontStyle: string): void;
						public save(path: string, callback: any): void;
						public addImage(image: io.github.triniwiz.plugins.pdf.PdfImage, x: number, y: number, width: number): void;
						public addImage(buffer: java.nio.ByteBuffer, x: number, y: number, width: number): void;
						public table(thisCollection$iv: io.github.triniwiz.plugins.pdf.table.PdfTable): string;
						public addImage(image: string, mime: string, x: number, y: number): void;
						public addImage(bitmap: globalAndroid.graphics.Bitmap, x: number, y: number, width: number): void;
						public renderToBitmap(page: number, bitmap: globalAndroid.graphics.Bitmap): void;
						public addPage(size: io.github.triniwiz.plugins.pdf.PdfPagerSize): void;
						public addText(text: string, x: number, y: number): void;
						public constructor(it: io.github.triniwiz.plugins.pdf.PdfDocumentConfig);
						public roundedRect(x: number, y: number, width: number, height: number, rx: number, ry: number): void;
						public pagesInfo$pdf_release(buffer: java.nio.ByteBuffer): void;
						public addImage(image: io.github.triniwiz.plugins.pdf.PdfImage, x: number, y: number, width: number, height: number): void;
						public addFont(postScriptNameOrPath: string, id: string): boolean;
						public addImage(bitmap: globalAndroid.graphics.Bitmap, x: number, y: number): void;
						public setFontColor(r: number, g: number, b: number): void;
						public roundedRect(x: number, y: number, width: number, height: number, rx: number, ry: number, style: io.github.triniwiz.plugins.pdf.PdfStyle): void;
						public setFontSize(value: number): void;
						public saveSync(this_: string): void;
						public ellipse(x: number, y: number, rx: number, ry: number): void;
						public existsFileInVFS(fileName: string): boolean;
						public getFontSize(): number;
						public renderToBitmap(page: number, bitmap: globalAndroid.graphics.Bitmap, rect: globalAndroid.graphics.Rect, scale: number): void;
						public addFont(it: string, buffer: string, read: string, os: string, reader: string): boolean;
						public setFontColor(r: number, g: number, b: number, a: number): void;
						public count(): number;
						public addImage(buffer: java.nio.ByteBuffer, x: number, y: number, width: number, height: number): void;
						public addFont(postScriptNameOrPath: string, id: string, fontStyle: string, fontWeight: string): boolean;
						public addImage(image: io.github.triniwiz.plugins.pdf.PdfImage, x: number, y: number): void;
						public addImage(img: string, decoded: string, this_: number, image: number, mime: number, x: number): void;
						public getHeight(): number;
						public addImage(bitmap: globalAndroid.graphics.Bitmap, x: number, y: number, width: number, height: number): void;
						public getNativeDocument$pdf_release(): number;
						public setNativeDocument$pdf_release(value: number): void;
						public addPage(): void;
						public addImage(bytes: androidNative.Array<number>, x: number, y: number, width: number, height: number): void;
						public setFillColor(r: number, g: number, b: number, a: number): void;
						public getWidth(): number;
						public addImage(buffer: java.nio.ByteBuffer, x: number, y: number): void;
						public circle(x: number, y: number, r: number): void;
						public ellipse(x: number, y: number, rx: number, ry: number, style: io.github.triniwiz.plugins.pdf.PdfStyle): void;
						public getLineWidth(): number;
						public setLineWidth(value: number): void;
						public addFont(postScriptNameOrPath: string, id: string, fontStyle: string): boolean;
						public addImage(bytes: androidNative.Array<number>, x: number, y: number, width: number): void;
						public renderToBitmap(page: number, bitmap: globalAndroid.graphics.Bitmap, rect: globalAndroid.graphics.Rect): void;
					}
					export module PdfDocument {
						export class Companion {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfDocument.Companion>;
						}
						export class ReaderInputStream {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfDocument.ReaderInputStream>;
							public constructor(reader: java.io.Reader);
							public read(): number;
							public read(i: androidNative.Array<number>, this_: number, b: number): number;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export class PdfDocumentConfig {
						public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfDocumentConfig>;
						public constructor();
						public setUnits(value: io.github.triniwiz.plugins.pdf.PdfUnit): void;
						public getOrientation(): io.github.triniwiz.plugins.pdf.PdfOrientation;
						public getUnits(): io.github.triniwiz.plugins.pdf.PdfUnit;
						public getSize(): io.github.triniwiz.plugins.pdf.PdfPagerSize;
						public setSize(value: io.github.triniwiz.plugins.pdf.PdfPagerSize): void;
						public setDeviceScale(value: number): void;
						public setOrientation(value: io.github.triniwiz.plugins.pdf.PdfOrientation): void;
						public getDeviceScale(): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export class PdfImage {
						public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfImage>;
						public getNativeImage$pdf_release(): number;
						public setNativeImage$pdf_release(value: number): void;
						public static fromEncodedDataAsync(data: java.nio.ByteBuffer, callback: any): void;
						public static fromBitmapAsync(data: globalAndroid.graphics.Bitmap, callback: any): void;
						public static fromEncodedData(data: java.nio.ByteBuffer): io.github.triniwiz.plugins.pdf.PdfImage;
						public static fromEncodedDataAsync(data: androidNative.Array<number>, callback: any): void;
						public finalize(): void;
						public static fromDataAsync(data: java.nio.ByteBuffer, width: number, height: number, callback: any): void;
						public static fromEncodedData(data: androidNative.Array<number>): io.github.triniwiz.plugins.pdf.PdfImage;
						public static fromBitmap(data: globalAndroid.graphics.Bitmap): io.github.triniwiz.plugins.pdf.PdfImage;
						public static fromDataAsync(data: androidNative.Array<number>, width: number, height: number, callback: any): void;
						public static fromData(data: androidNative.Array<number>, width: number, height: number): io.github.triniwiz.plugins.pdf.PdfImage;
						public constructor(nativeImage: number);
						public static fromData(data: java.nio.ByteBuffer, width: number, height: number): io.github.triniwiz.plugins.pdf.PdfImage;
						public getHeight(): number;
						public getWidth(): number;
					}
					export module PdfImage {
						export class Companion {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfImage.Companion>;
							public fromBitmapAsync(data: globalAndroid.graphics.Bitmap, callback: any): void;
							public fromData(this_: androidNative.Array<number>, data: number, width: number): io.github.triniwiz.plugins.pdf.PdfImage;
							public fromDataAsync(data: java.nio.ByteBuffer, width: number, height: number, callback: any): void;
							public fromEncodedData(this_: androidNative.Array<number>): io.github.triniwiz.plugins.pdf.PdfImage;
							public fromEncodedDataAsync(data: java.nio.ByteBuffer, callback: any): void;
							public fromBitmap(this_: globalAndroid.graphics.Bitmap): io.github.triniwiz.plugins.pdf.PdfImage;
							public fromEncodedData(this_: java.nio.ByteBuffer): io.github.triniwiz.plugins.pdf.PdfImage;
							public fromDataAsync(data: androidNative.Array<number>, width: number, height: number, callback: any): void;
							public fromEncodedDataAsync(data: androidNative.Array<number>, callback: any): void;
							public fromData(this_: java.nio.ByteBuffer, data: number, width: number): io.github.triniwiz.plugins.pdf.PdfImage;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export class PdfOrientation {
						public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfOrientation>;
						public static Landscape: io.github.triniwiz.plugins.pdf.PdfOrientation;
						public static Portrait: io.github.triniwiz.plugins.pdf.PdfOrientation;
						public static getEntries(): any;
						public static values(): androidNative.Array<io.github.triniwiz.plugins.pdf.PdfOrientation>;
						public static valueOf(value: string): io.github.triniwiz.plugins.pdf.PdfOrientation;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export class PdfPageView {
						public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfPageView>;
						public setPdfView$pdf_release(value: io.github.triniwiz.plugins.pdf.PdfView): void;
						public getPdfView$pdf_release(): io.github.triniwiz.plugins.pdf.PdfView;
						public setPageIndex$pdf_release(value: number): void;
						public getPageIndex$pdf_release(): number;
						public getBitmap$pdf_release(): globalAndroid.graphics.Bitmap;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
						public setBitmap$pdf_release(value: globalAndroid.graphics.Bitmap): void;
						public constructor(context: globalAndroid.content.Context);
						public onDraw(it: globalAndroid.graphics.Canvas): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export class PdfPagerSize {
						public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfPagerSize>;
						public setType$pdf_release(value: number): void;
						public getHeight$pdf_release(): number;
						public setHeight$pdf_release(value: number): void;
						public static custom(width: number, height: number): io.github.triniwiz.plugins.pdf.PdfPagerSize;
						public static standard(size: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize): io.github.triniwiz.plugins.pdf.PdfPagerSize;
						public getType$pdf_release(): number;
						public setWidth$pdf_release(value: number): void;
						public constructor(type: number, width: number, height: number);
						public getWidth$pdf_release(): number;
						public static a4(): io.github.triniwiz.plugins.pdf.PdfPagerSize;
					}
					export module PdfPagerSize {
						export class Companion {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfPagerSize.Companion>;
							public standard(size: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize): io.github.triniwiz.plugins.pdf.PdfPagerSize;
							public a4(): io.github.triniwiz.plugins.pdf.PdfPagerSize;
							public custom(width: number, height: number): io.github.triniwiz.plugins.pdf.PdfPagerSize;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export class PdfRotationDirection {
						public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfRotationDirection>;
						public static CW: io.github.triniwiz.plugins.pdf.PdfRotationDirection;
						public static CCW: io.github.triniwiz.plugins.pdf.PdfRotationDirection;
						public static valueOf(value: string): io.github.triniwiz.plugins.pdf.PdfRotationDirection;
						public static getEntries(): any;
						public getValue(): number;
						public static values(): androidNative.Array<io.github.triniwiz.plugins.pdf.PdfRotationDirection>;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export class PdfRotationOrMatrix {
						public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfRotationOrMatrix>;
						public isMatrix$pdf_release(): boolean;
						public setMatrix$pdf_release(value: io.github.triniwiz.plugins.pdf.PdfRotationOrMatrix.Matrix): void;
						public getAngle$pdf_release(): number;
						public getMatrix$pdf_release(): io.github.triniwiz.plugins.pdf.PdfRotationOrMatrix.Matrix;
						public setAngle$pdf_release(value: number): void;
						public static matrix(a: number, b: number, c: number, d: number, e: number, f: number): io.github.triniwiz.plugins.pdf.PdfRotationOrMatrix;
						public static angle(value: number): io.github.triniwiz.plugins.pdf.PdfRotationOrMatrix;
					}
					export module PdfRotationOrMatrix {
						export class Companion {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfRotationOrMatrix.Companion>;
							public matrix($this$matrix_u24lambda_u241: number, this_: number, a: number, b: number, c: number, d: number): io.github.triniwiz.plugins.pdf.PdfRotationOrMatrix;
							public getZero(): io.github.triniwiz.plugins.pdf.PdfRotationOrMatrix;
							public angle($this$angle_u24lambda_u240: number): io.github.triniwiz.plugins.pdf.PdfRotationOrMatrix;
						}
						export class Matrix {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfRotationOrMatrix.Matrix>;
							public constructor(a: number, b: number, c: number, d: number, e: number, f: number);
							public getA(): number;
							public copy(a: number, b: number, c: number, d: number, e: number, f: number): io.github.triniwiz.plugins.pdf.PdfRotationOrMatrix.Matrix;
							public getC(): number;
							public getF(): number;
							public hashCode(): number;
							public component2(): number;
							public component5(): number;
							public getD(): number;
							public toString(): string;
							public component1(): number;
							public getB(): number;
							public component4(): number;
							public equals(other: any): boolean;
							public component6(): number;
							public getE(): number;
							public component3(): number;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export class PdfStandardPaperSize {
						public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfStandardPaperSize>;
						public static USLetterAnsiA: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static USHalfLetter: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static USGovernmentLetter: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static USLegal: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static USJuniorLegal: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static USGovernmentLegal: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static USLedgerTabloidAnsiB: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static A0x4: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static A0x2: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static A0: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static A1: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static A2: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static A3: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static A4: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static A4R: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static A5: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static A6: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static A7: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static A8: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static A9: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static A10: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static B0: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static B1: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static B2: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static B3: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static B4: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static B5: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static B6: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static B7: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static B8: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static B9: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static B10: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static C0: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static C1: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static C2: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static C3: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static C4: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static C5: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static C6: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static C7: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static C8: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static C9: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static C10: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static AnsiBPlus: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static AnsiC: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static AnsiD: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static AnsiE: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static ArchA: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static ArchB: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static ArchC: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static ArchD: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public static ArchE: io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public getWidth(): number;
						public static values(): androidNative.Array<io.github.triniwiz.plugins.pdf.PdfStandardPaperSize>;
						public static getEntries(): any;
						public static valueOf(value: string): io.github.triniwiz.plugins.pdf.PdfStandardPaperSize;
						public getHeight(): number;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export class PdfStyle {
						public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfStyle>;
						public static S: io.github.triniwiz.plugins.pdf.PdfStyle;
						public static F: io.github.triniwiz.plugins.pdf.PdfStyle;
						public static DF: io.github.triniwiz.plugins.pdf.PdfStyle;
						public static FD: io.github.triniwiz.plugins.pdf.PdfStyle;
						public static valueOf(value: string): io.github.triniwiz.plugins.pdf.PdfStyle;
						public static getEntries(): any;
						public static values(): androidNative.Array<io.github.triniwiz.plugins.pdf.PdfStyle>;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export class PdfTextAlignment {
						public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfTextAlignment>;
						public static Left: io.github.triniwiz.plugins.pdf.PdfTextAlignment;
						public static Center: io.github.triniwiz.plugins.pdf.PdfTextAlignment;
						public static Right: io.github.triniwiz.plugins.pdf.PdfTextAlignment;
						public static Justify: io.github.triniwiz.plugins.pdf.PdfTextAlignment;
						public static getEntries(): any;
						public static valueOf(value: string): io.github.triniwiz.plugins.pdf.PdfTextAlignment;
						public static values(): androidNative.Array<io.github.triniwiz.plugins.pdf.PdfTextAlignment>;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export class PdfTextBaseline {
						public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfTextBaseline>;
						public static Alphabetic: io.github.triniwiz.plugins.pdf.PdfTextBaseline;
						public static Ideographic: io.github.triniwiz.plugins.pdf.PdfTextBaseline;
						public static Bottom: io.github.triniwiz.plugins.pdf.PdfTextBaseline;
						public static Top: io.github.triniwiz.plugins.pdf.PdfTextBaseline;
						public static Middle: io.github.triniwiz.plugins.pdf.PdfTextBaseline;
						public static Hanging: io.github.triniwiz.plugins.pdf.PdfTextBaseline;
						public static valueOf(value: string): io.github.triniwiz.plugins.pdf.PdfTextBaseline;
						public static getEntries(): any;
						public static values(): androidNative.Array<io.github.triniwiz.plugins.pdf.PdfTextBaseline>;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export class PdfTextOptions {
						public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfTextOptions>;
						public constructor();
						public setMaxWidth(value: number): void;
						public getBaseline(): io.github.triniwiz.plugins.pdf.PdfTextBaseline;
						public getHorizontalScale(): number;
						public setRotationDirection(value: io.github.triniwiz.plugins.pdf.PdfRotationDirection): void;
						public getRotationDirection(): io.github.triniwiz.plugins.pdf.PdfRotationDirection;
						public getAlign(): io.github.triniwiz.plugins.pdf.PdfTextAlignment;
						public setCharSpace(value: number): void;
						public setHorizontalScale(value: number): void;
						public getCharSpace(): number;
						public setLineHeightFactor(value: number): void;
						public getMaxWidth(): number;
						public getAngle(): io.github.triniwiz.plugins.pdf.PdfRotationOrMatrix;
						public setAlign(value: io.github.triniwiz.plugins.pdf.PdfTextAlignment): void;
						public setAngle(value: io.github.triniwiz.plugins.pdf.PdfRotationOrMatrix): void;
						public setBaseline(value: io.github.triniwiz.plugins.pdf.PdfTextBaseline): void;
						public getLineHeightFactor(): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export class PdfTilePageView {
						public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfTilePageView>;
						public draw(this_: globalAndroid.graphics.Canvas): void;
						public loadPage(index: number, pdfView: io.github.triniwiz.plugins.pdf.PdfView): void;
						public setLowResBitmap$pdf_release(value: globalAndroid.graphics.Bitmap): void;
						public setHighResBitmap$pdf_release(value: globalAndroid.graphics.Bitmap): void;
						public onScaleEnd(detector: globalAndroid.view.ScaleGestureDetector): void;
						public resetZoomAndScroll(): void;
						public computeScroll(): void;
						public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
						public getLowResBitmap$pdf_release(): globalAndroid.graphics.Bitmap;
						public onScaleBegin(detector: globalAndroid.view.ScaleGestureDetector): boolean;
						public getHighResBitmap$pdf_release(): globalAndroid.graphics.Bitmap;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
						public onScale(focusX: globalAndroid.view.ScaleGestureDetector): boolean;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
						public constructor(context: globalAndroid.content.Context);
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export class PdfUnit {
						public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfUnit>;
						public static mm: io.github.triniwiz.plugins.pdf.PdfUnit;
						public static points: io.github.triniwiz.plugins.pdf.PdfUnit;
						public static cm: io.github.triniwiz.plugins.pdf.PdfUnit;
						public static inches: io.github.triniwiz.plugins.pdf.PdfUnit;
						public static values(): androidNative.Array<io.github.triniwiz.plugins.pdf.PdfUnit>;
						public static getEntries(): any;
						public static valueOf(value: string): io.github.triniwiz.plugins.pdf.PdfUnit;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export class PdfView {
						public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfView>;
						public getHandler$pdf_release(): globalAndroid.os.Handler;
						public getPdfScrollX(): number;
						public onSurfaceTextureAvailable(surface: globalAndroid.graphics.SurfaceTexture, width: number, height: number): void;
						public setUseSurface(value: boolean): void;
						public loadFromBytes(bytes: androidNative.Array<number>, password: string): void;
						public loadFromUrl(url: string, password: string): void;
						public onSurfaceTextureSizeChanged(surface: globalAndroid.graphics.SurfaceTexture, width: number, height: number): void;
						public loadFromPath(path: string, password: string): void;
						public getPageSpacing(): number;
						public loadFromBytes(bytes: androidNative.Array<number>): void;
						public surfaceChanged(holder: globalAndroid.view.SurfaceHolder, format: number, width: number, height: number): void;
						public setDocument(doc: io.github.triniwiz.plugins.pdf.PdfDocument): void;
						public setHandler$pdf_release(value: globalAndroid.os.Handler): void;
						public onSurfaceTextureDestroyed(surface: globalAndroid.graphics.SurfaceTexture): boolean;
						public constructor($this$toColorInt$iv: globalAndroid.content.Context, set: globalAndroid.util.AttributeSet);
						public onSurfaceTextureUpdated(surface: globalAndroid.graphics.SurfaceTexture): void;
						public onScaleEnd(detector: globalAndroid.view.ScaleGestureDetector): void;
						public getUseSurface(): boolean;
						public loadFromBuffer(buffer: java.nio.ByteBuffer): void;
						public scrollToPage(pageInfo: number, targetY: boolean): void;
						public loadFromBuffer(buffer: java.nio.ByteBuffer, password: string): void;
						public getCanSnap(): boolean;
						public onScaleBegin(detector: globalAndroid.view.ScaleGestureDetector): boolean;
						public getCurrentPage(): number;
						public onDraw(canvas: globalAndroid.graphics.Canvas): void;
						public getPdfScrollY(): number;
						public surfaceCreated(holder: globalAndroid.view.SurfaceHolder): void;
						public resetZoom(): void;
						public zoomTo(this_: number, scale: number, focusX: number, focusY: boolean): void;
						public onSizeChanged(it: number, element$iv: number, $i$f$forEach: number, $this$forEach$iv: number): void;
						public onAttachedToWindow(): void;
						public setPageSpacing(value: number): void;
						public awakenScrollBars(): boolean;
						public computeScroll(): void;
						public getDocument(): io.github.triniwiz.plugins.pdf.PdfDocument;
						public getPageCount(): number;
						public dispatchDraw(canvas: globalAndroid.graphics.Canvas): void;
						public setCanSnap(value: boolean): void;
						public onScale(oldScale: globalAndroid.view.ScaleGestureDetector): boolean;
						public getListener(): io.github.triniwiz.plugins.pdf.PdfView.Listener;
						public onTouchEvent(this_: globalAndroid.view.MotionEvent): boolean;
						public getCurrentScale(): number;
						public getHandlerThread$pdf_release(): globalAndroid.os.HandlerThread;
						public surfaceDestroyed(holder: globalAndroid.view.SurfaceHolder): void;
						public setListener(value: io.github.triniwiz.plugins.pdf.PdfView.Listener): void;
						public loadFromPath(path: string): void;
						public constructor(context: globalAndroid.content.Context);
						public loadFromUrl(url: string): void;
						public drawPages(): void;
					}
					export module PdfView {
						export class Listener {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfView.Listener>;
							/**
							 * Constructs a new instance of the io.github.triniwiz.plugins.pdf.PdfView$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onError(param0: java.lang.Exception): void; onLoad(param0: io.github.triniwiz.plugins.pdf.PdfDocument): void; onPageChange(param0: number): void });
							public constructor();
							public onLoad(param0: io.github.triniwiz.plugins.pdf.PdfDocument): void;
							public onError(param0: java.lang.Exception): void;
							public onPageChange(param0: number): void;
						}
						export class PageInfo {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfView.PageInfo>;
							public getWidth(): number;
							public setBottom(value: number): void;
							public hashCode(): number;
							public component2(): number;
							public component5(): number;
							public getIndex(): number;
							public copy(index: number, top: number, bottom: number, width: number, height: number): io.github.triniwiz.plugins.pdf.PdfView.PageInfo;
							public getTop(): number;
							public toString(): string;
							public setTop(value: number): void;
							public getHeight(): number;
							public constructor(index: number, top: number, bottom: number, width: number, height: number);
							public component1(): number;
							public getBottom(): number;
							public component4(): number;
							public equals(other: any): boolean;
							public component3(): number;
							public setWidth(value: number): void;
							public setHeight(value: number): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export module table {
						export class CellHookData extends io.github.triniwiz.plugins.pdf.table.HookData {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.CellHookData>;
							public getSection(): io.github.triniwiz.plugins.pdf.table.Section;
							public getWidth(): number;
							public getHeight(): number;
							public getContent(): string;
							public setContent(value: string): void;
							public getRowIndex(): number;
							public constructor(pageIndex: number, x: number, y: number, section: io.github.triniwiz.plugins.pdf.table.Section, rowIndex: number, columnIndex: number, width: number, height: number, colSpan: number, rowSpan: number, lineCount: number, content: string);
							public getRowSpan(): number;
							public getLineCount(): number;
							public constructor(pageIndex: number, x: number, y: number);
							public getColumnIndex(): number;
							public getColSpan(): number;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export module table {
						export abstract class CellWidth {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.CellWidth>;
						}
						export module CellWidth {
							export class Auto extends io.github.triniwiz.plugins.pdf.table.CellWidth {
								public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.CellWidth.Auto>;
								public static INSTANCE: io.github.triniwiz.plugins.pdf.table.CellWidth.Auto;
								public toString(): string;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
							export class Fixed extends io.github.triniwiz.plugins.pdf.table.CellWidth {
								public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.CellWidth.Fixed>;
								public toString(): string;
								public component1(): number;
								public constructor(points: number);
								public getPoints(): number;
								public copy(points: number): io.github.triniwiz.plugins.pdf.table.CellWidth.Fixed;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
							export class Wrap extends io.github.triniwiz.plugins.pdf.table.CellWidth {
								public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.CellWidth.Wrap>;
								public static INSTANCE: io.github.triniwiz.plugins.pdf.table.CellWidth.Wrap;
								public toString(): string;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export module table {
						export class ColumnDef {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.ColumnDef>;
							public getHeader(): string;
							public component2(): string;
							public copy(header: string, dataKey: string): io.github.triniwiz.plugins.pdf.table.ColumnDef;
							public hashCode(): number;
							public getDataKey(): string;
							public equals(other: any): boolean;
							public toString(): string;
							public constructor(header: string, dataKey: string);
							public component1(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export module table {
						export abstract class ColumnKey {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.ColumnKey>;
							public isDataKey(): boolean;
						}
						export module ColumnKey {
							export class DataKey extends io.github.triniwiz.plugins.pdf.table.ColumnKey {
								public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.ColumnKey.DataKey>;
								public component1(): string;
								public copy(key: string): io.github.triniwiz.plugins.pdf.table.ColumnKey.DataKey;
								public toString(): string;
								public constructor(key: string);
								public getKey(): string;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
							export class Index extends io.github.triniwiz.plugins.pdf.table.ColumnKey {
								public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.ColumnKey.Index>;
								public toString(): string;
								public component1(): number;
								public copy(index: number): io.github.triniwiz.plugins.pdf.table.ColumnKey.Index;
								public constructor(index: number);
								public hashCode(): number;
								public equals(other: any): boolean;
								public getIndex(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export module table {
						export class FontFamily {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.FontFamily>;
							public static Helvetica: io.github.triniwiz.plugins.pdf.table.FontFamily;
							public static Times: io.github.triniwiz.plugins.pdf.table.FontFamily;
							public static Courier: io.github.triniwiz.plugins.pdf.table.FontFamily;
							public static values(): androidNative.Array<io.github.triniwiz.plugins.pdf.table.FontFamily>;
							public static default(): io.github.triniwiz.plugins.pdf.table.FontFamily;
							public static valueOf(value: string): io.github.triniwiz.plugins.pdf.table.FontFamily;
							public static getEntries(): any;
							public getValue(): number;
						}
						export module FontFamily {
							export class Companion {
								public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.FontFamily.Companion>;
								public default(): io.github.triniwiz.plugins.pdf.table.FontFamily;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export module table {
						export class FontStyle {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.FontStyle>;
							public static Normal: io.github.triniwiz.plugins.pdf.table.FontStyle;
							public static Bold: io.github.triniwiz.plugins.pdf.table.FontStyle;
							public static Italic: io.github.triniwiz.plugins.pdf.table.FontStyle;
							public static BoldItalic: io.github.triniwiz.plugins.pdf.table.FontStyle;
							public static default(): io.github.triniwiz.plugins.pdf.table.FontStyle;
							public static values(): androidNative.Array<io.github.triniwiz.plugins.pdf.table.FontStyle>;
							public static valueOf(value: string): io.github.triniwiz.plugins.pdf.table.FontStyle;
							public static getEntries(): any;
							public getValue(): number;
						}
						export module FontStyle {
							export class Companion {
								public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.FontStyle.Companion>;
								public default(): io.github.triniwiz.plugins.pdf.table.FontStyle;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export module table {
						export class HookData {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.HookData>;
							public getY(): number;
							public getPageIndex(): number;
							public getX(): number;
							public constructor(pageIndex: number, x: number, y: number);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export module table {
						export class HorizontalAlign {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.HorizontalAlign>;
							public static Left: io.github.triniwiz.plugins.pdf.table.HorizontalAlign;
							public static Center: io.github.triniwiz.plugins.pdf.table.HorizontalAlign;
							public static Right: io.github.triniwiz.plugins.pdf.table.HorizontalAlign;
							public static valueOf(value: string): io.github.triniwiz.plugins.pdf.table.HorizontalAlign;
							public static getEntries(): any;
							public getValue(): number;
							public static values(): androidNative.Array<io.github.triniwiz.plugins.pdf.table.HorizontalAlign>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export module table {
						export class Margin {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.Margin>;
							public setLeft(value: number): void;
							public static default(uniform: number): io.github.triniwiz.plugins.pdf.table.Margin;
							public constructor(uniform: number);
							public getBottomChanged$pdf_release(): boolean;
							public getTop(): number;
							public getRight(): number;
							public setBottomChanged$pdf_release(value: boolean): void;
							public getRightChanged$pdf_release(): boolean;
							public setRight(value: number): void;
							public static default(): io.github.triniwiz.plugins.pdf.table.Margin;
							public setRightChanged$pdf_release(value: boolean): void;
							public getTopChanged$pdf_release(): boolean;
							public setTopChanged$pdf_release(value: boolean): void;
							public getBottom(): number;
							public setTop(value: number): void;
							public setBottom(value: number): void;
							public constructor(top: number, left: number, bottom: number, right: number);
							public getLeft(): number;
							public static default(left: number, right: number, top: number, bottom: number): io.github.triniwiz.plugins.pdf.table.Margin;
							public getLeftChanged$pdf_release(): boolean;
							public setLeftChanged$pdf_release(value: boolean): void;
						}
						export module Margin {
							export class Companion {
								public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.Margin.Companion>;
								public default(this_: number): io.github.triniwiz.plugins.pdf.table.Margin;
								public default(): io.github.triniwiz.plugins.pdf.table.Margin;
								public default(this_: number, left: number, right: number, top: number): io.github.triniwiz.plugins.pdf.table.Margin;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export module table {
						export class Overflow {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.Overflow>;
							public static LineBreak: io.github.triniwiz.plugins.pdf.table.Overflow;
							public static Ellipsize: io.github.triniwiz.plugins.pdf.table.Overflow;
							public static Visible: io.github.triniwiz.plugins.pdf.table.Overflow;
							public static Hidden: io.github.triniwiz.plugins.pdf.table.Overflow;
							public static values(): androidNative.Array<io.github.triniwiz.plugins.pdf.table.Overflow>;
							public static valueOf(value: string): io.github.triniwiz.plugins.pdf.table.Overflow;
							public static getEntries(): any;
							public static default(): io.github.triniwiz.plugins.pdf.table.Overflow;
							public getValue(): number;
						}
						export module Overflow {
							export class Companion {
								public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.Overflow.Companion>;
								public default(): io.github.triniwiz.plugins.pdf.table.Overflow;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export module table {
						export class Padding {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.Padding>;
							public setLeft(value: number): void;
							public static default(left: number, right: number, top: number, bottom: number): io.github.triniwiz.plugins.pdf.table.Padding;
							public constructor(uniform: number);
							public getBottomChanged$pdf_release(): boolean;
							public getTop(): number;
							public getRight(): number;
							public setBottomChanged$pdf_release(value: boolean): void;
							public getRightChanged$pdf_release(): boolean;
							public setRight(value: number): void;
							public setRightChanged$pdf_release(value: boolean): void;
							public getTopChanged$pdf_release(): boolean;
							public setTopChanged$pdf_release(value: boolean): void;
							public static default(uniform: number): io.github.triniwiz.plugins.pdf.table.Padding;
							public getBottom(): number;
							public setTop(value: number): void;
							public setBottom(value: number): void;
							public constructor(top: number, left: number, bottom: number, right: number);
							public static default(): io.github.triniwiz.plugins.pdf.table.Padding;
							public getLeft(): number;
							public getLeftChanged$pdf_release(): boolean;
							public setLeftChanged$pdf_release(value: boolean): void;
						}
						export module Padding {
							export class Companion {
								public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.Padding.Companion>;
								public default(this_: number): io.github.triniwiz.plugins.pdf.table.Padding;
								public default(): io.github.triniwiz.plugins.pdf.table.Padding;
								public default(this_: number, left: number, right: number, top: number): io.github.triniwiz.plugins.pdf.table.Padding;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export module table {
						export class PageBreak {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.PageBreak>;
							public static Auto: io.github.triniwiz.plugins.pdf.table.PageBreak;
							public static Avoid: io.github.triniwiz.plugins.pdf.table.PageBreak;
							public static Always: io.github.triniwiz.plugins.pdf.table.PageBreak;
							public static default(): io.github.triniwiz.plugins.pdf.table.PageBreak;
							public static getEntries(): any;
							public static values(): androidNative.Array<io.github.triniwiz.plugins.pdf.table.PageBreak>;
							public static valueOf(value: string): io.github.triniwiz.plugins.pdf.table.PageBreak;
							public getValue(): number;
						}
						export module PageBreak {
							export class Companion {
								public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.PageBreak.Companion>;
								public default(): io.github.triniwiz.plugins.pdf.table.PageBreak;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export module table {
						export class PdfTable {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.PdfTable>;
							public setPageBreak(value: io.github.triniwiz.plugins.pdf.table.PageBreak): void;
							public setMargin(value: io.github.triniwiz.plugins.pdf.table.Margin): void;
							public getMargin(): io.github.triniwiz.plugins.pdf.table.Margin;
							public setFoot(value: androidNative.Array<androidNative.Array<io.github.triniwiz.plugins.pdf.table.TableCellOrString>>): void;
							public getHooksListener(): io.github.triniwiz.plugins.pdf.table.TableHookListener;
							public setShowFoot(value: io.github.triniwiz.plugins.pdf.table.ShowFoot): void;
							public setTheme(value: io.github.triniwiz.plugins.pdf.table.TableTheme): void;
							public getStyles(): io.github.triniwiz.plugins.pdf.table.StyleDef;
							public getFootStyles(): io.github.triniwiz.plugins.pdf.table.StyleDef;
							public getFoot(): androidNative.Array<androidNative.Array<io.github.triniwiz.plugins.pdf.table.TableCellOrString>>;
							public setColumnStyles(value: java.util.Map<io.github.triniwiz.plugins.pdf.table.ColumnKey, io.github.triniwiz.plugins.pdf.table.StyleDef>): void;
							public setColumns(value: androidNative.Array<io.github.triniwiz.plugins.pdf.table.ColumnDef>): void;
							public setHead(value: androidNative.Array<androidNative.Array<io.github.triniwiz.plugins.pdf.table.TableCellOrString>>): void;
							public setBody(value: androidNative.Array<androidNative.Array<io.github.triniwiz.plugins.pdf.table.TableCellOrString>>): void;
							public getColumns(): androidNative.Array<io.github.triniwiz.plugins.pdf.table.ColumnDef>;
							public updatePosition(x: number, y: number): void;
							public onDidDrawCell(data: number, it: number, this_: number, index: number, x: number, y: number, section: number, rowIndex: number, columnIndex: number, width: number, height: number, colSpan: string): void;
							public setHeadStyles(value: io.github.triniwiz.plugins.pdf.table.StyleDef): void;
							public constructor();
							public setAlternateRowStyles(value: io.github.triniwiz.plugins.pdf.table.StyleDef): void;
							public getBodyStyles(): io.github.triniwiz.plugins.pdf.table.StyleDef;
							public setFootStyles(value: io.github.triniwiz.plugins.pdf.table.StyleDef): void;
							public getShowHead(): io.github.triniwiz.plugins.pdf.table.ShowHead;
							public setStyles(value: io.github.triniwiz.plugins.pdf.table.StyleDef): void;
							public setPosition(value: any): void;
							public getPageBreak(): io.github.triniwiz.plugins.pdf.table.PageBreak;
							public getShowFoot(): io.github.triniwiz.plugins.pdf.table.ShowFoot;
							public onDidDrawPage(index: number, x: number, y: number): void;
							public getColumnStyles(): java.util.Map<io.github.triniwiz.plugins.pdf.table.ColumnKey, io.github.triniwiz.plugins.pdf.table.StyleDef>;
							public setBodyStyles(value: io.github.triniwiz.plugins.pdf.table.StyleDef): void;
							public getHead(): androidNative.Array<androidNative.Array<io.github.triniwiz.plugins.pdf.table.TableCellOrString>>;
							public getAlternateRowStyles(): io.github.triniwiz.plugins.pdf.table.StyleDef;
							public getHeadStyles(): io.github.triniwiz.plugins.pdf.table.StyleDef;
							public getTheme(): io.github.triniwiz.plugins.pdf.table.TableTheme;
							public setShowHead(value: io.github.triniwiz.plugins.pdf.table.ShowHead): void;
							public onWillDrawPage(index: number, x: number, y: number): void;
							public getBody(): androidNative.Array<androidNative.Array<io.github.triniwiz.plugins.pdf.table.TableCellOrString>>;
							public getPosition(): any;
							public setHooksListener(value: io.github.triniwiz.plugins.pdf.table.TableHookListener): void;
							public onWillDrawCell(data: number, it: number, this_: number, index: number, x: number, y: number, section: number, rowIndex: number, columnIndex: number, width: number, height: number, colSpan: string): globalAndroid.util.Pair<java.lang.Boolean, string>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export module table {
						export class Section {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.Section>;
							public static Head: io.github.triniwiz.plugins.pdf.table.Section;
							public static Body: io.github.triniwiz.plugins.pdf.table.Section;
							public static Foot: io.github.triniwiz.plugins.pdf.table.Section;
							public static from(value: number): io.github.triniwiz.plugins.pdf.table.Section;
							public static getEntries(): any;
							public static values(): androidNative.Array<io.github.triniwiz.plugins.pdf.table.Section>;
							public getValue(): number;
							public static valueOf(value: string): io.github.triniwiz.plugins.pdf.table.Section;
						}
						export module Section {
							export class Companion {
								public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.Section.Companion>;
								public from(value: number): io.github.triniwiz.plugins.pdf.table.Section;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export module table {
						export class ShowFoot {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.ShowFoot>;
							public static EveryPage: io.github.triniwiz.plugins.pdf.table.ShowFoot;
							public static LastPage: io.github.triniwiz.plugins.pdf.table.ShowFoot;
							public static Never: io.github.triniwiz.plugins.pdf.table.ShowFoot;
							public static valueOf(value: string): io.github.triniwiz.plugins.pdf.table.ShowFoot;
							public getValue(): number;
							public static getEntries(): any;
							public static values(): androidNative.Array<io.github.triniwiz.plugins.pdf.table.ShowFoot>;
							public static default(): io.github.triniwiz.plugins.pdf.table.ShowFoot;
						}
						export module ShowFoot {
							export class Companion {
								public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.ShowFoot.Companion>;
								public default(): io.github.triniwiz.plugins.pdf.table.ShowFoot;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export module table {
						export class ShowHead {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.ShowHead>;
							public static EveryPage: io.github.triniwiz.plugins.pdf.table.ShowHead;
							public static FirstPage: io.github.triniwiz.plugins.pdf.table.ShowHead;
							public static Never: io.github.triniwiz.plugins.pdf.table.ShowHead;
							public static values(): androidNative.Array<io.github.triniwiz.plugins.pdf.table.ShowHead>;
							public static valueOf(value: string): io.github.triniwiz.plugins.pdf.table.ShowHead;
							public static getEntries(): any;
							public static default(): io.github.triniwiz.plugins.pdf.table.ShowHead;
							public getValue(): number;
						}
						export module ShowHead {
							export class Companion {
								public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.ShowHead.Companion>;
								public default(): io.github.triniwiz.plugins.pdf.table.ShowHead;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export module table {
						export class StyleDef {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.StyleDef>;
							public getFont(): io.github.triniwiz.plugins.pdf.table.FontFamily;
							public setOverflow(value: io.github.triniwiz.plugins.pdf.table.Overflow): void;
							public getOverflowValue(): number;
							public setOverflowValue(value: number): void;
							public getFontStyle(): io.github.triniwiz.plugins.pdf.table.FontStyle;
							public getFontStyleValue(): number;
							public setMinCellWidth(value: java.lang.Float): void;
							public getMinCellHeight(): number;
							public getFillColorValue(it: java.nio.ByteBuffer): boolean;
							public setFillColor(r: number, g: number, b: number): void;
							public setTextColor(value: io.github.triniwiz.plugins.pdf.Color): void;
							public setTextColor(r: number, g: number, b: number): void;
							public getCellPadding(): io.github.triniwiz.plugins.pdf.table.Padding;
							public setLineColor(r: number, g: number, b: number, a: number): void;
							public getLineColor(): io.github.triniwiz.plugins.pdf.Color;
							public setFontValue(value: number): void;
							public getCellWidth(): io.github.triniwiz.plugins.pdf.table.CellWidth;
							public setMinCellHeight(value: number): void;
							public setCellPadding(value: io.github.triniwiz.plugins.pdf.table.Padding): void;
							public getVerticalAlign(): io.github.triniwiz.plugins.pdf.table.VerticalAlign;
							public setFontStyle(value: io.github.triniwiz.plugins.pdf.table.FontStyle): void;
							public setFillColor(r: number, g: number, b: number, a: number): void;
							public getTextColorValue(it: java.nio.ByteBuffer): boolean;
							public setLineColor(value: io.github.triniwiz.plugins.pdf.Color): void;
							public getCellPadding(value: java.nio.ByteBuffer): void;
							public setCellWidth(value: io.github.triniwiz.plugins.pdf.table.CellWidth): void;
							public getMinCellWidth(): java.lang.Float;
							public setVerticalAlignValue(value: number): void;
							public setLineWidth(value: number): void;
							public setFont(value: io.github.triniwiz.plugins.pdf.table.FontFamily): void;
							public setFontSize(value: number): void;
							public setFontStyleValue(value: number): void;
							public getOverflow(): io.github.triniwiz.plugins.pdf.table.Overflow;
							public getFontValue(): number;
							public setFillColor(value: io.github.triniwiz.plugins.pdf.Color): void;
							public getVerticalAlignValue(): number;
							public constructor(
								font: io.github.triniwiz.plugins.pdf.table.FontFamily,
								fontStyle: io.github.triniwiz.plugins.pdf.table.FontStyle,
								overflow: io.github.triniwiz.plugins.pdf.table.Overflow,
								fillColor: io.github.triniwiz.plugins.pdf.Color,
								textColor: io.github.triniwiz.plugins.pdf.Color,
								cellWidth: io.github.triniwiz.plugins.pdf.table.CellWidth,
								minCellWidth: java.lang.Float,
								minCellHeight: number,
								horizontalAlign: io.github.triniwiz.plugins.pdf.table.HorizontalAlign,
								verticalAlign: io.github.triniwiz.plugins.pdf.table.VerticalAlign,
								fontSize: number,
								cellPadding: io.github.triniwiz.plugins.pdf.table.Padding,
								lineColor: io.github.triniwiz.plugins.pdf.Color,
								lineWidth: number,
							);
							public static default(): io.github.triniwiz.plugins.pdf.table.StyleDef;
							public getHorizontalAlign(): io.github.triniwiz.plugins.pdf.table.HorizontalAlign;
							public getTextColor(): io.github.triniwiz.plugins.pdf.Color;
							public setLineColor(r: number, g: number, b: number): void;
							public setVerticalAlign(value: io.github.triniwiz.plugins.pdf.table.VerticalAlign): void;
							public setTextColor(r: number, g: number, b: number, a: number): void;
							public getLineWidth(): number;
							public getFillColor(): io.github.triniwiz.plugins.pdf.Color;
							public getFontSize(): number;
							public getLineColorValue(it: java.nio.ByteBuffer): boolean;
							public getHorizontalAlignValue(): number;
							public setHorizontalAlignValue(value: number): void;
							public clone(): io.github.triniwiz.plugins.pdf.table.StyleDef;
							public getCellWidthValue(value: java.nio.ByteBuffer): void;
							public setHorizontalAlign(value: io.github.triniwiz.plugins.pdf.table.HorizontalAlign): void;
						}
						export module StyleDef {
							export class Companion {
								public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.StyleDef.Companion>;
								public default(): io.github.triniwiz.plugins.pdf.table.StyleDef;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export module table {
						export class TableCell {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.TableCell>;
							public getStyle(): io.github.triniwiz.plugins.pdf.table.StyleDef;
							public copy(content: string, rowSpan: number, colSpan: number, style: io.github.triniwiz.plugins.pdf.table.StyleDef): io.github.triniwiz.plugins.pdf.table.TableCell;
							public hashCode(): number;
							public component2(): number;
							public getRowSpan(): number;
							public toString(): string;
							public component1(): string;
							public constructor(content: string, rowSpan: number, colSpan: number, style: io.github.triniwiz.plugins.pdf.table.StyleDef);
							public getContent(): string;
							public equals(other: any): boolean;
							public component3(): number;
							public component4(): io.github.triniwiz.plugins.pdf.table.StyleDef;
							public getColSpan(): number;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export module table {
						export abstract class TableCellOrString {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.TableCellOrString>;
							public isCell(): boolean;
						}
						export module TableCellOrString {
							export class Cell extends io.github.triniwiz.plugins.pdf.table.TableCellOrString {
								public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.TableCellOrString.Cell>;
								public copy(cell: io.github.triniwiz.plugins.pdf.table.TableCell): io.github.triniwiz.plugins.pdf.table.TableCellOrString.Cell;
								public toString(): string;
								public constructor(cell: io.github.triniwiz.plugins.pdf.table.TableCell);
								public getCell(): io.github.triniwiz.plugins.pdf.table.TableCell;
								public hashCode(): number;
								public equals(other: any): boolean;
								public component1(): io.github.triniwiz.plugins.pdf.table.TableCell;
							}
							export class StringValue extends io.github.triniwiz.plugins.pdf.table.TableCellOrString {
								public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.TableCellOrString.StringValue>;
								public component1(): string;
								public toString(): string;
								public copy(value: string): io.github.triniwiz.plugins.pdf.table.TableCellOrString.StringValue;
								public constructor(value: string);
								public hashCode(): number;
								public equals(other: any): boolean;
								public getValue(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export module table {
						export class TableHookListener {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.TableHookListener>;
							/**
							 * Constructs a new instance of the io.github.triniwiz.plugins.pdf.table.TableHookListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onWillDrawPage(param0: io.github.triniwiz.plugins.pdf.table.HookData): void; onDidDrawPage(param0: io.github.triniwiz.plugins.pdf.table.HookData): void; onWillDrawCell(param0: io.github.triniwiz.plugins.pdf.table.CellHookData): globalAndroid.util.Pair<java.lang.Boolean, string>; onDidDrawCell(param0: io.github.triniwiz.plugins.pdf.table.CellHookData): void });
							public constructor();
							public onWillDrawCell(param0: io.github.triniwiz.plugins.pdf.table.CellHookData): globalAndroid.util.Pair<java.lang.Boolean, string>;
							public onDidDrawPage(param0: io.github.triniwiz.plugins.pdf.table.HookData): void;
							public onDidDrawCell(param0: io.github.triniwiz.plugins.pdf.table.CellHookData): void;
							public onWillDrawPage(param0: io.github.triniwiz.plugins.pdf.table.HookData): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export module table {
						export class TableTheme {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.TableTheme>;
							public static Striped: io.github.triniwiz.plugins.pdf.table.TableTheme;
							public static Grid: io.github.triniwiz.plugins.pdf.table.TableTheme;
							public static Plain: io.github.triniwiz.plugins.pdf.table.TableTheme;
							public static getEntries(): any;
							public static default(): io.github.triniwiz.plugins.pdf.table.TableTheme;
							public static valueOf(value: string): io.github.triniwiz.plugins.pdf.table.TableTheme;
							public static values(): androidNative.Array<io.github.triniwiz.plugins.pdf.table.TableTheme>;
							public getValue(): number;
						}
						export module TableTheme {
							export class Companion {
								public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.TableTheme.Companion>;
								public default(): io.github.triniwiz.plugins.pdf.table.TableTheme;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module plugins {
				export module pdf {
					export module table {
						export class VerticalAlign {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.table.VerticalAlign>;
							public static Top: io.github.triniwiz.plugins.pdf.table.VerticalAlign;
							public static Middle: io.github.triniwiz.plugins.pdf.table.VerticalAlign;
							public static Bottom: io.github.triniwiz.plugins.pdf.table.VerticalAlign;
							public static values(): androidNative.Array<io.github.triniwiz.plugins.pdf.table.VerticalAlign>;
							public static getEntries(): any;
							public static valueOf(value: string): io.github.triniwiz.plugins.pdf.table.VerticalAlign;
							public getValue(): number;
						}
					}
				}
			}
		}
	}
}

//Generics information:
