package com.example.weexdemo;

import android.animation.Animator;
import android.animation.ObjectAnimator;
import android.graphics.Path;
import android.os.Build;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.view.ViewAnimationUtils;

public class CrossfadeActivity extends AppCompatActivity {

    private View contentView;
    private View loadingView;
    private View tv_dingbu;
    private View iv_show;
    private int shortAnimationDuration;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activtiy_crossfade);

        contentView = findViewById(R.id.content);
        loadingView = findViewById(R.id.loading_spinner);
        tv_dingbu = findViewById(R.id.tv_dingbu);
        iv_show = findViewById(R.id.iv_show);

//        ObjectAnimator objectAnimator = new ObjectAnimator();
//        objectAnimator.ofFloat(tv_dingbu, "translationX", 100f).setDuration(2000).start();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            Path path = new Path();
            path.arcTo(0f, 0f, 1000f, 1000f, 270f, -180f, true);
            ObjectAnimator animator = ObjectAnimator.ofFloat(tv_dingbu, View.X, View.Y, path);
            animator.setDuration(2000);
            animator.start();
        } else {
            // Create animator without using curved path
        }




        // Check if the runtime version is at least Lollipop
//        iv_show.post(new Runnable() {
//            @Override
//            public void run() {
//                startAnimation();
//            }
//        });

//        // Initially hide the content view.
//        contentView.setVisibility(View.GONE);
//
//        // Retrieve and cache the system's default "short" animation time.
//        shortAnimationDuration = getResources().getInteger(
//                android.R.integer.config_shortAnimTime);

//        tv_dingbu.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                contentView.setAlpha(0f);
//                contentView.setVisibility(View.VISIBLE);
//
//                //透明度 0代表不可见 1代表可见 duration 代表时间
//                contentView.animate()
//                        .alpha(1f)
//                        .setDuration(1000)
//                        .setListener(null);
//
//                loadingView.animate()
//                        .alpha(0f)
//                        .setDuration(1000)
//                        .setListener(new AnimatorListenerAdapter() {
//                            @Override
//                            public void onAnimationEnd(Animator animation) {
//                                loadingView.setVisibility(View.GONE);
//                            }
//                        });
    }
//        });


//    }

    public void startAnimation() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            // get the center for the clipping circle
            int cx = iv_show.getWidth() / 2;
            int cy = iv_show.getHeight() / 2;

            // get the final radius for the clipping circle
            float finalRadius = (float) Math.hypot(cx, cy);

            // create the animator for this view (the start radius is zero)
            Animator anim = ViewAnimationUtils.createCircularReveal(iv_show, cx, cy, 0f, finalRadius);

            // make the view visible and start the animation
            iv_show.setVisibility(View.VISIBLE);
            anim.setDuration(2000);
            anim.start();
        } else {
            // set the view to invisible without a circular reveal animation below Lollipop
            iv_show.setVisibility(View.INVISIBLE);
        }

    }
}
