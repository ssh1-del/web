const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: require('./config/output'),
    module: {
        rules: require('./config/rules')
    },
    plugins: require('./config/plugins')(),
    optimization: {
        runtimeChunk: "single"
    },
    resolve: require('./config/resolve')
}
