# Accordion

|   Android Device  |   Android Emulator    |   iOS Device  |   iOS Simulator   |
| :-------------:     |:-------------:        |:-------------:| :-----:            |
| :white_check_mark:|:white_check_mark:     |:white_check_mark:|    :white_check_mark:| 


## Installing 

```bash
    ns plugin add @triniwiz/nativescript-accordion
```

## Usage

Each entry in `items` is one collapsible section. The section's always-visible
row comes from `itemHeaderTemplate`; the rows revealed when it expands come from
`itemContentTemplate`, one per entry in the item's child collection.

```xml
<accordion:Accordion items="{{ items }}" allowMultiple="false" selectedIndexes="{{ selectedIndexes }}">
  <accordion:Accordion.itemHeaderTemplate>
    <GridLayout><Label text="{{ title }}"/></GridLayout>
  </accordion:Accordion.itemHeaderTemplate>

  <accordion:Accordion.itemContentTemplate>
    <StackLayout><Label text="{{ text }}"/></StackLayout>
  </accordion:Accordion.itemContentTemplate>
</accordion:Accordion>
```

```ts
items = new ObservableArray([
  { title: 'First', items: [{ text: 'One' }, { text: 'Two' }] },
  { title: 'Second', items: [{ text: 'Three' }] },
]);
```

The child collection is read from the property named by `childItems`, which
defaults to `items`.

### Properties

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `any[] \| ItemsSource \| ObservableArray` | — | One entry per section. |
| `childItems` | `string` | `'items'` | Property on an item holding its child collection. |
| `allowMultiple` | `boolean` | `false` | Allow more than one section open at a time. When off, expanding one collapses the other. |
| `selectedIndexes` | `number[]` | `[]` | The complete set of expanded sections. Two-way: it reports what the user expands, and assigning it expands and collapses to match. |
| `separatorColor` | `Color` | — | Divider color. Also settable in CSS as `separator-color`. |
| `headerRowHeight` | `Length` | `auto` | Height of the `headerTemplate` row. |
| `itemHeaderRowHeight` | `Length` | `auto` | Height of the `itemHeaderTemplate` row. |
| `itemContentRowHeight` | `Length` | `auto` | Height of each `itemContentTemplate` row. |
| `footerRowHeight` | `Length` | `auto` | Height of the `footerTemplate` row. |
| `iosEstimatedHeaderRowHeight`<br>`iosEstimatedItemHeaderRowHeight`<br>`iosEstimatedItemContentRowHeight`<br>`iosEstimatedFooterRowHeight` | `Length` | `44` | iOS only. Estimated heights used while rows are still being measured. |

### Templates

| Template | Multi-template form | Selector | Renders |
| --- | --- | --- | --- |
| `itemHeaderTemplate` | `itemHeaderTemplates` | `itemHeaderTemplateSelector` | The section's header row, always visible. |
| `itemContentTemplate` | `itemContentTemplates` | `itemContentTemplateSelector` | One row per child item, when expanded. |
| `headerTemplate` | `headerTemplates` | `headerTemplateSelector` | An optional row above the section's content. |
| `footerTemplate` | `footerTemplates` | `footerTemplateSelector` | An optional row below the section's content. |

`headerTemplate` and `footerTemplate` are *per section*, not for the list as a
whole — a section that is open shows its header row, then its content rows, then
its footer row.

### Methods

| Method | Description |
| --- | --- |
| `expandItem(index)` | Expand a section. With `allowMultiple` off this collapses whichever section was open. |
| `collapseItem(index)` | Collapse a section. |
| `itemIsExpanded(index)` | Whether a section is currently expanded. |
| `expandAll()` | Expand every section. With `allowMultiple` off only the last one stays open. |
| `collapseAll()` | Collapse every section. |
| `refresh()` | Rebuild the rows from `items`. |

### Events

| Event | Payload | Fired when |
| --- | --- | --- |
| `itemHeaderTap` | `parentIndex`, `data` | A section header is tapped. |
| `itemContentTap` | `index`, `childIndex`, `data` | A content row is tapped. |
| `itemExpanded` / `itemCollapsed` | `value` — the section index | A section opens or closes. |
| `selectedIndexesChange` | `oldIndex`, `newIndex` | The set of expanded sections changes. |
| `itemHeaderLoading`, `itemContentLoading`, `headerLoading`, `footerLoading` | `index`, `childIndex`, `view` | A row's view is being created. Assign `args.view` to supply your own. |
| `loadMoreItems` | — | The last section has been reached. |

`childIndex` is always an index into the item's child collection, so it lines up
with `items[index][childItems]` regardless of whether a `headerTemplate` is in
use and regardless of platform.
