export interface CHIPageControllable {
  numberOfPages: number;
  readonly currentPage;
  progress: number;
  hidesForSinglePage: boolean;
  borderWidth: number;
  setProgressAnimated(value: number, animated: boolean);
  updateFrame();
}
