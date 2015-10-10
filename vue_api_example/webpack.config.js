var webpack = require("webpack");               //webpack

module.exports = {
        //页面入口
        entry: {
            'entry': "./main.js",
            vendor: ['jquery']
        },
        //出口文件输出配置
        output: {
            path: './dist',                     //js的位置
            publicPath: './dist',               //web打包的资源地址
            filename: "build.js"
        },
        //加载器
        module: {
            loaders: [
                {test: /\.vue$/, loader: "vue-loader"},
                {test: /\.css$/, loader: "style-loader!css-loader"},
                {test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
                {test: /\.jade$/, loader: "jade-loader?self"},
                {test: /\.png$/, loader: "url-loader?prefix=img/&limit=5000"},
                {test: /\.jpg$/, loader: "url-loader?prefix=img/&limit=5000"},
                {test: /\.gif$/, loader: "url-loader?prefix=img/&limit=5000"},
                {test: /\.woff$/, loader: "url-loader?prefix=font/&limit=5000"}
            ]
        },
        sourceMap: true, //源支持
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
                "root.jQuery": "jquery"
            }),
            new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
            //new webpack.optimize.UglifyJsPlugin({
            //    compress: {
            //        warnings: false
            //    }
            //})
        ],
        resolve: {
            //查找module的话从这里开始查找
            //root: './dist/' //绝对路径
            ////自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
            //extensions: ['', '.js', '.scss'],
            ////模块别名定义，方便后续直接引用别名，无须多写长长的地址
            //alias: {
            //    //util : 'javascripts/util.js'
            //}
        }
};
