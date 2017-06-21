import Promise from 'bluebird';

/**
 * 获取名字
 * @returns {string} province，city，area
 */
function getName(obj) {
  let source;
  
  if(obj !== null && obj.data !== null && obj.index !== null) {
    source = obj.data[obj.index];
    if(source.name === "市辖区") return "";
    return source.name;
  }
  return "";
}

/**
 * 获取地址
 */
function address(province, city, district) {
  return getName(province) + "" + getName(city) + "" + getName(district);
}

/**
 * 记录日志
 * @param {Mixed} 记录的信息
 * @returns {Void}
 */
function log(msg) {
  if (!msg) return;
  if (getApp().settings['debug'])
    console.log(msg);
  let logs = wx.getStorageSync('logs') || [];
  logs.unshift(msg)
  wx.setStorageSync('logs', logs)
}

/**
 * 生成GUID序列号
 * @returns {string} GUID
 */
function guid() {
  return 'xxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 5 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(5);
  });
}

/**
 * @param {Function} func 接口
 * @param {Object} options 接口参数
 * @returns {Promise} Promise对象
*/
function promiseHandle(func, options) {
  options = options || {};
  return new Promise((resolve, reject) => {
    if (typeof func !== 'function') reject();
    options.success = resolve;
    options.fail = reject;
    func(options);
  });
}

function fetch(path, params, cb) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `http://${path}`,
      data: Object.assign({}, params),
      method: 'Post', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {'Content-Type': 'json'}, // 设置请求的 header
      success: function(res){
        // success
        cb(res.data)
      },
      fail: function(res) {
        // fail
        console.log('接口错误');
      }
    })
  });
}

module.exports = {
  fetch: fetch,
  address: address,
  log: log,
  guid: guid,
  promiseHandle: promiseHandle
}
