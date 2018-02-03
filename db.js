const mysql = require('mysql')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'test',
  connectionLimit: 10 // 默认是 10 个
})

exports.query = (...args) => {
  // 从数组中弹出最后一个元素 callback 回调函数
  const callback = args.pop()

  pool.getConnection((err, connection) => {
    if (err) {
      return callback(err)
    }

    connection.query(...args, function (...results) { // ...results => [err, results, fields]
      // 释放回连接池
      connection.release()
      // 把 ...results => [err, results, fields] 展开调用 callback 继续往外抛
      callback(...results)
    })
  })
}