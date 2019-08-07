<template>
  <div class="wrapper">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="produc">
                    <div class="product-img">
                       <div class="img-pro">
                            <slot name="product-img">
                        
                            </slot> 
                       </div>
                    </div>
                    <div class="quick-preview">
                        <a href="#" class="preview-link">Quick View</a>
                    </div>
                </div>
                <div class="product-details mt-2">
                    <slot name="product-name">
                      
                    </slot>
                </div>
            </div>
        </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.produc {
  position: relative;
  width: 100%;
}
.quick-preview {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 97%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  visibility: hidden;
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  backface-visibility: hidden;
}
.produc:hover .quick-preview {
  opacity: 1;
  visibility: visible;
  top: 80%;
}
/* .produc:hover .img-pro {
  transform: scale(1.1);
  filter: blur(1px) brightness(60%);
} */
.preview-link {
  text-align: center;
  text-decoration: none;
  color: #333;
  background-color: whitesmoke;
  padding: 0.8rem 1.5rem;
  border-radius: 2rem;
}
</style>