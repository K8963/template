const express = require('express')

const router = express.Router()
const usersCtrl = require('../controllers/users')
const validator = require('../middlewares/validator')

router.post(
  '/register',
  validator.pwsVai,
  validator.uNameVai,
  usersCtrl.register
)
// 用户登录
router.post('/login', validator.pwsVai, validator.userIdVai, usersCtrl.login)
// 更新用户
router.put('/updata', validator.accountVai, usersCtrl.updata)
// 删除用户
router.delete('/del', usersCtrl.delete)
// 获取当前登录用户信息
router.get('/getCurrentUser', usersCtrl.getCurrentUser)

module.exports = router
