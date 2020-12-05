package com.github.triniwiz.imagecacheit;

import android.annotation.SuppressLint;
import android.app.Application;
import android.content.ComponentCallbacks2;
import android.content.Context;
import android.content.res.Configuration;
import android.content.res.TypedArray;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.BitmapShader;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.Shader;
import android.graphics.Xfermode;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
import android.graphics.drawable.ScaleDrawable;
import android.net.Uri;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.util.AttributeSet;
import android.util.Base64;
import android.util.DisplayMetrics;
import android.util.Log;
import android.util.Size;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
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
import com.bumptech.glide.load.resource.bitmap.CenterCrop;
import com.bumptech.glide.load.resource.bitmap.CenterInside;
import com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
import com.bumptech.glide.load.resource.bitmap.FitCenter;
import com.bumptech.glide.load.resource.bitmap.GranularRoundedCorners;
import com.bumptech.glide.load.resource.gif.GifDrawable;
import com.bumptech.glide.request.RequestListener;
import com.bumptech.glide.request.RequestOptions;
import com.bumptech.glide.request.target.Target;

import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import jp.co.cyberagent.android.gpuimage.GPUImage;
import jp.co.cyberagent.android.gpuimage.filter.GPUImageBrightnessFilter;
import jp.co.cyberagent.android.gpuimage.filter.GPUImageColorInvertFilter;
import jp.co.cyberagent.android.gpuimage.filter.GPUImageContrastFilter;
import jp.co.cyberagent.android.gpuimage.filter.GPUImageGrayscaleFilter;
import jp.co.cyberagent.android.gpuimage.filter.GPUImageHueFilter;
import jp.co.cyberagent.android.gpuimage.filter.GPUImageOpacityFilter;
import jp.co.cyberagent.android.gpuimage.filter.GPUImageSaturationFilter;
import jp.co.cyberagent.android.gpuimage.filter.GPUImageSepiaToneFilter;
import jp.wasabeef.glide.transformations.internal.FastBlur;

/**
 * Created by triniwiz on 10/16/19
 */

@SuppressLint("AppCompatCustomView")
@androidx.annotation.RequiresApi(api = Build.VERSION_CODES.JELLY_BEAN_MR1)
public class ImageViewOld extends android.widget.ImageView implements ImageViewProgressListener {
    private Object src;
    private Object placeHolder;
    private RequestBuilder errorHolder;
    private Object fallbackImage;
    private int borderTopColor;
    private int borderRightColor;
    private int borderBottomColor;
    private int borderLeftColor;


    private int borderTopWidth;
    private int borderRightWidth;
    private int borderBottomWidth;
    private int borderLeftWidth;


    private int borderTopLeftRadius;
    private int borderTopRightRadius;
    private int borderBottomRightRadius;
    private int borderBottomLeftRadius;
    public static final String TAG = "ImageView";
    Paint paint;
    Paint borderPaint;
    Path borderPath;
    Bitmap mBitmap;
    BitmapShader bitmapShader;
    Matrix shaderMatrix;
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

    private Priority priority = Priority.Normal;
    private HashMap<String, String> headers = new HashMap<>();
    private static ExecutorService executor = Executors.newSingleThreadExecutor();

    public ImageViewOld(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        paint = new Paint(Paint.ANTI_ALIAS_FLAG);
        borderPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
        shaderMatrix = new Matrix();
        borderPaint.setStyle(Paint.Style.STROKE);
        // setScaleType(ScaleType.MATRIX);
       // setLayerType(View.LAYER_TYPE_HARDWARE, null);
        borderPath = new Path();
        if (attrs != null) {
            TypedArray a = context.obtainStyledAttributes(
                    attrs,
                    R.styleable.ImageViewOld
            );

            try {

                int topLeftRadius = (int) a.getDimensionPixelSize(R.styleable.ImageViewOld_borderTopLeftRadius, 0);
                setBorderTopLeftRadius(topLeftRadius);
                int topRightRadius = (int) a.getDimensionPixelSize(R.styleable.ImageViewOld_borderTopRightRadius, 0);
                setBorderTopRightRadius(topRightRadius);
                int bottomRightRadius = (int) a.getDimensionPixelSize(R.styleable.ImageViewOld_borderBottomRightRadius, 0);
                setBorderBottomRightRadius(bottomRightRadius);
                int bottomLeftRadius = (int) a.getDimensionPixelSize(R.styleable.ImageViewOld_borderBottomLeftRadius, 0);
                setBorderBottomLeftRadius(bottomLeftRadius);


                int radius = a.getDimensionPixelSize(R.styleable.ImageViewOld_borderRadius, 0);
                if (radius > 0) {
                    setBorderRadius(radius);
                }

                int borderTopColor = a.getColor(R.styleable.ImageViewOld_borderTopColor, 0);
                if (a.hasValue(R.styleable.ImageViewOld_borderTopColor)) {
                    setBorderTopColor(borderTopColor);
                }
                int borderRightColor = a.getColor(R.styleable.ImageViewOld_borderRightColor, 0);
                if (a.hasValue(R.styleable.ImageViewOld_borderRightColor)) {
                    setBorderRightColor(borderRightColor);
                }
                int borderBottomColor = a.getColor(R.styleable.ImageViewOld_borderBottomColor, 0);
                if (a.hasValue(R.styleable.ImageViewOld_borderBottomColor)) {
                    setBorderBottomColor(borderBottomColor);
                }
                int borderLeftColor = a.getColor(R.styleable.ImageViewOld_borderLeftColor, 0);
                if (a.hasValue(R.styleable.ImageViewOld_borderLeftColor)) {
                    setBorderLeftColor(borderLeftColor);
                }
                int borderColor = a.getColor(R.styleable.ImageViewOld_borderColor, 0);
                if (a.hasValue(R.styleable.ImageViewOld_borderColor)) {
                    setBorderColor(borderColor);
                }


                int borderTopWidth = (int) a.getDimensionPixelSize(R.styleable.ImageViewOld_borderTopWidth, 0);
                if (borderTopWidth > 0) {
                    setBorderTopWidth(borderTopWidth);
                }
                int borderRightWidth = (int) a.getDimensionPixelSize(R.styleable.ImageViewOld_borderRightWidth, 0);
                if (borderRightWidth > 0) {
                    setBorderRightWidth(borderRightWidth);
                }
                int borderBottomWidth = (int) a.getDimensionPixelSize(R.styleable.ImageViewOld_borderBottomWidth, 0);
                if (borderBottomWidth > 0) {
                    setBorderBottomWidth(borderBottomWidth);
                }
                int borderLeftWidth = (int) a.getDimensionPixelSize(R.styleable.ImageViewOld_borderLeftWidth, 0);
                if (borderLeftWidth > 0) {
                    setBorderLeftWidth(borderLeftWidth);
                }

                int borderWidth = (int) a.getDimensionPixelSize(R.styleable.ImageViewOld_borderWidth, 0);
                if (borderWidth > 0) {
                    setBorderWidth(borderWidth);
                }

                mFilter = a.getString(R.styleable.ImageViewOld_filter);

            } finally {
                a.recycle();
            }
        }
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

    public void setPriority(Priority priority) {
        this.priority = priority;
    }

    private BasicAuthorization basicAuthorization;

    public void addBasicAuth(String username, String password) {
        basicAuthorization = new BasicAuthorization(username, password);
    }

    public void setProgressListener(ProgressListener progressListener) {
        this.progressListener = progressListener;
    }

    public ProgressListener getProgressListener() {
        return progressListener;
    }

    public void setEventsListener(EventsListener eventsListener) {
        this.eventsListener = eventsListener;
    }

    public EventsListener getEventsListener() {
        return eventsListener;
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

    public Priority getPriority() {
        return priority;
    }

    public void setFallbackImage(Drawable drawable) {
        fallbackImage = drawable;
    }

    public void setFallbackImage(Bitmap bitmap) {
        fallbackImage = bitmap;
    }

    private int getIdentifier(String name, String type) {
        return ImageViewOld.getResourceId(getContext(), name, type);
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
            executor.execute(new Runnable() {
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

    @SuppressLint("CheckResult")
    private BitmapDrawable getBitmapDrawableBorderRadius(BitmapDrawable drawable) {
        BitmapPool pool = Glide.get(getContext()).getBitmapPool();
        if (hasUniformBorder()) {
            ColoredRoundedCornerBorders borders = new ColoredRoundedCornerBorders(
                    borderTopLeftRadius,
                    0,
                    ColoredRoundedCornerBorders.CornerType.ALL,
                    borderTopColor,
                    borderTopWidth,
                    -1,
                    -1
            );
            Bitmap bm = drawable.getBitmap();
            Log.d("com.test", "w: " + bm.getWidth() + " h: " + bm.getHeight() + "ow: " + getWidth() + " oh: " + getHeight());
            Bitmap clone = Bitmap.createScaledBitmap(bm, getWidth(), getHeight(), true); //pool.get(bm.getWidth(),bm.getHeight(),bm.getConfig());
            // Canvas canvas = new Canvas(clone);
            // canvas.drawBitmap(bm, 0f,0f,null);
            if (clone.equals(bm)) {
                bm.recycle();
            }
            Bitmap bitmap = borders.transform(getContext(), pool, clone, getWidth(), getHeight());
            return new BitmapDrawable(getResources(), bitmap);
        } else if (hasBorderColor()) {
            ColoredRoundedCornerBorders[] borders = {
                    new ColoredRoundedCornerBorders(
                            borderTopRightRadius,
                            0,
                            ColoredRoundedCornerBorders.CornerType.BORDER_TOP,
                            borderTopColor,
                            borderTopWidth,
                            -1,
                            -1
                    ),
                    new ColoredRoundedCornerBorders(
                            borderBottomRightRadius,
                            0,
                            ColoredRoundedCornerBorders.CornerType.BORDER_RIGHT,
                            borderRightColor,
                            borderRightWidth,
                            -1,
                            -1
                    ), new ColoredRoundedCornerBorders(
                    borderBottomRightRadius,
                    0,
                    ColoredRoundedCornerBorders.CornerType.BORDER_BOTTOM,
                    borderBottomColor,
                    borderBottomWidth,
                    -1,
                    -1
            ),
                    new ColoredRoundedCornerBorders(
                            borderBottomLeftRadius,
                            0,
                            ColoredRoundedCornerBorders.CornerType.BORDER_LEFT,
                            borderLeftColor,
                            borderLeftWidth,
                            -1,
                            -1
                    )
            };
            Bitmap bitmap = null;
            for (ColoredRoundedCornerBorders border : borders) {
                if (bitmap == null) {
                    bitmap = border.transform(getContext(), pool, drawable.getBitmap(), getWidth(), getHeight());
                } else {
                    border.transform(getContext(), pool, bitmap, getWidth(), getHeight());
                }
            }
            return new BitmapDrawable(getResources(), bitmap);
        } else {
            ColoredRoundedCornerBorders[] borders = {
                    new ColoredRoundedCornerBorders(borderTopRightRadius, 0, ColoredRoundedCornerBorders.CornerType.TOP_RIGHT, 0, 0, -1, -1),
                    new ColoredRoundedCornerBorders(borderBottomRightRadius, 0, ColoredRoundedCornerBorders.CornerType.BOTTOM_RIGHT, 0, 0, -1, -1),
                    new ColoredRoundedCornerBorders(borderBottomLeftRadius, 0, ColoredRoundedCornerBorders.CornerType.BOTTOM_LEFT, 0, 0, -1, -1),
                    new ColoredRoundedCornerBorders(borderTopLeftRadius, 0, ColoredRoundedCornerBorders.CornerType.TOP_LEFT, 0, 0, -1, -1)
            };

            Bitmap bitmap = null;
            for (ColoredRoundedCornerBorders border : borders) {
                if (bitmap == null) {
                    bitmap = border.transform(getContext(), pool, drawable.getBitmap(), getWidth(), getHeight());
                } else {
                    border.transform(getContext(), pool, bitmap, getWidth(), getHeight());
                }
            }
            return new BitmapDrawable(getResources(), bitmap);
        }
    }


    @SuppressLint("CheckResult")
    private void setBorderRadius(RequestBuilder builder) {
        if (hasUniformBorder()) {
            builder.transform(
                    new ColoredRoundedCornerBorders(
                            borderTopLeftRadius,
                            0,
                            ColoredRoundedCornerBorders.CornerType.ALL,
                            borderTopColor,
                            borderTopWidth,
                            -1,
                            -1
                    )
            );
        } else if (hasBorderColor()) {
            ColoredRoundedCornerBorders[] borders = {
                    new ColoredRoundedCornerBorders(
                            borderTopRightRadius,
                            0,
                            ColoredRoundedCornerBorders.CornerType.BORDER_TOP,
                            borderTopColor,
                            borderTopWidth,
                            -1,
                            -1
                    ),
                    new ColoredRoundedCornerBorders(
                            borderBottomRightRadius,
                            0,
                            ColoredRoundedCornerBorders.CornerType.BORDER_RIGHT,
                            borderRightColor,
                            borderRightWidth,
                            -1,
                            -1
                    ), new ColoredRoundedCornerBorders(
                    borderBottomRightRadius,
                    0,
                    ColoredRoundedCornerBorders.CornerType.BORDER_BOTTOM,
                    borderBottomColor,
                    borderBottomWidth,
                    -1,
                    -1
            ),
                    new ColoredRoundedCornerBorders(
                            borderBottomLeftRadius,
                            0,
                            ColoredRoundedCornerBorders.CornerType.BORDER_LEFT,
                            borderLeftColor,
                            borderLeftWidth,
                            -1,
                            -1
                    )
            };
            builder.transform(borders);
        } else {
            ColoredRoundedCornerBorders[] borders = {
                    new ColoredRoundedCornerBorders(borderTopRightRadius, 0, ColoredRoundedCornerBorders.CornerType.TOP_RIGHT, 0, 0, -1, -1),
                    new ColoredRoundedCornerBorders(borderBottomRightRadius, 0, ColoredRoundedCornerBorders.CornerType.BOTTOM_RIGHT, 0, 0, -1, -1),
                    new ColoredRoundedCornerBorders(borderBottomLeftRadius, 0, ColoredRoundedCornerBorders.CornerType.BOTTOM_LEFT, 0, 0, -1, -1),
                    new ColoredRoundedCornerBorders(borderTopLeftRadius, 0, ColoredRoundedCornerBorders.CornerType.TOP_LEFT, 0, 0, -1, -1)
            };
            builder.transform(borders);
        }
    }

    public void setBorderWidth(int width) {
        borderTopWidth = width;
        borderRightWidth = width;
        borderBottomWidth = width;
        borderLeftWidth = width;
        invalidate();
    }

    public void setBorderColor(int color) {
        borderTopColor = color;
        borderRightColor = color;
        borderBottomColor = color;
        borderLeftColor = color;
        invalidate();
    }

    public void setBorderRadius(int radius) {
        borderTopLeftRadius = radius;
        borderTopRightRadius = radius;
        borderBottomRightRadius = radius;
        borderBottomLeftRadius = radius;
        invalidate();
    }


    public void setListener() {
    }


    private void updateBitmapSize() {
    }

    private Bitmap getBitmapFromDrawable(Drawable drawable) {
        if (drawable == null) {
            return null;
        }

        if (drawable instanceof BitmapDrawable) {
            return ((BitmapDrawable) drawable).getBitmap();
        }

        try {
            BitmapPool pool = Glide.get(getContext()).getBitmapPool();
            Bitmap bitmap = pool.get(drawable.getIntrinsicWidth(), drawable.getIntrinsicHeight(), Bitmap.Config.ARGB_8888);
            Canvas canvas = new Canvas(bitmap);
            drawable.setBounds(0, 0, canvas.getWidth(), canvas.getHeight());
            drawable.draw(canvas);
            return bitmap;
        } catch (OutOfMemoryError e) {
            e.printStackTrace();
            return null;
        }

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
            } else if (source instanceof Integer) {
                bitmap = BitmapFactory.decodeResource(getResources(), ((Integer) source), options);
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
                bitmap = BitmapFactory.decodeResource(getResources(), ((Integer) source), options);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return new BitmapDrawable(getResources(), bitmap);
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

    @Override
    public void setImageBitmap(final Bitmap bm) {
        Log.d("com.test", "setImageBitmap");
        try {
            super.setImageBitmap(bm);
        } catch (OutOfMemoryError outOfMemoryError) {
            outOfMemoryError.printStackTrace();
            // low memory should trigger before
        }
    }

    @Override
    public void setImageDrawable(@Nullable Drawable drawable) {
        Log.d("com.test", "setImageDrawable");
        try {
            super.setImageDrawable(drawable);
        } catch (OutOfMemoryError outOfMemoryError) {
            outOfMemoryError.printStackTrace();
            // low memory should trigger before
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void setImageURI(@Nullable Uri uri) {
        try {
            super.setImageURI(uri);
        } catch (OutOfMemoryError outOfMemoryError) {
            outOfMemoryError.printStackTrace();
            // low memory should trigger before
        }
    }

    @Override
    protected void onDraw(Canvas canvas) {
        if (!(getDrawable() instanceof GifDrawable) && getDrawable() != null && (hasUniformBorder() || hasBorderRadius() || hasBorderWidth())) {
            getDrawableWithBorder(canvas);
        } else {
            super.onDraw(canvas);
        }
    }


    public void reload() {
        updateSrc(src);
    }

    boolean isPendingLoad = false;

    @Override
    protected void onLayout(boolean changed, int left, int top, int right, int bottom) {
        super.onLayout(changed, left, top, right, bottom);
        if (isPendingLoad) {
            isPendingLoad = false;
            updateSrc(src);
        }
    }

    @SuppressLint("CheckResult")
    private void updateSrc(@Nullable final Object source) {
        src = source;
        if (getWidth() <= 0 || getHeight() <= 0) {
            isPendingLoad = true;
            return;
        }
        if (requestManager != null) {
            requestManager.clear(this);
        }
        requestManager = Glide.with(this);

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
        if (source instanceof Uri && ((Uri) source).getScheme() != null && ((Uri) source).getScheme().contains("https")) {
            localSrc = new GlideUrl(source.toString(), lazyHeaders.build());
            MyAppGlideModule.expect(source.toString(), this);
        } else if (source instanceof String && ((String) source).startsWith("http")) {
            localSrc = new GlideUrl(source.toString(), lazyHeaders.build());
            MyAppGlideModule.expect(source.toString(), this);
        } else {
            localSrc = source;
            if (source != null) {
                MyAppGlideModule.expect(source.toString(), this);
            }
        }

        RequestBuilder requestBuilder = requestManager
                .load(localSrc)
                .addListener(new RequestListener<Drawable>() {
                    @Override
                    public boolean onLoadFailed(@Nullable GlideException e, Object model, Target<Drawable> target, boolean isFirstResource) {
                        if (source != null) {
                            MyAppGlideModule.forget(source.toString());
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
                    public boolean onResourceReady(final Drawable resource, Object model, Target<Drawable> target, DataSource dataSource, boolean isFirstResource) {
                        if (resource instanceof GifDrawable) {
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
                            setImageDrawable(resource);
                            if (eventsListener != null) {
                                eventsListener.onLoadedEnd(getDrawable());
                            }
                        } else {
                            executor.execute(new Runnable() {
                                @Override
                                public void run() {
                                    final GPUImage gpuImage = new GPUImage(getContext());
                                    if (mFilter != null) {
                                        String[] filters = mFilter.split(" ");
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
                                                if(width > 0f && realWidth > 0f){
                                                   // width = width / realWidth;
                                                }
                                                if (width > 0f) {
                                                    //gpuImage.setImage(FastBlur.blur(((BitmapDrawable) resource).getBitmap(), width, true));
                                                    //gpuImage.setFilter(new jp.co.cyberagent.android.gpuimage.filter.GPUImageGaussianBlurFilter(25));
                                                    gpuImage.setFilter(new GPUImageGaussianBlurFilter(60, true));
                                                }
                                            } else if (filter.contains("contrast")) {
                                                if (value.contains("%")) {
                                                    float contrast = Float.parseFloat(value.replace("%", "")) / 100;
                                                    gpuImage.setFilter(new GPUImageContrastFilter(contrast));
                                                }

                                            } else if (filter.contains("brightness")) {
                                                if (value.contains("%")) {
                                                    float brightness = Float.parseFloat(value.replace("%", "")) / 100;
                                                    if (brightness >= 0 && brightness < 1) {
                                                        brightness = -1 + brightness;
                                                    }
                                                    gpuImage.setFilter(new GPUImageBrightnessFilter(brightness));
                                                }
                                            } else if (filter.contains("grayscale") || filter.contains("greyscale")) {
                                                // TODO handle value
                                                gpuImage.setFilter(new GPUImageGrayscaleFilter());
                                            } else if (filter.contains("invert")) {
                                                // TODO handle value
                                                gpuImage.setFilter(new GPUImageColorInvertFilter());
                                            } else if (filter.contains("sepia")) {
                                                float sepia = (float) Integer.parseInt(value.replace("%", "")) / 100;
                                                gpuImage.setFilter(new GPUImageSepiaToneFilter(sepia));
                                            } else if (filter.contains("opacity")) {
                                                float opacity;
                                                if (value.contains("%")) {
                                                    opacity = (float) Integer.parseInt(value.replace("%", "")) / 100;
                                                } else if (value.contains(".")) {
                                                    opacity = Float.parseFloat(value);
                                                } else {
                                                    opacity = (float) (Integer.parseInt(value) / 100);
                                                }
                                                gpuImage.setFilter(new GPUImageOpacityFilter(opacity));
                                            } else if (filter.contains("hue")) {
                                                float hue = 0f;
                                                if (value.contains("deg")) {
                                                    hue = (float) Integer.parseInt(value.replace("deg", ""));
                                                } else if (value.contains("turn")) {
                                                    hue = Float.parseFloat(value.replace("turn", "")) * 360f;
                                                }
                                                gpuImage.setFilter(new GPUImageHueFilter(hue));
                                            } else if (filter.contains("saturate")) {
                                                float saturate = 1f;
                                                if (value.contains("%")) {
                                                    saturate = (float) Integer.parseInt(value.replace("%", "")) / 100;
                                                } else if (value.contains(".")) {
                                                    saturate = Float.parseFloat(value);
                                                } else {
                                                    saturate = (float) Integer.parseInt(value);
                                                }
                                                gpuImage.setFilter(new GPUImageSaturationFilter(saturate));
                                            }
                                        }
                                    }
                                    Handler handler = new Handler(Looper.getMainLooper());

                                    try {
                                        Bitmap toFilter;
                                        if(resource instanceof BitmapDrawable){
                                            toFilter = ((BitmapDrawable) resource).getBitmap();
                                        }else  {
                                            BitmapPool pool = Glide.get(getContext()).getBitmapPool();
                                           int width = resource.getIntrinsicWidth();
                                           int height = resource.getIntrinsicHeight();
                                           if(width <= 0){
                                               width = getWidth();
                                            }
                                           if(height <= 0){
                                               height = getHeight();
                                           }
                                            Bitmap bitmap = pool.get(width, height, Bitmap.Config.ARGB_8888);
                                            Canvas canvas = new Canvas(bitmap);
                                            resource.draw(canvas);
                                            toFilter = bitmap;
                                        }
                                        final Bitmap filteredImage = gpuImage.getBitmapWithFilterApplied(toFilter);
                                        handler.post(new Runnable() {
                                            @Override
                                            public void run() {
                                                setImageBitmap(filteredImage);
                                                if (eventsListener != null) {
                                                    eventsListener.onLoadedEnd(getDrawable());
                                                }
                                            }
                                        });
                                    } catch (OutOfMemoryError outOfMemoryError) {
                                        // Worst case so clear manually an try again 😅
                                        // ImageView.clear(getContext(), true);
                                        try {
                                            Bitmap toFilter;
                                            if(resource instanceof BitmapDrawable){
                                                toFilter = ((BitmapDrawable) resource).getBitmap();
                                            }else  {
                                                BitmapPool pool = Glide.get(getContext()).getBitmapPool();
                                                int width = resource.getIntrinsicWidth();
                                                int height = resource.getIntrinsicHeight();
                                                if(width <= 0){
                                                    width = getWidth();
                                                }
                                                if(height <= 0){
                                                    height = getHeight();
                                                }
                                                Bitmap bitmap = pool.get(width, height, Bitmap.Config.ARGB_8888);
                                                Canvas canvas = new Canvas(bitmap);
                                                resource.draw(canvas);
                                                toFilter = bitmap;
                                            }

                                            final Bitmap filteredImage = gpuImage.getBitmapWithFilterApplied(toFilter);
                                            handler.post(new Runnable() {
                                                @Override
                                                public void run() {
                                                    setImageBitmap(filteredImage);
                                                    if (eventsListener != null) {
                                                        eventsListener.onLoadedEnd(getDrawable());
                                                    }
                                                }
                                            });
                                        } catch (OutOfMemoryError memoryError) {
                                            //Failed do nothing ??
                                            memoryError.printStackTrace();
                                        }
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
                requestBuilder.placeholder(getBitmapDrawable(placeHolder));
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
        ArrayList<BitmapTransformation> bitmapTransformations = new ArrayList<>();
        switch (getScaleType()) {
            case MATRIX:
            case FIT_XY:
            case FIT_START:
            case FIT_END:
            case CENTER:
                break;
            case FIT_CENTER:
                bitmapTransformations.add(new FitCenter());
                break;
            case CENTER_CROP:
                bitmapTransformations.add(new CenterCrop());
                break;
            case CENTER_INSIDE:
                bitmapTransformations.add(new CenterInside());
                break;
        }

        /*
        if (!hasUniformBorder() || !hasBorderColor()) {
            bitmapTransformations.add(new GranularRoundedCorners(
                    getBorderTopLeftRadius(),
                    getBorderTopRightRadius(),
                    getBorderBottomRightRadius(),
                    getBorderBottomLeftRadius()
            ));
        }

        */
      /*  setBorderRadius(requestBuilder);

        if (errorHolder != null) {
            setBorderRadius(errorHolder);
        }
        if (!bitmapTransformations.isEmpty()) {
            requestBuilder.transform(bitmapTransformations.toArray(new BitmapTransformation[0]));
            if (errorHolder != null) {
                setBorderRadius(errorHolder);
                errorHolder.transform(bitmapTransformations.toArray(new BitmapTransformation[0]));
            }
        }
        */

        requestBuilder.dontTransform();

        if (errorHolder != null) {
            errorHolder.dontTransform();
            requestBuilder = requestBuilder.error(errorHolder);
        }
        if (getEventsListener() != null) {
            getEventsListener().onLoadStart();
        }
        requestBuilder.into(this);
    }

    public void setBitmapSrc(@Nullable Bitmap bm) {
        updateSrc(bm);
    }

    public void setIdSrc(int id) {
        updateSrc(id);
    }

    public void setDrawableSrc(@Nullable Drawable drawable) {
        updateSrc(drawable);
    }

    public void setFileSrc(@Nullable File file) {
        updateSrc(file);
    }

    RequestManager requestManager;

    public void setUriSrc(@Nullable Uri uri) {
        Object source = uri;
        if (uri != null && String.valueOf(uri).startsWith("res://")) {
            source = getIdentifier(uri.toString(), "drawable");
        }
        updateSrc(source);
    }

        private static int calculateInSampleSize(BitmapFactory.Options options, int reqWidth, int reqHeight) {
            // Raw height and width of image
            int height = options.outHeight;
            int width = options.outWidth;
            int inSampleSize = 1;


            if (height > reqHeight || width > reqWidth) {

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

    Canvas drawingCanvas = new Canvas();

    private void getDrawableWithBorder(Canvas canvas) {
        if (!(getDrawable() instanceof BitmapDrawable)) {
            return;
        }
        BitmapDrawable drawable = (BitmapDrawable) getDrawable();
        if (drawable == null || drawable.getBitmap() == null) {
            return;
        }
        if (hasUniformBorder()) {
            borderPath.reset();
            borderPaint.setStyle(Paint.Style.STROKE);
            paint.setShader(new BitmapShader(drawable.getBitmap(), Shader.TileMode.CLAMP, Shader.TileMode.CLAMP));
            float[] radii = {borderTopRightRadius, borderTopRightRadius, borderTopLeftRadius, borderTopLeftRadius, borderBottomLeftRadius, borderBottomLeftRadius, borderBottomRightRadius, borderBottomRightRadius};
            borderPath.addRoundRect(new RectF(borderLeftWidth, borderTopWidth, getWidth() - borderLeftWidth, getHeight() - borderTopWidth), radii, Path.Direction.CW);
            canvas.drawPath(borderPath, paint);
            paint.setStyle(Paint.Style.STROKE);
            canvas.drawPath(borderPath, borderPaint);
            paint.reset();
            borderPath.reset();
        } else if (hasUniformBorderColor() && hasUniformBorderWidth()) {
            borderPath.reset();
            borderPaint.reset();
            borderPaint.setAntiAlias(true);
            float[] radii = {borderTopLeftRadius, borderTopLeftRadius, borderTopRightRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomRightRadius, borderBottomLeftRadius, borderBottomLeftRadius,};
            RectF rect = new RectF(borderLeftWidth, borderTopWidth, getWidth()  - borderLeftWidth, getHeight() - borderTopWidth);
            borderPath.addRoundRect(rect, radii, Path.Direction.CW);
            BitmapPool pool = Glide.get(getContext()).getBitmapPool();
            Bitmap bitmap = pool.get(getWidth() + borderLeftWidth, getHeight() + borderTopWidth, Bitmap.Config.ARGB_8888);
            drawingCanvas.setBitmap(bitmap);
            borderPaint.setColor(borderBottomColor);
            borderPaint.setStrokeWidth(borderBottomWidth);
            drawingCanvas.drawARGB(0, 0, 0, 0);
            // canvas.drawARGB(0, 0, 0, 0);
            drawingCanvas.drawPath(borderPath, borderPaint);
            paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.SRC_IN));
            drawingCanvas.drawBitmap(drawable.getBitmap(), 0, 0, paint);
            borderPaint.setStyle(Paint.Style.STROKE);
            drawingCanvas.drawPath(borderPath, borderPaint);
            canvas.drawBitmap(bitmap, 0, 0, null);
            paint.reset();
            borderPath.reset();
        } else if (hasBorderWidth() || hasBorderRadius()) {
            int right = getWidth();
            int bottom = getHeight();
            int margin = 0;

            /* Top */
            borderPaint.reset();
            borderPath.reset();
            borderPaint.setStyle(Paint.Style.STROKE);
            borderPaint.setAntiAlias(true);
            borderPaint.setColor(borderTopColor);
            borderPath.moveTo(margin, 0);
            borderPath.lineTo(right, 0);
            borderPath.close();
            RectF bounds = new RectF();
            if (borderTopWidth > 0) {
                borderPaint.setStrokeWidth(borderTopWidth);
            }

            // bounds.set(margin, margin, right, bottom - borderTopWidth);
            //canvas.drawRect(bounds, paint);
            if (borderTopWidth > 0) {
                canvas.drawPath(borderPath, borderPaint);
            }

            /* Right */
            borderPath.reset();
            borderPaint.reset();
            borderPaint.setStyle(Paint.Style.STROKE);
            borderPaint.setAntiAlias(true);
            borderPaint.setColor(borderRightColor);
            borderPaint.setStrokeWidth(borderRightWidth);
            borderPath.moveTo(right, margin);
            borderPath.lineTo(right, bottom);
            borderPath.close();
            if (borderRightWidth > 0) {
                canvas.drawPath(borderPath, borderPaint);
            }


            /* Bottom */

            borderPath.reset();
            borderPaint.reset();
            borderPaint.setStyle(Paint.Style.STROKE);
            borderPaint.setAntiAlias(true);
            borderPaint.setColor(borderBottomColor);
            borderPaint.setStrokeWidth(borderBottomWidth);
            borderPath.moveTo(right, bottom);
            borderPath.lineTo(0, bottom);
            borderPath.close();
            if (borderBottomWidth > 0) {
                canvas.drawPath(borderPath, borderPaint);
            }

            /* Left */

            borderPath.reset();
            borderPaint.reset();
            borderPaint.setStyle(Paint.Style.STROKE);
            borderPaint.setAntiAlias(true);
            borderPaint.setColor(borderLeftColor);
            borderPaint.setStrokeWidth(borderLeftWidth);
            borderPath.moveTo(0, bottom);
            borderPath.lineTo(0, 0);
            borderPath.close();

            if (borderLeftWidth > 0) {
                canvas.drawPath(borderPath, borderPaint);
            }

            paint.setShader(new BitmapShader(drawable.getBitmap(), Shader.TileMode.CLAMP, Shader.TileMode.CLAMP));

            if (paint.getShader() != null) {
                canvas.drawRect(new RectF((borderLeftWidth / 2), (borderTopWidth / 2), right - (borderRightWidth / 2), (bottom - borderBottomWidth / 2)), paint);
            }

        }
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
                int id = ImageViewOld.getResourceId(getContext(), (String) source, "drawable");
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
                    opts.inSampleSize = ImageViewOld.calculateInSampleSize(opts, width, height);
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
                opts.inSampleSize = ImageViewOld.calculateInSampleSize(opts, width, height);
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
                //opts.inSampleSize = 1;//ImageViewOld.calculateInSampleSize(opts, width, height);
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

    private BitmapDrawable getDrawableWithBorder(Object source) {
        if (source == null) {
            return null;
        } else {
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
                    int id = ImageViewOld.getResourceId(getContext(), (String) source, "drawable");
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
                        opts.inSampleSize = ImageViewOld.calculateInSampleSize(opts, width, height);
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
                    opts.inSampleSize = ImageViewOld.calculateInSampleSize(opts, width, height);
                    opts.inTargetDensity = width * opts.inSampleSize;
                    image = BitmapFactory.decodeFile(String.valueOf(path), opts);
                }
            } else if (source instanceof Integer) {
                if ((int) source > 0) {
                    opts.inJustDecodeBounds = true;
                    BitmapFactory.decodeResource(getResources(), (int) source, opts);
                    srcWidth = opts.outWidth;
                    srcHeight = opts.outHeight;
                    opts.inBitmap = pool.get(width, height, opts.inPreferredConfig);
                    opts.inJustDecodeBounds = false;
                    opts.inScaled = true;
                    opts.inDensity = srcWidth;
                    opts.inSampleSize = ImageViewOld.calculateInSampleSize(opts, width, height);
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
            if (image != null) {
                Bitmap bitmap = pool.get(width, height, opts.inPreferredConfig);
                Canvas canvas = new Canvas(bitmap);
                Paint paint = new Paint();
                paint.setAntiAlias(true);
                if (image.getWidth() != width || image.getHeight() != height) {
                    //image = Bitmap.createScaledBitmap(image, width, height, true);
                }
                BitmapShader shader = new BitmapShader(image, Shader.TileMode.CLAMP, Shader.TileMode.CLAMP);
                paint.setShader(shader);

                if (hasUniformBorder()) {
                    int borderWidth = borderBottomWidth;
                    int radius = borderBottomLeftRadius;
                    Path path = new Path();
                    path.addRoundRect(
                            new RectF(
                                    borderWidth,
                                    borderWidth,
                                    width - borderWidth,
                                    height - borderWidth
                            ),
                            radius,
                            radius,
                            Path.Direction.CW
                    );
                    Paint borderPaint = new Paint();
                    borderPaint.setAntiAlias(true);
                    borderPaint.setStyle(Paint.Style.STROKE);
                    if (hasBorderWidth()) {
                        if (borderRightColor != 0) {
                            borderPaint.setColor(borderRightColor);
                        }
                        borderPaint.setStrokeWidth(borderWidth);
                        canvas.drawRoundRect(new RectF(
                                borderWidth,
                                borderWidth,
                                width - borderWidth,
                                height - borderWidth
                        ), radius, radius, paint);
                    }
                    canvas.drawPath(path, borderPaint);
                } else if (hasBorderColor()) {
                    int right = width;
                    int bottom = height;
                    int margin = 0;
                    /* Top */
                    Path path = new Path();
                    Paint borderPaint = new Paint();
                    borderPaint.setStyle(Paint.Style.STROKE);
                    if (borderTopColor != 0) {
                        borderPaint.setColor(borderTopColor);
                    }

                    borderPaint.setStrokeWidth(borderTopWidth);
                    path.moveTo(margin, 0);
                    path.lineTo(right, 0);
                    path.close();

                    if (borderTopWidth > 0) {
                        canvas.drawRect(new RectF(margin, margin, right, bottom), paint);
                        canvas.drawPath(path, borderPaint);
                    }

                    shader = new BitmapShader(bitmap, Shader.TileMode.CLAMP, Shader.TileMode.CLAMP);
                    paint.setShader(shader);

                    /* Right */
                    path.reset();
                    borderPaint.reset();
                    borderPaint.setStyle(Paint.Style.STROKE);
                    if (borderRightColor != 0) {
                        borderPaint.setColor(borderRightColor);
                    }
                    borderPaint.setStrokeWidth(borderRightWidth);
                    path.moveTo(right, margin);
                    path.lineTo(right, bottom);
                    path.close();
                    if (borderRightWidth > 0) {
                        canvas.drawRect(new RectF(margin, margin, right, bottom), paint);
                        canvas.drawPath(path, borderPaint);
                    }


                    /* Bottom */

                    path.reset();
                    borderPaint.reset();
                    borderPaint.setStyle(Paint.Style.STROKE);
                    if (borderBottomColor != 0) {
                        borderPaint.setColor(borderBottomColor);
                    }
                    borderPaint.setStrokeWidth(borderBottomWidth);
                    path.moveTo(right, bottom);
                    path.lineTo(0, bottom);
                    path.close();
                    if (borderBottomWidth > 0) {
                        canvas.drawRect(new RectF(margin, margin, right, bottom), paint);
                        canvas.drawPath(path, borderPaint);
                    }

                    /* Left */

                    path.reset();
                    borderPaint.reset();
                    borderPaint.setStyle(Paint.Style.STROKE);
                    if (borderLeftColor != 0) {
                        borderPaint.setColor(borderLeftColor);
                    }
                    borderPaint.setStrokeWidth(borderLeftWidth);
                    path.moveTo(0, bottom);
                    path.lineTo(0, 0);
                    path.close();
                    if (borderLeftWidth > 0) {
                        canvas.drawRect(new RectF(0, 0, right, bottom), paint);
                        canvas.drawPath(path, borderPaint);
                    }

                } else {
                    int radius = borderTopLeftRadius;
                    int diameter = radius * 2;
                    int margin = 0;
                    int right = width;
                    int bottom = height;
                    /* TopLeft */
                    canvas.drawRoundRect(new RectF(0, 0, margin + diameter, margin + diameter), radius,
                            radius, paint);
                    canvas.drawRect(new RectF(margin, margin + radius, margin + radius, bottom), paint);
                    canvas.drawRect(new RectF(margin + radius, margin, right, bottom), paint);


                    /* TopRight */

                    radius = borderTopRightRadius;
                    diameter = radius * 2;

                    canvas.drawRoundRect(new RectF(right - diameter, margin, right, margin + diameter), radius,
                            radius, paint);
                    canvas.drawRect(new RectF(margin, margin, right - radius, bottom), paint);
                    canvas.drawRect(new RectF(right - radius, margin + radius, right, bottom), paint);


                    /* BottomRight */

                    radius = borderBottomRightRadius;
                    diameter = radius * 2;

                    canvas.drawRoundRect(new RectF(margin, bottom - diameter, margin + diameter, bottom), radius,
                            radius, paint);
                    canvas.drawRect(new RectF(margin, margin, margin + diameter, bottom - radius), paint);
                    canvas.drawRect(new RectF(margin + radius, margin, right, bottom), paint);


                    /* BottomLeft */

                    radius = borderBottomLeftRadius;
                    diameter = radius * 2;


                    canvas.drawRoundRect(new RectF(right - diameter, bottom - diameter, right, bottom), radius,
                            radius, paint);
                    canvas.drawRect(new RectF(margin, margin, right - radius, bottom), paint);
                    canvas.drawRect(new RectF(right - radius, margin, right, bottom - radius), paint);
                }

                return new BitmapDrawable(getResources(), bitmap);
            }
            return null;
        }

    }

    public boolean hasBorderColor() {
        return borderTopColor != 0 || borderRightColor != 0 || borderBottomColor != 0 || borderLeftColor != 0;
    }

    public boolean hasBorderWidth() {
        return borderTopWidth != 0
                || borderRightWidth != 0
                || borderBottomWidth != 0
                || borderLeftWidth != 0;
    }

    public boolean hasBorderRadius() {
        return borderTopLeftRadius != 0 || borderTopRightRadius != 0 || borderBottomRightRadius != 0 || borderBottomLeftRadius != 0;
    }

    public boolean hasUniformBorderColor() {
        return borderTopColor == borderRightColor &&
                borderTopColor == borderBottomColor &&
                borderTopColor == borderLeftColor;
    }

    public boolean hasUniformBorderWidth() {
        return borderTopWidth == borderRightWidth &&
                borderTopWidth == borderBottomWidth &&
                borderTopWidth == borderLeftWidth;
    }

    public boolean hasUniformBorderRadius() {
        return borderTopLeftRadius == borderTopRightRadius &&
                borderTopLeftRadius == borderBottomRightRadius &&
                borderTopLeftRadius == borderBottomLeftRadius;
    }

    public boolean hasUniformBorder() {
        return hasUniformBorderColor() &&
                hasUniformBorderWidth() &&
                hasUniformBorderRadius() && hasBorderColor();
    }


    private String mFilter;

    private String getValue(String value) {
        return value.substring(value.indexOf('(') + 1, value.indexOf(')'));
    }

    public void setFilter(String filter) {
        mFilter = filter;
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


    public void setBorderTopWidth(int borderTopWidth) {
        this.borderTopWidth = borderTopWidth;
        invalidate();
    }

    public void setBorderRightWidth(int borderRightWidth) {
        this.borderRightWidth = borderRightWidth;
        invalidate();
    }

    public void setBorderBottomWidth(int borderBottomWidth) {
        this.borderBottomWidth = borderBottomWidth;
        invalidate();
    }


    public void setBorderLeftWidth(int borderLeftWidth) {
        this.borderLeftWidth = borderLeftWidth;
        invalidate();
    }

    public void setBorderTopLeftRadius(int borderTopLeftRadius) {
        this.borderTopLeftRadius = borderTopLeftRadius;
        invalidate();
    }

    public void setBorderTopRightRadius(int borderTopRightRadius) {
        this.borderTopRightRadius = borderTopRightRadius;
        invalidate();
    }

    public void setBorderBottomRightRadius(int borderBottomRightRadius) {
        this.borderBottomRightRadius = borderBottomRightRadius;
        invalidate();
    }

    public void setBorderBottomLeftRadius(int borderBottomLeftRadius) {
        this.borderBottomLeftRadius = borderBottomLeftRadius;
        invalidate();
    }


    public void setBorderTopColor(int borderTopColor) {
        this.borderTopColor = borderTopColor;
        invalidate();
    }

    public void setBorderRightColor(int borderRightColor) {
        this.borderRightColor = borderRightColor;
        invalidate();
    }

    public void setBorderBottomColor(int borderBottomColor) {
        this.borderBottomColor = borderBottomColor;
        invalidate();
    }

    public void setBorderLeftColor(int borderLeftColor) {
        this.borderLeftColor = borderLeftColor;
        invalidate();
    }

    public int getBorderTopColor() {
        return borderTopColor;
    }

    public int getBorderRightColor() {
        return borderRightColor;
    }

    public int getBorderBottomColor() {
        return borderBottomColor;
    }

    public int getBorderLeftColor() {
        return borderLeftColor;
    }

    public int getUniformBorderColor() {
        if (this.hasUniformBorderColor()) {
            return this.borderTopColor;
        }

        return 0;
    }

    public float getBorderTopWidth() {
        return borderTopWidth;
    }

    public float getBorderRightWidth() {
        return borderRightWidth;
    }

    public float getBorderBottomWidth() {
        return borderBottomWidth;
    }

    public float getBorderLeftWidth() {
        return borderLeftWidth;
    }

    public float getUniformBorderWidth() {
        if (this.hasUniformBorderWidth()) {
            return this.borderTopWidth;
        }

        return 0;
    }

    public float getBorderTopLeftRadius() {
        return borderTopLeftRadius;
    }

    public float getBorderTopRightRadius() {
        return borderTopRightRadius;
    }

    public float getBorderBottomRightRadius() {
        return borderBottomRightRadius;
    }

    public float getBorderBottomLeftRadius() {
        return borderBottomLeftRadius;
    }

    public float getUniformBorderRadius() {
        if (this.hasUniformBorderRadius()) {
            return this.borderTopLeftRadius;
        }

        return 0;
    }

}
