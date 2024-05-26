import { createRouter, createWebHistory } from "vue-router";

import NotFound from "@/pages/404/index.vue";
import landingPage from "@/pages/LandingPage/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: landingPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    meta: {
      layout: "auth",
    },
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  navigationFallback: {
    rewrite: "/index.html",
    exclude: ["/images/*.{png,jpg,gif}", "/css/*"],
  },
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
      };
    }
  },
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title || "Hệ sinh thái học tập, sáng tạo"}`;
  next();
});

export default router;
