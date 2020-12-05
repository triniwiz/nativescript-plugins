import {Color} from 'color';
import {AutoCompleteBase, textColorProperty, thresholdProperty, itemsProperty} from "./common";
import {ChangeType, ObservableArray, View} from "@nativescript/core";
import {ChangedData} from "@nativescript/core/data/observable-array";

export class AutoComplete extends AutoCompleteBase {
  private _android: android.widget.AutoCompleteTextView;
  public static itemTapEvent = "itemTap";
  public static onCloseEvent = "onClose";
  _filtering: string;
  _adapter: ArrayAdapter;

  constructor() {
    super();
  }

  get android(): android.widget.AutoCompleteTextView {
    return this._android;
  }

  createNativeView(): Object {
    this._adapter = new ArrayAdapter(this._context);
    this._android = new android.widget.AutoCompleteTextView(this._context);
    if (!this.threshold) {
      this._android.setThreshold(1);
    } else {
      this._android.setThreshold(this.threshold);
    }

    if (!this.textColor) {
      this._android.setTextColor(new Color('black').android);
    } else {
      this._android.setTextColor(new Color(this.textColor).android);
    }
    return this._android;
  }

  initNativeView() {
    super.initNativeView();
    this._adapter._owner = new WeakRef<AutoComplete>(this);
    // this._android.setAdapter(this._listener);
    const that = new WeakRef(this);
    this._android.setOnItemClickListener(new android.widget.AdapterView.OnItemClickListener({
      onItemClick(parent: any, view: android.widget.TextView, index: number, id: number) {
        let owner = that.get();
        if (owner) {
          owner.notify({
            eventName: AutoComplete.itemTapEvent,
            object: owner,
            index: index,
            view: view,
            data: view.getText()
          });
        }
      }
    }));
    this._android.setOnDismissListener(new android.widget.AutoCompleteTextView.OnDismissListener({
      onDismiss() {
        let owner = that.get();
        if (owner) {
          owner.notify({eventName: AutoComplete.onCloseEvent, object: owner});
        }
      }
    }));

  }

  private _handleObservableArray(value: ObservableArray<any>) {
    value.on(ObservableArray.changeEvent, (args: ChangedData<any>) => {
      if (!this._filtering) {
        return;
      }
      // this._android.refreshAutoCompleteResults();
      switch (args.action) {
        case ChangeType.Add:
          break;
        case ChangeType.Delete:
          break;
        case ChangeType.Splice:
          break;
        case ChangeType.Update:
          break;
      }
    });
  }

  [itemsProperty.setNative](value: any) {
    // const arr = Array.create(java.lang.String, value.length);
    // this.items.forEach((item, index) => {
    //   arr[index] = item;
    // });
    // let ad = new android.widget.ArrayAdapter(this._context, android.R.layout.simple_list_item_1, arr);
    // this._android.setAdapter(ad);

    if (value instanceof ObservableArray) {
      this._handleObservableArray(value);
    }

    this._android.setAdapter(this._adapter);
  }

  [thresholdProperty.setNative](value: number) {
    if (this._android) {
      if (!value) {
        this._android.setThreshold(1);
      } else {
        this._android.setThreshold(value);
      }
    }
  }

  [textColorProperty.setNative](value: Color | string) {
    if (this._android) {
      let color;
      if (value instanceof Color) {
        color = value.android;
      } else if (typeof value === 'string') {
        color = new Color(value).android;
      } else {
        color = new Color('black').android;
      }
      this._android.setTextColor(color);
    }
  }

  showDropDown() {
    this._android.showDropDown();
  }

  dismissDropDown() {
    this._android.dismissDropDown();
  }

  clearListSelection() {
    this._android.clearListSelection();
  }

  setDropDownHorizontalOffset(offset: number) {
    this._android.setDropDownHorizontalOffset(offset);
  }

  setDropDownVerticalOffset(offset: number) {
    this._android.setDropDownVerticalOffset(offset);
  }

  setDropDownWidth(width: number) {
    this._android.setDropDownWidth(width);
  }

  setListSelection(index: number) {
    this._android.setListSelection(index);
  }
}

export interface ItemTap {
  eventName: string
  object: View
  index: number
  view: android.widget.AutoCompleteTextView
  data: string
}


@NativeClass()
class ArrayAdapter extends android.widget.ArrayAdapter<any> {
  _owner: WeakRef<AutoComplete>
  private filter: Filter;
  private _context: android.content.Context;
  private _inflator: android.view.LayoutInflater;

  constructor(context) {
    super(context, android.R.layout.simple_list_item_1);
    this._context = context;
    this._inflator = this._context.getSystemService(android.content.Context.LAYOUT_INFLATER_SERVICE);
    return global.__native(this);
  }

  hasStableIds(): boolean {
    return true;
  }

  getItemId(position: number): number {
    return position;
  }

  /*
    getView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View {
      console.log('getView');
      let view;
      const data = this._owner?.get()?.items[position] ?? null;
      if (!data) {
        return null;
      }
      if (!convertView) {
        view = this._inflator.inflate(android.R.layout.simple_list_item_1, parent, false);
      }
      view.setText(data);
      return view;
    }
    */


  getFilter(): android.widget.Filter {
    if (!this.filter) {
      this.filter = new Filter();
      this.filter._owner = this._owner;
    }
    return this.filter;
  }

  getItem(position: number): any {
    const owner = this._owner?.get() ?? null;
    if (owner) {
      if (owner.items.getItem) {
        return owner.items.getItem(position);
      }
      return owner.items[position];
    }
    return null;
  }
}

@NativeClass()
class Filter extends android.widget.Filter {
  _owner: WeakRef<AutoComplete>;

  constructor() {
    super();
    return global.__native(this);
  }

  // convertResultToString(param0: any): string {
  //   console.log('convertResultToString', param0);
  //   return super.convertResultToString(param0);
  // }

  filter(constraint, listener?: android.widget.Filter.FilterListener) {
    console.log('filter', constraint, 'listener', listener)
  }

  performFiltering(constraint: string): android.widget.Filter.FilterResults {
    const results = new android.widget.Filter.FilterResults();
    if (this._owner.get()) {
      this._owner.get()._filtering = constraint;
    }
    let items: any[] = [];
    const owner = this._owner?.get() ?? null;
    if (owner) {
      if (owner.items.getItem) {
        items = owner.items.map(item => item);
      }
      items = owner.items;
    }
    let list;
    if (!constraint || constraint.length === 0) {
      list = java.util.Arrays.asList([]);
    } else {
      console.log('2', items);
      const tmp = items.filter((item) => {
        return item.indexOf(constraint) > -1;
      });
      list = java.util.Arrays.asList(tmp);
    }
    results.values = list;
    results.count = list.size();
    return results;
  }

  publishResults(constraint: string, results: android.widget.Filter.FilterResults) {
    if (results.count === 0) {
      this._owner?.get()?._adapter.notifyDataSetInvalidated();
    } else {
      this._owner?.get()._adapter.clear();
      this._owner?.get()._adapter.addAll(results.values);
      this._owner?.get()._adapter.notifyDataSetChanged();
    }
  }

}
