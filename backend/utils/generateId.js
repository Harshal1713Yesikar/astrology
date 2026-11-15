/**
 * Generate a unique, professional appointment reference ID.
 * Format: AST-YYYYMM-XXXX (e.g. AST-202611-4891)
 */
const generateAppointmentId = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const randomDigits = Math.floor(1000 + Math.random() * 9000);
  return `AST-${year}${month}-${randomDigits}`;
};

module.exports = {
  generateAppointmentId,
};
