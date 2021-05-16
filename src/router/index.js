import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Work from "../views/Work.vue";
import Files from "../views/Files.vue";
import NotFound from "../views/NotFound.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/work",
    name: "Hork",
    component: Work
  },
  {
    path: "/files",
    name: "Files",
    component: Files
  },
  { path: "*",
    name: "404",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
