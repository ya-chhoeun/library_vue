import apiService from "@/plugins/axios";
export const getBook = ()=> apiService('/books')