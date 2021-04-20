const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/index.js'),
        // main: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
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
    ]
}