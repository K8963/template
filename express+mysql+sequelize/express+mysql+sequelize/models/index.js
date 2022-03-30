const Sequelize = require('sequelize')
const { dbConfig } = require('../config/config.default')

const sequelize = new Sequelize(
  dbConfig.DATABASE,
  dbConfig.USERNAME,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool,
  }
)

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.userModel = require('./user')(sequelize)

module.exports = db
