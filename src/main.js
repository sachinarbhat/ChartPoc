import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ECharts from "vue-echarts";
import "echarts";
Vue.component('v-chart',ECharts);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
