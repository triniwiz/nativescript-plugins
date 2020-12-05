export class SSE {
  public close: Function;
  public events: Event;

  constructor(url: string, headers?: any)
}

interface Event {
  on(event: "onMessage", callback: (data: MessageData) => void): void;

  on(event: "onError", callback: (error: MessageError) => void): void;

  on(event: "onConnect", callback: (error: MessageConnected) => void): void;
}

interface MessageData {
  object: {
    event: any;
    message: {
      data: any;
      lastEventId: number;
    }
  };
}

interface MessageError {
  object: {
    error: any;
  };
}

interface MessageConnected {
  object: {
    connected: boolean;
  };
}
