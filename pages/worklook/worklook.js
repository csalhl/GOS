// pages/wroklook/worklook.js
const App = getApp();
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: '头部标题'
    },
    isShowSearch: {
      type: Boolean,
      value: true
    },
    isShowBack: {
      type: Boolean,
      value: true
    }
  },
  data: {
    // 这里是一些组件内部数据
    navH: 0,
    sortH: 0,
    pageH:0,
    title: '',
    navType: false,
    searchType: true,
    currentTab: 0,
    currentIndex: 0,
    schedule: '按进度',
    times: '按时间',
    propertys: '按属性',
    verifyselect: false,
    showing: false,
    verifyselect2: false,
    showing2: false,
    verifyselect3: false,
    showing3: false,
    tagList: [],
    verify: [{
        name: "取消筛选",
        checked: false
      },
      {
        name: "待接单",
        checked: true
      },
      {
        name: "待到场",
        checked: true
      },
      {
        name: "审核中",
        checked: true
      },
      {
        name: "待提验",
        checked: true
      },
      {
        name: "验收中",
        checked: true
      },
      {
        name: "已完成",
        checked: true
      }
    ],
    verify2: [{
        name: "取消筛选",
        checked: false
      },
      {
        name: "当天",
        checked: false
      },
      {
        name: "近7天",
        checked: false
      },
      {
        name: "近1个月",
        checked: false
      }
    ],
    verify3: [{
        name: '接单超时',
        checked: false,
        color: '#494b4c'
      },
      {
        name: '到场超时',
        checked: false,
        color: '#494b4c'
      },
      {
        name: '达标',
        checked: false,
        color: '#494b4c'
      },
      {
        name: '不达标',
        checked: false,
        color: '#494b4c'
      }
    ],
    allList: [{
        id: 'BX-20180320-0002',
        status: '1',
        detail: '江宁路的红路44灯不亮了，还有个电线杆也倒了',
        level: '一般',
        date: '2019-09-01 12:10',
        type: '2'
      },
      {
        id: 'BX-20180320-1112',
        status: '2',
        detail: '江西路的红5467路灯不亮了，还有个电线杆也倒了',
        level: '超难',
        date: '2017-09-01 12:10',
        type: '1'
      },
      {
        id: 'BX-20180320-1112',
        status: '3',
        detail: '江西路的红5467路灯不亮了，还有个电线杆也倒了',
        level: '超难',
        date: '2017-09-01 12:10',
        type: '2'
      },
      {
        id: 'BX-20180320-1112',
        status: '2',
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
        type: '1'
      },
      {
        id: 'BX-20180320-1112',
        status: '2',
        detail: '江西路的红5467路灯不亮了，还有个电线杆也倒了',
        level: '超难',
        date: '2017-09-01 12:10',
        type: '1'
      },
      {
        id: 'BX-20180320-1112',
        status: '2',
        detail: '江西路的红5467路灯不亮了，还有个电线杆也倒了',
        level: '超难',
        date: '2017-09-01 12:10',
        type: '1'
      },
      {
        id: 'BX-20180320-1112',
        status: '2',
        detail: '江西路的红5467路灯不亮了，还有个电线杆也倒了',
        level: '超难',
        date: '2017-09-01 12:10',
        type: '1'
      },
      {
        id: 'BX-20180320-1112',
        status: '2',
        detail: '江西路的红5467路灯不亮了，还有个电线杆也倒了',
        level: '超难',
        date: '2017-09-01 12:10',
        type: '1'
      },
      {
        id: 'BX-20180320-1112',
        status: '2',
        detail: '江西路的红5467路灯不亮了，还有个电线杆也倒了',
        level: '超难',
        date: '2017-09-01 12:10',
        type: '1'
      }
    ],
  },
  ready() {
    var self = this;
    var si = App.globalData.gSystemInfo;
    let node = self.createSelectorQuery().select('.sort');
    node.boundingClientRect(
      function (rect) {
        self.setData({
          sortH: App.globalData.navHeight,
          pageH: rect.height,
          navH: App.globalData.navHeight + rect.height
        })
      }
    ).exec();
  },
  methods: {
    tagChange(e) {
      let index = e.currentTarget.dataset.id; //当前点击元素的自定义数据，这个很关键
      let name = e.currentTarget.dataset.name;
      if (this.data.tagList.indexOf(name) == -1) {
        this.data.tagList.push(name)
      } else {
        this.data.tagList.splice(this.data.tagList.indexOf(name), 1)
      }
      let selectIndex = this.data.verify3; //取到data里的selectIndex
      selectIndex[index].checked = !selectIndex[index].checked; //点击就赋相反的值
      this.setData({
        verify3: selectIndex //将已改变属性的json数组更新
      })
    },
    tagReset(e) {
      let selectIndex = this.data.verify3; //取到data里的selectIndex
      selectIndex.forEach(function(value, index, arrSelf) {
        value.checked = false
      });
      this.setData({
        verify3: selectIndex, //将已改变属性的json数组更新
        tagList: []
      })
    },
    chose(e) {
      this.setData({
        currentTab: e.currentTarget.dataset.id
      })
      if (e.currentTarget.dataset.id == 0) {
        this.setData({
          schedule: '按进度'
        })
      } else {
        this.setData({
          schedule: e.currentTarget.dataset.name
        })
      }
      this.setData({
        verifyselect: e.currentTarget.dataset.type
      })
      this.hide()
    },
    choses(e) {
      this.setData({
        currentTab: e.currentTarget.dataset.id
      })
      if (e.currentTarget.dataset.id == 0) {
        this.setData({
          times: '按时间'
        })
      } else {
        this.setData({
          times: e.currentTarget.dataset.name
        })
      }
      if (this.data.currentTab > 0) {
        this.setData({
          verifyselect2: true,
        })
      } else {
        this.setData({
          verifyselect2: false
        })
      }
      this.setData({
        currentIndex: 0,
        showing: false,
        showing2: false,
      })
    },
    hide() {
      if (this.data.currentTab > 0) {
        this.setData({
          verifyselect: true,
        })
      } else {
        this.setData({
          verifyselect: false
        })
      }
      this.setData({
        currentIndex: 0,
        showing: false,
        showing2: false,
      })
      if (this.data.tagList.length > 0) {
        this.setData({
          verifyselect3: true,
          showing3: false,
        })
      } else {
        this.setData({
          verifyselect3: false,
          showing3: false,
        })
      }
    },
    tagOk() {
      var self = this
      let selectIndex = this.data.verify3; //取到data里的selectIndex
      if (this.data.tagList.length > 0) {
        self.setData({
          verifyselect3: true,
          showing3: false,
          currentIndex: 0,
        })
      } else {
        self.setData({
          verifyselect3: false,
          showing3: false,
          currentIndex: 0,
        })
      }
    },
    toggle(e) {
      if (e.currentTarget.dataset.index == 1) {
        this.setData({
          showing: true,
          currentIndex: 1
        })
      } else if (e.currentTarget.dataset.index == 2) {
        this.setData({
          showing2: true,
          currentIndex: 2
        })
      } else if (e.currentTarget.dataset.index == 3) {
        this.setData({
          showing3: true,
          currentIndex: 3
        })
      } else {
        this.setData({
          currentIndex: 0,
        })
      }
    },
  }
});