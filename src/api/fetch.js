import Util from '../libs/util'
import qs from 'qs'
import Vue from 'vue'

Util.ajax.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
};

Util.ajax.interceptors.request.use(config => {
  /**
   * 在这里做loading ...
   * @type {string}
   */

  // 获取token
  config.headers.common['Authorization'] = 'Bearer ' + Vue.ls.get("web-token");
  return config

}, error => {
  return Promise.reject(error)

});

Util.ajax.interceptors.response.use(response => {

  /**
   * 在这里做loading 关闭
   */

    // 如果后端有新的token则重新缓存
  let newToken = response.headers['new-token'];

  if (newToken) {
    Vue.ls.set("web-token", newToken);
  }

  return response;

}, error => {
  let response = error.response;
  if (response.status == 401) {
    // 处理401错误

  } else if (response.status == 403) {
    // 处理403错误

  } else if (response.status == 412) {
    // 处理412错误

  } else if (response.status == 413) {
    // 处理413权限不足

  }

  return Promise.reject(response)

});

export default {
  post(url, data) {

    return Util.ajax({
      method: 'post',
      url: url,
      data: qs.stringify(data),
      timeout: 30000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  },

  get(url, params) {
    return Util.ajax({
      method: 'get',
      url: url,
      params,
    })
  },

  delete(url, params) {
    return Util.ajax({
      method: 'delete',
      url: url,
      params
    })
  },

  put(url, data) {

    return Util.ajax({
      method: 'put',
      url: url,
      data: qs.stringify(data),
      timeout: 30000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  }
}
