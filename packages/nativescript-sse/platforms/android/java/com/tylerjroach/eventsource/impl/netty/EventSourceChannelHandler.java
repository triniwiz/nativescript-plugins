package com.tylerjroach.eventsource.impl.netty;

import com.tylerjroach.eventsource.impl.ConnectionHandler;
import com.tylerjroach.eventsource.EventSourceException;
import com.tylerjroach.eventsource.EventSourceHandler;
import com.tylerjroach.eventsource.impl.EventStreamParser;

import java.net.ConnectException;
import java.net.InetSocketAddress;
import java.net.URI;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import io.netty.bootstrap.Bootstrap;
import io.netty.channel.Channel;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;
import io.netty.handler.codec.http.DefaultHttpRequest;
import io.netty.handler.codec.http.HttpHeaderNames;
import io.netty.handler.codec.http.HttpMethod;
import io.netty.handler.codec.http.HttpRequest;
import io.netty.handler.codec.http.HttpVersion;
import io.netty.util.HashedWheelTimer;
import io.netty.util.Timer;

public class EventSourceChannelHandler extends ChannelInboundHandlerAdapter
  implements ConnectionHandler {
  private static final Pattern STATUS_PATTERN = Pattern.compile("HTTP/1.1 (\\d+) (.*)");
  private static final Pattern CONTENT_TYPE_PATTERN =
    Pattern.compile("Content-Type: text/event-stream", Pattern.CASE_INSENSITIVE);

  private final EventSourceHandler eventSourceHandler;
  private final Bootstrap bootstrap;
  private final URI uri;
  private final Map<String, String> headers;
  private final EventStreamParser messageDispatcher;

  private final Timer timer = new HashedWheelTimer();
  private Channel channel;
  private boolean reconnectOnClose = true;
  private long reconnectionTimeMillis;
  private String lastEventId;
  private boolean eventStreamOk;
  private boolean headerDone;
  private Integer status;
  private AtomicBoolean reconnecting = new AtomicBoolean(false);

  public EventSourceChannelHandler(EventSourceHandler eventSourceHandler,
                                   long reconnectionTimeMillis, Bootstrap bootstrap, URI uri,
                                   Map<String, String> headers) {
    this.eventSourceHandler = eventSourceHandler;
    this.reconnectionTimeMillis = reconnectionTimeMillis;
    this.bootstrap = bootstrap;
    this.uri = uri;
    this.headers = headers;
    this.messageDispatcher = new EventStreamParser(uri.toString(), eventSourceHandler, this);
  }


  @Override
  public void channelActive(ChannelHandlerContext ctx) throws Exception {

    HttpRequest request =
      new DefaultHttpRequest(HttpVersion.HTTP_1_1, HttpMethod.GET, uri.toString());
    request.headers().add(HttpHeaderNames.ACCEPT, "text/event-stream");

    if (headers != null) {
      for (Map.Entry<String, String> entry : headers.entrySet()) {
        request.headers().add(entry.getKey(), entry.getValue());
      }
    }

    request.headers().add(HttpHeaderNames.HOST, uri.getHost());
    request.headers().add(HttpHeaderNames.ORIGIN, uri.getScheme() + "://" + uri.getHost());
    request.headers().add(HttpHeaderNames.CACHE_CONTROL, "no-cache");
    if (lastEventId != null) {
      request.headers().add("Last-Event-ID", lastEventId);
    }
    ctx.channel().write(request);
    channel = ctx.channel();

  }


  @Override
  public void channelInactive(ChannelHandlerContext ctx) throws Exception {
    channel = null;

    eventSourceHandler.onClosed(reconnectOnClose);
    if (reconnectOnClose) {
      reconnect();
    }

    super.channelInactive(ctx);
  }

  @Override
  public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
    if (!(msg instanceof String)) {
      return;
    }

    String line = (String) msg;
    if (status == null) {
      Matcher statusMatcher = STATUS_PATTERN.matcher(line);
      if (statusMatcher.matches()) {
        status = Integer.parseInt(statusMatcher.group(1));
        if (status != 200) {
          eventSourceHandler.onError(
            new EventSourceException("Bad status from " + uri + ": " + status));
          reconnect();
        }
        return;
      } else {
        eventSourceHandler.onError(new EventSourceException("Not HTTP? " + uri + ": " + line));
        reconnect();
      }
    }
    if (!headerDone) {
      if (CONTENT_TYPE_PATTERN.matcher(line).find()) {
        eventStreamOk = true;
      }
      if (line.isEmpty()) {
        headerDone = true;
        if (eventStreamOk) {
          eventSourceHandler.onConnect();
        } else {
          eventSourceHandler.onError(new EventSourceException(
            "Not event stream: " + uri + " (expected Content-Type: text/event-stream"));
          reconnect();
        }
      }
    } else {
      messageDispatcher.line(line);
    }

  }

  @Override
  public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause)
    throws Exception {
    Throwable error = cause;
    if (error instanceof ConnectException) {
      error = new EventSourceException("Failed to connect to " + uri, error);
    }
    eventSourceHandler.onError(error);
    ctx.channel().close();
  }

  public void setReconnectionTimeMillis(long reconnectionTimeMillis) {
    this.reconnectionTimeMillis = reconnectionTimeMillis;
  }

  @Override
  public void setLastEventId(String lastEventId) {
    this.lastEventId = lastEventId;
  }

  public EventSourceChannelHandler close() {
    reconnectOnClose = false;
    if (channel != null) {
      channel.close();
    }
    return this;
  }

  public EventSourceChannelHandler join() throws InterruptedException {
    if (channel != null) {
      channel.closeFuture().await();
    }
    return this;
  }

  private void reconnect() {
    if (!reconnecting.get()) {
      reconnecting.set(true);
      timer.newTimeout(timeout -> {
        reconnecting.set(false);
        int port = uri.getPort();
        if (port == -1) {
          port = (uri.getScheme().equals("https")) ? 443 : 80;
        }
        bootstrap.option(null, new InetSocketAddress(uri.getHost(), port));
        bootstrap.connect().await();
      }, reconnectionTimeMillis, TimeUnit.MILLISECONDS);
    }
  }
}
