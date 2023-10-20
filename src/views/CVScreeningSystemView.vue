<template>
  <div class="case-study-background" id="case-study">
    <nav>
      <Navbar />
    </nav>

    <section class="case-study-1">
      
      <div class="case-study-1-wrapper">
        <div class="case-study-text-wrapper">
          <div class="case-study-content-wrapper">
            <h4 class="case-study-projects">PROJECTS</h4>
            <h1 class="case-study-header">Automated CV Screening System for Human Resource</h1>
          </div>

          <div class="case-study-content-row-wrapper">
            <div class="case-study-content-wrapper">
              <h4 class="case-study-projects">MY ROLE</h4>
              <p class="case-study-text">Sole UI / UX Designer</p>
            </div>

            <div class="case-study-content-wrapper">
              <h4 class="case-study-projects">WORKING WITH</h4>
              <ul>
                <li class="case-study-text">Machine Learning Engineer</li>
                <li class="case-study-text">Front-End Developer</li>
                <li class="case-study-text">Back-End Developer</li>
              </ul>
            </div>
          </div>

          <div class="case-study-content-wrapper">
              <h4 class="case-study-projects">TIMELINE</h4>
              <p class="case-study-text">Nov 2022 - April 2023</p>
          </div>
        </div>

        <div class="case-study-hero-filler"></div>
      </div>
      
      <img src="../assets/images/casestudy1/curvy.svg" alt="background image" class="curvy-bg">

      <img src="../assets/images/casestudy1/image.svg" alt="mockup image" class="mockup-hero-bg">
    </section>
  </div>
</template>

<style lang="scss">
  @import '@/assets/styles/color.scss';
  @import '@/assets/styles/style.scss';
  @import '@/assets/styles/font.scss';

  @import '@/assets/styles/casestudycv.scss';
</style>

<script>  
import Navbar from '@/components/NavbarView.vue';
export default {
  components: {
    Navbar,
  },
};
</script>