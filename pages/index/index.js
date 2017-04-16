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
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let inputValue = e.detail.value;
    console.log(inputValue);
    // this.requestData();
    if (inputValue.username !== '' && inputValue.password !== '') {
      wx.navigateTo({
        url: '../detail/detail'
      })
    }
  },

  navigateTo: function(e) {
      wx.navigateTo({
        url: '../info/info'
      })
  },

   onLoad: function() {
    console.log('onLoad');
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      console.log(userInfo);
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
