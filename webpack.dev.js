const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'src', 'index.dev.html'),
  filename: 'index.html',
  inject: 'body'
});

module.exports = merge(common, { 
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'main.js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    contentBase: './dist'
  },
  plugins: [HtmlWebpackPluginConfig]
});