/**
 * 组件安装
 * @type {Gulp|exports}
 * npm install css-loader gulp-ruby-sass style-loader gulp-util gulp-notify gulp-jshint gulp-clean gulp-sass gulp-minify-css gulp-uglify gulp-concat browser-sync --save-dev
 */

//browser-sync
//livereload

// 引入 gulp及组件
var gulp = require('gulp'),                     //基础库
    minifycss = require('gulp-minify-css'),     //css压缩
    uglify = require('gulp-uglify'),            //js压缩
    jshint = require('gulp-jshint'),            //js检查
    sass = require('gulp-ruby-sass'),           //sass
    concat = require('gulp-concat'),            //合并文件
    clean = require('gulp-clean'),              //清空文件夹
    webpack = require("webpack"),               //webpack
    gutil = require("gulp-util"),               //gulp工具
    notify = require('gulp-notify'),            //操作提示工具
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

// config file
var src = "./dist/";

//配置
var config = {
    sass: {
        src : [src + "stylesheets/vue.scss"],
        dist : src + "stylesheets"
    },
    webServer: {
        server: './',
        index: "index.html",
        port: 3000,
        logLevel: "debug",
        logPrefix: "xdh",
        open: true,
        browser: ["google chrome", "firefox"],
        files: ["./index.html"] //监控变化
    },
    vue:{
        src: [
            "./vue/*",
            "./vue/**/*"
        ]
    }
};

var webpackConfig = require("./webpack.config");

//webpack打包工具
gulp.task("webpack", function (callback) {
    webpack(webpackConfig, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

//编译SCSS
gulp.task("sass",function(){
    sass(config.sass.src)
        .on('error', sass.logError)
        .pipe(minifycss())
        .pipe(gulp.dest(config.sass.dist))
        .pipe(notify({message: 'scss加载完毕'}));
});

// 浏览器同步服务开启
gulp.task('browser-sync', function () {
    browserSync(config.webServer);
});

// 默认输出
gulp.task('default', ['watch']);

// 默认监听文件
gulp.task('watch', ["webpack", 'browser-sync'], function() {
    gulp.watch(config.vue.src).on("change",function(){
        gulp.run("webpack",function(){
            reload();
        });
    });
    gulp.watch(src + "stylesheets/*.css",["sass"]).on("change",reload);
    gulp.watch('./webpack.config.js',["webpack"]).on("change",reload);
});