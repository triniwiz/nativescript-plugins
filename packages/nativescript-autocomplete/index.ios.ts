import {AutoCompleteBase, hintProperty, itemsProperty} from "./common";
import {ChangeType, Color, ObservableArray, Screen, TextView, View} from '@nativescript/core';
import {ChangedData} from "@nativescript/core/data/observable-array";

export class AutoComplete extends AutoCompleteBase {
  _autoCompleteView: UITableView;
  _ios: UITextField;
  _searchFieldDelegate: SearchDelegate;
  _searchFieldDataSource: SearchResultsDataSource;
  _searchResultsDelegate: SearchResultsDelegate;
  _filteredResults: any[];
  _searchEvents: SearchEvents;

  createNativeView() {
    this._ios = UITextField.alloc().init();
    this._ios.autocapitalizationType = UITextAutocapitalizationType.None;
    if (this.hint) {
      this._ios.placeholder = this.hint;
    }
    this._autoCompleteView = UITableView.alloc().init();
    this._autoCompleteView.tableFooterView = UIView.alloc().initWithFrame(CGRectZero);
    this._autoCompleteView.opaque = true;
    this._autoCompleteView.backgroundColor = UIColor.whiteColor;
    return this._ios;
  }


  onLayout(left: number, top: number, right: number, bottom: number) {
    super.onLayout(left, top, right, bottom);
    console.log(left, top, right, bottom);
    const bottomDip = bottom / Screen.mainScreen.scale;
    const leftDip = left / Screen.mainScreen.scale;
    const rightDip = right / Screen.mainScreen.scale;
    const itemHeight = 44 * 3; // 3 items max
    this._autoCompleteView.frame = CGRectMake(leftDip, bottomDip, rightDip, itemHeight);
  }

  public _removeContainer(cell: SearchResultsCell): void {
    let view = cell.view;
    // This is to clear the StackLayout that is used to wrap ProxyViewContainer instances.
    if (!(view.parent instanceof AutoComplete)) {
      this._removeView(view.parent);
    }
  }

  initNativeView() {
    super.initNativeView();
    this._autoCompleteView.registerClassForCellReuseIdentifier(SearchResultsCell.class(), 'default');
    this._autoCompleteView.rowHeight = UITableViewAutomaticDimension;
    this._searchEvents = SearchEvents.initWithWeakRef(new WeakRef<AutoComplete>(this));
    this._searchFieldDelegate = SearchDelegate.initWithWeakRef(new WeakRef<AutoComplete>(this));
    this._searchFieldDataSource = SearchResultsDataSource.initWithWeakRef(new WeakRef<AutoComplete>(this));
    this._searchResultsDelegate = SearchResultsDelegate.initWithWeakRef(new WeakRef<AutoComplete>(this));
    this._ios.addTargetActionForControlEvents(this._searchEvents, 'editingDidBegin', UIControlEvents.EditingDidBegin);
    this._ios.addTargetActionForControlEvents(this._searchEvents, 'editingChanged', UIControlEvents.EditingChanged);
    this._ios.addTargetActionForControlEvents(this._searchEvents, 'editingDidEnd', UIControlEvents.EditingDidEnd);
    this._ios.addTargetActionForControlEvents(this._searchEvents, 'editingDidEndOnExit', UIControlEvents.EditingDidEndOnExit);
    this._autoCompleteView.dataSource = this._searchFieldDataSource;
  }

  _setNativeClipToBounds() {
    this._autoCompleteView.clipsToBounds = true;
  }

  onLoaded() {
    super.onLoaded();
    this._ios.delegate = this._searchFieldDelegate;
    this._autoCompleteView.delegate = this._searchResultsDelegate;
  }

  onUnloaded() {
    this._ios.delegate = null;
    super.onUnloaded();
  }

  [hintProperty.setNative](value: string) {
    this._ios.placeholder = value;
  }

  _observableInstance: ObservableArray<any>;

  [itemsProperty.setNative](value: any) {
    if (this._observableInstance) {
      this._observableInstance.off(ObservableArray.changeEvent);
    }

    if (value instanceof ObservableArray) {
      value.on(ObservableArray.changeEvent, (args: ChangedData<any>) => {
        switch (args.action) {
          case ChangeType.Add:
          case ChangeType.Delete:
          case ChangeType.Splice:
          case ChangeType.Update:
            this._autoCompleteView.reloadData();
            break;
        }
      });
      this._observableInstance = value;
    } else {
      this._autoCompleteView.reloadData();
    }
  }
}

@NativeClass()
class SearchEvents extends NSObject {

  _owner: WeakRef<AutoComplete>;

  public static initWithWeakRef(ref: WeakRef<AutoComplete>) {
    const delegate = <SearchEvents>SearchEvents.alloc().init();
    delegate._owner = ref;
    return delegate;
  }

  public editingChanged(sender: UITextField) {
    const owner = this._owner.get();
    if (owner && sender.text.length > 0) {
      owner._filteredResults = owner.items.filter((item) => {
        if (item.indexOf(sender.text) > -1) {
          return true;
        }
      });
      owner._autoCompleteView.reloadData();
    } else if (owner && sender.text.length === 0) {
      owner._filteredResults = [];
      owner._autoCompleteView.reloadData();
    }
  }

  public editingDidBegin(sender: UITextField) {
    console.log('editingDidBegin', sender);
    sender.addSubview(this._owner.get()?._autoCompleteView);
  }

  public editingDidEnd(sender: UITextField) {
    console.log('editingDidEnd', sender);
  }

  public editingDidEndOnExit(sender: UITextField) {
    console.log('editingDidEndOnExit', sender);
  }

  public static ObjCExposedMethods = {
    editingChanged: {returns: interop.types.void, params: [interop.types.id]},
    editingDidBegin: {returns: interop.types.void, params: [interop.types.id]},
    editingDidEnd: {returns: interop.types.void, params: [interop.types.id]},
    editingDidEndOnExit: {returns: interop.types.void, params: [interop.types.id]},
  };
}

@NativeClass()
class SearchDelegate extends NSObject implements UITextFieldDelegate {
  public static ObjCProtocols = [UITextFieldDelegate];

  _owner: WeakRef<AutoComplete>;

  public static initWithWeakRef(ref: WeakRef<AutoComplete>) {
    const delegate = <SearchDelegate>SearchDelegate.alloc().init();
    delegate._owner = ref;
    return delegate;
  }

  textFieldDidBeginEditing(textField: UITextField) {
    console.log('textFieldDidBeginEditing', textField.text);
    const owner = this._owner.get();
    if (owner && textField.text.length > 0) {
      owner._filteredResults = owner.items.filter((item) => {
        if (item.indexOf(textField.text) > -1) {
          return true;
        }
      });
      owner._autoCompleteView.reloadData();
    }
  }

  textFieldDidChangeSelection(textField: UITextField) {
    console.log('textFieldDidChangeSelection', textField.text);
  }


  textFieldDidEndEditing(textField: UITextField) {
    console.log('textFieldDidEndEditing', textField.text);
  }

}

@NativeClass()
class SearchResultsDataSource extends NSObject implements UITableViewDataSource {
  public static ObjCProtocols = [UITableViewDataSource];

  _owner: WeakRef<AutoComplete>;

  public static initWithWeakRef(ref: WeakRef<AutoComplete>) {
    const delegate = <SearchResultsDataSource>SearchResultsDataSource.alloc().init();
    delegate._owner = ref;
    return delegate;
  }

  tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell {
    const cell = <SearchResultsCell>tableView.dequeueReusableCellWithIdentifier('default') || SearchResultsCell.initWithEmptyBackground();
    const view = new TextView();
    const owner = this._owner.get();
    if (owner) {
      view.text = this._owner.get()?._filteredResults[indexPath.row] ?? '';
      view.color = new Color('black');
      owner._addView(view);
      view.nativeViewProtected.frame = CGRectMake(0, 0, tableView.frame.size.width, 44);
      cell.contentView.addSubview(view.nativeViewProtected);
    }
    cell.owner = new WeakRef<View>(view);
    return cell;
  }

  tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number {
    return this._owner.get()?._filteredResults?.length ?? 0;
  }
}

@NativeClass()
class SearchResultsDelegate extends NSObject implements UITableViewDelegate {
  _owner: WeakRef<AutoComplete>;

  public static ObjCProtocols = [UITableViewDataSource];

  public static initWithWeakRef(ref: WeakRef<AutoComplete>) {
    const delegate = <SearchResultsDelegate>SearchResultsDelegate.alloc().init();
    delegate._owner = ref;
    return delegate;
  }

  tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number {
    console.log('tableViewHeightForRowAtIndexPath');
    return 44;
  }

  tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number {
    console.log('tableViewHeightForRowAtIndexPath');
    // Default height
    return 44;
  }
}

@NativeClass
class SearchResultsCell extends UITableViewCell {
  public static initWithEmptyBackground(): SearchResultsCell {
    const cell = <SearchResultsCell>SearchResultsCell.new();
    cell.opaque = true;
    // Clear background by default - this will make cells transparent
    cell.backgroundColor = UIColor.whiteColor;

    return cell;
  }

  initWithStyleReuseIdentifier(style: UITableViewCellStyle, reuseIdentifier: string): this {
    const cell = <this>super.initWithStyleReuseIdentifier(style, reuseIdentifier);
    // Clear background by default - this will make cells transparent
    cell.opaque = true;
    cell.backgroundColor = UIColor.whiteColor;

    return cell;
  }

  public willMoveToSuperview(newSuperview: UIView): void {
    let parent = <AutoComplete>(this.view ? this.view.parent : null);

    if (parent && !newSuperview) {
      parent._removeContainer(this);
    }
  }

  public get view(): View {
    return this.owner ? this.owner.get() : null;
  }

  public owner: WeakRef<View>;
}
