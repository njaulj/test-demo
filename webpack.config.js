var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')
module.exports = {
	entry:'./main.js',
	output:{
		path:'dist',
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{test:/\.(png|jpg)$/,loader:'url-loader?limit=8192&&name=image/[name].[ext]'},
			{
			  test: /\.css$/,
			  loader: 'style!css'
			}
		]
	},
	plugins: [
	    new HtmlWebpackPlugin({
	    	filename: 'test.html',
	    	template: 'html-withimg-loader!./index.html'
	    })
	]
}