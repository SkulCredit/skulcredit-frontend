import apiClient from './apiClient';

export const dashboardService = {
  getParentStats: async () => {
    // return (await apiClient.get('/dashboard/parent-stats')).data;
    return Promise.resolve({ totalLoans: 1, outstanding: 250000, nextPayment: '2023-12-01' });
  },
  
  getSchoolStats: async () => {
    // return (await apiClient.get('/dashboard/school-stats')).data;
    return Promise.resolve({ totalStudents: 45, disbursedAmount: 4500000, pendingApplications: 3 });
  }
};
