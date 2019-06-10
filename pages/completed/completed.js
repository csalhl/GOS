var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var ss = require("../../utils/utils.js")
const { $Toast } = require('../../dist/base/index');

Page({
  data: {
    inputShowed: false,
    inputVal: "",
    current: '0',
    search: '',
    title: '',
    navType: false,
    show: false,
    currentDate:'',
    currentDate2:'',
    confirmbutton: '',
    cancelbutton: '',
    ontime:true,
    starTime:'开始时间',
    endTime:'结束时间',
    minDate: new Date(2018, 1, 1).getTime(),
    allList: [{
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
    activeIndex: 0,
  },
  tabChange(){
    if(this.data.ontime){
      this.setData({
        ontime: false
      })
    }else{
      this.setData({
        ontime: true
      })
    }
  },
  tabCancle(){
    this.setData({
      show:false,
      starTime: '开始时间',
      endTime: '结束时间',
    })
  },
  tabConfirm() {
    if (this.data.starTime == '开始时间'){
       $Toast({
         content: '请选择开始时间'
      });
    } else if (this.data.endTime == '结束时间') {
       $Toast({
        content: '请选择结束时间'
      });
    } else {
      this.setData({
        show: false
      })

    }
    
  },
  currentDateChange(e){
    console.log(e.detail.getValues().join('-'))
    this.setData({
      starTime: e.detail.getValues().join('-')
    })
  },
  currentDateChange2(e) {
    this.setData({
      endTime: e.detail.getValues().join('-')
    })
  },
  showTime(){
    this.setData({
      show:true
    })
  },
  popClose() {
    this.setData({
      show: false
    })
  },
  goDetail(e) {
    console.log(e)
    if (e.currentTarget.dataset.id == 1) {
      wx.navigateTo({
        url: '/pages/waitingorder/waitingorder'
      })
    } else if (e.currentTarget.dataset.id == 2) {
      wx.navigateTo({
        url: '/pages/onsite/onsite'
      })
    } else if (e.currentTarget.dataset.id == 3) {
      wx.navigateTo({
        url: '/pages/waitingCheck/waitingCheck'
      })
    } else if (e.currentTarget.dataset.id == 4) {
      wx.navigateTo({
        url: '/pages/orderOver/orderOver'
      })
    }
  },
  handleChange({
    detail
  }) {
    this.setData({
      current: detail.key
    });
  },
  onLoad: function () {
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  }
});