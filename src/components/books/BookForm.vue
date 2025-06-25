<!-- src/components/books/BookForm.vue -->
<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-md">
      <div class="p-6">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-medium">{{ book ? 'Edit Book' : 'Add New Book' }}</h3>
          <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form @submit.prevent="$emit('save', form)">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Title</label>
              <input 
                v-model="form.title" 
                type="text" 
                required
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">Author</label>
              <input 
                v-model="form.author" 
                type="text" 
                required
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">ISBN</label>
              <input 
                v-model="form.isbn" 
                type="text" 
                required
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">Status</label>
              <select 
                v-model="form.status" 
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Available">Available</option>
                <option value="Borrowed">Borrowed</option>
              </select>
            </div>
          </div>

          <div class="mt-6 flex justify-end space-x-3">
            <button 
              type="button" 
              @click="$emit('close')"
              class="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  book: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close', 'save'])

const form = ref({
  id: null,
  title: '',
  author: '',
  isbn: '',
  status: 'Available'
})

watch(() => props.book, (newBook) => {
  form.value = newBook ? { ...newBook } : {
    id: null,
    title: '',
    author: '',
    isbn: '',
    status: 'Available'
  }
}, { immediate: true })
</script>