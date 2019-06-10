// pages/toRepair/toRepair.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '我要报修',
    navType: true,
    searchType: false,
    imagesList: [],
    inputnote: 200,
    inputnotes:200,
    unitVal:'',
  },
  goUnit(){
    wx.navigateTo({
      url: '/pages/selectUnit/selectUnit'
    })
  },
  bindTextAreaBlur(e) {
    this.setData({
      inputnote: this.data.inputnotes - e.detail.value.length
    })
  },
  uploader: function () {
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
      success: function (res) {
        wx.showToast({
          title: '正在上传...',
          icon: 'loading',
          mask: true,
          duration: 500
        })
        for (let i = 0; i < res.tempFiles.length; i++) {
          if (res.tempFiles[i].size > maxSize) {
            flag = false;
            console.log(111)
            wx.showModal({
              content: '图片太大，不允许上传',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                }
              }
            });
          }
        }
        if (pics.length > maxLength - 1) {
          console.log('222');
          wx.showModal({
            content: '最多能上传' + maxLength + '张图片',
            showCancel: false,
            success: function (res) {
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
      fail: function (res) {
        console.log(res);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      if(options.val != ''){
        this.setData({
          unitVal: options.val
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