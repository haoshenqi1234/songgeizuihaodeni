Page({
  happy: function () {
    wx.navigateTo({
      url: '../happy/happy',
    })
  },
  sad: function () {
    wx.navigateTo({
      url: '../sad/sad',
    })
  },
  angry: function () {
    wx.navigateTo({
      url: '../angry/angry',
    })
  },
  bored: function () {
    wx.navigateTo({
      url: '../bored/bored',
    })
  },
  go: function () {
    wx.navigateTo({
      url: '../index/index',
    })
  },
  data: {
    onLoad: function () { },
    imgUrls: [
      "https://i02piccdn.sogoucdn.com/cad30e327269f9a3",
      "https://i04piccdn.sogoucdn.com/ea1b43cbeb6dbd46",
      "https://i01piccdn.sogoucdn.com/fcb247986baaea4e"
    ],

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
