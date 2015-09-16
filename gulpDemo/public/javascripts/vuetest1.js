require("../stylesheets/style.css");
var Vue = require("vue/dist/vue");

var vm = new Vue({ /* options */ });
var data = {
    message: 'Hello Vue.js!'
};

var demo = new Vue({
    el: '#demo',
    data: data
});