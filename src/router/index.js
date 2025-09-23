import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contador',
      name: 'Contador',
      component: () => import('../modules/contador/components/Contador.vue')
    },
    {
      path: '/lista-tareas',
      name: 'ListaTareas',
      component: () => import('../modules/listaDeTareas/components/ListaTareas.vue')
    },
    {
      path: '/registrar',
      name: 'Registrar',
      component: () => import('../modules/registro/views/RegistrarView.vue')
    }

  ],
})

export default router
