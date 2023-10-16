<template>
  <div class="about">
    <nav>
      <Navbar />
    </nav>
    
    <section class="about-1">
      <div class="about-1-wrapper">
        <img src="../assets/images/home/section1/line.svg" alt="line-image" class="line-image-hero">

        <div class="about-1-content-wrapper">
          <small class="about-me-suggestion yellow">GETTING TO KNOW ME</small>

          <div class="about-1-content-wrapper-1">
            <h1 class="about-me-role">I'm Stefanny, a UI / UX storyteller who crafts meaningful <br> <span style="white-space: pre-line">experiences, blending my understanding in IT, business,</span> <br> <span style="white-space: pre-line">and design with a keen eye on human behavior.</span></h1>
            <p class="about-me-explanation">While crafting products, let me understand everything about you, about your business, about your <br> <span style="white-space: pre-line" class="about-me-explanation">problem, so that the best solution can be made.</span> <br> <span style="white-space: pre-line" class="about-me-explanation"> How? Communicate.</span></p>
          </div>
        </div>

      </div>
    </section>

    <section class="about-2">
      <div class="about-2-wrapper">
        <div class="about-2-profile-picture"></div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/styles/color.scss';
  @import '@/assets/styles/style.scss';
  @import '@/assets/styles/font.scss';

  @import '@/assets/styles/about.scss';
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
