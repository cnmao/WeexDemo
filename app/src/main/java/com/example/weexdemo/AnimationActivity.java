package com.example.weexdemo;

import android.content.Intent;
import android.graphics.drawable.AnimationDrawable;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.ImageView;

public class AnimationActivity extends AppCompatActivity {

    private AnimationDrawable animationDrawable;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_animation);
        initView();
    }

    private void initView() {
        ImageView iv_pic = (ImageView) findViewById(R.id.iv_pic);
        iv_pic.setBackgroundResource(R.drawable.rocket_thrust);
        animationDrawable = (AnimationDrawable) iv_pic.getBackground();
        //动画可绘图形
        View scale = findViewById(R.id.scale);
        scale.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                animationDrawable.start();
            }
        });
        //使用动画显示或隐藏视图
        View showorhide = findViewById(R.id.showorhide);
        showorhide.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //
                Intent intent = new Intent(AnimationActivity.this, CrossfadeActivity.class);
//                Intent intent = new Intent(AnimationActivity.this, CardFlipActivity.class);
                startActivity(intent);
            }
        });
        //使用动画移动视图
        View move = findViewById(R.id.move);
        //使用fling动画移动视图
        View fling_move = findViewById(R.id.fling_move);
        fling_move.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(AnimationActivity.this, FlingMoveActivity.class);
                startActivity(intent);
            }
        });
        //使用缩放动画放大视图
        View zoom = findViewById(R.id.zoom);
        zoom.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(AnimationActivity.this, ZoomActivity.class);
                startActivity(intent);
            }
        });
        //使用弹簧物理动画运动
        View spring = findViewById(R.id.spring);
        spring.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(AnimationActivity.this, SpringActivity.class);
                startActivity(intent);
            }
        });

    }
}
