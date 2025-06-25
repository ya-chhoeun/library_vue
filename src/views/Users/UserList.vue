<!-- src/views/Users/UserList.vue -->
<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">User Management</h1>
      <button 
        @click="showForm = true"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add New User
      </button>
    </div>

    <div class="bg-white rounded-lg shadow p-6">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="user in userStore.users" :key="user.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="font-medium text-gray-900">{{ user.name }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-gray-600">{{ user.email }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                  :class="{
                    'bg-purple-100 text-purple-800': user.role === 'admin',
                    'bg-blue-100 text-blue-800': user.role === 'librarian',
                    'bg-green-100 text-green-800': user.role === 'member'
                  }">
                  {{ user.role }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-gray-600">{{ user.joinDate }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button 
                  @click="handleEdit(user)"
                  class="text-blue-600 hover:text-blue-900 mr-3"
                >
                  Edit
                </button>
                <button 
                  @click="handleDelete(user.id)"
                  class="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <UserForm 
      v-if="showForm"
      :user="currentUser"
      @close="closeForm"
      @save="handleSave"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/userStore'
import UserForm from '@/components/users/UserForm.vue'

const userStore = useUserStore()
const showForm = ref(false)
const currentUser = ref(null)

onMounted(async () => {
  await userStore.fetchUsers()
})

const handleEdit = (user) => {
  currentUser.value = { ...user }
  showForm.value = true
}

const closeForm = () => {
  showForm.value = false
  currentUser.value = null
}

const handleSave = async (userData) => {
  if (userData.id) {
    await userStore.updateUser(userData)
  } else {
    await userStore.addUser(userData)
  }
  closeForm()
}

const handleDelete = async (id) => {
  if (confirm('Are you sure you want to delete this user?')) {
    await userStore.deleteUser(id)
  }
}
</script>