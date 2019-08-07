<template>
  <div class="wrapper">
     <div class="container">
      <div class="row">
          <div class="col-md-3">
              <div class="product">
                  <img src="../../../assets/images/product-07.jpg" class="img-fluid" alt="">
              </div>
          </div>
           <div class="col-md-3">
              <div class="product">
                  <img src="../../../assets/images/product-05.jpg" class="img-fluid" alt="">
              </div>
          </div>
           <div class="col-md-3">
              <div class="product">
                  <img src="../../../assets/images/product-06.jpg" class="img-fluid" alt="">
              </div>
          </div>
           <div class="col-md-3">
              <div class="product">
                  <img src="../../../assets/images/product-06.jpg" class="img-fluid" alt="">
              </div>
          </div>
          <productPanel class="mt-4">
            <div slot="product-img">
                <img src="../../../assets/images/product-11.jpg" class="img-fluid" alt="">
            </div>
            <div slot="product-name" class="mt-3">
                <div class="d-flex mt-2">
                    <div class="w-100 d-flex-column">
                        <div class="w-100">Esprit Ruffle Shirt</div>
                        <div class="w-100 mt-2">$12.56</div>
                    </div>
                    <div class="flex-shrink-1 w-25"><icon name="star"></icon><icon name="star"></icon></div>
                </div>
            </div>   
          </productPanel>
      </div>
    </div>   
  </div>
</template>

<script>
import productPanel from "@/components/product-panel/panel";
export default {
  name: "Header",
  data() {
    return {};
  },
  components: { productPanel }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>