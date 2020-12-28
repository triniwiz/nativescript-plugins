import { Common } from './common';

declare const io: any, org: any, android: any, java: any, co: any;

export class SocketIO extends Common {
    protected socket: any;

    /* io.socket.client.Socket; */

    constructor(...args: any[]) {
        super();
        switch (args.length) {
            case 2: {
                let opts = new io.socket.client.IO.Options();
                opts.multiplex = true;
                const options = args[1];
                const keys = Object.keys(options);
                for (let key of keys) {
                    if (key === 'query') {
                        const query = options[key];
                        if (typeof query === 'object') {
                            const queryKeys = Object.keys(query);
                            const uri = android.net.Uri.parse(args[0]);
                            const uriBuilder = uri.buildUpon();
                            for (let queryKey of queryKeys) {
                                const value = `${query[queryKey]}`;
                                uriBuilder.appendQueryParameter(queryKey, value);
                            }
                            opts.query = uriBuilder.build().getQuery();
                        } else if (typeof query === 'string') {
                            opts.query = query;
                        }
                    } else if (key === 'debug' && options[key]) {
                        co.fitcom.fancylogger.FancyLogger.reset(new co.fitcom.fancylogger.FancyLogger());
                        java.util.logging.Logger.getLogger(io.socket.client.Socket.class.getName()).setLevel(java.util.logging.Level.FINEST);
                        java.util.logging.Logger.getLogger(io.socket.engineio.client.Socket.class.getName()).setLevel(java.util.logging.Level.FINEST);
                        java.util.logging.Logger.getLogger(io.socket.client.Manager.class.getName()).setLevel(java.util.logging.Level.FINEST);
                    } else if (key === 'transports' && options[key]) {
                        const transports = options[key];
                        if (Array.isArray(transports) && transports.length > 0) {
                            const array = (Array as any).create('java.lang.String', transports.length);
                            transports.forEach((item, index) => {
                                array[index] = item;
                            });
                            opts.transports = array;
                        }
                    } else {
                        opts[key] = options[key];
                    }
                }
                this.socket = io.socket.client.IO.socket(args[0], opts);
                this.socket.io().on(io.socket.client.Manager.EVENT_TRANSPORT, new io.socket.emitter.Emitter.Listener({
                    call(transportArgs) {
                        let transports = transportArgs[0];
                        if (transports) {
                            transports.on(io.socket.engineio.client.Transport.EVENT_REQUEST_HEADERS, new io.socket.emitter.Emitter.Listener({
                                call(requestArgs) {
                                    const cookies = options['cookie'];
                                    const extraHeaders = options['extraHeaders'];
                                    const headers = requestArgs[0];
                                    if (cookies) {
                                        if (headers && headers.put) {
                                            const list = new java.util.ArrayList(java.util.Arrays.asList(cookies));
                                            headers.put('Cookie', list);
                                        }
                                    }

                                    if (extraHeaders) {
                                        if (headers && headers.put) {
                                            const keys = Object.keys(extraHeaders);
                                            keys.forEach((key) => {
                                                const value = extraHeaders[key];
                                                const list = new java.util.ArrayList();
                                                list.add(value);
                                                headers.put(key, list);
                                            });
                                        }
                                    }
                                }
                            }));
                        }
                    }
                }));
                break;
            }

            case 3: {
                this.socket = args.pop();
                break;
            }
            default: {
                let opts = new io.socket.client.IO.Options();
                opts.multiplex = true;
                this.socket = io.socket.client.IO.socket(args[0], opts);
                break;
            }
        }
    }

    connect() {
        if (!this.connected) {
            this.socket.connect();
        }
    }

    disconnect() {
        this.socket.disconnect();
    }

    get connected(): boolean {
        return this.socket && this.socket.connected();
    }

    on(event: string, callback: (...payload) => void): () => void {
        const listener = new io.socket.emitter.Emitter.Listener({
            call(args) {
                let payload = Array.prototype.slice.call(args);
                let ack = payload.pop();
                if (ack && !(ack.getClass().getName().indexOf('io.socket.client.Socket') === 0 && ack.call)) {
                    payload.push(ack);
                    ack = null;
                }

                payload = payload.map(deserialize);

                if (ack) {
                    const _ack = function () {
                        let _args = Array.prototype.slice.call(arguments);
                        ack.call(_args.map(serialize));
                    };
                    payload.push(_ack);
                }
                callback.apply(null, payload);
            }
        });

        this.socket.on(event, listener);

        return () => {
            this.socket.off(event, listener);
        };
    }

    once(event: string, callback: (...payload) => void): () => void {
        const listener = new io.socket.emitter.Emitter.Listener({
            call(args) {
                let payload = Array.prototype.slice.call(args);
                let ack = payload.pop();
                if (ack && !(ack.getClass().getName().indexOf('io.socket.client.Socket') === 0 && ack.call)) {
                    payload.push(ack);
                    ack = null;
                }

                payload = payload.map(deserialize);

                if (ack) {
                    const _ack = function () {
                        let _args = Array.prototype.slice.call(arguments);
                        ack.call(_args.map(serialize));
                    };
                    payload.push(_ack);
                }
                callback.apply(null, payload);
            }
        });
        this.socket.once(event, listener);

        return () => {
            this.socket.off(event, listener);
        };
    }

    off(event: string) {
        this.socket.off(event);
    }

    emit(event: string, ...payload: any[]) {
        if (!event) {
            throw Error('Emit Failed: No Event argument');
        }

        // Check for ack callback
        let ack = payload.pop();

        // Remove ack if final argument is not a function
        if (ack && typeof ack !== 'function') {
            payload.push(ack);
            ack = null;
        }

        // Serialize Emit
        const final = payload.map(serialize);

        if (ack) {
            final.push(new io.socket.client.Ack({
                call: function (args) {
                    args = Array.prototype.slice.call(args);
                    ack.apply(null, (<any[]>args).map(deserialize));
                },
            }));
        }

        // Emit
        this.socket.emit(event, final);
    }

    joinNamespace(nsp: string): SocketIO {
        const manager = this.socket.io();

        const socket = manager.socket(nsp);
        const namespaceSocket = new SocketIO(null, null, socket);
        if (this.socket.connected()) {
            // Only join if currently connected. Otherwise just configure to join on connect.
            // This mirrors IOS behavior
            namespaceSocket.connect();
        }
        return namespaceSocket;
    }

    leaveNamespace(): void {
        if (this.socket) {
            this.socket.disconnect();
        }
    }
}

export function serialize(data: any): any {
    let store;
    switch (typeof data) {
        case 'string':
        case 'boolean':
        case 'number': {
            return data;
        }

        case 'object': {
            if (!data) {
                return null;
            }

            if (data instanceof Date) {
                return data.toJSON();
            }
            if (Array.isArray(data)) {
                store = new org.json.JSONArray();
                data.forEach((item) => store.put(serialize(item)));
                return store;
            }
            store = new org.json.JSONObject();
            Object.keys(data).forEach((key) => store.put(key, serialize(data[key])));
            return store;
        }

        default:
            return null;
    }

}

export function deserialize(data): any {
    if (data === null || typeof data !== 'object') {
        return data;
    }
    let store;
    switch (data.getClass().getName()) {
        case 'java.lang.String': {
            return String(data);
        }

        case 'java.lang.Boolean': {
            return String(data) === 'true';
        }

        case 'java.lang.Integer':
        case 'java.lang.Long':
        case 'java.lang.Double':
        case 'java.lang.Short': {
            return Number(data);
        }

        case 'org.json.JSONArray': {
            store = [];
            for (let j = 0; j < data.length(); j++) {
                store[j] = deserialize(data.get(j));
            }
            break;
        }

        case 'org.json.JSONObject': {
            store = {};
            let i = data.keys();
            while (i.hasNext()) {
                let key = i.next();
                store[key] = deserialize(data.get(key));
            }
            break;
        }

        default:
            store = null;
    }
    return store;
}

export function connect(uri: string, options?: any): SocketIO {
    let socketio = new SocketIO(uri, options || {});
    socketio.connect();
    return socketio;
}