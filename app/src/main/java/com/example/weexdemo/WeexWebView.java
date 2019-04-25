package com.example.weexdemo;


import android.content.Context;
import android.support.annotation.NonNull;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXComponentProp;
import com.taobao.weex.ui.component.WXVContainer;


public class WeexWebView extends WXComponent<WebView> {

    public WeexWebView(WXSDKInstance instance, WXDomObject dom, WXVContainer parent) {
        super(instance, dom, parent);
    }

    @Override
    protected WebView initComponentHostView(@NonNull Context context) {
        WebView webView = new WebView(context);
        webView.getSettings().setDomStorageEnabled(true);
        webView.getSettings().setUserAgentString("Android_N");
        webView.getSettings().setUseWideViewPort(true);
        webView.getSettings().setLoadWithOverviewMode(true);
        WebSettings webSettings = webView.getSettings();//获取webview设置属性
        webSettings.setLayoutAlgorithm(WebSettings.LayoutAlgorithm.SINGLE_COLUMN);//把html中的内容放大webview等宽的一列中
        webSettings.setJavaScriptEnabled(true);//支持js
        webView.setWebChromeClient(new WebChromeClient());
        return webView;
    }

    @WXComponentProp(name = "html")
    public void setTel(String content) {
        getHostView().loadData(content, "text/html; charset=UTF-8", "");
    }

}
