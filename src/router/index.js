import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import CreditosGrupales from "../views/CreditosGrupales.vue";
import Inspeccionar from "../views/Inspeccionar.vue";
import ControlDeCambios from "../views/ControlDeCambios.vue";
import ListaSoftwares from "../views/ListaSoftwares.vue";

const routes = [
  {
    path: "/",
    alias: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/home/creditosGrupales",
    name: "CreditosGrupales",
    component: CreditosGrupales,
  },
  {
    path: "/home/creditosGrupales/inspeccionar",
    name: "Inspeccionar",
    component: Inspeccionar,
  },
  {
    path: "/home/creditosGrupales/inspeccionar/control_de_cambios",
    name: "ControlDeCambios",
    component: ControlDeCambios,
  },
  {
    path: "/listado_de_softwares",
    alias: "/home/listado_de_softwares",
    name: "ListaSoftwares",
    component: ListaSoftwares,
  },
];
// {
//   path: "/about",
//   name: "About",
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () =>
//     import(/* webpackChunkName: "about" */ "../views/About.vue"),
// },

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
