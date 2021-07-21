export abstract class ObjectBase {
  readonly android;
  readonly ios;
  abstract set(key: string, value: any);

  abstract get(key: string): any;

  abstract save(): Promise<boolean>;

  abstract saveSync(): boolean;
}
