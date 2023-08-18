const fs = require('fs')
const path = require('path')

// 写日志
function writeLog(writeStream, log) {
    writeStream.write(log + '\n') // 关键代码
}

// 生成 write stream
function createWriteaStream(fileName) {
    const fullFileName = path.join(__dirname, '../', '../', 'logs', fileName)
    const writeStream = fs.createWriteStream(fullFileName, {
        flags: 'a' // 标记，日志累加写入，不传该标记，日志每次都会清空重写
    })
    return writeStream
}

// 写访问日志
const accessWriteStream = createWriteaStream('access.log')
function access(log) {
    // 扩展：可以根据环境变量来配置，开发环境日志不写入文件，线上环境日志写入文件
    writeLog(accessWriteStream, log)
}

module.exports = {
    access
}