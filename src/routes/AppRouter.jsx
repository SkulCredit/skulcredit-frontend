import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Lazy loading pages
const HomePage = React.lazy(() => import('../pages/Home/HomePage'));
const AuthPage = React.lazy(() => import('../pages/Auth/AuthPage'));

const EligibilityTestPage = React.lazy(() => import('../pages/ParentFlow/EligibilityTestPage'));
const StudentDetailsPage = React.lazy(() => import('../pages/ParentFlow/StudentDetailsPage'));
const ServiceChargePage = React.lazy(() => import('../pages/ParentFlow/ServiceChargePage'));
const PaymentConfirmationPage = React.lazy(() => import('../pages/ParentFlow/PaymentConfirmationPage'));
const ParentDashboardPage = React.lazy(() => import('../pages/ParentFlow/ParentDashboardPage'));

const SchoolAuthPage = React.lazy(() => import('../pages/SchoolFlow/SchoolAuthPage'));
const SchoolOnboardingPage = React.lazy(() => import('../pages/SchoolFlow/SchoolOnboardingPage'));
const SchoolDashboardPage = React.lazy(() => import('../pages/SchoolFlow/SchoolDashboardPage'));
const SchoolApplicationsPage = React.lazy(() => import('../pages/SchoolFlow/SchoolApplicationsPage'));
const SchoolStudentsPage = React.lazy(() => import('../pages/SchoolFlow/SchoolStudentsPage'));
const SchoolDisbursementPage = React.lazy(() => import('../pages/SchoolFlow/SchoolDisbursementPage'));
const SchoolVerificationSettingsPage = React.lazy(() => import('../pages/SchoolFlow/SchoolVerificationSettingsPage'));

// A basic loading fallback
const Loader = () => <div className="flex h-screen w-full items-center justify-center">Loading...</div>;

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          
          <Route path="/parent/eligibility" element={<EligibilityTestPage />} />
          <Route path="/parent/details" element={<StudentDetailsPage />} />
          <Route path="/parent/service-charge" element={<ServiceChargePage />} />
          <Route path="/parent/payment" element={<PaymentConfirmationPage />} />
          <Route path="/parent/dashboard" element={<ParentDashboardPage />} />
          
          <Route path="/school/auth" element={<SchoolAuthPage />} />
          <Route path="/school/onboarding" element={<SchoolOnboardingPage />} />
          <Route path="/school/dashboard" element={<SchoolDashboardPage />} />
          <Route path="/school/applications" element={<SchoolApplicationsPage />} />
          <Route path="/school/students" element={<SchoolStudentsPage />} />
          <Route path="/school/disbursement" element={<SchoolDisbursementPage />} />
          <Route path="/school/settings" element={<SchoolVerificationSettingsPage />} />

          {/* Catch-all for not found */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
