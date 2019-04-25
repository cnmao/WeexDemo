package com.example.weexdemo.utils;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

import okhttp3.Interceptor;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class OkHttpTokenLog  {
   public void get(){
       OkHttpClient.Builder builder = new OkHttpClient.Builder();
       builder.addInterceptor(new Interceptor() {
           @Override
           public Response intercept(Chain chain) throws IOException {
               Request request = chain.request();
               Response originalResponse = chain.proceed(request);
               ResponseBody responseBody = originalResponse.body();
               String string = responseBody.string();
               try {
                   JSONObject jsonObject = new JSONObject(string);
                   int code = jsonObject.optInt("code");
                   if (code == 3){
                       //跳转页面
                       doRelogin();
                   }
               } catch (JSONException e) {
                   e.printStackTrace();
               }
               // do something
               return chain.proceed(request);
           }
       }
       );
   }

    private void doRelogin() {

    }
}
