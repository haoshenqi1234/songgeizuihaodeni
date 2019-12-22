var app = getApp();
Page({
  data: {
    MusicList: [{
      url: 'http://music.163.com/song/media/outer/url?id=1357785909.mp3',
      image: 'https://p1.music.126.net/USRrIEfSNxJ4JnfKp4f6pA==/109951164470147956.jpg?param=34y34',
      name: '野狼disco',
      author: '宝石gem',
    }],
    MusicList1: [{
      url: 'http://music.163.com/song/media/outer/url?id=569214252.mp3',
      image: 'https://p1.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=34y34',
      name: '如果有一天我变得很有钱',
      author: '毛不易',
    }],
    MusicList2: [{
      url: 'http://music.163.com/song/media/outer/url?id=5255987.mp3',
      image: 'https://p1.music.126.net/OjibHiyRong4S0RgBFp-Pw==/2301277836958388.jpg?param=34y34',
      name: '你若成风',
      author: '许嵩',
    }],
    MusicList3: [{
      url: 'http://music.163.com/song/media/outer/url?id=168091.mp3',
      image: 'https://p1.music.126.net/C6txAWMGlVmAcAD37RVutQ==/122045790684028.jpg?param=34y34',
      name: '蓝莲花',
      author: '许巍',
    }],
    MusicList4: [{
      url: 'http://music.163.com/song/media/outer/url?id=515687543.mp3',
      image: 'https://p2.music.126.net/9xBDDB3kpKCmAyMPe79MbA==/109951163051328772.jpg?param=130y130',
      name: '带你去旅行',
      author: '校长',
    }],
    MusicList5: [{
      url: 'http://music.163.com/song/media/outer/url?id=451016086.mp3',
      image: 'https://p2.music.126.net/0gxKtZKSSIOPcli9bj_2rQ==/109951162835979914.jpg?param=34y34',
      name: '我在人民广场吃炸鸡',
      author: '程思佳',
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
