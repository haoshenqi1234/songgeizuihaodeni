var app = getApp();
Page({
  data: {
    MusicList: [{
      url: 'http://music.163.com/song/media/outer/url?id=27180681.mp3',
      image: 'https://p2.music.126.net/r3i_ohvymLmdMpiF-dcN2A==/1353498813846118.jpg?param=34y34',
      name: 'lemoon tree',
      author: 'Fools Garden',
    }],
     MusicList1: [{
       url: 'http://music.163.com/song/media/outer/url?id=36990266.mp3',
       image: 'https://p2.music.126.net/8dzD62VK8jLDbhEqkmpIAg==/18277181788626198.jpg?param=130y130',
       name: 'Faded',
       author: 'Alan Walker / Iselin Solheim',
    }],
    MusicList2: [{
      url: 'http://music.163.com/song/media/outer/url?id=17793698.mp3',
      image: 'https://p1.music.126.net/u6uX8dcgOgCGMGJf8k_W7w==/581641651102216.jpg?param=34y34',
      name: 'Whistle',
      author: 'Flo Rida',
    }],
    MusicList3: [{
      url: 'http://music.163.com/song/media/outer/url?id=1293886117.mp3',
      image: 'https://p2.music.126.net/tt8xwK-ASC2iqXNUXYKoDQ==/109951163606377163.jpg?param=130y130',
      name: '年少有为',
      author: '李荣浩',
    }],
    MusicList4: [{
      url: 'http://music.163.com/song/media/outer/url?id=1365898499.mp3',
      image: 'https://p1.music.126.net/Bq6Io8lpY1l2HsQ28QKFlw==/109951164083996255.jpg?param=130y130',
      name: '失眠飞行',
      author: '接个吻，开一枪 / 沈以诚 / 薛明媛',
    }],
    MusicList5: [{
      url: 'http://music.163.com/song/media/outer/url?id=461811728.mp3',
      image: 'https://p1.music.126.net/UsSAd3Bdf77DjhCuTSEvUw==/109951163077613693.jpg?param=34y34',
      name: '我管你',
      author: '华晨宇',
    }],
    progress: 0

  },
   
  MusicStart: function (e) {
    var progress = parseInt((e.detail.currentTime / e.detail.duration) * 100)
    var that = this
    that.setData({
      progress: progress
    })
    console.log(progress + '%')
  },
  MusicEnd: function () {
    wx.showModal({
      title: '提示',
      content: '音乐已播放完毕',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
})
