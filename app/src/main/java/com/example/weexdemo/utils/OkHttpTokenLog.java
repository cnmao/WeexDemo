package com.example.weexdemo.utils;

import android.util.Log;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.nio.charset.Charset;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.Interceptor;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;
import okio.Buffer;
import okio.BufferedSource;

import static com.alibaba.fastjson.util.IOUtils.UTF8;

public class OkHttpTokenLog {
    public void get() {
        OkHttpClient.Builder builder = new OkHttpClient.Builder();
        builder.addInterceptor(new Interceptor() {
                                   @Override
                                   public Response intercept(Chain chain) throws IOException {
                                       Request request = chain.request();
                                       Response originalResponse = chain.proceed(request);
                                       ResponseBody body = originalResponse.body();
                                       byte[] bytes = body.bytes();
                                       String responseJson = new String(bytes);

                                       int code = originalResponse.code();
                                       if (code == 50008) {
                                           doLogin();
                                           return null; //
                                       } else {
                                           request.newBuilder().addHeader("token", "abc").build();
                                           return chain.proceed(request);
                                       }
                                   }
                               }
        );
    }

    private void doLogin() {
        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder()
                .url("http://publicobject.com/helloworld.txt")
                .build();

        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                Log.d("OkHttp", "Call Failed:" + e.getMessage());
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                Log.d("OkHttp", "Call succeeded:" + response.message());
            }
        });

    }

}
