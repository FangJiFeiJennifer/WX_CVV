var app = getApp();
Page({
    data: {
        content: app.globalData.content,
        headerData: {
            title: app.globalData.content.record_video,
            steps: [1,2,3,4],
            active: 3
        },
        warningInfos:app.globalData.content.record_warning,
        videoSource: '',
        hideVideo: "hideVideo",
        hideVideoIcon : ""
    },

    // onReady: function (res) {
    //   this.videoContext = wx.createVideoContext('myVideo');
    // },
    openVideo: function() {
      var that = this;

        wx.chooseVideo({
          sourceType: ['camera'],
          maxDuration: 60,
          camera: ['front', 'back'],
          success: function(res){
            that.setData({
              videoSource: res.tempFilePath,
              hideVideo: "",
              hideVideoIcon : "hideVideoIcon"
            });

            var ctx =  wx.createContext(); //wx.createCanvasContext('myCanvas'); 
            var videoCtx = wx.createVideoContext('myVideo');
            console.log('=============path===========>', videoCtx, ctx, res.tempFilePath);
            setInterval(function() {
              ctx.drawImage(res.tempFilePath, 0, 0, 320, 270);
              console.log('######ctx#####',ctx.drawImage(res.tempFilePath, 0, 0, 320, 270));
              //ctx.draw();
              wx.drawCanvas({
                canvasId: 'myCanvas',
                actions: ctx.getActions()
              });
            }, 1000);
          },
          fail: function(e) {
            console.log(e)
          }
        })
    },

    playVideoChange: function (e) {
      console.log("=============================video=====>", e.target.dataset);
    },
    toReviewInfo: function() {
        wx.redirectTo({
          url: '../review-info/review-info',
          success: function(res){
            console.log("Success");
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          },
        })
    }
})