import apiClient from './apiClient';

export const schoolService = {
  onboardSchool: async (schoolData) => {
    // return (await apiClient.post('/school/onboard', schoolData)).data;
    return Promise.resolve({ success: true, schoolId: 'SCH-9876' });
  },
  
  getApplications: async () => {
    // return (await apiClient.get('/school/applications')).data;
    return Promise.resolve([{ id: 'APP-1', student: 'John Doe', amount: 120000, status: 'disbursed' }]);
  },
  
  updateVerificationSettings: async (settings) => {
    // return (await apiClient.put('/school/settings', settings)).data;
    return Promise.resolve({ success: true });
  }
};
