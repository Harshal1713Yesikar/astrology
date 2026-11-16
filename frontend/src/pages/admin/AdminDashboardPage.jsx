import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarCheck,
  Clock,
  CheckCircle2,
  Mail,
  AlertCircle,
  Sparkles,
  ArrowRight,
  TrendingUp,
  User,
  Phone,
} from 'lucide-react';
import { appointmentService, contactService } from '../../services/api';

const AdminDashboardPage = () => {
  const [stats, setStats] = useState({
    totalAppointments: 0,
    pendingAppointments: 0,
    confirmedAppointments: 0,
    completedAppointments: 0,
    totalEnquiries: 0,
  });
  const [recentAppointments, setRecentAppointments] = useState([]);
  const [recentContacts, setRecentContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [appStatsRes, appointmentsRes, contactsRes] = await Promise.all([
          appointmentService.getStats(),
          appointmentService.getAll({ limit: 5 }),
          contactService.getAll({ limit: 5 }),
        ]);

        if (appStatsRes.success) {
          setStats((prev) => ({
            ...prev,
            ...appStatsRes.stats,
            totalEnquiries: contactsRes.total || 0,
          }));
        }

        if (appointmentsRes.success) {
          setRecentAppointments(appointmentsRes.appointments || []);
        }

        if (contactsRes.success) {
          setRecentContacts(contactsRes.contacts || []);
        }
      } catch (err) {
        console.error('Error fetching dashboard stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const statCards = [
    {
      title: 'Total Appointments',
      value: stats.totalAppointments,
      icon: CalendarCheck,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/30',
      link: '/admin/appointments',
    },
    {
      title: 'Pending Approval',
      value: stats.pendingAppointments,
      icon: Clock,
      color: 'text-amber-300',
      bg: 'bg-amber-600/15 border-amber-400/40',
      link: '/admin/appointments?status=Pending',
    },
    {
      title: 'Approved / Confirmed',
      value: stats.confirmedAppointments,
      icon: CheckCircle2,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/30',
      link: '/admin/appointments?status=Approved',
    },
    {
      title: 'Client Enquiries',
      value: stats.totalEnquiries,
      icon: Mail,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/30',
      link: '/admin/enquiries',
    },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Page Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Overview & Metrics
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
            Welcome, <span className="gold-gradient-text">Nitika Mehara</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Astronit Astrology & Vastu Consultation Management Dashboard
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/admin/appointments"
            className="btn-gold !py-2 !px-4 text-xs font-bold flex items-center gap-1.5"
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Manage Appointments</span>
          </Link>
        </div>
      </div>

      {/* Metric Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {statCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <Link
              key={i}
              to={card.link}
              className={`p-6 rounded-3xl glass-panel border ${card.bg} hover:scale-[1.02] transition-all duration-200 block group`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  {card.title}
                </span>
                <div className={`p-2.5 rounded-xl bg-slate-900 border border-slate-700/50 ${card.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="font-serif text-3xl font-black text-white">
                  {loading ? '...' : card.value}
                </span>
                <span className="text-xs text-amber-300 font-semibold group-hover:underline flex items-center gap-1">
                  <span>View</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Two Column Section: Recent Appointments & Recent Enquiries */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recent Appointments */}
        <div className="lg:col-span-7 rounded-3xl glass-panel border border-amber-500/20 p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <CalendarCheck className="w-5 h-5 text-amber-400" />
              <h2 className="font-serif text-lg font-bold text-white">Recent Appointments</h2>
            </div>
            <Link
              to="/admin/appointments"
              className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {recentAppointments.length === 0 ? (
            <p className="text-xs text-slate-400 py-6 text-center">No appointments booked yet.</p>
          ) : (
            <div className="space-y-3">
              {recentAppointments.map((app) => (
                <div
                  key={app._id}
                  className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-amber-400">
                        {app.appointmentId}
                      </span>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-xs font-semibold text-white">{app.fullName}</span>
                    </div>
                    <div className="text-xs text-slate-300 flex items-center gap-3">
                      <span>{app.service}</span>
                      <span>•</span>
                      <span className="text-slate-400">
                        {new Date(app.preferredDate).toLocaleDateString()} at {app.preferredTime}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${
                        app.status === 'Approved'
                          ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
                          : app.status === 'Pending'
                          ? 'bg-amber-500/10 border-amber-500/40 text-amber-300'
                          : 'bg-slate-800 border-slate-700 text-slate-300'
                      }`}
                    >
                      {app.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Client Messages/Enquiries */}
        <div className="lg:col-span-5 rounded-3xl glass-panel border border-amber-500/20 p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-cyan-400" />
              <h2 className="font-serif text-lg font-bold text-white">Recent Enquiries</h2>
            </div>
            <Link
              to="/admin/enquiries"
              className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {recentContacts.length === 0 ? (
            <p className="text-xs text-slate-400 py-6 text-center">No client messages received yet.</p>
          ) : (
            <div className="space-y-3">
              {recentContacts.map((contact) => (
                <div
                  key={contact._id}
                  className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1.5"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">{contact.name}</span>
                    <span className="text-[10px] text-slate-400">
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-amber-300 truncate">{contact.subject}</p>
                  <p className="text-[11px] text-slate-400 line-clamp-2">{contact.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
