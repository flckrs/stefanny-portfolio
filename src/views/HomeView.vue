<template>
  <div class="home">
    <nav>
      <Navbar />
    </nav>

    <section class="home-1">
      <div class="home-1-wrapper">
        <img src="../assets/images/home/section1/helloworld.svg" alt="background-image" class="background-image-hero">
        
        <img src="../assets/images/home/section1/line.svg" alt="line-image" class="line-image-hero">

        <div class="home-1-heroes-wrapper-0">
          <div class="home-1-heroes-wrapper">
            <div class="home-1-name yellow">STEFANNY</div>

            <div class="home-1-heroes">
              <h1 class="hero">UI / UX Designer with a sprinkle of Front-End Development skills</h1>
              <p class="hero-content">I craft user-centric experience that blend usability, accessibility, and innovation driven by understanding of user & stakeholder needs aligning seamlessly with market demands and product quality. </p>
            </div>

            <div class="home-1-cta-wrapper">
              <button class="hire-me white"><router-link to="/contact">Hire Me</router-link></button>

              <img src="../assets/images/home/section1/or.svg" alt="background-image">
              
              <button class="view-projects white"><router-link to="/">View Projects</router-link></button>
            </div>
          </div>
          <div class="hero-filler"></div>
        </div>

        <img src="../assets/images/home/section1/heroimage.svg" alt="hero-image" class="hero-image-hero">
        
      </div>
    </section>

  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/styles/color.scss';
  @import '@/assets/styles/style.scss';
  @import '@/assets/styles/font.scss';

  @import '@/assets/styles/home.scss';
</style>

<script>

import Navbar from '@/components/NavbarView.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
  },
}
</script>
