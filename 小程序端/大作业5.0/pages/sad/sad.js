var app = getApp();
Page({
  data: {
    MusicList: [{
      url: 'http://music.163.com/song/media/outer/url?id=1407551413.mp3',
      image: 'https://p2.music.126.net/TzlSVBiNtpRD2b7MT2Hi-w==/109951164527590793.jpg?param=34y34',
      name: '麻雀',
      author: '李荣浩',
    }],
    MusicList1: [{
      url: 'http://music.163.com/song/media/outer/url?id=569200213.mp3',
      image: 'https://p2.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=130y130',
      name: '消愁',
      author: '毛不易',
    }],
    MusicList2: [{
      url: 'http://music.163.com/song/media/outer/url?id=25706282.mp3',
      image: 'http://pic.baike.soso.com/ugc/baikepic2/13704/20170613001031-1437730483.jpg/300',
      name: '夜空中最亮的星',
      author: '逃跑计划',
    }],
    MusicList3: [{
      url: 'http://music.163.com/song/media/outer/url?id=26113988.mp3',
      image: 'https://p1.music.126.net/fqleir2BWqbmE8tDNLa5Pg==/109951163789160762.jpg?param=34y34',
      name: '泡沫',
      author: '邓紫棋',
    }],
    MusicList4: [{
      url: 'http://music.163.com/song/media/outer/url?id=1331708845.mp3',
      image: 'https://p2.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=130y130',
      name: 'All Falls Down',
      author: 'Alan Walker / Noah Cyrus',
    }],
    MusicList5: [{
      url: 'http://music.163.com/song/media/outer/url?id=1405283464.mp3',
      image: 'https://p2.music.126.net/StMr9-QujuAQkOlBZ1BGtA==/109951164503111693.jpg?param=130y130',
      name: '句号',
      author: '邓紫棋',
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
