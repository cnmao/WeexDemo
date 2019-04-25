package com.example.weexdemo;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.FrameLayout;

import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRenderStrategy;

public class MainActivity extends AppCompatActivity implements IWXRenderListener {

    private FrameLayout mContainer;
    private Button bt_reload;
    private WXSDKInstance mWXSDKInstance;
    private static String weexurl = "http://weex-server.wawscm.com:63808" + "/assets/compiles/index.js";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mWXSDKInstance = new WXSDKInstance(this);
        mWXSDKInstance.registerRenderListener(this);

        initView();

    }

    private void initView() {
        mContainer = findViewById(R.id.container);
        bt_reload = (Button) findViewById(R.id.bt_reload);
        mWXSDKInstance.renderByUrl("WXSample", weexurl, null, null, WXRenderStrategy.APPEND_ASYNC);
        bt_reload.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                mWXSDKInstance.renderByUrl("WXSample", weexurl, null, null, WXRenderStrategy.APPEND_ASYNC);

            }
        });
    }

    //-------------------------------------------------------------------Weex监听回调-----------------------------------------

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
