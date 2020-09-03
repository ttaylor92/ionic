import Vue from 'vue';
import App from '@/pages/app/app.vue';
import router from '@/config/router';
import store from '@/store';
import '@/config/register-service-worker';
import '@/theme/_all.scss';
const modules = require('../.rdvue/modules.js').default;

import Ionic from '@ionic/vue';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

Vue.config.productionTip = false;
Vue.use(Ionic);

new Vue({
  ...modules,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
