package com.example.weexdemo.callback;

import android.util.Log;

public class CallBackManager {
    public static void registerModule() {

        CallBackBridgeManager.getInstance().post(new Runnable() {
            @Override
            public void run() {
                Log.e("CALLBACK", "执行1");

            }
        });
    }
}
