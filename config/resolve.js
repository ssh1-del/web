const TsconfigPathsWebpackPlugin = require("tsconfig-paths-webpack-plugin");
module.exports = {
  extensions: [".js", ".jsx", ".json", ".tsx", "ts"],
  plugins: [new TsconfigPathsWebpackPlugin()],
};
