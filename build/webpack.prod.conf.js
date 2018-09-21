'use strict'
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, '..'),
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/[name].[chunkhash].js',
    chunkFilename: 'static/js/[id].[chunkhash].js',
    publicPath: './'
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '@': resolve('src'),
      '~': resolve('src')
    }
  },
  module: {
    rules: [
     {
       test: /\.vue$/,
       use: ['vue-loader']
     },
     {
       test: /\.css$/,
       use: [MiniCssExtractPlugin.loader, 'css-loader?minimize'],
     },
     {
       test: /\.js$/,
       use: ['babel-loader'],
       include: [resolve('src')]
     },
     {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'static/fonts/[name].[hash:7].[ext]'
      }
    },
     {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'static/img/[name].[hash:7].[ext]'
      }
    },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(
      ['dist'],
      {
        root: path.resolve(__dirname, '..')
      }  
    ),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: path.resolve(__dirname, '../dist/index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
    new MiniCssExtractPlugin({
      filename: `static/css/[name]_[contenthash:8].css`,
      chunkFilename: "static/css/[id]_[contenthash:8].css"
    }),
    new VueLoaderPlugin()
  ]
};