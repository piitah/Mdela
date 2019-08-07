<template>
  <div class="wrapper">
     <section class="product">
      <div class="section-pro">
        <div class="container">
          <!-- <h3 class=" product-header justify-content">Product Overview</h3> -->
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
export default {
  name: "shop",
  data() {
    return {
      activeStore: "Product"
    };
  }
};
</script>


<style scoped>
.product {
  margin: 5rem 0;
  border-top: 1px solid rgb(206, 206, 206);
  padding: 1.4rem 0;
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