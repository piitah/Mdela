<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Appheader @activeView ="show"></Appheader>
    <product>
      
    </product>
    <transition name="fade" mode="" appear css>
      <div class="">
        <router-view/>
        <!-- <keep-alive>
          <component :is='activeView'></component>            
        </keep-alive> -->
      </div>
    </transition>
  </div>
</template>

<script>
import header from "./components/header";
import product from "./components/product";

export default {
  data() {
    return {
      activeView: "App_page"
    };
  },
  components: {
    Appheader: header,
    product
  },
  created: {},
  methods: {
    show(event) {
      this.activeView = event.activeView;
      console.log(event);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: auto;
}
</style>
