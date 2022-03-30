module.exports = {
  dbConfig: {
    HOST: 'localhost',
    USERNAME: 'root',
    PASSWORD: 'root',
    DATABASE: 'realworld-api',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
}
