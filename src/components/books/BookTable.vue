<template>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ISBN</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="book in books" :key="book.id" class="hover:bg-gray-50">
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="font-medium text-gray-900">{{ book.title }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-gray-600">{{ book.author }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-gray-600">{{ book.isbn }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span 
              :class="{
                'bg-green-100 text-green-800': book.status === 'Available',
                'bg-red-100 text-red-800': book.status === 'Borrowed'
              }" 
              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
            >
              {{ book.status }}
            </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
            <button 
              @click="$emit('edit', book)"
              class="text-blue-600 hover:text-blue-900 mr-3"
            >
              Edit
            </button>
            <button 
              @click="$emit('delete', book.id)"
              class="text-red-600 hover:text-red-900"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  books: {
    type: Array,
    required: true
  }
})

defineEmits(['edit', 'delete'])
</script>