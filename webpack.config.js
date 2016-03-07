var webpack = require('webpack');
module.exports =  {

	entry:"./src/main.js",
	output:{
		path:"./dist",
		filename:"assignment_player.js",
		publicPath:"/"
	},
	plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
	devServer:{
		inline:true,
		contentBase:'./dist',
		port:7000
	},
	module:{
		
		loaders:[
			{
				test   :/\.jsx?$/,
				exclude:/(node_modules|bower_components)/,
				loader :'babel',
				query  :{
					presets:['react','es2015']
				}
			}
		]
	}
}