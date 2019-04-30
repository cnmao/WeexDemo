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

#Glide 

    ModeLoader使用场景GoogleDemo :  https://github.com/sjudd/Base64ModelLoaderExample
    I/O 团队编写了大量有用的博客文章，包括一篇图片加载 : https://github.com/google/iosched
    
    Glide.with(WXEnvironment.getApplication())
    初始化Glide 获取 1：RequestManagerRetriever
                        2：RequestManager
        .load(url)
                获取 RequestBuilder 对象 
                
郭霖的Glide源码分析：
    https://blog.csdn.net/guolin_blog/article/details/53759439
    
    Glide.with(this)
     .load(url) // 包括加载网络上的图片、加载手机本地的图片、加载应用资源中的图片等等
      .asGif() // 只允许加载Gif  asBitmap() 只允许加载图片
       .placeholder(R.drawable.loading) //占位图
        .error(R.drawable.error) // 出现错误占位图
         .diskCacheStrategy(DiskCacheStrategy.NONE ) // 不读取缓存
           .override(100, 100) //Glide现在只会将图片加载成100*100像素的尺寸，而不会管你的ImageView的大小是多少了
          .into(imageView); 
          
  什么叫内存浪费呢？比如说一张图片的尺寸是1000*1000像素，但是我们界面上的ImageView可能只有200*200像素
  
  into:
  	
  Recursive  递归   buildRequestRecursive
  
  buildRequestRecursive 初始化一个request 对象 （属于SinglinRequest）
  
  Coordinator   协调员 (构建request的协调员 对象)
  
  Equivalent   当量 （当通过上述构建出来request对象后， 需要和之前的request对象相比较如果是雷同（相同挡脸）
  			直接返回当前request ， 不是则：
  				requestManager.clear(target);  （清除这个target（view）的重属请求信息）
  				target.setRequest(request); （设置 buildRequestRecursive 协调出来的新的请求）
  				requestManager.track(target, request);）
  
  Tracker    跟踪器    （请求管理者 添加此次一组对象（target 和 request） ）
  
  
  target 的生成：
  return into(
          glideContext.buildImageViewTarget(view, transcodeClass),
          /*targetListener=*/ null,
          requestOptions,
          Executors.mainThreadExecutor());
  
  	  @NonNull
  	  public <X> ViewTarget<ImageView, X> buildImageViewTarget(
  	      @NonNull ImageView imageView, @NonNull Class<X> transcodeClass) {
  	    return imageViewTargetFactory.buildTarget(imageView, transcodeClass);   (工厂类根据不同target传入class对象，制作出相应
  											target对象：
  											BitmapImageViewTarget 
  											DrawableImageViewTarget)
  	  }
  	
  thumbnail  缩略图  当构造request时有可能出现没有缩略图的情况，因此需要 obtainRequest （ SingleRequest.obtain）
  
  	为什么在G 4 中找不到 GenericRequestBuilder ， 因为上边的obtainRequest 在3.7的时候是调用 GenericRequest的obtain()方法
  
  
  pengdingRequest  垂直
  tracking  跟踪
  
  RequestBuilder --> RequestManager --> RequestTracker
  
   synchronized void track(@NonNull Target<?> target, @NonNull Request request) {
      targetTracker.track(target);
      requestTracker.runRequest(request);
    }
  就是先判断Glide当前是不是处理暂停状态，如果不是暂停状态就调用Request的begin()方法来执行Request，
  				否则的话就先将Request添加到待执行队列里面，等暂停状态解除了之后再执行
  
  RequestTracker类 runRequest方法    Starts tracking the given request.解释	
  
  /**
   * Starts tracking the given request.
   */
  public void runRequest(Request request) {
      requests.add(request);
      if (!isPaused) {
          request.begin();   Assignable 可转让的  onLoadFailed  onResourceReady  onSizeReady  onLoadStarted
      } else {
          pendingRequests.add(request);
      }
  }
  
  onSizeReady  
  	Loader
  	 engine.load()
  
   engineJob.addCallback(cb, callbackExecutor); 
    engineJob.start(decodeJob);
  	 Executors（cb） 遗嘱执行人   cbs.add(cb, callbackExecutor);
  	  callbackExecutor 执行回调
  
  class DecodeJob<R> implements DataFetcherGenerator.FetcherReadyCallback,
      Runnable,
      Comparable<DecodeJob<?>>,
      Poolable {
      	显然DecodeJob是一个Runnable对象，最终执行之后，都是触发DecodeJob的run方法
  
  关于DecodeJob 和 EncodeJob : 4.0 版本源码解析
  	https://blog.csdn.net/nbsp22/article/details/80666341
  Generator	发电机
  	DecodeJob的run方法，会依次从ResourceCacheGenerator->DataCacheGenerator->SourceGenerator这样一个链执行
  	

Retriever 猎犬
Preconditions 先觉条件
Transformation 变换
retrieved  恢复

#WEEX  
Demo
    https://github.com/liuzhao2007/WeexList
源码解析
    https://www.jianshu.com/p/8e85ef17381f
    
        今天看了很多头条祁同伟的文章，受益良多，感触颇深。
        对框架明了，文章叙述清晰，灿灿到来。
                                            --记 2019年04月30日

#性能优化
https://www.jianshu.com/p/7eb182df06d3
    
        还没有看完，不过已经被作者震撼到了。
        官方文档（英文要过关）
                                             --记 2019年04月30日
#BUG         
ViewHolder.itemView' on a null object reference

okhttp
glide
dagger2
buttferkenife
gson
view animation
jni
aidl
ndk devoloper

#END        