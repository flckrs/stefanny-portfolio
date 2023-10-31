<template>
  <div id="app">
    <PageLoader />

    <router-view/>
  </div>
</template>

<style lang="scss">
  @import '@/assets/styles/color.scss';
  @import '@/assets/styles/font.scss';
  @import '@/assets/styles/style.scss';

  @import '@/assets/styles/app.scss';
</style>

<script>
import PageLoader from '@/components/PageLoaderView.vue';

export default {
  components: {
    PageLoader,
  },
  methods: {

  },
}

</script>