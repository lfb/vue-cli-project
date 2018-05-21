<template>
  <section>
    医生详情页
  </section>
</template>

<script>
  import {mapActions, mapState} from 'vuex'

  export default {
    components: {},
    data() {
      return {
        // 医生ID
        doctorId: this.$route.params.doctorId,
      }
    },
    computed: {
      ...mapState({
        doctorDetail: state => state.doctor.doctorDetail,
      })
    },
    async created() {
      // 获取医生详情
      await this.getDoctorDetail(this.doctorId);
    },
    methods: {
      ...mapActions([
        // 获取医生详情信息
        'getDoctorDetail'
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
