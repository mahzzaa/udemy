import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import VueSmoothScroll from 'vue2-smooth-scroll'
import Embed from 'v-video-embed'

// global register
Vue.use(Embed);

Vue.use(VueSmoothScroll, {
  duration: 400,
  updateHistory: false,
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
