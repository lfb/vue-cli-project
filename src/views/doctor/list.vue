<template>
  <section class="content">
    <div class="content-box">
      医生首页
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
    async created() {
      // 获取医生列表
      // await this.getDoctorListFn();
    },
    methods: {
      ...mapActions([
        // 获取医生列表
        'getDoctorList'
      ]),

      /**
       * 获取医生列表
       * @returns {Promise<void>}
       */
      async getDoctorListFn() {
        // 医生类型
        let params = {type: 'EXP'};
        // 获取医生列表
        await this.getDoctorList(params);
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

<style scoped lang="less">
  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;

    &-box {
      font-size: 32px;
      margin: 32px auto;
    }
  }
</style>
