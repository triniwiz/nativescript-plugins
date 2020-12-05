import {Color, View, Property} from "@nativescript/core";

export class AwesomeLoadersBase extends View {
  protected indicator: string;
}

export const indicatorProperty = new Property<AwesomeLoadersBase, string>({
  name: "indicator",
  defaultValue: null
});
indicatorProperty.register(AwesomeLoadersBase);


export const indicatorColorProperty = new Property<AwesomeLoadersBase, Color>({
  name: "indicatorColor",
  equalityComparer: Color.equals,
  defaultValue: null,
  valueConverter: v => new Color(v)
});
indicatorColorProperty.register(AwesomeLoadersBase);
