const cloud = require('wx-server-sdk');
const request = require('request');
const access_token = require('AccessToken');
cloud.init()
let appid = 'wx410fce24c6b4dd98';
let secret = '0c504006ada8d7d9a8cc40186df9464e';
// 云函数入口函数
exports.main = async (event, context) => {
  let at = new access_token({
    appid,
    secret
  });
  return at.getCachedWechatAccessToken();
}