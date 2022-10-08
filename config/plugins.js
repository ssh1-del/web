const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const env = process.env.NODE_ENV;

module.exports = () => {
    return [
        new HtmlWebpackPlugin({
            title: "web",
            template: "index.html",
            filename: env === "development" ? "index.html" : "web/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "web/[name][contenthash:4].css",
            linkType: 'text/css', // 默认linkType 就是 "text/css"
        })
    ]
}
