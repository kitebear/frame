# frame
框架详情
thwen 是一款轻量级原生框架
目前提供一个方法
/**
 * ele 元素对象
 * obj 操作
 * duration 时间
 * effect 缓动选择
 * @param option
 */
thwenMove(option)

框架支持以下缓动策略

-指数衰减的正弦曲线缓动
-圆形曲线的缓动
-超过范围的三次方缓动
-指数衰减的反弹缓动
-正弦曲线的缓动
-5次方的缓动
-四次方的缓动
-三次方的缓动
-二次方的缓动
-当前时间*变化量/持续时间+初始值

事例
 window.thwenMove({
     ele: document.querySelector(".v1"),
     obj: {"left": 450, "opacity": 1},
     duration: 300 * 1.5,
     effect: [ 'Quint', 'easeInOut' ]
  });
  它会向右easeInOut的速度移动
  
