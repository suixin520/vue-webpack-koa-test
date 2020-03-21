const webpack = require('webpack')
const path = require('path')

const devConfig= {
  mode: 'development',
  devtool: "cheap-module-evel-source-map", //dev环境
  devServer:{
    contentBase: path.resolve(__dirname,"../dist"), //资源文件目录
    open: false,
    port: 8080,
    hot: true,
    host: '0.0.0.0',
    hotOnly: true,
    // proxy:{
    //     '/api': {
    //         target: "http://localhost:9092/"
    //     }
    // }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
}

module.exports = devConfig
