var util = require('../../utils/util1.js');

// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    initData(this);
  },

  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {
    initData(this);
    util.setListStatus
  },
  setListStatus: function setListStatus() { //list列表删除按钮close
    var midData = this.data.data
    for (var value of midData) {
      value["status"] == undefined ? value["status"] = "close" : value["status"] = "close"
    }
    this.setData({
      data: midData
    })
  },

  /**
   * 编辑事件
   */
  edit(e) {
    var id = e.currentTarget.dataset.id;
    // 跳转 navigateTo
    wx.navigateTo({
      url: '../add/add?id=' + id
    })
  },
  onDeleteTap: function deleteData(e) {//删除数据并缓存
    var midData = this.data.content;
    var deleteId = e.currentTarget.dataset.deleteid;
    console.log(deleteId + "kk")
    // midData.splice(deleteId, 1)
    wx.setStorageSync("txt", midData)
    this.setData({
      data: midData
    })
    wx.navigateBack();
  }, //删除数据
  /**
   * 添加事件
   */
  add() {
    wx.navigateTo({
      url: '../add/add',
    })
  }
})

/**
 * 处理初始化页面列表数据
 */
function initData(page) {
  var arr = wx.getStorageSync('txt');
  if (arr.length) {
    arr.forEach((item, i) => {
      var t = new Date(Number(item.time));
      item.time = util.dateFormate(t);
    })
    page.setData({
      lists: arr
    })
  }
}