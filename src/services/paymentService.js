import apiClient from './apiClient';

export const paymentService = {
  initiatePayment: async (paymentDetails) => {
    // return (await apiClient.post('/payments/initiate', paymentDetails)).data;
    return Promise.resolve({ reference: 'REF-' + Date.now(), gatewayUrl: 'https://pay.example.com/checkout' });
  },
  
  verifyPayment: async (reference) => {
    // return (await apiClient.get(`/payments/verify/${reference}`)).data;
    return Promise.resolve({ success: true, status: 'successful' });
  }
};
