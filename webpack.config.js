const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, './client/index.js'),
  ],
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: './client/bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './client/'),
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: ['transform-decorators-legacy']
        }
      },
      {
        test: /\.(scss|css|sass)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            query: {
              optipng: {
                optimizationLevel: 7,
              },
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              pngquant: {
                quality: '75-90',
                speed: 3,
              },
            },
          },
        ],
      }
    ]
  },

};
