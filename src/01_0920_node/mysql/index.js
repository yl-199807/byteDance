(async () => {
    const mysql = require('mysql2/promise')

    // 设置连接
    const cfg = {
        host: 'localhost',
        user: 'root',
        password: '123456'
    }

    const connection = await mysql.createConnection(cfg)

    let ret = await connection.execute()

})()
