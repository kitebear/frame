define([ 'backbone' ], function (Backbone) {
    var Sidebar = Backbone.Model.extend({
        defaults:{
            "appetizer":  "caesar salad",
            "entree":     "ravioli",
            "dessert":    "cheesecake"

        },
        idAttribute: "_id",//idAttribute 不能放入defaults中
        validate:function(attrs,options){ //attrs 是 attributes
            if (attrs.end < attrs.start) {
                return "can't end before it starts";
            }
        },
        urlRoot:'/books'
    });

    //不加()也是创建一个实体对象
    var sidebar = new Sidebar({
        color: "dasd",
        has: undefined,//undefined null ''
        html: "<div><h1></h1></div>",
        start: 15,
        end: 10,
        _id: 1,
        id: "1083-lem-solaris"
    });

    /**
     * 这种方法是未定义的， 如果您有任何可以在JavaScript中执行的代码 并且我们鼓励你用你自定义验证逻辑覆盖它 。 默认情况下validate在save之前调用， 但如果传递了 {validate:true}，也可以在set之前调用。 validate方法是通过模型的属性，  选项和set 和 save是一样的。 如果属性是有效的， validate不返回验证任何东西;  如果它们是无效的， 返回一个你选择的错误。 它可以是一个用来显示的简单的字符串错误信息， 或一个以编程方式描述错误的完整错误对象。 如果validate返回一个错误， save不会继续， 并且在服务器上该模型的属性将不被修改。 校验失败将触发"invalid"事件， 并用此方法返回的值设置模型上的validationError属性。
     */
    //validate 第一个参数模型 第二个参数 validate中返回的值
    sidebar.on("invalid", function(model, error) {
        alert(model.get("color") + " " + error);
    });

    $("#n1").click(function () {
        /**
         * 添加URL 保存时验证信息
         */
        //sidebar.save({
        //    start: 9,
        //    end:   10
        //},{url:"http://"});
        //sidebar.save({
        //    start: 90,
        //    end:   10
        //});

        /**
         * 运行validate来检查模型状态。 返回true/false 状态
         */
        //console.log(sidebar.isValid());

        /**
         * 返回模型资源在服务器上位置的相对 URL 。 如果模型放在其它地方，可通过合理的逻辑重载该方法。 生成 URLs 的默认形式为："/[collection.url]/[id]"， 如果模型不是集合的一部分，你可以通过指定明确的urlRoot覆盖。
         * 由于是委托到 Collection#url 来生成 URL， 所以首先需要确认它是否定义过，或者所有模型共享一个通用根 URL 时，是否存在 urlRoot 属性。 例如，一个 id 为 101 的模型，存储在 url 为 "/documents/7/notes" 的 Backbone.Collection 中， 那么该模型的 URL 为："/documents/7/notes/101"
         * 如果添加 idAttribute 那么默认的ID 为_id 没有则为空
         */
        //console.log(sidebar.url());
        //clonemodel.clone()
        //返回该模型的具有相同属性的新实例。
        //
        //isNewmodel.isNew()
        //模型是否已经保存到服务器。 如果模型尚无 id，则被视为新的。
        //
        //hasChangedmodel.hasChanged([attribute])
        //标识模型从上次 set 事件发生后是否改变过。 如果传入 attribute ，当指定属性改变后返回 true。


        //在 "change" 事件发生的过程中，本方法可被用于获取已改变属性的旧值。
        //previousmodel.previous(attribute)


    });
});