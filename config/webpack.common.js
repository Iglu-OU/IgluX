const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.tsx'),
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.scss', '.json', '.svg', '.png'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                //TODO Should use style-loader when in dev mode, in order to enable HMR
                use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(svg|png)$/,
                use: ['file-loader'],
            },
        ],
    },
    devServer: {
        contentBase: 'src/',
        historyApiFallback: true,
        hot: true,
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: path.resolve(__dirname, '../public/manifest.json'), to: 'manifest.json' },
            { from: path.resolve(__dirname, '../public/robots.txt'), to: 'robots.txt' },
        ]),
        new HtmlWebpackPlugin({
            favicon: path.resolve(__dirname, '../public/favicon.ico'),
            template: path.resolve(__dirname, '../public/index.html'),
            inject: 'body',
            title: 'Iglu Digital Agency',
        }),
        new MiniCSSExtractPlugin({
            filename: '[name].[hash].css',
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
        }),
        new CleanWebpackPlugin(['dist'], {
            verbose: true,
        }),
    ],
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
};
