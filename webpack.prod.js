const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const ExtractCssPlugin = require('extract-css-chunks-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    // module/loaders
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/i,
            exclude: /node_modules/,
            use: [
                ExtractCssPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    // plugins
    plugins: [
        new ExtractCssPlugin()
    ]
});