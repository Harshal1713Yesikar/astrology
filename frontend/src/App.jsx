import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Public Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import AstrologyPage from './pages/AstrologyPage';
import VastuPage from './pages/VastuPage';
import NumerologyPage from './pages/NumerologyPage';
import GemstonesPage from './pages/GemstonesPage';
import CrystalHealingPage from './pages/CrystalHealingPage';
import SpiritualRemediesPage from './pages/SpiritualRemediesPage';
import ContactPage from './pages/ContactPage';
import BookConsultationPage from './pages/BookConsultationPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';

// Admin Pages
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminAppointmentsPage from './pages/admin/AdminAppointmentsPage';
import AdminEnquiriesPage from './pages/admin/AdminEnquiriesPage';
import AdminServicesPage from './pages/admin/AdminServicesPage';
import AdminTestimonialsPage from './pages/admin/AdminTestimonialsPage';
import AdminFaqsPage from './pages/admin/AdminFaqsPage';
import AdminSettingsPage from './pages/admin/AdminSettingsPage';

import { useAuth } from './context/AuthContext';

// Protected Route Guard
const ProtectedAdminRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-amber-400 text-sm">
        Verifying Session...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

function App() {
  return (
    <Routes>
      {/* Public Pages with Main Layout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/astrology-consultation" element={<AstrologyPage />} />
        <Route path="services/vastu-consultation" element={<VastuPage />} />
        <Route path="services/numerology" element={<NumerologyPage />} />
        <Route path="services/navratna-gemstones" element={<GemstonesPage />} />
        <Route path="services/crystal-healing" element={<CrystalHealingPage />} />
        <Route path="services/spiritual-remedies" element={<SpiritualRemediesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="book-consultation" element={<BookConsultationPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-and-conditions" element={<TermsConditionsPage />} />
      </Route>

      {/* Admin Login */}
      <Route path="/admin/login" element={<AdminLoginPage />} />

      {/* Protected Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedAdminRoute>
            <AdminLayout />
          </ProtectedAdminRoute>
        }
      >
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboardPage />} />
        <Route path="appointments" element={<AdminAppointmentsPage />} />
        <Route path="enquiries" element={<AdminEnquiriesPage />} />
        <Route path="services" element={<AdminServicesPage />} />
        <Route path="testimonials" element={<AdminTestimonialsPage />} />
        <Route path="faqs" element={<AdminFaqsPage />} />
        <Route path="settings" element={<AdminSettingsPage />} />
      </Route>

      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
