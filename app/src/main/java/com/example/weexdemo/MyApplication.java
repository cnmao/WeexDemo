package com.example.weexdemo;

import android.app.Application;

import com.example.XUtil;
import com.example.weexdemo.modle.HotelModule;
import com.example.weexdemo.zjutkz.OkHttpAdapter;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;

import org.xutils.DbManager;
import org.xutils.x;

public class MyApplication extends Application {
    private static MyApplication instance;
    private DbManager dbManager;

    public static MyApplication getInstance() {
        return instance;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        instance = this;
//        SHImageView.init(this, null);
        /**
         * WEEX配置
         *         InitConfig config = new InitConfig.Builder().setImgAdapter(new FrescoImageAdapter()).setHttpAdapter(new OkHttpAdapter()).build();
         */
        InitConfig config = new InitConfig.Builder().setImgAdapter(new ImageAdapter()).setHttpAdapter(new OkHttpAdapter()).build();
        try {
            WXSDKEngine.registerModule("event", HotelModule.class);//交互用 后面说
            WXSDKEngine.registerComponent("show-web-view", WeexWebView.class);
        } catch (WXException e) {
            e.printStackTrace();
        }

        WXSDKEngine.initialize(this, config);

        x.Ext.init(this);

    }

    public DbManager getDbManager() {
        DbManager.DaoConfig daoConfig = XUtil.getDaoConfig();
        return x.getDb(daoConfig);
    }

    public DbManager getPersonalDB() {
        return getDbManager();
    }
}
