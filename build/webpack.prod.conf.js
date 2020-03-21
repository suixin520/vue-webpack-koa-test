const webpack = require('webpack')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const uglifyjs = require('uglifyjs-webpack-plugin')

const proConfig= {
  mode: 'production',
  devtool: "cheap-module-source-map", //pro环境
  plugins: [
    new OptimizeCSSAssetsPlugin(),
    new uglifyjs(),
    new webpack.DefinePlugin({
      'process.env': {
        'http_env': JSON.stringify(process.env.http_env)
      }
    })
  ]
}

module.exports = proConfig
