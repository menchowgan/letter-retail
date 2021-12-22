// pages/merchandiseDetail/index.js
import SpuDetailManager from "../../models/SpuDetailManager"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    merchIofo: {},

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options){
    console.log("detail options", options)
    this.spuDetailManager = new SpuDetailManager("spu_detail")

    this._searchDetailBySpu(options.spu)
  },

  async _searchDetailBySpu(spuCode){
    const res = await this.spuDetailManager.searchBySpu(spuCode)
    if(res && res.length > 0){
      this.setData({
        merchIofo: res[0]
      })
    }
  },

  addShoppingCart(){

  },

  toBuy(){

  },

  toService(){

  },

  toShoppingCart(){

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