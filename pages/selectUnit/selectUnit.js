// pages/selectUnit/selectUnit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '选择维护单元',
    navType: true,
    searchType: false,
    value:'',
    code:['A','B','C','D','E'],
    searchStatus:false,
    unitListL:[
      '云南路和北京西路交叉口',
      '进香河路和北京东路交叉口',
      '南山南路和北山北交叉口',
      '淮海路北路和中山东路南交叉口',
      '眉山路和花欣路南交叉口'
    ]
  },
  searchChange(e){
    console.log(e.detail)
    if (e.detail == ''){
        this.setData({
          searchStatus: false
        })
    }else{
      this.setData({
        searchStatus: true
      })
    }
  },
  select(e){
    e.currentTarget.dataset.val
    wx.navigateTo({
      url: '/pages/toRepair/toRepair?val=' + e.currentTarget.dataset.val,
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