var ExtractTextPlugin = require("extract-text-webpack-plugin");
var vue = require('vue-loader');
module.exports = {
	entry: './src/main.js',
	output: {
		path: './build',
		publicPath: 'build/',
		filename: 'main.js'
	},
	module: {
		loaders: [
			{ test: /\.vue$/, loader : 'vue'},
			{ test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
		]
	},
	plugins: [
		new ExtractTextPlugin('athena.css') // 输出到 output path 下的 app.css 文件
	]
}