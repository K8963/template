const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routers = require('./routers')
const db = require('./models')
const app = express()

// 日志输出
app.use(morgan('dev'))

// 数据库连接
db.sequelize.sync()
// 连接并重置数据库
// db.sequelize.sync({ force: true }).then(() => {
//   console.log('重建模型')
// })

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())

// 挂载路由，设置路由前缀
app.use('/api', routers)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('http://localhost:' + PORT)
})
