
module.exports = {
  entry: "./src/index.tsx",
  output: require("./output"),
  module: {
    rules: require("./rules"),
  },
  plugins: require("./plugins")(),
  optimization: {
    runtimeChunk: "single",
  },
  resolve: require("./resolve"),
};

// runtimeChunk 应用的依赖提取到一个runtime.js的文件中，因为应用的依赖比应用中代码的变更频率更低
