<template>
  <div class="flex h-screen bg-gray-50">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-lg border-r border-gray-200">
      <div class="p-6 text-2xl font-bold text-blue-700">
        Library Management
      </div>
      <nav class="mt-6">
        <ul class="space-y-2">
          <li v-for="link in navLinks" :key="link.path">
            <router-link 
              :to="link.path" 
              class="block px-6 py-3 rounded-lg text-gray-700 hover:bg-blue-50 transition"
              :class="{ 'bg-blue-50 text-blue-700 font-medium': $route.path === link.path }"
            >
              {{ link.title }}
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Header -->
      <header class="bg-white shadow-sm p-4 flex justify-between items-center border-b border-gray-200">
        <h1 class="text-2xl font-bold text-gray-800">
          {{ currentPageTitle }}
        </h1>
        <div class="flex items-center space-x-3">
          <span class="text-gray-600">Welcome, Admin</span>
          <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
            A
          </div>
        </div>
      </header>

      <!-- Main Content Area -->
      <main class="flex-1 overflow-auto p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const navLinks = [
  { path: '/', title: 'Dashboard' },
  { path: '/books', title: 'Books' },
  { path: '/users', title: 'Users' },
  { path: '/borrow-records', title: 'Borrow Records' },
  { path: '/categories', title: 'Categories' }
]

const pageTitles = {
  '/': 'Dashboard',
  '/books': 'Books Management',
  '/users': 'User Management',
  '/borrow-records': 'Borrow Records',
  '/categories': 'Category Management'
}

const currentPageTitle = computed(() => {
  return pageTitles[route.path] || 'Library Management'
})
</script>