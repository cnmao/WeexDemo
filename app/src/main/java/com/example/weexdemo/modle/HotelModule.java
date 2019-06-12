package com.example.weexdemo.modle;

import android.widget.Toast;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.common.WXModule;

/**
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
public class HotelModule extends WXModule {

    @JSMethod(uiThread = true)
    public void getPlusValue(int x) {
        Toast.makeText(mWXSDKInstance.getContext(), "传递过来的值为：" + x, Toast.LENGTH_SHORT).show();
    }
}
