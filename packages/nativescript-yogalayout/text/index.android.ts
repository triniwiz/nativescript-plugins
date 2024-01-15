import { TextBase } from './common';

export class Text extends TextBase {
	_children: Text[] = [];

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	nativeView: android.widget.TextView;
	_textParent: Text;
	_text: string;

	createNativeView() {
		return new android.widget.TextView(this._context);
	}

	initNativeView() {
		super.initNativeView();
	}

	_addChildFromBuilder(name: string, value: any): void {
		if (value instanceof Text) {
			this._children.push(value);
			this._textParent = this;
		}
	}

	_handleChildren() {
		const currentText = this.text || '';
		let newText = currentText;
		console.log(this._children);
		this._children.forEach(child => {
			child._handleChildren();
			newText = newText + (child.text || '');
		});
		if (newText !== currentText) {
			this._text = newText;
		} else {
			this._text = currentText;
		}
	}

	onLoaded() {
		super.onLoaded();
		const currentText = this.text || '';
		let newText = currentText;
		this._children.forEach(child => {
			child._handleChildren();
			newText = newText + (child._text || '');
		});
		if (newText !== currentText) {
			if (this.nativeView) {
				this.nativeView.setText(newText);
			}
		}
	}
}
