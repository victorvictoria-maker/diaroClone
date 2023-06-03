import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import CreateJournal from '../views/CreateJournal.vue';
import EditJournal from '@/components/EditJournal.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create',
    name: 'createjournal',
    component: CreateJournal
  },
  {
    path: '/:id',
    name: 'editjournal',
    component: EditJournal,
    props: true
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
