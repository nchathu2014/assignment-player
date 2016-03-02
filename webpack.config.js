module.exports =  {

	entry:"./src/main.js",
	output:{
		path:"./dist",
		filename:"assignment_player.js",
		publicPath:"/"
	},
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