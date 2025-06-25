// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Dashboard' }
  },
  {
    path: '/books',
    name: 'books',
    component: () => import('@/views/books/BookDashboard.vue'),
    meta: { title: 'Books Management' },
    children: [
      {
        path: '',
        name: 'book-list',
        component: () => import('@/views/books/BookList.vue'),
        meta: { title: 'Books List' }
      },
      {
        path: ':id',
        name: 'book-detail',
        component: () => import('@/views/books/BookDetail.vue'),
        meta: { title: 'Book Details' },
        props: true
      }
    ]
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('@/views/Users/UserList.vue'),
    meta: { title: 'User Management' }
  },
  {
    path: '/borrow-records',
    name: 'borrow-records',
    component: () => import('@/views/Borrows/BorrowList.vue'),
    meta: { title: 'Borrow Records' }
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import('@/views/Categories/CategoryList.vue'),
    meta: { title: 'Category Management' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: 'About' }
  },
  {
  path: '/users',
  name: 'users',
  component: () => import('@/views/Users/UserList.vue'),
  meta: { title: 'User Management' }
}
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'not-found',
  //   component: () => import('@/views/NotFound.vue'),
  //   meta: { title: 'Page Not Found' }
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router