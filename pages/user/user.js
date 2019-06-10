// pages/user/user.js
const App = getApp();
Component({

  behaviors: [],

  properties: {
    myProperty: { // 属性名
      type: String,
      value: ''
    },
    myProperty2: String // 简化的定义方式
  },

  data: {
    visible: false,
    title: '个人中心',
    navType: false,
    searchType: false,
    userRole: '',
    }, // 私有数据，可用于模板渲染

  ready: function () {
    console.log(App.globalData)
    console.log(App.globalData.Role)
    this.setData({
      userRole: App.globalData.Role
    })
    console.log(this.data.userRole)
  },

  methods: {

    handleClose: function () {
      this.setData({
        visible: false
      });
    },
    handleOk: function () {
      this.setData({
        visible: false
      });
      wx.redirectTo({
        url: '/pages/index'
      })
    },
    handleClick: function () {
      console.log(111)
      this.setData({
        visible: true
      });
    },
  }

})