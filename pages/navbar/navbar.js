const App = getApp();
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: '头部标题'
    },
    isShowSearch: {
      type: Boolean,
      value: true
    },
    isShowBack: {
      type: Boolean,
      value: true
    }
  },
  data: {
    // 这里是一些组件内部数据
    navH: 0,
    navHs:0,
  },
  ready() {
    this.setData({
      navH: App.globalData.navHeight
    })
    this.setData({
      navHs: App.globalData.navHeight*2
    })
  },
  methods: {
    // 这里是一个自定义方法
    goback: function() {
      wx.navigateBack({
        delta: 1,
      })
    }
  }
})