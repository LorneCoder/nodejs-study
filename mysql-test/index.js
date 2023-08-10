const mysql = require('mysql2')

// 创建连接对象
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'long8908570.com',
    port: '3306',
    database: 'myblog'
})

// 开始链接
con.connect()

// 执行sql语句
const sql = 'select * from blogs;'
// const sql = `insert into blogs (title, content, createtime, author) values ('标题D', '内容D', 1689837979107, 'lisi')`
con.query(sql, (err, result) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(result)
})

// 关闭链接
con.end()