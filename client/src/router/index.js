import Vue from 'vue'
import Router from 'vue-router'
import content from '@/components/content'
import Admin from '@/components/Admin/index'
import shop from '@/components/shop'
import features from '@/components/features'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'content',
      component: content
    },
    {
      path: '/root/Admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/features',
      name: 'features',
      component: features
    }
  ]
})
