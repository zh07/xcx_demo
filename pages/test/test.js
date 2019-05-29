import watchFunc from "../../utils/watch.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0,
    json: {
      a: 11
    },
    staticUrl: null,
    show: 1                   // !!!!!!!!!!!!!!!!!!!
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let json = this.data.json
    json.a = 2122

    watchFunc.call(this, this.data)

    setTimeout(function() {
      this.setData({
        json: json,
        staticUrl: 'https'
      })
    }.bind(this), 1000)
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
    // !!!!!!!!!!!!!!!!!!!!!!
    let show = this.data.show;
    
    show++
    
    this.setData({
      show
    })

    // this.scan();
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

  watch: {
    num() {
      console.group('num')
        console.log(this.data.num)
      console.groupEnd()
    },

    json() {
      console.group('json')
        console.log(this.data.json.a)
      console.groupEnd()
    },

    staticUrl() {
      console.group('staticUrl')
        console.log(this.data.staticUrl)
      console.groupEnd()
    }
  },

  // 扫一扫 !!!!!!!!!!!!!!!!!!!!!!!!!!!!
  scan() {
    let show = this.data.show;

    if (show % 2 === 0) {
      wx.scanCode({
        success(res) {
          console.log(res)
        }
      })
    }
  },

  click() {
    let num = this.data.num;

    num++;

    this.setData({
      num
    })
  },

  toList() {
    wx.redirectTo({
      url: '../list/list'
    })
  }
})