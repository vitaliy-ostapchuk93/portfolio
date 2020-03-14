import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import("../views/NotFound.vue") },  
  { 
    path: '*',
    redirect: '/404'
  }
];

const router = new VueRouter({
  routes
});

export default router;
