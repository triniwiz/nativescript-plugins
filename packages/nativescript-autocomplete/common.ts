import {Color, Property, View} from "@nativescript/core";

export abstract class AutoCompleteBase extends View {
  public threshold: number;
  public textColor: number;
  public items: any;
  public hint: string;
}

export const thresholdProperty = new Property<AutoCompleteBase, number>({
  name: 'threshold',
  defaultValue: 1
});

thresholdProperty.register(AutoCompleteBase);

export const textColorProperty = new Property<AutoCompleteBase, Color | string>({
  name: 'textColor',
  defaultValue: 'black'
});

textColorProperty.register(AutoCompleteBase);


export const itemsProperty = new Property<AutoCompleteBase, any>({
  name: 'items',
});

itemsProperty.register(AutoCompleteBase);


export const hintProperty = new Property<AutoCompleteBase, string>({
  name: 'hint'
})
