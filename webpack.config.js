var	webpack = require('webpack'),
	autoprefixer = require('autoprefixer'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry:'./src/entry.js',
	output:{
		path:'./assets',
		filename:'b.js'
	},
	module:{
		loaders:[
			{
				test:/\.vue$/,
				loader:'vue'
			},
			{
				test:/\.scss$/,
				loader:ExtractTextPlugin.extract('style','css!postcss!sass')
			},
			{
				test:/\.css$/,
				loader:ExtractTextPlugin.extract('style','css!postcss')
			},
			{
				test:/\.(gif|png|jpg|jpeg)$/,
				loader:'url?limit=18192'
			}
		]
	},
	postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
	plugins:[
		new ExtractTextPlugin('b.css'),
		new webpack.DefinePlugin({
		    'process.env': {
		    	NODE_ENV: '"production"'
		    	}
			}),
		new webpack.optimize.UglifyJsPlugin({
		    compress: {
		    	warnings: false
		    	}
		   })
	]
}