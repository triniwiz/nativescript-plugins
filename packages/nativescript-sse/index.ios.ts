import {BaseSSE} from './common';
import {fromObject} from '@nativescript/core';

declare const WeakRef, EventSource;

export class SSE extends BaseSSE {
  private readonly _headers: NSDictionary<any, any>;
  private readonly _url: NSURL;
  private readonly _es: any;
  private lastEventId: string;
  private _eventListeners: any;

  constructor(url: string, headers: any = {}) {
    super(url, headers);
    this._eventListeners = {};
    this._url = NSURL.alloc().initWithString(url);
    this._headers = NSDictionary.alloc().initWithDictionary(headers);
    this._es = EventSource.alloc().initWithUrlHeaders(this._url, this._headers);
    const ref = new WeakRef(this);
    const owner = ref.get();
    this._es.onMessage((id, event, data) => {
      this.lastEventId = id;
      const eventObject = {
        event,
        message: {data: data, lastEventId: id}
      };
      owner.events.notify({
        eventName: 'onMessage',
        object: fromObject(eventObject)
      });
      this._eventListeners.message?.forEach((handler) => {
        handler(eventObject);
      })
    });
    this._es.onComplete((statusCode, shouldReconnect, err) => {
      if (err) {
        owner.events.notify({
          eventName: 'onError',
          object: fromObject({
            error: err.localizedDescription
          })
        });
      }
      this._eventListeners[err ? "error" : "close"]?.forEach((handler) => {
        handler(err
          ? {error: err.localizedDescription}
          : {willReconnect: shouldReconnect}
        );
      })

      // NOTE we are not using the shouldReconnect boolean here
      // so that we match how the android implementation works
      setTimeout(() => {
        this._es.connectWithLastEventId(this.lastEventId);
      }, 2000);
    });
    this._es.onOpen(() => {
      const eventObject = {
        connected: true
      };
      owner.events.notify({
        eventName: 'onConnect',
        object: fromObject(eventObject)
      });
      this._eventListeners.open?.forEach((handler) => {
        handler(eventObject);
      });
    });
    this.connect();
  }

  public addEventListener(event: string, handler: any): void {
    if (!this._es) return;
    const ref = new WeakRef(this);
    const owner = ref.get();
    const eventTypes = ['open', 'close', 'error', 'message'];
    if (!eventTypes.includes(event)) {
      this._es.addEventListenerHandler(event, (id, event, data) => {
        const eventObject = {
          event,
          message: {data: data, lastEventId: id}
        };
        owner.events.notify({
          eventName: 'onMessage',
          object: fromObject(eventObject)
        });
        this._eventListeners[event]?.forEach((handler) => {
          handler(eventObject);
        })
      });
    }
    if (this._eventListeners[event] === undefined) {
      this._eventListeners[event] = [];
    }
    this._eventListeners[event].push(handler);
  }

  public removeEventListener(event: string, handler: any): void {
    if (!this._es) return;
    if (this._eventListeners[event] !== undefined) {
      this._eventListeners[event] = this._eventListeners[event].filter(h => h !== handler);
    }
    if (!this._eventListeners[event] || this._eventListeners[event].length === 0) {
      this._es.removeEventListener(event);
    }
  }

  public connect(): void {
    if (!this._es) return;
    this._es.connectWithLastEventId("");
  }

  public close(): void {
    if (!this._es) return;
    this._es.disconnect();
  }
}
