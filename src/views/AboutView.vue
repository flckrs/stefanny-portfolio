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

    <section class="about-3">
      <div class="about-3-wrapper">
        <div class="about-3-header-wrapper">
          <small class="about-3-things-i-hold-on yellow">Things I hold on...</small>
          <h2 class="about-3-values">My Principles, My Values, My Approach, You Name It</h2>
        </div>

        <div class="about-3-item-wrapper">
          <div class="about-3-item">
            <small class="about-3-item-number">01</small>
            <p class="about-3-item-title"><strong class="white weight-700">Collaborate and communicate.</strong> I believe both of those aspects define whether the project is successful or not. Create something together is always better.</p>
          </div>

          <div class="about-3-item">
            <small class="about-3-item-number">02</small>
            <p class="about-3-item-title"><strong class="white weight-700">Kaizen.</strong> I believe that there is always room for improvement, no matter how small. I am always learning and looking for new ways to improve the user experience.</p>
          </div>

          <div class="about-3-item">
            <small class="about-3-item-number">03</small>
            <p class="about-3-item-title"><strong class="white weight-700">Empathize.</strong> I take the time to understand the needs and wants of my users, and I use this information to create designs that are both user-friendly and visually appealing.</p>
          </div>

          <div class="about-3-item">
            <small class="about-3-item-number">04</small>
            <p class="about-3-item-title"><strong class="white weight-700">Flexibility.</strong> I understand that every user is different and that no design should be the same. I design flexible UI/UX to meet the unique needs of every user.</p>
          </div>

          <div class="about-3-item">
            <small class="about-3-item-number">05</small>
            <p class="about-3-item-title"><strong class="white weight-700">Attention to detail.</strong> The little things matter. I pay attention to every detail, from the typography to the color palette to the placement of every element on the screen.</p>
          </div>

          <div class="about-3-item">
            <small class="about-3-item-number">06</small>
            <p class="about-3-item-title"><strong class="white weight-700">Design purposefully.</strong> Every design should have a purpose. I don't just design things because they look good. I design things because they solve a problem or make a user's life better.</p>
          </div>
          
        </div>
        
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
