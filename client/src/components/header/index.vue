<template>
  <div class="wrapper">
    <div class="wrapper-contact">
      <div class="nav-contact">
        <div class="contact container fl">
          <div class="list-contact d-flex flex-lg-nowrap flex-wrap flex-row">
            <div class="list-contact-item">
              <icon></icon>+234-16-028-87
            </div>
            <div class="list-contact-item">
              <icon></icon>email@email.com
            </div>
            <div class="list-contact-item">
              <icon></icon>1734 Stonecoal Road
            </div>
            <div class="list-contact-item ml-auto">
              <icon></icon>1734 Stonecoal Road
            </div>
            <div class="list-contact-item ">
              <icon></icon>My Account
            </div>
          </div>
        </div>
      </div>
    </div>  

    <!-- NAGIVATION BAR SECTION -->
    <nav class="navbar navbar-expand-lg navbar-light" @scroll="updatenavbar"  :class="{ navbarA: scrollPosition > 50, navbarB: scrollPosition < 50}">
      <div class="container">
        <a href="#" class="navbar-brand"><i style="color:orange;">M</i>dela </a>
        <!-- <div class=" p-2 ml-auto " data-toggle="collapse">
          <span class="d-flex flex-row ">
            <div class="p-2 wrap-indicator">
              <a class="nav-link" href="#"><icon class="cart-size" name="search" scale="1.2"></icon></a>              
            </div>
            <div class="p-2 wrap-indicator">
                <a class="nav-link" href="" @click.prevent="showCart(cartbol)"><icon class="cart-size" name="cart-arrow-down" scale="1.2"></icon></a>
              <span class="indicator">
                {{cart.length}}
              </span>
            </div>
            <div class="p-2 wrap-indicator">
                <a class="nav-link bgclip" href="#">
              <img src="../../assets/images/icons/icon-heart-01.png" class="img-fluid bgclip mt-2" height="20" width="24" style="background-color:black;" alt="">                
              </a>
                <span class="indicator">
                 2
                </span>
            </div>
          </span>
        </div> -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarToggler">
          <ul class="navbar-nav ml-4 float-right mt-2">
            <router-link tag="li" active-class="active" to="/" exact class="nav-item active">
              <a class="nav-link"><h1>Home</h1> </a>
            </router-link>
            <router-link tag="li" active-class="active" to="/shop" class="nav-item hass-dropdownn">
              <a class="nav-link"><h1>Shop</h1></a>
              <ul class="dropdownn">
								<li><a href="#">Web Design</a></li>
								<li><a href="#">eCommerce</a></li>
								<li><a href="#">Branding</a></li>
								<li><a href="#">API</a></li>
							</ul>
            </router-link>
            <router-link tag="li" active-class="active" to="/features" class="nav-item feat-wrap">
              <a class="nav-link"><h1>Features</h1></a>
              <span class="badge new-feat">HOT</span>
            </router-link>
            <li class="nav-item">
              <a class="nav-link" href="#"><h1>Blog</h1></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><h1>About</h1></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><h1>Contact</h1></a>
            </li>
            <li class="nav-item ml-auto">
              <a class="nav-link" href="#"><icon class="cart-size" name="search" scale="1.2"></icon></a>
            </li>
            <li class="nav-item wrap-indicator">
              <a class="nav-link" href="" @click.prevent="showCart(cartbol)"><icon class="cart-size" name="cart-arrow-down" scale="1.2"></icon></a>
              <span class="indicator">
                {{cart.length}}
              </span>
            </li>
            <li class="nav-item wrap-indicator">
              <a class="nav-link bgclip" href="#">
              <img src="../../assets/images/icons/icon-heart-01.png" class="img-fluid bgclip mt-2" height="20" width="24" style="background-color:black;" alt="">                
              </a>
                <span class="indicator">
                 2
                </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { eventBus } from "@/main";

export default {
  name: "Header",
  data() {
    return {
      scrollPosition: null,
      cart: ""
    };
  },
  methods: {
    updatenavbar() {
      this.scrollPosition = window.scrollY;
      console.log("sdhsdh");
    },
    showCart(cartbol) {
      eventBus.$emit("showcart", {
        cartbol: true,
        checked: true
      });
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updatenavbar);
    this.cart = this.$store.state.cart.items;
  },
  destroyed() {
    window.removeEventListener("scroll", this.updatenavbar);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 768px) {
  .toggler-icon {
    position: relative;
    margin-top: 1.2rem;
  }
  .toggler .toggler-icon,
  .toggler .toggler-icon::before,
  .toggler .toggler-icon::after {
    height: 2px;
    background-color: #333;
    width: 1.5rem;
    display: inline-block;
  }
  .toggler .toggler-icon::before,
  .toggler .toggler-icon::after {
    position: absolute;
    content: "";
    left: 0;
    transition: all 0.3s;
  }
  .toggler-icon::before {
    top: -0.4rem;
  }
  .toggler-icon::after {
    top: 0.4rem;
  }
}
.wrapper {
  position: relative;
}
.nav-contact {
  background-color: rgb(48, 45, 45);
  color: white;
  padding: 0.3rem 0;
}
.contact {
  width: 100%;
}
.list-contact {
  list-style: none;
  display: inline-block;
  width: 100%;
}
.list-contact-item {
  text-decoration: none;
  display: inline-block;
  margin: 0.4rem;
  font: 400;
  font-size: 1rem;
  font-family: "Times New Roman", Times, serif;
  color: #999;
  cursor: pointer;
}
.navbarA {
  background-color: white;
  padding: 0rem 0;
  box-shadow: 0 0.2rem 1.6rem rgba(0, 0, 0, 0.5);
  width: 100% !important;
  position: fixed;
  z-index: 10;
  top: 0px;
  transition: all 0.2s;
}
.navbarB {
  background-color: transparent;
  padding: 0.5rem 0;
  width: 100% !important;
  position: absolute;
  z-index: 100;
  transition: all 0.2s;
  /* border-bottom: 1px solid #999; */
}
.navbar-brand {
  font: bolder;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 1.5rem;
}
.navbar-collapse,
.navbar-nav {
  width: 100% !important;
}
.nav-item {
  padding: 0 0.5rem;
}
.nav-link,
.nav-link h1 {
  padding: 0.5rem 0;
  font: 900;
  color: rgba(0, 0, 0, 0.849);
  font-size: 1rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.cart-size {
  margin: 0.5rem 0;
  color: #333;
}
.wrap-indicator {
  position: relative;
  display: inline-block;
}
.indicator {
  background-color: #717fe0;
  padding: 0rem 0.23rem;
  position: absolute;
  display: inline-block;
  top: 0.2rem;
  left: 2rem;
  font-size: 0.7rem;
  align-items: center;
  color: azure;

  /* clip-path: circle(50% at 50% 50%); */
}
.badge {
  background-color: #f74877;
  color: white;
  border-radius: 4px important;
  font-size: 0.6rem;
}
.indicator p {
  align-items: center;
  color: white;
}
.feat-wrap {
  position: relative;
}
.new-feat {
  position: absolute;
  top: 0;
  right: 0;
}
.bgclip {
  background-color: linear-gradient(
    to right,
    rgb(120, 221, 103),
    rgb(32, 161, 118)
  );
  -webkit-background-clip: text;
  /* color: transparent; */
  font: 600;
}

.hass-dropdownn {
  position: relative;
}
.dropdownn {
  width: 130px;
  -webkit-box-shadow: 0px 14px 33px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 14px 33px -9px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 14px 33px -9px rgba(0, 0, 0, 0.75);
  z-index: 1002;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 3.6rem;
  left: 0;
  text-align: left;
  background: #fff;
  padding: 20px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  border-radius: 4px;
  -webkit-transition: 0s;
  -o-transition: 0s;
  transition: 0s;
}
.dropdownn:before {
  bottom: 100%;
  left: 34px;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: #fff;
  border-width: 8px;
  margin-left: -8px;
}
.dropdownn li {
  display: block;
  margin-bottom: 7px;
}
.dropdownn li:last-child {
  margin-bottom: 0;
}
.dropdownn li a {
  padding: 2px 0;
  display: block;
  color: #999999;
  line-height: 1.2;
  text-transform: none;
  font-size: 15px;
}
.dropdownn li a:hover {
  color: #000;
}
.hass-dropdownn:hover .dropdownn {
  opacity: 1;
  visibility: visible;
}
</style>