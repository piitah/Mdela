import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  state: {
    cart: {
      items: []
    },
    cartTotal: 0
  },
  getters: {
    cartTotal: state => {
      let total = 0

      state.cart.items.forEach(function (item) {
        total += item.product.price * item.quantity
      })
      return total
    }
  },
  mutations: {
    addToCart(state, payload) {
      let cartItem = null

      for (let i = 0; i < state.cart.items.length; i++) {
        let element = state.cart.items[i].product._id;
        if (element == payload.product._id) {
          cartItem = element;
        }
      }
      if (cartItem != null) {
        state.cart.items.map(function (item) {
          return item.quantity++
        })
      } else {
        state.cart.items.push({
          product: payload.product,
          quantity: 1
        })
      }
    }
  }
})
