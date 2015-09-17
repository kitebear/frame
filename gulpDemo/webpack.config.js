module.exports = function(config){
    return {
        entry: './dist/javascripts/main.js',
        output: {
            path: './dist',
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                { test: /\.css$/, loader: "style!css" }
            ]
        }
    };
};