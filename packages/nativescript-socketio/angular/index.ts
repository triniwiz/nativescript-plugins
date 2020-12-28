import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { SocketIO } from '@triniwiz/nativescript-socketio';

export interface IOOptions {
    compress?: boolean;
    debug?: boolean;
    query?: { [key: string]: any };
    cookie?: string[];
    extraHeaders?: { [key: string]: any };
    forceNew?: boolean;
    forcePolling?: boolean;
    forceWebsockets?: boolean;
    log?: boolean;
    path?: string;
    reconnects?: boolean;
    reconnectAttempts?: number;
    reconnectWait?: number; // Time in milli seconds
    secure?: boolean;
}

export type SocketIOOptions = Partial<IOOptions>;

export const SOCKETIO_URL = new InjectionToken<string>('SOCKETIO_URL');
export const SOCKETIO_OPTIONS = new InjectionToken<SocketIOOptions>('SOCKETIO_OPTIONS');

export function socketIOFactory(url: string, options: SocketIOOptions) {
    return new SocketIO(url, options);
}

@NgModule()
export class SocketIOModule {
    static forRoot(url: string, options: SocketIOOptions = {}): ModuleWithProviders<SocketIOModule> {
        return {
            ngModule: SocketIOModule,
            providers: [
                {
                    provide: SocketIO,
                    useFactory: socketIOFactory,
                    deps: [SOCKETIO_URL, SOCKETIO_OPTIONS]
                },
                { provide: SOCKETIO_URL, useValue: url },
                { provide: SOCKETIO_OPTIONS, useValue: options },
            ]
        };
    }
}