import { createRouter, createWebHistory } from "vue-router";
import HomeTest from "../views/HomeTest.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeTest,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
