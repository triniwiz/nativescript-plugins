export abstract class FileBase {
  readonly android: any;
  readonly ios: any;

  abstract save(progress?: (value: number) => void): Promise<boolean>;

  abstract saveSync(): boolean;
}
