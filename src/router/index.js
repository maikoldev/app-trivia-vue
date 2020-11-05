import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Quiz from "../views/Quiz.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: Quiz,
    beforeEnter: (to, from, next) => {
      if (store.state.user) {
        next();
      } else {
        alert("Sorry, you have to login first!");
        next({ name: "Home" });
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
