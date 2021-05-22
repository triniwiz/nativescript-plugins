package io.github.triniwiz.yogalayoutdemo

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.facebook.soloader.SoLoader

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        SoLoader.init(this, false)
        setContentView(R.layout.activity_main)

    }
}
