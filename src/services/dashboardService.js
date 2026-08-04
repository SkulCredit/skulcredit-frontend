import apiClient from './apiClient';

export const dashboardService = {
  getParentDashboard: async () => {
    const response = await apiClient.get('/parents/dashboard');
    return response.data.data;
  },
  
  getSchoolDashboard: async () => {
    const response = await apiClient.get('/schools/dashboard');
    return response.data.data;
  }
};
