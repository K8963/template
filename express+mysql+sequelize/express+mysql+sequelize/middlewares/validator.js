// 配置效验规则
const { body } = require('express-validator')
const validate = require('./validate')
const { userModel } = require('../models')
const { Op } = require('sequelize')

// 用户名是否存在
exports.uNameVai = validate([
  body('user')
    .notEmpty()
    .withMessage('用户名不能为空')
    .custom(async (user) => {
      let result = await userModel.findAll({
        where: { user: user },
      })
      if (result.length) {
        return Promise.reject('用户名已存在')
      }
    }),
])

// 账号是否存在
exports.accountVai = validate([
  body('account')
    .notEmpty()
    .withMessage('账号不能为空')
    .custom(async (account, { req }) => {
      let result = await userModel.findAll({
        where: { account: account },
      })
      if (!result.length) {
        return Promise.reject('账号不存在')
      }
      req.result = result
    }),
])

// 用户名 or 账号
exports.userIdVai = validate([
  body('userId')
    .notEmpty()
    .withMessage('用户名不能为空')
    .custom(async (userId, { req }) => {
      let result = await userModel.findAll({
        where: {
          [Op.or]: [
            {
              user: userId,
            },
            {
              account: userId,
            },
          ],
        },
      })
      if (!result.length) {
        return Promise.reject('用户名或账号不存在')
      }
      req.result = result
    }),
])
// 密码
exports.pwsVai = validate([
  body('password').notEmpty().withMessage('密码不能为空'),
])
