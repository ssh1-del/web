const TsconfigPathsWebpackPlugin = require("tsconfig-paths-webpack-plugin");
module.exports = {
  extensions: [".js", ".jsx", ".json", ".tsx", "ts"], // import时可以不带后缀名
  plugins: [new TsconfigPathsWebpackPlugin()],
};
