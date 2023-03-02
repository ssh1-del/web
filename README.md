# web
 webpack打包配置

## webpack打包性能优化

### 打包性能优化的方向
- 缩短打包时间 
> 缩短范围 缓存副本 定向搜索 提前构建 并行构建 可视构建
- 减小打包体积
> 分割代码 摇树优化 动态垫片 按需加载 作用提升 压缩资源

### 方案

#### 减少打包时间

配置include｜exclude缩小loader对文件的搜索范围，好处：避免不必要的转译
必要的时候使用oneOf，来明确之处同一种类型的文件在不同文件中的打包策略
node_modules文件夹的体积这么大，那得增加多少时间成本去检索所有文件啊？

include/exclude通常在各大Loader中配置，src文件夹通常作为源码目录，可做以下处理。当然include/exclude可根据实际情况修改。

```javascript
export default {
// ...
module: {
rules: [{
exclude: /node_modules/,
include: /src/,
test: /\.js$/,
use: "babel-loader"
}]
}
};
```
缓存副本
配置cache缓存Loader对文件的编译副本，好处是再次编译时只编译变动的文件。未变动的文件干嘛要随着变动的文件重新编译？

很多Loader/Plugin都会提供一个可用编译缓存的选项，通常包括cache字眼。以babel-loader与eslint-webpack-plugin为例。

```javascript
import EslintPlugin from "eslint-webpack-plugin";

export default {
// ...
module: {
rules: [{
// ...
test: /\.js$/,
use: [{
loader: "babel-loader",
options: { cacheDirectory: true }
}]
}]
},
plugins: [
// ...
new EslintPlugin({ cache: true })
]
};
```
⏱定向搜索
配置resolve提高文件的搜索速度，好处是定向指定所需文件路径。若某些第三方库以默认形式引用可能报错或希望程序自动索引指定类型文件都可通过该方式解决。
webpack的resolve模块是提供项目中所有目录的检索模块
alias表示映射路径，extensions表示文件后缀，noParse表示过滤无依赖文件。通常配置alias与extensions就足够。

```javascript
export default {
// ...
resolve: {
alias: {
"#": AbsPath(""), // 根目录快捷方式
"@": AbsPath("src"), // src文件夹快捷方式
swiper: "swiper/js/swiper.min.js"
}, // 导入模块快捷方式
extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue"] // 导入模块省略后缀
}
};
```

### 减小打包体积

分割各个模块代码，提取相同部分代码，好处是减少重复代码的出现频率。webpack v4+使用splitChunks替代CommonsChunksPlugin实现代码分割。

splitChunks配置较多，可查看webpack-optimizationsplitchunks。
