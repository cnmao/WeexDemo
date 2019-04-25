package com.example;

import android.content.Context;
import android.os.Environment;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

/**
 * 类描述：FileUtil
 *
 * @author hexiaoming
 */
public class FileUtil {

    public static File updateDir = null;
    public static File updateFile = null;
    /*********** 保存升级APK的目录 ***********/
    public static final String KonkaApplication = "wawscm";

    public static boolean isCreateFileSucess;

    /**
     * 方法描述：createFile方法
     *
     * @param context
     * @return
     * @see FileUtil
     */
    public static void createFile(Context context, String app_name) {
        String sdCardstr=getExternalSdCardPath();
        if (null!=sdCardstr) {
            isCreateFileSucess = true;
            updateDir = new File(sdCardstr+ "/" + KonkaApplication +"/");
            updateFile = new File(updateDir + "/" + app_name + ".apk");
            if (!updateDir.exists()) {
                updateDir.mkdirs();
            }
            if (!updateFile.exists()) {
                try {
                    updateFile.createNewFile();
                } catch (IOException e) {
                    isCreateFileSucess = false;
                    e.printStackTrace();
                }
            }

        }else{
            isCreateFileSucess = false;
        }

    }


    public static String getThumbDir(Context context, String imageName) {

        String sdCardstr=getExternalSdCardPath();
        if (null==sdCardstr) {
            return null;
        }
        File  thumbDir = new File(sdCardstr + File.separator + KonkaApplication + File.separator + "imageTemp"+ File.separator);
        File   imageFile = new File(thumbDir + File.separator + imageName);

        if (!thumbDir.exists()) {
            thumbDir.mkdirs();
        }
        if (!imageFile.exists()) {
            try {
                imageFile.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
                return  null;
            }
        }

        return imageFile.getAbsolutePath();
    }

    /**
     * 获取扩展SD卡存储目录
     *
     * 如果有外接的SD卡，并且已挂载，则返回这个外置SD卡目录
     * 否则：返回内置SD卡目录
     *
     * @return
     */
    public static String getExternalSdCardPath() {
        if (Environment.MEDIA_MOUNTED.equals(Environment.getExternalStorageState())) {
            File sdCardFile = new File(Environment.getExternalStorageDirectory().getAbsolutePath());
            return sdCardFile.getAbsolutePath();
        }

        String path = null;

        File sdCardFile = null;

        ArrayList<String> devMountList = getDevMountList();

        for (String devMount : devMountList) {
            File file = new File(devMount);

            if (file.isDirectory() && file.canWrite()) {
                path = file.getAbsolutePath();

                String timeStamp = new SimpleDateFormat("ddMMyyyy_HHmmss").format(new Date());
                File testWritable = new File(path, "test_" + timeStamp);

                if (testWritable.mkdirs()) {
                    testWritable.delete();
                } else {
                    path = null;
                }
            }
        }

        if (path != null) {
            sdCardFile = new File(path);
            return sdCardFile.getAbsolutePath();
        }

        return null;
    }
    /**
     * 遍历 "system/etc/vold.fstab” 文件，获取全部的Android的挂载点信息
     *
     * @return
     */
    private static ArrayList<String> getDevMountList() {
        String[] toSearch = readFile("/system/etc/vold.fstab").split(" ");
        ArrayList<String> out = new ArrayList<String>();
        for (int i = 0; i < toSearch.length; i++) {
            if (toSearch[i].contains("dev_mount")) {
                if (new File(toSearch[i + 2]).exists()) {
                    out.add(toSearch[i + 2]);
                }
            }
        }
        return out;
    }
    /**
     * read file
     *
     * @param filePath

     * @return if file not exist, return null, else return content of file
     * @throws RuntimeException if an error occurs while operator BufferedReader
     */
    public static String readFile(String filePath) {
        String fileContent = "";
        File file = new File(filePath);
        if (file == null || !file.isFile()) {
            return null;
        }

        BufferedReader reader = null;
        try {
            InputStreamReader is = new InputStreamReader(new FileInputStream(file));
            reader = new BufferedReader(is);
            String line = null;
            int i = 0;
            while ((line = reader.readLine()) != null) {
                fileContent += line + " ";
            }
            reader.close();
            return fileContent;
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (reader != null) {
                try {
                    reader.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return fileContent;
    }

    public static void saveFile(Context context ,  String filename, byte[] bytes) {
        FileOutputStream outputStream;
        try {
            outputStream = context.openFileOutput(filename, Context.MODE_PRIVATE);
            outputStream.write(bytes);
            outputStream.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}