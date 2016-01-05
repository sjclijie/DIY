var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpack = require('webpack');


//新增组件需要重启 npm run dev
// ********* 自动扫描目录 ********** //

var fs = require('fs');
var path = require('path');
var base = path.join( path.dirname(__dirname) , 'src/components/');
var entry = {
	"bootstrap" : './src/bootstrap.js'
}

var dirs = fs.readdirSync( base );

dirs.forEach(function( dir ){
	var stat = fs.lstatSync( path.join( base , dir) );
	if( stat.isDirectory() ){
		entry['components/'+ dir ] = path.join( base , dir , 'index.js');
	}
});

console.log( entry );

// ********* 自动扫描目录 end ********** //

module.exports = {
	entry: entry ,
	output: {
		path: './build',
		publicPath: 'build/',
		filename: '[name]/index.js'
	},
	module: {
		loaders: [
			{ test: /\.vue$/, loader : 'vue'},
			{ test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
		]
	},
	plugins : [
	    new webpack.optimize.CommonsChunkPlugin('bootstrap/basic.js'),
	    new ExtractTextPlugin('[name]/index.css')
	],
	babel : {
		"presets": ["es2015", "stage-0"],
		"plugins": ["transform-runtime"]
	}
}