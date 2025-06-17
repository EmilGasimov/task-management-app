import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/tasks';

export const getTasks = () => axios.get(API_BASE);
export const createTask = (task) => axios.post(API_BASE, task);
export const updateTask = (id, updates) => axios.put(`${API_BASE}/${id}`, updates);
export const deleteTask = (id) => axios.delete(`${API_BASE}/${id}`);