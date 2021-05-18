import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from "vue-router";
import MainStage from "../views/MainStage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "MainStage",
    component: MainStage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});



export default router;
