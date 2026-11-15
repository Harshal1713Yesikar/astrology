import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Sparkles, Lock, Mail, ArrowRight, AlertCircle, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const AdminLoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'admin@astronit.com',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMsg(null);

    try {
      await login(data.email, data.password);
      navigate('/admin/dashboard');
    } catch (err) {
      setErrorMsg(
        err.response?.data?.message || err.message || 'Invalid administrator credentials.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background celestial glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-3xl pointer-events-none -top-20 -left-20" />
      <div className="absolute w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none -bottom-20 -right-20" />

      {/* Back to Live Website */}
      <Link
        to="/"
        className="absolute top-6 left-6 text-xs text-slate-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Astronit Website</span>
      </Link>

      <div className="w-full max-w-md relative z-10 space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-purple-800 mx-auto flex items-center justify-center text-cosmic-darkest shadow-gold-glow mb-3">
            <Sparkles className="w-7 h-7 text-slate-950" />
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
            ASTRONIT <span className="gold-gradient-text">Admin</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Consultant Portal for Nitika Mehra (Musakhedi, Indore)
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-3xl glass-panel border border-amber-500/30 p-6 sm:p-8 space-y-5 shadow-2xl">
          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-200 text-xs flex items-center gap-2.5 animate-in fade-in duration-200">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Admin Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="admin@astronit.com"
                  {...register('email', { required: 'Email is required' })}
                  className="w-full bg-slate-900/90 border border-slate-700 focus:border-amber-400 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all"
                />
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              </div>
              {errors.email && (
                <p className="text-xs text-rose-400 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••••••"
                  {...register('password', { required: 'Password is required' })}
                  className="w-full bg-slate-900/90 border border-slate-700 focus:border-amber-400 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all"
                />
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              </div>
              {errors.password && (
                <p className="text-xs text-rose-400 mt-1">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-gold w-full py-3 text-sm font-bold flex items-center justify-center gap-2 shadow-gold-glow mt-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-cosmic-darkest border-t-transparent rounded-full animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Secure Admin Note */}
          <div className="pt-4 border-t border-slate-800 text-center">
            <p className="text-[11px] text-slate-400">
              🔒 Authenticated admin access only. Public registration is permanently disabled.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
