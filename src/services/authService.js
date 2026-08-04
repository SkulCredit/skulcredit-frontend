import apiClient from './apiClient';

export const authService = {
  login: async (credentials) => {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data.data;
  },
  
  register: async (userData, role = 'parent') => {
    const response = await apiClient.post(`/auth/register/${role}`, userData);
    return response.data.data;
  },
  
  logout: () => {
    localStorage.removeItem('token');
    window.location.href = '/auth';
  }
};
