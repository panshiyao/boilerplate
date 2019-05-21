![](https://user-gold-cdn.xitu.io/2018/7/12/1648c7be122d19d8?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1)
# react-boilerplate
从零搭建Webpack4.0 + Babel7 + React + TypeScript + Egg基础架构。

## Webpack4.0的一些重要更新
编译必须选择`production`或`development`模式（`--mode`）：
> 生产模式下：启用了 代码压缩、作用域提升（scope hoisting）、 tree-shaking，使代码最精简
> 
> 开发模式下：相较于更小体积的代码，提供的是打包速度上的优化

停用了一些插件(plugins)：
> - `NoEmitOnErrorsPlugin` -> `optimization.noEmitOnErrors` (on by default in production mode)
> - `ModuleConcatenationPlugin` -> `optimization.concatenateModules` (on by default in production mode)
> - `NamedModulesPlugin` -> `optimization.namedModules` (on by default in develoment mode)
> - `CommonsChunkPlugin` was removed -> `optimization.splitChunks`, `optimization.runtimeChunk`

需要安装单独的`webpack-cli`来使用CLI。

`plugin`的使用语法发生了变化。


参考文档：[webpack release v4.0.0](https://github.com/webpack/webpack/releases/tag/v4.0.0)