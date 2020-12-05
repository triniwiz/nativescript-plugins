package com.github.triniwiz.imagecacheit;

/**
 * Created by triniwiz on 3/6/20
 */
public interface ProgressListener {

    void onProgress(long loaded, long total, int progress, String url);

}
