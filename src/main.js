import Vue from "vue";
import vuetify from './plugins/vuetify'
import App from "./App.vue";
import router from "./router.js";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

Vue.mixin({
  methods: {
    goTo (pageName) {
      this.$router.push({
        name: pageName
      });
    }
  }
});
