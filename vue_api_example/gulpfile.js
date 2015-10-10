/**
 * 组件安装
 * @type {Gulp|exports}
 * npm install css-loader gulp-ruby-sass style-loader gulp-util gulp-notify gulp-jshint gulp-clean gulp-sass gulp-imagemin imagemin-pngquant gulp-minify-css gulp-uglify gulp-concat browser-sync --save-dev
 */

//browser-sync
//livereload

// 引入 gulp及组件
var gulp = require('gulp'),                     //基础库
    imagemin = require('gulp-imagemin'),        //图片压缩
    pngquant = require('imagemin-pngquant'),    //图片压缩
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
var src = "./public/";
var dist = "./dist/";

//配置
var config = {
    images: {
        src: src + "images/*",
        dist: dist + "images"
    },
    sass: {
        src : [src + "stylesheets/sight-china.scss"],
        dist : src + "stylesheets"
    },
    css: {
        src: [
            src + "stylesheets/SearchInfoWindow_min.css",
            src + "stylesheets/DrawingManager_min.css",
            src + "stylesheets/dataTables.bootstrap.css",
            src + "stylesheets/bootstrap.min.css",
            src + "stylesheets/font-awesome.min.css",
            src + "stylesheets/skin-black.min.css",
            src + "stylesheets/AdminLTE.css",
            src + "stylesheets/sight-china.css"
        ],
        dist: dist + "stylesheets"
    },
    webServer: {
        host: "localhost:3001",
        browser: ["google chrome", "firefox"],
        files: [dist + "/*.js", "./public/index.html"] //监控变化
    },
    vue:{
        src: [
            src + "vue/*",
            src + "vue/**/*"
        ]
    },
    js: {
        src: src + "javascripts/*",
        dist: dist + "javascripts"
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

// 清空图片、样式、js
gulp.task('clean', function () {
    gulp.src([config.css.dist, config.js.dist, config.images.dist], {read: false})
        .pipe(clean())
        .pipe(notify({message: '文件清除完毕'}));
});

// 图片处理
gulp.task('images', function () {
    return gulp.src(config.images.src)
        .pipe(imagemin())
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(config.images.dist))
        .pipe(notify({message: '图片处理完毕'}));
});

//编译SCSS
gulp.task("sass",function(){
    sass(config.sass.src)
        .on('error', sass.logError)
        .pipe(gulp.dest(config.sass.dist))
        .pipe(notify({message: 'scss加载完毕'}));
});

// 样式处理
gulp.task('css',["sass"], function () {
    gulp.src(config.css.src)
        .pipe(concat("china.css"))
        .pipe(minifycss())
        .pipe(gulp.dest(config.css.dist))
        .pipe(notify({message: 'css加载完毕'}));
});

// 发布环境命令
gulp.task('producer',["css","images","webpack"]);

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
    gulp.watch(config.css.src,["css"]).on("change",reload);
    gulp.watch(config.js.src,["webpack"]).on("change",reload);
    gulp.watch(src+'plugins/**/*.js',["webpack"]).on("change",reload);
    gulp.watch('./webpack.config.js',["webpack"]).on("change",reload);
});

module.exports = function(){
    gulp.run("default");
};