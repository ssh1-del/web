const dotenv = require("dotenv");

module.exports = () => {
  const { parsed: env, error } = dotenv.config();
  if (error) return console.log(error);
  return {
    mode: "development",
    entry: "./src/index.tsx",
    output: require("./output"),
    module: {
      rules: require("./rules"),
    },
    plugins: require("./plugins")(),
    // optimization: {
    //   runtimeChunk: "single",
    // },
    devServer: require("./devServer")(),
    resolve: require("./resolve"),
    devtool: "cheap-source-map",
  };
};
