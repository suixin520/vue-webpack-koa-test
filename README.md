# vue-webpack-koa-test
搭建项目结构并不断优化

## 使用方法
* npm install  // 安装所需依赖
* npm run dev  //  测试环境运行
* npm run build  // 生产环境项目文件构建
* 可直接在src/pages进行页面开发

## V0.0.1
基本完成webpack + vue项目构建工作。其中使用了vue + vue-router + vuex等vue全家桶，可直接进行单页应用开发。

webpack实现的功能有：
* 解析vue文件
* 解析JS文件，并使用babel一套编译成ES5语法
* 解析sass\scss\css文件
* 为css文件加上前缀
* 解析图片字体文件
* 使用mini-css-extract-plugin为生成的css加扩展名
* 使用html-webpack-plugin将vue模板渲染到HTML
* 使用clean-webpack-plugin清楚缓存
* 测试环境下使用webpack-dev-server起前端服务
* 测试环境下启用webpack热更新和模块命名
* 生产环境下使用optimize-css-assets-webpack-plugin压缩css
* 生成环境下使用uglifyjs-webpack-plugin压缩JS