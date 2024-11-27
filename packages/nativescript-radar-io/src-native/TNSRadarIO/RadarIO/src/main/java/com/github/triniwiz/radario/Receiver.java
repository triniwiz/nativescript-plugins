package com.github.triniwiz.radario;

import android.content.Context;
import android.location.Location;

import androidx.annotation.NonNull;

import io.radar.sdk.Radar;
import io.radar.sdk.Radar.RadarStatus;
import io.radar.sdk.model.*;
import io.radar.sdk.model.RadarEvent.RadarEventConfidence;
import io.radar.sdk.model.RadarEvent.RadarEventType;
import io.radar.sdk.RadarReceiver;

import org.jetbrains.annotations.NotNull;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Arrays;

public class Receiver extends RadarReceiver {

  @Override
  public void onEventsReceived(@NotNull Context context, @NotNull RadarEvent[] events, @NotNull RadarUser user) {
    if (RadarIOPlugin.listener != null) {
      JSONObject object = new JSONObject();
      try {
        object.put("events", Receiver.getEvents(events));
        object.put("user", Receiver.getUser(user));
        RadarIOPlugin.listener.onEvents(object.toString());
      } catch (JSONException ignored) {
      }
    }
  }

  @Override
  public void onLocationUpdated(@NotNull Context context, @NotNull Location location, @NotNull RadarUser user) {
    if (RadarIOPlugin.listener != null) {
      JSONObject object = new JSONObject();
      try {
        object.put("location", Receiver.getLocation(location));
        object.put("user", Receiver.getUser(user));
        RadarIOPlugin.listener.onLocation(object.toString());
      } catch (JSONException ignored) {
      }
    }
  }

  @Override
  public void onError(@NotNull Context context, @NotNull RadarStatus status) {
    if (RadarIOPlugin.listener != null) {
      JSONObject object = new JSONObject();
      try {
        object.put("error", Receiver.getStatus(status));
        RadarIOPlugin.listener.onError(object.toString());
      } catch (JSONException ignored) {
      }
    }
  }

  private static JSONArray getEvents(RadarEvent[] events) {
    if (events != null) {
      JSONArray _events = new JSONArray();
      for (RadarEvent event : events) {
        JSONObject object = new JSONObject();
        try {
          object.put("_id", event.get_id());
          object.put("type", Receiver.getType(event.getType()));
          object.put("live", event.getLive());
          object.put("confidence", Receiver.getConfidence(event.getConfidence()));


          RadarPlace[] _alternativePlaces = event.getAlternatePlaces();
          if (_alternativePlaces != null) {
            JSONArray alternativePlaces = new JSONArray();
            for (RadarPlace alternativePlace : _alternativePlaces) {
              JSONObject place = new JSONObject();
              place.put("_id", alternativePlace.get_id());
              place.put("name", alternativePlace.getName());
              place.put("categories", new JSONArray(Arrays.asList(alternativePlace.getCategories())));
            }
            object.put("alternatePlaces", alternativePlaces);
          }


          RadarPlace _place = event.getPlace();
          if (_place != null) {
            JSONObject place = new JSONObject();
            place.put("_id", _place.get_id());
            place.put("name", _place.getName());
            place.put("categories", new JSONArray(Arrays.asList(_place.getCategories())));
            object.put("place", place);
          }

          RadarGeofence _geofence = event.getGeofence();
          if (_geofence != null) {
            JSONObject geofence = new JSONObject();
            geofence.put("_id", _geofence.get_id());
            geofence.put("description", _geofence.getDescription());
            geofence.put("externalId", _geofence.getExternalId());
            geofence.put("tag", _geofence.getTag());
            object.put("geofence", geofence);
          }

          RadarRegion _region = event.getRegion();
          if (_region != null) {
            JSONObject region = new JSONObject();
            region.put("_id", _region.get_id());
            region.put("type", _region.getType());
            region.put("name", _region.getName());
            region.put("code", _region.getCode());
            object.put("region", _region);
          }

          _events.put(object);
        } catch (JSONException ignored) {
        }
      }
      return _events;
    }
    return null;
  }

  private static String getConfidence(RadarEventConfidence confidence) {
    if (confidence.equals(RadarEventConfidence.HIGH)) {
      return "high";
    } else if (confidence.equals(RadarEventConfidence.MEDIUM)) {
      return "medium";
    } else if (confidence.equals(RadarEventConfidence.LOW)) {
      return "low";
    } else {
      return "none";
    }
  }

  private static String getType(RadarEventType type) {
    switch (type) {
      case USER_ENTERED_GEOFENCE:
        return "user.entered_geofence";
      case USER_EXITED_GEOFENCE:
        return "user.exited_geofence";
      case USER_DWELLED_IN_GEOFENCE:
        return "user.dwelled_in_geofence";
      case USER_ENTERED_PLACE:
        return "user.entered_place";
      case USER_EXITED_PLACE:
        return "user.exited_place";
      case USER_ENTERED_REGION_COUNTRY:
        return "user.entered_region_country";
      case USER_EXITED_REGION_COUNTRY:
        return "user.exited_region_country";
      case USER_ENTERED_REGION_DMA:
        return "user.entered_region_dma";
      case USER_EXITED_REGION_DMA:
        return "user.exited_region_dma";
      case USER_ENTERED_REGION_STATE:
        return "user.entered_region_state";
      case USER_EXITED_REGION_STATE:
        return "user.exited_region_state";
      case USER_ENTERED_REGION_POSTAL_CODE:
        return "user.entered_region_postal_code";
      case USER_EXITED_REGION_POSTAL_CODE:
        return "user.exited_region_postal_code";
      case USER_NEARBY_PLACE_CHAIN:
        return "user.nearby_place_chain";
      case USER_ENTERED_BEACON:
        return "user.entered_beacon";
      case USER_EXITED_BEACON:
        return "user.exited_beacon";
      case USER_STARTED_TRIP:
        return "user.started_trip";
      case USER_UPDATED_TRIP:
        return "user.updated_trip";
      case USER_STOPPED_TRIP:
        return "user.stopped_trip";
      case USER_APPROACHING_TRIP_DESTINATION:
        return "user.approaching_trip_destination";
      case USER_ARRIVED_AT_TRIP_DESTINATION:
        return "user.arrived_at_trip_destination";
      case USER_ARRIVED_AT_WRONG_TRIP_DESTINATION:
        return "user.arrived_at_wrong_trip_destination";
      case USER_FAILED_FRAUD:
        return "user.failed_fraud";
      default:
        return null;
    }
  }

  private static JSONObject getLocation(Location location) {
    if (location != null) {
      JSONObject object = new JSONObject();
      try {
        object.put("latitude", location.getLatitude());
        object.put("longitude", location.getLongitude());
      } catch (JSONException e) {
        return null;
      }

      return object;
    }
    return null;
  }

  private static String getStatus(RadarStatus status) {
    switch (status) {
      case SUCCESS:
        return "SUCCESS";
      case ERROR_NETWORK:
        return "ERROR_NETWORK";
      case ERROR_PERMISSIONS:
        return "ERROR_PERMISSIONS";
      case ERROR_PUBLISHABLE_KEY:
        return "ERROR_PUBLISHABLE_KEY";
      case ERROR_RATE_LIMIT:
        return "ERROR_RATE_LIMIT";
      case ERROR_SERVER:
        return "ERROR_SERVER";
      case ERROR_UNAUTHORIZED:
        return "ERROR_UNAUTHORIZED";
      case ERROR_LOCATION:
        return "ERROR_LOCATION";
      default:
        return "ERROR_UNKNOWN";
    }
  }

  private static JSONObject getUser(RadarUser user) {
    if (user != null) {
      JSONObject _user = new JSONObject();

      try {
        _user.put("_id", user.get_id());
        _user.put("userId", user.getUserId());
        _user.put("description", user.getDescription());
        _user.put("deviceId", user.getDeviceId());


        RadarRegion country = user.getCountry();
        if (country != null) {
          JSONObject _country = new JSONObject();
          _country.put("_id", country.get_id());
          _country.put("code", country.getCode());
          _country.put("name", country.getName());
          _country.put("type", country.getType());
          _user.put("country", _country);
        }

        RadarRegion dma = user.getDma();
        if (dma != null) {
          JSONObject _dma = new JSONObject();
          _dma.put("_id", dma.get_id());
          _dma.put("code", dma.getCode());
          _dma.put("name", dma.getName());
          _dma.put("type", dma.getType());
          _user.put("dma", _dma);
        }

        RadarRegion state = user.getState();
        if (state != null) {
          JSONObject _state = new JSONObject();
          _state.put("_id", state.get_id());
          _state.put("code", state.getCode());
          _state.put("name", state.getName());
          _state.put("type", state.getType());
          _user.put("state", _state);
        }

        return _user;
      } catch (JSONException e) {
        return null;
      }

    }
    return null;
  }

  @Override
  public void onClientLocationUpdated(@NotNull Context context, @NotNull Location location, boolean b, @NotNull Radar.RadarLocationSource radarLocationSource) {
    if (RadarIOPlugin.listener != null) {
      JSONObject object = new JSONObject();
      try {
        object.put("location", Receiver.getLocation(location));
        object.put("stopped", b);
        object.put("source", radarLocationSource.toString());
        RadarIOPlugin.listener.onClientLocation(object.toString());
      } catch (JSONException ignored) {
      }
    }
  }

  @Override
  public void onLog(@NotNull Context context, @NotNull String s) {
    if (RadarIOPlugin.listener != null) {
      JSONObject object = new JSONObject();
      try {
        object.put("log", s);
        RadarIOPlugin.listener.onLog(object.toString());
      } catch (JSONException ignored) {
      }
    }
  }

  @Override
  public void onLocationPermissionStatusUpdated(@NonNull Context context, @NonNull RadarLocationPermissionStatus radarLocationPermissionStatus) {
    // todo
  }
}
