import {AccordionBase} from './common';

export declare class Accordion extends AccordionBase {
  readonly android: any;
  readonly ios: any;

  expandAll(): void;

  collapseAll(): void;

  refresh(): void;

  itemExpanded(index: number): void;

  itemCollapsed(index: number): void;

  expandItem(id: number): void;

  collapseItem(id: number): void;

  itemIsExpanded(id: number): boolean;

}
