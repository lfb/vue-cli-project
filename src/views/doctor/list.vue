<template>
  <section>
    医生首页
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
      // 医生类型
      let params = {type: 'EXP'};
      // 获取医生列表
      await this.getDoctorList(params);
    },
    methods: {
      ...mapActions([
        // 获取医生列表
        'getDoctorList'
      ]),

      // 路由跳转方法
      routeLink(link) {
        this.$router.push({path: link});
      },
    }
  }
</script>

<style scoped>

</style>
