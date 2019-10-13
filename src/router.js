import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Work from "./views/Work.vue";
import Files from "./views/Files.vue"
import NotFound from "./views/NotFound.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  hash: false,
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/work",
      name: "work",
      component: Work
    },
    {
      path: "/files",
      name: "files",
      component: Files
    },
    { path: "*", name: "404", component: NotFound }
  ]
});
