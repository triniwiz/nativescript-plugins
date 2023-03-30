package com.github.triniwiz.imagedemo

import android.app.Activity
import android.graphics.Color
import android.graphics.drawable.ColorDrawable
import android.net.Uri
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import androidx.recyclerview.widget.RecyclerView.ViewHolder
import com.bumptech.glide.Glide
import com.github.triniwiz.imagecacheit.ImageView
import com.github.triniwiz.imagecacheit.ImageView.Companion.enableAutoMM
import com.github.triniwiz.imagedemo.databinding.ActivityMainBinding
import org.json.JSONArray
import org.json.JSONException

class MainActivity : AppCompatActivity() {
  lateinit var binding: ActivityMainBinding
  var list: JSONArray? = null
  fun dp(dp: Int): Int {
    return dp * resources.displayMetrics.density.toInt()
  }

  override fun onCreate(savedInstanceState: Bundle?) {
    list = Data.items
    binding = ActivityMainBinding.inflate(layoutInflater)
    super.onCreate(savedInstanceState)
    setContentView(binding.root)
    val recyclerView = binding.listView
    val adapter: Adapter = Adapter()
    recyclerView.adapter = adapter
    recyclerView.layoutManager = LinearLayoutManager(this)
    val activity: Activity = this
    recyclerView.addOnScrollListener(object : RecyclerView.OnScrollListener() {
      override fun onScrollStateChanged(recyclerView: RecyclerView, newState: Int) {
        super.onScrollStateChanged(recyclerView, newState)
        when (newState) {
          RecyclerView.SCROLL_STATE_SETTLING, RecyclerView.SCROLL_STATE_DRAGGING -> Glide.with(activity.applicationContext).pauseAllRequests()
          RecyclerView.SCROLL_STATE_IDLE -> Glide.with(activity.applicationContext).resumeRequests()
        }
      }

      override fun onScrolled(recyclerView: RecyclerView, dx: Int, dy: Int) {
        super.onScrolled(recyclerView, dx, dy)
      }
    })
    enableAutoMM(application)
  }

  internal inner class Holder(itemView: View) : ViewHolder(itemView) {
    var imageView: ImageView?
    var foreground: ImageView? = null
    var textView: TextView?
    fun setText(text: String?) {
      textView?.setText(text)
    }

    init {
      imageView = itemView.findViewById(R.id.imageView)
      textView = itemView.findViewById(R.id.textView)
//      foreground = itemView.findViewById(R.id.imageView2)
    }
  }

  var handler: Handler? = Handler(Looper.getMainLooper())

  internal inner class Adapter : RecyclerView.Adapter<Holder?>() {
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): Holder {
      val inflater = LayoutInflater.from(parent.context)
      val view = inflater.inflate(R.layout.list_item, parent, false)
      return Holder(view)
    }

    override fun onBindViewHolder(holder: Holder, position: Int) {
      try {
        val json = list?.getJSONObject(position)
        val url = json?.optString("url") ?: ""
        //holder.imageView.setPlaceHolder("res://law");
       // holder.imageView?.setPlaceHolder("res://placeholder_dark_grey_square")

        // holder.imageView.setErrorHolder("res://error");
        // holder.imageView.setAdjustViewBounds(false);
        //  holder.imageView.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
        holder.imageView?.scaleType = android.widget.ImageView.ScaleType.FIT_CENTER
        holder.imageView?.addBasicAuth("httpwatch", "httpwatch")
        if (position % 2 == 0) {
          holder.imageView?.priority = ImageView.Priority.Low
        } else {
          holder.imageView?.priority = ImageView.Priority.High
        }
        holder.imageView?.setPlaceHolder("res://law")

        if (url.isNotEmpty()) {
          holder.imageView?.setSource(url)
          holder.textView?.text = url
        } else {
          holder.imageView?.setSource(null)
          holder.textView?.text = url
        }
      } catch (_: JSONException) {}
    }

    override fun getItemCount(): Int {
      return list?.length() ?: 0
    }
  }
}
