package com.example.weexdemo;

import android.Manifest;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.ActivityCompat;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Toast;

import org.xutils.ex.DbException;

public class SplashActivity extends AppCompatActivity {

    private View viewById;
    private View buttondelete;
    private View glidedemo;

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
    }

    private void initView() {
        viewById = findViewById(R.id.button);
        buttondelete = findViewById(R.id.buttondelete);
        glidedemo = findViewById(R.id.glidedemo);
    }


}
