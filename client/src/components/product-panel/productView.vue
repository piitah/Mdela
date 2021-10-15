<template>
  <div class="vieWrapper" v-show="quickView" >
    <div class="produt-wrapper" :class="[quickView ? slideIn : '']">
      <div class="cancel" @click="cancel">&times;</div>
        <div class="product-preview row">
          <div class="col-md-7">
            <div class="d-flex flex-row m-2">
              <div class="d-flex flex-column">
                <img :src="productReview.productImg" height="50" width="100" class="img-fluid border inline" alt="">
                <!-- <img src="../../assets/images/product-min-02.jpg" class="img-fluid mt-4 mb-4" alt=""> -->
                <!-- <img src="../../assets/images/product-min-03.jpg" class="img-fluid" alt=""> -->
              </div>
              <div class="center-img">
                <img :src="productReview.productImg" height="100" width="400" class="img-fluid" alt="">
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <h3 class="pro-name"><strong>{{productReview.title}}</strong></h3>
            <p class="pt-2"><strong>${{productReview.price}}</strong></p>
            <div class="pt-2">
              <p>
                Nulla eget sem vitae eros pharetra viverra. 
                Nam vitae luctus ligula. Mauris consequat ornare feugiat.
              </p>
            </div>
            <div class="pt-4">
              <div class="form-group">
                <label for="size">SIZE</label>
                <select class="form-control form-control-lg">
                  <option>choose an option</option>
                  <option>Large</option>
                  <option>Extra large</option>
                  <option>Small</option>
                </select>
              </div>

               <div class="form-group">
                <label for="color">COLOR</label>
                <select class="form-control form-control-lg">
                  <option>choose an option</option>
                  <option>Red</option>
                  <option>Blue</option>
                  <option>Green</option>
                </select>
              </div>
            </div>

            <div class="w-50 p-2 mx-auto">
              <ul class="list-group d-inline d-inline-block">
                <li class="list-group-item dec d-inline">
                 <strong>-</strong>
                </li>
                <li class="list-group-item qty d-inline">
                  5
                </li>
                <li class="list-group-item inc d-inline">
                  <strong>+</strong>
                </li>
              </ul>
            </div>

            <div class=" cart-view justify-content-center d-flex mt-4">
              <a href="#" class="" @click.prevent="addToCart">Add to cart </a>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import authenticationService from "@/services/authenticationService";
import { eventBus } from "@/main";
import { mapMutations } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      slideIn: "produt-wrapper",
      quickView: "",
      productReview: ""
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartTotalItem() {
      return this.$store.getters.cartTotal;
    }
  },
  created() {
    eventBus.$on("quickview", event => {
      this.quickView = event.showview;
      this.productReview = event.product;
      console.log();
    });
  },
  methods: {
    cancel() {
      this.quickView = false;
    },
    addToCart() {
      this.$store.commit("addToCart", {
        product: this.productReview
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vieWrapper {
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  z-index: 40000;
  transition: all 0.5s;
}
.produt-wrapper {
  z-index: 300;
  position: fixed;
  left: 50%;
  top: 50%;
  align-items: center;
  transform: translate(-50%, -50%) scale(1);
  height: 85vh;
  width: 80%;
  background-color: white;
  border-radius: 0.4rem;
  box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.2);
  transition: all 0.6s;
}
.produt-wrapper::before {
  transform: scale(0.5);
  transition: all 0.5s;
}
.produt-wrapper::after {
  transform: scale(1);
  transition: all 0.5s;
}
.product-preview {
  margin: 2rem 1rem;
}
.center-img {
  margin: 0 2rem;
}
.cancel {
  font: 700;
  font-size: 1.9rem;
  color: #333;
  position: fixed;
  right: 1rem;
  cursor: pointer;
}
.cancel:hover {
  color: rgb(23, 65, 112);
}
.pro-name {
  text-transform: uppercase;
  font-size: 1.5rem;
  font-family: "Times New Roman", Times, serif;
}
.qty {
  background-color: #f7f7f7;
}
.inc,
.dec {
  cursor: pointer;
  transition: all 0.2s;
}
.inc:hover,
.dec:hover {
  background-color: #717fe0;
  color: white;
}

.cart-view a {
  color: #fff;
  align-items: center;
  text-decoration: none;
  padding: 0.8rem 1.2rem;
  border-radius: 3rem;
  background-color: #717fe0;
  text-transform: uppercase;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 0.9rem;
  font: 400;
  transition: all 0.2s;
}
.cart-view a:hover {
  background-color: #222;
  color: #fff;
  transform: translateY(-0.3rem);
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.6);
}
.cart-view a:active {
  transform: translateY(0);
}
</style>