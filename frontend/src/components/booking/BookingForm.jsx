import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  FileText,
  MapPin,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { appointmentService } from '../../services/api';
import { BRAND_INFO, SERVICES_LIST, getWhatsAppLink } from '../../utils/constants';

const BookingForm = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialService = searchParams.get('service') || 'Astrology Consultation';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);
  const [serverError, setServerError] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: '',
      mobileNumber: '',
      email: '',
      service: initialService,
      preferredDate: '',
      preferredTime: '04:00 PM',
      consultationType: 'Online',
      message: '',
      birthDate: '',
      birthTime: '',
      birthPlace: '',
    },
  });

  const selectedService = watch('service');
  const isAstrology = selectedService.toLowerCase().includes('astrology') || selectedService.toLowerCase().includes('gemstone');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const payload = {
        fullName: data.fullName,
        mobileNumber: data.mobileNumber,
        email: data.email,
        service: data.service,
        preferredDate: data.preferredDate,
        preferredTime: data.preferredTime,
        consultationType: data.consultationType,
        message: data.message,
        birthDetails: {
          birthDate: data.birthDate || '',
          birthTime: data.birthTime || '',
          birthPlace: data.birthPlace || '',
        },
      };

      const res = await appointmentService.create(payload);

      if (res.success) {
        setSubmissionSuccess(res.appointment);
        reset();
      }
    } catch (err) {
      const errMsg =
        err.response?.data?.message ||
        'Unable to book your consultation at this time. Please try again or WhatsApp us directly.';
      setServerError(errMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Pre-filled WhatsApp button from current form inputs
  const currentFullName = watch('fullName');
  const currentService = watch('service');
  const currentType = watch('consultationType');
  const whatsappBookingText = `Hello Nitika Mehra ji, I would like to book an ${currentType || 'Online'} appointment for ${currentService || 'Astrology Consultation'}. Name: ${currentFullName || 'Client'}. Please share the earliest available slot.`;

  return (
    <div className="relative">
      {submissionSuccess ? (
        <div className="rounded-3xl glass-panel border border-amber-500/40 p-8 sm:p-10 text-center space-y-6 shadow-2xl animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center mx-auto text-amber-400 shadow-gold-glow">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Appointment Request Received
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Thank You, {submissionSuccess.fullName}!
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto font-light">
              Your appointment request has been submitted to <strong>Nitika Mehra</strong>.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/90 border border-amber-500/30 max-w-md mx-auto text-left space-y-2 text-xs sm:text-sm">
            <div className="flex justify-between items-center py-1 border-b border-slate-800">
              <span className="text-slate-400">Appointment ID:</span>
              <span className="font-mono font-bold text-amber-400">{submissionSuccess.appointmentId}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-slate-800">
              <span className="text-slate-400">Service:</span>
              <span className="text-white font-medium">{submissionSuccess.service}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-slate-800">
              <span className="text-slate-400">Consultation Mode:</span>
              <span className="text-white font-medium">{submissionSuccess.consultationType}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-slate-800">
              <span className="text-slate-400">Status:</span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold text-xs border border-amber-500/30">
                Pending Approval
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
            <span className="font-semibold text-amber-300 block mb-1">Notice:</span>
            Appointments are not confirmed automatically. Nitika Mehra reviews each slot to ensure
            adequate time for Kundali analysis. You will receive confirmation via phone/WhatsApp
            within consultation hours (Mon–Sat, 3:00 PM – 8:00 PM).
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={getWhatsAppLink(
                `Hello Nitika Mehra ji, I have booked appointment ${submissionSuccess.appointmentId} for ${submissionSuccess.service}. Please confirm my slot.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold !py-2.5 !px-5 text-xs font-bold flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Confirm on WhatsApp Immediately</span>
            </a>
            <button
              onClick={() => setSubmissionSuccess(null)}
              className="btn-outline-gold !py-2.5 !px-5 text-xs font-medium"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-3xl glass-panel border border-amber-500/30 p-6 sm:p-8 md:p-10 space-y-6 shadow-2xl relative"
        >
          {serverError && (
            <div className="p-4 rounded-xl bg-rose-950/50 border border-rose-500/40 text-rose-200 text-sm flex items-center gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
              <span>{serverError}</span>
            </div>
          )}

          {/* Section 1: Personal Details */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2 border-b border-amber-500/20 pb-2">
              <User className="w-4 h-4 text-amber-400" />
              <span>1. Your Details</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Full Name <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    {...register('fullName', {
                      required: 'Please enter your full name',
                      minLength: { value: 3, message: 'Name must be at least 3 characters' },
                    })}
                    className="w-full bg-slate-900/80 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-xs text-rose-400 mt-1">{errors.fullName.message}</p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Mobile Number <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="e.g. 9826012345 (10 digits)"
                    {...register('mobileNumber', {
                      required: 'Please enter your mobile number',
                      pattern: {
                        value: /^[0-9+ -]{10,15}$/,
                        message: 'Please provide a valid 10-15 digit phone number',
                      },
                    })}
                    className="w-full bg-slate-900/80 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                </div>
                {errors.mobileNumber && (
                  <p className="text-xs text-rose-400 mt-1">{errors.mobileNumber.message}</p>
                )}
              </div>

              {/* Email Address */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Email Address <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    {...register('email', {
                      required: 'Please enter your email',
                      pattern: {
                        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                        message: 'Please provide a valid email address',
                      },
                    })}
                    className="w-full bg-slate-900/80 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-rose-400 mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Section 2: Service & Schedule */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2 border-b border-amber-500/20 pb-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>2. Consultation Preference</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Select Service */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Select Service <span className="text-amber-400">*</span>
                </label>
                <select
                  {...register('service', { required: 'Please select a service' })}
                  className="w-full bg-slate-900/90 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all"
                >
                  <option value="Astrology Consultation">Astrology Consultation</option>
                  <option value="Vastu Consultation">Vastu Consultation</option>
                  <option value="Numerology Consultation">Numerology Consultation</option>
                  <option value="Nine Gemstones (Navratna) Guidance">Nine Gemstones (Navratna) Guidance</option>
                  <option value="Crystal Healing and Guidance">Crystal Healing and Guidance</option>
                  <option value="Spiritual Remedies and Guidance">Spiritual Remedies and Guidance</option>
                </select>
              </div>

              {/* Consultation Type */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Consultation Mode <span className="text-amber-400">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-700 cursor-pointer hover:border-amber-400 transition-all">
                    <input
                      type="radio"
                      value="Online"
                      {...register('consultationType')}
                      className="text-amber-400 focus:ring-amber-400"
                    />
                    <span className="text-xs font-medium text-slate-200">Online Call</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-700 cursor-pointer hover:border-amber-400 transition-all">
                    <input
                      type="radio"
                      value="Offline"
                      {...register('consultationType')}
                      className="text-amber-400 focus:ring-amber-400"
                    />
                    <span className="text-xs font-medium text-slate-200">Indore Office</span>
                  </label>
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Preferred Date (Mon–Sat) <span className="text-amber-400">*</span>
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  {...register('preferredDate', { required: 'Please select a preferred date' })}
                  className="w-full bg-slate-900/80 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all"
                />
                {errors.preferredDate && (
                  <p className="text-xs text-rose-400 mt-1">{errors.preferredDate.message}</p>
                )}
              </div>

              {/* Preferred Time (Consultation Hours: 3 PM - 8 PM) */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Preferred Time (3:00 PM – 8:00 PM) <span className="text-amber-400">*</span>
                </label>
                <select
                  {...register('preferredTime', { required: 'Please select a preferred time' })}
                  className="w-full bg-slate-900/90 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all"
                >
                  <option value="03:00 PM">03:00 PM</option>
                  <option value="03:30 PM">03:30 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="04:30 PM">04:30 PM</option>
                  <option value="05:00 PM">05:00 PM</option>
                  <option value="05:30 PM">05:30 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                  <option value="06:30 PM">06:30 PM</option>
                  <option value="07:00 PM">07:00 PM</option>
                  <option value="07:30 PM">07:30 PM</option>
                </select>
              </div>
            </div>
          </div>

          {/* Optional Birth Details for Astrology */}
          <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-amber-300">
                Birth Details (Recommended for Kundali Analysis)
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">Optional</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Date of Birth</label>
                <input
                  type="date"
                  {...register('birthDate')}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Exact Birth Time</label>
                <input
                  type="time"
                  {...register('birthTime')}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Birth Place (City, State)</label>
                <input
                  type="text"
                  placeholder="e.g. Indore, MP"
                  {...register('birthPlace')}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Message / Concern */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Your Concern / Specific Questions
            </label>
            <textarea
              rows="3"
              placeholder="Briefly describe your career, relationship, home Vastu, or business question..."
              {...register('message', {
                maxLength: { value: 1000, message: 'Message cannot exceed 1000 characters' },
              })}
              className="w-full bg-slate-900/80 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all"
            />
          </div>

          {/* Pending Approval notice */}
          <div className="text-xs text-slate-400 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
            ℹ️ <strong>Status Notice:</strong> Submitted appointments are placed in{' '}
            <span className="text-amber-400 font-semibold">Pending Approval</span> until confirmed by Nitika Mehra to ensure schedule synchronization.
          </div>

          {/* Submit Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-gold w-full sm:flex-1 py-4 text-base font-bold flex items-center justify-center gap-2 shadow-gold-glow"
            >
              {isSubmitting ? (
                <>
                  <span className="w-5 h-5 border-2 border-cosmic-darkest border-t-transparent rounded-full animate-spin" />
                  <span>Submitting Request...</span>
                </>
              ) : (
                <>
                  <Calendar className="w-5 h-5" />
                  <span>Submit Appointment Request</span>
                </>
              )}
            </button>

            {/* Direct WhatsApp booking option */}
            <a
              href={getWhatsAppLink(whatsappBookingText)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-emerald-500/50 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 text-sm font-semibold transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Book via WhatsApp Instead</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
};

export default BookingForm;
