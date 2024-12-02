import axios from 'axios';

const API = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: { 'Content-Type': 'application/json' },
});

export const fetchProducts = () => API.get('/products');
export const fetchProduct = (id) => API.get(`/products/${id}`);
export const fetchCategories = () => API.get('/products/categories');
export const fetchCategoryProducts = (category) => API.get(`/products/category/${category}`);
export const fetchCart = (id) => API.get(`/carts/${id}`);
export const updateCart = (id, data) => API.put(`/carts/${id}`, data);
export const deleteCart = (id) => API.delete(`/carts/${id}`);
export const fetchUser = (id) => API.get(`/users/${id}`);
export const updateUser = (id, data) => API.put(`/users/${id}`, data);
export const createOrder = (data) => API.post('/carts', data);
