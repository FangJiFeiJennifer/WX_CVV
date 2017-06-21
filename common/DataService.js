import DataRepository from 'DataRepository';
import {log, promiseHandle} from '../utils/util';

/**
 * 数据业务类
 */
class DataSerivce {

    constructor(props) {
        props = props || {};
        this.username = props['username'] || '';
        this.passowrd = props['password'] || '';
        this.token = props['token'] || '';
        //self information
        this.id_type = props['id_type'] || '';
        this.id = props['id'] || '';
        this.name = props['name'] || '';
        this.address = props['address'] || '';
        this.street_address = props['street_Address'] || '';
        this.telephone = props['telephone'] || '';
        this.mobile_phone = props['mobile_phone'] || '';
        this.country_code = props['country_code'] || '';
        // video & picture
        this.video = props['video'] || '';
        this.picture = props['picture'] || '';

    }

    /**
     * 保存当前对象数据
     */
    save() {
        if (this.token) {
            return DataRepository.addData({
                username : this.username,
                passowrd : this.passowrd,
                token : this.token,
                //self information
                id_type : this.id_type,
                id : this.id,
                name : this.name,
                address : this.address,
                street_address : this.street_address,
                telephone : this.telephone,
                mobile_phone : this.mobile_phone,
                country_code: this.country_code,
                // video & picture
                video : this.video,
                picture : this.picture
            });
        }
    }

    /**
     * 获取所有事项数据
     */
    static findAll() {
        return DataRepository.findAllData();
    }

    /**
     * 通过token获取事项
     */
    static Token() {
        return DataRepository.findToken();
    }

    /**
     * 通过token 查找固定电话和移动电话
     */
    static findPhoneNumber(token) {
        return DataRepository.findPhoneNumByToken(token);
    }

}

module.exports = DataSerivce;