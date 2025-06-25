// src/stores/userStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  // State
  const users = ref([
    {
      id: 1,
      name: 'Admin User',
      email: 'admin@library.com',
      role: 'admin',
      joinDate: '2023-01-01'
    },
    {
      id: 2,
      name: 'Librarian',
      email: 'librarian@library.com',
      role: 'librarian',
      joinDate: '2023-01-15'
    }
  ])

  // Actions
  const fetchUsers = async () => {
    // In a real app, this would be an API call
    return users.value
  }

  const addUser = async (userData) => {
    const newUser = {
      ...userData,
      id: Math.max(...users.value.map(u => u.id), 0) + 1,
      joinDate: new Date().toISOString().split('T')[0]
    }
    users.value.push(newUser)
    return newUser
  }

  const updateUser = async (userData) => {
    const index = users.value.findIndex(u => u.id === userData.id)
    if (index !== -1) {
      users.value[index] = userData
    }
    return userData
  }

  const deleteUser = async (id) => {
    users.value = users.value.filter(user => user.id !== id)
  }

  return {
    users,
    fetchUsers,
    addUser,
    updateUser,
    deleteUser
  }
})