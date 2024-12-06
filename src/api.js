import axios from 'axios';
const today = new Date().toISOString().split('T')[0];

const API = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: { 'Content-Type': 'application/json' },
});
export const fetchProducts = () => API.get('/products');
export const fetchProduct = (id) => API.get(`/products/${id}`);
export const fetchCategories = () => API.get('/products/categories');
export const fetchCart = (userId) => API.get(`/carts/user/${userId}`);
export const deleteCart = (id) => API.delete(`/carts/${id}`);
export const fetchUser = (id) => API.get(`/users/${id}`);
export const updateUser = (id, data) => API.put(`/users/${id}`, data);
export const createOrder = (data) => API.post('/carts', data);


export const addToCartApi =  (userId, productId) => API.post('/carts', {
        userId: userId,
        date: today,
        products: [{ productId: productId, quantity: 1 }],
      });

  
export const updateCart =  (userId,productId,quantity) =>  API.put(`/carts/${productId}`, {
        userId: userId,
        date: today,
        products: [{ productId:productId , quantity: quantity}],
      });
     
export const RemoveProductFromCart =  (id) => API.delete(`/carts/${id}`);
  
    

