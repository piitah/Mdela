<template>
  <div class="wrapper">
     <section class="product">
        <div class="section-pro">
            <div class="container">
                <div class="d-flex flex-row p-0">
                    <span>
                        <router-link to="/" exact class="nav-link" tag="a">
                            <h6>Home <span class="pl-2">></span></h6>
                        </router-link>
                    </span>
                    <span class="pl-0">
                        <router-link to="/" exact class="nav-link pl-0" tag="a">
                            <h6>Shopping Cart</h6>
                        </router-link>
                    </span>
                </div>

                <div class="row mt-5">
                    <div class="col-md-8">
                    <table class="table table-bordered justify-content-center">
                        <thead class="tab table-borderless">
                            <tr colspan="" class="">
                                <th scope="" class="w-50">Product</th>
                                <th scope="">Price</th>
                                <th scope="">Quantity</th>
                                <th scope="">Total</th>
                            </tr>
                        </thead>
                        <tbody class="table-borderless border-bottom my-auto">
                            <tr colspan="" class="border-bottom" v-for="item in cartItem" :key="item.product._id">
                                <th scope="" class=''>
                                    <img :src='item.product.productImg' width="60" height="70" class="imh-fluid" alt="">
                                    <span class="pl-3 dim">{{ item.product.title}}</span>
                                </th>
                                <th scope="" class=" pt w-25 dim">${{ item.product.price}}</th>
                                <th scope=""  class="pt4 my-auto">
                                    <td class="pl-3 p-2 pr-3 border dim">-</td>
                                    <td class="pl-3 p-2 pr-3 border dim">{{ item.quantity}}</td>
                                    <td class="pl-3 p-2 pr-3 border dim">+</td>
                                </th>
                                <th scope="" class="pt- dim d-flex justify-content-center">{{item.product.price * item.quantity}}</th>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div class="col-xl-4 border ml-auto float-right">
                    
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import { mapStates } from "vuex";

export default {
  name: "shop",
  data() {
    return {
      activeStore: "Product"
    };
  },
  computed: {
    cartItem() {
      return (this.cartItem = this.$store.state.cart.items);
    }
  },
  mounted() {
    console.log(this.cartItem);
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
.dim {
  color: #999;
}
</style>