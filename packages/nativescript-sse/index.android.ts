import {BaseSSE} from './common';
import {fromObject, Observable} from '@nativescript/core';

declare var android: any, com: any, java: any, WeakRef;

export class SSE extends BaseSSE {
  private _sseHandler: any;
  private _es: any;
  private _headers: any;
  private _url: any;

  constructor(url: string, headers: any = {}) {
    super(url, headers);
    this._url = new java.net.URI(url);
    const that = new WeakRef(this);
    const EventHandler = com.tylerjroach.eventsource.EventSourceHandler.extend({
      owner: that.get(),
      onConnect() {
        this.owner.events.notify({
          eventName: 'onConnect',
          object: fromObject({
            connected: true
          })
        });
      },
      onMessage(event, message) {
        this.owner.events.notify({
          eventName: 'onMessage',
          object: fromObject({
            event: event.toString(),
            message: {
              data: message.data,
              lastEventId: message.lastEventId,
              origin: message.origin
            }
          })
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
        this.owner.events.notify({
          eventName: 'onError',
          object: fromObject({
            error: e.getMessage()
          })
        });
      },
      onClosed(willReconnect) {
        this.owner.events.notify({
          eventName: 'willReconnect',
          object: fromObject({
            willReconnect: willReconnect
          })
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

  public addEventListener(event: string): void {
  }

  public removeEventListener(event: string): void {
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
