# WeexDemo
this is demo for week to imporve the performance

企鹅电竞
	https://www.cnblogs.com/wetest/p/10324926.html
Weex 官网
	https://weex.apache.org/zh/guide/introduction.html#%E6%A6%82%E8%BF%B0
个人博客
  https://zhuanlan.zhihu.com/p/26625249
 苏宁
  https://www.infoq.cn/article/weex-in-suning-mobile-officing-practice

深入探究Glide的缓存机制
	http://www.10tiao.com/html/227/201705/2650239697/1.html
GlideModule使用
	https://www.jianshu.com/p/156b8b742155
  
Native 性能稳定性极致优化
		https://yq.aliyun.com/articles/69005
    
硬件加速
		setLayerType(View.LAYER_TYPE_HARDWARE, null);

网络304
		https://www.infoq.cn/article/weex-in-suning-mobile-officing-practice

Module 与 Component的作用：
        https://tech.youzan.com/youzan-weex-framework-introduction/
        可以通过自定义 Module 来调用 native的能力（选择照片或者拍照），通过自定义 component 来使用 native 的组件（已经通过native实现，或者是不能使用Weex实现）；
        

#OkHttp
    源码解析：
    https://yq.aliyun.com/articles/78104?spm=a2c4e.11153940.blogcont78105.12.58ec5d13BSKUf4

    类的组成中有变量：每个变量都有其意义，例如： runningAsyncCalls readyAsyncCalls
    
与常利兵沟通，在token过期过程实现过程中，后台会走两次请求： 
    https://my.oschina.net/wupeilin/blog/1529637
        YES：  /net/TokenInterceptor 
        No:    /utils/TokenInterceptor 
        
    chain 链
    OkHttp拦截器的链式执行逻辑
    
    Cache 日志：
     libcore.io.DiskLruCache
          1
          100
          2
     
          CLEAN 3400330d1dfc7f3f7f4b8d4d803dfcf6 832 21054
          DIRTY 335c4c6028171cfddfbaae1a9c313c52
          CLEAN 335c4c6028171cfddfbaae1a9c313c52 3934 2342
          REMOVE 335c4c6028171cfddfbaae1a9c313c52
          DIRTY 1ab96a171faeeee38496d8b330771a7a
          CLEAN 1ab96a171faeeee38496d8b330771a7a 1600 234
          READ 335c4c6028171cfddfbaae1a9c313c52
          READ 3400330d1dfc7f3f7f4b8d4d803dfcf6
         
         前5行固定不变，分别为：常量：libcore.io.DiskLruCache；diskCache版本；应用程序版本；valueCount(后文介绍)，空行
         
         接下来每一行对应一个cache entry的一次状态记录，其格式为：[状态（DIRTY,CLEAN,READ,REMOVE），key，状态相关value(可选)]:
         - DIRTY:表明一个cache entry正在被创建或更新，每一个成功的DIRTY记录都应该对应一个CLEAN或REMOVE操作。如果一个DIRTY缺少预期匹配的CLEAN/REMOVE，则对应entry操作失败，需要将其从lruEntries中删除
         - CLEAN:说明cache已经被成功操作，当前可以被正常读取。每一个CLEAN行还需要记录其每一个value的长度
         - READ: 记录一次cache读取操作
         - REMOVE:记录一次cache清除
#END