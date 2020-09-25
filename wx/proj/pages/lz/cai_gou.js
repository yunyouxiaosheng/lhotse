// pages/lz/cai_gou.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    move_left: 0,
    old_page_x: 0,
    old_page_y: 0,
    enable_scroll_x: false
  },

  scroll_head: function(e) {
    console.log(e)
    /*
    console.log(e.detail.scrollLeft)
    this.data.move_left = e.detail.scrollLeft
    console.log(this.data.move_left)
    this.setData({move_left: this.data.move_left})
    */
   this.data.move_left = e.detail.scrollLeft
   this.setData({enable_scroll_x: false})
  },

  drag_start_head: function(e) {
    console.log(e)
  },
  
  dragging_head: function(e) {
    console.log(e)
  },
  
  drag_end_head: function(e) {
    console.log(e)
  },

  touch_start_head: function(e) {
    console.log(e)
    this.data.old_page_x = e.touches[0].pageX
  },

  touch_move_head: function(e) {
   // console.log(e)
   //this.data.move_left = 2;
   // console.log(this.data.move_left)
    //this.setData({move_left: this.data.move_left})


    console.log(e)
    console.log(this.data.old_page_x)
    console.log(e.touches[0].pageX)
    this.data.move_left = this.data.old_page_x - e.touches[0].pageX + this.data.move_left
    this.data.old_page_x = e.touches[0].pageX
    console.log(this.data.move_left)

    if(this.data.move_left < 0)
    {
      this.data.move_left = 0
    }
    console.log(this.data.move_left)
    this.setData({move_left: this.data.move_left,
      enable_scroll_x: true})
    //this.setData({enable_scroll_x: false})

  },

  touch_end_head: function(e) {
    console.log(e)
    this.setData({enable_scroll_x: false})
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