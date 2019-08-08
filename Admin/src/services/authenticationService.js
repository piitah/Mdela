import Api from "@/services/api"

export default {
  category(category) {
    return Api().post('category', category)
  },
  product(product) {
    return Api().post('product', product, {
      header: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  page(page) {
    return Api().post('page', page)
  }
}

