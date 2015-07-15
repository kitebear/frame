define([ 'backbone' ], function (Backbone) {
    //Models（模型）是任何Javascript应用的核心，包括数据交互及与其相关的大量逻辑： 转换、验证、计算属性和访问控制。你可以用特定的函数扩展
    var Sidebar = Backbone.Model.extend({
        promptColor: function () {
            var cssColor = prompt("Please enter a CSS color:");
            this.set({color: cssColor});
        },
        initialize:function(){
            console.log("初始化函数");
        }
    });

    //不加()也是创建一个实体对象
    var sidebar = new Sidebar({
        color: "dasd",
        promptColor: function(){
            console.log("子类对象函数");
        },
        initialize:function(){
            console.log("初始化函数");
        }
    });

    /**
     * 回到函数 第一个参数是model 第二个参数是函数的参数
     */
    sidebar.on('change:color', function (color) {
        console.log("执行属性改变函数");
    });

    //sidebar.set({color: 'white'});

    /**
     * 如果传入silent:true 将不触发改变属性回调函数
     *
     */
    sidebar.set({color: 'white'},{silent:true});

    $("#n1").click(function () {
        /**
         * 使用子类对象函数
         * 从当前model中获取当前属性(attributes)值，比如： note.get("title")
         */
        //sidebar.attributes.promptColor();
        //sidebar.get("promptColor")();
        sidebar.promptColor();
    });
});