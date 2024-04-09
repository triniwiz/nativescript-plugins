import {BaseSSE} from './common';
import {fromObject, Observable} from '@nativescript/core';

declare var android: any, com: any, java: any, WeakRef;

export class SSE extends BaseSSE {
  private _sseHandler: any;
  private _es: any;
  private _headers: any;
  private _url: any;
  private _eventListeners: any;

  constructor(url: string, headers: any = {}) {
    super(url, headers);
    this._eventListeners = {};
    this._url = new java.net.URI(url);
    const that = new WeakRef(this);
    const EventHandler = com.tylerjroach.eventsource.EventSourceHandler.extend({
      owner: that.get(),
      onConnect() {
        const eventObject = {
          connected: true
        };
        this.owner.events.notify({
          eventName: 'onConnect',
          object: fromObject(eventObject)
        });
        this.owner._eventListeners.open?.forEach((handler) => {
          handler(eventObject);
        });
      },
      onMessage(event, message) {
        const eventObject = {
          event,
          message: {
            data: message.data,
            lastEventId: message.lastEventId,
            origin: message.origin
          }
        };
        this.owner.events.notify({
          eventName: 'onMessage',
          object: fromObject(eventObject)
        });
        this.owner._eventListeners[event]?.forEach((handler) => {
          handler(eventObject);
        });
      },

      onComment(comment) {
        this.owner.events.notify({
          eventName: 'onComment',
          object: fromObject({
            comment: comment
          })
        });
      },

      onError(e) {
        const eventObject = {
          error: e.getMessage()
        };
        this.owner.events.notify({
          eventName: 'onError',
          object: fromObject(eventObject)
        });
        this.owner._eventListeners.error?.forEach((handler) => {
          handler(eventObject);
        });
      },
      onClosed(willReconnect) {
        const eventObject = {
          willReconnect
        };
        this.owner.events.notify({
          eventName: 'willReconnect',
          object: fromObject(eventObject)
        });
        this.owner._eventListeners.close?.forEach((handler) => {
          handler(eventObject);
        });
      }
    });
    this._sseHandler = new EventHandler();
    this._headers = new java.util.HashMap();
    const arr = Object.keys(headers);
    if (arr.length > 0) {
      arr.forEach(key => {
        this._headers.put(key, headers[key]);
      });
    }

    this._es = new com.tylerjroach.eventsource.EventSource.Builder(url)
      .eventHandler(this._sseHandler)
      .headers(this._headers)
      .build();
    this._es.connect();
  }

  public addEventListener(event: string, handler: any): void {
    if (this._eventListeners[event] === undefined) {
        this._eventListeners[event] = [];
    }
    this._eventListeners[event].push(handler)
  }

  public removeEventListener(event: string, handler: any): void {
    if (this._eventListeners[event] !== undefined) {
      this._eventListeners[event] = this._eventListeners[event].filter(h => h !== handler);
    }
  }

  public connect(): void {
    if (!this._es) return;
    this._es.connect();
  }

  public close(): void {
    if (!this._es) return;
    this._es.close();
  }
}
