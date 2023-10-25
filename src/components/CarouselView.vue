<template>
  <div>
    <div class="container">
      <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-touch="true" data-bs-interval="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="6" aria-label="Slide 7"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="7" aria-label="Slide 8"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/images/carousels/CV/image01.svg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/carousels/CV/image02.svg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/carousels/CV/image03.svg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/carousels/CV/image04.svg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/carousels/CV/image05.svg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/carousels/CV/image06.svg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/carousels/CV/image07.svg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/carousels/CV/image08.svg" class="d-block w-100" alt="...">
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