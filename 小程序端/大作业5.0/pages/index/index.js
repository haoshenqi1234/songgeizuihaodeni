//index.js
//获取应用实例
var app = getApp()
Page({
  mood: function () {
    wx.navigateTo({
      url: '../mood/mood',
    })
  },
  weather: function () {
    wx.navigateTo({
      url: '../weather/weather',
    })
  },
  board: function () {
    wx.navigateTo({
      url: '../board/board',
    })
  },
  surprise: function () {
    wx.navigateTo({
      url: '../surprise/surprise',
    })
  },
  data: {
    onLoad: function () { },
    imgUrls: ["https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/02/05/ChMkJlbKyS-Ib8ahAB1gILyS9KgAALIKwAQYgAAHWA4822.jpg",
              "https://i04piccdn.sogoucdn.com/099a1414240cd024",
              "https://i02piccdn.sogoucdn.com/bea986994ae38511"],

    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
