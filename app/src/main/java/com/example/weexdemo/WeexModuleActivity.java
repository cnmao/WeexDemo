package com.example.weexdemo;

import android.os.Bundle;
import android.os.PersistableBundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRenderStrategy;
import com.taobao.weex.utils.WXFileUtils;

/**
 * 问题 1 ： 为什么在第一个onCreate方法中 setContextView 方法不起作用
 * <p>
 * <p>
 * 关于Module的使用：
 * 1：正常的使用 通过JS调用这边的执行方法
 * 2：这边的执行调用weex里边的数据进行显示 比如 输入2 然后weex内数据进行+1 做操作3
 * 3：JS 输入，这边进行调用并且做加法 然后返回数据在js显示 （用于测试是非为 uiThread :因为相当于异步 ，所以为false）
 * 4：streamModule的输入实现，另分析线程池的局限性，和 lruCache的问题
 * <p>
 * 5：Component的概念，实现，代码流程，应用。
 * <p>
 * 概念：
 * Module ---> 非UI的特定功能，例如 sendHttp、openURL 等
 */
public class WeexModuleActivity extends AppCompatActivity implements IWXRenderListener {

    private View bt_show;
    private FrameLayout mContainer;

    private WXSDKInstance mWXSDKInstance;

//    @Override
//    public void onCreate(@Nullable Bundle savedInstanceState, @Nullable PersistableBundle persistentState) {
//        super.onCreate(savedInstanceState, persistentState);
//    }

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_weexmodule);
        initView();
        initWeex();
        initClick();
    }

    private void initWeex() {
        mWXSDKInstance = new WXSDKInstance(this);
        mWXSDKInstance.registerRenderListener(this);
        mContainer = findViewById(R.id.container);
    }

    private void initClick() {
        bt_show.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                mWXSDKInstance.render("WXSample", WXFileUtils.loadAsset("indexA.js", WeexModuleActivity.this), null, null, WXRenderStrategy.APPEND_ONCE);
            }
        });
    }

    private void initView() {
        bt_show = findViewById(R.id.bt_show);
    }

    //------------------------------------------------------------WEEX加载回调-------------------------------------------------------

    @Override
    public void onViewCreated(WXSDKInstance instance, View view) {
        if (view.getParent() != null) {
            ((ViewGroup) view.getParent()).removeView(view);
        }
        mContainer.addView(view);//加载成功拿的是一个view，最后填充到视图中
    }

    @Override
    public void onRenderSuccess(WXSDKInstance instance, int width, int height) {

    }

    @Override
    public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {

    }

    @Override
    public void onException(WXSDKInstance instance, String errCode, String msg) {

    }

    @Override
    public void onResume() {
        super.onResume();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityResume();
        }
    }

    @Override
    public void onPause() {
        super.onPause();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityPause();
        }
    }

    @Override
    public void onStop() {
        super.onStop();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityStop();
        }
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityDestroy();
        }
    }

}
