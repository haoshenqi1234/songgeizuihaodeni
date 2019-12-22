// pages/surprise/surprise.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a:"1",
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

  },
send: function () {
    this.data.a = ((this.data.a == "1") ? "2" : "1"),
      this.setData({
        a: this.data.a
      })
    wx.showToast({
      title: this.data.a,
      duration: 1000
    })
    this.sendRequset(this.makeObj(this.data.a, ""));
  },
  sendRequset: function (obj) {
    wx.request(obj);
  },
  
  makeObj: function (sta) {
    var obj = {
      url: "http://api.heclouds.com/devices/562085140/datapoints?type=3",

      header: {
        "Content-Type": "application/json",
        "api-key": "X23veW4=d14jBJgdyQTaxTcTilw=",
      },
      method: "post",
      data: {

        "a": sta == "1" ? 1 : 2,
       
      },
      
    }
    return obj;
  },

})