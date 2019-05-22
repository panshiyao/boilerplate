![](https://user-gold-cdn.xitu.io/2018/7/12/1648c7be122d19d8?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1)
# react-boilerplate
从零搭建Webpack4.0 + Babel7 + React + TypeScript + Egg基础架构。

## Webpack4.0的一些重要更新
编译必须选择`production`或`development`模式（`--mode`）：
> 生产模式下：启用了 代码压缩、作用域提升（scope hoisting）、 tree-shaking，使代码最精简
> 
> 开发模式下：相较于更小体积的代码，提供的是打包速度上的优化

提供了webpack的默认配置：
> - entry 的默认值是 ./src
> - output.path 的默认值是 ./dist
> - mode 的默认值是 production

停用了一些插件(plugins)：
> - `NoEmitOnErrorsPlugin` -> `optimization.noEmitOnErrors` (on by default in production mode)
> - `ModuleConcatenationPlugin` -> `optimization.concatenateModules` (on by default in production mode)
> - `NamedModulesPlugin` -> `optimization.namedModules` (on by default in develoment mode)
> - `CommonsChunkPlugin` was removed -> `optimization.splitChunks`, `optimization.runtimeChunk`

需要安装单独的`webpack-cli`来使用CLI。

`plugin`的使用语法发生了变化。


参考文档：[webpack release v4.0.0](https://github.com/webpack/webpack/releases/tag/v4.0.0)

## Babel7.0的一些重要更新
最最重要的就是，babel7.0支持了对typescript的编译。很多时候我们使用 ts 之后还是没有办法去掉 babel 的依赖，因为我们可能依赖着 babel 生态里的很多插件，比方说做 antd 按需加载的 babel-plugin-import, 而这些插件无法脱离 babel 发挥作用。在babel7.0以前，如果我们要在项目中集结typescript的话，通常要先使用`ts-loader`把typescript编译成ES6，保留jsx，再使用`babel-loader`把ES6和jsx编译成ES5。

同时使用两个编译器实在是有点矛盾。而Babel7.0支持使用新的`@babel/preset-typescript`来处理ts代码，所以我们在这个项目中会尝试去掉`ts-loader`，使用`@babel/preset-typescript`来进行babel的配置。


参考文档：
- [TypeScript 和 Babel：一场美丽的婚姻](https://juejin.im/post/5c822e426fb9a04a0a5ffb49#heading-17)
- [Babel 7 Release](https://babeljs.io/blog/2018/08/27/7.0.0#typescript-support-babel-preset-typescript)
- [让babel帮你编译typescript](https://github.com/frontend9/fe9-library/issues/23)
## 初始化
执行下列指令来初始化和安装依赖。
```
npm init -y
npm i webpack --save-dev
npm i webpack-cli --save-dev
```

## 功能支持
- 使用babel编译typescript