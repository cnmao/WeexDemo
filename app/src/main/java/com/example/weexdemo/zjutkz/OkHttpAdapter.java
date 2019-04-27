package com.example.weexdemo.zjutkz;

import android.text.TextUtils;
import android.util.Log;

import com.example.weexdemo.MyApplication;
import com.example.weexdemo.WeexCacheBean;
import com.example.weexdemo.zjutkz.progress.IncrementaRequestBody;
import com.example.weexdemo.zjutkz.progress.IncrementalResponseBody;
import com.example.weexdemo.zjutkz.progress.listener.RequestListener;
import com.example.weexdemo.zjutkz.progress.listener.ResponseListener;
import com.example.weexdemo.zjutkz.utils.Assert;
import com.taobao.weex.adapter.IWXHttpAdapter;
import com.taobao.weex.common.WXRequest;
import com.taobao.weex.common.WXResponse;

import org.xutils.DbManager;
import org.xutils.ex.DbException;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.Headers;
import okhttp3.Interceptor;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

/**
 * Created by kangzhe on 16/9/22.
 */
public class OkHttpAdapter implements IWXHttpAdapter {

    private static final String METHOD_GET = "GET";
    private static final String METHOD_POST = "POST";

    public static final int REQUEST_FAILURE = -100;


    @Override
    public void sendRequest(final WXRequest request, final OnHttpListener listener) {
        if (listener != null) {
            listener.onHttpStart();
        }

        RequestListener requestListener = new RequestListener() {
            @Override
            public void onRequest(long consumed, long total, boolean done) {
                if (Assert.checkNull(listener)) {
                    listener.onHttpUploadProgress((int) (consumed));
                }
            }
        };

        final ResponseListener responseListener = new ResponseListener() {
            @Override
            public void onResponse(long consumed, long total, boolean done) {
                if (Assert.checkNull(listener)) {
                    listener.onHttpResponseProgress((int) (consumed));
                }
            }
        };

        OkHttpClient client = new OkHttpClient.Builder()
                .addInterceptor(new Interceptor() {
                    @Override
                    public Response intercept(Chain chain) throws IOException {
                        Response originalResponse = chain.proceed(chain.request());
                        return originalResponse.newBuilder()
                                .body(new IncrementalResponseBody(originalResponse.body(), responseListener))
                                .build();
                    }
                })
                .build();
        Request okHttpRequest;

        if (METHOD_GET.equalsIgnoreCase(request.method)) {
            okHttpRequest = new Request.Builder()
                    .headers(AddHeaders(request, listener))
                    .url(request.url)
                    .get()
                    .build();
        } else if (METHOD_POST.equalsIgnoreCase(request.method)) {
            okHttpRequest = new Request.Builder()
                    .headers(AddHeaders(request))
                    .url(request.url)
                    .post(new IncrementaRequestBody(RequestBody.create(MediaType.parse(request.body), request.body), requestListener))
                    .build();
        } else if (!TextUtils.isEmpty(request.method)) {
            okHttpRequest = new Request.Builder()
                    .headers(AddHeaders(request))
                    .url(request.url)
                    .method(request.method, new IncrementaRequestBody(RequestBody.create(MediaType.parse(request.body), request.body), requestListener))
                    .build();
        } else {
            okHttpRequest = new Request.Builder()
                    .headers(AddHeaders(request, listener))
                    .get()
                    .url(request.url)
                    .build();
        }
        client.newCall(okHttpRequest).enqueue(CommonCallBack(listener ,request.url));
    }

    private boolean requestSuccess(int statusCode) {
        return statusCode >= 200 && statusCode <= 299 || statusCode == 304;
    }

    private Headers AddHeaders(WXRequest request) {
        String url = request.url;
        WeexCacheBean query = query(url);
        HashMap<String, String> map = new HashMap<>();
        if (query != null) {
            map.put("If-Modified-Since", query.getModified());
            map.put("f-None-Match", query.getETag());
        }
        if (map != null && map.size() > 0) {
            request.paramMap.putAll(map);
            map.clear();
        }

        Headers.Builder builder = new Headers.Builder();
        if (request.paramMap != null) {
            Set<String> keySets = request.paramMap.keySet();
            for (String key : keySets) {
                builder.add(key, request.paramMap.get(key));
            }
        }
        return builder.build();
    }


    private Headers AddHeaders(WXRequest request, OnHttpListener listener) {
        String url = request.url;
        WeexCacheBean query = query(url);
        HashMap<String, String> map = new HashMap<>();
        if (query != null) {
            WXResponse wxResponse = new WXResponse();
            wxResponse.statusCode = "200";

            wxResponse.originalData = query.originalData;
            listener.onHttpFinish(wxResponse);
            map.put("If-Modified-Since", query.getModified());
            map.put("f-None-Match", query.getETag());
        }
        if (map != null && map.size() > 0) {
            request.paramMap.putAll(map);
            map.clear();
        }

        Headers.Builder builder = new Headers.Builder();
        if (request.paramMap != null) {
            Set<String> keySets = request.paramMap.keySet();
            for (String key : keySets) {
                builder.add(key, request.paramMap.get(key));
            }
        }
        return builder.build();
    }

    private Callback CommonCallBack(final OnHttpListener listener, final String url) {
        return new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                if (Assert.checkNull(listener)) {
                    WXResponse wxResponse = new WXResponse();
                    wxResponse.errorCode = String.valueOf(REQUEST_FAILURE);
                    wxResponse.statusCode = String.valueOf(REQUEST_FAILURE);
                    wxResponse.errorMsg = e.getMessage();
                    wxResponse.statusCode = "200";
                    String s = url;
                    WeexCacheBean query = query(s);
                    if (null != query) {
                        wxResponse.originalData = query.originalData;
                        Log.e("local", "读取本地以url为：" + s + "的内容！");
                        listener.onHttpFinish(wxResponse);
                    }
                }
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                if (Assert.checkNull(listener)) {

                    WXResponse wxResponse = new WXResponse();
                    wxResponse.statusCode = String.valueOf(response.code());

                    if (requestSuccess(Integer.parseInt(wxResponse.statusCode))) {
                        if (Integer.parseInt(wxResponse.statusCode) == 304) {
                            //
                            wxResponse.statusCode = "200";
                            wxResponse.originalData = response.body().bytes();

//                            byte[] bytes = response.body().bytes();
//                            String s1 = new String(bytes);

                            String s = response.request().url().toString();
                            WeexCacheBean query = query(s);
                            if (null != query) {
                                wxResponse.originalData = query.originalData;
                                Log.e("local", "读取本地以url为：" + s + "的内容！");
                            }
                        } else {
                            wxResponse.originalData = response.body().bytes();
                            listener.onHttpFinish(wxResponse);
                            String url = response.request().url().toString();
                            String eTag = response.header("ETag");
                            String lastModified = response.header("Last-Modified");


                            //TODO 注意 1：url 为post提交时 ，2：注意没保存完或者是保存失败， 容易下次经常这样 3：数据库变大后 ~ 无法快速查询！
                            save(url, eTag, lastModified, wxResponse.originalData);
                        }
                    } else {
                        wxResponse.errorCode = String.valueOf(response.code());
                        wxResponse.errorMsg = response.body().string();
                    }

                }
            }
        };
    }

    /**
     * 实现数据库的存储
     */
    public void save(String url, String ETag, String Modified, byte[] originalData) {
        //获取数据库管理器
        DbManager manager = MyApplication.getInstance().getPersonalDB();
        //数据
        WeexCacheBean weexCacheBean = new WeexCacheBean();
        weexCacheBean.setUrl(url);
        weexCacheBean.setETag(ETag);
        weexCacheBean.setModified(Modified);
        weexCacheBean.setOriginalData(originalData);
        try {
            //实现数据的存储,配合User类中的注释才能进行对应的存储
            //表名和列名都是在User中注释决定的。
            manager.saveOrUpdate(weexCacheBean);//保存
            // manager.saveOrUpdate(user);//保存或更新，这如果数据不存在是不会保存的，存在的话会跟新
        } catch (DbException e) {
            e.printStackTrace();
        }

    }

    /**
     * 实现数据库的查询
     */
    public WeexCacheBean query(String url) {
        //查询所有
        //获取管理器
        DbManager dm = MyApplication.getInstance().getPersonalDB();
        try {
            List<WeexCacheBean> all = dm.findAll(WeexCacheBean.class);
            if (all != null && all.size() > 0) {
                for (WeexCacheBean we :
                        all) {
                    if (we.getUrl().equals(url)) {
                        return we;
                    }
                }
            }
        } catch (DbException e) {
            e.printStackTrace();
        }

        return null;
    }
}
