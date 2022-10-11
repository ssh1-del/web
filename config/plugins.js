const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DeadCodePlugin = require("webpack-deadcode-plugin");

const path = require("path");

const env = process.env.NODE_ENV;

module.exports = () => {
  return [
    new HtmlWebpackPlugin({
      title: "web",
      template: "index.html",
      filename: env === "development" ? "index.html" : "web/index.html",
    }),
    //提取css文件
    new MiniCssExtractPlugin({
      filename: "web/[name][contenthash:4].css",
      linkType: "text/css", // 默认linkType 就是 "text/css"
    }),
    // 检查没有使用的代码文件
    new DeadCodePlugin({
      exclude: [path.join(__dirname, "../", "node_modules")],
    }),
  ];
};
