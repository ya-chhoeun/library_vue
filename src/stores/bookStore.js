// src/stores/bookStore.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useBookStore = defineStore('book', () => {
  // State
  const books = ref([
    {
      id: 1,
      title: 'Vue 3 Essentials',
      author: 'Evan You',
      isbn: '978-1-59327-912-7',
      status: 'Available',
      addedDate: '2023-01-15'
    },
    {
      id: 2,
      title: 'Pinia Guide',
      author: 'Eduardo San Martin',
      isbn: '978-1-59327-913-4',
      status: 'Borrowed',
      addedDate: '2023-01-10'
    }
  ])

  // Actions
  const fetchBooks = async () => {
    // In a real app, this would be an API call
    return books.value
  }

  const addBook = async (book) => {
    const newBook = {
      ...book,
      id: Math.max(...books.value.map(b => b.id), 0) + 1,
      addedDate: new Date().toISOString().split('T')[0]
    }
    books.value.push(newBook)
    return newBook
  }

  const updateBook = async (updatedBook) => {
    const index = books.value.findIndex(b => b.id === updatedBook.id)
    if (index !== -1) {
      books.value[index] = updatedBook
    }
    return updatedBook
  }

  const deleteBook = async (id) => {
    books.value = books.value.filter(book => book.id !== id)
  }

  // Getters
  const availableBooks = computed(() => 
    books.value.filter(book => book.status === 'Available')
  )

  const recentBooks = computed(() => 
    [...books.value].sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate)).slice(0, 5)
  )

  return {
    // State
    books,
    
    // Actions
    fetchBooks,
    addBook,
    updateBook,
    deleteBook,
    
    // Getters
    availableBooks,
    recentBooks
  }
})