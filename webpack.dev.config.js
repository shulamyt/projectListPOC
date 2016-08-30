var webpackConfig = require('./webpack.config');
var path = require('path');
var webpack = require('webpack');

var portServer = 9000;

var entry = [
  'webpack-dev-server/client?http://localhost:' + portServer + '/',
  'webpack/hot/only-dev-server'
];
Array.prototype.push.apply(webpackConfig.entry, entry);

var plugins = [
    new webpack.HotModuleReplacementPlugin()
];
Array.prototype.push.apply(webpackConfig.plugins, plugins);

webpackConfig.devServer = {
  port: portServer,
  historyApiFallback: true,
  publicPath: 'http://localhost:' + portServer + '/',
  contentBase: path.join(__dirname, 'dist/'),
  hot: true,
  progress: true,
  inline: true,
  debug: true,
  stats: {
    colors: true
  }
};

module.exports = webpackConfig;