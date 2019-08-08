<template>
  <div class="wrapper mt-3 m-0 p-0 pt-0">
    <div class="proHead mb-3 mt-4 container">
      <span class="bd d-flex justify-content-center">new product</span>
    </div>
    <form
      class="container"
      method="POST"
      @submit.prevent="addProduct"
      enctype="multipart/form-data"
    >
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label for="title">
              <h4>Title</h4>
            </label>
            <div>
              <input
                type="text"
                placeholder="Title"
                required
                class="form-control borderStyle"
                v-model="product.title"
              >
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label for="inputState">
              <h4>Category</h4>
            </label>
            <select
              id="inputState"
              v-model="product.category"
              required
              class="form-control borderStyle"
            >
              <option selected>Choose...</option>
              <option>Men</option>
              <option>Women</option>
              <option>Suit</option>
              <option>watches</option>
              <option>Shoes</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- <div class="col-md-12">
           <div class="form-group">
            <label for="title"><h4>Instock</h4></label>
            <div>
              <input type="number" required v-model="product.instock"  placeholder="Instock" class="form-control borderStyle ">
            </div>
          </div>
        </div>-->
        <div class="col-md-12">
          <div class="form-group">
            <label for="inputState">
              <h4>Color</h4>
            </label>
            <select
              id="inputState"
              v-model="product.color"
              required
              class="form-control borderStyle"
            >
              <option selected>Choose...</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Black</option>
              <option>White</option>
              <option>Gray</option>
            </select>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label for="title">
              <h4>Size</h4>
            </label>
            <select id v-model="product.size" required class="form-control borderStyle">
              <option selected>Choose...</option>
              <option>Large</option>
              <option>Small</option>
              <option>Medium</option>
            </select>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label for="price">
              <h4>Price</h4>
            </label>
            <div>
              <input
                type="number"
                required
                placeholder="price"
                class="form-control borderStyle"
                v-model="product.price"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="des">
            <h4>Description</h4>
          </label>
          <textarea
            type="textarea"
            required
            v-model="product.des"
            placeholder="Desciption"
            class="form-control"
            rows="10px"
          ></textarea>
        </div>
      </div>
      <div class="mb-2">
        <input
          type="file"
          required
          class="form-control-file"
          name="upLoadFile"
          @change="onselectedFile"
        >
      </div>
      <div class>
        <button type="submit" class="col-2 btn btn-lg btn-success">Add</button>
      </div>
      <br>
      <br>
    </form>
    <img :src="product.productImg" height="200" width="300" class="img-fluid">
  </div>
</template>

<script>
import authenticationService from "../services/authenticationService";

export default {
  name: "Header",
  data() {
    return {
      product: {
        title: null,
        category: null,
        price: null,
        size: null,
        color: null,
        productImg: null,
        des: null
      }
    };
  },
  methods: {
    async addProduct(event) {
      event.preventDefault();
      const data = new FormData();
      data.append("title", this.product.title);
      data.append("category", this.product.category);
      data.append("price", this.product.price);
      data.append("size", this.product.size);
      data.append("des", this.product.des);
      data.append("color", this.product.color);
      data.append("file", this.product.productImg);
      try {
        await authenticationService.product(data);
      } catch (error) {
        console.log(error);
      }
    },
    onselectedFile(event) {
      let image = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = event => {
        this.product.productImg = event.target.result;
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.proHead {
  color: black;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 21px;
  font-weight: bold;
  /* border-bottom: 2px solid gray; */
}
.btncol {
  background-color: rgba(67, 155, 150, 0.884) !important;
}
.bd {
  font: 700;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: rgba(67, 155, 150, 0.884);
}
.borderStyle {
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  transition: all 0.3s;
  background-color: rgba(255, 255, 255, 0.5) !important;
}
.form-control:focus {
  outline: 0 !important;
  box-shadow: 0 1rem 2rem rgba(255, 255, 255, 0.2) !important;
  border-bottom: 3px solid #717fe0 !important;
  background-color: rgb(255, 255, 255) !important;
}
.form-control:focus:invalid {
  border-bottom: 3px solid rgb(236, 166, 36) !important;
}
</style>