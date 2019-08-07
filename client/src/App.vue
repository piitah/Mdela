<template>
  <div id="app">
    <appHeader></appHeader>
    <transition name="fade">
      <cart></cart>
    </transition>
    
   <section class="section-pro">
    <transition name="slide-fade">
     <productView>
       
     </productView>
    </transition>
   </section>

   <transition name="slide-fade">
      <router-view/> 
   </transition>

    <section class="footer">
      <foot></foot>
    </section> 
  </div>
</template>

<script>
import appHeader from "@/components/header/index";
import cart from "@/components/product-panel/cart";
import productView from "@/components/product-panel/productView";
import foot from "@/components/footer/index";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    appHeader,
    cart,
    productView,
    foot
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  height: auto;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.section-pro {
  margin-top: 0;
  padding: 0;
}
</style>
