package com.github.triniwiz.imagecacheit;

/**
 * Created by triniwiz on 4/6/20
 */

import android.annotation.SuppressLint;
import android.app.Application;
import android.content.ComponentCallbacks2;
import android.content.Context;
import android.content.SharedPreferences;
import android.content.res.Configuration;
import android.graphics.*;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.renderscript.Allocation;
import android.renderscript.Element;
import android.renderscript.RenderScript;
import android.renderscript.ScriptIntrinsicBlur;
import android.util.Base64;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.WindowManager;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.bumptech.glide.Glide;
import com.bumptech.glide.Priority;
import com.bumptech.glide.RequestBuilder;
import com.bumptech.glide.RequestManager;
import com.bumptech.glide.load.DataSource;
import com.bumptech.glide.load.Transformation;
import com.bumptech.glide.load.engine.DiskCacheStrategy;
import com.bumptech.glide.load.engine.GlideException;
import com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool;
import com.bumptech.glide.load.model.GlideUrl;
import com.bumptech.glide.load.model.LazyHeaderFactory;
import com.bumptech.glide.load.model.LazyHeaders;
import com.bumptech.glide.load.resource.bitmap.BitmapTransformation;
import com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
import com.bumptech.glide.load.resource.bitmap.GranularRoundedCorners;
import com.bumptech.glide.load.resource.gif.GifDrawable;
import com.bumptech.glide.request.RequestListener;
import com.bumptech.glide.request.target.Target;

import org.json.JSONException;
import org.json.JSONObject;

import jp.co.cyberagent.android.gpuimage.GPUImage;
import jp.co.cyberagent.android.gpuimage.filter.*;
import jp.wasabeef.glide.transformations.SupportRSBlurTransformation;
import jp.wasabeef.glide.transformations.internal.FastBlur;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationHandler;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ImageView extends androidx.appcompat.widget.AppCompatImageView implements ImageViewProgressListener {
    private static final double EPSILON = 1E-05;
    Paint paint = new Paint();
    BitmapShader bitmapShader;
    private Path path = new Path();
    private RectF rect = new RectF();

    private double scaleW = 1;
    private double scaleH = 1;

    private float rotationAngle;

    private Matrix mMatrix;
    private Object source;
    private int mDecodeWidth;
    private int mDecodeHeight;
    private boolean mKeepAspectRatio;
    private boolean mUseCache;
    private boolean mAsync;
    private Object mListener;
    private boolean mAttachedToWindow = false;

    private Object placeHolder;
    private RequestBuilder errorHolder;
    private Object fallbackImage;

    RequestManager requestManager;

    public float getRotationAngle() {
        return rotationAngle;
    }

    public void setRotationAngle(float rotationAngle) {
        this.rotationAngle = rotationAngle;
        invalidate();
    }

    ProgressListener progressListener;
    EventsListener eventsListener;

    @Override
    public void onProgress(String key, long bytesRead, long expectedLength) {
        if (progressListener != null) {
            if (expectedLength <= 0) {
                progressListener.onProgress(bytesRead, expectedLength, 100, key);
            } else {
                progressListener.onProgress(bytesRead, expectedLength, (int) ((bytesRead / expectedLength) * 100), key);
            }
        }
    }

    @Override
    public float getGranularityPercentage() {
        return (float) 0.1;
    }

    public enum Priority {
        Low,
        Normal,
        High
    }

    public static class BasicAuthorization implements LazyHeaderFactory {
        private final String username;
        private final String password;

        public BasicAuthorization(String username, String password) {

            this.username = username;
            this.password = password;
        }

        @Override
        public String buildHeader() {
            return "Basic " + Base64.encodeToString((username + ":" + password).getBytes(), Base64.NO_WRAP);
        }
    }

    private Priority priority = Priority.Normal;
    private HashMap<String, String> headers = new HashMap<>();
    private static ExecutorService executor = Executors.newCachedThreadPool();

    public ImageView(Context context) {
        super(context);
        preferences = getContext().getSharedPreferences(IMAGE_CACHE_STORE, Context.MODE_PRIVATE);
        this.mMatrix = new Matrix();
        this.setScaleType(ScaleType.FIT_CENTER);
        try {
            Class<?> BitmapOwner = Class.forName("org.nativescript.widgets.image.BitmapOwner");
            Proxy.newProxyInstance(BitmapOwner.getClassLoader(), new Class[]{}, new InvocationHandler() {
                public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                    String name = method.getName();
                    if (name.equals("setBitmap")) {
                        setBitmap((Bitmap) args[0]);
                        return null;
                    } else if (name.equals("setDrawable")) {
                        setDrawable((Drawable) args[0]);
                        return null;
                    }
                    throw new RuntimeException("no method found");
                }
            });
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void onAttachedToWindow() {
        mAttachedToWindow = true;
        super.onAttachedToWindow();
       // this.loadImage();
    }

    @Override
    protected void onDetachedFromWindow() {
        mAttachedToWindow = false;
        super.onDetachedFromWindow();
//        if (requestManager != null) {
//            requestManager.clear(this);
//        }
//        if (source != null) {
//            this.setImageBitmap(null);
//        }
    }

    Object[] emptyObjArray = new Object[]{null};

    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {

        int width = MeasureSpec.getSize(widthMeasureSpec);
        int widthMode = MeasureSpec.getMode(widthMeasureSpec);

        int height = MeasureSpec.getSize(heightMeasureSpec);
        int heightMode = MeasureSpec.getMode(heightMeasureSpec);

        Drawable drawable = this.getDrawable();
        int measureWidth;
        int measureHeight;
        if (drawable != null) {
            measureWidth = drawable.getIntrinsicWidth();
            measureHeight = drawable.getIntrinsicHeight();
        } else {
            measureWidth = 0;
            measureHeight = 0;
        }

        boolean finiteWidth = widthMode != MeasureSpec.UNSPECIFIED;
        boolean finiteHeight = heightMode != MeasureSpec.UNSPECIFIED;

        if (measureWidth != 0 && measureHeight != 0 && (finiteWidth || finiteHeight)) {
            this.computeScaleFactor(width, height, finiteWidth, finiteHeight, measureWidth, measureHeight);
            int resultW = (int) Math.round(measureWidth * this.scaleW);
            int resultH = (int) Math.round(measureHeight * this.scaleH);

            measureWidth = finiteWidth ? Math.min(resultW, width) : resultW;
            measureHeight = finiteHeight ? Math.min(resultH, height) : resultH;
        }

        measureWidth += this.getPaddingLeft() + this.getPaddingRight();
        measureHeight += this.getPaddingTop() + this.getPaddingBottom();

        measureWidth = Math.max(measureWidth, getSuggestedMinimumWidth());
        measureHeight = Math.max(measureHeight, getSuggestedMinimumHeight());
        try {
            Class<?> CommonLayoutParams = Class.forName("org.nativescript.widgets.CommonLayoutParams");
            Field debuggableF = CommonLayoutParams.getDeclaredField("debuggable");
            debuggableF.setAccessible(true);
            int debuggable = (int) debuggableF.get(null);
            if (debuggable > 0) {
                StringBuilder sb = (StringBuilder) CommonLayoutParams.getDeclaredMethod("getStringBuilder").invoke(null);
                if (sb != null) {
                    sb.append("ImageView onMeasure: ");
                    sb.append(MeasureSpec.toString(widthMeasureSpec));
                    sb.append(", ");
                    sb.append(MeasureSpec.toString(heightMeasureSpec));
                    sb.append(", stretch: ");
                    sb.append(this.getScaleType());
                    sb.append(", measureWidth: ");
                    sb.append(measureWidth);
                    sb.append(", measureHeight: ");
                    sb.append(measureHeight);
                    Field tag = CommonLayoutParams.getDeclaredField("TAG");
                    tag.setAccessible(true);
                    String TAG = (String) tag.get(null);
                    Method log = CommonLayoutParams.getDeclaredMethod("log", logParams);
                    log.setAccessible(true);
                    log.invoke(null, TAG, sb.toString());
                }
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (NoSuchFieldException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }


        int widthSizeAndState = resolveSizeAndState(measureWidth, widthMeasureSpec, 0);
        int heightSizeAndState = resolveSizeAndState(measureHeight, heightMeasureSpec, 0);

        this.setMeasuredDimension(widthSizeAndState, heightSizeAndState);
    }

    private Class[] logParams = new Class[]{String.class, String.class};

    private void computeScaleFactor(int measureWidth, int measureHeight, boolean widthIsFinite, boolean heightIsFinite, double nativeWidth, double nativeHeight) {

        this.scaleW = 1;
        this.scaleH = 1;

        ScaleType scale = this.getScaleType();
        if ((scale == ScaleType.CENTER_CROP || scale == ScaleType.FIT_CENTER || scale == ScaleType.FIT_XY) &&
                (widthIsFinite || heightIsFinite)) {

            this.scaleW = (nativeWidth > 0) ? measureWidth / nativeWidth : 0d;
            this.scaleH = (nativeHeight > 0) ? measureHeight / nativeHeight : 0d;

            if (!widthIsFinite) {
                this.scaleW = scaleH;
            } else if (!heightIsFinite) {
                this.scaleH = scaleW;
            } else {
                // No infinite dimensions.
                switch (scale) {
                    case FIT_CENTER:
                        this.scaleH = this.scaleW < this.scaleH ? this.scaleW : this.scaleH;
                        this.scaleW = this.scaleH;
                        break;
                    case CENTER_CROP:
                        this.scaleH = this.scaleW > this.scaleH ? this.scaleW : this.scaleH;
                        this.scaleW = this.scaleH;
                        break;
                    default:
                        break;
                }
            }
        }
    }

    public void setSource(Object source, int decodeWidth, int decodeHeight, boolean useCache, boolean async) {
        this.setSource(source, decodeWidth, decodeHeight, false, useCache, async);
    }

    public void setSource(int source, int decodeWidth, int decodeHeight, boolean useCache, boolean async) {
        this.setSource(source, decodeWidth, decodeHeight, false, useCache, async);
    }

    public void setSource(Object source, int decodeWidth, int decodeHeight, boolean keepAspectRatio, boolean useCache, boolean async) {
        this.source = source;
        mDecodeWidth = decodeWidth;
        mDecodeHeight = decodeHeight;
        mKeepAspectRatio = keepAspectRatio;
        mUseCache = useCache;
        mAsync = async;

        //if (mAttachedToWindow) {
            loadImage();
       // }
    }

    class ThumbConfig {
        boolean enable;
        int x;
        int y;
        int width;
        int height;
        Bitmap.CompressFormat format;
        int quality;
        String filter;
        String directory;
        String ext;
        String key;

        ThumbConfig() {
        }

        void handleThumbCreation(Drawable resource) {
            if (!enable) {
                return;
            }
            String key = thumbConfig.key;
            if (key == null || key.isEmpty()) {
                key = source.toString();
            }

            if (preferences.contains(key)) {
                try {
                    JSONObject object = new JSONObject(preferences.getString(key, ""));
                    if (object.has("path")) {
                        File path = new File(object.getString("path"));
                        if (!path.exists()) {
                            // file missing recreate
                            thumbConfig.createThumb(resource);
                        }
                    } else {
                        // invalid object
                        // remove & create
                        preferences.edit().remove(key).apply();
                        thumbConfig.createThumb(resource);
                    }
                } catch (JSONException e) {
                    // failed to create object from store path data
                    // try creating ?
                }
            } else {
                thumbConfig.createThumb(resource);
            }
        }

        @SuppressLint("ApplySharedPref")
        void createThumb(Drawable resource) {
            if (thumbConfig.width > 0 && thumbConfig.height > 0) {
                BitmapPool pool = Glide.get(getContext()).getBitmapPool();
                Bitmap bm = pool.get(thumbConfig.width, thumbConfig.height, Bitmap.Config.ARGB_8888);
                Canvas canvas = new Canvas(bm);
                canvas.save();
                canvas.translate(thumbConfig.x, thumbConfig.y);
                resource.setBounds(0, 0, getRight(), getBottom());
                resource.draw(canvas);
                resource.setBounds(0, 0, 0, 0);
                canvas.restore();
                GPUImage gpuImage = new GPUImage(getContext());
                handleImageFilters(gpuImage, thumbConfig.filter);
                bm = gpuImage.getBitmapWithFilterApplied(bm);
                File dir = new File(thumbConfig.directory, IMAGE_CACHE_DIR);
                if (!dir.exists()) {
                    dir.mkdirs();
                }
                File path = new File(dir, UUID.randomUUID().toString() + thumbConfig.ext);
                FileOutputStream fos = null;
                try {
                    fos = new FileOutputStream(path);
                    bm.compress(thumbConfig.format, thumbConfig.quality, fos);
                    String key = thumbConfig.key;
                    if (key == null || key.isEmpty()) {
                        key = source.toString();
                    }
                    JSONObject object = new JSONObject();
                    object.put("width", thumbConfig.width);
                    object.put("height", thumbConfig.height);
                    object.put("path", path.getAbsolutePath());
                    SharedPreferences.Editor editor = preferences.edit();
                    editor.putString(key, object.toString());
                    editor.apply();
                } catch (FileNotFoundException e) {
                    // TODO log thumb creation failure
                } catch (JSONException e) {
                    // TODO log thumb store failure
                } finally {
                    try {
                        if (fos != null) {
                            fos.close();
                        }
                    } catch (IOException ignored) {
                    }
                }
            }
        }
    }

    ThumbConfig thumbConfig = new ThumbConfig();

    static String IMAGE_CACHE_DIR = "image_cache_it";
    public static String IMAGE_CACHE_STORE = "com.github.triniwiz.imagecacheit.image_cache_it_store";

    SharedPreferences preferences;

    public void setGenerateThumb(boolean enable, int x, int y, int width, int height, String format, int quality, @Nullable String key, @Nullable String filter, @Nullable String directory) {
        thumbConfig.enable = enable;
        thumbConfig.x = x;
        thumbConfig.y = y;
        thumbConfig.width = width;
        thumbConfig.height = height;
        if ("png".equals(format)) {
            thumbConfig.ext = ".png";
            thumbConfig.format = Bitmap.CompressFormat.PNG;
        } else {
            thumbConfig.ext = ".jpg";
            thumbConfig.format = Bitmap.CompressFormat.JPEG;
        }
        thumbConfig.quality = quality;
        thumbConfig.filter = filter;
        if (directory == null) {
            thumbConfig.directory = getContext().getCacheDir().getAbsolutePath();
            ;
        } else {
            thumbConfig.directory = directory;
        }
        thumbConfig.key = key;
    }

    private String mFilter;

    private BasicAuthorization basicAuthorization;

    public void addBasicAuth(String username, String password) {
        basicAuthorization = new BasicAuthorization(username, password);
    }

    private String getValue(String value) {
        return value.substring(value.indexOf('(') + 1, value.indexOf(')'));
    }

    public void setFilter(String filter) {
        mFilter = filter;
    }

    public void setImageLoadedListener(Object listener) {
        mListener = listener;
    }

    void executeListener(boolean success) {
        if (mListener == null) {
            return;
        }
        try {
            Method onImageLoadedMethod = mListener.getClass().getMethod("onImageLoaded", boolean.class);
            onImageLoadedMethod.invoke(mListener, success);
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }
    }


    private void handleImageFilters(GPUImage gpuImage) {
        handleImageFilters(gpuImage, mFilter);
    }

    private void handleImageFilters(GPUImage gpuImage, String imageFilter) {
        final GPUImageFilterGroup filterGroup = new GPUImageFilterGroup();
        if (imageFilter != null) {
            String[] filters = imageFilter.split(" ");
            for (String filter : filters) {
                String value = getValue(filter);
                if (filter.contains("blur")) {
                    float width = 0;
                    int realWidth = getWidth();
                    if (value.contains("%")) {
                        width = getWidth() * Float.parseFloat(value.replace("%", ""));
                    } else if (value.contains("px")) {
                        width = Float.parseFloat(value.replace("px", ""));
                    } else if (value.contains("dip")) {
                        width = (Float.parseFloat(value.replace("dip", "")) * ((int) getContext().getResources().getDisplayMetrics().density));
                    }
                    if (width > 0f && realWidth > 0f) {
                        //  width = width / realWidth;
                    }
                    if (width > 1f) {
                        //  width = 1f;
                    }
                    if (width > 0f) {/*
                                                RenderScript rs = null;
                                                Allocation input = null;
                                                Allocation output = null;
                                                ScriptIntrinsicBlur blur = null;
                                                try {
                                                    rs = RenderScript.create(getContext());
                                                    rs.setMessageHandler(new RenderScript.RSMessageHandler());
                                                    input = Allocation.createFromBitmap(rs, bitmap);
                                                    output = Allocation.createTyped(rs,input.getType());
                                                    blur = ScriptIntrinsicBlur.create(rs, Element.U8_4(rs));
                                                    blur.setRadius(width);
                                                    blur.setInput(input);
                                                    blur.forEach(output);
                                                    output.copyTo(bitmap);

                                                }catch (Exception e){
                                                    e.printStackTrace();
                                                }finally {
                                                    if (rs != null) {
                                                        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                                                            RenderScript.releaseAllContexts();
                                                        } else {
                                                            rs.destroy();
                                                        }
                                                    }
                                                    if (input != null) {
                                                        input.destroy();
                                                    }
                                                    if (output != null) {
                                                        output.destroy();
                                                    }
                                                    if (blur != null) {
                                                        blur.destroy();
                                                    }
                                                }
                                                */
                        //gpuImage.setImage(FastBlur.blur(((BitmapDrawable) resource).getBitmap(), width, true));
                        filterGroup.addFilter(new GPUImageGaussianBlurFilter(width, true));

                        //gpuImage.setFilter(new SupportRSBlurTransformation());
                    }
                }
                if (filter.contains("boxblur")) {
                    float width = 0;
                    int realWidth = getWidth();
                    if (value.contains("%")) {
                        width = getWidth() * Float.parseFloat(value.replace("%", ""));
                    } else if (value.contains("px")) {
                        width = Float.parseFloat(value.replace("px", ""));
                    } else if (value.contains("dip")) {
                        width = (Float.parseFloat(value.replace("dip", "")) * ((int) getContext().getResources().getDisplayMetrics().density));
                    }
                    if (width > 0f && realWidth > 0f) {
                        //  width = width / realWidth;
                    }
                    if (width > 1f) {
                        //  width = 1f;
                    }
                    if (width > 0f) {
                        //gpuImage.setImage(FastBlur.blur(((BitmapDrawable) resource).getBitmap(), width, true));
                        filterGroup.addFilter(new GPUImageBoxBlurFilter(width));

                        //gpuImage.setFilter(new SupportRSBlurTransformation());
                    }
                }
                if (filter.contains("bilateralblur")) {
                    float width = 0;
                    int realWidth = getWidth();
                    if (value.contains("%")) {
                        width = getWidth() * Float.parseFloat(value.replace("%", ""));
                    } else if (value.contains("px")) {
                        width = Float.parseFloat(value.replace("px", ""));
                    } else if (value.contains("dip")) {
                        width = (Float.parseFloat(value.replace("dip", "")) * ((int) getContext().getResources().getDisplayMetrics().density));
                    }
                    if (width > 0f && realWidth > 0f) {
                        //  width = width / realWidth;
                    }
                    if (width > 1f) {
                        //  width = 1f;
                    }
                    if (width > 0f) {
                        //gpuImage.setImage(FastBlur.blur(((BitmapDrawable) resource).getBitmap(), width, true));
                        filterGroup.addFilter(new GPUImageBilateralBlurFilter(width));

                        //gpuImage.setFilter(new SupportRSBlurTransformation());
                    }
                } else if (filter.contains("contrast")) {
                    if (value.contains("%")) {
                        float contrast = Float.parseFloat(value.replace("%", "")) / 100;
                        filterGroup.addFilter(new GPUImageContrastFilter(contrast));
                    }

                } else if (filter.contains("brightness")) {
                    if (value.contains("%")) {
                        float brightness = Float.parseFloat(value.replace("%", "")) / 100;
                        if (brightness >= 0 && brightness < 1) {
                            brightness = -1 + brightness;
                        }
                        filterGroup.addFilter(new GPUImageBrightnessFilter(brightness));
                    }
                } else if (filter.contains("grayscale") || filter.contains("greyscale")) {
                    // TODO handle value
                    filterGroup.addFilter(new GPUImageGrayscaleFilter());
                } else if (filter.contains("invert")) {
                    // TODO handle value
                    filterGroup.addFilter(new GPUImageColorInvertFilter());
                } else if (filter.contains("sepia")) {
                    float sepia = (float) Integer.parseInt(value.replace("%", "")) / 100;
                    filterGroup.addFilter(new GPUImageSepiaToneFilter(sepia));
                } else if (filter.contains("opacity")) {
                    float opacity;
                    if (value.contains("%")) {
                        opacity = (float) Integer.parseInt(value.replace("%", "")) / 100;
                    } else if (value.contains(".")) {
                        opacity = Float.parseFloat(value);
                    } else {
                        opacity = (float) (Integer.parseInt(value) / 100);
                    }
                    filterGroup.addFilter(new GPUImageOpacityFilter(opacity));
                } else if (filter.contains("hue")) {
                    float hue = 0f;
                    if (value.contains("deg")) {
                        hue = (float) Integer.parseInt(value.replace("deg", ""));
                    } else if (value.contains("turn")) {
                        hue = Float.parseFloat(value.replace("turn", "")) * 360f;
                    }
                    filterGroup.addFilter(new GPUImageHueFilter(hue));
                } else if (filter.contains("saturate")) {
                    float saturate = 1f;
                    if (value.contains("%")) {
                        saturate = (float) Integer.parseInt(value.replace("%", "")) / 100;
                    } else if (value.contains(".")) {
                        saturate = Float.parseFloat(value);
                    } else {
                        saturate = (float) Integer.parseInt(value);
                    }
                    filterGroup.addFilter(new GPUImageSaturationFilter(saturate));
                }
            }
            gpuImage.setFilter(filterGroup);
        }
    }


    @SuppressLint("CheckResult")
    private void loadImage() {
        if (requestManager != null) {
            requestManager.clear(this);
        } else {
            requestManager = Glide.with(this);
        }

        LazyHeaders.Builder lazyHeaders = new LazyHeaders.Builder();
        if (basicAuthorization != null) {
            lazyHeaders.addHeader("Authorization", basicAuthorization);
        }
        if (headers != null) {
            for (Map.Entry<String, String> header : headers.entrySet()) {
                lazyHeaders.addHeader(header.getKey(), header.getValue());
            }
        }
        Object localSrc;
        boolean hasGlideUrl = false;
        if (source instanceof Uri && ((Uri) source).getScheme() != null && ((Uri) source).getScheme().contains("http")) {
            hasGlideUrl = true;
            localSrc = new GlideUrl(source.toString(), lazyHeaders.build());
            MyAppGlideModule.expect(source.toString(), this);
        } else if (source instanceof String && ((String) source).startsWith("http")) {
            hasGlideUrl = true;
            localSrc = new GlideUrl(source.toString(), lazyHeaders.build());
            MyAppGlideModule.expect(source.toString(), this);
        } else {
            localSrc = source;
        }

        RequestBuilder<Drawable> requestBuilder;

        if (localSrc instanceof Integer) {
            requestBuilder = requestManager
                    .load((int) localSrc);
        } else {
            requestBuilder = requestManager
                    .load(localSrc);
        }
        final boolean finalHasGlideUrl = hasGlideUrl;


        requestBuilder.addListener(new RequestListener<Drawable>() {
            @Override
            public boolean onLoadFailed(@Nullable GlideException e, Object model, Target<Drawable> target, boolean isFirstResource) {
                if (finalHasGlideUrl && source != null) {
                    MyAppGlideModule.forget(source.toString());
                }
                if (mListener != null) {
                    executeListener(false);
                }

                if (eventsListener != null) {
                    String message = "";
                    if (e != null) {
                        message = e.getMessage();
                    }
                    eventsListener.onLoadError(message);
                    eventsListener.onLoadedEnd(null);
                }
                return false;
            }

            @Override
            public boolean onResourceReady(final Drawable resource, Object model, final Target<Drawable> target, DataSource dataSource, boolean isFirstResource) {
                if (resource instanceof GifDrawable) {
                    if (finalHasGlideUrl && source != null) {
                        MyAppGlideModule.forget(source.toString());
                    }
                    if (mListener != null) {
                        executeListener(true);
                    }
                    if (eventsListener != null) {
                        eventsListener.onLoadedEnd(resource);
                    }
                    return false;
                }
                if (source != null) {
                    int length = 0;
                    if (resource instanceof BitmapDrawable) {
                        length = ((BitmapDrawable) resource).getBitmap().getByteCount() / 1024;
                    }
                    onProgress(source.toString(), length, 0);
                }
                if (mFilter == null || mFilter.isEmpty() || mFilter.split(" ").length == 0) {
                    if (preferences == null) {
                        preferences = getContext().getSharedPreferences(IMAGE_CACHE_STORE, Context.MODE_PRIVATE);
                    }
                    executor.submit(new Runnable() {
                        @Override
                        public void run() {
                            thumbConfig.handleThumbCreation(resource);
                            Handler handler = new Handler(Looper.getMainLooper());
                            handler.post(new Runnable() {
                                @Override
                                public void run() {
                                    if (mListener != null) {
                                        executeListener(true);
                                    }

                                    if (eventsListener != null) {
                                        eventsListener.onLoadedEnd(resource);
                                    }
                                    setImageDrawable(resource);
                                }
                            });
                        }
                    });
                } else {
                    executor.submit(new Runnable() {
                        @Override
                        public void run() {
                            final GPUImage gpuImage = new GPUImage(getContext());
                            Bitmap bitmap;
                            BitmapPool pool = Glide.get(getContext()).getBitmapPool();
                            int bmWidth;
                            int bmHeight;
                            try {
                                bmWidth = resource.getIntrinsicWidth();
                                bmHeight = resource.getIntrinsicHeight();
                                if (bmWidth <= 0) {
                                    bmWidth = getWidth();
                                }
                                if (bmHeight <= 0) {
                                    bmHeight = getHeight();
                                }


                                if (resource instanceof BitmapDrawable) {
                                    bitmap = ((BitmapDrawable) resource).getBitmap();
                                } else {
                                    bitmap = pool.get(bmWidth, bmHeight, Bitmap.Config.ARGB_8888);
                                    Canvas canvas = new Canvas(bitmap);
                                    resource.draw(canvas);
                                }

                                handleImageFilters(gpuImage);
                            } catch (OutOfMemoryError outOfMemoryError) {
                                if (mListener != null) {
                                    executeListener(false);
                                }
                                if (eventsListener != null) {
                                    String message = outOfMemoryError.getMessage();
                                    eventsListener.onLoadError(message);
                                    eventsListener.onLoadedEnd(null);
                                }
                                return;
                            }
                            Handler handler = new Handler(Looper.getMainLooper());
                            try {
                                final Bitmap filteredImage = gpuImage.getBitmapWithFilterApplied(bitmap);
                                final BitmapDrawable res = new BitmapDrawable(getResources(), filteredImage);
                                thumbConfig.createThumb(res);
                                handler.post(new Runnable() {
                                    @Override
                                    public void run() {
                                        if (mListener != null) {
                                            executeListener(true);
                                        }
                                        if (eventsListener != null) {
                                            eventsListener.onLoadedEnd(res);
                                        }
                                        setImageBitmap(filteredImage);
                                    }
                                });
                            } catch (final OutOfMemoryError outOfMemoryError) {
                                // try again ?
                                handler.post(new Runnable() {
                                    @Override
                                    public void run() {
                                        if (mListener != null) {
                                            executeListener(false);
                                        }

                                        if (eventsListener != null) {
                                            String message = outOfMemoryError.getMessage();
                                            eventsListener.onLoadError(message);
                                            eventsListener.onLoadedEnd(null);
                                        }
                                    }
                                });
                            }
                        }
                    });
                }
                return true;
            }
        });

        switch (priority) {
            case Low:
                requestBuilder.priority(com.bumptech.glide.Priority.LOW);
                break;
            case High:
                requestBuilder.priority(com.bumptech.glide.Priority.HIGH);
                break;
            default:
                requestBuilder.priority(com.bumptech.glide.Priority.NORMAL);
                break;
        }


        if (placeHolder != null) {
            if (placeHolder instanceof Integer) {
                requestBuilder.placeholder((int) placeHolder);
            }

            if (placeHolder instanceof Drawable) {
                requestBuilder.placeholder(getRawBitmapDrawable(placeHolder));
            }
            if (placeHolder instanceof Bitmap) {
                requestBuilder.placeholder(new BitmapDrawable(getResources(), (Bitmap) placeHolder));
            }
            if (placeHolder instanceof Uri) {
                requestBuilder.placeholder(new BitmapDrawable(getResources(), placeHolder.toString()));
            }

            if (placeHolder instanceof String) {
                requestBuilder.placeholder(getBitmapDrawable(placeHolder));
            }

            if (placeHolder instanceof File) {
                requestBuilder.placeholder(getBitmapDrawable(placeHolder));
            }
        }

        if (fallbackImage != null) {
            if (fallbackImage instanceof Integer) {
                requestBuilder.fallback((int) fallbackImage);
            }

            if (fallbackImage instanceof Drawable) {
                requestBuilder.fallback(getRawBitmapDrawable(fallbackImage));
            }
            if (fallbackImage instanceof Bitmap) {
                requestBuilder.fallback(new BitmapDrawable(getResources(), (Bitmap) fallbackImage));
            }
            if (fallbackImage instanceof Uri) {
                requestBuilder.fallback(new BitmapDrawable(getResources(), ((Uri) fallbackImage).toString()));
            }

            if (fallbackImage instanceof String) {
                requestBuilder.fallback(getBitmapDrawable(fallbackImage));
            }

            if (fallbackImage instanceof File) {
                requestBuilder.fallback(getBitmapDrawable(fallbackImage));
            }
        }

        if (errorHolder != null) {
            requestBuilder = requestBuilder.error(errorHolder);
        }

        requestBuilder.diskCacheStrategy(DiskCacheStrategy.ALL);
        requestBuilder
                .dontTransform()
                .transform(new AspectTransformer(mDecodeWidth, mDecodeHeight, mKeepAspectRatio));

        // requestBuilder.downsample(DownsampleStrategy.AT_MOST);


        if (getEventsListener() != null) {
            getEventsListener().onLoadStart();
        }
        requestBuilder.into(this);
    }

    boolean didLoadPlaceHolder;
    boolean didLoadFallbackImage;

    @Override
    public void setImageBitmap(Bitmap bm) {
        super.setImageBitmap(bm);
    }

    @Override
    public void setImageDrawable(@Nullable Drawable drawable) {
        super.setImageDrawable(drawable);
    }

    Canvas toDraw = new Canvas();

    @Override
    protected void onDraw(Canvas canvas) {
        Object background = null;

        if (this.getBackground() != null && this.getBackground().getClass().getName().contains("BorderDrawable")) {
            background = this.getBackground();
        }

        Bitmap mBitmap = null;
        if (getDrawable() instanceof BitmapDrawable) {
            mBitmap = ((BitmapDrawable) getDrawable()).getBitmap();
        } else {
            Drawable drawable = getDrawable();
            if (drawable != null) {
                BitmapPool pool = Glide.get(getContext()).getBitmapPool();
                mBitmap = pool.get(drawable.getIntrinsicWidth(), drawable.getIntrinsicHeight(), Bitmap.Config.ARGB_8888);
                toDraw.setBitmap(mBitmap);
                drawable.draw(toDraw);
            }
        }

        if (mBitmap != null) {
            float borderTopLeftRadius = 0, borderTopRightRadius = 0, borderBottomRightRadius = 0, borderBottomLeftRadius = 0;

            if (background != null) {
                try {
                    Method drawMethod = background.getClass().getDeclaredMethod("draw", Canvas.class);
                    drawMethod.invoke(background, canvas);
                    borderTopLeftRadius = (float) background.getClass().getDeclaredMethod("getBorderTopLeftRadius").invoke(background);
                    borderTopRightRadius = (float) background.getClass().getDeclaredMethod("getBorderTopRightRadius").invoke(background);
                    borderBottomRightRadius = (float) background.getClass().getDeclaredMethod("getBorderBottomRightRadius").invoke(background);
                    borderBottomLeftRadius = (float) background.getClass().getDeclaredMethod("getBorderBottomLeftRadius").invoke(background);
                } catch (NoSuchMethodException e) {
                    e.printStackTrace();
                } catch (IllegalAccessException e) {
                    e.printStackTrace();
                } catch (InvocationTargetException e) {
                    e.printStackTrace();
                }
            }

            // Padding?
            float borderTopWidth = this.getPaddingTop();
            float borderRightWidth = this.getPaddingRight();
            float borderBottomWidth = this.getPaddingBottom();
            float borderLeftWidth = this.getPaddingLeft();

            float innerWidth, innerHeight;

            float rotationDegree = this.getRotationAngle();
            boolean swap = Math.abs(rotationDegree % 180) > 45 && Math.abs(rotationDegree % 180) < 135;

            innerWidth = this.getWidth() - borderLeftWidth - borderRightWidth;
            innerHeight = this.getHeight() - borderTopWidth - borderBottomWidth;

            // TODO: Capture all created objects here in locals and update them instead...
            path.reset();
            paint.reset();
            float[] radii = {
                    Math.max(0, borderTopLeftRadius - borderLeftWidth), Math.max(0, borderTopLeftRadius - borderTopWidth),
                    Math.max(0, borderTopRightRadius - borderRightWidth), Math.max(0, borderTopRightRadius - borderTopWidth),
                    Math.max(0, borderBottomRightRadius - borderRightWidth), Math.max(0, borderBottomRightRadius - borderBottomWidth),
                    Math.max(0, borderBottomLeftRadius - borderLeftWidth), Math.max(0, borderBottomLeftRadius - borderBottomWidth)
            };
            rect.setEmpty();
            rect.set(borderLeftWidth, borderTopWidth, borderLeftWidth + innerWidth, borderTopWidth + innerHeight);
            path.addRoundRect(rect, radii, Path.Direction.CW);
            bitmapShader = new BitmapShader(mBitmap, Shader.TileMode.CLAMP, Shader.TileMode.CLAMP);
            float bitmapWidth = (float) mBitmap.getWidth();
            float bitmapHeight = (float) mBitmap.getHeight();

            Matrix matrix = this.mMatrix;
            matrix.reset();

            matrix.postRotate(rotationDegree, bitmapWidth / 2, bitmapHeight / 2);
            if (swap) {
                matrix.postTranslate((bitmapHeight - bitmapWidth) / 2, (bitmapWidth - bitmapHeight) / 2);
                float temp = bitmapWidth;
                bitmapWidth = bitmapHeight;
                bitmapHeight = temp;
            }

            float fittingScaleX = innerWidth / bitmapWidth;
            float fittingScaleY = innerHeight / bitmapHeight;

            float uniformScale;
            float pivotX, pivotY;
            switch (this.getScaleType()) {
                case FIT_CENTER: // aspectFit
                    uniformScale = Math.min(fittingScaleX, fittingScaleY);
                    matrix.postTranslate((innerWidth - bitmapWidth) / 2, (innerHeight - bitmapHeight) / 2);
                    matrix.postScale(uniformScale, uniformScale, innerWidth / 2, innerHeight / 2);
                    canvas.clipRect(
                            borderLeftWidth + (innerWidth - bitmapWidth * uniformScale) / 2,
                            borderTopWidth + (innerHeight - bitmapHeight * uniformScale) / 2,
                            borderLeftWidth + (innerWidth + bitmapWidth * uniformScale) / 2,
                            borderTopWidth + (innerHeight + bitmapHeight * uniformScale) / 2
                    );
                    break;
                case CENTER_CROP: // aspectFill
                    uniformScale = Math.max(fittingScaleX, fittingScaleY);
                    matrix.postTranslate((innerWidth - bitmapWidth) / 2, (innerHeight - bitmapHeight) / 2);
                    matrix.postScale(uniformScale, uniformScale, innerWidth / 2, innerHeight / 2);
                    canvas.clipRect(
                            borderLeftWidth + (innerWidth - bitmapWidth * uniformScale) / 2,
                            borderTopWidth + (innerHeight - bitmapHeight * uniformScale) / 2,
                            borderLeftWidth + (innerWidth + bitmapWidth * uniformScale) / 2,
                            borderTopWidth + (innerHeight + bitmapHeight * uniformScale) / 2
                    );
                    break;
                case FIT_XY: // fill
                    matrix.postScale(fittingScaleX, fittingScaleY);
                    break;
                case MATRIX: // none
                    canvas.clipRect(
                            borderLeftWidth,
                            borderTopWidth,
                            borderLeftWidth + bitmapWidth,
                            borderTopWidth + bitmapHeight
                    );
                    break;
            }
            matrix.postTranslate(borderLeftWidth, borderTopWidth);
            bitmapShader.setLocalMatrix(matrix);
            paint.setAntiAlias(true);
            paint.setFilterBitmap(true);
            paint.setShader(bitmapShader);
            ColorFilter filter = this.getColorFilter();
            if (filter != null) {
                paint.setColorFilter(filter);
            }
            canvas.drawPath(path, paint);
        }
    }

    public void setBitmap(Bitmap value) {
        this.setImageBitmap(value);
    }

    public void setDrawable(Drawable asyncDrawable) {
        this.setImageDrawable(asyncDrawable);
    }

    private BitmapDrawable getBitmapDrawable(Object source) {
        Bitmap bitmap = null;
        try {
            BitmapFactory.Options options = new BitmapFactory.Options();
            options.inJustDecodeBounds = true;
            if (source instanceof String) {
                bitmap = BitmapFactory.decodeFile((String) source, options);
                ISize viewSize = new ISize(-1, -1);
                if (getWidth() > 0) {
                    viewSize.width = getWidth();
                }
                if (getHeight() > 0) {
                    viewSize.height = getHeight();
                }
                ISize iSize = getRequestedImageSize(new ISize(options.outWidth, options.outHeight), viewSize);
                options.inSampleSize = calculateInSampleSize(options, iSize.width, iSize.height);
                options.inJustDecodeBounds = false;
                bitmap = BitmapFactory.decodeFile((String) source, options);
            } else if (source instanceof File) {
                bitmap = BitmapFactory.decodeFile(((File) source).getAbsolutePath(), options);
                ISize viewSize = new ISize(-1, -1);
                if (getWidth() > 0) {
                    viewSize.width = getWidth();
                }
                if (getHeight() > 0) {
                    viewSize.height = getHeight();
                }
                ISize iSize = getRequestedImageSize(new ISize(options.outWidth, options.outHeight), viewSize);
                options.inSampleSize = calculateInSampleSize(options, iSize.width, iSize.height);
                options.inJustDecodeBounds = false;
                bitmap = BitmapFactory.decodeFile(((File) source).getAbsolutePath(), options);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return new BitmapDrawable(getResources(), bitmap);
    }


    private BitmapDrawable getRawBitmapDrawable(Object source) {
        Bitmap image = null;
        int srcWidth;
        int srcHeight;
        int width = getWidth();
        int height = getHeight();
        BitmapPool pool = Glide.get(getContext()).getBitmapPool();
        Bitmap bm;
        BitmapFactory.Options opts = new BitmapFactory.Options();
        if (source instanceof String) {
            if (((String) source).startsWith("res://")) {
                int id = ImageView.getResourceId(getContext(), (String) source, "drawable");
                if (id > 0) {
                    opts.inJustDecodeBounds = true;
                    BitmapFactory.decodeResource(this.getResources(), id, opts);
                    srcWidth = opts.outWidth;
                    srcHeight = opts.outHeight;
                    opts.inBitmap = pool.get(width, height, opts.inPreferredConfig);
                    opts.inJustDecodeBounds = false;
                    opts.inScaled = true;
                    opts.inDensity = srcWidth;
                    opts.inTargetDensity = width;
                    opts.inSampleSize = ImageView.calculateInSampleSize(opts, width, height);
                    opts.inTargetDensity = width * opts.inSampleSize;
                    // worth it ?
                    // opts.inScreenDensity = platforms.screen.mainScreen.scale;
                    image = BitmapFactory.decodeResource(this.getResources(), id, opts);
                }
            } else {
                Object path = source;
                if (((String) source).startsWith("~/")) {
                    // path = fs.path.join(fs.knownFolders.currentApp().path, source.replace('~/', ''));
                } else if (((String) source).startsWith("file://")) {
                    path = ((String) source).replace("file://", "");
                }
                opts.inJustDecodeBounds = true;
                BitmapFactory.decodeFile(String.valueOf(path), opts);
                srcWidth = opts.outWidth;
                srcHeight = opts.outHeight;
                opts.inBitmap = pool.get(width, height, opts.inPreferredConfig);
                opts.inJustDecodeBounds = false;
                opts.inScaled = true;
                opts.inDensity = srcWidth;
                opts.inSampleSize = ImageView.calculateInSampleSize(opts, width, height);
                opts.inTargetDensity = width * opts.inSampleSize;
                image = BitmapFactory.decodeFile(String.valueOf(path), opts);
            }
        } else if (source instanceof Integer) {
            if ((int) source > 0) {
                opts.inJustDecodeBounds = true;
                BitmapFactory.decodeResource(getResources(), (int) source, opts);
                srcWidth = opts.outWidth;
                srcHeight = opts.outHeight;
                opts.inBitmap = pool.get(width, height, Bitmap.Config.ARGB_8888);
                opts.inJustDecodeBounds = false;
                opts.inScaled = false;
                opts.inDensity = srcWidth;
                ISize viewSize = new ISize(-1, -1);
                if (getWidth() > 0) {
                    viewSize.width = getWidth();
                }
                if (getHeight() > 0) {
                    viewSize.height = getHeight();
                }
                ISize iSize = getRequestedImageSize(new ISize(opts.outWidth, opts.outHeight), viewSize);
                opts.inSampleSize = calculateInSampleSize(opts, iSize.width, iSize.height);
                //opts.inSampleSize = 1;//ImageView.calculateInSampleSize(opts, width, height);
                opts.inTargetDensity = width * opts.inSampleSize;
                image = BitmapFactory.decodeResource(getResources(), (int) source, opts);
            }
        } else if (source instanceof Bitmap) {
            image = (Bitmap) source;
            srcWidth = image.getWidth();
            srcHeight = image.getHeight();
        } else if (source instanceof BitmapDrawable) {
            image = ((BitmapDrawable) placeHolder).getBitmap();
            srcWidth = image.getWidth();
            srcHeight = image.getHeight();
        }
        return new BitmapDrawable(getResources(), image);
    }

    public void setEventsListener(EventsListener eventsListener) {
        this.eventsListener = eventsListener;
    }

    public EventsListener getEventsListener() {
        return eventsListener;
    }

    private int getIdentifier(String name, String type) {
        return ImageView.getResourceId(getContext(), name, type);
    }

    private static int calculateInSampleSize(BitmapFactory.Options options, int reqWidth, int reqHeight) {
        // Raw height and width of image
        int height = options.outHeight;
        int width = options.outWidth;
        int inSampleSize = 1;


        if ((reqHeight != 0 && reqWidth != 0) && (height > reqHeight || width > reqWidth)) {

            if (height == 0 || width == 0) {
                return inSampleSize;
            }

            int halfHeight = height / 2;
            int halfWidth = width / 2;

            while ((halfHeight / inSampleSize) >= reqHeight
                    && (halfWidth / inSampleSize) >= reqWidth) {
                inSampleSize *= 2;
            }
        }

        return inSampleSize;
    }

    private static int getResourceId(Context context, String name, String type) {
        int id;
        String packageName = context.getPackageName();
        try {
            Class className = Class.forName(packageName + ".R$" + type);
            id = (int) className.getDeclaredField(String.valueOf(name).replace("res://", "")).get(null);
        } catch (ClassNotFoundException e) {
            id = 0;
        } catch (NoSuchFieldException e) {
            id = 0;
        } catch (IllegalAccessException e) {
            id = 0;
        }
        return id;
    }

    static class ISize {
        int width;
        int height;

        ISize(int width, int height) {
            this.width = width;
            this.height = height;
        }

        ISize(double width, double height) {
            this.width = (int) width;
            this.height = (int) height;
        }

    }

    private ISize getAspectSafeDimensions(int sourceWidth, int sourceHeight, int reqWidth, int reqHeight) {
        if (sourceHeight == 0 || sourceWidth == 0 || reqWidth == 0 || reqHeight == 0) {
            return new ISize(0, 0);
        }
        int widthCoef = sourceWidth / reqWidth;
        int heightCoef = sourceHeight / reqHeight;
        int aspectCoef = Math.min(widthCoef, heightCoef);

        return new ISize(Math.floor(sourceWidth / aspectCoef), Math.floor(sourceHeight / aspectCoef));
    }

    private ISize getRequestedImageSize(ISize src, ISize options) {
        DisplayMetrics metrics = new android.util.DisplayMetrics();
        WindowManager manager = (WindowManager) getContext().getSystemService(Context.WINDOW_SERVICE);
        if (manager != null) {
            manager.getDefaultDisplay().getRealMetrics(metrics);
        }

        int reqWidth;
        int reqHeight;
        if (options.width >= -1) {
            reqWidth = options.width;
        } else {
            reqWidth = Math.min(src.width, metrics.widthPixels);
        }

        if (options.height >= -1) {
            reqHeight = options.height;
        } else {
            reqHeight = Math.min(src.height, metrics.heightPixels);
        }


        ISize safeAspectSize = getAspectSafeDimensions(src.width, src.height, reqWidth, reqHeight);
        reqWidth = safeAspectSize.width;
        reqHeight = safeAspectSize.height;

        return new ISize(reqWidth, reqHeight);
    }


    public void setFallbackImage(Drawable drawable) {
        fallbackImage = drawable;
    }

    public void setFallbackImage(Bitmap bitmap) {
        fallbackImage = bitmap;
    }

    public void setFallbackImage(Uri uri) {
        Object fallback = uri;
        if (String.valueOf(fallback).startsWith("res://")) {
            fallback = getIdentifier(fallback.toString(), "drawable");
        }
        fallbackImage = fallback;
    }

    public void setFallbackImage(Path path) {
        fallbackImage = path;
    }

    public void setFallbackImage(int id) {
        fallbackImage = id;
    }

    public void setFallbackImage(File file) {
        fallbackImage = file;
    }

    public void setFallbackImage(String path) {
        if (String.valueOf(path).startsWith("res://")) {
            fallbackImage = getIdentifier(path, "drawable");
        } else {
            fallbackImage = path;
        }
    }


    public void setPlaceHolder(Drawable drawable) {
        placeHolder = drawable;
    }

    public void setPlaceHolder(Bitmap bitmap) {
        placeHolder = bitmap;
    }

    public void setPlaceHolder(Uri uri) {
        if (String.valueOf(uri).startsWith("res://")) {
            placeHolder = getIdentifier(uri.toString(), "drawable");
        } else {
            placeHolder = uri;
        }
    }

    public void setPlaceHolder(File file) {
        placeHolder = file;
    }

    public void setPlaceHolder(String path) {
        if (String.valueOf(path).startsWith("res://")) {
            placeHolder = getIdentifier(path, "drawable");
        } else {
            placeHolder = path;
        }
    }

    public void setPlaceHolder(int id) {
        placeHolder = id;
    }

    public void setErrorHolder(Drawable drawable) {
        errorHolder = Glide.with(this).load(drawable);
    }

    public void setErrorHolder(Bitmap bitmap) {
        errorHolder = Glide.with(this).load(bitmap);
    }

    public void setErrorHolder(Uri uri) {
        Object error = uri;
        if (String.valueOf(error).startsWith("res://")) {
            error = getIdentifier(uri.toString(), "drawable");
        }
        errorHolder = Glide.with(this).load(error);
    }

    public void setErrorHolder(Path path) {
        errorHolder = Glide.with(this).load(path);
    }

    public void setErrorHolder(int id) {
        errorHolder = Glide.with(this).load(id);
    }

    public void setErrorHolder(File file) {
        errorHolder = Glide.with(this).load(file);
    }

    public void setErrorHolder(String path) {
        Object error = path;
        if (String.valueOf(path).startsWith("res://")) {
            error = getIdentifier(path, "drawable");
        }
        errorHolder = Glide.with(this).load(error);
    }

    private static ComponentCallbacks2 componentCallbacks2;

    public static void enableAutoMM(final Application application) {
        if (application == null) {
            return;
        }
        if (componentCallbacks2 != null) {
            application.unregisterComponentCallbacks(componentCallbacks2);
            componentCallbacks2 = null;
        }
        componentCallbacks2 = new ComponentCallbacks2() {

            @Override
            public void onConfigurationChanged(@NonNull Configuration newConfig) {

            }

            @Override
            public void onLowMemory() {
                Glide.get(application.getApplicationContext()).clearMemory();
            }

            @Override
            public void onTrimMemory(int level) {
                Glide.get(application.getApplicationContext()).trimMemory(level);
            }
        };
        application.registerComponentCallbacks(componentCallbacks2);
    }

    public static void disableAutoMM(final Application application) {
        if (application == null) {
            return;
        }
        if (componentCallbacks2 != null) {
            application.unregisterComponentCallbacks(componentCallbacks2);
            componentCallbacks2 = null;
        }
    }

    public static void clear(final Context context, final boolean memoryOnly) {
        final Glide glide = Glide.get(context);
        glide.clearMemory();
        if (!memoryOnly) {
            executor.submit(new Runnable() {
                @Override
                public void run() {
                    glide.clearDiskCache();
                }
            });
        }
    }

    public static void trimMemory(final Context context, final int level) {
        Glide.get(context).trimMemory(level);
    }

    public void setProgressListener(ProgressListener progressListener) {
        this.progressListener = progressListener;
    }

    public ProgressListener getProgressListener() {
        return progressListener;
    }

    public HashMap<String, String> getHeaders() {
        return headers;
    }

    public void setHeaders(HashMap<String, String> headers) {
        this.headers = headers;
    }

    public void addHeader(String key, String value) {
        headers.put(key, value);
    }

}

