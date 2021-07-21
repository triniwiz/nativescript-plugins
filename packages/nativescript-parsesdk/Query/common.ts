export abstract class QueryBase {
  abstract get(key: string): Promise<any>;
  abstract getSync(key: string): any;
}
