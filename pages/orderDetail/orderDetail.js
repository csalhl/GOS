// pages/orderDetail/orderDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '工单详情',
    navType: true,
    searchType: false,
    orderType: 0,
    pass: true,
    show: false,
    isScroll:false,
    orderList: [{
      name: '已报修',
      img: '../images/icon37.png',
    }, {
      name: '已接单',
      img: '../images/icon38.png',
    }, {
      name: '现场维修中',
      img: '../images/icon39.png',
    }, {
      name: '已完成',
      img: '../images/icon40.png',
    }]
  },
  hide(){
    this.setData({
      show:false
    })
  },
  show() {
    this.setData({
      show: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.id)
    this.setData({
      orderType: options.id
    })
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