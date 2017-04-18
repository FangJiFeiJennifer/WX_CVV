/**index.js*/
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    mainTitle: app.globalData.title,
    viceTitle : 'Request higher selling limit'
  },
 // 提交表单
  formSubmit: function(e) {
    let inputValue = e.detail.value;
    console.log(inputValue);
    wx.navigateTo({
      url: '../info/info'
    })
  },

   onLoad: function() {
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
