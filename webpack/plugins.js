const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DeadCodePlugin = require("webpack-deadcode-plugin");
const EslintWebpackPlugin = require("eslint-webpack-plugin");
const TsCheckerWebpackPlgun = require("fork-ts-checker-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require("path");

const env = process.env.NODE_ENV;
console.log( path.join(__dirname, "../", "node_modules"));
console.log(path.resolve(__dirname,"../src"));

module.exports = () => {
    let plugin = [
        new HtmlWebpackPlugin({
            title: "web",
            template: "./index.html",
            //  区分index.html的位置
            filename: env === "development" ? "index.html" : "web/index.html",
        }),
        //提取css文件
        new MiniCssExtractPlugin({
            filename: "web/css/[name][contenthash:4].css",
            linkType: "text/css", // 默认linkType 就是 "text/css"
        }),
        // 检查没有使用的代码文件
        new DeadCodePlugin({
            exclude: [path.join(__dirname, "../", "node_modules")],
        }),
        // eslint检测
        new EslintWebpackPlugin({
            context:path.resolve(__dirname,"../src"),
            // 指定需要扩展的名称
            cache:true, // 进行缓存
            extensions: ['.ts', '.tsx', '.jsx', '.js', '.json']
        }),
        // typeScript检测
        new TsCheckerWebpackPlgun({
            // 只负责TS的类型检查,根据 tsconfig.json的配置来做, 语法检查交给 ESLintPlugin
            // 将async设为false，可以阻止Webpack的emit以等待类型检查器/linter，并向Webpack的编译添加错误。
            async: true,
        }),
    ];
    if(env === 'development'){
        plugin.push(
            //打包依赖转化为视图的形式
            new BundleAnalyzerPlugin());
            // 查看无用的代码
            // new webpack.DefinePlugin());
    }
    return plugin ;
};
