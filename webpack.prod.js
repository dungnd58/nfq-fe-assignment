const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'src', 'index.prod.html'),
  filename: 'index.html',
  inject: 'body'
});

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].min.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new CleanWebpackPlugin([path.resolve(__dirname, 'dist')], { root: __dirname })
  ]
});