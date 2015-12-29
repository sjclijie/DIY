var config = require('./webpack.base');

config.devtool = '#source-map';

config.devServer = {
	noInfo: true
}

config.vue = {
	loaders: {
		js: 'babel'
	}
}

module.exports = config;