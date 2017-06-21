import { promiseHandle, log, formatNumber, fetch, address } from '../../utils/util';
import citySelect from '../../template/citySelect/citySelect';
import DataService from '../../common/DataService';

var app = getApp();
Page({
    data: {
        content: app.globalData.content,
        showTopTips: false,
        idType: app.globalData.content.id_type,
        idTypeIndex: 0,
        countryCodes: ["+86", "+80", "+84", "+87"],
        countryCodeIndex: 0,

        id_number: app.globalData.content.id_number,
        name_on_id: app.globalData.content.name_on_id,
        street_address: app.globalData.content.street_address,
        site_number: app.globalData.content.site_number,
        phone_number: app.globalData.content.phone_number,

        headerData: {
            title: app.globalData.content.enter_info,
            steps: [1, 2, 3, 4],
            active: 1
        }
    },

    onLoad: function (option) {
        let that = this;
        citySelect.init(that);
        console.log('****token*****', DataService.Token());
    },

    bindIDTypeChange: function (e) {
        this.setData({idTypeIndex: e.detail.value})
    },

    bindIdNumber: function (e) {
        this.setData({ id_number: e.detail.value === '证件号' ? '': e.detail.value})
    },

    bindNameInput: function (e) {
        this.setData({name_on_id: e.detail.value === '证件上姓名' ? '': e.detail.value})
    },

    bindStreetAddress: function (e) {
        this.setData({street_address: e.detail.value === '街道地址' ? '': e.detail.value})
    },

    bindCountryCodeChange: function (e) {
        this.setData({ countryCodeIndex: e.detail.value})
    },

    bindSiteNumber: function (e) {
        this.setData({site_number: e.detail.value === '座机号码' ? '': e.detail.value})
    },

    bindPhoneNumber: function (e) {
        this.setData({ phone_number: e.detail.value === '手机号码' ? '': e.detail.value})
    },

    showTopTips: function () {
        let that = this;
        this.setData({ showTopTips: true});
        setTimeout(function () {that.setData({showTopTips: false})}, 3000);
    },

    toValidation: function () {
        let that = this, dates = [];
        const {provinceState, cityState, areaState } = this.data.city;
        const {idType, idTypeIndex, id_number, name_on_id, street_address, site_number, phone_number, countryCodes, countryCodeIndex} = this.data;
        let count = 0, labelArray = [app.globalData.content.id_number, app.globalData.content.name_on_id, app.globalData.content.street_address, app.globalData.content.site_number, app.globalData.content.phone_number];

        [id_number, name_on_id, street_address, site_number, phone_number].forEach((item) => {

            if (item === labelArray[count] || item === '请填写信息') {
                switch (count) {
                    case 0:
                        dates.push("Strawberry");
                        that.setData({id_number: app.globalData.content.err_msg, placeHolderColor1: 'red' });
                        break;
                    case 1:
                        dates.push("Strawberry");
                        that.setData({ name_on_id: app.globalData.content.err_msg, placeHolderColor2: 'red'});
                        break;
                    case 2:
                        dates.push("Strawberry");
                        that.setData({ street_address: app.globalData.content.err_msg, placeHolderColor3: 'red'});
                        break;
                    case 3:
                        dates.push("Strawberry");
                        that.setData({site_number: app.globalData.content.err_msg, placeHolderColor4: 'red'});
                        break;
                    case 4:
                        dates.push("Strawberry");
                        that.setData({phone_number: app.globalData.content.err_msg, placeHolderColor5: 'red'});
                        break;
                }
            }
            count++;
        });

        if (dates.indexOf("Strawberry") === -1) {
            let promise = new DataService({
                id_type: idType[idTypeIndex],
                id: id_number,
                name: name_on_id,
                address: address(provinceState, cityState, areaState),
                street_address: street_address,
                telephone: site_number,
                mobile_phone: phone_number,
                country_code: countryCodes[countryCodeIndex],
                token:  DataService.Token()
            }).save();
            if (promise) {
                // 验证成功，应该到下一页
                wx.navigateTo({
                    url: '../validation/validation?auth_token='+ DataService.Token()
                })
            }
        }
    },

    redirectToIndex: function () {
        wx.redirectTo({
            url: '../index/index'
        })
    }
});