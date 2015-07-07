# frame
框架详情
##thwen 是一款轻量级原生框架
目前提供一个方法\<br> 
 ele 元素对象\<br> 
 obj 操作\<br> 
 duration 时间\<br> 
 effect 缓动选择\<br> 
 \<br> 
thwenMove(option)
\<br> 
框架支持以下缓动策略
\<br> 
-指数衰减的正弦曲线缓动\<br> 
-圆形曲线的缓动\<br> 
-超过范围的三次方缓动\<br> 
-指数衰减的反弹缓动\<br> 
-正弦曲线的缓动\<br> 
-5次方的缓动\<br> 
-四次方的缓动\<br> 
-三次方的缓动\<br> 
-二次方的缓动\<br> 
-当前时间*变化量/持续时间+初始值\<br> 

事例
 window.thwenMove({
     ele: document.querySelector(".v1"),
     obj: {"left": 450, "opacity": 1},
     duration: 300 * 1.5,
     effect: [ 'Quint', 'easeInOut' ]
  });
  它会向右easeInOut的速度移动
  
