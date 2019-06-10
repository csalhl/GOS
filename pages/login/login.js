// page/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputtype:true,
    loading: false,
    title: '登录',
    navType: true,
    searchType:false,
  },

  formSubmit: function (e) {
    console.log(e)
    this.setData({
      loading:true
    })
    if (e.detail.value.name){
      if (e.detail.value.pass){
        wx.showToast({
          title: '登录成功',
          icon: 'success',
          duration: 1000
        })
        if (e.detail.value.name == 'admin'){
          getApp().globalData.Role = 'admin'
          wx.reLaunch({
            url: '/pages/home/home'
          })
        }else{
          getApp().globalData.Role = 'person'
          wx.reLaunch({
            url: '/pages/policeHome/policeHome'
          })
        }
      } else {
        this.setData({
          loading: false
        })
        wx.showToast({
          title: '请输入密码',
          icon: 'none',
          duration: 2000
        })
      }
    }else{

      this.setData({
        loading: false
      })
      wx.showToast({
        title: '请输入帐号',
        icon: 'none',
        duration: 2000
      })
    }
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  mimafocus: function () {
    if (this.data.inputtype) {
      this.setData({
        inputtype: false
      })
    } else {
      this.setData({
        inputtype: true
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})