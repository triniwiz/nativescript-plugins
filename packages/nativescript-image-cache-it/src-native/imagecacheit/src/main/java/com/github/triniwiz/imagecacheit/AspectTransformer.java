package com.github.triniwiz.imagecacheit;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapShader;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.RectF;
import android.graphics.Shader;

import androidx.annotation.NonNull;

import com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool;
import com.bumptech.glide.request.target.Target;

import java.security.MessageDigest;

import jp.wasabeef.glide.transformations.BitmapTransformation;

/**
 * Created by triniwiz on 2019-06-28
 */
public class AspectTransformer extends BitmapTransformation {
    private static final int VERSION = 1;
    private static final String ID = "com.github.triniwiz.imagecacheit.AspectTransformer." + VERSION;

    private int decodeWidth;
    private int decodeHeight;
    private boolean keepAspectRatio;

    public AspectTransformer(int decodeWidth, int decodeHeight, boolean keepAspectRatio) {
        this.decodeHeight = decodeHeight;
        this.decodeWidth = decodeWidth;
        this.keepAspectRatio = keepAspectRatio;
    }

    @Override
    protected Bitmap transform(@NonNull Context context, @NonNull BitmapPool pool,
                               @NonNull Bitmap toTransform, int outWidth, int outHeight) {


        Bitmap bitmap = toTransform;
        int sourceWidth = toTransform.getWidth();
        int sourceHeight = toTransform.getHeight();
        int reqWidth = decodeWidth > 0 ? decodeWidth : Target.SIZE_ORIGINAL;
        int reqHeight = decodeHeight > 0 ? decodeHeight : Target.SIZE_ORIGINAL;

        // scale
        if ((reqWidth != Target.SIZE_ORIGINAL && reqHeight != Target.SIZE_ORIGINAL) && (reqWidth != sourceWidth || reqHeight != sourceHeight)) {
            if (keepAspectRatio) {
                double widthCoef = (double) sourceWidth / (double) reqWidth;
                double heightCoef = (double) sourceHeight / (double) reqHeight;
                double aspectCoef = Math.min(widthCoef, heightCoef);

                reqWidth = (int) Math.floor(sourceWidth / aspectCoef);
                reqHeight = (int) Math.floor(sourceHeight / aspectCoef);
            }

            bitmap = Bitmap.createScaledBitmap(bitmap, reqWidth, reqHeight, true);
        }

        return bitmap;
    }

    @Override
    public String toString() {
        return "AspectTransformer(decodeWidth=" + decodeWidth + ", decodeHeight=" + decodeHeight + ", keepAspectRatio="
                + keepAspectRatio + ")";
    }

    @Override
    public boolean equals(Object o) {
        return o instanceof AspectTransformer &&
                ((AspectTransformer) o).decodeWidth == decodeWidth &&
                ((AspectTransformer) o).decodeHeight == decodeHeight &&
                ((AspectTransformer) o).keepAspectRatio == keepAspectRatio;
    }

    @Override
    public int hashCode() {
        return ID.hashCode();
    }

    @Override
    public void updateDiskCacheKey(@NonNull MessageDigest messageDigest) {
        messageDigest.update((ID + decodeWidth + decodeHeight).getBytes(CHARSET));
    }
}
