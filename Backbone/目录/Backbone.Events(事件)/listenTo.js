define([ "backbone" ], function (Backbone) {
    var Book = Backbone.Model.extend({});

    var BookView = Backbone.View.extend({
        render:function(){
            console.log("这里处理视图更新");
        }
    });

    var object = new Book({
        title: "haha",
        author: "Mrxie"
    });

    var object_view = new BookView();

    /**
     * listenTo 是 Backbone.View 特有的方法
     * 让 object 监听 另一个（other）对象上的一个特定事件。不使用other.on(event, callback, object)，而使用这种形式的优点是：listenTo允许 object来跟踪这个特定事件，并且以后可以一次性全部移除它们。callback总是在object上下文环境中被调用。
     * 理念： 视图层监听模型层的变化，如果发生变化主动更新视图层，展示结果给用户
     * 可以定义多个相同的事件 都会触发 原理如下
     * BackBone 定义的事件都会 放入一个事件数组进行处理 events.push({callback: callback, context: context, ctx: context || this});
     */
    object_view.listenTo(object, 'change', object_view.render);
    //object_view.listenTo(object, 'change', object_view.render);

    /**
     * object.stopListening([other], [event], [callback])
     * 让 object 停止监听事件。如果调用不带参数的stopListening，可以移除 object 下所有已经registered(注册)的callback函数...，或者只删除指定对象上明确告知的监听事件，或者一个删除指定事件，或者只删除指定的回调函数。
     */
    //object_view.stopListening();
    //object_view.stopListening(object);
    //object_view.stopListening(object,"change");

    /**
     *  object.listenToOnce(other, event, callback)
     *  用法跟 listenTo 很像，但是事件触发一次后callback将被移除
     */
    //object_view.listenToOnce(object, 'change', object_view.render);

    $("#n1").click(function () {
        /**
         * 模型改变会触发视图层的变化
         */
        object.set("title",Math.random(10));//这里处理视图更新
    });
});