// pages/lz/lz.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    enable_scroll_x: false,
    enable_scroll_y: false,
    scroll_max_left: 10000,
    scroll_max_top: 0,
    scroll_left: 0,
    scroll_top: 0,
    old_page_x: 0,
    old_page_y: 0
  },

  touch_start: function (e) {
    console.log(e.touches[0].pageX)
    console.log(this.data.old_page_x)

    this.data.old_page_x = e.touches[0].pageX
    this.data.old_page_y = e.touches[0].pageY

    console.log({x: this.data.old_page_x, y: this.data.old_page_y})
  },

  touch_move: function (e) {
    console.log({x: e.touches[0].pageX, y: e.touches[0].pageY})
    console.log({x: this.data.old_page_x, y: this.data.old_page_y})
    console.log({left: this.data.scroll_left, top: this.data.scroll_top})

    this.data.scroll_left = this.data.scroll_left + this.data.old_page_x - e.touches[0].pageX
    this.data.scroll_top = this.data.scroll_top + this.data.old_page_y - e.touches[0].pageY
    this.data.old_page_x = e.touches[0].pageX
    this.data.old_page_y = e.touches[0].pageY

    console.log({x: this.data.old_page_x, y: this.data.old_page_y})
    console.log({left: this.data.scroll_left, top: this.data.scroll_top, m_left: this.data.scroll_max_left})

    if(this.data.scroll_left < 0) {
      this.data.scroll_left = 0
      console.log({ret: "return < 0"})
      return
    }
    if(this.data.scroll_left > this.data.scroll_max_left) {
      this.data.scroll_left = this.data.scroll_max_left
      console.log({ret: "return > max"})
      return
    }

    this.setData({scroll_left: this.data.scroll_left, enable_scroll_x: true,
    scroll_top: this.data.scroll_top, enable_scroll_y: true})

    //this.setData({scroll_left: this.data.scroll_left})
  },

  touch_end: function (e) {
    console.log(e)
    this.setData({enable_scroll_x: false,
      enable_scroll_y: false})
  },

  touch_start_view: function (e) {
    console.log(e)
    this.touch_start(e)
  },

  touch_move_view: function (e) {
    console.log(e)
    this.touch_move(e)
  },

  touch_end_view: function (e) {
    console.log(e)
    this.touch_end(e)
  },

  scroll_scroll_view: function (e) {
    console.log(e)

    this.setData({enable_scroll_x: false,
      enable_scroll_y: false})
  },

  scroll_to_lower:  function (e) {
    console.log(e)
    if(e.detail.direction == "right") {
      this.data.scroll_max_left = this.data.scroll_left
      console.log(this.data.scroll_max_left)
    }
  },

  touch_start_scroll_view: function (e) {
    console.log(e)
  },

  touch_move_scroll_view: function (e) {
    console.log(e)
  },

  touch_end_scroll_view: function (e) {
    console.log(e)
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

  }
})