import VueRouter from 'vue-router'

/**
 * Splash related page
 */
import Splash from './main/index'

const router = new VueRouter({
  routes:[
    {
      name: 'welcome',
      path: '/',
      component: Splash
    },
  ]
})
export default router 