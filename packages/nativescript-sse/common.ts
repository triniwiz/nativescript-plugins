import {fromObject, Observable} from '@nativescript/core';

export abstract class BaseSSE {
  readonly events: Observable;

  protected constructor(url: string, headers: any = {}) {
    this.events = fromObject({});
  }

  public abstract addEventListener(event: string): void;

  public abstract removeEventListener(event: string): void;

  public abstract connect(): void;

  public abstract close(): void;
}
