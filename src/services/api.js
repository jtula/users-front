import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data.users;
};

export const getUserById = async (userId) => {
  const response = await api.get(`/users/${userId}`);
  return response.data.user;
};

export const createUser = async (userData) => {
  const response = await api.post('/users', userData);
  return response.data.user;
};

export const updateUser = async (userId, userData) => {
  const response = await api.put(`/users/${userId}`, userData);
  return response.data;
};

export const deleteUser = async (userId) => {
  const response = await api.delete(`/users/${userId}`);
  return response.data;
};