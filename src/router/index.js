import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TriviaSelectView from '@/views/TriviaSelectView.vue'
import TriviaPlayView from '@/views/TriviaPlayView.vue'
import LeaderboardView from '@/views/LeaderboardView.vue'
import TriviaSelector from '@/components/TriviaSelector.vue'
import PlayComp from '@/components/PlayComp.vue'
import CategoryView from '@/views/CategoryView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/trivia',
      name: 'trivia-select',
      component: TriviaSelectView,
    },
    {
      path: '/play',
      name: 'trivia-play',
      component: TriviaPlayView,
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: LeaderboardView,
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView
    },
    {
      path: '/select',
      name: 'TriviaSelector',
      component: TriviaSelector
    },
    {
      path: '/play',
      name: 'PlayComp',
      component: PlayComp
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    }
  ],
})

export default router
