<template>
  <div class="home">
    <nav>
      <Navbar />
    </nav>

    <section class="contact-1">
      <div class="contact-1-wrapper">
        <img src="../assets/images/contact/contacthero.png" alt="contact hero image" class="contact-hero-bg">

        <img src="../assets/images/contact/curvyline.svg" alt="curvy hero image" class="curvy-bg">

        <!-- <div class="contact-1-intro-0">
          <div class="contact-1-intro">
            <h2 class="contact-hello">Hello there!</h2>
            <p class="contact-hello-2">I’m delighted that you're considering
            <br> <span style="white-space: pre-line">reaching out to me</span></p>
  
            <img src="../assets/images/contact/elbows01.svg" alt="elbow image" class="elbow-1 elbow">
            <img src="../assets/images/contact/elbows02.svg" alt="elbow image" class="elbow-2 elbow">
            <img src="../assets/images/contact/elbows03.svg" alt="elbow image" class="elbow-3 elbow">
            <img src="../assets/images/contact/elbows04.svg" alt="elbow image" class="elbow-4 elbow">
          </div>
        </div> -->

      </div>
    </section>

  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/styles/color.scss';
  @import '@/assets/styles/style.scss';
  @import '@/assets/styles/font.scss';

  @import '@/assets/styles/contact.scss';
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
