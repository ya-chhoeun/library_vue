<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Books Management</h1>
      <p class="text-gray-600">Welcome, Admin</p>
    </div>

    <div class="bg-white rounded-lg shadow p-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-semibold">Books List</h2>
        <button 
          @click="openAddModal"
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add New Book
        </button>
      </div>

      <BookTable 
        :books="books" 
        @edit="openEditModal"
        @delete="confirmDelete"
      />

      <BookForm 
        v-if="showModal"
        :book="currentBook"
        @close="closeModal"
        @save="handleSave"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useBookStore } from '@/stores/bookStore'
import BookTable from '@/components/books/BookTable.vue'
import BookForm from '@/components/books/BookForm.vue'

const bookStore = useBookStore()
const books = bookStore.books
const showModal = ref(false)
const currentBook = ref(null)

onMounted(() => {
  bookStore.fetchBooks()
})

const openAddModal = () => {
  currentBook.value = null
  showModal.value = true
}

const openEditModal = (book) => {
  currentBook.value = { ...book }
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  currentBook.value = null
}

const handleSave = async (bookData) => {
  if (bookData.id) {
    await bookStore.updateBook(bookData)
  } else {
    await bookStore.addBook(bookData)
  }
  closeModal()
}

const confirmDelete = async (id) => {
  if (confirm('Are you sure you want to delete this book?')) {
    await bookStore.deleteBook(id)
  }
}
</script>