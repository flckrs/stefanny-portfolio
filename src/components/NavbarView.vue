<template>
  <div>
    <nav id="navbar">
      <div class="navbar-wrapper">
        <ul class="navbar-router">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/">Projects</router-link></li>
          <li><router-link to="/about">About Me</router-link></li>
        </ul>

        <div class="navbar-contact">
          <button class="work-together"><router-link to="/contact">Let's Work Together</router-link></button>
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
    
  };
</script>