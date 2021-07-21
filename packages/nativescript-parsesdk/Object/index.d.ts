import {ObjectBase} from "./common";

export declare class Object extends ObjectBase {
  readonly android;
  readonly ios;

  constructor(name: string);

  set(key: string, value: any);

  get(key: string): any;

  save(): Promise<boolean>;

  saveSync(): boolean;
}
