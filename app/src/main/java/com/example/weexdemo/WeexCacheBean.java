package com.example.weexdemo;

import org.xutils.db.annotation.Column;
import org.xutils.db.annotation.Table;

import java.util.Arrays;

@Table(name = "table_weexcache")//
public class WeexCacheBean {

    @Column(name = "id", isId = true, autoGen = true)
    private int id;

    @Column(name = "url")
    private String url;

    @Column(name = "ETag")
    private String ETag;

    @Column(name = "Modified")
    private String Modified;

    @Column(name = "originalData")
    public byte[] originalData;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getETag() {
        return ETag;
    }

    public void setETag(String ETag) {
        this.ETag = ETag;
    }

    public String getModified() {
        return Modified;
    }

    public void setModified(String modified) {
        Modified = modified;
    }

    public byte[] getOriginalData() {
        return originalData;
    }

    public void setOriginalData(byte[] originalData) {
        this.originalData = originalData;
    }

    @Override
    public String toString() {
        return "WeexCacheBean{" +
                "id=" + id +
                ", url='" + url + '\'' +
                ", ETag='" + ETag + '\'' +
                ", Modified='" + Modified + '\'' +
                ", originalData=" + Arrays.toString(originalData) +
                '}';
    }
}
