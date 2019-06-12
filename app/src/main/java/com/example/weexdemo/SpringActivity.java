package com.example.weexdemo;

import android.app.Activity;
import android.os.Bundle;
import android.support.animation.DynamicAnimation;
import android.support.animation.SpringAnimation;
import android.support.animation.SpringForce;
import android.support.annotation.Nullable;
import android.widget.ImageView;

import static android.support.animation.SpringForce.DAMPING_RATIO_LOW_BOUNCY;
import static android.support.animation.SpringForce.STIFFNESS_LOW;

public class SpringActivity extends Activity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_spring);
        ImageView iv_spring = (ImageView) findViewById(R.id.iv_spring);
        ImageView iv_spring_t = (ImageView) findViewById(R.id.iv_spring_t);

        // Setting up a spring animation to animate the view’s translationY property with the final
        // spring position at 0.
//        final SpringAnimation springAnim = new SpringAnimation(iv_spring, DynamicAnimation.TRANSLATION_Y, 0);

        final SpringAnimation anim1X = new SpringAnimation(iv_spring,
                DynamicAnimation.TRANSLATION_X);
//        final SpringAnimation anim1Y = new SpringAnimation(iv_spring,
//                DynamicAnimation.TRANSLATION_Y);
//        final SpringAnimation anim2X = new SpringAnimation(iv_spring_t,
//                DynamicAnimation.TRANSLATION_X);
//        final SpringAnimation anim2Y = new SpringAnimation(iv_spring_t,
//                DynamicAnimation.TRANSLATION_Y);

        anim1X.addUpdateListener(new DynamicAnimation.OnAnimationUpdateListener() {
            @Override
            public void onAnimationUpdate(DynamicAnimation animation, float value, float velocity) {
//                anim1X.animateToFinalPosition(value);
            }
        });

//        anim1Y.addUpdateListener(new DynamicAnimation.OnAnimationUpdateListener() {
//            @Override
//            public void onAnimationUpdate(DynamicAnimation animation, float value, float velocity) {
//                anim2Y.animateToFinalPosition(value);
//            }
//        });

        SpringForce force = new SpringForce();
        force.setDampingRatio(DAMPING_RATIO_LOW_BOUNCY).setStiffness(STIFFNESS_LOW);
        anim1X.setSpring(force);
//        anim1X.setMaxValue(10000f);
        anim1X.start();
    }
}
