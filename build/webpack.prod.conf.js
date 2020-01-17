const config = require('./webpack.base');
const path = require('path');
const webpack = require('webpack');
let { smart } = require('webpack-merge');


module.exports = smart(config, {
  mode: 'production',
  // devtool: 'cheap-module-eval-source-map',

})