import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import ProductsView from "../views/ProductsView.vue";

const routes: Array<RouteRecordRaw> = [
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  {
    path: "/",
    name: "home",
    component: ProductsView,
  },
  {
    path: "/carrinho",
    name: "shop",
    component: () => import("../views/ShoppingView.vue"),
  },
  {
    path: "/detalhes",
    name: "details",
    component: () => import("../views/ProductDetailsView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
