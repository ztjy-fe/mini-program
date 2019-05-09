const Store = require('utils/store.js')
let store = new Store({
    // 全局状态
    state: {
        testmsg: '这是一个全局状态',
        miniAudioShow: false,
        miniVideoShow: false,
        paused: true
    },
    // 方法
    methods: {

    },
    // 页面监听
    pageLisener: {
        onShow () {
            console.log('我在' + this.route);
        }
    }
})
console.log(store.$state.testmsg)
App({
    globalData: {
        userInfo: null,
        openid: null, // 默认游客ID
        smallRoutineId: 'gh_2d04e5353030', // 小程序原始ID
        scene: null
    },
    store: store,
    onLaunch: function (options) {
        // console.log("[onLaunch] 本次场景值:", options.scene)
        this.globalData.scene = options.scene
    }
})