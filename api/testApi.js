import Api from './api'
import ApiMaps from './apiMaps'

module.exports = {
    // 获取 openid
    getOpenid(params, callback) {
        return Api.REQUEST.wxget(ApiMaps.REQUEST_PATH.GETCODE.OPENID, params, callback)
    }
}