import Mock from '../utils/mock'
import ApiMaps from '../api/apiMaps'

const getAuthCodeMock = () => {
    let pathMock = ApiMaps.REQUEST_PATH.GETCODE.AUTHCODE
    return Mock.mock({
        'returncode': '10000',
        'message': 'success',
        'body': {
            'total': '23',
            'data|5': [{
                'id|+1': 20,
                'name|1': ['张三', '李四', '王五']
            }],
            'pageCount': '1',
            'pageNum': '1',
            'pageSize': '30'
        }
    })
}

module.exports = {
    getAuthCodeMock
}