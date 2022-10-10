import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/index.vue";
import Login from "@/pages/login.vue";
import PrivacyPolicy from "@/pages/privacyPolicy.vue";
import notFound from "@/pages/error.vue";
import { useUserStore } from "@/store/user";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresAuth: false },
    beforeEnter: (to, from, next) => {
      const userStore = useUserStore();
      if (!userStore.isUserEmpty) {
        next({ name: "Home" });
        return;
      }
      next();
    },
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
    meta: { requiresAuth: true },
  },
  {
    path: "/:catchAll(.*)",
    name: "error",
    component: notFound,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// firebase auth - redirect to login page
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (to.name === "Login") {
    next();
    return;
  }
  // ログインが必要なページへのアクセス
  if (to.meta.requiresAuth) {
    // ログイン済みの場合
    if (!userStore.isUserEmpty) {
      next();
      return;
    }
    // 未ログインの場合
    if (userStore.isUserEmpty) {
      next("/login");
      return;
    }
  }
  next();
});

export default router;
