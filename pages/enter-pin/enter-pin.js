var app = getApp();

Page({
    data: {
        content: app.globalData.content,
        enter_pinId: app.globalData.content.enter_pin_placeholder,
        headerData: {
            title: app.globalData.content.validation,
            steps: [1,2,3,4],
            active: 2
        }
    },
     onLoad: function (option) {
        console.log('****pin*****', option);
        this.setData({ pinCode: option.pinId})
    },

    bindInputValue: function(e) {
        this.setData({inputValue: e.detail.value})
    },

    toRecordVideo: function() {
      if(this.data.inputValue && this.data.inputValue !== '' && this.data.pinCode ===  this.data.inputValue) {
         wx.navigateTo({
          url: '../record-video/record-video',
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
      } else {
        this.setData({ enter_pinId: app.globalData.content.enter_err_promot, placeHolderColor: 'red'})
      }
    },

    redirectToIndex: function () {
        wx.redirectTo({
            url: '../index/index'
        })
    }
})