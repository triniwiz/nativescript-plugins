package com.github.triniwiz.imagecacheit;

import android.graphics.drawable.Drawable;

import androidx.annotation.Nullable;

/**
 * Created by triniwiz on 3/6/20
 */
public interface EventsListener {
    void onLoadStart();
    void onLoadError(String message);
    void onLoadedEnd(@Nullable Drawable drawable);
}
