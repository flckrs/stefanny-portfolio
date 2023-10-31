<template>
<!-- Pageloader -->
  <div class="page-loader" v-if="!isloaded">
    <div class="loader">
        <div class='loader-style-1 panelLoad'>
            <div class='cube-face cube-face-front'>S</div>
            <div class='cube-face cube-face-back'>T</div>
            <div class='cube-face cube-face-left'>E</div>
            <div class='cube-face cube-face-right'>F</div>
            <div class='cube-face cube-face-bottom'>E</div>
            <div class='cube-face cube-face-top'>S</div>
        </div>
        <!-- /Cube panelload -->
        <p class="cube-face">Getting your things ready...</p>
    </div>
    <!-- /loader -->
  </div>
  <!-- /Page-loader -->

</template>

<style lang="scss" scoped>
  @import '@/assets/styles/color.scss';
  @import '@/assets/styles/font.scss';
  @import '@/assets/styles/style.scss';

  .page-loader {
      position: fixed;
      width: 100%;
      height: 100%;
      /* background-color: #fff; */
      background-color: $color-dn-160;
      display: block;
      z-index: 99;
  }

  .loader p {
    font-family: "Khand", sans-serif;
    font-size: 24px;
    text-align: center;

    position: absolute;

    top: 55%;
    left: 50%;
    transform: translate(-50%, -45%);

    color: $color-primary-white;
  }


  /*Preloader 1*/

  .loader-style-1 {
      width: 80px;
      height: 80px;
      line-height: 80px;
      text-align: center;
      font-size: 30px;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
      -webkit-transition: -webkit-transform 0.5s 0.1s;
      transition: transform 0.5s 0.1s;
      perspective: 9999px;
      color: $color-primary-black;
      margin: -40px 0 0 -40px;
      margin: 0 auto;
      position: absolute;
      left: 50%;
      margin-left: -37px;
      top: 65px;
      opacity: 1;
  }

  .loader-style-1.panelLoad {
      z-index: 11;
      top: 45%;
      margin-top: -60px;
      -webkit-animation: panel 2.2s infinite forwards;
      animation: panel 2.2s infinite forwards;
  }

  .loader-style-1.panelLoad .cube-face {
      color: $color-primary-black;
      box-shadow: inset 0 0 0 1px #222, 0 0 1px 1px #222;
  }

  .loader-style-1 .cube-face {
      width: inherit;
      height: inherit;
      position: absolute;
      background: $color-primary-white;
      box-shadow: inset 0 0 0 1px #3e3e3e, 0 0 1px 1px #3e3e3e;
      opacity: 1;
      font-family: Arial, Helvetica, sans-serif;
  }

  .loader-style-1 .cube-face-front {
      transform: translate3d(0, 0, 40px);
      -webkit-transform: translate3d(0, 0, 40px);
      font-size: 30px;
  }

  .loader-style-1 .cube-face-back {
      -webkit-transform: rotateY(180deg) translate3d(0, 0, 40px);
      transform: rotateY(180deg) translate3d(0, 0, 40px);
  }

  .loader-style-1 .cube-face-left {
      -webkit-transform: rotateY(-90deg) translate3d(0, 0, 40px);
      transform: rotateY(-90deg) translate3d(0, 0, 40px);
  }

  .loader-style-1 .cube-face-right {
      -webkit-transform: rotateY(90deg) translate3d(0, 0, 40px);
      transform: rotateY(90deg) translate3d(0, 0, 40px);
  }

  .loader-style-1 .cube-face-top {
      -webkit-transform: rotateX(90deg) translate3d(0, 0, 40px);
      transform: rotateX(90deg) translate3d(0, 0, 40px);
  }

  .loader-style-1 .cube-face-bottom {
      -webkit-transform: rotateX(-90deg) translate3d(0, 0, 40px);
      transform: rotateX(-90deg) translate3d(0, 0, 40px);
  }

  @-webkit-keyframes panel {
      0% {
          -webkit-transform: rotateY(0deg) rotateZ(0deg);
      }
      20% {
          -webkit-transform: rotateY(90deg) rotateZ(0deg);
      }
      40% {
          -webkit-transform: rotateX(45deg) rotateZ(45deg);
      }
      60% {
          -webkit-transform: rotateX(90deg) rotateY(180deg) rotateX(90deg);
      }
      80% {
          -webkit-transform: rotateX(310deg) rotateZ(230deg);
      }
      100% {
          -webkit-transform: rotateX(360deg) rotateZ(360deg);
      }
  }

  @keyframes panel {
      0% {
          -webkit-transform: rotateY(0deg) rotateZ(0deg);
          transform: rotateY(0deg) rotateZ(0deg);
      }
      20% {
          -webkit-transform: rotateY(90deg) rotateZ(0deg);
          transform: rotateY(90deg) rotateZ(0deg);
      }
      40% {
          -webkit-transform: rotateX(45deg) rotateZ(45deg);
          transform: rotateX(45deg) rotateZ(45deg);
      }
      60% {
          -webkit-transform: rotateX(90deg) rotateY(180deg) rotateX(90deg);
          transform: rotateX(90deg) rotateY(180deg) rotateX(90deg);
      }
      80% {
          -webkit-transform: rotateX(310deg) rotateZ(230deg);
          transform: rotateX(310deg) rotateZ(230deg);
      }
      100% {
          -webkit-transform: rotateX(360deg) rotateZ(360deg);
          transform: rotateX(360deg) rotateZ(360deg);
      }
  }

  @media screen and (max-width: 842px) {
        .loader p {
        top: 60%;
        left: 50%;
        transform: translate(-50%, -40%);
    }
  }

</style>

<script>
export default {
  data: () => {
    return {
      isloaded: false
    }
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        setTimeout(() => {
          this.isloaded = true;
        }, 3000); // 3000 milliseconds = 3 seconds
      }
    }
  } 
}
</script>