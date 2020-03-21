const path = require('path')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const merge = require('webpack-merge')

const devConfig = require('./webpack.dev.conf')
const proConfig = require('./webpack.prod.conf')

let devMode = process.env.http_env !== 'development'

// console.log(devMode)

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const baseConfig = {

  entry:{
    index: "./src/main.js"
  },

  output:{
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
    // publicPath: "http://www/cdn.com" //打包后的文件已publicPath做前缀
  },

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'common': resolve('src/common'),
      'components': resolve('src/components')
    }
  },

  optimization: {
    splitChunks:{ // 代码拆分
      chunks: "all", //对同步 initial 异步 async 所有的模块有效 all
      // minSize: 30000, //最小尺寸
      // maxSize:0,//对模块进行二次分割时使用，不推荐使用
      // minChunks:1,//打包生产的chunk文件最少有几个chunk引用了这个模块 如果值为2了，就会被分割
      // maxAsyncRequests: 3,//最大初始化请求书，入口文件同步请求，默认3
      // automaticNameDelimiter: '-',//打包分割符号
      // name:true,//打包后的名称，除了布尔值，还可以接收一个函数function
      // cacheGroup:{
      //     vendors:{
      //         test:/[\\/]node_modules[\\/]/,
      //         name: 'vendor',//要缓存的 分割出来 chunk名字
      //         priority: -10 //缓存组优先级 数字越大优先级越高
      //     },
      //     other:{ //只支持同步的引用
      //         chunks:'initial',//必须三选一：initial | all | async默认值
      //         test: /vue|loadsh/, //正则规则验证，如果符合就提取chunk
      //         name:"other",
      //         minSize: 30000,
      //         minChunks: 1,
      //     },
      //     default:{
      //         minChunks: 2,
      //         priority: -20,
      //         reuseExistingChunk: true //可设置是否重用chunk
      //     }
      // }
    },
    usedExports: true,
  },

  module:{
    rules:[
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: path.resolve(__dirname, '../src'),   // 限制打包范围，提高打包速度
        exclude: /node_modules/,
        use: [
          devMode ? miniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: "postcss-loader",
            options:{
              indent: "postcss",
              plugins: [require('autoprefixer')],
              browser: ['last 10 versions']
            }
          },
          {
            loader:'sass-loader',
            options:{
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'),
        loader: "babel-loader",
      },
      {
        test:/\.(png|gif|jpe?g)/,
        use: {
          loader: "url-loader",
          options:{
            name: "[name]_[hash].[ext]",
            limit: 500
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name]-[hash:5].[ext]'
        }
      }
    ]
  },

  plugins: [
    new miniCssExtractPlugin({
      filename: devMode? '[name].[chunkhash:8].css':'[name].css',
      chunkFilename: '[id].css'
    }),
    new htmlWebpackPlugin({
      title: "我是首页",
      filename: "index.html",
      template: path.resolve(__dirname, '../index.html'),
      hash: true,
    }),
    // 将定义过的其它规则复制并应用到 .vue 文件里相应语言的块
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ]
}

module.exports = (env) => (env && env.production) ? merge(baseConfig, proConfig) : merge(baseConfig, devConfig)
