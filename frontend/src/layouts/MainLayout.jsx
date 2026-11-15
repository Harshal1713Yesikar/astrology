import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import StarryBackground from '../components/common/StarryBackground';
import WhatsAppFloat from '../components/common/WhatsAppFloat';
import CallFloat from '../components/common/CallFloat';

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen flex flex-col bg-cosmic-darkest text-slate-100 overflow-x-hidden selection:bg-amber-500 selection:text-slate-950">
      {/* Background Starry Canvas & Glow */}
      <StarryBackground />

      {/* Primary Sticky Header */}
      <Navbar />

      {/* Main Page View */}
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>

      {/* Floating Call & WhatsApp Buttons */}
      <CallFloat />
      <WhatsAppFloat />

      {/* Primary Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
