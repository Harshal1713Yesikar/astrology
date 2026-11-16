import React, { useState, useEffect } from 'react';
import {
  Settings,
  Save,
  CheckCircle,
  AlertCircle,
  Clock,
  Phone,
  MapPin,
  Lock,
  Mail,
  MessageCircle,
} from 'lucide-react';
import { settingsService, authService } from '../../services/api';

const AdminSettingsPage = () => {
  const [loading, setLoading] = useState(true);
  const [actionSuccess, setActionSuccess] = useState(null);
  const [serverError, setServerError] = useState(null);

  const [settings, setSettings] = useState({
    brandName: 'ASTRONIT',
    tagline: 'Astrology & Spiritual Guidance',
    consultantName: 'Nitika Mehara',
    profession: 'Astrologer and Vastu Expert',
    address: '32, New Abhishek Nagar, Musakhedi, Indore, Madhya Pradesh – 452001, India',
    primaryPhone: '8959235176',
    secondaryPhone: '7869608159',
    whatsappNumber: '918959235176',
    email: 'contact@astronit.com',
    consultationTimings: 'Monday to Saturday: 3:00 PM – 8:00 PM (Sunday Closed)',
    whatsappDefaultMessage:
      'Hello Astronit, I would like to enquire about your astrology and Vastu consultation services. Please share the details.',
  });

  // Password update form
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [passwordMsg, setPasswordMsg] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await settingsService.get();
        if (res.success && res.settings) {
          setSettings(res.settings);
        }
      } catch (err) {
        console.error('Error fetching settings:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleSettingsSubmit = async (e) => {
    e.preventDefault();
    setServerError(null);
    try {
      const res = await settingsService.update(settings);
      if (res.success) {
        setActionSuccess('Website contact information and consultation timings updated successfully!');
        setTimeout(() => setActionSuccess(null), 3000);
      }
    } catch (err) {
      setServerError(err.response?.data?.message || 'Error updating settings');
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setPasswordMsg(null);

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordMsg({ type: 'error', text: 'New passwords do not match' });
      return;
    }

    try {
      const res = await authService.updatePassword({
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
      });

      if (res.success) {
        setPasswordMsg({ type: 'success', text: 'Admin password updated successfully!' });
        setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      }
    } catch (err) {
      setPasswordMsg({
        type: 'error',
        text: err.response?.data?.message || 'Error updating password',
      });
    }
  };

  if (loading) {
    return <div className="p-12 text-center text-sm text-slate-400">Loading settings...</div>;
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="border-b border-slate-800 pb-5">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">
          Website <span className="gold-gradient-text">Settings</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Update Nitika Mehara's consultation timings, contact phone numbers, Indore address, and credentials.
        </p>
      </div>

      {actionSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-sm flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{actionSuccess}</span>
        </div>
      )}

      {serverError && (
        <div className="p-4 rounded-2xl bg-rose-950/60 border border-rose-500/40 text-rose-200 text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Main Settings Form */}
      <form
        onSubmit={handleSettingsSubmit}
        className="rounded-3xl glass-panel border border-amber-500/30 p-6 sm:p-8 space-y-6 shadow-2xl"
      >
        <h2 className="font-serif text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Brand Information & Contact Details</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Brand Name</label>
            <input
              type="text"
              value={settings.brandName || ''}
              onChange={(e) => setSettings({ ...settings, brandName: e.target.value })}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Brand Tagline</label>
            <input
              type="text"
              value={settings.tagline || ''}
              onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Consultant Name</label>
            <input
              type="text"
              value={settings.consultantName || ''}
              onChange={(e) => setSettings({ ...settings, consultantName: e.target.value })}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Profession</label>
            <input
              type="text"
              value={settings.profession || ''}
              onChange={(e) => setSettings({ ...settings, profession: e.target.value })}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Primary Contact Number
            </label>
            <input
              type="text"
              value={settings.primaryPhone || ''}
              onChange={(e) => setSettings({ ...settings, primaryPhone: e.target.value })}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Secondary Contact Number
            </label>
            <input
              type="text"
              value={settings.secondaryPhone || ''}
              onChange={(e) => setSettings({ ...settings, secondaryPhone: e.target.value })}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              WhatsApp Integration Number (with country code)
            </label>
            <input
              type="text"
              value={settings.whatsappNumber || ''}
              onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
            <input
              type="email"
              value={settings.email || ''}
              onChange={(e) => setSettings({ ...settings, email: e.target.value })}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Consultation Timings (Displayed across site)
            </label>
            <input
              type="text"
              value={settings.consultationTimings || ''}
              onChange={(e) => setSettings({ ...settings, consultationTimings: e.target.value })}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Office Address (Indore)
            </label>
            <textarea
              rows="2"
              value={settings.address || ''}
              onChange={(e) => setSettings({ ...settings, address: e.target.value })}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Default WhatsApp Pre-filled Enquiry Message
            </label>
            <textarea
              rows="2"
              value={settings.whatsappDefaultMessage || ''}
              onChange={(e) =>
                setSettings({ ...settings, whatsappDefaultMessage: e.target.value })
              }
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
            />
          </div>
        </div>

        <div className="flex justify-end pt-3">
          <button type="submit" className="btn-gold !py-2.5 !px-6 text-xs font-bold flex items-center gap-2">
            <Save className="w-4 h-4" />
            <span>Save Website Settings</span>
          </button>
        </div>
      </form>

      {/* Admin Password Change Form */}
      <form
        onSubmit={handlePasswordSubmit}
        className="rounded-3xl glass-panel border border-amber-500/20 p-6 sm:p-8 space-y-5 shadow-2xl"
      >
        <h2 className="font-serif text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
          <Lock className="w-4 h-4 text-amber-400" />
          <span>Change Administrator Password</span>
        </h2>

        {passwordMsg && (
          <div
            className={`p-3.5 rounded-xl text-xs flex items-center gap-2 ${
              passwordMsg.type === 'success'
                ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-200'
                : 'bg-rose-950/60 border border-rose-500/40 text-rose-200'
            }`}
          >
            {passwordMsg.type === 'success' ? (
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            )}
            <span>{passwordMsg.text}</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Current Password
            </label>
            <input
              type="password"
              required
              value={passwordData.currentPassword}
              onChange={(e) =>
                setPasswordData({ ...passwordData, currentPassword: e.target.value })
              }
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              New Password (min 6 chars)
            </label>
            <input
              type="password"
              required
              value={passwordData.newPassword}
              onChange={(e) =>
                setPasswordData({ ...passwordData, newPassword: e.target.value })
              }
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Confirm New Password
            </label>
            <input
              type="password"
              required
              value={passwordData.confirmPassword}
              onChange={(e) =>
                setPasswordData({ ...passwordData, confirmPassword: e.target.value })
              }
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
            />
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button type="submit" className="btn-outline-gold !py-2 !px-5 text-xs font-semibold">
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminSettingsPage;
