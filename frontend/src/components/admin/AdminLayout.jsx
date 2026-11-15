import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  CalendarCheck,
  Mail,
  Sparkles,
  MessageSquareQuote,
  HelpCircle,
  Settings,
  LogOut,
  Menu,
  X,
  ExternalLink,
  Shield,
  User,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const AdminLayout = () => {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const navItems = [
    { label: 'Overview', to: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Appointments', to: '/admin/appointments', icon: CalendarCheck },
    { label: 'Enquiries', to: '/admin/enquiries', icon: Mail },
    { label: 'Services', to: '/admin/services', icon: Sparkles },
    { label: 'Testimonials', to: '/admin/testimonials', icon: MessageSquareQuote },
    { label: 'FAQs', to: '/admin/faqs', icon: HelpCircle },
    { label: 'Website Settings', to: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      {/* Mobile Header Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-slate-900 border-b border-amber-500/20 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="font-serif font-bold text-base text-white">
            ASTRONIT <span className="text-amber-400 text-xs">Admin</span>
          </span>
        </div>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg bg-slate-800 text-amber-400"
          aria-label="Toggle admin sidebar"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-900/98 border-r border-amber-500/20 p-5 flex flex-col justify-between transform transition-transform duration-300 md:translate-x-0 md:static ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="space-y-6">
          {/* Admin Header */}
          <div className="flex items-center gap-3 pb-5 border-b border-slate-800">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-purple-800 flex items-center justify-center text-cosmic-darkest font-bold shadow-gold-glow">
              <Sparkles className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-base text-white">
                ASTRO<span className="gold-gradient-text">NIT</span>
              </h2>
              <p className="text-[10px] text-amber-300 font-semibold uppercase tracking-wider">
                Nitika Mehra Portal
              </p>
            </div>
          </div>

          {/* Admin Profile Chip */}
          <div className="p-3 rounded-2xl bg-slate-800/60 border border-amber-500/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-900 border border-amber-500/30 flex items-center justify-center text-amber-300 text-xs font-bold">
              NM
            </div>
            <div className="truncate">
              <span className="block text-xs font-semibold text-white truncate">
                {admin?.name || 'Nitika Mehra'}
              </span>
              <span className="block text-[10px] text-slate-400 truncate">
                {admin?.email || 'admin@astronit.com'}
              </span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-amber-500 text-cosmic-darkest font-bold shadow-gold-glow'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-amber-300'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer Actions */}
        <div className="pt-4 border-t border-slate-800 space-y-2">
          <Link
            to="/"
            target="_blank"
            className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs text-slate-400 hover:bg-slate-800 hover:text-amber-300 transition-colors"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Live Website</span>
            </span>
          </Link>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-rose-400 hover:bg-rose-950/40 hover:text-rose-300 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
