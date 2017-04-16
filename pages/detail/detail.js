// pages/detail/detail.js
import {promiseHandle, log, formatNumber} from '../../utils/util';
import {provinces, getCities, getDistricts} from '../../utils/cityPicker';
Page({
  data: {
    title: 'Enter your info'
  },
   addDot: function (arr) {
    if (arr instanceof Array) {
      arr.map(val => {
        if (val.fullName.length > 4) {
          val.fullNameDot = val.fullName.slice(0, 4) + '...';
          return val;
        } else {
          val.fullNameDot = val.fullName;
          return val;
        }
      })
    }
  },
  /**
   *  点击选择填写address
   */
  choosearea: function() {
    this.setData({
       isShow: true,
    })
  },
  /**
   * 滑动选择事件
   */
  bindChange: function(e) {
    const current_value = e.detail.value, _data = this.data;
    console.log(current_value, _data, _data.proviceData[0]);
    if (current_value.length > 2) {
      if (this.data.index[0] !== current_value[0]) {
        this.setData({
          cityData: getCities( _data.proviceData[current_value[0]]),
          districtData: getDistricts(_data.proviceData[current_value[0]], getCities( _data.proviceData[current_value[0]])[0]),
          index: [current_value[0], 0, 0]
        });
      } else if (this.data.index[0] === current_value[0] && this.data.index[1] !== current_value[1]) {
        this.setData({
            districtData: getDistricts(_data.proviceData[current_value[0]], _data.cityData[current_value[1]]),
            index: [current_value[0], current_value[1], 0]
        });
      } else if (this.data.index[0] === current_value[0] && this.data.index[1] === current_value[1]
         && this.data.index[2] !== current_value[2]) {
           this.setData({
              index: [current_value[0], current_value[1], current_value[2]]
          });
      }
    }
  },
  /**
     * 确认选择区域
     */
  confirm: function() {
    const current_value = this.data.index, _data = this.data;
    let flag = (_data.districtData !== '') && current_value.length > 2;
    this.setData({
        address:  flag ? _data.proviceData[current_value[0]] +' '+ _data.cityData[current_value[1]] + ' '+ _data.districtData[current_value[2]] : _data.proviceData[current_value[0]] +' '+ _data.cityData[current_value[1]],
          isShow: false,
          isHide: true
      })
  },
  /**
   * 取消选择
   */
  cancel: function() {
      this.setData({
          isShow: false
      })
  },
  // 初始化页面数据
  onLoad: function() {
    this.setData({
      isShow: false,
      isHide: false,
      showDistrict: true,
      proviceData: provinces,
      cityData:  getCities(provinces[0]),
      districtData: getDistricts(provinces, getCities(provinces[0])[1]),
      index: [0, 0]
    });
  }
})