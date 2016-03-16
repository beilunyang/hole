var	webpack = require('webpack'),
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
				loader:ExtractTextPlugin.extract('style','css!sass')
			},
			{
				test:/\.css$/,
				loader:ExtractTextPlugin.extract('style','css')
			},
			{
				test:/\.(gif|png|jpg|jpeg)$/,
				loader:'url?limit=8192'
			}
		]
	},
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