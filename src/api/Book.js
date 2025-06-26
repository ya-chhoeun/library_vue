import apiService from "@/plugins/axios";
import axios from "axios";

export const getBook = () => apiService('/books');

const BookApi = {
  getAll() {
    return axios.get('/api/books');
  },

  // Get single book
  get(id) {
    return axios.get(`/api/books/${id}`);
  },

  // Create new book
  create(data) {
    return axios.post('/api/books', data);
  },

  // Update book
  update(id, data) {
    return axios.put(`/api/books/${id}`, data);
  },

  // Delete book
  delete(id) {
    return axios.delete(`/api/books/${id}`);
  }
};

export default BookApi;