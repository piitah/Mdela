<template>
  <div class="cart-wrapper" v-show="showcart"  :class="[showcart ? aclass : rclass]">
    <div class="section-cart" :class="[showcart && checked ? activeclass : removeclass]">
        <div class="main-cart container">
            <div class="d-flex flex-row">
                <div class="w-75 cart-primary my-auto"><h2>your cart</h2></div>
                <div class="cancel ml-auto flex-shrink-1" @click.prevent="cancelCart">&times;</div>
            </div>

            <div v-if="cart.length === 0">
              <img src="../../assets/images/blog-02.jpg" class="img-fluid" alt="">
            </div>

            <div class="d-flex flex-row mt-4 h-75" v-for="item in cart" :key="item._id">
                <div class="">
                    <img :src="item.product.productImg" width="60" height="100" class="img-fluid" alt="">
                </div>
                <div class="ml-3 d-flex flex-column">
                    <div>{{item.product.title}}</div>
                    <div class="mt-3">{{item.quantity}} x ${{item.product.price}}</div>
                </div>
            </div>
            <div class="">
              <div class="cart-primary mt-4">
                <h2>total: ${{ cartTotal}}</h2>
            </div>
            <div class="d-flex flex-row justify-center mt-4">
                <div class=" cart-view">
                    <router-link @click.prevent="cancelCart" to="/features" tag="a">
                      View cart
                    </router-link>
                </div>
                <div class=" cart-view">
                    <a href="#" class="">check out</a>
                </div>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      activeclass: "cartA",
      removeclass: "cartB",
      aclass: "cartC",
      rclass: "cartD",
      showcart: "",
      checked: "",
      cart: ""
    };
  },
  created() {
    eventBus.$on("showcart", event => {
      this.showcart = event.cartbol;
      this.checked = event.checked;
      console.log(this.cartTotal);
    });
  },
  computed: {
    cancelCart() {
      this.checked = false;
      console.log(this.checked);
      setTimeout(() => {
        return (this.showcart = !this.showcart);
      }, 500);
    },
    cartList() {
      return this.$store.state.cart.items;
    },
    ...mapGetters(["cartTotal"])
  },
  mounted() {
    this.cart = this.cartList;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cartC {
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 200;
  width: 100%;
  opacity: 1;
  transition: all 0.4;
}
.cart-wrapper::after {
  opacity: 1 !important;
  visibility: visible;
}
.cartD {
  z-index: 200;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 200;
  width: 100%;
}
.cartA {
  width: 24rem;
  position: fixed;
  background-color: white;
  height: 100vh;
  right: 0;
  opacity: 1;
  visibility: visible;
  transition: all 0.4s;
  animation-name: slideCartIn;
  animation-duration: 0.5s;
}
.cartB {
  position: fixed;
  height: 100vh;
  background-color: white;
  right: 0;
  transform: translateX(24rem);
  opacity: 1;
  visibility: visible;
  animation-name: slideCartOut;
  animation-duration: 0.5s;
  width: 24rem;
}
.main-cart {
  padding: 2rem 4rem;
  display: inline-block;
}
.cancel {
  font-size: 2.5rem;
  cursor: pointer;
}
.cancel:hover {
  color: #717fe0;
}
.cart-primary h2 {
  text-transform: uppercase;
  font-size: 1.3rem;
  font: normal;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.cart-view {
  margin: 5px;
}
.cart-view a {
  color: #fff;
  align-items: center;
  text-decoration: none;
  padding: 0.8rem 1.2rem;
  border-radius: 3rem;
  background-color: #222;
  text-transform: uppercase;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 0.9rem;
  font: 400;
  transition: all 0.2s;
}
.fixdw {
  position: absolute;
  height: 100vh;
  top: 74vh;
}
.cart-view a:hover {
  background-color: #717fe0;
  color: #fff;
}
.img-fluid:hover {
  filter: brightness(50%);
}
@keyframes slideCartIn {
  0% {
    transform: translateX(24rem);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slideCartOut {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(24rem);
  }
}
@keyframes slideCart {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>