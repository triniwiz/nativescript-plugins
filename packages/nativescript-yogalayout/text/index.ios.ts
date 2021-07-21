import {TextBase} from "./common";

export class Text extends TextBase {
  createNativeView(): Object {
    const label = UILabel.new();
    label.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci orci, posuere sit amet luctus id, ultricies sit amet diam. Aliquam ac tortor imperdiet, rutrum ipsum sit amet, hendrerit neque. Donec nunc sem, semper non malesuada eu, mollis in sapien. Mauris efficitur blandit iaculis. Quisque ullamcorper facilisis velit, non blandit sapien efficitur quis. Cras eu lorem sed metus congue facilisis. Maecenas luctus elementum erat, eu sagittis dui pharetra eu. Quisque elementum pretium lorem, nec semper ante porta quis. Donec vel diam sem. Donec sit amet nisl tempus, pretium mi eget, tincidunt libero. Praesent posuere nisl at tincidunt porta."
    return label;
  }

  _addChildFromBuilder(name: string, value: any): void {
    console.log(name, value);
  }

  _addArrayFromBuilder(name: string, value: Array<any>): void {
    console.log('_addArrayFromBuilder', name, value);
  }
}
