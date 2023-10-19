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

    <section class="contact-2">
      <div class="contact-2-wrapper">
        <div class="contact-2-left-wrapper">
          <div class="contact-2-header-wrapper">
            <small class="contact-2">CONTACT</small>
            <h3 class="contact-2-header">Get in touch - let’s work together</h3>
          </div>
  
          <div class="contact-2-contact-info-wrapper">
            <div class="contact-2-info location">
              <h4 class="contact-2-subheader">LOCATION</h4>
              <p class="contact-2-information">Bekasi, Indonesia</p>
            </div>
  
            <div class="contact-2-info-wrapper">
              <div class="contact-2-info email">
                <h4 class="contact-2-subheader">BUSINESS INQUIRIES</h4>
                <div class="contact-2-information-wrapper">
                  <a href="mailto:steflx0510@gmail.com" class="contact-2-information link-style"> steflx0510@gmail.com </a>
                  <img src="../assets/images/contact/pixelarticonsarrow.svg" alt="arrow icon" class="arrow-icon">
                </div>
              </div>
  
              <div class="contact-2-info say-hello">
                <h4 class="contact-2-subheader">SAY HELLO</h4>
                <div class="contact-2-information-wrapper">
                  <a href="https://www.linkedin.com/in/stefanny-lie/" target="_blank" class="contact-2-information link-style"> linkedin.com/in/stefanny-lie </a>
                  <img src="../assets/images/contact/pixelarticonsarrow.svg" alt="arrow icon" class="arrow-icon">
                </div>
                
                <img src="../assets/images/contact/hellohand.svg" alt="hello image" class="hello-icon">
              </div>
            </div>
  
          </div>
        </div>
  
        <div class="contact-2-right-wrapper">
          <div class="contact-2-right-header">
            <div class="space-filler"></div>
            <p class="contact-2-right-header">Have a project in mind?<br> <span style="white-space: pre-line">Don't hesitate to reach out if you're interested in collaborating on something.</span>
            </p>
          </div>

          <div class="contact-2-form">
            <form ref="form" @submit.prevent="sendEmail" action="" class="form-wrapper">

              <div class="form-row-item-wrapper">
                <div class="form-row-item-wrapper-1">
                  <label for="name" class="form-header">NAME</label>
                  <input type="text" v-model="name" name="user_name" placeholder="What's your name?" required>
                </div>

                <div class="form-row-item-wrapper-1">
                  <label for="email" class="form-header">EMAIL</label>
                  <input type="email" v-model="email" name="user_email" placeholder="What's your email address?" required>
                </div>        
              </div>

              <div class="form-row-item-wrapper">
                <div class="form-row-item-wrapper-1">
                  <label for="service" class="form-header">SERVICE</label>
                  <select name="user_option" id="service" style="height: auto" required>
                    <option value="country" hidden class="select-placeholder"> What are you interested in?</option>
                    <option value="need-help-with-a-one-off-project">Need help with a one-off project</option>
                    <option value="looking-for-long-term-partnership">Looking for a long-term partnership</option>
                    <option value="want-to-hire-me-full-time">Want to hire me full-time</option>
                    <option value="just-wanted-to-say-hi">Just wanted to say hi!</option>
                    <option value="collaborate">I want to collaborate!</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div class="form-row-item-wrapper-1">
                  <label for="budget" class="form-header">BUDGET</label>
                  <input name="user_budget" placeholder="What's your budget?" required>
                </div>
              </div>

              <div class="form-row-item-wrapper-1">
                <label for="message" class="form-header">MESSAGE</label>
                <textarea v-model="message" name="message" placeholder="Tell me more about your project" required></textarea>  
              </div>

              <!-- <div class="submit-box" type="submit">
                <img src="../assets/images/contact/mail.svg" alt="mail image">
                <input class="input-button" type="submit" value="Send Message">
              </div> -->
              <input class="input-button" type="submit" value="Send Message">

            </form>
          </div>
        </div>
      </div>

    </section>

    <section class="Alert-hidden">
      <div v-if="success">
        <div class="overlay">
          <div class="alert">
            <div class="alert-wrapper">
              <h4 class="alert-title">Message Sent!</h4>
              <p class="alert-content">I'll be in touch soon! Expect a response within <b class="white">2-3 business days</b>.<br> <span class="alert-content" style="white-space: pre-line">Feel free to reach out if you have any questions or concerns.</span> </p>
            </div>
            
            <button class="alert-button" @click="success = false">Got It!</button>
          </div>
        </div>
      </div>
  
    </section>

    <section class="contact-3">
      <Footer />
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
import Navbar from '@/components/NavbarView.vue';
import Footer from '@/components/FooterView.vue';

import emailjs from '@emailjs/browser';

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Footer,
  },

  data() {
    return {
      success: false
    };
  },

  methods: {
    callAlert(){
      this.success = true;
    },

    sendEmail() {
      //emailjs.sendForm('service_qw2cbdk', 'template_pvfkh2c', this.$refs.form, 'x3x9hxFt2_vABOWXd')
      emailjs.sendForm('service_n65tg0n', 'template_va4lgvl', this.$refs.form, 'aQmHijM5780Nd66t2')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            this.callAlert();
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }

}
</script>
