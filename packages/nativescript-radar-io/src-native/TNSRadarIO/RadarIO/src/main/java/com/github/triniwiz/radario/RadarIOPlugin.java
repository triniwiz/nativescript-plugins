package com.github.triniwiz.radario;

public class RadarIOPlugin {
  static Listener listener;

  public interface Listener {
    void onEvents(String events);

    void onLocation(String location);

    void onError(String error);

    void onClientLocation(String clientLocation);

    void onLog(String log);
  }

  public static void setListener(Listener listener) {
    RadarIOPlugin.listener = listener;
  }
}
