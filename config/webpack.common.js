const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

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
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [devMode ? 'style-loader' : MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(ttf|png)$/,
                use: ['file-loader'],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader'],
            },
        ],
    },
    devServer: {
        contentBase: 'src/',
        historyApiFallback: true,
        hot: true,
        open: true,
        inline: true,
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            favicon: path.resolve(__dirname, '../public/favicon.ico'),
            template: path.resolve(__dirname, '../public/index.html'),
            inject: 'body',
            title: 'Iglu Digital Agency',
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
            },
        }),
        new MiniCSSExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new CopyWebpackPlugin([
            { from: path.resolve(__dirname, '../public/manifest.json'), to: 'manifest.json' },
            { from: path.resolve(__dirname, '../public/robots.txt'), to: 'robots.txt' },
            { from: path.resolve(__dirname, '../assets/logos/iglu.png'), to: 'iglu.png' },
        ]),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
        }),
    ],
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
};
