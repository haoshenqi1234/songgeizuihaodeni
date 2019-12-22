Page({
  data: {
  },
  send: function () {

    var theBaiDuAPPkey = "ml4942RyUPYsTdakfdg1UKOoeygrnhof" //百度的AK
    //调用百度天气API
    wx.request({
      url: 'https://api.map.baidu.com/telematics/v3/weather?location=%E5%8C%97%E4%BA%AC&output=json&ak=' + theBaiDuAPPkey, //百度天气API

      success: (res) => {
        console.log(`APPKey: ${theBaiDuAPPkey}`, res.data)
        // 利用正则字符串从百度天气API的返回数据中截出今天的温度数据
        try {
          var str = res.data.results[0].weather_data[0].date;
          var tmp1 = str.match(/实时.+/);
          var tmp2 = tmp1[0].substring(3, tmp1[0].length - 2);
          var tmp = +tmp2;
        } catch (e) {
          throw new Error(e)
        }
        //对应温度应该如何着装
        if (tmp <= 6) {
          wx.showModal({
            title: '提示！',
            content: `当前温度${tmp}度,请穿好你的棉衣，带好手套，做好保暖措施`
          })
        }
        else if (tmp > 6 || tmp <= 11) {
          wx.showModal({
            title: '提示！',
            content: `当前温度${tmp}度,推荐你可以穿一到两件羊毛衫、大衣、毛套装、皮夹克`
          })
        }
        else if (tmp > 11 || tmp <= 15) {
          wx.showModal({
            title: '提示！',
            content: `当前温度${tmp}度,你可以穿毛衣、风衣、毛套装、西服套装`
          })
        }
        else if (tmp > 15 || tmp <= 18) {
          wx.showModal({
            title: '提示！',
            content: `当前温度${tmp}度,你可以穿一件羊毛衫、套装、夹克衫、西服套装、马甲衬衫+夹克衫`
          })
        }
        else if (tmp > 18 || tmp <= 21) {
          wx.showModal({
            title: '提示！',
            content: `当前温度${tmp}度,你可以穿长裤、薄型套装、牛仔衫裤`
          })
        } else if (tmp > 21 || tmp <= 24) {
          wx.showModal({
            title: '提示！',
            content: `当前温度${tmp}度,你可以穿单层薄衫裤、薄型棉杉`
          })
        } else if (tmp > 24 || tmp <= 27) {
          wx.showModal({
            title: '提示！',
            content: `当前温度${tmp}度,你可以穿短套装、T 恤`
          })
        } else if (tmp >27||tmp<35) {
          wx.showModal({
            title: '提示！',
            content: `当前温度${tmp}度,你可以穿短衫、短裙、短裤`
          })
        }
        else if (tmp >=35) {
          wx.showModal({
            title: '提示！',
            content: `当前温度${tmp}度,你可以穿短衫、短裙、短裤,注意防止中暑`
          })
        }
        

      },
      fail: function (res) {
        console.log("请求失败", res)
      }
    })
  },
})