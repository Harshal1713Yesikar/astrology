import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import { contactService } from '../services/api';
import { BRAND_INFO, getWhatsAppLink } from '../utils/constants';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      mobileNumber: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const res = await contactService.submit(data);
      if (res.success) {
        setSubmitSuccess(true);
        reset();
      }
    } catch (err) {
      setServerError(
        err.response?.data?.message || 'Unable to submit your message. Please reach out via WhatsApp or call us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Get In Touch</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Contact <span className="gold-gradient-text">Astronit</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Have questions regarding your Kundali, office Vastu, or spiritual remedies? Nitika Mehara
            and our team are here to guide you.
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details Card Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl glass-panel border border-amber-500/30 p-6 sm:p-8 space-y-6 shadow-2xl">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-400">
                  ASTRONIT – Astrology & Spiritual Guidance
                </span>
                <h2 className="font-serif text-2xl font-bold text-white mt-1">
                  Nitika Mehara
                </h2>
                <p className="text-xs text-amber-300 font-medium">Astrologer and Vastu Expert</p>
              </div>

              {/* Address */}
              <div className="space-y-4 text-sm text-slate-300 pt-2 border-t border-slate-800">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-white text-xs uppercase tracking-wider mb-0.5">
                      Consultation Center Address
                    </span>
                    <address className="not-italic text-xs text-slate-300 leading-relaxed">
                      32, New Abhishek Nagar, Musakhedi,
                      <br />
                      Indore, Madhya Pradesh – 452001, India
                    </address>
                  </div>
                </div>

                {/* Contact Numbers */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-white text-xs uppercase tracking-wider mb-0.5">
                      Contact Numbers (Click to Call)
                    </span>
                    <div className="flex flex-col gap-1 text-sm">
                      <a
                        href={`tel:${BRAND_INFO.phone1}`}
                        className="text-amber-300 hover:text-amber-200 font-semibold"
                      >
                        +91 {BRAND_INFO.phone1}
                      </a>
                      <a
                        href={`tel:${BRAND_INFO.phone2}`}
                        className="text-amber-300 hover:text-amber-200 font-semibold"
                      >
                        +91 {BRAND_INFO.phone2}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Consultation Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-white text-xs uppercase tracking-wider mb-0.5">
                      Consultation Timings
                    </span>
                    <p className="text-xs text-slate-300">Monday to Saturday</p>
                    <p className="text-sm font-semibold text-amber-400">3:00 PM – 8:00 PM (IST)</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Sunday Closed</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-white text-xs uppercase tracking-wider mb-0.5">
                      Email Address
                    </span>
                    <a
                      href="mailto:contact@astronit.com"
                      className="text-xs text-slate-300 hover:text-amber-300"
                    >
                      contact@astronit.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Quick WhatsApp */}
              <div className="pt-2">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-emerald-500/50 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 text-sm font-semibold transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp (+91 {BRAND_INFO.phone1})</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-panel border border-amber-500/30 p-6 sm:p-8 md:p-10 shadow-2xl relative">
              <h2 className="font-serif text-2xl font-bold text-white mb-2">Send an Enquiry</h2>
              <p className="text-xs sm:text-sm text-slate-300 font-light mb-6">
                Fill in your enquiry details below. Nitika Mehara will personally review your message
                and respond during consultation hours.
              </p>

              {submitSuccess ? (
                <div className="p-8 rounded-2xl bg-slate-900/90 border border-emerald-500/40 text-center space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 font-light max-w-md mx-auto">
                    Thank you for reaching out to Astronit. Nitika Mehara will review your message
                    and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="btn-outline-gold !py-2 !px-4 text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {serverError && (
                    <div className="p-3.5 rounded-xl bg-rose-950/50 border border-rose-500/40 text-rose-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Your Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Nitin Verma"
                        {...register('name', { required: 'Please enter your name' })}
                        className="w-full bg-slate-900/80 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all"
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-400 mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Mobile */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Phone Number <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 8959235176"
                        {...register('mobileNumber', {
                          required: 'Please enter your contact number',
                        })}
                        className="w-full bg-slate-900/80 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all"
                      />
                      {errors.mobileNumber && (
                        <p className="text-xs text-rose-400 mt-1">{errors.mobileNumber.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Email Address <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. nitin@example.com"
                        {...register('email', {
                          required: 'Please enter your email',
                          pattern: {
                            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                            message: 'Valid email is required',
                          },
                        })}
                        className="w-full bg-slate-900/80 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all"
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-400 mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Subject <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Kundali Match or Home Vastu Enquiry"
                        {...register('subject', { required: 'Please enter a subject' })}
                        className="w-full bg-slate-900/80 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all"
                      />
                      {errors.subject && (
                        <p className="text-xs text-rose-400 mt-1">{errors.subject.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Message or Concern <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Please share details of your query..."
                      {...register('message', { required: 'Please write your message' })}
                      className="w-full bg-slate-900/80 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all"
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2 shadow-gold-glow"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-cosmic-darkest border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Location & Google Maps Section */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Find Our Office
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Location in Musakhedi, Indore
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              32, New Abhishek Nagar, Musakhedi, Indore, Madhya Pradesh – 452001
            </p>
          </div>

          <div className="rounded-3xl glass-panel border border-amber-500/30 overflow-hidden shadow-2xl h-80 sm:h-96 w-full relative">
            <iframe
              title="Astronit Astrology & Vastu Consultation Indore Location"
              src={BRAND_INFO.googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
