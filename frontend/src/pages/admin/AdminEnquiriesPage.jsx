import React, { useState, useEffect } from 'react';
import {
  Mail,
  Search,
  Filter,
  Trash2,
  CheckCircle,
  MessageCircle,
  Phone,
  Clock,
  User,
} from 'lucide-react';
import { contactService } from '../../services/api';

const AdminEnquiriesPage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [actionSuccess, setActionSuccess] = useState(null);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const res = await contactService.getAll({
        status: statusFilter,
        search: searchTerm,
      });
      if (res.success) {
        setContacts(res.contacts || []);
      }
    } catch (err) {
      console.error('Error fetching contacts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, [statusFilter]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchContacts();
  };

  const handleStatusChange = async (id, status) => {
    try {
      const res = await contactService.updateStatus(id, status);
      if (res.success) {
        setActionSuccess(`Enquiry status updated to ${status}`);
        fetchContacts();
        setTimeout(() => setActionSuccess(null), 3000);
      }
    } catch (err) {
      alert('Failed to update enquiry status');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this enquiry?')) {
      try {
        const res = await contactService.delete(id);
        if (res.success) {
          setActionSuccess('Enquiry deleted successfully');
          fetchContacts();
          setTimeout(() => setActionSuccess(null), 3000);
        }
      } catch (err) {
        alert('Failed to delete enquiry');
      }
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="border-b border-slate-800 pb-5">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">
          Client <span className="gold-gradient-text">Enquiries</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Messages received from the contact page and enquiry forms.
        </p>
      </div>

      {actionSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-sm flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{actionSuccess}</span>
        </div>
      )}

      {/* Search and Filters */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <form onSubmit={handleSearchSubmit} className="md:col-span-8 flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by name, phone, email, or subject..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          </div>
          <button type="submit" className="btn-gold !py-2.5 !px-5 text-xs font-bold">
            Search
          </button>
        </form>

        <div className="md:col-span-4 flex items-center gap-2">
          <Filter className="w-4 h-4 text-amber-400 shrink-0" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none"
          >
            <option value="all">All Statuses</option>
            <option value="New">New</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
            <option value="Archived">Archived</option>
          </select>
        </div>
      </div>

      {/* Enquiries Grid */}
      {loading ? (
        <div className="p-12 text-center text-sm text-slate-400">Loading enquiries...</div>
      ) : contacts.length === 0 ? (
        <div className="p-12 text-center text-sm text-slate-400">No client enquiries found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((c) => (
            <div
              key={c._id}
              className="p-6 rounded-3xl glass-panel border border-amber-500/20 hover:border-amber-400/40 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-base text-white">{c.name}</span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{new Date(c.createdAt).toLocaleDateString()}</span>
                  </span>
                </div>

                <div className="text-xs text-slate-300 flex flex-wrap gap-3">
                  <a
                    href={`tel:${c.mobileNumber}`}
                    className="text-amber-300 hover:underline flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3 text-amber-400" />
                    <span>{c.mobileNumber}</span>
                  </a>
                  <a
                    href={`mailto:${c.email}`}
                    className="text-slate-300 hover:text-amber-300 flex items-center gap-1"
                  >
                    <Mail className="w-3 h-3 text-amber-400" />
                    <span>{c.email}</span>
                  </a>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-semibold text-amber-400 block mb-1">
                    Subject: {c.subject}
                  </span>
                  <p className="text-xs text-slate-200 bg-slate-900/80 p-3 rounded-xl border border-slate-800 leading-relaxed">
                    {c.message}
                  </p>
                </div>
              </div>

              {/* Status & Actions */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-400">Status:</span>
                  <select
                    value={c.status}
                    onChange={(e) => handleStatusChange(c._id, e.target.value)}
                    className="bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-xs text-white"
                  >
                    <option value="New">New</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                    <option value="Archived">Archived</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/91${c.mobileNumber.replace(
                      /[^0-9]/g,
                      ''
                    )}?text=${encodeURIComponent(
                      `Hello ${c.name}, thank you for contacting Astronit. Regarding your enquiry: "${c.subject}":`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition-colors"
                    title="WhatsApp Reply"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => handleDelete(c._id)}
                    className="p-2 rounded-xl bg-slate-800 text-rose-400 hover:bg-rose-950/50 hover:text-rose-300 transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminEnquiriesPage;
