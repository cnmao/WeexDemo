package com.example;

import android.os.Environment;

import org.xutils.DbManager;

import java.io.File;

public class XUtil {
    static DbManager.DaoConfig daoConfig;

    public static DbManager.DaoConfig getDaoConfig() {

        if (daoConfig == null) {
            daoConfig = new DbManager.DaoConfig()
                    .setDbName("weexcache.db")
                    .setDbVersion(1)
                    .setAllowTransaction(true)
                    .setDbUpgradeListener(new DbManager.DbUpgradeListener() {
                        @Override
                        public void onUpgrade(DbManager db, int oldVersion, int newVersion) {

                        }
                    });
        }
        return daoConfig;
    }
}