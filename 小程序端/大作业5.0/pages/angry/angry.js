var app = getApp();
Page({
  data: {
    MusicList: [{
      url: 'http://music.163.com/song/media/outer/url?id=28481189.mp3',
      image: 'https://p2.music.126.net/YPh291Jw4Lzy7x1iT_Aw5A==/109951163510035145.jpg?param=130y130',
      name: 'monsters',
      author: 'Katie Sky',
    }],
    MusicList1: [{
      url: 'http://music.163.com/song/media/outer/url?id=30953009.mp3',
      image: 'https://p2.music.126.net/JIc9X91OSH-7fUZqVfQXAQ==/7731765766799133.jpg?param=34y34',
      name: 'see you again',
      author: 'Wiz Khalifa / Charlie Puth',
    }],
    MusicList2: [{
      url: 'http://music.163.com/song/media/outer/url?id=1404149972.mp3',
      image: 'https://p1.music.126.net/xFnrAnyEMTTB0e40eUyN0g==/109951164493256903.jpg?param=130y130',
      name: '海上钢琴师',
      author: 'mt1900',
    }],
    MusicList3: [{
      url: 'http://music.163.com/song/media/outer/url?id=31877245.mp3',
      image: 'https://p1.music.126.net/vSdrZFQn3uMetLL_j3AnQg==/109951163432562414.jpg?param=130y130',
      name: '贝加尔湖畔',
      author: '李健',
    }],
    MusicList4: [{
      url: 'http://music.163.com/song/media/outer/url?id=1349292048.mp3',
      image: 'https://p1.music.126.net/MLQl_7poLz2PTON6_JZZRQ==/109951163938219545.jpg?param=130y130',
      name: '心如止水',
      author: 'Ice Paper',
    }],
    MusicList5: [{
      url: 'http://music.163.com/song/media/outer/url?id=436514312.mp3',
      image: 'https://p2.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg?param=130y130',
      name: '成都',
      author: '赵雷',
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
