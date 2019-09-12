import Vue from 'vue'
import root from './root.vue'
import ElementUI from 'element-ui'
import router from './router'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import 'element-ui/lib/theme-chalk/index.css'
import './scss/base.scss'
import { i18n } from './locale'
import store from './vuex/store'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueI18n)  
/* eslint-disable no-new */
console.log(i18n)
new Vue({ 
  el: '#root',
  i18n,
  store,
  router,
  render: h => h(root)
})
