import React, { useState, useEffect } from 'react';
import { Sparkles, Plus, Edit, Trash2, CheckCircle, X, ArrowRight } from 'lucide-react';
import { servicesService } from '../../services/api';

const AdminServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingService, setEditingService] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [actionSuccess, setActionSuccess] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    fullDescription: '',
    iconName: 'Sparkles',
    imageUrl: '',
    keyOfferingsText: '',
  });

  const fetchServices = async () => {
    setLoading(true);
    try {
      const res = await servicesService.getAll();
      if (res.success) {
        setServices(res.services || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleEditClick = (srv) => {
    setEditingService(srv);
    setFormData({
      title: srv.title,
      shortDescription: srv.shortDescription,
      fullDescription: srv.fullDescription,
      iconName: srv.iconName || 'Sparkles',
      imageUrl: srv.imageUrl || '',
      keyOfferingsText: (srv.keyOfferings || []).join('\n'),
    });
    setIsAdding(false);
  };

  const handleAddClick = () => {
    setEditingService(null);
    setFormData({
      title: '',
      shortDescription: '',
      fullDescription: '',
      iconName: 'Sparkles',
      imageUrl: '',
      keyOfferingsText: '',
    });
    setIsAdding(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        title: formData.title,
        shortDescription: formData.shortDescription,
        fullDescription: formData.fullDescription,
        iconName: formData.iconName,
        imageUrl: formData.imageUrl,
        keyOfferings: formData.keyOfferingsText
          .split('\n')
          .map((s) => s.trim())
          .filter(Boolean),
      };

      if (isAdding) {
        await servicesService.create(payload);
        setActionSuccess('New service created successfully');
      } else if (editingService) {
        await servicesService.update(editingService._id, payload);
        setActionSuccess('Service updated successfully');
      }

      setIsAdding(false);
      setEditingService(null);
      fetchServices();
      setTimeout(() => setActionSuccess(null), 3000);
    } catch (err) {
      alert(err.response?.data?.message || 'Error saving service');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        await servicesService.delete(id);
        setActionSuccess('Service deleted successfully');
        fetchServices();
        setTimeout(() => setActionSuccess(null), 3000);
      } catch (err) {
        alert('Failed to delete service');
      }
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Manage <span className="gold-gradient-text">Services</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Edit service offerings, descriptions, and create new spiritual consultations.
          </p>
        </div>

        <button
          onClick={handleAddClick}
          className="btn-gold !py-2 !px-4 text-xs font-bold flex items-center gap-1.5 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Service</span>
        </button>
      </div>

      {actionSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-sm flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{actionSuccess}</span>
        </div>
      )}

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((srv) => (
          <div
            key={srv._id}
            className="rounded-3xl glass-panel border border-amber-500/20 p-5 flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="h-40 w-full rounded-2xl overflow-hidden bg-slate-900 mb-4">
                <img src={srv.imageUrl} alt={srv.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">{srv.title}</h3>
              <p className="text-xs text-slate-300 font-light mt-1.5 line-clamp-3">
                {srv.shortDescription}
              </p>

              <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] text-amber-300">
                Offerings count: {(srv.keyOfferings || []).length}
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-800">
              <span className="text-[11px] text-slate-400 font-mono">/{srv.slug}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleEditClick(srv)}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-amber-300"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(srv._id)}
                  className="p-1.5 rounded-lg bg-slate-800 text-rose-400 hover:text-rose-300"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Add / Edit */}
      {(isAdding || editingService) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <form
            onSubmit={handleFormSubmit}
            className="rounded-3xl glass-panel border border-amber-500/40 p-6 sm:p-8 max-w-xl w-full max-h-[90vh] overflow-y-auto space-y-4 shadow-2xl relative"
          >
            <button
              type="button"
              onClick={() => {
                setIsAdding(false);
                setEditingService(null);
              }}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-xl font-bold text-white">
              {isAdding ? 'Create New Service' : `Edit: ${editingService.title}`}
            </h3>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Service Title</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Short Description (Cards)
              </label>
              <textarea
                rows="2"
                required
                value={formData.shortDescription}
                onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Full Description (Detail Page)
              </label>
              <textarea
                rows="4"
                required
                value={formData.fullDescription}
                onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Image URL</label>
              <input
                type="text"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                placeholder="https://images.unsplash.com/..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Key Offerings (1 per line)
              </label>
              <textarea
                rows="4"
                value={formData.keyOfferingsText}
                onChange={(e) => setFormData({ ...formData, keyOfferingsText: e.target.value })}
                placeholder="Birth Chart Analysis&#10;Career Guidance&#10;Relationship Advice"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
              />
            </div>

            <div className="flex justify-end gap-3 pt-3">
              <button
                type="button"
                onClick={() => {
                  setIsAdding(false);
                  setEditingService(null);
                }}
                className="btn-outline-gold !py-2 !px-4 text-xs"
              >
                Cancel
              </button>
              <button type="submit" className="btn-gold !py-2 !px-4 text-xs font-bold">
                Save Service
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminServicesPage;
