var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
// var SpritesmithPlugin = require('webpack-spritesmith');

module.exports = {
  entry: [
    path.join(__dirname, 'app', 'app.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  module: {
    preLoaders: [
      {test: /\.(js|jsx)$/, loader: 'source-map-loader', exclude: /node_modules/}
    ],
    loaders: [
      {test: /\.(js|jsx)$/, loaders: ['react-hot-loader', 'babel-loader'], exclude: /node_modules/},
      {test: /\.(css|scss)$/, loaders: ['style','css?sourceMap', 'sass?sourceMap']},
      {test: /\.(woff|woff2)(\?.*)?$/,   loader: 'url-loader?limit=16384&mimetype=application/font-woff' },
      {test: /\.(ttf|eot|otf)(\?.*)?$/,    loader: 'file-loader' },
      {test: /\.(png|jpg|svg)(\?.*)?$/, loader: 'url-loader?limit=16384'}
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{ context: path.resolve(__dirname) ,from: path.join('app/index.html'), force: true }]),
    // new SpritesmithPlugin({
    //   src: {
    //     cwd: path.resolve(__dirname, 'resources/images/'),
    //     glob: '*.png'
    //   },
    //   target: {
    //     image: path.resolve(__dirname, 'resources/sprite.png'),
    //     css: path.resolve(__dirname, 'resources/sprite.css')
    //   },
    //   apiOptions: {
    //     cssImageRef: "../sprite.png"
    //   }
    // })
  ],
  devtool: 'source-map'

}