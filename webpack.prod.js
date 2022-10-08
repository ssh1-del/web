const path = require('path');
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: "web/[name].js",
        path: path.resolve(__dirname, 'build'),
        publicPath: "auto",
        clean: true
    },
    module: {
        rules: require('./config/rules')
    },
    plugins: require('./config/plugins')(),
    optimization: {
        runtimeChunk: "single"
    },
    resolve: require('./config/resolve')
}
