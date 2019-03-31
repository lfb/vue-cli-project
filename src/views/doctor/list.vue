<template>
  <section class="content">
    <div class="content-box">
      <h1> Hello vuejs.</h1>
      <p>
        <a href="https://github.com/liangfengbo/vue-cli-project" target="_blank">Github 详细介绍</a>
      </p>
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

      // 开启loading
      this.openLoading()

      // 关闭loading
      setTimeout(() => {
        this.closeLoading();
      }, 1000)
    },
    methods: {
      ...mapActions({
        // 获取医生列表
        'getDoctorList': 'doctor/getDoctorList',
        // 开启loading
        openLoading: 'loading/openLoading',
        // 关闭loading
        closeLoading: 'loading/closeLoading'
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

        } catch (e) {

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
    display: flex;
    justify-content: center;
    text-align: center;

    &-box {
      font-size: 32px;
      font-weight: 800;
    }
  }
</style>
