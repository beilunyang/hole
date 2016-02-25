var	webpack = require('webpack'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry:'./src/entry.js',
	output:{
		path:'./static',
		filename:'bulid.js'
	},
	module:{
		loaders:[
			{
				test:/\.vue$/,
				loader:'vue'
			},
			{
				test:/\.scss$/,
				loader:'style!css!sass'
			},
			{
				test:/\.css$/,
				loader:'style!css'
			},
			{
				test:/\.(gif|png|jpg|jpeg)$/,
				loader:'url?limit=8192'
			}
		]
	}
}