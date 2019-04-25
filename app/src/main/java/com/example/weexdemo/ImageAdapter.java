package com.example.weexdemo;


import android.widget.ImageView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.engine.DiskCacheStrategy;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.adapter.IWXImgLoaderAdapter;
import com.taobao.weex.common.WXImageStrategy;
import com.taobao.weex.dom.WXImageQuality;


/**
 * Created by Administrator on 2017/11/8 0008.
 */

public class ImageAdapter implements IWXImgLoaderAdapter {
    @Override
    public void setImage(String url, ImageView view, WXImageQuality quality, WXImageStrategy strategy) {

        Glide.with(WXEnvironment.getApplication()).load(url).into(view);
//        Glide.with(WXEnvironment.getApplication()).load(url).skipMemoryCache(false).diskCacheStrategy(DiskCacheStrategy.RESOURCE).into(view);
    }
}
