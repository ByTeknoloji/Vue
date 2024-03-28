
import { createRouter, createWebHistory } from 'vue-router/auto'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/users',
      name: 'Users',
      component: () => import('@/pages/Users.vue'),
      // Kullanıcılar sayfasına erişim için /users yolu
    },
    {
      path: '/userdetails/id',
      name: 'UserDetails',
      component: () => import('@/pages/UserDetails/index.vue'),
      // Kullanıcı ayrıntıları sayfasına erişim için /usersdetails/:id yolu
    },
    // Diğer route tanımlamaları buraya eklenebilir
  ],
})

export default router