const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		port: 3000,
		open: true,
		historyApiFallback: true,
		contentBase: './dist'
	},
	resolve: {
    extensions: ['*', '.js', '.jsx']
  },
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules|index.dev.html|index.prod.html/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader'],
				exclude: /node_modules/
			}
		]
	}
};