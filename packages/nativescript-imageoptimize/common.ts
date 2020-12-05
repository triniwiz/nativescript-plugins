import {knownFolders, path, Utils} from "@nativescript/core";

export interface Options {
  height?: number;
  width?: number;
  quality: number;
  format?: Format;
  dest?: string;
  src: string;
  overwrite?: boolean;
}

export type Format = 'jpeg' | 'jpg' | 'png' | 'webp';

export function getFile(src: any): string {
  if (src.startsWith('/')) {
    return src;
  } else if (src.startsWith("~/")) {
    return path.join(knownFolders.currentApp().path, src.replace("~/", ""));
  }
  return src;
}
