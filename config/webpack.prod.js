const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimizer: [
            // TODO Replace UglifyJS with Closure when Webpack 4 support arrives
            new UglifyJsPlugin(),
            new webpack.optimize.AggressiveMergingPlugin({
                minSizeReduce: 0.5,
            }),
        ],
    },
});
