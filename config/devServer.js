const host = require('ip').address()
const proxyUrl = 'http://172.0.16.128:8700';
const port = 8066
const headers = {
    'X-Forwarded-Proto': 'https',
    'X-Forwarded-For': host,
    'X-Forwarded-port': port,
    Connection: 'Keep-Alive'
}
const proxy = {
    '/api': {
        target: proxyUrl,
        secure: false,
        logLevel: 'debug',
        headers
    },
}
// 以方法写的优势可以传一些参数
module.exports = () => {
    return {
        host: 'local-ip',
        port,
        https: false,
        hot: true,
        headers,
    }
}
