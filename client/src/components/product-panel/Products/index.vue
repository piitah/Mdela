<template>
    <div class="wrapper">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-lg-3 col-sm-4 col-xs-6 mb-2" v-for="product in products" :key="product._id">
                    <div class="product">
                        <div class="produc">
                            <div class="img-pro">
                                <img :src="product.productImg" class="img-fluid" alt="">                           
                            </div>
                            <div class="quick-preview">
                                <a href="" @click.prevent="QuickViews(product)" class="preview-link">Quick View</a>
                            </div>
                        </div>
                        <div class="mt-3">
                            <div class="d-flex mt-2">
                                <div class="w-100 d-flex-column dim">
                                    <div class="w-100">{{product.title}}</div>
                                    <div class="w-100 mt-2"><strong>$</strong> {{product.price}}</div>
                                </div>
                                <div class="flex-shrink-1">
                                  <img src="../../../assets/images/icons/icon-heart-01.png" style="cursor:pointer;" class="img-fluid mt-2" height="20" width="24" alt="">                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>  
    </div>
</template>

<script>
import authenticationService from "@/services/authenticationService";
import { eventBus } from "@/main";

export default {
  name: "Header",
  props: ["product"],
  data() {
    return {
      products: null
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  methods: {
    QuickViews(product) {
      eventBus.$emit("quickview", {
        showview: true,
        product: product
      });
    }
  },
  async mounted() {
    const response = await authenticationService.getProduct();
    console.log("hello world");
    this.products = response.data;
    // this.$store.dispatch("setProduct", this.products);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.produc {
  position: relative;
  width: 100%;
  overflow: hidden;
  transition: all 0.2s;
}
.quick-preview {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 97%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  visibility: visible;
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  backface-visibility: hidden;
}
.produc:hover .quick-preview {
  opacity: 1;
  visibility: visible;
  top: 80%;
}
.produc:hover .quick-preview a:hover {
  background-color: #717fe0;
  color: #fff;
  transform: translateY(-0.3rem);
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.6);
}
.produc:hover .quick-previewa a:active {
  transform: translateY(0);
}
.img-pro {
  transition: all 0.5s;
}
.produc:hover .img-pro {
  transform: scale(1.1);
  /* filter: blur(1px) brightness(60%); */
}
.preview-link {
  text-align: center;
  text-decoration: none;
  color: #333;
  background-color: whitesmoke;
  padding: 0.8rem 1.5rem;
  border-radius: 2rem;
}
.dim {
  color: #999;
}
</style>