const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        filename: '[name].js',
        publicPath: '/dist'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: path.resolve(__dirname, 'node_modules'),
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}
