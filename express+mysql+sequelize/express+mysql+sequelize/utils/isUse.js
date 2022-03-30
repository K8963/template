const { userModel } = require('../models')

exports.IsUserName = async (userName) => {
  let result = await userModel.findAll({
    where: { user: userName },
  })
  if (result.length) {
    return false
  } else {
    return true
  }
}
