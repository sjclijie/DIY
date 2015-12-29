var webpack = require('webpack')
var config = require('./webpack.base')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

config.vue = {
    loaders : {
        js: 'babel',
        css: ExtractTextPlugin.extract("css"),
        sass: ExtractTextPlugin.extract("css!sass")
    }
}

config.plugins = ( config.plugins || [] ).concat([
    new webpack.DefinePlugin({
        'process.env' : {
            NODE_ENV : '"production"'
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress : {
            warnings : false
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
]);

module.exports = config;