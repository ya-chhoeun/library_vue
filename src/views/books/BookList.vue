
<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-semibold">Books List</h2>
      <button 
        @click="showForm = true"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add New Book
      </button>
    </div>

    <BookTable 
      :books="books" 
      @edit="handleEdit"
      @delete="handleDelete"
    />

    <BookForm 
      v-if="showForm"
      :book="currentBook"
      @close="closeForm"
      @save="handleSave"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useBookStore } from '@/stores/bookStore'
import BookTable from '@/components/books/BookTable.vue'
import BookForm from '@/components/books/BookForm.vue'

const bookStore = useBookStore()
const books = bookStore.books
const showForm = ref(false)
const currentBook = ref(null)

onMounted(() => {
  bookStore.fetchBooks()
})

const handleEdit = (book) => {
  currentBook.value = { ...book }
  showForm.value = true
}

const closeForm = () => {
  showForm.value = false
  currentBook.value = null
}

const handleSave = async (bookData) => {
  if (bookData.id) {
    await bookStore.updateBook(bookData)
  } else {
    await bookStore.addBook(bookData)
  }
  closeForm()
}

const handleDelete = async (id) => {
  if (confirm('Are you sure you want to delete this book?')) {
    await bookStore.deleteBook(id)
  }
}
</script>