// pages/acceptance/acceptance.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '验收',
    navType: true,
    searchType: false,
    step: 5,
    stepline: '',
    visible: false,
    actions: [
      {
        name: '取消',
        color: '#222',
      },
      {
        name: '提验',
        color: '#245098'
      }
    ],
    stepList: [
      {
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
        active: true,
        name: '验收',
      }
    ],
    pass:false
  },
  openVisible(){
    this.setData({
      visible: true
    })
  },
  handleClick({ detail }) {
    const index = detail.index;
    if (index === 0) {
    } else if (index === 1) {
    }
    this.setData({
      visible: false
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    } else if (this.data.step == 5) {
      this.setData({
        stepline: '78'
      })
    }
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