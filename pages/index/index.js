/**index.js*/
import {promiseHandle, log, formatNumber, fetch} from '../../utils/util';
import DataService from  '../../common/DataService';
import Config from '../../common/Config';

var app = getApp()
Page({
  data: {
    content: app.globalData.content,
    account: app.globalData.content.email_or_username,
    updatePanelTop: '',
    select_Prompt: ''
  },

  onLoad: function() {
    let _this = this;
    promiseHandle(wx.getSystemInfo).then((data) => {
      console.log(data);
      _this.setData({
        updatePanelTop: data.windowHeight
      });
    });
  },

  // 提交表单
  formSubmit: function(e) {
    let inputValue = e.detail.value;
    console.log(inputValue);

    if (inputValue.username !== '' && inputValue.password !== '') {
      const params = {username: inputValue.username, password: inputValue.password};
      fetch(Config.ROOT_KEY.LOGIN, params, function(body) {
        if(body && body.token) {
          let promise = new DataService({
            username: inputValue.username,
            password: inputValue.password,
            token: body.token
          }).save();
          promise && promise.then(() => {
            // 验证成功，应该到下一页
            wx.navigateTo({
              url: '../info/info?auth_token='+ body.token
            })
          });
       }
     });
    } else {
      let _this = this;
      // _this.setData({
      //    placeHolderColor: 'red',
      //    account: app.globalData.content.account_err
      // });
      wx.navigateTo({
        url: '../info/info?auth_token=1'
      })
    }
  }
})
