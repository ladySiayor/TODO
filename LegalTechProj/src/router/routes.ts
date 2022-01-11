import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [{ path: '', component: () => import('pages/Index.vue') }],
  // },

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
      { path: '/signup', component: () => import('pages/Signup.vue') }
    ],
  },
  // {
  //   path: '/signup',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [{ path: '/Signup', component: () => import('pages/Signup.vue') }],
  // },
  {
    path: '/todo',
    component: () => import('layouts/TodoLayout.vue'),
    children: [
      { path: '/todo', component: () => import('pages/Todo.vue') },
      { path: '/help', component: () => import('pages/Help.vue') }
    ],
  },

];

export default routes;
