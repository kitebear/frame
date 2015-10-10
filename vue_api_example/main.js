/**
 * Boot up the Vue instance and wire up the router.
 */
var Vue
    ,VueRouter
    ,App
    ,router;

Vue = require('vue');
Vue.use(require('vue-resource'));
VueRouter = require('vue-router');
Vue.use(VueRouter);

//var util = require("util");

App = Vue.extend();
router = new VueRouter();

router.map({
    '/': {
        component: require('./app.vue'),
        // add a subRoutes map under /foo
        subRoutes: {
            '/media': {
                component: require('./views/media-view.vue')
            },
            '/ugc': {
                component: require('./views/ugc-view.vue')
            },
            '/city/:area_code': {
                component: require('./views/city-view.vue'),
                subRoutes: {
                    '/base_info/:sid': {
                        component: require('./views/baseinfo-view.vue')
                    },
                    '/scenical_list': {
                        component: require('./views/scenical_list.vue')
                    },
                    '/derive_manage': {
                        component: require('./views/derive_manage.vue')
                    },
                    '/pgc_manage': {
                        component: require('./views/pgc_manage.vue')
                    }
                }
            }
        }
    }
});

router.start(App, '#app');
