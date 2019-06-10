// pages/notice/notice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '通知',
    navType: true,
    searchType: false,
    list:[
      {
        type:1,
        time:'2012-01-01 10:22',
        content:'江宁路红绿灯不亮了，还有个电线杆倒了，车都堵起来了, 请赶快维修'
      }, {
        type: 1,
        time: '2012-01-01 10:22',
        content: '江宁路红绿灯不亮了，还有个电线杆倒了，车都堵起来了, 请赶快维修'
      },
    ]
  },
  goDetail(){
    wx.navigateTo({
      url: '/pages/noticeDetail/noticeDetail'
    })
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