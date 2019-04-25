package com.example;

import android.content.Context;
import android.os.Environment;
import android.support.annotation.NonNull;

import com.bumptech.glide.Glide;
import com.bumptech.glide.GlideBuilder;
import com.bumptech.glide.Registry;
import com.bumptech.glide.integration.okhttp3.OkHttpUrlLoader;
import com.bumptech.glide.load.model.GlideUrl;
import com.bumptech.glide.module.GlideModule;

import java.io.File;
import java.io.InputStream;

import okhttp3.Cache;
import okhttp3.OkHttpClient;

public class CustomOkHttpGlideModule implements GlideModule {
    @Override
    public void applyOptions(@NonNull Context context, @NonNull GlideBuilder builder) {

    }

    @Override
    public void registerComponents(@NonNull Context context, @NonNull Glide glide, @NonNull Registry registry) {
        if (Environment.getExternalStorageState().equals(Environment.MEDIA_MOUNTED)) {
            //SD卡已装入
        }

        String path = Environment.getExternalStorageDirectory().getPath();
        File file = new File(path);
        //设置最大的缓存大小
        Cache cache = new Cache(file, 1024 * 1024 * 20);
        OkHttpClient.Builder builder = new OkHttpClient.Builder().cache(cache);
        registry.replace(GlideUrl.class, InputStream.class, new OkHttpUrlLoader.Factory(builder.build()));
    }
}
