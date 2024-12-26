import { createRouter, createWebHistory } from 'vue-router/auto';
import { routes } from 'vue-router/auto-routes';

import { storeToRefs } from 'pinia';

import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = storeToRefs(useAuthStore());

  if (to.path !== '/signin' && !isAuthenticated.value) {
    next('/signin');
  } else if (to.path == '/signin' && isAuthenticated.value) {
    next('/profile');
  } else {
    next();
  }
});

export default router;
