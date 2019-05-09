const header = {
    'Accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': null
}

const REQUEST = {
    wxget(url, params, callback) {
        return new Promise((resolve, reject) => {
            wx.showLoading({
                title: '加载中',
                mask: true
            })
            wx.request({
                method: 'get',
                url: url,
                header: header,
                data: params,
                success: function(response) {
                    wx.hideLoading()
                    let returnCode = response.data.returncode || response.data.code + ''
                    if (returnCode === '10000') {
                        callback && callback(response.data.body)
                        resolve(response.data.body)
                    } else {
                        console.log('服务器错误:' + response.data.message)
                        reject(response.data.message)
                        wx.showToast({
                            title: response.data.message,
                            icon: 'none',
                            duration: 2000
                        })
                    }
                },
                fail: function() {
                    wx.hideLoading()
                    wx.showModal({
                        title: '提示',
                        content: '请求失败，请检查网络设置，在重新加载！',
                        showCancel: false
                    })
                    callback && callback(false)
                    console.log('请求失败: ' + error.errMsg)
                    reject('网络出错')
                }
            })
        })
    },
    wxpost(url, params, callback) {
        return new Promise((resolve, reject) => {
            wx.showLoading({
                title: '加载中',
                mask: true
            })
            wx.request({
                method: 'post',
                url: url,
                header: header,
                data: params,
                success: function(response) {
                    wx.hideLoading()
                    let returnCode = response.data.returncode || response.data.code + ''
                    if (returnCode === '10000') {
                        callback && callback(response.data.body)
                        resolve(response.data.body)
                    } else {
                        console.log('服务器错误:' + response.data.message)
                        reject(response.data.message)
                        wx.showToast({
                            title: response.data.message,
                            icon: 'none',
                            duration: 2000
                        })
                    }
                },
                fail: function(error) {
                    wx.hideLoading()
                    wx.showModal({
                        title: '提示',
                        content: '请求失败，请检查网络设置，在重新加载！',
                        showCancel: false
                    })
                    callback && callback(false)
                    console.log('请求失败: ' + error.errMsg)
                    reject('网络出错')
                }
            })
        })
    }
}

module.exports = {
    REQUEST
}