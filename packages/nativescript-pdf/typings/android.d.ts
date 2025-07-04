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
						public addText(text: string, x: number, y: number): void;
						public constructor(it: io.github.triniwiz.plugins.pdf.PdfDocumentConfig);
						public roundedRect(x: number, y: number, width: number, height: number, rx: number, ry: number): void;
						public circle(x: number, y: number, r: number, style: io.github.triniwiz.plugins.pdf.PdfStyle): void;
						public addImage(bitmap: globalAndroid.graphics.Bitmap, x: number, y: number): void;
						public setFontColor(r: number, g: number, b: number): void;
						public roundedRect(x: number, y: number, width: number, height: number, rx: number, ry: number, style: io.github.triniwiz.plugins.pdf.PdfStyle): void;
						public setFillColor(r: number, g: number, b: number): void;
						public setDrawColor(r: number, g: number, b: number, a: number): void;
						public addPage(size: io.github.triniwiz.plugins.pdf.PdfPagerSize, orientation: io.github.triniwiz.plugins.pdf.PdfOrientation): void;
						public setFontSize(value: number): void;
						public ellipse(x: number, y: number, rx: number, ry: number): void;
						public rect(x: number, y: number, width: number, height: number): void;
						public getFontSize(): number;
						public addImage(bytes: androidNative.Array<number>, x: number, y: number): void;
						public addText(this_: string, text: number, x: number, y: io.github.triniwiz.plugins.pdf.PdfTextOptions): void;
						public constructor(document: java.lang.Long, config: io.github.triniwiz.plugins.pdf.PdfDocumentConfig);
						public rect(x: number, y: number, width: number, height: number, style: io.github.triniwiz.plugins.pdf.PdfStyle): void;
						public setDrawColor(r: number, g: number, b: number): void;
						public setFontColor(r: number, g: number, b: number, a: number): void;
						public table(thisCollection$iv: io.github.triniwiz.plugins.pdf.table.PdfTable): void;
						public getConfig(): io.github.triniwiz.plugins.pdf.PdfDocumentConfig;
						public count(): number;
						public constructor();
						public addImage(buffer: java.nio.ByteBuffer, x: number, y: number, width: java.lang.Integer, height: java.lang.Integer): void;
						public getHeight(): number;
						public addImage(bitmap: globalAndroid.graphics.Bitmap, x: number, y: number, width: java.lang.Integer, height: java.lang.Integer): void;
						public getNativeDocument$pdf_release(): number;
						public setNativeDocument$pdf_release(value: number): void;
						public addPage(): void;
						public addImage(buffer: java.nio.ByteBuffer, x: number, y: number, width: java.lang.Integer): void;
						public addImage(bytes: androidNative.Array<number>, x: number, y: number, width: java.lang.Integer, height: java.lang.Integer): void;
						public setFillColor(r: number, g: number, b: number, a: number): void;
						public getWidth(): number;
						public addImage(buffer: java.nio.ByteBuffer, x: number, y: number): void;
						public circle(x: number, y: number, r: number): void;
						public ellipse(x: number, y: number, rx: number, ry: number, style: io.github.triniwiz.plugins.pdf.PdfStyle): void;
						public getLineWidth(): number;
						public setLineWidth(value: number): void;
						public addImage(bitmap: globalAndroid.graphics.Bitmap, x: number, y: number, width: java.lang.Integer): void;
						public addImage(bytes: androidNative.Array<number>, x: number, y: number, width: java.lang.Integer): void;
						public renderToBitmap(page: number, bitmap: globalAndroid.graphics.Bitmap): void;
						public addPage(size: io.github.triniwiz.plugins.pdf.PdfPagerSize): void;
					}
					export module PdfDocument {
						export class Companion {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfDocument.Companion>;
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
						public getListener(): io.github.triniwiz.plugins.pdf.PdfView.Listener;
						public onAttachedToWindow(): void;
						public loadFromBytes(bytes: androidNative.Array<number>, password: string): void;
						public loadFromUrl(url: string, password: string): void;
						public getCache(): androidx.collection.LruCache<java.lang.Integer, globalAndroid.graphics.Bitmap>;
						public getHandlerThread$pdf_release(): globalAndroid.os.HandlerThread;
						public setDocument(this_: io.github.triniwiz.plugins.pdf.PdfDocument): void;
						public getCacheSize(): number;
						public loadFromPath(path: string, password: string): void;
						public loadFromBuffer(buffer: java.nio.ByteBuffer): void;
						public getDocument(): io.github.triniwiz.plugins.pdf.PdfDocument;
						public setListener(value: io.github.triniwiz.plugins.pdf.PdfView.Listener): void;
						public loadFromBytes(bytes: androidNative.Array<number>): void;
						public constructor($this$handlerThread_u24lambda_u241: globalAndroid.content.Context, attr: globalAndroid.util.AttributeSet);
						public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
						public loadFromBuffer(buffer: java.nio.ByteBuffer, password: string): void;
						public getCanSnap(): boolean;
						public getCurrentPage(): number;
						public loadFromPath(path: string): void;
						public setHandler$pdf_release(value: globalAndroid.os.Handler): void;
						public setCanSnap(value: boolean): void;
						public constructor(context: globalAndroid.content.Context);
						public loadFromUrl(url: string): void;
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
						export class PageSpacingDecoration {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfView.PageSpacingDecoration>;
							public constructor(spacePx: number);
							public getItemOffsets(outRect: globalAndroid.graphics.Rect, view: globalAndroid.view.View, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
						}
						export class PdfViewAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<io.github.triniwiz.plugins.pdf.PdfView.PdfViewHolder> {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfView.PdfViewAdapter>;
							public getPdfView(): io.github.triniwiz.plugins.pdf.PdfView;
							public constructor(pdfView: io.github.triniwiz.plugins.pdf.PdfView);
							public onCreateViewHolder(imgView: globalAndroid.view.ViewGroup, spinner: number): io.github.triniwiz.plugins.pdf.PdfView.PdfViewHolder;
							public getItemCount(): number;
							public onBindViewHolder(this_: io.github.triniwiz.plugins.pdf.PdfView.PdfViewHolder, holder: number): void;
						}
						export class PdfViewHolder {
							public static class: java.lang.Class<io.github.triniwiz.plugins.pdf.PdfView.PdfViewHolder>;
							public getImageView(): globalAndroid.widget.ImageView;
							public getSpinner(): globalAndroid.widget.ProgressBar;
							public constructor(root: globalAndroid.view.View, imageView: globalAndroid.widget.ImageView, spinner: globalAndroid.widget.ProgressBar);
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
							public setBottom(value: number): void;
							public getBottom(): number;
							public constructor(left: number, top: number, right: number, bottom: number);
							public constructor(uniform: number);
							public getLeft(): number;
							public getTop(): number;
							public setTop(value: number): void;
							public getRight(): number;
							public setLeft(value: number): void;
							public setRight(value: number): void;
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
							public setFoot(value: androidNative.Array<androidNative.Array<io.github.triniwiz.plugins.pdf.table.TableCellOrString>>): void;
							public setShowFoot(value: io.github.triniwiz.plugins.pdf.table.ShowFoot): void;
							public setTheme(value: io.github.triniwiz.plugins.pdf.table.TableTheme): void;
							public getFootStyles(): io.github.triniwiz.plugins.pdf.table.StyleDef;
							public getFoot(): androidNative.Array<androidNative.Array<io.github.triniwiz.plugins.pdf.table.TableCellOrString>>;
							public setColumnStyles(value: java.util.Map<io.github.triniwiz.plugins.pdf.table.ColumnKey, io.github.triniwiz.plugins.pdf.table.StyleDef>): void;
							public setColumns(value: androidNative.Array<io.github.triniwiz.plugins.pdf.table.ColumnDef>): void;
							public setHead(value: androidNative.Array<androidNative.Array<io.github.triniwiz.plugins.pdf.table.TableCellOrString>>): void;
							public setBody(value: androidNative.Array<androidNative.Array<io.github.triniwiz.plugins.pdf.table.TableCellOrString>>): void;
							public getColumns(): androidNative.Array<io.github.triniwiz.plugins.pdf.table.ColumnDef>;
							public updatePosition(x: number, y: number): void;
							public setHeadStyles(value: io.github.triniwiz.plugins.pdf.table.StyleDef): void;
							public constructor();
							public getBodyStyles(): io.github.triniwiz.plugins.pdf.table.StyleDef;
							public setFootStyles(value: io.github.triniwiz.plugins.pdf.table.StyleDef): void;
							public getShowHead(): io.github.triniwiz.plugins.pdf.table.ShowHead;
							public setPosition(value: any): void;
							public getPageBreak(): io.github.triniwiz.plugins.pdf.table.PageBreak;
							public getShowFoot(): io.github.triniwiz.plugins.pdf.table.ShowFoot;
							public getColumnStyles(): java.util.Map<io.github.triniwiz.plugins.pdf.table.ColumnKey, io.github.triniwiz.plugins.pdf.table.StyleDef>;
							public setBodyStyles(value: io.github.triniwiz.plugins.pdf.table.StyleDef): void;
							public getHead(): androidNative.Array<androidNative.Array<io.github.triniwiz.plugins.pdf.table.TableCellOrString>>;
							public getHeadStyles(): io.github.triniwiz.plugins.pdf.table.StyleDef;
							public getTheme(): io.github.triniwiz.plugins.pdf.table.TableTheme;
							public setShowHead(value: io.github.triniwiz.plugins.pdf.table.ShowHead): void;
							public getBody(): androidNative.Array<androidNative.Array<io.github.triniwiz.plugins.pdf.table.TableCellOrString>>;
							public getPosition(): any;
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
							public getLineColorValue(value: java.nio.ByteBuffer): void;
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
