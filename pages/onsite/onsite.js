// pages/onsite/onsite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '待到场',
    navType: true,
    searchType: false,
    timer: '',//定时器名字
    countDownNum: '17:50',//倒计时初始值
    step: 2,
    stepline: '',
    shows:false,
    imagesList: [],
    actionList:[
      { name: '选择照片文件', img:'../images/icon48.png' },
      { name: '选择视频文件（时长不超过20s）', img: '../images/icon49.png'  },
      { name: '拍摄', img: '../images/icon50.png' }
    ],
    stepList: [{
      active: false,
        name: '待接单',
      },
      {
        active: true,
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
  showAction(){
    this.setData({
      shows:true
    })
  },
  hide() {
    this.setData({
      shows: false
    })
  },
  onClose() {
    this.setData({ shows: false });
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
      sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
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
        if (pics.length > maxLength-1) {
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
        if (flag == true && pics.length <= maxLength-1) {
          var imgsrc = res.tempFilePaths;
          pics = pics.concat(imgsrc);
          that.setData({
            imagesList: pics,shows: false
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
  uploadVideo(){
    wx.chooseVideo({
      sourceType: ['album'],
      maxDuration: 60,
      camera: 'back',
      success(res) {
        this.setData({ shows: false})
        console.log(res.tempFilePath)
      }
    })
  },
  takePhoto() {
    var that = this;
    var pics = this.data.imagesList;
    let imagesList = [];
    let maxSize = 1024 * 1024;
    let maxLength = 6;
    let flag = true;
    wx.chooseImage({
      count: 6, //最多可以选择的图片总数
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
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
            imagesList: pics,
            shows :false
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
  error(e) {
    console.log(e.detail)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  handleImagePreview(e) {
    wx.navigateTo({
      url: '/pages/ImagePreview/ImagePreview'
    })
  },
  Submits(){
    if (this.data.imagesList.length){
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000
      })
    }else{
      wx.showToast({
        title: '请上传照片',
        icon: 'none',
        duration: 2000
      })
    }
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