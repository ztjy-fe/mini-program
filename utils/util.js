/**
 * @intro 秒转时分秒格式
 * @param { int } seconds
 * @return 00:00:00
 */
const secondsToFormatTime = seconds => {
    var seconds = parseInt(seconds)
    var min = Math.floor(seconds / 60)
    var second = seconds % 60
    var hour
    var newMin
    var time
    if (min > 60) {
        hour = Math.floor(min / 60);
        newMin = min % 60;
    }
    if (second < 10) { second = '0' + second; }
    if (min < 10) { min = '0' + min; }
    return time = hour ? (hour + ':' + newMin + ':' + second) : (min + ':' + second);
}

/**
 * @intro 随机打乱一个数组的顺序
 * @param { array } array
 * @return 随机打乱数组单元的数组
 */
const shuffleArr = array => {
    var tmp
    var current
    var top = array.length
    if (top) while (--top) {
        current = Math.floor(Math.random() * (top + 1))
        tmp = array[current]
        array[current] = array[top]
        array[top] = tmp
    }
    return array
}

/**
 * @intro 通过一个数值生成指定单元的数组
 * @param { int } number
 * @return 指定位数的数组
 */
const createdNumArr = number => {
    let tempArr = []
    for (let i = 0; i < number; i++) {
        tempArr.push(i)
    }
    return tempArr
}

/**
 * @intro 最近播放缓存公用函数
 * @param { Object } oneAlbumInfo 需要存入缓存的数据
 * @return 倒序 20 个单元的数组
 */
const setRecentlyPlayed = oneAlbumInfo => {
    oneAlbumInfo = JSON.parse(JSON.stringify(oneAlbumInfo))
    oneAlbumInfo.albumTilte = oneAlbumInfo.albumTilte
    let recentlyPlayed = wx.getStorageSync('recentlyPlayed') || []
    recentlyPlayed.forEach((item, i) => {
        if (item.albumId == oneAlbumInfo.albumId) {
            recentlyPlayed.splice(i, 1);
        }
    })
    recentlyPlayed.unshift(oneAlbumInfo)
    if (recentlyPlayed.length > 20) {
        recentlyPlayed.length = 20
    }
    wx.setStorageSync('recentlyPlayed', recentlyPlayed)
}

/**
 * @desc 监听手机网络状态
 */
const onNetworkStatusChange = () => {
    wx.onNetworkStatusChange(function (res) {
        if (res.isConnected) {
            wx.showToast({
                title: `当前网络为${res.networkType}`,
                icon: 'none',
                duration: 2000
            })
        } else {
            wx.showToast({
                title: `当前无网络，请检查网络设置！`,
                icon: 'none',
                duration: 2000
            })
        }
    })
}

/**
 * @intro 获取 URL 参数
 * @param { String } url 带有参数的路径地址
 * @param { String } name 需要取的参数名称
 * @return 指定 name 的参数
 */
const getQueryString = function (url, name) {
    var reg = new RegExp('(^|&|/?)' + name + '=([^&|/?]*)(&|/?|$)', 'i')
    var r = url.substr(1).match(reg)
    if (r != null) {
        return r[2]
    }
    return null;
}

/**
 * @intro 数字大于 10000 转换成以 "万" 为单位
 * @param num int or string
 * @return tring 2.1万
 */
const numToTenThousand = function (num) {
    var n = parseInt(num)
    var w = parseInt(n / 10000)
    var q = Math.round((n - w * 10000) / 1000)
    if (n >= 10000) {
        if (q == 10) {
            w = w + 1
            q = 0
        }
        n = w + q / 10 + '万'
    }
    return n
}

const urlHttpTransform = url => {
    url = decodeURIComponent(url)
    console.log('urlHttpTransform', url)
    if (url.indexOf('https') == -1) {
        url = url.replace('http', 'https')
    }
    // if (url.indexOf('https') > -1) {
    //     url = url.replace('https', 'http')
    // }
    return url
}

module.exports = {
    secondsToFormatTime,
    shuffleArr,
    createdNumArr,
    setRecentlyPlayed,
    onNetworkStatusChange,
    getQueryString,
    numToTenThousand,
    urlHttpTransform
}
