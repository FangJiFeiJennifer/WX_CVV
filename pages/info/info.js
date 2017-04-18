var citySelect = require('../../template/citySelect/citySelect');
Page({
    data: {
        showTopTips: false,

        idType: ["ID Card", "Passport", "Residence permit"],
        idTypeIndex: 0,

        countryCodes: ["+86", "+80", "+84", "+87"],
        countryCodeIndex: 0,

        headerData: {
            title: 'Enter your info',
            steps: [1,2,3,4],
            active: 1
        }
    },
    onLoad: function(){
        var that = this
        citySelect.init(that)
    },
    bindIDTypeChange: function(e) {
        this.setData({
            idTypeIndex: e.detail.value
        })
    },

    bindProvinceChange : function(e) {
        this.setData({
            provinceIndex: e.detail.value
        })
    },
    
    bindCountryCodeChange: function(e){
        this.setData({
            countryCodeIndex: e.detail.value
        })
    },

    showTopTips: function(){
        var that = this;
        this.setData({
            showTopTips: true
        });
        setTimeout(function(){
            that.setData({
                showTopTips: false
            });
        }, 3000);
    },

    toValidation: function() {
        wx.navigateTo({
          url: '../validation/validation',
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
});