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

    <section class="case-study-2">
      <div class="case-study-2-wrapper">
        <div class="case-study-2-1-wrapper-0">
          <div class="case-study-2-1-wrapper">
            <div class="case-study-2-1 what-i-did">
              <div class="what-i-did-header-wrapper">
                <h4 class="what-i-did-header black">WHAT I DID</h4>
                <img src="../assets/images/casestudy1/section2/yellowvector.svg" alt="yellow background image" class="yellow-curve-image">
              </div>

              <div class="what-i-did-pills-wrapper">
                <div class="item-pills-wrapper black">USER-CENTERED DESIGN</div>
                <div class="item-pills-wrapper black">ACTIVITY-CENTERED DESIGN</div>
                <div class="item-pills-wrapper black">UI & UX DESIGN</div>
                <div class="item-pills-wrapper black">RESEARCH</div>
                <div class="item-pills-wrapper black">ANALYSIS</div>
                <div class="item-pills-wrapper black">DEVELOPMENT</div>
                <div class="item-pills-wrapper black">DESIGN SYSTEM</div>
                <div class="item-pills-wrapper black">ICON DESIGN</div>
                <div class="item-pills-wrapper black">WIREFRAMING</div>
                <div class="item-pills-wrapper black">PROTOTYPING</div>
                <div class="item-pills-wrapper black">USABILITY TESTING</div>
              </div>
            </div>

            <div class="case-study-2-1 project-background-wrapper">
              <h2 class="case-section-title">Project Background</h2>
              <p class="case-section-content">As the name suggest, CV screening system is a system that screen candidate CVs and find he right candidates using AI. This project is all about utilizing AI to make HR's job easier, especially when screening CVs. One big reason for this is that HR has to go through many CVs over and over for job openings. Knowing this takes a lot of time, my design project is working to make this process faster and better.
              <br> <br>
              The current tools, called Applicant Tracking Systems (ATS), are helpful but not perfect. People find them tricky and not easy to use, so they end up going back to doing things manually. Our project is working on making the part of ATS that deals with CV screening much better and simpler.</p>
            </div>
          </div>
        </div>

        <div class="case-study-2-2-wrapper-0">
          <div class="case-study-2-2-wrapper-1">
            <img src="../assets/images/casestudy1/productss/image01.svg" alt="product sneakpeek" class="case-study-image">

            <button @click="scrollToProjects" class="redirect-to-bottom">Bypass all this valuable content and jump down to see the design!</button>
          </div>
        </div>

        <div class="case-section-wrapper">
          <div class="case-section-wrapper-1">
            <p>My main focus is making the design fit what the users—HR professionals—really need. I want to make a tool that not only has all the important features but is also super easy to use. The goal is to create a tool that helps HR make smart decisions during the CV screening process. It's a bit like exploring new territory, and my aim is to create a design that makes hiring much better.</p>
          </div>
        </div> 

        <div class="case-section-wrapper">
          <div class="case-section-wrapper-container">
            <div class="case-section-header-wrapper">
              <div class="case-section-filler"></div>
              <h3 class="case-section-title">The Problem</h3>
            </div>

            <p>Hiring becomes challenging with numerous applicants for a limited number of positions. HR faces the task of reviewing resumes, aligning them with company needs, which is time-consuming with a large pool of candidates. To streamline this process, HR uses an Applicant Tracking System (ATS), a valuable tool that simplifies hiring tasks and enhances efficiency.</p>
          </div>
        </div>

        <div class="case-section-wrapper">
          <div class="case-section-wrapper-1 margin-top">
            <h2 class="case-section-title">The Challenge</h2>
            <p>Creating a brand-new product for HR poses a challenge in getting HR professionals willing to join the development journey. While I'm working on how the tool looks and feels, I'm carefully thinking about the features that can be developed to satisfy both stakeholders and users while being feasible for the developers to implement. Since I'm doing this project as a sole UI/UX designer and have a tight deadline, I also need to make sure that everything I plan can actually be done by the tech team.</p>
          </div>
        </div> 

        <div class="case-study-2-2-wrapper-0">
          <div class="case-study-2-2-wrapper-1">
            <img src="../assets/images/casestudy1/productss/image02.svg" alt="product sneakpeek" class="case-study-image">
          </div>
        </div>

        <div class="case-section-wrapper">
          <div class="case-section-wrapper-1">
            <h2 class="case-section-title">RESEARCH - OVERVIEW + PRODUCT BENCHMARKING</h2>
            <p>I began this research by diving into everything about HR through reading, looking into what HR aims for in the hiring process, understanding how they get the job done, and exploring the challenges they face. This exploration helps me prepare the right questions for interviews with both stakeholders and users. I also checked out similar products, and here's what I found:
              <br> <br>
            1. Many of our market competitors have a steep learning curve. Users need to navigate through multiple steps to achieve their goals, which could be simplified.
              <br> <br>
            2. The visual design for users is pretty dull. These products are bland because they present a lot of text, and users have to do a ton of scrolling just to fill in the necessary info. It also means users get tired easily and find it complicated since technical knowledge is required.
            </p>
          </div>
        </div> 

        <div class="case-study-2-2-wrapper-0">
          <div class="case-study-2-2-wrapper-1">
            <img src="../assets/images/casestudy1/productss/image03.svg" alt="product sneakpeek" class="case-study-image">
          </div>
        </div>

        <div class="case-section-wrapper">
          <div class="case-section-wrapper-container">
            <div class="case-section-header-wrapper">
              <div class="case-section-filler"></div>
              <h3 class="case-section-title">How Talking Discover Problems</h3>
            </div>

            <p>Talking with people helps us uncover problems and challenges. In the world of UI/UX, having conversations opens up a window to understand the issues users face. 
              <br> <br>
            It's like a map—we talk, we listen, and we navigate through the user's experience to find areas that need improvement. Talking is our compass in discovering what works, what doesn't, and how we can make things better for everyone.</p>
          </div>
        </div>

        <div class="case-section-wrapper">
          <div class="case-section-wrapper-1 margin-top">
            <h2 class="case-section-title">Research - Stakeholder View</h2>
            <p>After understanding more about the overview of HR tasks, this research began by figuring out what the stakeholders need with in-depth interview. From their perspective, the main goal of the system is to find the best candidates from a pile of CVs by matching job skills. This idea helps me know what features to create and how to make it user-friendly.</p>
          </div>
        </div>
        
        <div class="case-study-2-2-wrapper-0">
          <div class="case-study-2-2-wrapper-1">
            <img src="../assets/images/casestudy1/productss/image04.svg" alt="product sneakpeek" class="case-study-image">
          </div>
        </div>

        <div class="case-section-wrapper">
          <div class="case-section-wrapper-1">
            <h2 class="case-section-title">Research - HR View</h2>
            <p>To get a better grip on our users (HR professionals), I dug deeper by conducting interviews with various HR experts from different companies, each with their unique roles. In this phase of the research, I gathered information on their activities, problems, goals, tasks, and user needs to figure out the key features for the designs.
              <br> <br>
            From these interviews, a couple of things stood out:
              <br> <br>
            1. The CV screening process isn't as straightforward as I initially thought, especially because every HR pro has their own way of doing it.
              <br>
            2. Users of the product are meticulous and thorough. They always double-check to make sure they're getting the right information from the CVs.
              <br>
            3. Most users are familiar with email apps and various recruitment platforms, such as LinkedIn, Glassdoor, etc.
              <br> <br>
            When I interviewed users, I took care not to mix up what they want with what they need because these fall into different categories. It's important to understand that what people say might not fully capture their feelings, needs, or thoughts. This stage is crucial for me to nail down the user requirements.</p>
          </div>
        </div>

        <div class="case-study-2-2-wrapper-0">
          <div class="case-study-2-2-wrapper-1">
            <img src="../assets/images/casestudy1/productss/image05.svg" alt="product sneakpeek" class="case-study-image">
          </div>
        </div>

        <div class="case-section-wrapper">
          <div class="case-section-wrapper-1">
            <h2 class="case-section-title">The Big Idea</h2>
            <p>Out of all the info I collected, the tricky part is ensuring users don't feel overwhelmed by the tasks. I need to make sure the entire screening process happens on one screen without jumping from page to page. This helps users track the process easily, especially since it can be quite lengthy, as shown in the image above. Since the main goal is finding the right candidate, the system must handle CV screening with care and be super user-friendly. The product should also be able to prioritize security for the data, since it’s a really delicate data.</p>
          </div>
        </div>

        <div class="case-section-wrapper">
          <div class="case-section-wrapper-container">
            <div class="case-section-header-wrapper">
              <div class="case-section-filler"></div>
              <h3 class="case-section-title">Working Process with Team</h3>
            </div>

            <p>I've talked over all the features with the dev team, and the stakeholders gave us the green light. The features might not be perfect, but these are the most suitable ones since some features I suggested aren't doable yet. It's about finding a balance to meet stakeholders' and users' needs within the devs' capabilities.</p>
          </div>
        </div>

        <div class="case-study-2-2-wrapper-0">
          <div class="case-study-2-2-wrapper-1 margin-top">
            <img src="../assets/images/casestudy1/productss/image06.svg" alt="product sneakpeek" class="case-study-image">
          </div>
        </div>

        <div class="case-section-wrapper">
          <div class="case-section-wrapper-1">
            <h2 class="case-section-title">How Did We Go There?</h2>
            <p>The challenge here is to design all of the features as the image shown above in a way that fulfills UX and usability goals, ensuring users aren't overwhelmed. To tackle this, I'm grouping features, considering the HR process. It's tricky since I need to ensure every crucial tool is easily accessible by the user. I'm breaking down the design into phases:
              <br> <br>
            Phase 1: Creating a sitemap to group features.
            <br>
            Phase 2: Mapping out the user flow for the entire product, connecting different features.
            <br>
            Phase 3: Detailing the user flow for each feature.
            <br>
            Phase 4: Outlining use cases diagram for developers.
              <br> <br>
            I believe it's crucial to approach design from various angles, so each perspective complements the others and makes the development process smoother.</p>
          </div>
        </div>
        
        <div class="case-section-wrapper">
          <div class="case-section-wrapper-1">
            <h2 class="case-section-title">Design Principles</h2>
            <p>Once I've chosen the features, defined solid foundation, and figured out how the product will work for users, the next step is to bring the product to life. As I shape the design, a set of principles is my North Star—they guide both major and minor design decisions. These principles play a crucial role in achieving the user experience I aim for in the product.
              <br> <br>
            hese principles encompass anticipating user needs, minimizing cognitive load, adopting a modular system, purposeful use of color, prioritizing clarity, recognizing the importance of context, placing relevance first, and choosing the right wording for the right user.</p>
          </div>
        </div>

        <div class="case-study-2-2-wrapper-0">
          <div class="case-study-2-2-wrapper-1">
            <img src="../assets/images/casestudy1/productss/image07.svg" alt="product sneakpeek" class="case-study-image">
          </div>
        </div>

        <div class="case-section-wrapper">
          <div class="case-section-wrapper-1">
            <h2 class="case-section-title">Design Exploration</h2>
            <p>Guided by these principles, I experimented with various ways to present all the essential candidate information. I tested side-bar menus, candidate info in list views, horizontal lists, and many more. Among these options, I settled on one featuring a navigation bar for the menu and a single container displaying multiple candidates with CV file previews beside each.
              <br> <br>
            Initially, I thought it might be ideal to show all the candidates' basic info at once and then reveal the CV after a user click.
              <br> <br>
            However, considering the meticulous nature of users, it seemed more effective to place the CV preview on the same page as the list of candidates. This ensures a seamless and efficient experience for users who prefer to carefully review information.</p>
          </div>
        </div>

        <div class="case-study-2-2-wrapper-0">
          <div class="case-study-2-2-wrapper-1">
            <img src="../assets/images/casestudy1/productss/image08.svg" alt="product sneakpeek" class="case-study-image">
          </div>
        </div>

        <div class="case-section-wrapper">
          <div class="case-section-wrapper-1">
            <p>I also make sure to cover all potential scenarios for each component, screen, or click that users might engage with. This helps prevent confusion during unsuccessful interactions. I've created numerous cases that are crucial, including scenarios for new users, instances where users upload files, and many more to cover the primary interactions. This thorough approach ensures a smooth experience and addresses various user needs and actions within the product.
              <br> <br>

            Since this product deals with sensitive data, there's always a pop-up (modal) when users perform important actions. This is especially true when users change a candidate's status, alter position status, delete candidate data, and more. Additionally, I've ensured the product has a temporary trash section for added security. This section ensures that data isn't permanently deleted but is kept in a temporary trash bin for 30 days after the user decides to delete it. This way, even sensitive data has an extra layer of protection and can be recovered if needed within a reasonable timeframe.</p>
          </div>
        </div>
        
        <div class="case-study-2-2-wrapper-0">
          <div class="case-study-2-2-wrapper-1">
            <img src="../assets/images/casestudy1/productss/image09.svg" alt="product sneakpeek" class="case-study-image">
          </div>
        </div>

        <div class="case-section-wrapper">
          <div class="case-section-wrapper-1">
            <p>Based on what I've learned, users in the recruitment process often use various applications like LinkedIn and email. To make the product easy to learn, I've aligned its functions and usage with familiar behaviors. For instance, I added a filter function for searching candidates, similar to the filter button in email apps.
              <br> <br>
            I've also considered how users interact on desktops, recognizing that their actions might differ unconsciously across platforms. In this design, I ensure users can perform shortcut actions by clicking the right mouse button. This not only provides alternative ways for users to achieve their goals but also gives them the experience of using a familiar desktop application.
              <br> <br>
            In finalizing the product, I ensure that micro-interactions are included to make the user experience more intuitive and engaging. This is crucial, especially considering users interact with numerous items on the screen. Additionally, I make sure each button has its unique micro-interaction tailored to its hierarchy. For example, primary buttons and secondary buttons have distinct micro-interactions. This not only adds a touch of dynamism to the product but also guides users through a seamless and interactive experience based on the importance of each action.</p>
          </div>
        </div>

        <div class="case-study-2-2-wrapper-0">
          <div class="case-study-2-2-wrapper-1">
            <img src="../assets/images/casestudy1/productss/image10.svg" alt="product sneakpeek" class="case-study-image">
          </div>
        </div>

        <div class="case-section-wrapper">
          <div class="case-section-wrapper-1">
            <h2 class="case-section-title">Iterate</h2>
            <p>Once the design was done, I launched a usability test. During this testing phase, I documented their findings and revised the screens based on their feedback. In the initial round, I noticed users struggled to grasp the meaning of some words on the screen, likely because the language wasn't HR-centric enough. Another discovery was that certain actions needed more visibility.
              <br> <br>
            After making improvements, the subsequent test showed a 39.1% increase in time-based efficiency, 100% completion of tasks without errors, and the product being easy to learn, supported by SEQ (Single Ease Question) data and learning curve information indicating users' skill improvement while using the products.
              <br> <br>
            The tests also revealed that users found the product engaging and delightful, thanks to its intuitiveness and the "aesthetic-usability" effect it brought.</p>
          </div>
        </div>

        <section class="carousel margin-bottom" ref="carousel" id="carousel">
          <Carousel />
        </section>

        <div class="case-section-wrapper">
          <div class="case-section-wrapper-1 margin-bottom">
            <h2 class="case-section-title">Summary</h2>
            <p>Design is all about making user-centric decisions, distinguishing between biased and unbiased input. Throughout this UI/UX design journey, I've gained significant insights, and here are a few key takeaways:
              <br> <br>
            1. Empathy Matters: Always understand the user's perspective. It not only guides the product creation process but helps in crafting products that resonate with the user's mental model, making it more relatable and user-friendly.
              <br> <br>
            2. Evolution of Ideas: What I envisioned in the discovery stage looked quite different in the final product. The journey unfolded new layers, emphasizing the importance of continuous exploration and refinement, resulting in a more refined final design.
              <br> <br>
            3. Balancing Stakeholders and Developers: Meeting the needs of stakeholders and users is crucial, but equally important is aligning designs with developers' capabilities. Making components reusable ensures efficiency and adaptability, benefiting both developers and the overall design process.
              <br> <br>
            4. The Power of Aesthetics: The aesthetic usability effect is a game-changer. It's not just about looks; it profoundly shapes how users perceive a product's usability and functionality. A well-designed and visually pleasing interface boosts user engagement, creating positive associations and increasing user retention rates.</p>
          </div>
        </div>

        
      </div>
    </section>

    <section class="case-study-3">
      <Pfooter />
    </section>

    <section class="case-study-4">
      <Footer />
    </section>


  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/styles/color.scss';
  @import '@/assets/styles/style.scss';
  @import '@/assets/styles/font.scss';

  @import '@/assets/styles/casestudycv.scss';
</style>

<script>  
import Navbar from '@/components/NavbarView.vue';
import Pfooter from '@/components/PfooterView.vue';
import Footer from '@/components/FooterView.vue';

import Carousel from '@/components/CarouselView.vue';

export default {
  components: {
    Navbar,
    Pfooter,
    Footer,
    Carousel,
  },
  methods: {
    scrollToProjects() {
      this.$refs["carousel"].scrollIntoView({ behavior: "smooth" })
    },
  },
};
</script>