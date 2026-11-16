import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Calendar,
  Clock,
  Search,
  Filter,
  CheckCircle,
  XCircle,
  Trash2,
  Edit,
  Eye,
  MessageCircle,
  Phone,
  Mail,
  User,
  AlertCircle,
  X,
} from 'lucide-react';
import { appointmentService } from '../../services/api';

const AdminAppointmentsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialStatus = searchParams.get('status') || 'all';

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState(initialStatus);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [actionSuccess, setActionSuccess] = useState(null);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const res = await appointmentService.getAll({
        status: statusFilter,
        search: searchTerm,
      });
      if (res.success) {
        setAppointments(res.appointments || []);
      }
    } catch (err) {
      console.error('Error fetching appointments:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, [statusFilter]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchAppointments();
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await appointmentService.update(id, { status: newStatus });
      if (res.success) {
        setActionSuccess(`Appointment status updated to ${newStatus}`);
        fetchAppointments();
        if (selectedAppointment && selectedAppointment._id === id) {
          setSelectedAppointment(res.appointment);
        }
        setTimeout(() => setActionSuccess(null), 3000);
      }
    } catch (err) {
      alert('Failed to update status');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this appointment record?')) {
      try {
        const res = await appointmentService.delete(id);
        if (res.success) {
          setActionSuccess('Appointment deleted successfully');
          fetchAppointments();
          if (selectedAppointment && selectedAppointment._id === id) {
            setSelectedAppointment(null);
          }
          setTimeout(() => setActionSuccess(null), 3000);
        }
      } catch (err) {
        alert('Failed to delete appointment');
      }
    }
  };

  const handleUpdateNotes = async (e) => {
    e.preventDefault();
    if (!editingAppointment) return;

    try {
      const res = await appointmentService.update(editingAppointment._id, {
        adminNotes: editingAppointment.adminNotes,
        status: editingAppointment.status,
        preferredTime: editingAppointment.preferredTime,
      });

      if (res.success) {
        setActionSuccess('Appointment notes and details updated');
        setEditingAppointment(null);
        fetchAppointments();
        setTimeout(() => setActionSuccess(null), 3000);
      }
    } catch (err) {
      alert('Failed to update notes');
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Manage <span className="gold-gradient-text">Appointments</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Review, approve, reschedule and update booking requests for Nitika Mehara.
          </p>
        </div>
      </div>

      {actionSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-sm flex items-center gap-2 animate-in fade-in duration-200">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{actionSuccess}</span>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Search */}
        <form onSubmit={handleSearchSubmit} className="md:col-span-7 flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by name, phone, email, or AST-ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 focus:border-amber-400 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          </div>
          <button type="submit" className="btn-gold !py-2.5 !px-5 text-xs font-bold">
            Search
          </button>
        </form>

        {/* Status Filter */}
        <div className="md:col-span-5 flex items-center gap-2">
          <Filter className="w-4 h-4 text-amber-400 shrink-0" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none"
          >
            <option value="all">All Statuses</option>
            <option value="Pending">Pending Approval</option>
            <option value="Approved">Approved / Confirmed</option>
            <option value="Rescheduled">Rescheduled</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Appointments List / Table */}
      <div className="rounded-3xl glass-panel border border-amber-500/20 overflow-hidden shadow-2xl">
        {loading ? (
          <div className="p-12 text-center text-sm text-slate-400">Loading appointments...</div>
        ) : appointments.length === 0 ? (
          <div className="p-12 text-center text-sm text-slate-400">
            No appointments found matching your filter criteria.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80 text-[11px] uppercase tracking-wider text-amber-300 font-semibold">
                  <th className="p-4">ID & Date</th>
                  <th className="p-4">Client Name</th>
                  <th className="p-4">Contact</th>
                  <th className="p-4">Service</th>
                  <th className="p-4">Slot</th>
                  <th className="p-4">Mode</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {appointments.map((app) => (
                  <tr key={app._id} className="hover:bg-slate-900/50 transition-colors">
                    <td className="p-4">
                      <span className="font-mono font-bold text-amber-400 block">
                        {app.appointmentId}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {new Date(app.createdAt).toLocaleDateString()}
                      </span>
                    </td>

                    <td className="p-4">
                      <span className="font-semibold text-white block">{app.fullName}</span>
                      <span className="text-[11px] text-slate-400 truncate max-w-[150px] block">
                        {app.email}
                      </span>
                    </td>

                    <td className="p-4">
                      <a
                        href={`tel:${app.mobileNumber}`}
                        className="text-amber-300 hover:underline font-mono text-xs block"
                      >
                        {app.mobileNumber}
                      </a>
                      <a
                        href={`https://wa.me/91${app.mobileNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                          `Hello ${app.fullName}, regarding your appointment (${app.appointmentId}) for ${app.service} with Nitika Mehra at Astronit:`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:underline mt-0.5"
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>WhatsApp Client</span>
                      </a>
                    </td>

                    <td className="p-4 font-medium text-slate-200">{app.service}</td>

                    <td className="p-4">
                      <span className="block text-slate-200">
                        {new Date(app.preferredDate).toLocaleDateString()}
                      </span>
                      <span className="text-[11px] text-amber-300 font-medium">
                        {app.preferredTime}
                      </span>
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-2 py-0.5 rounded-md text-[11px] font-semibold ${
                          app.consultationType === 'Online'
                            ? 'bg-purple-900/40 text-purple-300 border border-purple-500/30'
                            : 'bg-blue-900/40 text-blue-300 border border-blue-500/30'
                        }`}
                      >
                        {app.consultationType}
                      </span>
                    </td>

                    <td className="p-4">
                      <select
                        value={app.status}
                        onChange={(e) => handleStatusChange(app._id, e.target.value)}
                        className={`text-xs font-semibold rounded-lg px-2 py-1 border focus:outline-none ${
                          app.status === 'Approved'
                            ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                            : app.status === 'Pending'
                            ? 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                            : app.status === 'Completed'
                            ? 'bg-indigo-950/80 text-indigo-300 border-indigo-500/40'
                            : 'bg-slate-800 text-slate-400 border-slate-700'
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Rescheduled">Rescheduled</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>

                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setSelectedAppointment(app)}
                          className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-amber-300 hover:bg-slate-700"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => setEditingAppointment(app)}
                          className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-amber-300 hover:bg-slate-700"
                          title="Edit Notes"
                        >
                          <Edit className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleDelete(app._id)}
                          className="p-1.5 rounded-lg bg-slate-800 text-rose-400 hover:text-rose-300 hover:bg-rose-950/40"
                          title="Delete Record"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Appointment Detail Modal */}
      {selectedAppointment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="rounded-3xl glass-panel border border-amber-500/40 p-6 sm:p-8 max-w-xl w-full max-h-[90vh] overflow-y-auto space-y-5 shadow-2xl relative">
            <button
              onClick={() => setSelectedAppointment(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="font-mono text-xs font-bold text-amber-400">
                {selectedAppointment.appointmentId}
              </span>
              <h2 className="font-serif text-2xl font-bold text-white mt-1">
                {selectedAppointment.fullName}
              </h2>
              <span
                className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                  selectedAppointment.status === 'Approved'
                    ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
                    : 'bg-amber-500/10 border-amber-500/40 text-amber-300'
                }`}
              >
                {selectedAppointment.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs text-slate-300 border-y border-slate-800 py-4">
              <div>
                <span className="text-slate-400 block mb-0.5">Contact Phone:</span>
                <span className="text-white font-mono font-semibold">
                  {selectedAppointment.mobileNumber}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Email Address:</span>
                <span className="text-white">{selectedAppointment.email}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Service:</span>
                <span className="text-amber-300 font-semibold">{selectedAppointment.service}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Mode:</span>
                <span className="text-white">{selectedAppointment.consultationType}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Preferred Date:</span>
                <span className="text-white">
                  {new Date(selectedAppointment.preferredDate).toLocaleDateString()}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Preferred Time:</span>
                <span className="text-white">{selectedAppointment.preferredTime}</span>
              </div>
            </div>

            {/* Birth Details */}
            {selectedAppointment.birthDetails && (
              <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs space-y-1">
                <span className="font-semibold text-amber-300 block mb-1">
                  Birth Chart Coordinates:
                </span>
                <p>DOB: {selectedAppointment.birthDetails.birthDate || 'Not provided'}</p>
                <p>Time: {selectedAppointment.birthDetails.birthTime || 'Not provided'}</p>
                <p>Place: {selectedAppointment.birthDetails.birthPlace || 'Not provided'}</p>
              </div>
            )}

            {/* Client Note / Concern */}
            <div>
              <span className="text-xs text-slate-400 block mb-1">Client Note / Concern:</span>
              <p className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200">
                {selectedAppointment.message || 'No specific note added.'}
              </p>
            </div>

            {/* Admin Internal Notes */}
            {selectedAppointment.adminNotes && (
              <div>
                <span className="text-xs text-slate-400 block mb-1">Admin Notes:</span>
                <p className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-amber-200">
                  {selectedAppointment.adminNotes}
                </p>
              </div>
            )}

            <div className="flex justify-end gap-3 pt-2">
              <a
                href={`https://wa.me/91${selectedAppointment.mobileNumber.replace(
                  /[^0-9]/g,
                  ''
                )}?text=${encodeURIComponent(
                  `Hello ${selectedAppointment.fullName}, your consultation (${selectedAppointment.appointmentId}) with Nitika Mehra at Astronit is ${selectedAppointment.status}. Slot: ${selectedAppointment.preferredTime}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold !py-2 !px-4 text-xs font-bold flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Send WhatsApp Update</span>
              </a>
              <button
                onClick={() => setSelectedAppointment(null)}
                className="btn-outline-gold !py-2 !px-4 text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Notes Modal */}
      {editingAppointment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <form
            onSubmit={handleUpdateNotes}
            className="rounded-3xl glass-panel border border-amber-500/40 p-6 sm:p-8 max-w-lg w-full space-y-4 shadow-2xl relative"
          >
            <button
              type="button"
              onClick={() => setEditingAppointment(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-xl font-bold text-white">
              Edit Appointment: {editingAppointment.appointmentId}
            </h3>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Status</label>
              <select
                value={editingAppointment.status}
                onChange={(e) =>
                  setEditingAppointment({ ...editingAppointment, status: e.target.value })
                }
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
              >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rescheduled">Rescheduled</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Consultation Time Slot
              </label>
              <input
                type="text"
                value={editingAppointment.preferredTime}
                onChange={(e) =>
                  setEditingAppointment({
                    ...editingAppointment,
                    preferredTime: e.target.value,
                  })
                }
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Admin Notes (Internal preparation, remedies given, fees, etc.)
              </label>
              <textarea
                rows="4"
                value={editingAppointment.adminNotes || ''}
                onChange={(e) =>
                  setEditingAppointment({
                    ...editingAppointment,
                    adminNotes: e.target.value,
                  })
                }
                placeholder="e.g. Prepared D9 chart. Discussed career change remedies..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setEditingAppointment(null)}
                className="btn-outline-gold !py-2 !px-4 text-xs"
              >
                Cancel
              </button>
              <button type="submit" className="btn-gold !py-2 !px-4 text-xs font-bold">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminAppointmentsPage;
