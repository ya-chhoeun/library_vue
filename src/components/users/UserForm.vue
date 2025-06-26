<template>
  <div class="user-form">
    <h2 v-if="!editMode">Add New User</h2>
    <h2 v-else>Edit User</h2>
    
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          v-model="form.name" 
          required
          placeholder="Enter full name"
        >
      </div>
      
      <div class="form-group">
        <label for="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          v-model="form.email" 
          required
          placeholder="Enter email address"
        >
      </div>
      
      <div class="form-group">
        <label for="password" v-if="!editMode">Password:</label>
        <input 
          type="password" 
          id="password" 
          v-model="form.password" 
          :required="!editMode"
          placeholder="Enter password"
          v-if="!editMode"
        >
      </div>
      
      <div class="form-group">
        <label for="role">Role:</label>
        <select id="role" v-model="form.role" required>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="librarian">Librarian</option>
          <option value="user">User</option>
        </select>
      </div>
      
      <div class="form-actions">
        <button type="submit" class="btn-submit">
          {{ editMode ? 'Update' : 'Add' }} User
        </button>
        <button type="button" class="btn-cancel" @click="cancelForm">
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';

export default {
  name: 'UserForm',
  props: {
    userId: {
      type: [String, Number],
      default: null
    }
  },
  setup(props) {
    const userStore = useUserStore();
    const router = useRouter();
    
    const editMode = ref(false);
    const form = reactive({
      name: '',
      email: '',
      password: '',
      role: ''
    });
    
    // If userId prop is provided, we're in edit mode
    onMounted(async () => {
      if (props.userId) {
        editMode.value = true;
        const user = await userStore.fetchUser(props.userId);
        if (user) {
          form.name = user.name;
          form.email = user.email;
          form.role = user.role;
        }
      }
    });
    
    const submitForm = async () => {
      try {
        if (editMode.value) {
          await userStore.updateUser(props.userId, form);
        } else {
          await userStore.createUser(form);
        }
        router.push('/users');
      } catch (error) {
        console.error('Error submitting user form:', error);
        // You can add error handling here (e.g., show toast message)
      }
    };
    
    const cancelForm = () => {
      router.push('/users');
    };
    
    return {
      form,
      editMode,
      submitForm,
      cancelForm
    };
  }
};
</script>

<style scoped>
.user-form {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-form h2 {
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: #2c3e50;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.btn-submit {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.btn-submit:hover {
  background-color: #3aa876;
}

.btn-cancel {
  padding: 10px 20px;
  background-color: #f0f0f0;
  color: #2c3e50;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.btn-cancel:hover {
  background-color: #e0e0e0;
}
</style>