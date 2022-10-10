const host = require('ip').address();
const port = 8066
const headers = {
    'X-Forwarded-Proto': 'https',
    'X-Forwarded-For': host,
    'X-Forwarded-port': port,
    Connection: 'Keep-Alive'
}

// 以方法写的优势可以传一些参数
module.exports = (env) => {
    const proxyUrl = process.env.PROXY;
    console.log(proxyUrl)
    const proxy = {
        '/api': {
            target: proxyUrl,
            secure: false,
            logLevel: 'debug',
            headers
        },
    }
    return {
        host: 'local-ip',
        port,
        https: false,
        hot: true,
        headers,
    }
}
