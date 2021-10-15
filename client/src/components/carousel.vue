<template>
  <div class="">
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item slide-img1 active">
          &nbsp;
          <div class="carousel-details">
            <div>
                <h2 class="cd1">women collection 2018</h2>
                <h1 class="cd2">new season</h1>
                <div class=" c-link mt-5">
                  <a href="#" class="carousel-link"> shop now</a>
                </div>
            </div>
          </div>
        </div>
        <div class="carousel-item slide-img2">
          &nbsp;
          <div class="carousel-details">
            <div>
              <h2 class="cd1">women collection 2021</h2>
              <h1 class="cd2">new season</h1>
              <div class="c-link mt-5">
                <a href="#" class="carousel-link"> shop now</a>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item slide-img3">
          &nbsp;
          <div class="carousel-details">
            <div>
                <h2 class="cd1">women collection 2018</h2>
                <h1 class="cd2">new season</h1>
                <div class="c-link mt-5">
                  <a href="#" class="carousel-link"> shop now</a>
                </div>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "carousel",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .carousel-item {
  position: relative;
} */
@media screen and (max-width : 768px) {
  .cd1 {
  width: 100%;
  font-weight: 600;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 1.7rem !important;
  }
  .cd2 {
    width: 100%;
    font: bolder;
    font-family: "Times New Roman", Times, serif;
    font-size: 1.5rem !important;
  }
  .carousel-details {
  width: 80% !important;
}
}
.carousel-details {
  width: 70% ;
  height:100%;
  opacity: 1;
  display:flex;
  flex-direction:row;
  align-items:center;
   margin:auto;
}
.carousel-details:active {
  opacity: 1;
}
.cd1 {
  width: 100%;
  font: bolder;
  font-family: "Times New Roman", Times, serif;
  font-size: 1.8rem;
  text-transform: uppercase;
  opacity: 1;
  animation-name: carousel-slide1;
  animation-duration: 2s;
  animation-delay: 1s;
  animation-timing-function: ease-out;
  backface-visibility: hidden;
}

.cd1:before {
  content: "";
  opacity: 1;
  visibility: visible;
}
/* .cd1::after {
  content: "";
  opacity: 1;
  visibility: visible;
} */
.slide-img1 {
  background-image: url(../assets/images/slide-01.jpg);
  background-size: cover;
  background-position: top;
  height: 93vh;
  width: 100%;
}
.slide-img2 {
  background-image: url(../assets/images/slide-02.jpg);
  background-size: cover;
  height: 93vh;
  width: 100%;
  background-position: top;
}
.slide-img3 {
  background-image: url(../assets/images/slide-03.jpg);
  background-size: cover;
  background-position: top;
  height: 93vh;
  width: 100%;
}
.cd2 {
  width: 100%;
  font: larger;
  font-family: "Times New Roman", Times, serif;
  font-size: 3.9rem;
  text-transform: uppercase;
  animation-name: carousel-slide2;
  animation-duration: 1s;
  animation-delay: 1s;
  animation-timing-function: ease-out;
  backface-visibility: hidden;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
}
.carousel-link {
  text-decoration: none;
  color: whitesmoke;
  background-color: rgba(52, 48, 241, 0.7);
  padding: 0.9rem 2.8rem;
  border-radius: 2rem;
  font: 700;
  text-transform: uppercase;
  font-family: "Times New Roman", Times, serif;
  font-size: 1rem;
}
.c-link {
  animation-name: carousel-slide3;
  animation-duration: 2s;
  animation-delay: 1s;
  animation-timing-function: ease-out;
  backface-visibility: hidden;
}
/* @keyframes carousel-slide1 {
  0% {
    opacity: 0;
    transform: translateX(3rem);
  }
  80% {
    transform: skew(-25deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
} */
/* @keyframes carousel-slide3 {
  0% {
    opacity: 0;
    transform: translateY(3rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
} */
/* @keyframes carousel-slide2 {
  0% {
    opacity: 0;
    transform: translateY(-3rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
} */
@keyframes carousel-slide2 {
  from {
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    transform: skewX(-5deg);
    opacity: 1;
  }

  to {
    transform: none;
    opacity: 1;
  }
}
@keyframes carousel-slide2 {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes carousel-slide1 {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
}
</style>