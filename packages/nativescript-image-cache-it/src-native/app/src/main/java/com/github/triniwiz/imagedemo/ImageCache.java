package com.github.triniwiz.imagedemo;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import android.annotation.SuppressLint;
import android.content.Context;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.util.Log;

import com.bumptech.glide.Glide;
import com.bumptech.glide.RequestManager;
import com.bumptech.glide.load.DataSource;
import com.bumptech.glide.load.DecodeFormat;
import com.bumptech.glide.load.engine.GlideException;
import com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
import com.bumptech.glide.request.Request;
import com.bumptech.glide.request.RequestFutureTarget;
import com.bumptech.glide.request.RequestListener;
import com.bumptech.glide.request.RequestOptions;
import com.bumptech.glide.request.target.SizeReadyCallback;
import com.bumptech.glide.request.target.Target;
import com.bumptech.glide.request.transition.Transition;

import java.io.File;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * Created by triniwiz on 10/17/19
 */
public class ImageCache {
    static RequestManager manager;
    static Glide glide;
    static ExecutorService executorService;

    public static void init(Context context) {
        if (manager == null) {
            manager = Glide.with(context);
        }
        if (glide == null) {
            glide = Glide.get(context);
        }

        if (executorService == null) {
            executorService = Executors.newSingleThreadExecutor();
        }
    }

    public interface Callback {
        void onSuccess(Object value);

        void onError(Object value);
    }

    @SuppressLint("CheckResult")
    public static void hasItem(String url, @Nullable final Callback callback) {
        RequestOptions requestOptions = new RequestOptions();
        requestOptions.onlyRetrieveFromCache(true);
        manager
                .asFile()
                .load(url)
                .apply(requestOptions)
                .listener(new RequestListener<File>() {
                    @Override
                    public boolean onLoadFailed(@Nullable GlideException e, Object model, Target<File> target, boolean isFirstResource) {
                        if (callback != null) {
                            callback.onError(e);
                        }
                        return false;
                    }

                    @Override
                    public boolean onResourceReady(File resource, Object model, Target<File> target, DataSource dataSource, boolean isFirstResource) {
                        if (callback != null) {
                            callback.onSuccess(resource.getAbsolutePath());
                        }
                        return false;
                    }
                })
                .submit();
    }

    public static void getItem(String url, @Nullable Map<String, String> options, @Nullable final Callback callback) {
        RequestOptions requestOptions = new RequestOptions();
        manager
                .asFile()
                .load(url)
                .apply(requestOptions)
                .listener(new RequestListener<File>() {
                    @Override
                    public boolean onLoadFailed(@Nullable GlideException e, Object model, Target<File> target, boolean isFirstResource) {
                        if (callback != null) {
                            callback.onError(e);
                        }
                        return false;
                    }

                    @Override
                    public boolean onResourceReady(File resource, Object model, Target<File> target, DataSource dataSource, boolean isFirstResource) {
                        if (callback != null) {
                            callback.onSuccess(resource.getAbsolutePath());
                        }
                        return false;
                    }
                })
                .submit();
    }

    public static void clear() {
        if (glide != null) {
            executorService.execute(new Runnable() {
                @Override
                public void run() {
                    glide.clearDiskCache();
                    glide.clearMemory();
                }
            });
        }
    }
}
