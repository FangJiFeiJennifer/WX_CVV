Page({
    data: {
        headerData: {
            title: 'Record your video',
            steps: [1,2,3,4],
            active: 3
        },
        warningInfos:[
          "Don't take the following action when recording",
          "- Not facing toward camera",
          "- wearing sunglass or hat",
          "- Badlighting"
        ],
        videoSource: '',
        hideVideo: "hideVideo",
        hideVideoIcon : ""
    },
    openVideo: function() {
      var that = this;
        wx.chooseVideo({
          sourceType: ['camera'],
          maxDuration: 60,
          camera: ['front', 'back'],
          success: function(res){
            console.log(res.tempFilePaths[0])
            that.setData({
              videoSource: res.tempFilePaths[0],
              hideVideo: "",
              hideVideoIcon : "hideVideoIcon"
            })
          },
          fail: function(e) {
            console.log(e)
          }
        })
    },
    toReviewInfo: function() {
        wx.navigateTo({
          url: '../review-info/review-info',
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
    }
})