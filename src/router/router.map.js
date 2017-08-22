import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (!store.state.auth.check && to.meta.auth) {
    return router.push({ name: 'auth.login' });
  }
  next();
});

export default router;
