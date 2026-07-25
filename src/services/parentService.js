import apiClient from './apiClient';

export const parentService = {
  checkEligibility: async (data) => {
    // return (await apiClient.post('/parent/eligibility', data)).data;
    return Promise.resolve({ eligible: true, maxAmount: 1000000 });
  },
  
  submitApplication: async (applicationData) => {
    // return (await apiClient.post('/parent/applications', applicationData)).data;
    return Promise.resolve({ success: true, applicationId: 'APP-12345' });
  },
  
  getApplicationDetails: async (id) => {
    // return (await apiClient.get(`/parent/applications/${id}`)).data;
    return Promise.resolve({ id, status: 'approved', amount: 500000 });
  }
};
