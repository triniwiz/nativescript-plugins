package io.github.triniwiz.pusher;

import com.pusher.client.Authorizer;
import com.pusher.client.AuthorizationFailureException;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
public class NSCPusherAuthorizer implements Authorizer {
  private Callback callback;
  public String error;
  public CountDownLatch lock;
  public String authToken;
  public long timeOut = 120l;
  public NSCPusherAuthorizer(Callback callback){
    this.callback = callback;
    lock = new CountDownLatch(1);
  }

  public interface Callback {
    void onAuthorize(final String channelName, final String socketID, final NSCPusherAuthorizer authorizer);
  }

  @Override
  public String authorize(final String channelName, final String socketID) throws AuthorizationFailureException {
    callback.onAuthorize(channelName, socketID, this);
    if(error != null){
      throw new AuthorizationFailureException(error);
    }else {
      try{
        lock.await(timeOut, TimeUnit.SECONDS);
      }catch(InterruptedException exception){
       throw new AuthorizationFailureException(exception);
      }
    }
    if(authToken != null){
      return authToken;
    }else {
      throw new AuthorizationFailureException("Failed to return a token");
    }
  }
}
