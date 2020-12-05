package com.github.triniwiz.imagecacheit;

/**
 * Created by triniwiz on 3/5/20
 */
public interface ImageViewProgressListener {

    void onProgress(String key, long bytesRead, long expectedLength);

    /**
     * Control how often the listener needs an update. 0% and 100% will always be dispatched.
     *
     * @return in percentage (0.2 = call {@link #onProgress} around every 0.2 percent of progress)
     */
    float getGranularityPercentage();
}
