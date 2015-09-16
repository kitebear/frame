module.exports = function(config){
    return {
        entry: './dist/javascripts/main.js',
        output: {
            path: __dirname,
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                { test: /\.css$/, loader: "style!css" }
            ]
        }
    };
};