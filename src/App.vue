<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
  @import '@/assets/styles/color.scss';
  @import '@/assets/styles/font.scss';
  @import '@/assets/styles/style.scss';
</style>