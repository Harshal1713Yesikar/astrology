import axios from 'axios';

// Vite proxy forwards /api to backend, or fallback to http://localhost:5000/api
const API_BASE = '/api';

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request interceptor to attach JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('astronit_admin_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      if (window.location.pathname.startsWith('/admin') && window.location.pathname !== '/admin/login') {
        localStorage.removeItem('astronit_admin_token');
        localStorage.removeItem('astronit_admin_user');
        window.location.href = '/admin/login';
      }
    }
    return Promise.reject(error);
  }
);

// Auth Services
export const authService = {
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },
  getMe: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  },
  updatePassword: async (data) => {
    const response = await api.put('/auth/updatepassword', data);
    return response.data;
  },
};

// Appointment Services
export const appointmentService = {
  create: async (appointmentData) => {
    const response = await api.post('/appointments', appointmentData);
    return response.data;
  },
  getAll: async (params) => {
    const response = await api.get('/appointments', { params });
    return response.data;
  },
  getById: async (id) => {
    const response = await api.get(`/appointments/${id}`);
    return response.data;
  },
  update: async (id, data) => {
    const response = await api.put(`/appointments/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/appointments/${id}`);
    return response.data;
  },
  getStats: async () => {
    const response = await api.get('/appointments/stats');
    return response.data;
  },
};

// Contact Services
export const contactService = {
  submit: async (contactData) => {
    const response = await api.post('/contact', contactData);
    return response.data;
  },
  getAll: async (params) => {
    const response = await api.get('/contact', { params });
    return response.data;
  },
  updateStatus: async (id, status) => {
    const response = await api.put(`/contact/${id}`, { status });
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/contact/${id}`);
    return response.data;
  },
};

// Services Endpoints
export const servicesService = {
  getAll: async () => {
    const response = await api.get('/services');
    return response.data;
  },
  getBySlug: async (slug) => {
    const response = await api.get(`/services/${slug}`);
    return response.data;
  },
  create: async (data) => {
    const response = await api.post('/services', data);
    return response.data;
  },
  update: async (id, data) => {
    const response = await api.put(`/services/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/services/${id}`);
    return response.data;
  },
};

// Testimonials Endpoints
export const testimonialService = {
  getFeatured: async () => {
    const response = await api.get('/testimonials');
    return response.data;
  },
  getAdminAll: async () => {
    const response = await api.get('/testimonials/admin');
    return response.data;
  },
  create: async (data) => {
    const response = await api.post('/testimonials', data);
    return response.data;
  },
  update: async (id, data) => {
    const response = await api.put(`/testimonials/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/testimonials/${id}`);
    return response.data;
  },
};

// FAQ Endpoints
export const faqService = {
  getAll: async (params) => {
    const response = await api.get('/faqs', { params });
    return response.data;
  },
  getAdminAll: async () => {
    const response = await api.get('/faqs/admin');
    return response.data;
  },
  create: async (data) => {
    const response = await api.post('/faqs', data);
    return response.data;
  },
  update: async (id, data) => {
    const response = await api.put(`/faqs/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/faqs/${id}`);
    return response.data;
  },
};

// Settings Endpoints
export const settingsService = {
  get: async () => {
    const response = await api.get('/settings');
    return response.data;
  },
  update: async (data) => {
    const response = await api.put('/settings', data);
    return response.data;
  },
};

export default api;
