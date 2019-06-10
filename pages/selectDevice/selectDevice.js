// pages/selectDevice/selectDevice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '选择故障设备',
    navType: true,
    searchType: false,
    activeNames: [],
    list: ['a', 'b', 'c'],
    result: ['a', 'b'],
    allList: [{
        name: '电子警察系统',
        checked: [],
        children: [{
            chilname: '摄像头（QDSXJ005）',
            check: false
          },
          {
            chilname: '摄像头114（QDSXJ003）',
            check: false
          },
          {
            chilname: '摄像头118（QDSXJ001）',
            check: false
          },
          {
            chilname: '电线杠23Q（DXG002）',
            check: false
          },
          {
            chilname: '红绿灯指示牌（HLDXSP005）',
            check: false
          },
        ]
      },
      {
        name: '红绿灯系统',
        checked: [],
        children: [{
            chilname: '摄像头11（QDSXJ005）',
            check: false
          },
          {
            chilname: '摄像头22（QDSXJ003）',
            check: false
          },
          {
            chilname: '摄像头33（QDSXJ001）',
            check: false
          },
          {
            chilname: '电线杠44（DXG002）',
            check: false
          },
          {
            chilname: '红绿灯指示牌55',
            check: false
          },
        ]
      },
      {
        name: '交通信号灯系统',
        checked: [],
        children: [{
            chilname: '摄像头a（QDSXJ005）',
            check: false
          },
          {
            chilname: '摄像头s（QDSXJ003）',
            check: false
          },
          {
            chilname: '摄像头f（QDSXJ001）',
            check: false
          },
          {
            chilname: '电线杠12（DXG002）',
            check: false
          },
          {
            chilname: '红绿灯指示牌f',
            check: false
          },
        ]
      },
      {
        name: '采集发布系统',
        checked: [],
        children: [{
            chilname: '摄像1头a（QDSXJ005）',
            check: false
          },
          {
            chilname: '摄像3头s（QDSXJ003）',
            check: false
          },
          {
            chilname: '摄像1头f（QDSXJ001）',
            check: false
          },
          {
            chilname: '电2线杠12（DXG002）',
            check: false
          },
          {
            chilname: '红2绿灯指示牌f',
            check: false
          },
        ]
      },
      {
        name: '停车诱导系统',
        checked: [],
        children: [{
            chilname: '摄21像1头a（QDSXJ005）',
            check: false
          },
          {
            chilname: '摄23像3头s（QDSXJ003）',
            check: false
          },
          {
            chilname: '摄4像1头f（QDSXJ001）',
            check: false
          },
          {
            chilname: '电21线杠12（DXG002）',
            check: false
          },
          {
            chilname: '红562绿灯指示牌f',
            check: false
          },
        ]
      }
    ]
  },
  toggle(e) {
    var ck = this.data.allList[e.currentTarget.dataset.index].children[e.currentTarget.dataset.childindex].check;
    if (this.data.allList[e.currentTarget.dataset.index].checked.indexOf(e.currentTarget.dataset.childindex) == -1) {
      this.data.allList[e.currentTarget.dataset.index].checked.push(e.currentTarget.dataset.childindex)
      this.setData({
        allList: this.data.allList
      })
    } else {
      this.data.allList[e.currentTarget.dataset.index].checked.splice(this.data.allList[e.currentTarget.dataset.index].checked.indexOf(e.currentTarget.dataset.childindex), 1)
      this.setData({
        allList: this.data.allList
      })
    }
    if (ck) {
      this.data.allList[e.currentTarget.dataset.index].children[e.currentTarget.dataset.childindex].check = false
      this.setData({
        allList: this.data.allList
      })
    } else {

      this.data.allList[e.currentTarget.dataset.index].children[e.currentTarget.dataset.childindex].check = true
      this.setData({
        allList: this.data.allList
      })
    }

  },
  onChange(e) {
    this.setData({
      activeNames: e.detail
    });
  },
  gonext() {
    var a = this.data.allList.filter(item => {
      return item.checked.length != 0
    })
    if (a.length == 0) {
      wx.showToast({
        title: '请至少选择一项',
        icon: 'none',
        duration: 2000
      })
    } else {
      getApp().globalData.DeviceList = this.data.allList
      wx.redirectTo({
        url: '/pages/waitingCheck/waitingCheck'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (getApp().globalData.DeviceList.length != 0) {
      const returnedTarget = Object.assign(this.data.allList, getApp().globalData.DeviceList);
      this.setData({
        allList: this.data.allList
      })
      this.data.allList.forEach(item => {
        if (item.checked.length != 0) {
          this.data.activeNames.push(item.name)
          this.setData({
            activeNames: this.data.activeNames
          })
        }
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