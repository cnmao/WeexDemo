package com.example.weexdemo;

import android.Manifest;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.ActivityCompat;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Toast;

import com.example.weexdemo.callback.CallBackManager;
import com.example.weexdemo.gson.GsonDemo;
import com.google.gson.Gson;

import org.json.JSONException;
import org.json.JSONObject;
import org.xutils.ex.DbException;

public class SplashActivity extends AppCompatActivity {

    private View viewById;
    private View buttondelete;
    private View glidedemo;
    private View callbackdemo;
    private View weexmodule;
    private View animation;
    private View gson;

    private String jsonStr = "{\n" +
            "    \"dog\":{\n" +
            "        \"name\":\"Rufus\",\n" +
            "        \"age\":\n" +
            "    }\n" +
            "}";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);
        initView();

        initClick();

        initPromission();

    }

    private void initPromission() {
        ActivityCompat.requestPermissions(SplashActivity.this,
                new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE, Manifest.permission.READ_EXTERNAL_STORAGE}, 100);
    }

    private void initClick() {
        viewById.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(SplashActivity.this, MainActivity.class);
                startActivity(intent);
            }
        });

        buttondelete.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                try {
                    MyApplication.getInstance().getDbManager().dropDb();
                } catch (DbException e) {
                    e.printStackTrace();
                    String message = e.getMessage();
                    Toast.makeText(SplashActivity.this, "删除数据库发生异常：" + message, Toast.LENGTH_SHORT).show();
                }
            }
        });

        glidedemo.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(SplashActivity.this, GlideDemoActivity.class);
                startActivity(intent);
            }
        });

        callbackdemo.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                CallBackManager.registerModule();
            }
        });

        weexmodule.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(SplashActivity.this, WeexModuleActivity.class);
                startActivity(intent);
            }
        });

        gson.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                try {
                    JSONObject jsonObject = new JSONObject(jsonStr);
                    JSONObject dog = jsonObject.getJSONObject("dog");
                    String name = dog.getString("age");
                    Toast.makeText(SplashActivity.this, name, Toast.LENGTH_SHORT).show();
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                Gson gson = new Gson();
                GsonDemo gsonDemo = gson.fromJson(jsonStr, GsonDemo.class);
                String name = gsonDemo.dog.name;
                Toast.makeText(SplashActivity.this, name, Toast.LENGTH_SHORT).show();
            }
        });

        animation.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(SplashActivity.this, AnimationActivity.class);
                startActivity(intent);
            }
        });
    }

    private void initView() {
        viewById = findViewById(R.id.button);
        buttondelete = findViewById(R.id.buttondelete);
        glidedemo = findViewById(R.id.glidedemo);
        callbackdemo = findViewById(R.id.callbackdemo);
        weexmodule = findViewById(R.id.weexmodule);
        gson = findViewById(R.id.gson);
        animation = findViewById(R.id.animation);
    }


}
