import {AddChildFromBuilder, View, AddArrayFromBuilder, Property} from "@nativescript/core";

export abstract class TextBase extends View implements AddChildFromBuilder {
  text: string;
  abstract _addChildFromBuilder(name: string, value: any): void;
}

export const textProperty = new Property<TextBase, string>({
  name: 'text'
});

textProperty.register(TextBase);