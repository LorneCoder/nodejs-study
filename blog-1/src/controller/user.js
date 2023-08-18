const { exec, escape } = require('../db/mysql')

const login = (username, password) => {
    username = escape(username) // 防止 sql 注入，使用 escape 来转义sql中的字符，可以防止 用户提交表单时，恶意注入 sql
    password = escape(password)

    const sql = `
        select username, realname from users where username=${username} and password=${password}
    `
    // console.log('sql is ', sql)
    return exec(sql).then(rows => {
        return rows[0] || {}
    })
}

module.exports = {
    login
}