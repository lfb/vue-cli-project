<template>
  <section class="content">
    <div class="content-box">
      Hello vuejs.
    </div>
  </section>
</template>

<script>
  import {mapActions, mapState} from 'vuex'

  export default {
    components: {},
    data() {
      return {}
    },
    computed: {
      ...mapState({
        doctorList: state => state.doctor.doctorList,
      })
    },
    created() {
      // 获取医生列表
      // this.fetchData();
    },
    methods: {
      ...mapActions({
        // 获取医生列表
        'getDoctorList': 'doctor/getDoctorList'
      }),

      /**
       * 获取医生列表
       * @returns {Promise<void>}
       */
      async fetchData() {
        // 医生类型
        let params = {type: 'EXP'};
        // 获取医生列表
        try {
          await this.getDoctorList(params);

        }catch (e) {

        }
      },

      /**
       * 路由跳转方法
       * @param link
       */
      routeLink(link) {
        this.$router.push({path: link});
      },
    }
  }
</script>

<style scoped lang="scss">
  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    &-box {
      font-size: 32px;
      font-weight: 800;
      margin: 32px auto;
    }
  }
</style>
