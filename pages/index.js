var ajax = require("../pages/servie/api.js");
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    title: '',
    navType: false,
    searchType: false,
  },
  getUser: function () {
    wx.getUserInfo({
      success: function(res) {
        wx.redirectTo({
          url: '/pages/personHome/personHome'
        })
        getApp().globalData.Role = 'person'
        var loginParams = {
          identity: '2',
          loginName: 'admin',
          password: '123456'
        };
        //ajax.userLogin(loginParams).then(data => {})
      }
    })
  },
  goLogin:function(){
    wx.navigateTo({
      url: '/pages/login/login'
    })
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
    this.getUser()
  }
});