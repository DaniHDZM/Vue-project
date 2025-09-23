import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contador',
      name: 'Contador',
      component: () => import('../components/Contador.vue')
    },
    {
      path: '/lista-tareas',
      name: 'ListaTareas',
      component: () => import('../components/ListaTareas.vue')
    }

  ],
})

export default router
