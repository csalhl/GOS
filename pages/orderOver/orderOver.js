// pages/orderOver/orderOver.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '已完成',
    navType: true,
    searchType: false,
    step: 4,
    stepline: '',
    active: true,
    pass: true,
    stepList: [{
        active: false,
        name: '待接单',
      },
      {
        active: false,
        name: '待到场',
      },
      {
        active: false,
        name: '待提验',
      },
      {
        active: false,
        name: '验收',
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.setData({
      targetTime: new Date().getTime() + 200000,
    });
    if (this.data.step == 1) {
      this.setData({
        stepline: '11'
      })
    } else if (this.data.step == 2) {
      this.setData({
        stepline: '34'
      })
    } else if (this.data.step == 3) {
      this.setData({
        stepline: '56'
      })
    } else if (this.data.step == 4) {
      this.setData({
        stepline: '100'
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})