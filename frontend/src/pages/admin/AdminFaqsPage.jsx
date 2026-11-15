import React, { useState, useEffect } from 'react';
import { HelpCircle, Plus, Edit, Trash2, CheckCircle, X } from 'lucide-react';
import { faqService } from '../../services/api';

const AdminFaqsPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingFaq, setEditingFaq] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [actionSuccess, setActionSuccess] = useState(null);

  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    category: 'General',
  });

  const fetchFaqs = async () => {
    setLoading(true);
    try {
      const res = await faqService.getAdminAll();
      if (res.success) {
        setFaqs(res.faqs || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  const handleEditClick = (faq) => {
    setEditingFaq(faq);
    setFormData({
      question: faq.question,
      answer: faq.answer,
      category: faq.category || 'General',
    });
    setIsAdding(false);
  };

  const handleAddClick = () => {
    setEditingFaq(null);
    setFormData({
      question: '',
      answer: '',
      category: 'General',
    });
    setIsAdding(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isAdding) {
        await faqService.create(formData);
        setActionSuccess('FAQ created successfully');
      } else if (editingFaq) {
        await faqService.update(editingFaq._id, formData);
        setActionSuccess('FAQ updated successfully');
      }

      setIsAdding(false);
      setEditingFaq(null);
      fetchFaqs();
      setTimeout(() => setActionSuccess(null), 3000);
    } catch (err) {
      alert(err.response?.data?.message || 'Error saving FAQ');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this FAQ?')) {
      try {
        await faqService.delete(id);
        setActionSuccess('FAQ deleted successfully');
        fetchFaqs();
        setTimeout(() => setActionSuccess(null), 3000);
      } catch (err) {
        alert('Failed to delete FAQ');
      }
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Manage <span className="gold-gradient-text">FAQs</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Edit common questions and answers displayed on the home page and services.
          </p>
        </div>

        <button
          onClick={handleAddClick}
          className="btn-gold !py-2 !px-4 text-xs font-bold flex items-center gap-1.5 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add New FAQ</span>
        </button>
      </div>

      {actionSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-sm flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{actionSuccess}</span>
        </div>
      )}

      {/* FAQs List */}
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq._id}
            className="rounded-2xl glass-panel border border-amber-500/20 p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
          >
            <div className="space-y-1.5 flex-1">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-amber-300 font-semibold uppercase tracking-wider">
                {faq.category}
              </span>
              <h3 className="font-serif font-bold text-base text-white">{faq.question}</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {faq.answer}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => handleEditClick(faq)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-amber-300"
              >
                <Edit className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDelete(faq._id)}
                className="p-1.5 rounded-lg bg-slate-800 text-rose-400 hover:text-rose-300"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Add / Edit */}
      {(isAdding || editingFaq) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <form
            onSubmit={handleFormSubmit}
            className="rounded-3xl glass-panel border border-amber-500/40 p-6 sm:p-8 max-w-lg w-full space-y-4 shadow-2xl relative"
          >
            <button
              type="button"
              onClick={() => {
                setIsAdding(false);
                setEditingFaq(null);
              }}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-xl font-bold text-white">
              {isAdding ? 'Create New FAQ' : 'Edit FAQ'}
            </h3>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
              >
                <option value="General">General</option>
                <option value="Astrology">Astrology</option>
                <option value="Vastu">Vastu</option>
                <option value="Booking">Booking</option>
                <option value="Remedies">Remedies</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Question</label>
              <input
                type="text"
                required
                value={formData.question}
                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                placeholder="e.g. Do I need my birth details for an astrology consultation?"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Answer</label>
              <textarea
                rows="4"
                required
                value={formData.answer}
                onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                placeholder="Explain the answer clearly..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsAdding(false);
                  setEditingFaq(null);
                }}
                className="btn-outline-gold !py-2 !px-4 text-xs"
              >
                Cancel
              </button>
              <button type="submit" className="btn-gold !py-2 !px-4 text-xs font-bold">
                Save FAQ
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminFaqsPage;
