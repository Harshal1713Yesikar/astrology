const express = require('express');
const router = express.Router();
const {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
  getAppointmentStats,
} = require('../controllers/appointmentController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', createAppointment);
router.get('/', protect, getAppointments);
router.get('/stats', protect, getAppointmentStats);
router.get('/:id', protect, getAppointmentById);
router.put('/:id', protect, updateAppointment);
router.delete('/:id', protect, deleteAppointment);

module.exports = router;
