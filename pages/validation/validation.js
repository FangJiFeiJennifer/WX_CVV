Page({
    data: {
        headerData: {
            title: 'Phone validation',
            steps: [1,2,3,4],
            active: 2
        },
         phoneNumber: [
          {name: 'phone1', value: '+86-021-20992020'},
          {name: 'phone2', value: '+86-17602126553'}
        ]
    },
    toPinPage: function() {
        wx.navigateTo({
          url: '../enter-pin/enter-pin',
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