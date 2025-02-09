import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5150/items";

axios.interceptors.response.use(
  response => response,
  error => {
    console.error("API Error:", error); 
    return Promise.reject(error);
  }
);

export default {
  getTasks: async () => {
    const result = await axios.get(); 
    return result.data;
  },

  addTask: async(name) => {
    const newTask = { name, isComplete: false };
    const result = await axios.post('', newTask); 
    return result.data;
  },

  setCompleted: async(id, isComplete) => {
    const result = await axios.put(`/${id}`, { isComplete }); 
    return result.data;
  },

  deleteTask: async(id) => {
    await axios.delete(`/${id}`);
  }
};
