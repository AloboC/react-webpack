const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/**@type {import('webpack').Configuration} */
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../build'),
    // filename: '[name].[contenthash].js',
    filename: "[name].[chunkhash].js",
    publicPath: '',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        type: 'asset',
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
      }

    ]
  },
  resolve:{extensions: ['.js', '.jsx', '.json']},
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
}