require.config({
    paths:{
        underscore:'lib/underscore',
        backbone:'lib/backbone',
        jquery:'lib/jquery'
    },
    shim:{
        'underscore':{
            exports: '$'
        },
        'jquery':{
            exports: '_'
        },
        'backbone':{
            deps:['underscore','jquery'],
            exports: 'Backbone'
        }
    }
});

//事件
//require(['Backbone.Events(事件)/on_off_trigger_once']);
//require(['Backbone.Events(事件)/listenTo']);

//模型
//require(['Backbone.Model(模型)/extend']);
//require(['Backbone.Model(模型)/escape']);
require(['Backbone.Model(模型)/validate']);