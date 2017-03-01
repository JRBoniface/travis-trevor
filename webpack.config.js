const path = require('path');
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: './index.js',
  devtool: 'source-map-explorer',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    host: "0.0.0.0",
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'dist'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', {
                modules: false
              }]
            ]
          }
        }]
      }
    ]
  }
  ,
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
};


