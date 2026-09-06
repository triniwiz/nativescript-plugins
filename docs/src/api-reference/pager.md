# Pager

|   Android Device  |   Android Emulator    |   iOS Device  |   iOS Simulator   |
| :-------------:     |:-------------:        |:-------------:| :-----:            |
| :white_check_mark:|:white_check_mark:     |:white_check_mark:|    :white_check_mark:| 


## Installing 

```bash
    ns plugin add @triniwiz/nativescript-pager
```

## API

```ts
import { Pager } from '@triniwiz/nativescript-pager';
```




### Paging and layout properties

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `any[] \| ItemsSource \| ObservableArray` | — | Items to page through. |
| `selectedIndex` | `number` | `0` | Index of the current page. Always a real item index — clone pages used by `circularMode` are never addressable through it. |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Axis the pager scrolls along. |
| `perPage` | `number` | `1` | Pages visible at once. iOS only. |
| `peaking` | `Length` | `0` | How much of the adjacent pages to reveal on either side. See below. |
| `spacing` | `Length` | `0` | Gap between pages. |
| `circularMode` | `boolean` | `false` | Infinite paging — swiping past either end continues into the opposite one. |
| `autoPlay` | `boolean` | `false` | Advance automatically. Wraps at the end, and in `circularMode` animates forward through the wrap rather than jumping back. |
| `autoPlayDelay` | `number` | `3000` | Milliseconds between automatic advances. |
| `disableSwipe` | `boolean` | `false` | Disable user swiping. |
| `showIndicator` | `boolean` | `false` | Show the page indicator. |
| `indicator` | `Indicator` | `none` | Indicator animation style. |

### Peeking

`peaking` reserves space at both ends of the scroll axis so the previous and
next pages show through, while the current page stays centered:

```xml
<Pager items="{{ items }}" peaking="40" spacing="10" />
```

The page is sized to `(viewport - 2 * peaking - spacing * (perPage - 1)) / perPage`,
so `peaking` and `spacing` compose — `peaking` controls how much neighbouring
content is visible, `spacing` the gap between pages. Both accept dip, px and
percentage values.

### Infinite paging

`circularMode` makes paging continuous in both directions:

```xml
<Pager items="{{ items }}" circularMode="true" />
```

It works by adding two clone pages around the real ones — the leading clone
mirrors the last item and the trailing clone mirrors the first — so a swipe past
either end has somewhere to travel. Once the scroll settles on a clone, the
pager jumps to the real page it mirrors; the jump is unanimated and both pages
render identical content, so it is not visible.

`selectedIndex` stays in real item space throughout, and the page indicator only
ever counts real pages, so neither exposes the clones.
