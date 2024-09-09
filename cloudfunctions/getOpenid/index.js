// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const wxContext = cloud.getWXContext()
    return {
      openid: wxContext.OPENID
    }
  } catch (error) {
    return {
      error: true,
      message: '获取 OpenID 失败',
      details: error.message,
    }
  }
}
