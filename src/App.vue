<template>
  <div id="app">
    <loading-view
      :text="loadingText"
      v-if="isLoading">

    </loading-view>
    <router-view/>
  </div>
</template>

<script>
  import loadingView from './components/loading'
  import {mapGetters} from 'vuex';

  export default {
    components: {
      loadingView
    },
    computed: {
      ...mapGetters('loading', [
        'isLoading',
        'loadingText'
      ]),
    },
  }
</script>

<style>
</style>
