// const webpack = require('webpack');
const config = require('./config');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');//还需下载vue-loader-compiler ,参考vue-loader文档，

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../client/src/index.js'),
  },
  mode: 'development',
  output: {
    filename: 'bundle.[hash:8].js',
    path: config.prod.assetsPath, // path参数需是绝对路径
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.scss$/,//编译.vue模板中的scss样式 npm i sass-loader node-sass -D
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,//装这个包是因为引入element时，报不能识别ttf格式的文件
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../client/index.html'),//使用绝对路径，能保证在本地和服务器中相对服务器启动文件位置的正确
      filename: 'index.html'//模板生成的文件名
    }),
    new VueLoaderPlugin()
  ]
}