const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const svgToMiniDataURI = require("mini-svg-data-uri");

function resolve(dir) {
    return path.join(__dirname, "../", dir);
}

module.exports = [
    {
        test: /\.(jsx|tsx|ts)?$/,
        use: [
            {loader: "thread-loader"}, // 开启多线程打包
            {
                loader: "babel-loader", // 用babel编译时可以在 tsconfig.json 中添加 "noEmit": true, 因为不用ts-loader输出文件了
                options: {
                    presets: [
                        "@babel/preset-env", //使用三种预置 env, react, typescript
                        "@babel/preset-react",
                        "@babel/preset-typescript",
                    ],
                },
            },
        ],
        exclude: [/\/node_modules\//, /\\node_modules\\/], // 加/\\node_modules\\/ 是为了兼容windows系统，下同
        include: [/\/src\//, /\\src\\/],
    },
    {
        test: /\.less/,
        exclude: /\.module\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
    },
    {
        test: /\.module\.scss$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
            },
            {
                loader: "css-loader",
                options: {
                    //选项允许你配置在 css-loader 之前有多少 loader 应用于 @imported 资源与 CSS 模块/ICSS 导入。
                    // 0 => no loaders (default);
                    // 1 => postcss-loader;
                    // 2 => postcss-loader, sass-loader
                    importLoaders: 1,
                    // module.scss时开启modules
                    modules: {
                        mode: "local",
                    },
                },
            },
            {
                loader: "sass-loader",
            },
        ],
        include: [path.join(__dirname, "../", "src")],
    },
    {
        test: /\.(sc|sa|c)ss$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader
            },
            {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader',
                options: {
                    // 使用哪个模块来编译 scss 文件，默认就是 sass
                    implementation: require('sass'),
                    sassOptions: {
                        // fiber: require('fibers')
                    }
                }
            },
        ],
        exclude: /\.module\.(sa|sc|c)ss$/i,
    },
    {
        test: /\.svg$/,
        // .svg只匹配一次，通过配置oneOf
        oneOf: [
            {
                issuer: /\.[jt]sx?$/,
                // type: 'asset/source',
                // loader: 'react-svg-loader'
                loader:'@svgr/webpack' // 支持svg使用组件的形式
                // generator: {
                //     publicPath: '/',
                //     filename:'web/svg/[name].[hash:6].[ext]'
                // }
            },
            {
                issuer: /\.(s?css|less)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024, // 4kb
                    },
                },
                generator: {
                    publicPath: "/",
                    dataUrl: (content) => svgToMiniDataURI(content.toString()),
                },
            },
        ],
    },
    {
        test: /\.(png|jpg|gif)$/, //png|jpg|gif图片资源的打包
        type: "asset",
        generator: {
            publicPath: "/",
            filename: "web/asset/[name][contenthash:8][ext]",
        },
        include: [resolve("src")],
    },
];

 //webpack5新特性 资源模块（asset module）是一种模块类型。它允许在使用资源（字体，图标等）的时候无须使用loader
// rule.type
// asset => raw-loader  在导出data url和生成资源文件之间进行选择
// asset/resource => file-loader  生成资源文件并导出data url
// asset/source => raw-loader 生成资源文件
// asset/inline=> url-loader  导出data url
// data url是一种处理svg，png的一种方式，将图片转化为base64编码的形式，并存储在url中
