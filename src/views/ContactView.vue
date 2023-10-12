<template>
  <div class="home">
    <nav>
      <Navbar />
    </nav>


  </div>
</template>

<script>

import Navbar from '@/components/NavbarView.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
  },
}
</script>
