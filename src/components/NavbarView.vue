<template>
  <div>
    <nav id="navbar">
      <div class="navbar-wrapper">
        <ul class="navbar-router">
          <li><router-link to="/" class="nav-link nav-link-ltr">Home</router-link></li>
          <li><router-link to="/projects" class="nav-link nav-link-ltr">Projects</router-link></li>
          <li><router-link to="/about" class="nav-link nav-link-ltr">About Me</router-link></li>
        </ul>

        <div class="navbar-contact">
          <button class="work-together"><router-link to="/contact" class="nav_link">Let's Work Together</router-link></button>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
  @import '@/assets/styles/color.scss';
  @import '@/assets/styles/style.scss';
  @import '@/assets/styles/font.scss';

  @import '@/assets/styles/navbar.scss';
</style>

<script>  
export default {
  methods: {
    scrollToProjects() {
      // Use the router to navigate to the "/projects" route
      this.$router.push("/projects");
    },
  },
};
</script>