import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
      keepAlive: false,
    },
    component: () => import('@/components/HelloWorld.vue'),
  },
  {
    path: '/usePinia',
    name: 'UsePinia',
    meta: {
      title: '使用Pinia',
      keepAlive: false,
    },
    component: () => import('@/views/usePinia.vue'),
  },
  {
    path: '/useMouse',
    name: 'UseMouse',
    meta: {
      title: '使用vueUse',
      keepAlive: false,
    },
    component: () => import('@/views/vueUse.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
