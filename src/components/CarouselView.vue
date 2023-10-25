<template>
  <div>
    <div class="container">
      <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-touch="true" data-bs-interval="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/images/casestudy1/carousels/dummy2.svg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/casestudy1/carousels/dummy.svg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/casestudy1/carousels/dummy2.svg" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~bootstrap/scss/bootstrap';


  .carousel-control-prev, .carousel-control-next {
    width: 5%;
  }
  
  .carousel {
    max-width: 100%;
  }
</style>

<script>

export default {
  setup() {
    
  },
}
</script>