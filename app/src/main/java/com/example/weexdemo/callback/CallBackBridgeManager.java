package com.example.weexdemo.callback;

import android.os.Handler;
import android.os.Message;
import android.util.Log;

public class CallBackBridgeManager implements Exector, Handler.Callback {
    static volatile CallBackBridgeManager mBridgeManager;

    public static CallBackBridgeManager getInstance() {
        if (mBridgeManager == null) {
            synchronized (CallBackBridgeManager.class) {
                if (mBridgeManager == null) {
                    mBridgeManager = new CallBackBridgeManager();
                }
            }
        }
        return mBridgeManager;
    }

    private Handler handler = new Handler();

    @Override
    public void post(Runnable runnable) {
        Log.e("CALLBACK", "handler发送消息");
        handler.post(runnable);
    }

    @Override
    public boolean handleMessage(Message message) {
        Log.e("CALLBACK", "handler处理消息 handleMessage");
        return false;
    }
}
