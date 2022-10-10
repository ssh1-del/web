const path = require('path');
const dotenv = require('dotenv');


module.exports = () => {
    const {parsed: env, error} = dotenv.config();
    if (error) return console.log(error);
    return {
        mode: "development",
        entry: './src/index.tsx',
        output: require('./config/output'),
        module: {
            rules: require('./config/rules')
        },
        plugins: require('./config/plugins')(),
        optimization: {
            runtimeChunk: "single"
        },
        devServer: require('./config/devServer')(env),
        resolve: require('./config/resolve'),
        devtool: 'cheap-source-map'
    }
}
