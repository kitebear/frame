define([ "backbone" ], function (Backbone) {
    /**
     * Events 是一个可以融合到任何对象的模块, 给予 对象绑定和触发自定义事件的能力. Events 在绑定之前 不需要声明, 并且还可以传递参数
     * 它的事件触发就是一个代理模式
     * 创建一个Model模型
     **/
    var Book = Backbone.Model.extend({});

    /**
     * 下面定义2个实体类
     * @type {Book}
     */
    var object = new Book({
        title: "haha",
        author: "Mrxie",
        initialize: function(){
            console.log("dsadasdsa");
        }
    });

    /**
     * onobject.on(event, callback, [context])别名: bind
     * parameter ( 事件名称，回调方法，上下文对象(this) )
     */
    object.on('change:title', function () {
        console.log(arguments);
        /*
         * 此时 this值===object
         */
        console.log(this);//child {cid: "c1", attributes: Object, _changing: true, _previousAttributes: Object, changed: Object…}
        console.log(object);//child {cid: "c1", attributes: Object, _changing: true, _previousAttributes: Object, changed: Object…}
        console.log(object.get("title"));//dsadas
    });

    /**
     * 用法跟on很像，区别在于绑定的回调函数触发一次后就会被移除
     * 定义事件的名称可以随意起 但是推荐取一个有意义的名字
     */
    //object.once("alert", function (msg) {
    //    alert("Triggered " + msg);
    //});
    //object.once("asdsadas", function (msg) {
    //    alert("Triggered " + msg);
    //});

    // remove object中全部的事件回调
    //object.off();

    $("#n1").click(function () {
        /**
         * 主动触发alert事件 第二个参数为回调参数的参数
         * 可以主动触发 属性变化事件
         */
        //object.trigger("alert", "an event");
        //object.trigger('change:title');

        /**
         * 当修改title值以后  再次修改将不会触发change:title事件
         * 向model设置一个或多个hash属性(attributes)。如果任何一个属性改变了model的状态，在不传入 {silent: true} 选项参数的情况下，会触发 "change" 事件，更改特定属性的事件也会触发。 可以绑定事件到某个属性，例如：change:title，及 change:content。
         */
        object.set("title", 'dsadas');
    });
});