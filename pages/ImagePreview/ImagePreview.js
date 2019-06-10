// pages/ImagePreview/ImagePreview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '1/3',
    navType: true,
    visible:false,
    searchType: false,
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: false,
    autoplay: false,
    duration: 500,
    Height:'',
    currentIndex:0,
  },
  handleOk() {
    this.setData({
      visible: false
    });
    var lists = this.data.imgUrls
    lists.splice(this.data.currentIndex, 1);
    this.setData({
      imgUrls: lists
    })
    this.setData({
      title: this.data.currentIndex + 1 + '/' + this.data.imgUrls.length
    })
  },
  delImg(e){
    console.log(e.currentTarget)
    this.setData({
      visible: true
    });
  },
  handleClose() {
    this.setData({
      visible: false
    });
  },
  imgHeight: function (e) {
    var that = this
    var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度
    var imgh = e.detail.height;//图片高度
    var imgw = e.detail.width;//图片宽度
    var swiperH = winWid * imgh / imgw + "px"//等比设置swiper的高度。 即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度 ==》swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
    that.setData({
      Height: swiperH//设置高度
    })
  },
  slideChange(e){
    this.setData({
      currentIndex: e.detail.current
    })
    console.log(e.detail.current)
    this.setData({
      title: e.detail.current + 1 + '/' + this.data.imgUrls.length
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