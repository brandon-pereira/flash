const config = require('./config');
const webpack = require('webpack');

const getPlugins = () => {
	const plugins = [
		new webpack.optimize.MinChunkSizePlugin({
			minChunkSize: 10000
		}),
		new webpack.optimize.ModuleConcatenationPlugin(), // scope hoisting
	]
	
	if (process.env.NODE_ENV === "production") {
		plugins.push(...[new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			sourceMap: true
			})]);
	} else {
		plugins.push(...[new webpack.SourceMapDevToolPlugin()]);
	}
	
	return plugins;
}


module.exports = {
	entry: config.paths.src.scripts,
	output: {
		publicPath: '/scripts/',
		filename: config.naming.scripts
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [["env", {
								"targets": {
								"browsers": ["last 2 versions"]
							}
						}]],
						plugins: [
							"add-module-exports", // export default will allow you to import without typing .default
							"dynamic-import-webpack"
						]
					}
				}]
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	},
	plugins: getPlugins()
}
