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
     * "all" — 所有事件发生都能触发这个特别的事件，第一个参数是触发事件的名称。
     */
    object_view.listenTo(object, 'all', object_view.render);

    $("#n1").click(function () {
        //object.set("title",Math.random(10));//这里处理视图更新

        //unsetmodel.unset(attribute, [options])

        //从内部属性散列表中删除指定属性(attribute)。 如果未设置 silent 选项，会触发 "change" 事件。
        object.unset("title");
        //从model中删除所有属性， 包括id属性。 如果未设置 silent 选项，会触发 "change" 事件。
        object.clear();
    });

    /**
     * 通过委托给Backbone.sync，保存模型到数据库（或替代持久化层）。 如果验证成功，返回jqXHR，否则为 false。 attributes散列（如set）应包含你想改变的属性 - 不涉及的键不会被修改 - 但是，该资源的一个完整表示将被发送到服务器。 至于set，你可能会传递单独的键和值，而不是一个哈希值。 如果模型有一个validate方法，并且验证失败， 该模型将不会被保存。 如果模型isNew， 保存将采用"create"（HTTP POST）， 如果模型在服务器上已经存在， 保存将采用"update"（HTTP PUT）。
     * 相反，如果你只想将改变属性发送到服务器， 调用model.save(attrs, {patch: true})。 你会得到一个HTTP PATCH请求将刚刚传入的属性发送到服务器。
     * 通过新的属性调用save 将立即触发一个"change"事件，一个"request"事件作为Ajax请求开始到服务器， 并且当服务器确认成功修改后立即触发 一个"sync"事件。 如果你想在模型上等待服务器设置新的属性，请传递{wait: true}。
     * 在下面的例子中， 注意我们如何覆盖Backbone.sync的版本，在模型初次保存时接收到 "create"请求，第二次接收到 "update" 请求的。
     * @param method
     * @param model
     */
    Backbone.sync = function(method, model) {
        alert(method + ": " + JSON.stringify(model));
        model.set('id', 1);
    };

    var book = new Backbone.Model({
        title: "The Rough Riders",
        author: "Theodore Roosevelt"
    });

    book.save();

    book.save({author: "Teddy"});
});