import Vue from 'vue'
import root from './root.vue'
import ElementUI from 'element-ui'
import router from './router'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import './scss/base.scss'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
/* eslint-disable no-new */
console.log(router)
new Vue({
  el: '#root',
  router,
  render: h => h(root)
})
