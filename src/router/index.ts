import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainStage from "../views/MainStage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "MainStage",
    component: MainStage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
