const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, './src/index.js'),
        // main: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    // module/loaders
    module: {
        rules: [{
            test: /\.(sa|sc)ss$/i,
            exclude: /node_modules/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    // plugins
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, './src/assets'),
                to: path.resolve(__dirname, './dist/assets'),
            }]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/template.html'),
            filename: 'index.html',
            templateParameters: {
                'title': 'Formation Webpack'
            }
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        hot: true, // active le Hot Module Reload (HMR)
        port: 8020
    }
}