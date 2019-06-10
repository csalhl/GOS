// pages/assign/assign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foucs: false,
    blur: false,
    title: '选择服务人员',
    navType: true,
    searchType: false,
    current: [],
    showPerson: [],
    mainPerson: {
      name: '',
      url: ''
    },
    searchList: [{
        id: 0,
        name: '张三',
        url: '../images/user.jpg',
        checked: false
      },
      {
        id: 1,
        name: '李四',
        url: '../images/user2.jpg',
        checked: false
      },
      {
        id: 2,
        name: '王五',
        url: '../images/user3.jpg',
        checked: false
      },
    ],
  },
  assign() {
    if (!this.data.mainPerson.url) {
      wx.showToast({
        title: '请选择主服务人员',
        icon: 'none',
        duration: 2000
      })
    } else {
      let stat = this.data.searchList.filter(item => {
        return item.checked
      })
      if (stat.length > 0) {

      } else {
        wx.showToast({
          title: '请选择次服务人员',
          icon: 'none',
          duration: 2000
        })
      }
    }
  },
  handleFruitChange({
    detail = {}
  }) {
    console.log(detail)
    const index = this.data.current.indexOf(detail.value);
    index === -1 ? this.data.current.push(detail.value) : this.data.current.splice(index, 1);
    this.setData({
      current: this.data.current
    });
  },
  delPerson() {
    var _name = "mainPerson.name"
    var _url = "mainPerson.url"
    this.setData({
      [_name]: '',
      [_url]: ''
    })
  },
  delsPerson(e) {
    let index = e.currentTarget.dataset.index
    let id = e.currentTarget.dataset.id
    this.data.showPerson.splice(this.data.showPerson.indexOf(id), 1)
    this.data.searchList[index].checked = false,
    this.setData({
      searchList: this.data.searchList,
      showPerson: this.data.showPerson
    })
    console.log(this.data.showPerson)
  },
  checkboxChange(e) {
    let index = e.currentTarget.dataset.index
    let id = e.currentTarget.dataset.id
    if (this.data.showPerson.indexOf(id) == -1) {
      this.data.showPerson.push(id)
      this.setData({
        showPerson: this.data.showPerson
      })
    } else {
      this.data.showPerson.splice(this.data.showPerson.indexOf(id), 1)
      this.setData({
        showPerson: this.data.showPerson
      })
    }
    if (this.data.searchList[index].checked) {
      this.data.searchList[index].checked = false
      this.setData({
        searchList: this.data.searchList,
      })
    } else {
      this.data.searchList[index].checked = true
      this.setData({
        searchList: this.data.searchList,
      })
    }
    console.log(this.data.showPerson)
    // let checked = e.detail.value;
    // let data = this.data.searchList.filter(item => {
    //   return checked.indexOf(item.id.toString()) != -1
    // }); 
    // this.setData({
    //   showPerson:data
    // })
  },
  choseUser(e) {
    this.setData({
      mainPerson: e.currentTarget.dataset,
      blur: false
    })
  },
  bindfocus() {
    this.setData({
      active: true
    })
  },
  bindblur() {
    this.setData({
      active: false
    })
  },
  bindinput(e) {
    if (e.detail.value) {
      this.setData({
        blur: true
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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