const redis = require('redis')

// 创建客户端
const redisClient = redis.createClient(6379, '127.0.0.1')
redisClient.on('error', err => {
    console.error(err)
})

// 测试
redisClient.set('myname', 'zhangsan2', redis.print)
redisClient.get('myname', (err, val) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(val)

    // 退出
    redisClient.quit()
})



// redis v4.0+

// !(async function () {
//     // 创建客户端
//     const redisClient = redis.createClient(6379, '127.0.0.1')

//     // 链接
//     await redisClient.connect()
//         .then(() => console.log('redis connect success!'))
//         .catch(console.error)

//     // set
//     await redisClient.set('myname', 'zhangsan3')

//     // get
//     const myname = await redisClient.get('myname')
//     console.log('myname', myname)

//     // 退出
//     redisClient.quit()
// })()
