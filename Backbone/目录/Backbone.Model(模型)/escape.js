define([ 'backbone' ], function (Backbone) {
    var Sidebar = Backbone.Model.extend({
        defaults:{
            "appetizer":  "caesar salad",
            "entree":     "ravioli",
            "dessert":    "cheesecake"

        },
        idAttribute: "_id"//idAttribute 不能放入defaults中
    });

    //不加()也是创建一个实体对象
    var sidebar = new Sidebar({
        color: "dasd",
        has: undefined,//undefined null ''
        html: "<div><h1></h1></div>",
        _id: 1
    });

    $("#n1").click(function () {
        /**
         * model.escape(attribute)
         * 与 get 类似，只是返回的是HTML转义后版本的model属性值。如果从model插入数据到HTML，使用 escape 取数据可以避免 XSS 攻击。
         */
        //console.log(sidebar.escape("html"));

        /**
         * 属性值为非 null 或非 undefined 时返回 true。
         */
        console.log(sidebar.has("has"));

        /**
         * 一个model的唯一标示符，被储存在 id 属性下。如果使用一个不同的唯一的key直接和后端通信。可以设置Model的 idAttribute 到一个从key到 id 的一个透明映射中。
         */
        console.log(sidebar.id);

        /**
         *  model的特殊属性，cid 或客户 id 是当所有model创建时自动产生的唯一标识符。 客户 ids 在model尚未保存到服务器之前便存在，此时model可能仍不具有最终的 id， 但已经需要在用户界面可见。
         *  见源码 _.uniqueId('l') 方法
         */
        //console.log(sidebar.cid);

        /**
         * attributes 属性是包含模型状态的内部散列表 — 通常（但不一定）JSON对象的形式表示在服务器上模型数据 。它通常是数据库中一个行的简单的序列，但它也可以是客户端的计算状态。
         * 对象的所有属性都寄托在attributes中保存
         */
        //console.log(sidebar.attributes.html);

        /**
         * changed属性是一个包含所有属性的内部散列，自最后 set 已改变。 自最后一组已改变。 请不要直接更新 changed，因为它的状态是由set内部维护。 changed的副本可从changedAttributes获得。
         */
        //console.log(sidebar.changed);

        /**
         * toJSON 都懂吧 返回的是attributes 对象
         * 返回一个模型的 attributes 浅拷贝副本的 JSON 字符串化形式。 它可用于模型的持久化、序列化，或者发送到服务之前的扩充。 该方法名称比较混乱，因为它事实上并不返回 JSON 字符串， 但这是对 JavaScript API 的 JSON.stringify 实现。
         */
        console.log(sidebar.toJSON());

        console.log();

    });
});