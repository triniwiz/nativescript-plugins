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

import java.security.MessageDigest;

import jp.wasabeef.glide.transformations.BitmapTransformation;

/**
 * Created by triniwiz on 2019-06-28
 */
public class ColoredRoundedCornerBorders extends BitmapTransformation {
    private static final int VERSION = 1;
    private static final String ID = "com.github.triniwiz.imagedemo.ColoredRoundedCornerBorders." + VERSION;

    public enum CornerType {
        ALL,
        TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT,
        TOP, BOTTOM, LEFT, RIGHT,
        OTHER_TOP_LEFT, OTHER_TOP_RIGHT, OTHER_BOTTOM_LEFT, OTHER_BOTTOM_RIGHT,
        DIAGONAL_FROM_TOP_LEFT, DIAGONAL_FROM_TOP_RIGHT, BORDER_ALL, BORDER_TOP, BORDER_RIGHT, BORDER_BOTTOM, BORDER_LEFT
    }

    private int radius;
    private int diameter;
    private int margin;
    private CornerType cornerType;
    private int cornerWidth;
    private int color;
    private int viewWidth;
    private int viewHeight;

    public ColoredRoundedCornerBorders(int radius, int margin) {
        this(radius, margin, CornerType.ALL, Color.TRANSPARENT, 0, -1, -1);
    }

    public ColoredRoundedCornerBorders(int radius, int margin, CornerType cornerType, int color, int cornerWidth, int width, int height) {
        this.radius = radius;
        this.diameter = this.radius * 2;
        this.margin = margin;
        this.cornerType = cornerType;
        this.color = color;
        this.cornerWidth = cornerWidth;
        this.viewWidth = width;
        this.viewHeight = height;
    }

    @Override
    protected Bitmap transform(@NonNull Context context, @NonNull BitmapPool pool,
                               @NonNull Bitmap toTransform, int outWidth, int outHeight) {
        int width = toTransform.getWidth();
        int height = toTransform.getHeight();
        int currentHeight = outHeight;
        int currentWidth = outWidth;
        if (viewWidth > -1) {
            currentWidth = viewWidth;
        }

        if (viewHeight > -1) {
            currentHeight = viewHeight;
        }

        Bitmap bitmap = pool.get(currentWidth, currentHeight, Bitmap.Config.ARGB_8888);
        bitmap.setHasAlpha(true);
        Canvas canvas = new Canvas(bitmap);

        Paint paint = new Paint();
        paint.setAntiAlias(true);

        paint.setShader(new BitmapShader(toTransform, Shader.TileMode.CLAMP, Shader.TileMode.CLAMP));
        drawRoundRect(canvas, paint, currentWidth, currentHeight);
        return bitmap;
    }

    private void drawRoundRect(Canvas canvas, Paint paint, float width, float height) {
        float right = width - margin;
        float bottom = height - margin;
        Paint borderPaint;
        Path path;
        switch (cornerType) {
            case ALL:
                canvas.drawRoundRect(new RectF(margin + this.cornerWidth, margin + this.cornerWidth, right - this.cornerWidth, bottom - this.cornerWidth), radius, radius, paint);
                path = new Path();
                path.addRoundRect(
                        new RectF(margin + this.cornerWidth, margin + this.cornerWidth, right - this.cornerWidth, bottom - this.cornerWidth),
                        radius, radius,
                        Path.Direction.CW
                );
                borderPaint = new Paint();
                borderPaint.setAntiAlias(true);
                borderPaint.setStyle(Paint.Style.STROKE);
                borderPaint.setColor(color);
                borderPaint.setStrokeWidth(cornerWidth);
                if (cornerWidth > 0) {
                //    canvas.drawPath(path, borderPaint);
                }
                break;
            case TOP_LEFT:
                drawTopLeftRoundRect(canvas, paint, right, bottom);
                break;
            case TOP_RIGHT:
                drawTopRightRoundRect(canvas, paint, right, bottom);
                break;
            case BOTTOM_LEFT:
                drawBottomLeftRoundRect(canvas, paint, right, bottom);
                break;
            case BOTTOM_RIGHT:
                drawBottomRightRoundRect(canvas, paint, right, bottom);
                break;
            case TOP:
                drawTopRoundRect(canvas, paint, right, bottom);
                break;
            case BOTTOM:
                drawBottomRoundRect(canvas, paint, right, bottom);
                break;
            case LEFT:
                drawLeftRoundRect(canvas, paint, right, bottom);
                break;
            case RIGHT:
                drawRightRoundRect(canvas, paint, right, bottom);
                break;
            case OTHER_TOP_LEFT:
                drawOtherTopLeftRoundRect(canvas, paint, right, bottom);
                break;
            case OTHER_TOP_RIGHT:
                drawOtherTopRightRoundRect(canvas, paint, right, bottom);
                break;
            case OTHER_BOTTOM_LEFT:
                drawOtherBottomLeftRoundRect(canvas, paint, right, bottom);
                break;
            case OTHER_BOTTOM_RIGHT:
                drawOtherBottomRightRoundRect(canvas, paint, right, bottom);
                break;
            case DIAGONAL_FROM_TOP_LEFT:
                drawDiagonalFromTopLeftRoundRect(canvas, paint, right, bottom);
                break;
            case DIAGONAL_FROM_TOP_RIGHT:
                drawDiagonalFromTopRightRoundRect(canvas, paint, right, bottom);
                break;
            case BORDER_ALL:
                path = new Path();
                borderPaint = new Paint();
                borderPaint.setStyle(Paint.Style.STROKE);
                borderPaint.setColor(color);
                borderPaint.setStrokeWidth(cornerWidth);
                path.addRect(new RectF(margin + this.cornerWidth, margin + this.cornerWidth, right - this.cornerWidth, bottom - this.cornerWidth), Path.Direction.CW);
                if (cornerWidth > 0) {
                    canvas.drawPath(path, paint);
                    canvas.drawPath(path, borderPaint);
                }
                break;
            case BORDER_TOP:
                path = new Path();
                borderPaint = new Paint();
                borderPaint.setStyle(Paint.Style.STROKE);
                borderPaint.setColor(color);
                borderPaint.setStrokeWidth(cornerWidth);
                path.moveTo(margin, 0);
                path.lineTo(right, 0);
                path.close();
                if (cornerWidth > 0) {
                    canvas.drawRect(new RectF(margin, margin, right, bottom), paint);
                    canvas.drawPath(path, borderPaint);
                }
                break;
            case BORDER_RIGHT:
                path = new Path();
                borderPaint = new Paint();
                borderPaint.setStyle(Paint.Style.STROKE);
                borderPaint.setColor(color);
                borderPaint.setStrokeWidth(cornerWidth);
                path.moveTo(right, margin);
                path.lineTo(right, bottom);
                path.close();
                if (cornerWidth > 0) {
                    canvas.drawRect(new RectF(margin, margin, right, bottom), paint);
                    canvas.drawPath(path, borderPaint);
                }
                break;
            case BORDER_BOTTOM:
                path = new Path();
                borderPaint = new Paint();
                borderPaint.setStyle(Paint.Style.STROKE);
                borderPaint.setColor(color);
                borderPaint.setStrokeWidth(cornerWidth);
                path.moveTo(right, bottom);
                path.lineTo(0, bottom);
                path.close();
                if (cornerWidth > 0) {
                    canvas.drawRect(new RectF(margin, margin, right, bottom), paint);
                    canvas.drawPath(path, borderPaint);
                }
                break;
            case BORDER_LEFT:
                path = new Path();
                borderPaint = new Paint();
                borderPaint.setStyle(Paint.Style.STROKE);
                borderPaint.setColor(color);
                borderPaint.setStrokeWidth(cornerWidth);
                path.moveTo(0, bottom);
                path.lineTo(0, 0);
                path.close();
                if (cornerWidth > 0) {
                    canvas.drawRect(new RectF(margin, margin, right, bottom), paint);
                    canvas.drawPath(path, borderPaint);
                }
                break;
            default:
                canvas.drawRoundRect(new RectF(margin, margin, right, bottom), radius, radius, paint);
                path = new Path();
                borderPaint = new Paint();
                borderPaint.setStyle(Paint.Style.STROKE);
                borderPaint.setColor(color);
                borderPaint.setStrokeWidth(cornerWidth);
                path.addRoundRect(new RectF(margin, margin, right, bottom), radius, radius, Path.Direction.CW);
                if (cornerWidth > 0) {
                    canvas.drawPath(path, borderPaint);
                }
                break;
        }
    }

    private void drawTopLeftRoundRect(Canvas canvas, Paint paint, float right, float bottom) {
        canvas.drawRoundRect(new RectF(margin, margin, margin + diameter, margin + diameter), radius,
                radius, paint);
        canvas.drawRect(new RectF(margin, margin + radius, margin + radius, bottom), paint);
        canvas.drawRect(new RectF(margin + radius, margin, right, bottom), paint);
    }

    private void drawTopRightRoundRect(Canvas canvas, Paint paint, float right, float bottom) {
        canvas.drawRoundRect(new RectF(right - diameter, margin, right, margin + diameter), radius,
                radius, paint);
        canvas.drawRect(new RectF(margin, margin, right - radius, bottom), paint);
        canvas.drawRect(new RectF(right - radius, margin + radius, right, bottom), paint);
    }

    private void drawBottomLeftRoundRect(Canvas canvas, Paint paint, float right, float bottom) {
        canvas.drawRoundRect(new RectF(margin, bottom - diameter, margin + diameter, bottom), radius,
                radius, paint);
        canvas.drawRect(new RectF(margin, margin, margin + diameter, bottom - radius), paint);
        canvas.drawRect(new RectF(margin + radius, margin, right, bottom), paint);
    }

    private void drawBottomRightRoundRect(Canvas canvas, Paint paint, float right, float bottom) {
        canvas.drawRoundRect(new RectF(right - diameter, bottom - diameter, right, bottom), radius,
                radius, paint);
        canvas.drawRect(new RectF(margin, margin, right - radius, bottom), paint);
        canvas.drawRect(new RectF(right - radius, margin, right, bottom - radius), paint);
    }

    private void drawTopRoundRect(Canvas canvas, Paint paint, float right, float bottom) {
        canvas.drawRoundRect(new RectF(margin, margin, right, margin + diameter), radius, radius,
                paint);
        canvas.drawRect(new RectF(margin, margin + radius, right, bottom), paint);
    }

    private void drawBottomRoundRect(Canvas canvas, Paint paint, float right, float bottom) {
        canvas.drawRoundRect(new RectF(margin, bottom - diameter, right, bottom), radius, radius,
                paint);
        canvas.drawRect(new RectF(margin, margin, right, bottom - radius), paint);
    }

    private void drawLeftRoundRect(Canvas canvas, Paint paint, float right, float bottom) {
        canvas.drawRoundRect(new RectF(margin, margin, margin + diameter, bottom), radius, radius,
                paint);
        canvas.drawRect(new RectF(margin + radius, margin, right, bottom), paint);
    }

    private void drawRightRoundRect(Canvas canvas, Paint paint, float right, float bottom) {
        canvas.drawRoundRect(new RectF(right - diameter, margin, right, bottom), radius, radius, paint);
        canvas.drawRect(new RectF(margin, margin, right - radius, bottom), paint);
    }

    private void drawOtherTopLeftRoundRect(Canvas canvas, Paint paint, float right, float bottom) {
        canvas.drawRoundRect(new RectF(margin, bottom - diameter, right, bottom), radius, radius,
                paint);
        canvas.drawRoundRect(new RectF(right - diameter, margin, right, bottom), radius, radius, paint);
        canvas.drawRect(new RectF(margin, margin, right - radius, bottom - radius), paint);
    }

    private void drawOtherTopRightRoundRect(Canvas canvas, Paint paint, float right, float bottom) {
        canvas.drawRoundRect(new RectF(margin, margin, margin + diameter, bottom), radius, radius,
                paint);
        canvas.drawRoundRect(new RectF(margin, bottom - diameter, right, bottom), radius, radius,
                paint);
        canvas.drawRect(new RectF(margin + radius, margin, right, bottom - radius), paint);
    }

    private void drawOtherBottomLeftRoundRect(Canvas canvas, Paint paint, float right, float bottom) {
        canvas.drawRoundRect(new RectF(margin, margin, right, margin + diameter), radius, radius,
                paint);
        canvas.drawRoundRect(new RectF(right - diameter, margin, right, bottom), radius, radius, paint);
        canvas.drawRect(new RectF(margin, margin + radius, right - radius, bottom), paint);
    }

    private void drawOtherBottomRightRoundRect(Canvas canvas, Paint paint, float right,
                                               float bottom) {
        canvas.drawRoundRect(new RectF(margin, margin, right, margin + diameter), radius, radius,
                paint);
        canvas.drawRoundRect(new RectF(margin, margin, margin + diameter, bottom), radius, radius,
                paint);
        canvas.drawRect(new RectF(margin + radius, margin + radius, right, bottom), paint);
    }

    private void drawDiagonalFromTopLeftRoundRect(Canvas canvas, Paint paint, float right,
                                                  float bottom) {
        canvas.drawRoundRect(new RectF(margin, margin, margin + diameter, margin + diameter), radius,
                radius, paint);
        canvas.drawRoundRect(new RectF(right - diameter, bottom - diameter, right, bottom), radius,
                radius, paint);
        canvas.drawRect(new RectF(margin, margin + radius, right - diameter, bottom), paint);
        canvas.drawRect(new RectF(margin + diameter, margin, right, bottom - radius), paint);
    }

    private void drawDiagonalFromTopRightRoundRect(Canvas canvas, Paint paint, float right,
                                                   float bottom) {
        canvas.drawRoundRect(new RectF(right - diameter, margin, right, margin + diameter), radius,
                radius, paint);
        canvas.drawRoundRect(new RectF(margin, bottom - diameter, margin + diameter, bottom), radius,
                radius, paint);
        canvas.drawRect(new RectF(margin, margin, right - radius, bottom - radius), paint);
        canvas.drawRect(new RectF(margin + radius, margin + radius, right, bottom), paint);
    }

    @Override
    public String toString() {
        return "RoundedTransformation(radius=" + radius + ", margin=" + margin + ", diameter="
                + diameter + ", cornerType=" + cornerType.name() + ")";
    }

    @Override
    public boolean equals(Object o) {
        return o instanceof ColoredRoundedCornerBorders &&
                ((ColoredRoundedCornerBorders) o).radius == radius &&
                ((ColoredRoundedCornerBorders) o).diameter == diameter &&
                ((ColoredRoundedCornerBorders) o).margin == margin &&
                ((ColoredRoundedCornerBorders) o).cornerType == cornerType;
    }

    @Override
    public int hashCode() {
        return ID.hashCode() + radius * 10000 + diameter * 1000 + margin * 100 + cornerType.ordinal() * 10;
    }

    @Override
    public void updateDiskCacheKey(@NonNull MessageDigest messageDigest) {
        messageDigest.update((ID + radius + diameter + margin + cornerType).getBytes(CHARSET));
    }
}
