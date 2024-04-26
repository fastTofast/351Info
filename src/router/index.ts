import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PreviewContent from '@/components/PreviewContent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/publishContent',
      name: 'publishContent',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PublishContent.vue'),
      children: [
        {
          name: 'preview',
          path: 'preview',
          component: PreviewContent
        }
      ]
    }
  ]
})

export default router
