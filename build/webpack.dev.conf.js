const config = require('./webpack.base');
const path = require('path');
const webpack = require('webpack');
let { smart } = require('webpack-merge');


module.exports = smart(config, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 9090,
    historyApiFallback: {//vue-router使用history模式，需要配置
      rewrites: [
        {
          from: '/./',
          to: 'index.html'//指向出口的index.html
        }
      ]
    },
    compress: true,
    progress: true
  }
})