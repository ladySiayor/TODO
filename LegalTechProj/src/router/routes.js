const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
      { path: '/signup', component: () => import('pages/Signup.vue') },
      // { path: '/profile', component: () => import('pages/Profile.vue') },
    ]
  }, {
    path: '/todo',
    component: () => import('layouts/TodoLayout.vue'),
    children: [
      { path: '/todo', component: () => import('pages/Todo.vue') },
      { path: '/help', component: () => import('pages/Help.vue') },
      { path: '/dashboard', component: () => import('pages/Dashboard.vue') },
    ],
  },
]

// Always leave this as last one
// if (process.env.MODE !== 'ssr') {
//   routes.push({
//     path: '*',
//     component: () => import('pages/Error404.vue')
//   })
// }
export default routes


//