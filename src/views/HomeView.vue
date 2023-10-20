<template id="home">
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
                
                <button @click="scrollToProjects" class="view-projects white" id="view-projects">View Projects</button>
              </div>
  
              <span class="hero-filler"></span>
            </div>
          </div>
  
          <img src="../assets/images/home/section1/heroimage1.svg" alt="hero image" class="hero-image">
        </div>
      </section>
  
      <section class="home-2">
        <div class="home-2-wrapper" id='home-2-wrapper'>
          <img src="../assets/images/home/section2/image01.svg" alt="product design screenshot 1" class="home-2-product-image">
          <img src="../assets/images/home/section2/image02.svg" alt="product design screenshot 2" class="home-2-product-image">
          <img src="../assets/images/home/section2/image03.svg" alt="product design screenshot 3" class="home-2-product-image">
          <img src="../assets/images/home/section2/image04.svg" alt="product design screenshot 4" class="home-2-product-image">
          <img src="../assets/images/home/section2/image05.svg" alt="product design screenshot 5" class="home-2-product-image">
        </div>
      </section>

      <section class="home-3">
        <div class="home-3-wrapper">
          <h2 class="home-3-header">When <span class=" home-3-header yellow">Design Meet Code</span>: <br> Crafting Digital Magic</h2>

          <div class="home-3-item-wrapper">
            <div class="home-3-item">
              <lord-icon
                src="https://cdn.lordicon.com/zopinftn.json"
                trigger="loop"
                delay="1250"
                colors="primary:#f7f7ff,secondary:#ffba49"
                style="width:max(100px);height:max(100px)">
              </lord-icon>

              <div class="home-3-item-text">
                <h3 class="home-item-header">The Intersection of <br>
                Design and Code</h3>

                <p class="home-item-content">Despite my design focus, exposure to diverse technical subjects, including Front-End development, enriches my capabilities in product design and development.                  
                </p>
              </div>
            </div>

            <div class="home-3-item gap-1-line">
              <lord-icon
                src="https://cdn.lordicon.com/kyujflem.json"
                trigger="loop"
                delay="1250"
                colors="primary:#f7f7ff,secondary:#ffba49"
                style="width:max(100px);height:max(100px)">
              </lord-icon>

              <div class="home-3-item-text">
                <h3 class="home-item-header">Not Just Click & Drag Pixel</h3>

                <p class="home-item-content">My craft blends design strategy, research, innovative thinking, and forward-looking vision, diverging from conventional pixel manipulation.                 
                </p>
              </div>
            </div>

            <div class="home-3-item">
              <lord-icon
                src="https://cdn.lordicon.com/yafmbxkd.json"
                trigger="loop"
                delay="1250"
                colors="primary:#f7f7ff,secondary:#ffba49"
                style="width:max(100px);height:max(100px)">
              </lord-icon>

              <div class="home-3-item-text">
                <h3 class="home-item-header">Intricate IT, Graphic Design, and UX Connections</h3>

                <p class="home-item-content">As an IST student and graphic designer, I bring a holistic approach to crafting digital experiences through interconnected IT, graphic design, and UI/UX insights.                  
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section class="home-4">
        <div class="home-4-wrapper">
          <div class="home-4-header">
            <h4 class="home-4-service">What can I do for you?</h4>
            <div class="yellow-rectangle yr-rt"></div>
            <div class="yellow-rectangle yr-rb"></div>
            <div class="yellow-rectangle yr-lb"></div>
            <div class="yellow-rectangle yr-lt"></div>
          </div>

          <div class="home-4-item-wrapper">

            <div class="home-4-item-wrapper-0">
              <img src="../assets/images/home/section4/curve01.svg" alt="background image" class="curve-bg curve-01">

              <div class="home-4-item-wrapper-1">
                <img src="../assets/images/home/section4/itemicon01.svg" alt="item icon image" class="home-4-item-icon">

                <div class="home-4-item-content-wrapper">
                  <h3 class="home-4-item-header">Product Design</h3>
                  <p class="home-4-item-text">Seamlessly bring your product vision to life, guiding it from initial concept to a polished and successful launch.</p>
                </div>
              </div>
            </div>

            <div class="home-4-item-wrapper-0">
              <img src="../assets/images/home/section4/curve02.svg" alt="background image" class="curve-bg curve-02">

              <div class="home-4-item-wrapper-1">
                <img src="../assets/images/home/section4/itemicon02.svg" alt="item icon image" class="home-4-item-icon">

                <div class="home-4-item-content-wrapper">
                  <h3 class="home-4-item-header">Design System</h3>
                  <p class="home-4-item-text">Create flexible, visual guidelines with a scalable design system for your digital touchpoints.</p>
                </div>
              </div>
            </div>

            <div class="home-4-item-wrapper-0">
              <img src="../assets/images/home/section4/curve03.svg" alt="background image" class="curve-bg curve-03">

              <div class="home-4-item-wrapper-1">
                <img src="../assets/images/home/section4/itemicon03.svg" alt="item icon image" class="home-4-item-icon">

                <div class="home-4-item-content-wrapper">
                  <h3 class="home-4-item-header">Prototype & Mock-Ups</h3>
                  <p class="home-4-item-text">Drive innovation with mock-ups and high-fidelity prototypes for your next product.</p>
                </div>
              </div>
            </div>

            <div class="home-4-item-wrapper-0">
              <img src="../assets/images/home/section4/curve04.svg" alt="background image" class="curve-bg curve-04">

              <div class="home-4-item-wrapper-1">
                <img src="../assets/images/home/section4/itemicon04.svg" alt="item icon image" class="home-4-item-icon">

                <div class="home-4-item-content-wrapper">
                  <h3 class="home-4-item-header">Front-End Development</h3>
                  <p class="home-4-item-text">Transform creative ideas into captivating user experiences through seamless Front-End development.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class="home-5" ref="projects" id="projects">
        <div class="home-5-wrapper">
          
          <div class="home-5-header">
            <h4 class="home-5-subheader yellow">SELECTED PROJECTS</h4>

            <div class="home-5-header-wrapper">
              <h2 class="home-5-header-text">Project</h2>
              <img src="../assets/images/home/section5/circle.svg" alt="circle image filler" class="circle-filler">
              <h2 class="home-5-header-text">Case Studies</h2>
              <img src="../assets/images/home/section5/circle.svg" alt="circle image filler" class="circle-filler">
              <h2 class="home-5-header-text">Work</h2>
            </div>
          </div>

          <div class="home-5-portfolio-item-wrapper">
            <div class="home-5-portfolio-item">
              <div class="home-5-portfolio-item-wrapper-0">
                <div class="home-5-portfolio-text-wrapper">
                  <h4 class="portfolio-year">2022 - 2023</h4>
                  <h3 class="portfolio-title">Automated CV Screening System for Human Resource</h3>
                  <strong class="portfolio-role">UI / UX Designer</strong>
                </div>

                <button class="view-case-study-button"><router-link to="/projects/CVScreeningSystem">View case study</router-link></button>
              </div>

              <img src="../assets/images/home/section5/portfolioImg01.svg" alt="product portfolio design preview" class="portfolio-frontpage-picture">
            </div>

            <div class="home-5-portfolio-item">
              <div class="home-5-portfolio-item-wrapper-0">
                <div class="home-5-portfolio-text-wrapper">
                  <h4 class="portfolio-year">2022</h4>
                  <h3 class="portfolio-title">Streaming Service App - OTT Features Development</h3>
                  <strong class="portfolio-role">UI / UX Designer</strong>
                </div>

                <button class="view-case-study-button">View case study</button>
              </div>

              <img src="../assets/images/home/section5/portfolioImg02.svg" alt="product portfolio design preview" class="portfolio-frontpage-picture">
            </div>

            <div class="home-5-portfolio-item">
              <div class="home-5-portfolio-item-wrapper-0">
                <div class="home-5-portfolio-text-wrapper">
                  <h4 class="portfolio-year">2021 - 2023</h4>
                  <h3 class="portfolio-title">Other Projects</h3>
                  <strong class="portfolio-role">Product Designer, UI / UX Designer, Front-End Developer</strong>
                </div>

                <button class="view-case-study-button">View projects</button>
              </div>

              <img src="../assets/images/home/section5/portfolioImg03.svg" alt="product portfolio design preview" class="portfolio-frontpage-picture">
            </div>

            <div class="home-5-portfolio-item no-margin-bottom">
              <div class="home-5-portfolio-item-wrapper-0">
                <div class="home-5-portfolio-text-wrapper">
                  <h4 class="portfolio-year">COMING SOON</h4>
                  <h3 class="portfolio-title">UI / UX Design in Virtual Reality Personal Project</h3>
                  <strong class="portfolio-role">UI / UX Designer</strong>
                </div>

                <button class="view-case-study-button invisible">View case study</button>
              </div>

              <img src="../assets/images/home/section5/portfolioImg04.svg" alt="product portfolio design preview" class="portfolio-frontpage-picture">
            </div>
          </div>

        </div>
      </section>

      <section class="home-6">
        <Pfooter />
      </section>

      <footer class="home-7">
        <Footer />
      </footer>
      
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
import Pfooter from '@/components/PfooterView.vue';
import Footer from '@/components/FooterView.vue';

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Pfooter,
    Footer
  },
  methods: {
    scrollToProjects() {
      this.$refs["projects"].scrollIntoView({ behavior: "smooth" })
    },
  },
}

</script>
