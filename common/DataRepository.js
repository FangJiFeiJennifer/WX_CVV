import Config from 'Config';
import {log, promiseHandle} from '../utils/util';

class DataRepository {

    /**
     * 添加数据
     * @param {Object} 添加的数据
     * @returns {Promise} 
     */
    static addData(data) {
        if (!data) return false;
        let combineData = Object.assign({}, DataRepository.findAllData(), data);
        try {
            wx.setStorageSync(Config.ITEMS_SAVE_KEY, combineData);
            return true;
        } catch(ex){
            log(ex);
        }; 
    }

    /**
     * 发现token
     * @param string
     * @returns {Promise} 
     */
    static findToken() {
        let storeData =  DataRepository.findAllData();
        if (!storeData)  return '123';
        return storeData.token;
    }

    /**
     * 获取所有数据
     * @returns {Promise} Promise实例
     */
    static findAllData() {
        try {
            return wx.getStorageSync(Config.ITEMS_SAVE_KEY);
        } catch(ex) {
            log(ex);
        }
    }

    /**
     * 查找数据
     * @param {Function} 回调
     * @returns {Promise} Promise实例
     */
    static findPhoneNumByToken(token) {
        let storeData =  DataRepository.findAllData();
        if (!storeData)  return '123';
        let  siteNumber, mobileNumber;
        if (storeData.token === token) {
            siteNumber = storeData.country_code + storeData.telephone + '';
            mobileNumber = storeData.country_code + storeData.mobile_phone + '';
            return {site_number: siteNumber, mobile_number: mobileNumber};
        }
    }
}

module.exports = DataRepository;