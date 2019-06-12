package com.example.weexdemo;

import android.app.Activity;
import android.os.Bundle;
import android.support.animation.DynamicAnimation;
import android.support.animation.FlingAnimation;
import android.support.annotation.Nullable;
import android.widget.ImageView;

/**
 * https://www.cnblogs.com/zhangmiao14/p/7199353.html
 * https://developer.android.com/guide/topics/graphics/fling-animation#setting-velocity
 */
public class FlingMoveActivity extends Activity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_flingmove);
        ImageView view =(ImageView) findViewById(R.id.iv_view);
        FlingAnimation fling = new FlingAnimation(view, DynamicAnimation.X);
        //设置初始速度
        fling.setStartVelocity(500f); // 默认为0.0
        //设置最小值
//        fling.setMinValue(0);
//        fling.setMaxValue(6);
        //摩擦力
        fling.setFriction(0.5f);
        fling.start();

    }
}
