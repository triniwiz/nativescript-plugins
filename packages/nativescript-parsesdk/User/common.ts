export abstract class UserBase {
  readonly android;
  readonly ios;
  abstract username: string;
  abstract password: string;
  abstract email: string;

  abstract set(key: string, value: any);

  abstract get(key: string): any;
}
