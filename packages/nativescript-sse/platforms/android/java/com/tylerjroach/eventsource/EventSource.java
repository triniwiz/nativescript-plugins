package com.tylerjroach.eventsource;

import android.util.Log;

import com.tylerjroach.eventsource.impl.AsyncEventSourceHandler;
import com.tylerjroach.eventsource.impl.netty.EventSourceChannelHandler;

import java.net.InetSocketAddress;
import java.net.URI;
import java.util.Map;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

import javax.net.ssl.SSLEngine;

import io.netty.bootstrap.Bootstrap;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.ChannelOption;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioSocketChannel;
import io.netty.handler.codec.DelimiterBasedFrameDecoder;
import io.netty.handler.codec.Delimiters;
import io.netty.handler.codec.http.HttpRequestEncoder;
import io.netty.handler.codec.string.StringDecoder;
import io.netty.handler.ssl.SslHandler;

public class EventSource implements EventSourceHandler {
  public static final String TAG = "EventSource";
  public static final long DEFAULT_RECONNECTION_TIME_MILLIS = 2000;

  public static final int CONNECTING = 0;
  public static final int OPEN = 1;
  public static final int CLOSED = 2;
  private final Bootstrap bootstrap;
  private final EventSourceChannelHandler clientHandler;
  private URI uri;
  private final EventSourceHandler eventSourceHandler;
  private int readyState;
  private Executor executor;

  private EventSource(Builder builder) {
    this.uri = builder.uri;
    this.eventSourceHandler = builder.eventSourceHandler;
    boolean exposeComments = builder.exposeComments;
    long reconnectInterval = builder.reconnectInterval;
    this.executor = builder.executor;
    Map<String, String> headers = builder.headers;
    SSLEngineFactory sslEngineFactory = builder.sslEngineFactory;

    if (executor == null)
      this.executor = Executors.newSingleThreadExecutor();

    if (eventSourceHandler == null)
      Log.d(TAG, "No handler attached");


    if (uri.getScheme().equals("https") && sslEngineFactory == null) {
      sslEngineFactory = new SSLEngineFactory();
    } else {
      //If we don't do this then the pipeline still attempts to use SSL
      sslEngineFactory = null;
    }

    final SSLEngineFactory SSLFactory = sslEngineFactory;

    NioEventLoopGroup group = new NioEventLoopGroup();

    bootstrap = new Bootstrap()
      .group(group)
      .channel(NioSocketChannel.class)
      .option(ChannelOption.TCP_NODELAY, true)
      .handler(new ChannelInitializer<SocketChannel>() {
        @Override
        public void initChannel(SocketChannel ch) throws Exception {
          ChannelPipeline pipeline = ch.pipeline();

          // Add SSL handler if SSLFactory is not null
          if (SSLFactory != null) {
            SSLEngine sslEngine = SSLFactory.GetNewSSLEngine();
            sslEngine.setUseClientMode(true);
            pipeline.addLast("ssl", new SslHandler(sslEngine));
          }

          // Add other handlers to the pipeline
          pipeline.addLast("line",
            new DelimiterBasedFrameDecoder(Integer.MAX_VALUE, Delimiters.lineDelimiter()));
          pipeline.addLast("string", new StringDecoder());
          pipeline.addLast("encoder", new HttpRequestEncoder());
          pipeline.addLast("es-handler", clientHandler); // Add the custom handler

        }
      });


    // add this class as the event source handler so the connect() call can be intercepted
    AsyncEventSourceHandler asyncHandler =
      new AsyncEventSourceHandler(executor, this, exposeComments);

    clientHandler =
      new EventSourceChannelHandler(asyncHandler, reconnectInterval, bootstrap, uri,
        headers);
  }

  /**
   * Builder used to build EventSource
   */

  public static final class Builder {
    private long reconnectInterval = DEFAULT_RECONNECTION_TIME_MILLIS;
    private URI uri;
    private boolean exposeComments;
    private Map<String, String> headers;
    private SSLEngineFactory sslEngineFactory;
    private Executor executor;
    private EventSourceHandler eventSourceHandler;

    /**
     * @param uri to connect
     */
    public Builder(URI uri) {
      this.uri = uri;
    }

    /**
     * @param url to connect
     */
    public Builder(String url) {
      this.uri = URI.create(url);
    }


    /**
     * @param reconnectInterval delay (in milliseconds) before a reconnect is made - in the event of a lost
     */

    public Builder reconnectInterval(long reconnectInterval) {
      this.reconnectInterval = reconnectInterval;
      return this;
    }

    /**
     * @param exposeComments Pass comments through handler
     */
    public Builder exposeComments(boolean exposeComments) {
      this.exposeComments = exposeComments;
      return this;
    }

    /**
     * @param headers Map of headers to pass
     */
    public Builder headers(Map<String, String> headers) {
      this.headers = headers;
      return this;
    }

    /**
     * @param sslEngineFactory custom factory
     */

    public Builder sslEngineFactory(SSLEngineFactory sslEngineFactory) {
      this.sslEngineFactory = sslEngineFactory;
      return this;
    }

    /**
     * @param executor the executor that will connect and receive events
     */
    public Builder executor(Executor executor) {
      this.executor = executor;
      return this;
    }

    /**
     * @param eventSourceHandler receives events
     */
    public Builder eventHandler(EventSourceHandler eventSourceHandler) {
      this.eventSourceHandler = eventSourceHandler;
      return this;
    }

    /**
     * @return new EventSource
     */

    public EventSource build() {
      return new EventSource(this);
    }
  }

  public void connect() {
    readyState = CONNECTING;

    //To avoid perpetual "SocketUnresolvedException"
    final int port;
    if (uri.getPort() == -1) {
      port = (uri.getScheme().equals("https")) ? 443 : 80;
    } else {
      port = uri.getPort();
    }

    executor.execute(new Runnable() {
      @Override
      public void run() {
        bootstrap.connect(new InetSocketAddress(uri.getHost(), port));
      }
    });
  }

  public boolean isConnected() {
    return (readyState == OPEN);
  }

  /**
   * Close the connection
   *
   * @return self
   */
  public EventSource close() {
    readyState = CLOSED;
    clientHandler.close();
    return this;
  }

  /**
   * Wait until the connection is closed
   *
   * @return self
   * @throws InterruptedException if waiting was interrupted
   */
  public EventSource join() throws InterruptedException {
    clientHandler.join();
    return this;
  }

  @Override
  public void onConnect() throws Exception {
    // flag the connection as open
    readyState = OPEN;

    if (eventSourceHandler != null)
      eventSourceHandler.onConnect();
  }

  @Override
  public void onMessage(String event, MessageEvent message) throws Exception {
    if (eventSourceHandler != null)
      eventSourceHandler.onMessage(event, message);
  }

  @Override
  public void onComment(String comment) throws Exception {
    if (eventSourceHandler != null)
      eventSourceHandler.onComment(comment);
  }

  @Override
  public void onError(Throwable t) {
    if (eventSourceHandler != null)
      eventSourceHandler.onError(t);
  }

  @Override
  public void onClosed(boolean willReconnect) {
    if (eventSourceHandler != null)
      eventSourceHandler.onClosed(willReconnect);
  }
}
