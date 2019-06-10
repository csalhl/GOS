// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currents: '0',
    type: 0,
    isrepair:false,
    bar: [{
      src: '../images/i7.png',
      selectsrc: '../images/i8.png',
      name: '报修',
      active: true,
    },
    {
      src: '../images/i9.png',
      selectsrc: '../images/i10.png',
      name: '个人中心',
      active: false,
    },
    ],
    barType: true,
    currentIndex: 0,
  },
  titleClick: function (e) {
    var str = "bar[0].active"
    var str1 = "bar[1].active"
    if (e.currentTarget.dataset.idx == 0) {
      this.setData({
        type: 0,
        [str]: true,
        [str1]: false,
      })
    } else if (e.currentTarget.dataset.idx == 1) {
      this.setData({
        type: 1,
        [str]: false,
        [str1]: true,
      })
    }
  },
  handleChanges({
    detail
  }) {
    this.setData({
      currents: detail.key,
      type: detail.key
    });
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