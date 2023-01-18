package com.github.triniwiz.stripe;

import java.lang.Exception;
import java.util.ArrayList;
import java.util.List;
import java.io.Serializable;

import android.content.Context;

import java.lang.ref.WeakReference;

import android.content.Intent;

import org.json.JSONObject;

import java.util.Locale;
import java.util.Currency;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import android.content.IntentFilter;
import android.app.Activity;

import java.util.Objects;
import java.util.concurrent.CountDownLatch;

public class Stripe {
  private static java.util.concurrent.ConcurrentHashMap map = new java.util.concurrent.ConcurrentHashMap();

  public static java.util.concurrent.ConcurrentHashMap getShippingFactoryMethodsMapInstance() {
    return Stripe.map;
  }

  public interface Callback {
    public void onSuccess(com.stripe.android.model.Source source);

    public void onError(Exception error);
  }

  public static void confirmSetupIntent(com.stripe.android.Stripe stripe, androidx.activity.ComponentActivity activity, com.stripe.android.model.ConfirmSetupIntentParams params) {
    confirmSetupIntent(stripe, activity, params, null);
  }

  public static void confirmSetupIntent(com.stripe.android.Stripe stripe, androidx.activity.ComponentActivity activity, com.stripe.android.model.ConfirmSetupIntentParams params, @Nullable String stripeAccountId) {
    stripe.confirmSetupIntent(activity, params, stripeAccountId);
  }

  public static void createCardParams(com.stripe.android.model.CardParams cardParams, com.stripe.android.Stripe stripe, final Callback callback) {
    stripe.createSource(
      com.stripe.android.model.SourceParams.createCardParams(cardParams),
      new com.stripe.android.ApiResultCallback<com.stripe.android.model.Source>() {
        @Override
        public void onSuccess(com.stripe.android.model.Source source) {
          callback.onSuccess(source);
        }

        @Override
        public void onError(Exception error) {
          callback.onError(error);
        }
      }
    );
  }

  static ArrayList list = new ArrayList();
  static boolean isShippingInfoValid = true;
  static String shippingInfoValidErrorMessage = "Please check your info an try again.";
  public static final String SHIPPING_INFO_VALIDATOR_ACTION = "com.github.triniwiz.stripe.Stripe.ACTIONS.ShippingInfoValidator";
  public static final String SHIPPING_INFO_VALIDATOR_ERROR_ACTION = "com.github.triniwiz.stripe.Stripe.ACTIONS.ShippingInfoValidatorError";
  public static final String UPDATE_SHIPPING_INFO_VALIDATOR_ACTION = "com.github.triniwiz.stripe.Stripe.ACTIONS.UpateShippingInfoValidator";
  public static final String UPDATE_SHIPPING_INFO_VALIDATOR_ERROR_ACTION = "com.github.triniwiz.stripe.Stripe.ACTIONS.UpateShippingInfoValidatorError";
  public static final String UPDATE_SHIPPING_METHODS_ACTION = "com.github.triniwiz.stripe.Stripe.ACTIONS.UpateShippingMethodsFactory";
  public static final String SHIPPING_INFO_METHODS_ACTION = "com.github.triniwiz.stripe.Stripe.ACTIONS.ShippingInfo";

  static class InternalReceiver extends android.content.BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
      String action = intent.getAction();
      if (Objects.equals(action, UPDATE_SHIPPING_METHODS_ACTION)) {
        list.clear();
        List<String> values = intent.getStringArrayListExtra("shippingMethods");
        if (values != null) {
          try {
            for (String object : values) {
              JSONObject json = new JSONObject(object);
              list.add(
                new com.stripe.android.model.ShippingMethod(
                  json.getString("label"),
                  json.getString("identifier"),
                  json.getLong("amount"),
                  json.getString("currency"),
                  json.getString("detail")
                )
              );
            }
          } catch (Exception e) {
            e.printStackTrace();
          }
        }
      } else if (Objects.equals(action, UPDATE_SHIPPING_INFO_VALIDATOR_ACTION)) {
        isShippingInfoValid = intent.getBooleanExtra("shippingValidation", true);
        if (lock != null) {
          lock.countDown();
        }
      } else if (Objects.equals(action, UPDATE_SHIPPING_INFO_VALIDATOR_ERROR_ACTION)) {
        shippingInfoValidErrorMessage = intent.getStringExtra("shippingValidationErrorMessage");
        if (lock != null) {
          lock.countDown();
        }
      }
    }
  }

  public static class ShippingInfo implements java.io.Serializable {
    String name;
    String line1;
    String line2;
    String city;
    String state;
    String postalCode;
    String country;
    String phone;
    String email;

    ShippingInfo(com.stripe.android.model.ShippingInformation info) {
      name = info.getName();
      line1 = info.getAddress().getLine1();
      line2 = info.getAddress().getLine2();
      city = info.getAddress().getCity();
      state = info.getAddress().getState();
      postalCode = info.getAddress().getPostalCode();
      country = info.getAddress().getCountry();
      phone = info.getPhone();
    }

    public String getName() {
      return name;
    }

    public String getLine1() {
      return line1;
    }

    public String getLine2() {
      return line2;
    }


    public String getCity() {
      return city;
    }

    public String getState() {
      return state;
    }

    public String getPostalCode() {
      return postalCode;
    }

    public String getCountry() {
      return country;
    }

    public String getPhone() {
      return phone;
    }

    public String getEmail() {
      return email;
    }


  }


  static InternalReceiver receiver = new InternalReceiver();
  static boolean isRegistered = false;
  static WeakReference<android.app.Activity> ctx;

  private static void registerReceiver(Activity activity) {
    if (!isRegistered) {
      IntentFilter filter = new IntentFilter();
      filter.addAction(UPDATE_SHIPPING_METHODS_ACTION);
      filter.addAction(UPDATE_SHIPPING_INFO_VALIDATOR_ACTION);
      filter.addAction(UPDATE_SHIPPING_INFO_VALIDATOR_ERROR_ACTION);
      activity.registerReceiver(
        receiver,
        filter
      );
      ctx = new WeakReference(activity);
      isRegistered = true;
    }
  }

  static CountDownLatch lock;

  static class ShippingInformationValidator
    implements com.stripe.android.PaymentSessionConfig.ShippingInformationValidator {

    @Override
    public boolean isValid(
      @NonNull com.stripe.android.model.ShippingInformation info
    ) {
      android.app.Activity ref = ctx.get();
      if (info.getAddress() != null && ref != null) {
        lock = new CountDownLatch(1);
        Intent intent = new Intent(SHIPPING_INFO_VALIDATOR_ACTION);
        intent.putExtra("shippingInfo", new ShippingInfo(info));
        ref.sendBroadcast(intent);
        try {
          lock.await();
        } catch (InterruptedException ignored) {
        } finally {
          lock = null;
        }
      }
      return isShippingInfoValid;
    }

    @NonNull
    public String getErrorMessage(
      @NonNull com.stripe.android.model.ShippingInformation info
    ) {
      Activity ref = ctx.get();
      if (info.getAddress() != null && ref != null) {
        lock = new CountDownLatch(1);
        Intent intent = new Intent(SHIPPING_INFO_VALIDATOR_ERROR_ACTION);
        intent.putExtra("shippingInfo", new ShippingInfo(info));
        ref.sendBroadcast(intent);
        try {
          lock.await();
        } catch (InterruptedException ignored) {
        } finally {
          lock = null;
        }
      }
      return shippingInfoValidErrorMessage;
    }
  }


  public static void clearShippingInformationValidator(final com.stripe.android.PaymentSessionConfig.Builder builder) {
    builder.setShippingInformationValidator(null);
  }


  public static void setShippingInformationValidator(final com.stripe.android.PaymentSessionConfig.Builder builder, final Activity activity) {
    registerReceiver(activity);
    builder.setShippingInformationValidator(new ShippingInformationValidator());
  }

  public static void setShippingMethodsFactory(final com.stripe.android.PaymentSessionConfig.Builder builder, final Activity activity) {
    registerReceiver(activity);
    builder.setShippingMethodsFactory(
      new com.stripe.android.PaymentSessionConfig.ShippingMethodsFactory() {
        @Override
        public List<com.stripe.android.model.ShippingMethod> create(com.stripe.android.model.ShippingInformation info) {
          Activity ref = ctx.get();
          if (info != null && info.getAddress() != null && ref != null) {
            Intent intent = new Intent(SHIPPING_INFO_METHODS_ACTION);
            intent.putExtra("shippingInfo", new ShippingInfo(info));
            ref.sendBroadcast(intent);
          }
          return list;
        }
      }
    );
  }
}
