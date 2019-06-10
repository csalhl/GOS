var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    current: '0',
    search: '',
    title: '',
    navType: false,
    tabs: [{
        name: "全部",
        val: '1',
        allList: [
          {
            id: 'BX-20180320-0002',
            status: '4',
            detail: '江宁路的红路44灯',
            level: '一般',
            date: '2019-09-01 12:10',
            type: '4'
          },
          {
            id: 'BX-20180320-0002',
            status: '1',
            detail: '江宁路的红路44灯不亮了，还有个电线杆也倒了',
            level: '一般',
            date: '2019-09-01 12:10',
            type: '1'
          },
          {
            id: 'BX-20180320-1112',
            status: '2',
            detail: '江西路的红5467路灯不亮了，还有个电线杆也倒了',
            level: '超难',
            date: '2017-09-01 12:10',
            type: '2'
          },
          {
            id: 'BX-20180320-1112',
            status: '3',
            detail: '江西路的红5467路灯不亮了，还有个电线杆也倒了',
            level: '超难',
            date: '2017-09-01 12:10',
            type: '3'
          },
          {
            id: 'BX-20180320-1112',
            status: '2',
            detail: '江西路的红5467路灯不亮了，还有个电线杆也倒了',
            level: '超难',
            date: '2017-09-01 12:10',
            type: '2'
          },
          {
            id: 'BX-20180320-1112',
            status: '1',
            detail: '江西路的红5467路灯不亮了，还有个电线杆也倒了',
            level: '超难',
            date: '2017-09-01 12:10',
            type: '3'
          },
          {
            id: 'BX-20180320-1112',
            status: '2',
            detail: '江西路的红5467路灯不亮了，还有个电线杆也倒了',
            level: '超难',
            date: '2017-09-01 12:10',
            type: '2'
          },
          {
            id: 'BX-20180320-1112',
            status: '3',
            detail: '江西路的红5467路灯不亮了，还有个电线杆也倒了',
            level: '超难',
            date: '2017-09-01 12:10',
            type: '3'
          }
        ],
      },
      {
        name: "待接单",
        val: '2',
        allList: [{
          id: 'BX-20180320-0002',
          status: '1',
          detail: '江宁路的红路523灯不亮了，还有个电线杆也倒了',
          level: '一般',
          date: '2019-09-01 12:10',
          type: '2'
        }
        ],
      }, {
        name: "待到场",
        val: '3',
        allList: [{
          id: 'BX-20180320-0002',
          status: '1',
          detail: '江宁路的红路灯不123亮了，还有个电线杆也倒了',
          level: '一般',
          date: '2019-09-01 12:10',
          type: '2'
        },
        {
          id: 'BX-20180320-1112',
          status: '2',
          detail: '江西路的红路灯1231不亮了，还有个电线杆也倒了',
          level: '超难',
          date: '2017-09-01 12:10',
          type: '1'
        }
        ],
      }, {
        name: "待提验",
        val: '4',
        allList: [{
          id: 'BX-20180320-0002',
          status: '3',
          detail: '江宁路的红路灯不亮了，还有个电线1231杆也倒了',
          level: '一般',
          date: '2019-09-01 12:10',
          type: '2'
        },
        {
          id: 'BX-20180320-1112',
          status: '2',
          detail: '江西路的红路灯不亮了，还有个电线杆也倒了',
          level: '超难',
          date: '2017-09-01 12:10',
          type: '1'
        }
        ],
      }, {
        name: "待到场",
        val: '4',
        allList: [{
          id: 'BX-20180320-0002',
          status: '3',
          detail: '江宁路的红路灯不亮了，还有个457654电线1231杆也倒了',
          level: '一般',
          date: '2019-09-01 12:10',
          type: '2'
        },
        {
          id: 'BX-20180320-1112',
          status: '2',
          detail: '江西123路灯不亮了，还有个电线杆也倒了',
          level: '超难',
          date: '2017-09-01 12:10',
          type: '1'
        }
        ],
      }, {
        name: "待分派",
        val: '4',
        allList: [{
          id: 'BX-20180320-0002',
          status: '3',
          detail: '江宁路的红路灯不亮了，还有个电线1231杆也倒了',
          level: '一般',
          date: '2019-09-01 12:10',
          type: '2'
        },
        ],
      }, {
        name: "待审核",
        val: '4',
        allList: [{
          id: 'BX-20180320-0002',
          status: '3',
          detail: '江宁路的红路21灯不亮了，还有个电线1231杆也倒了',
          level: '一般',
          date: '2019-09-01 12:10',
          type: '2'
        },
        {
          id: 'BX-20180320-1112',
          status: '2',
          detail: '江西路的红路灯不亮了，还有个电线杆也倒了',
          level: '超难',
          date: '2017-09-01 12:10',
          type: '1'
        }
        ],
      }
    ],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },
  goDetail(e){
    console.log(e)
    if (e.currentTarget.dataset.id == 1){
      wx.navigateTo({
        url: '/pages/waitingorder/waitingorder'
      })
    } else if (e.currentTarget.dataset.id == 2){
      wx.navigateTo({
        url: '/pages/onsite/onsite'
      })
    } else if (e.currentTarget.dataset.id == 3){
      wx.navigateTo({
        url: '/pages/waitingCheck/waitingCheck'
      })
    } else if (e.currentTarget.dataset.id == 4) {
      wx.navigateTo({
        url: '/pages/orderOver/orderOver'
      })
    }
  },
  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
  },
  onLoad: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  }
});