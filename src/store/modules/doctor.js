import doctor from '../../api/doctor'
import * as types from '../mutation-types'

const state = {
  // 医生列表
  doctorList: [],
  // 医生详情信息
  doctorDetail: null,
};

const mutations = {
  // 设置医生列表
  [types.SET_DOCTOR_LIST](state, data) {
    state.doctorList = data
  },
  // 设置医生详情信息
  [types.SET_DOCTOR_DETAIL](state, data) {
    state.doctorDetail = data
  },
};

const actions = {

  /**
   * 获取医生顾问列表
   * @param state
   * @param commit
   * @param params
   * @returns {Promise<void>}
   */
  async getDoctorList({state, commit}, params) {
    let ret = await doctor.list(params);
    commit(types.SET_DOCTOR_LIST, ret.data.data);
  },

  /**
   * 获取医生详情信息
   * @param state
   * @param commit
   * @param id 医生ID
   * @returns {Promise<void>}
   */
  async getDoctorDetail({state, commit}, id) {
    let ret = await doctor.detail(id);
    commit(types.SET_DOCTOR_DETAIL, ret.data.data);
  }
};

export default {
  state,
  actions,
  mutations
}
