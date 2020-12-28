import { Orientation } from '@nativescript/core/ui/layouts/stack-layout';
import { ContentView } from '@nativescript/core';

export declare class NestedScrollView extends ContentView {
    static scrollEvent: string;
    orientation: Orientation;
    scrollBarIndicatorVisible: boolean;
    scrollToVerticalOffset(value: number, animated: boolean): void;
    scrollToHorizontalOffset(value: number, animated: boolean): void;
    readonly horizontalOffset: number;
    readonly verticalOffset: number;
    readonly scrollableWidth: number;
    readonly scrollableHeight: number;
}