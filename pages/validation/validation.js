import DataService from '../../common/DataService';
import { promiseHandle, guid, address } from '../../utils/util';
var app = getApp();
Page({
    data: {
        content: app.globalData.content,
        headerData: {
            title: app.globalData.content.validation,
            steps: [1,2,3,4],
            active: 2
        },
        promp_color: 'dimgrey',
        active: 'phone',
        scrollLeft: 0
    },

    onLoad: function (option) {
        let auth_token = DataService.Token();
        let phoneNumber = DataService.findPhoneNumber(auth_token);
        console.log('****token*****', phoneNumber);
        this.setData({
            phoneNumber: [
              {name: 'telephone', value: phoneNumber.site_number},
              {name: 'mobilephone', value: phoneNumber.mobile_number}
            ],
        })
    },

    radioChange:function(e){
      this.setData({ checked: e.detail.value,  promp_color: 'dimgrey'});
    },
    /**
     * 通过电话发送pin Id
     */
    sendPinByCall: function() {
      if (this.data.checked && this.data.checked !== '') {
        // wx.makePhoneCall({
        //   phoneNumber: this.data.checked,
        //   success: function () {
        //     console.log("成功拨打电话");
            wx.navigateTo({
              url: '../enter-pin/enter-pin?pinId=' + guid()
            })
        //   }
        // })
      } else {
         this.setData({ promp_color: 'red'});
      }

    },


    phoneValidate: function(e){
      this.setData({
        active: 'phone',
        scrollLeft: 0
      })
    },

    smsValidate: function(e){
      this.setData({
        active: 'sms',
        scrollLeft: 355
      })
    },

    upper: function(e) {
       this.setData({
        active: 'phone'
      })
    },

    lower: function(e) {
      this.setData({
        active: 'sms'
      })
    },

    redirectToIndex: function () {
        wx.redirectTo({
            url: '../index/index'
        })
    }
})