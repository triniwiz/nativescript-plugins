package com.github.triniwiz.imageoptimzedemo;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.util.Log;

import com.github.triniwiz.imageoptimize.ImageOptimizer;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

public class MainActivity extends AppCompatActivity {

  Bitmap destiny;
  static Executor executor = Executors.newSingleThreadExecutor();

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    compress();
  }

  void compress() {
    executor.execute(new Runnable() {
      @Override
      public void run() {
        File destinyFile = new File(getCacheDir(), "destiny_2.jpg");

        //   if (destiny == null) {
        if (destinyFile.exists() && destinyFile.length() == 0) {
          destinyFile.delete();
        }
        if (false) {
          try {
            destiny = BitmapFactory.decodeFile(destinyFile.getCanonicalPath());
          } catch (IOException e) {
            e.printStackTrace();
          }
        } else {
          URL url = null;
          try {
            url = new URL("https://github.com/triniwiz/nativescript-imageoptimize/raw/master/demo/app/destiny_2.jpg");
            FileOutputStream outputStream = new FileOutputStream(destinyFile);
            InputStream stream = url.openStream();
            int count;
            byte[] buffer = new byte[1024];
            while (true) {
              count = stream.read(buffer);
              if (count <= 0)
                break;
              outputStream.write(buffer, 0, count);
            }
            outputStream.flush();
            outputStream.close();
            stream.close();
            // destiny = BitmapFactory.decodeFile(destinyFile.getAbsolutePath());
            HashMap<String, Object> opts = new HashMap<>();
            opts.put("quality", 50);
            opts.put("width", 400);
            ImageOptimizer.optimize(destinyFile, getApplicationContext(), opts, new ImageOptimizer.Callback() {
              @Override
              public void onSuccess(File file) {
                try {
                  Log.d("com.test", "onSuccess: " + file.getCanonicalPath());
                } catch (IOException e) {
                  e.printStackTrace();
                }
              }

              @Override
              public void onError(String message) {
                Log.d("com.test", "onError: " + message);
              }
            });
          } catch (FileNotFoundException e) {
            e.printStackTrace();
          } catch (MalformedURLException e) {
            e.printStackTrace();
          } catch (IOException e) {
            e.printStackTrace();
          }
        }
        //  }
      }
    });
  }
}
