<template>
  <div class="wrapper">
    <carousel></carousel>
    
    <!-- categories section -->
    <section class="section-category">
      <div class="container">
        
        <div class="row category-panel mx-auto">
          <div class="col-md-4">
           <div class="category mb-2">
              &nbsp;
            <img src="../assets/images/banner-02.jpg" class="img-fluid" alt="">
             <div class="category-overlay">
              <div class="overlay-content">
                <div class="overlay-details1">
                  <h1>Men</h1>
                  <div>spring 2018</div>
                </div>
                <div class="overlay-address">
                  <div class="overlay-link">
                    <a href="#" class=""> shop now</a>
                  </div> 
                  <div class="link-border"></div>             
                </div>
              </div>
            </div>
           </div>
          
          </div>
          <div class="col-md-4">
            <div class="category mb-2">
              &nbsp;
              <img src="../assets/images/banner-01.jpg" class="img-fluid imgFluid" alt="">
              <div class="category-overlay">
                <div class="overlay-content">
                  <div class="overlay-details1">
                    <h1>Women</h1>
                    <div>spring 2018</div>
                  </div>
                  <div class="overlay-address">
                    <div class="overlay-link">
                      <a href="#" class=""> shop now</a>
                    </div> 
                    <div class="link-border"></div>             
                  </div>
                </div>
              </div>
            </div>            
          </div>
          <div class="col-md-4">
             <div class="category">
              &nbsp;
              <img src="../assets/images/banner-03.jpg" class="img-fluid" alt="">
              <div class="category-overlay">
                <div class="overlay-content">
                  <div class="overlay-details1">
                    <h1>Accessories</h1>
                    <div>spring 2018</div>
                  </div>
                  <div class="overlay-address">
                    <div class="overlay-link">
                      <a href="#" class=""> shop now</a>
                    </div> 
                    <div class="link-border"></div>             
                  </div>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </section>

    <section class="product">
      <div class="section-pro">
        <div class="container">
          <h3 class=" product-header justify-content">Product Overview</h3>
          <ul class="nav  pt-3 w-100">
            <li class="nav-item">
              <a class="nav-link nav-b active" @click.prevent="activeStore = 'Product'" href="#">All product</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-b" @click.prevent="activeStore = 'MenStore'" href="">Women</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-b" @click.prevent="activeStore = 'MenStore'" href="#">Men</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-b" @click.prevent="activeStore = 'WomenStore'" href="#">Bag</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-b" @click.prevent="activeStore = 'MenStore'" href="#">Shoes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-b" @click.prevent="activeStore = 'WomenStore'" href="#">Watches</a>
            </li>
            <li class="nav-item ml-auto border mt-0 m-2">
              <a href="#" class="nav-link"><icon name="filter" scale="" class=""></icon> Filter</a>
            </li>
            <li class="nav-item border m-2 mt-0">
              <a href="#" class="nav-link"><icon name="search" scale="" class=""></icon> Search</a>
            </li>
          </ul>
        </div>
      </div>

      <section class="pro-collections mt-4">
        <div class="container">
          <keep-alive>
            <component :is="activeStore"></component>          
          </keep-alive>

          <div class=" cart-view justify-content-center d-flex mt-4">
            <a href="#" class="">load more</a>
        </div>
        </div>
    </section>
    </section>
  </div>
</template>

<script>
import men from "@/components/product-panel/men/index";
import carousel from "@/components/carousel";

export default {
  name: "content",
  data() {
    return {
      activeStore: "Product"
    };
  },
  components: { carousel, men }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section-category {
  padding: 4rem 0;
}
.category {
  margin: rem;
  border: 2px solid #f7f7f7;
  position: relative;
  width: 100%;
}
.category-overlay:hover {
  background-color: rgba(103, 117, 214, 0.7);
}
.category-overlay {
  position: absolute;
  top: 0rem;
  left: rem;
  width: 100%;
  height: 100%;
  transition: all 1s;
}
/* .category:hover .imgFluid {
  transform: scale(1.6);
} */
.overlay-content {
  padding: 1.7rem 1.2rem;
}
.overlay-address {
  margin-top: 6.3rem;
  position: relative;
}
.overlay-link {
  position: absolute;
  top: -1.5rem;
  opacity: 0;
  visibility: hidden;
}
.overlay-link a {
  opacity: 0;
  visibility: hidden;
  text-decoration: none;
  color: white;
  transform: translateX(3rem) !important;
  text-transform: uppercase;
  font-size: 0.8rem;
}
.link-border {
  border-bottom: 2.8px solid white;
  width: 4.5rem;
  height: 2px;
}
.overlay-details1 h1 {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1.8rem;
}
.category-overlay:hover .overlay-link a,
.category-overlay:hover .overlay-link {
  animation-name: animate-link;
  animation-duration: 0.8s;
  animation-timing-function: ease-out;
  backface-visibility: hidden;
  opacity: 1;
  visibility: visible;
}
.category-overlay:hover .overlay-link a::after,
.category-overlay:hover .overlay-link::after {
  content: "";
  opacity: 1;
  visibility: visible;
}
.category-overlay:hover .overlay-details1 {
  color: white;
}
@keyframes animate-link {
  0% {
    opacity: 0;
    transform: translateY(2rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* product overview styling */
.product {
  margin: 1.7rem 0;
}
.product-header {
  font-size: 2.7rem;
  font: bolder;
  font-family: "Times New Roman", Times, serif;
}
.nav-link {
  color: #999;
  font: 600;
  transition: all 0.5s;
}
.nav-b:hover,
.nav-b:active {
  border-bottom: 2px solid #333;
}

.cart-view {
  padding: 2rem 0;
}
.cart-view a {
  color: #333;
  align-items: center;
  text-decoration: none;
  padding: 0.8rem 2rem;
  border-radius: 3rem;
  background-color: #e6e6e6;
  text-transform: uppercase;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 1rem;
  font: 700;
  transition: all 0.2s;
}
</style>