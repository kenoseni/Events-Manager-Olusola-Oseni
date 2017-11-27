const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    path: path.resolve(__dirname, './client/index.js'),
  },
  output: { 
    path: path.resolve(__dirname, '/dist'),
    filename: './client/bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './client/'),
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

};
