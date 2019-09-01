import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    goTo (pageName) {
      console.log(pageName)
      this.$router.push({
        name: pageName
      });
    }
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
