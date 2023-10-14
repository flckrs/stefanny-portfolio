<template>
  <div class="home">
    <nav>
      <Navbar />
    </nav>

    <section class="section-wrapper">
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
  
              <span class="hero-filler"></span>
            </div>
          </div>
  
          <img src="../assets/images/home/section1/heroimage1.svg" alt="hero image" class="hero-image">
        </div>
      </section>
  
      <section class="home-2">
        <div class="home-2-wrapper">
          <img src="../assets/images/home/section2/image01.svg" alt="product design screenshot 1" class="home-2-product-image">
          <img src="../assets/images/home/section2/image02.svg" alt="product design screenshot 2" class="home-2-product-image">
          <img src="../assets/images/home/section2/image03.svg" alt="product design screenshot 3" class="home-2-product-image">
          <img src="../assets/images/home/section2/image04.svg" alt="product design screenshot 4" class="home-2-product-image">
          <img src="../assets/images/home/section2/image05.svg" alt="product design screenshot 5" class="home-2-product-image">
        </div>
      </section>

      <section class="home-3">
        <section class="home-3-wrapper">
          <h2 class="home-3-header">When Design Meet Code: Crafting Digital Magic</h2>

          <div class="home-3-item-wrapper">
            <div class="home-3-item">
              <lord-icon
                src="https://cdn.lordicon.com/kyujflem.json"
                trigger="loop"
                delay="1250"
                colors="primary:#f7f7ff,secondary:#ffba49"
                style="width:max(100px);height:max(100px)">
              </lord-icon>

              <div class="home-3-item-text">
                <h3 class="home-item-header">The Intersection of <br>
                Design and Code
                </h3>

                <p class="home-item-content">Despite my design focus, exposure to diverse technical subjects, including Front-End development, enriches my capabilities in product design and development.                  
                </p>
              </div>
            </div>

            <div class="home-3-item">
              <lord-icon
                src="https://cdn.lordicon.com/kyujflem.json"
                trigger="loop"
                delay="1250"
                colors="primary:#f7f7ff,secondary:#ffba49"
                style="width:max(100px);height:max(100px)">
              </lord-icon>

              <div class="home-3-item-text">
                <h3 class="home-item-header">The Intersection of <br>
                Design and Code
                </h3>

                <p class="home-item-content">Despite my design focus, exposure to diverse technical subjects, including Front-End development, enriches my capabilities in product design and development.                  
                </p>
              </div>
            </div>

            <div class="home-3-item">
              <lord-icon
                src="https://cdn.lordicon.com/kyujflem.json"
                trigger="loop"
                delay="1250"
                colors="primary:#f7f7ff,secondary:#ffba49"
                style="width:max(100px);height:max(100px)">
              </lord-icon>

              <div class="home-3-item-text">
                <h3 class="home-item-header">The Intersection of <br>
                Design and Code
                </h3>

                <p class="home-item-content">Despite my design focus, exposure to diverse technical subjects, including Front-End development, enriches my capabilities in product design and development.                  
                </p>
              </div>
            </div>
            
          </div>
        </section>
      </section>
    </section>

    <section class="home-3">

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
import Navbar from '@/components/NavbarView.vue';


export default {
  name: 'HomeView',
  components: {
    Navbar,
  },
}

window.addEventListener('scroll', function() {
  // Get the current scroll position.
  var scrollY = window.scrollY;
  document.querySelector('.home-2-wrapper').style.left = (scrollY * -0.5) + 'px';

  // Keep the `.home-2-wrapper` element located at `left = -75px` when the user scrolls to the top of the page.
  if (scrollY === 0) {
    document.querySelector('.home-2-wrapper').style.left = '-75px';
  }
  
});
</script>
