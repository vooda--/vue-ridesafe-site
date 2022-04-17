import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuotesView from "@/views/QuotesView.vue";
import ArticlesView from "@/views/ArticlesView.vue";
import QuoteView from "@/views/QuoteView.vue";
import QuizzesView from "@/views/QuizzesView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/articles',
    name: 'articles',
    component: ArticlesView
  },
  {
    path: '/quotes',
    name: 'quotes',
    component: QuotesView
  },
  {
    path: '/quotes/:quoteId',
    name: 'quote',
    component: QuoteView,
    props: true
  },
  {
    path: '/quizzes',
    name: 'quizzes',
    component: QuizzesView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
