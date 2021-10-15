import Api from "@/services/api"

export default {
  register(credentials) {
    return Api().post('register', credentials)
  },
  login(credentials) {
    return Api().post('user', credentials)
  },
  getProduct() {
    return Api().get('product')
  },
  productId(product) {
    return Api().get(`product`, {
      params: {
        product: product
      }
    })
  },
  product(product) {
    return Api().post('product', product)
  },
}

