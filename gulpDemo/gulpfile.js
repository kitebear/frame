/**
 * 组件安装
 * @type {Gulp|exports}
 * npm install gulp-util gulp-jshint gulp-clean gulp-rename gulp-ruby-sass gulp-imagemin imagemin-pngquant gulp-minify-css gulp-uglify gulp-concat gulp-livereload tiny-lr --save-dev
 */
// 引入 gulp及组件
var gulp = require('gulp'),                     //基础库
    imagemin = require('gulp-imagemin'),        //图片压缩
    pngquant = require('imagemin-pngquant'),    //图片压缩
    minifycss = require('gulp-minify-css'),     //css压缩
    uglify = require('gulp-uglify'),            //js压缩
    jshint = require('gulp-jshint'),            //js检查
    rename = require('gulp-rename'),            //重命名
    sass = require('gulp-ruby-sass'),           //sass
    concat = require('gulp-concat'),            //合并文件
    clean = require('gulp-clean'),              //清空文件夹
    livereload = require('gulp-livereload'),    //livereload
    tinylr = require('tiny-lr'),                //livereload
    server = tinylr(),
    port = 35729;

var base = "bower_components/",
    jsArray = [
        base + "vue/dist/vue.min.js"
    ];

// 默认任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default', ['clean'], function () {
    gulp.run('watch');
    gulp.start('sass', 'images', 'js');
});

// 清空图片、样式、js
gulp.task('clean', function () {
    gulp.src(['dist/stylesheets', 'dist/javascripts', 'dist/images'], {read: false})
        .pipe(clean());
});

// 图片处理
gulp.task('images', function () {
    var imgSrc = "public/images/*"
        , imgDst = "dist/images";

    return gulp.src(imgSrc)
        .pipe(imagemin())
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(livereload(server))
        .pipe(gulp.dest(imgDst));
});

// 样式处理
gulp.task('sass', function () {
    var cssSrc = 'public/stylesheets/*.scss',
        cssDst = 'dist/stylesheets';

    return sass(cssSrc, {verbose: true})
        .on('error', sass.logError)
        .pipe(gulp.dest(cssDst))
        .pipe(minifycss())
        .pipe(livereload(server))
        .pipe(gulp.dest(cssDst))
});

// js处理
gulp.task('js', function () {
    var jsSrc = 'public/javascripts/*.js',
        jsDst = 'dist/javascripts';
    jsArray.push(jsSrc);

    gulp.src(jsArray)
        .pipe(jshint('.jshintrc'))
        //.pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(jsDst))
        .pipe(uglify())
        .pipe(livereload(server))
        .pipe(gulp.dest(jsDst));
});

// 监听任务 运行语句 gulp watch
gulp.task('watch', function () {

    server.listen(port, function (err) {
        if (err) {
            return console.log(err);
        }

        // 监听html
        gulp.watch('./src/*.html', function (event) {
            gulp.run('html');
        });

        // 监听css
        gulp.watch('public/stylesheets/**', function () {
            gulp.run('sass');
        });

        // 监听images
        gulp.watch('./src/images/**/*', function () {
            gulp.run('images');
        });

        // 监听js
        gulp.watch('./src/js/*.js', function () {
            gulp.run('js');
        });

        gulp.watch(['views/*.jade', "dist/images", "dist/stylesheets/*.css", "dist/javascripts/*.js"], function (e) {
            server.changed({
                body: {
                    files: [e.path]
                }
            });
        });

    });
});