let prefix = ''
let BASE_API = ''
switch (prefix) {
    case 'dev':
        BASE_API = 'https://dev-api.szy.net'
        break
    case 'alpha':
        BASE_API = 'http://alpha-api.szy.com'
        break
    case 'rc':
        BASE_API = 'https://rc-api.szy.cn'
        break
    default:
        BASE_API = 'https://api.szy.cn'
        break
}
const path = _path => BASE_API + _path

// 用户注册&登录信息
const REQUEST_PATH = {
    // 获取图片验证码
    GETCODE: {
        // 获取 openid
        OPENID: path('/feServer/config/getSessionKeyByCode/v1.0'),
        AUTHCODE: path('/user/getAuthCode')
    }
}

module.exports = {
    REQUEST_PATH
}