const { Sequelize, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const User = sequelize.define('users', {
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    account: {
      type: DataTypes.INTEGER(12),
      allowNull: false,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '未知',
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER(3),
    },
    bio: {
      type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.STRING,
    },
  })

  return User
}
