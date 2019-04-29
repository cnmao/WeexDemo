package com.example.weexdemo;

import android.os.Bundle;
import android.os.PersistableBundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.widget.ImageView;

import com.bumptech.glide.Glide;

public class GlideDemoActivity extends AppCompatActivity {

    private ImageView iv_img;
    private String url = "https://img-blog.csdn.net/20160413112832792?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center";

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState, @Nullable PersistableBundle persistentState) {
        super.onCreate(savedInstanceState, persistentState);
        setContentView(R.layout.activity_glide);

        initView();

        initClick();
    }

    private void initClick() {
        Glide.with(this).load(url).into(iv_img);
    }

    private void initView() {
        iv_img = (ImageView) findViewById(R.id.iv_img);
    }

}
