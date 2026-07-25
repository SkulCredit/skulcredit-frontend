import apiClient from './apiClient';

export const authService = {
  login: async (credentials) => {
    // const response = await apiClient.post('/auth/login', credentials);
    // return response.data;
    return Promise.resolve({ user: { id: 1, role: 'parent' }, token: 'fake-jwt-token' });
  },
  
  register: async (userData) => {
    // const response = await apiClient.post('/auth/register', userData);
    // return response.data;
    return Promise.resolve({ success: true });
  },
  
  logout: () => {
    localStorage.removeItem('token');
    window.location.href = '/auth';
  }
};
