const { Op } = require('sequelize')
const jwt = require('jsonwebtoken')
const { userModel } = require('../models')
const md5 = require('../utils/md5')
const {
  CODE_ERROR,
  CODE_SUCCESS,
  PRIVATE_KEY,
  JWT_EXPIRED,
} = require('../config/constant')

exports.register = async (req, res, next) => {
  try {
    const userInfo = {
      user: req.body.user,
      password: md5(req.body.password),
      sex: req.body.sex,
      age: req.body.age || null,
      bio: req.body.bio || null,
      img: req.body.img || null,
    }
    let count = await userModel.findAll()
    if (!count.length) {
      userInfo.account = '1111'
    }
    userModel
      .create(userInfo)
      .then((data) => {
        res.json({
          code: CODE_SUCCESS,
          msg: '注册成功',
          data: {
            user: data.user,
            account: data.account,
            sex: data.sex,
            age: data.age || null,
            bio: data.bio || null,
            img: data.img || null,
          },
        })
      })
      .catch((err) => {
        res.json({
          code: CODE_ERROR,
          msg: err.message,
        })
      })
  } catch (err) {
    next(err)
  }
}

exports.login = async (req, res, next) => {
  try {
    let data = req.result[0].dataValues
    let pwd = md5(req.body.password)
    if (pwd === data.password) {
      // 获取token
      const token = jwt.sign(
        { userId: req.body.userId },
        // 私钥
        PRIVATE_KEY,
        // 设置过期时间
        { expiresIn: JWT_EXPIRED }
      )
      res.json({
        coed: CODE_SUCCESS,
        msg: '登录成功',
        data: {
          user: data.user,
          account: data.account,
          token: token,
        },
      })
    } else {
      res.json({
        coed: CODE_ERROR,
        msg: '密码错误',
      })
    }
  } catch (err) {
    next(err)
  }
}
exports.getCurrentUser = async (req, res, next) => {
  try {
    let result = await userModel.findAll({
      where: {
        [Op.or]: [
          {
            user: req.query.userId,
          },
          {
            account: req.query.userId,
          },
        ],
      },
    })
    let data = result[0].dataValues
    res.json({
      code: CODE_SUCCESS,
      msg: '查询成功',
      data: {
        user: data.user,
        account: data.account,
        sex: data.sex,
        age: data.age,
        bio: data.bio,
        img: data.img,
      },
    })
  } catch (err) {
    next(err)
  }
}
exports.updata = async (req, res, next) => {
  try {
    let userInfo = req.body
    let account = userInfo.account
    delete userInfo.account
    let result = await userModel.update(userInfo, {
      where: { account: account },
    })
    if (result) {
      console.log(123)
      res.json({
        code: CODE_SUCCESS,
        msg: '修改成功',
      })
    }
  } catch (err) {
    next(err)
  }
}
exports.delete = async (req, res, next) => {
  if (req.query.userId !== null) {
    let result = await userModel.destroy({
      where: {
        [Op.or]: [{ account: req.query.userId }, { user: req.query.userId }],
      },
    })
    console.log(result)
    if (result) {
      res.json({
        code: CODE_SUCCESS,
        msg: '删除成功',
        userId: req.query.userId,
      })
    } else {
      res.json({
        code: CODE_ERROR,
        msg: '删除失败',
        userId: req.query.userId,
      })
    }
  }
}
