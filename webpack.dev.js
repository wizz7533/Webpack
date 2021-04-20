const path = require('path');

const { merge } = require('webpack-merge');
const common = require('./webpack.common');


module.exports = merge(common, {
    mode: 'development',
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
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        hot: true, // active le Hot Module Reload (HMR)
        port: 8020
    }
});