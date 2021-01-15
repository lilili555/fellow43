// miniprogram/pages/one/one.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0,
  },
  add(e) {
    let step = e.target.dataset.step;
    this.setData({
      num: this.data.num + step
    })
  },
  click1() {
    console.log('box1');
  },
  click2() {
    console.log('box2');
  },
  click3(e) {
    // 小程序当中没有原生的这个方法
    // e.stopPropagation();
    console.log('box3');
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 通过 option 来获得页面的参数
    console.log(options);
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