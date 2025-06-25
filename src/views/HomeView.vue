<template>
  <div class="space-y-6">
    <!-- Welcome Section -->
    <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 text-white">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold mb-2">Welcome back, Admin!</h1>
          <p class="text-blue-100">Here's what's happening in your library today.</p>
        </div>
        <div class="hidden md:block">
          <span class="text-4xl">📚</span>
        </div>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Total Books -->
      <div class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-lg font-semibold text-gray-700 mb-1">📚 Books</h3>
            <p class="text-3xl font-bold text-blue-600">{{ stats.totalBooks }}</p>
            <p class="text-sm text-gray-500 mt-1">Total in library</p>
          </div>
          <div class="bg-blue-100 p-3 rounded-full">
            <span class="text-2xl">📖</span>
          </div>
        </div>
      </div>

      <!-- Total Members -->
      <div class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-lg font-semibold text-gray-700 mb-1">👥 Members</h3>
            <p class="text-3xl font-bold text-green-600">{{ stats.totalMembers }}</p>
            <p class="text-sm text-gray-500 mt-1">Active users</p>
          </div>
          <div class="bg-green-100 p-3 rounded-full">
            <span class="text-2xl">👥</span>
          </div>
        </div>
      </div>

      <!-- Borrow Records -->
      <div class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-lg font-semibold text-gray-700 mb-1">📋 BorrowRecord</h3>
            <p class="text-3xl font-bold text-orange-600">{{ stats.borrowRecords }}</p>
            <p class="text-sm text-gray-500 mt-1">Currently borrowed</p>
          </div>
          <div class="bg-orange-100 p-3 rounded-full">
            <span class="text-2xl">📋</span>
          </div>
        </div>
      </div>

      <!-- Overdue Books -->
      <div class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500 hover:shadow-xl transition-shadow">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-lg font-semibold text-gray-700 mb-1">⏰ Time book returned</h3>
            <p class="text-3xl font-bold text-red-600">{{ stats.overdueBooks }}</p>
            <p class="text-sm text-gray-500 mt-1">Need attention</p>
          </div>
          <div class="bg-red-100 p-3 rounded-full">
            <span class="text-2xl">⏰</span>
          </div>
        </div>
      </div>

      <!-- Categories -->
      <div class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-lg font-semibold text-gray-700 mb-1">📂 List Category</h3>
            <p class="text-3xl font-bold text-purple-600">{{ stats.categories }}</p>
            <p class="text-sm text-gray-500 mt-1">Book categories</p>
          </div>
          <div class="bg-purple-100 p-3 rounded-full">
            <span class="text-2xl">📂</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <router-link
          to="/books"
          class="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
        >
          <div class="bg-blue-500 p-3 rounded-full mr-4 group-hover:bg-blue-600 transition-colors">
            <span class="text-white">➕</span>
          </div>
          <div>
            <h3 class="font-semibold text-gray-800">Add New Book</h3>
            <p class="text-sm text-gray-600">Add books to library</p>
          </div>
        </router-link>

        <router-link
          to="/users"
          class="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
        >
          <div class="bg-green-500 p-3 rounded-full mr-4 group-hover:bg-green-600 transition-colors">
            <span class="text-white">👤➕</span>
          </div>
          <div>
            <h3 class="font-semibold text-gray-800">Register Member</h3>
            <p class="text-sm text-gray-600">Add new library member</p>
          </div>
        </router-link>

        <router-link
          to="/borrow-records"
          class="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors group"
        >
          <div class="bg-orange-500 p-3 rounded-full mr-4 group-hover:bg-orange-600 transition-colors">
            <span class="text-white">📚</span>
          </div>
          <div>
            <h3 class="font-semibold text-gray-800">Issue Book</h3>
            <p class="text-sm text-gray-600">Create borrow record</p>
          </div>
        </router-link>
      </div>
    </div>

    <!-- Recent Activity & Popular Books -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Recent Borrowings -->
      <div class="bg-white rounded-lg shadow-lg">
        <div class="p-6 border-b border-gray-200">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold text-gray-800">Recent Borrowings</h3>
            <router-link to="/borrow-records" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All
            </router-link>
          </div>
        </div>
        <div class="p-6">
          <div class="space-y-4">
            <div v-for="borrow in recentBorrowings" :key="borrow.id" class="flex items-center space-x-4">
              <div class="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate">{{ borrow.bookTitle }}</p>
                <p class="text-xs text-gray-500">by {{ borrow.memberName }}</p>
              </div>
              <div class="text-xs text-gray-400">{{ borrow.timeAgo }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Popular Categories -->
      <div class="bg-white rounded-lg shadow-lg">
        <div class="p-6 border-b border-gray-200">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold text-gray-800">Popular Categories</h3>
            <router-link to="/categories" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All
            </router-link>
          </div>
        </div>
        <div class="p-6">
          <div class="space-y-4">
            <div v-for="category in popularCategories" :key="category.id" class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div :class="category.color" class="w-3 h-3 rounded-full"></div>
                <span class="text-sm font-medium text-gray-700">{{ category.name }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-500">{{ category.count }} books</span>
                <div class="w-16 bg-gray-200 rounded-full h-2">
                  <div 
                    :class="category.color.replace('bg-', 'bg-')" 
                    class="h-2 rounded-full transition-all duration-300"
                    :style="{ width: `${(category.count / 500) * 100}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Monthly Statistics Chart Placeholder -->
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">Monthly Activity</h3>
      <div class="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
        <div class="text-center">
          <span class="text-4xl text-gray-400 mx-auto mb-2">📊</span>
          <p class="text-gray-500">Chart visualization would go here</p>
          <p class="text-sm text-gray-400">Integration with chart library needed</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Reactive data matching your dashboard structure
const stats = ref({
  totalBooks: 100,
  totalMembers: 2,
  borrowRecords: 42,
  overdueBooks: 19,
  categories: 10
})

const recentBorrowings = ref([])
const popularCategories = ref([])

onMounted(() => {
  // Simulate loading recent borrowings
  recentBorrowings.value = [
    {
      id: 1,
      bookTitle: "The Great Gatsby",
      memberName: "John Doe",
      timeAgo: "2 hours ago"
    },
    {
      id: 2,
      bookTitle: "To Kill a Mockingbird",
      memberName: "Jane Smith",
      timeAgo: "5 hours ago"
    },
    {
      id: 3,
      bookTitle: "1984",
      memberName: "Bob Johnson",
      timeAgo: "1 day ago"
    },
    {
      id: 4,
      bookTitle: "Pride and Prejudice",
      memberName: "Alice Brown",
      timeAgo: "2 days ago"
    },
    {
      id: 5,
      bookTitle: "The Catcher in the Rye",
      memberName: "Charlie Wilson",
      timeAgo: "3 days ago"
    }
  ]

  // Simulate loading popular categories
  popularCategories.value = [
    {
      id: 1,
      name: "Fiction",
      count: 450,
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "Non-Fiction",
      count: 320,
      color: "bg-green-500"
    },
    {
      id: 3,
      name: "Science",
      count: 180,
      color: "bg-purple-500"
    },
    {
      id: 4,
      name: "History",
      count: 150,
      color: "bg-red-500"
    },
    {
      id: 5,
      name: "Technology",
      count: 95,
      color: "bg-yellow-500"
    }
  ]
})
</script>