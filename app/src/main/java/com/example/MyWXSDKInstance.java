package com.example;

import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.text.TextUtils;
import android.util.Log;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRenderStrategy;

import java.io.File;
import java.io.UnsupportedEncodingException;
import java.util.Map;

public class MyWXSDKInstance extends WXSDKInstance {
    private Context context;

    public MyWXSDKInstance(Context context) {
        super(context);
        this.context = context;
    }

    @Override
    public void renderByUrl(String pageName, String url, Map<String, Object> options, String jsonInitData, WXRenderStrategy flag) {

        String local = "";
        if (TextUtils.isEmpty(url) || md5Check(url)) {
            local = getLocalJs();//获取本地JS路径
        }

        if (!TextUtils.isEmpty(local)) {
            super.renderByUrl(pageName, local, options, jsonInitData, flag);
            Log.e("xxx", "local");
        } else {
            super.renderByUrl(pageName, url, options, jsonInitData, flag);
            Log.e("xxx", "net");
        }
    }

    /**
     * 网络返回MD5check 不一致 则直接拿取本地的
     *
     * @param url
     * @return
     */
    private boolean md5Check(String url) {
        String localJsUrl = getLocalJsUrl();
        if (TextUtils.isEmpty(localJsUrl)) {
            return false;
        } else if (localJsUrl.equals(url)) {
            return true;
        }
        return false;
    }

    private String getLocalJsUrl() {
        SharedPreferences sharedPreferences = context.getSharedPreferences("mainpageurl", Context.MODE_PRIVATE);
        //getString()第二个参数为缺省值，如果preference中不存在该key，将返回缺省值
        String localurl = sharedPreferences.getString("localurl", "");
        return localurl;
    }

    /**
     * 获取本地JS路径
     */
    private String getLocalJs() {
        try {
            File f = new File(context.getFilesDir(), "local_js.txt");
            if (f.exists()) {
                return "file://" + f.getAbsolutePath();
            }
        } catch (Exception e) {
        }
        return "";
    }

    @Override
    public void render(String pageName, String template, Map<String, Object> options, String jsonInitData, WXRenderStrategy flag) {
        saveWeexFile(template);
        super.render(pageName, template, options, jsonInitData, flag);
    }

    /**
     * 异步存储JS Bundle
     *
     * @param template
     */
    private void saveWeexFile(final String template) {
        if (isLocalFile(getBundleUrl())) {
            return;
        }
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    byte[] bytes = template.getBytes("UTF-8");
                    FileUtil.saveFile(context, "local_js.txt", bytes);
                } catch (UnsupportedEncodingException e) {
                    e.printStackTrace();
                }
            }
        });
        thread.start();
    }

    /**
     * 判断是本地文件还是网络url
     */
    private boolean isLocalFile(String url) {
        if (TextUtils.isEmpty(url)) {
            return false;
        }
        Uri uri = Uri.parse(url);
        if (uri != null && TextUtils.equals(uri.getScheme(), "file")) {
            return true;
        }
        return false;
    }


}
