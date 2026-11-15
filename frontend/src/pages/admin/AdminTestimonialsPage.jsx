import React, { useState, useEffect } from 'react';
import { Star, Plus, Edit, Trash2, CheckCircle, X, Quote } from 'lucide-react';
import { testimonialService } from '../../services/api';

const AdminTestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [actionSuccess, setActionSuccess] = useState(null);

  const [formData, setFormData] = useState({
    clientName: '',
    location: 'Indore, MP',
    serviceTaken: 'Astrology Consultation',
    review: '',
    rating: 5,
    isFeatured: true,
  });

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const res = await testimonialService.getAdminAll();
      if (res.success) {
        setTestimonials(res.testimonials || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleEditClick = (t) => {
    setEditingTestimonial(t);
    setFormData({
      clientName: t.clientName,
      location: t.location,
      serviceTaken: t.serviceTaken,
      review: t.review,
      rating: t.rating || 5,
      isFeatured: t.isFeatured !== undefined ? t.isFeatured : true,
    });
    setIsAdding(false);
  };

  const handleAddClick = () => {
    setEditingTestimonial(null);
    setFormData({
      clientName: '',
      location: 'Indore, MP',
      serviceTaken: 'Astrology Consultation',
      review: '',
      rating: 5,
      isFeatured: true,
    });
    setIsAdding(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isAdding) {
        await testimonialService.create(formData);
        setActionSuccess('Genuine client testimonial added successfully');
      } else if (editingTestimonial) {
        await testimonialService.update(editingTestimonial._id, formData);
        setActionSuccess('Testimonial updated successfully');
      }

      setIsAdding(false);
      setEditingTestimonial(null);
      fetchTestimonials();
      setTimeout(() => setActionSuccess(null), 3000);
    } catch (err) {
      alert(err.response?.data?.message || 'Error saving testimonial');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this testimonial?')) {
      try {
        await testimonialService.delete(id);
        setActionSuccess('Testimonial deleted successfully');
        fetchTestimonials();
        setTimeout(() => setActionSuccess(null), 3000);
      } catch (err) {
        alert('Failed to delete testimonial');
      }
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Manage <span className="gold-gradient-text">Testimonials</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Publish and manage authentic feedback from clients consulted by Nitika Mehra.
          </p>
        </div>

        <button
          onClick={handleAddClick}
          className="btn-gold !py-2 !px-4 text-xs font-bold flex items-center gap-1.5 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add Genuine Testimonial</span>
        </button>
      </div>

      {actionSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-sm flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{actionSuccess}</span>
        </div>
      )}

      {/* Testimonials List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div
            key={t._id}
            className="rounded-3xl glass-panel border border-amber-500/20 p-6 flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                    t.isFeatured ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {t.isFeatured ? 'Featured on Home' : 'Hidden'}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                "{t.review}"
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="font-serif font-bold text-sm text-white">{t.clientName}</h4>
                <p className="text-[11px] text-slate-400">
                  {t.location} • <span className="text-amber-300">{t.serviceTaken}</span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleEditClick(t)}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-amber-300"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(t._id)}
                  className="p-1.5 rounded-lg bg-slate-800 text-rose-400 hover:text-rose-300"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Modal */}
      {(isAdding || editingTestimonial) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <form
            onSubmit={handleFormSubmit}
            className="rounded-3xl glass-panel border border-amber-500/40 p-6 sm:p-8 max-w-md w-full space-y-4 shadow-2xl relative"
          >
            <button
              type="button"
              onClick={() => {
                setIsAdding(false);
                setEditingTestimonial(null);
              }}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-xl font-bold text-white">
              {isAdding ? 'Add Client Testimonial' : 'Edit Testimonial'}
            </h3>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Client Name</label>
              <input
                type="text"
                required
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                placeholder="e.g. Rajesh Sharma"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Indore, MP"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Service Taken</label>
              <input
                type="text"
                value={formData.serviceTaken}
                onChange={(e) => setFormData({ ...formData, serviceTaken: e.target.value })}
                placeholder="e.g. Kundali & Business Guidance"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Rating (1 to 5)</label>
              <select
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
              >
                <option value="5">5 Stars (Excellent)</option>
                <option value="4">4 Stars (Very Good)</option>
                <option value="3">3 Stars (Good)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Client Review / Feedback
              </label>
              <textarea
                rows="4"
                required
                value={formData.review}
                onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                placeholder="What the client experienced during their session..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="isFeatured"
                checked={formData.isFeatured}
                onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                className="rounded border-slate-700 text-amber-500"
              />
              <label htmlFor="isFeatured" className="text-xs text-slate-300 cursor-pointer">
                Feature prominently on Home Page
              </label>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsAdding(false);
                  setEditingTestimonial(null);
                }}
                className="btn-outline-gold !py-2 !px-4 text-xs"
              >
                Cancel
              </button>
              <button type="submit" className="btn-gold !py-2 !px-4 text-xs font-bold">
                Save Testimonial
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminTestimonialsPage;
