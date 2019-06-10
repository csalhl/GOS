// pages/waitingCheck/waitingCheck.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '待提验',
    navType: true,
    searchType: false,
    countDownNum: '17:50', //倒计时初始值
    step: 3,
    show: false,
    stepline: '',
    imagesList: [],
    errorSystem: '请选择',
    errorDevice: '请选择',
    inputnote: 40,
    inputnotes: 40,
    array: ['多媒体教学系统', '交通信号灯系统'],
    array2: ['信号灯', '交通灯'],
    DeviceList: [],
    total: '',
    stepList: [{
        active: false,
        name: '待接单',
      },
      {
        active: false,
        name: '待到场',
      },
      {
        active: true,
        name: '待提验',
      },
      {
        active: false,
        name: '验收',
      }
    ]
  },
  gonext() {
    wx.navigateTo({
      url: '/pages/apply/apply'
    })
  },
  errorSystem(e) {
    this.setData({
      errorSystem: this.data.array[e.detail.value]
    })
  },
  errorDevice(e) {
    this.setData({
      errorDevice: this.data.array2[e.detail.value]
    })
  },
  hide() {
    this.setData({
      show: false
    })
  },
  show() {
    this.setData({
      show: true
    })
  },
  bindTextAreaBlur(e) {
    this.setData({
      inputnote: this.data.inputnotes - e.detail.value.length
    })
  },
  uploader: function() {
    var that = this;
    var pics = this.data.imagesList;
    let imagesList = [];
    let maxSize = 1024 * 1024;
    let maxLength = 6;
    let flag = true;
    wx.chooseImage({
      count: 6, //最多可以选择的图片总数
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        wx.showToast({
          title: '正在上传...',
          icon: 'loading',
          mask: true,
          duration: 500
        })
        for (let i = 0; i < res.tempFiles.length; i++) {
          if (res.tempFiles[i].size > maxSize) {
            flag = false;
            wx.showModal({
              content: '图片太大，不允许上传',
              showCancel: false,
              success: function(res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                }
              }
            });
          }
        }
        if (pics.length > maxLength - 1) {
          wx.showModal({
            content: '最多能上传' + maxLength + '张图片',
            showCancel: false,
            success: function(res) {
              if (res.confirm) {
                console.log('确定');
              }
            }
          })
        }
        if (flag == true && pics.length <= maxLength - 1) {
          var imgsrc = res.tempFilePaths;
          pics = pics.concat(imgsrc);
          that.setData({
            imagesList: pics
          });
        }
        // wx.uploadFile({
        //   url: 'https://shop.gxyourui.cn',
        //   filePath: res.tempFilePaths[0],
        //   name: 'images',
        //   header: {
        //     "Content-Type": "multipart/form-data",
        //     'Content-Type': 'application/json'
        //   },
        //   success: function(data) {
        //     console.log(data);
        //   },
        //   fail:function(data) {
        //     console.log(data);
        //   }
        // })
        console.log(res);
      },
      fail: function(res) {
        console.log(res);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (getApp().globalData.DeviceList.length == 0) {

    } else {
      this.setData({
        DeviceList: getApp().globalData.DeviceList
      })
      const sum = this.data.DeviceList.reduce(function(x, y) {
        return x + y.checked.length
      }, 0)
      this.setData({
        total: sum
      })
    }
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