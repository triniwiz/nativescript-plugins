package com.github.triniwiz.imagedemo;

import android.app.Activity;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.recyclerview.widget.RecyclerView.OnScrollListener;

import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.DataSource;
import com.bumptech.glide.load.engine.GlideException;
import com.bumptech.glide.load.resource.bitmap.CenterInside;
import com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
import com.bumptech.glide.request.RequestListener;
import com.bumptech.glide.request.target.Target;
import com.github.triniwiz.imagecacheit.ImageView;
import com.github.triniwiz.imagecacheit.ImageViewOld;
import com.github.triniwiz.imagedemo.databinding.ActivityMainBinding;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;


public class MainActivity extends AppCompatActivity {
    ActivityMainBinding binding;
    JSONArray list;

    int dp(int dp) {
        return dp * (int) getResources().getDisplayMetrics().density;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        list = Data.items;
        binding = ActivityMainBinding.inflate(getLayoutInflater());
        super.onCreate(savedInstanceState);
        setContentView(binding.getRoot());
        RecyclerView recyclerView = binding.listView;
        Adapter adapter = new Adapter();
        recyclerView.setAdapter(adapter);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        final Activity activity = this;
        recyclerView.addOnScrollListener(new OnScrollListener() {
            @Override
            public void onScrollStateChanged(@NonNull RecyclerView recyclerView, int newState) {
                super.onScrollStateChanged(recyclerView, newState);
                switch (newState) {
                    case RecyclerView.SCROLL_STATE_SETTLING:
                    case RecyclerView.SCROLL_STATE_DRAGGING:
                        Glide.with(activity).pauseAllRequests();
                        break;
                    case RecyclerView.SCROLL_STATE_IDLE:
                        Glide.with(activity).resumeRequests();
                        break;
                }
            }

            @Override
            public void onScrolled(@NonNull RecyclerView recyclerView, int dx, int dy) {
                super.onScrolled(recyclerView, dx, dy);
            }
        });
        ImageView.enableAutoMM(getApplication());
    }

    class Holder extends RecyclerView.ViewHolder {
        ImageViewOld imageView;
        ImageViewOld forground;
        TextView textView;

        public Holder(@NonNull View itemView) {
            super(itemView);
            imageView = itemView.findViewById(R.id.imageView);
            textView = itemView.findViewById(R.id.textView);
            forground = itemView.findViewById(R.id.imageView2);
        }

        public void setText(String text) {
            textView.setText(text);
        }
    }

    Handler handler = new Handler();
    class Adapter extends RecyclerView.Adapter<Holder> {
        @NonNull
        @Override
        public Holder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
            LayoutInflater inflater = LayoutInflater.from(parent.getContext());
            View view = inflater.inflate(R.layout.list_item, parent, false);
            return new Holder(view);
        }

        @Override
        public void onBindViewHolder(@NonNull final Holder holder, int position) {
            try {
                JSONObject object = list.getJSONObject(position);
                String url = object.optString("url");
                //holder.imageView.setPlaceHolder("res://law");
                 holder.imageView.setPlaceHolder("res://placeholder_dark_grey_square");

                // holder.imageView.setErrorHolder("res://error");
               // holder.imageView.setAdjustViewBounds(false);
              //  holder.imageView.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
                holder.imageView.setScaleType(android.widget.ImageView.ScaleType.FIT_CENTER);
                holder.imageView.addBasicAuth("httpwatch","httpwatch");
                 if (position%2 == 0){
                     holder.imageView.setPriority(ImageViewOld.Priority.Low);
                 }else {
                     holder.imageView.setPriority(ImageViewOld.Priority.High);
                 }

                handler.postDelayed(new Runnable() {
                    @Override
                    public void run() {

                       // holder.imageView.setScaleType(android.widget.ImageView.ScaleType.CENTER_CROP);
                       // holder.imageView.setAdjustViewBounds(true);
                     //   holder.imageView.invalidate();
                      //  holder.imageView.reload();
                    }
                },3000);
                // holder.imageView.setFilter("contrast(200%);");
                // holder.imageView.setFallbackImage(null);
                if (!url.isEmpty()) {
                   // holder.imageView.setUriSrc(Uri.parse(url));
                   holder.textView.setText(url);
                    holder.imageView.setDrawableSrc(new ColorDrawable(Color.RED));
                } else {
                    holder.imageView.setUriSrc(null);
                    holder.textView.setText(url);
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }

        @Override
        public int getItemCount() {
            return list.length();
        }
    }
}
