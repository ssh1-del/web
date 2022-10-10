const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');

function resolve(dir) {
    return path.join(__dirname, '../', dir);
}

module.exports = [
    {
        test: /\.(jsx|tsx|ts)?$/,
        use: [
            {loader: "thread-loader"},  // 开启多线程打包
            {
                loader: "babel-loader", // 用babel编译时可以在 tsconfig.json 中添加 "noEmit": true, 因为不用ts-loader输出文件了
                options: {
                    presets: [
                        '@babel/preset-env', //使用三种预置 env, react, typescript
                        "@babel/preset-react",
                        "@babel/preset-typescript",
                    ]
                }
            },
        ],
        exclude: [/\/node_modules\//, /\\node_modules\\/], // 加/\\node_modules\\/ 是为了兼容windows系统，下同
        include: [
            /\/src\//,
            /\\src\\/,
        ],
    },
    {
        test: /\.less/,
        exclude: /\.module\.less$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'less-loader'
        ]
    },
    {
        test: /\.module\.scss$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader
            },
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    modules: {
                        mode: "local",
                    },
                }
            },
            {
                loader: 'sass-loader',
            }
        ],
        include: [path.join(__dirname, '../', 'src')]
    },
    {
        test: /\.svg$/,
        // .svg只匹配一次，通过配置oneOf
        oneOf: [
            {
                issuer: /\.[jt]sx?$/,
                loader: 'react-svg-loader'
            },
            {
                issuer: /\.(s?css|less)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 // 4kb
                    }
                },
                generator: {
                    publicPath: '/',
                    dataUrl: (content) => svgToMiniDataURI(content.toString())
                }
            }
        ]
    },
    {
        test: /\.(png|jpg|gif)$/,  //png|jpg|gif图片资源的打包
        type: 'asset',
        generator: {
            publicPath: '/',
            filename: 'web/asset/[name][contenthash:8][ext]'
        },
        include: [resolve('src')]
    }
]
