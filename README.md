# ASTRONIT – Astrology & Spiritual Guidance

> **"Discover Your Path. Align Your Energy. Create a Better Tomorrow."**  
> Premium MERN Stack Astrology & Spiritual Guidance Platform for **Nitika Mehra** (Astrologer and Vastu Expert, Indore).

---

## 🌟 Brand Information

- **Brand Name**: ASTRONIT
- **Tagline**: Astrology & Spiritual Guidance
- **Consultant**: Nitika Mehra
- **Profession**: Astrologer and Vastu Expert
- **Address**: 32, New Abhishek Nagar, Musakhedi, Indore, Madhya Pradesh – 452001, India
- **Contact Numbers**:
  - `+91 8959235176`
  - `+91 7869608159`
- **WhatsApp Integration**: `+91 8959231576`
- **Consultation Timings**: Monday to Saturday, 3:00 PM – 8:00 PM (Sunday Closed)

---

## 🚀 Technology Stack

### Frontend
- **React.js 18** with **Vite**
- **Tailwind CSS** (Custom cosmic theme, deep navy blue `#030712`, royal purple, rich gold gradients & glassmorphism)
- **React Router DOM v6** (Nested routes, breadcrumbs, protected admin guard)
- **Lucide React Icons**
- **React Hook Form** (Form validation, regex telephone check)
- **Axios** (With JWT Bearer request interceptors)
- **Framer Motion & Canvas Confetti**

### Backend
- **Node.js** & **Express.js**
- **MongoDB** & **Mongoose** (Full schema models, validation, indexing)
- **JWT (JSON Web Token)** Authentication
- **bcryptjs** (Salted password hashing)
- **Helmet** (Security HTTP headers) & **Morgan** (HTTP request logger)
- **CORS** enabled

---

## 🌌 Core Features

### 1. Luxury Celestial UI/UX
- Deep navy background (`#030712`, `#070D1E`), royal purple nebulas, and warm golden celestial glows.
- Custom astrological graphics, zodiac orbit rings, and subtle twinkling starry canvas.
- 100% mobile-first responsive layout with accessible interactive components.

### 2. Website Pages (13 Public Pages + Admin Suite)
1. **Home (`/`)**: Hero section, consultant preview, services overview, why choose us, consultation process, genuine client testimonials, FAQs, and high-impact CTA banner.
2. **About Us (`/about`)**: Meet Nitika Mehra, philosophy, credentials, mission, vision, and personal consultation approach.
3. **Services Catalog (`/services`)**: Comprehensive overview of all 6 specialized consultations with direct booking and WhatsApp enquiry buttons.
4. **Astrology Consultation (`/services/astrology-consultation`)**: Birth Chart (Kundali) analysis, planetary transits, career, marriage, business, Mahadasha/Antardasha, and personalised remedies.
5. **Vastu Consultation (`/services/vastu-consultation`)**: Residential & commercial Vastu, direction analysis, element balancing, and non-demolition corrections.
6. **Numerology Consultation (`/services/numerology`)**: Name numerology, mobile & business brand numerology, lucky numbers, and name correction guidance.
7. **Nine Gemstones (Navratna) (`/services/navratna-gemstones`)**: Personalised gemstone recommendations based strictly on Kundali ascendant and planetary strength.
8. **Crystal Healing (`/services/crystal-healing`)**: Natural authentic crystals for career prosperity, protection, meditation, chakra balance, and positive energy.
9. **Spiritual Remedies (`/services/spiritual-remedies`)**: Traditional planetary remedies, Rahu-Ketu relief, sacred Rudraksha, pure camphor, and Dhan Lakshmi potlis.
10. **Contact Us (`/contact`)**: Form with database persistence, interactive Google Maps embed for Musakhedi Indore, business timings, and click-to-call buttons.
11. **Book Consultation (`/book-consultation`)**: Complete scheduling form with validation, preferred date/time slot, online/offline selector, and birth details.
12. **Privacy Policy (`/privacy-policy`)**: Client confidentiality commitment, data protection, and contact information.
13. **Terms & Conditions (`/terms-and-conditions`)**: Transparent advisory guidelines and mandatory legal disclaimer.

### 3. Consultation Booking Engine
- Generates unique appointment ID (`AST-YYYYMM-XXXX`).
- Validates 10-digit mobile numbers and email addresses.
- Places bookings into **Pending Approval** status so Nitika Mehra can review slots before confirming.
- Pre-filled WhatsApp booking link dynamically constructed from user input.

### 4. Direct WhatsApp & Call Integration
- Floating pulsing WhatsApp button on all pages with pre-filled message:
  `"Hello Astronit, I would like to enquire about your astrology and Vastu consultation services. Please share the details."`
- Floating click-to-call menu with direct links to both `+91 8959235176` and `+91 7869608159`.
- WhatsApp enquiry button on every individual service card.

### 5. Secure Admin Dashboard (`/admin`)
- Accessible only via authenticated JWT login (no public registration).
- **Dashboard Overview**: Real-time counters for Total Appointments, Pending Approval, Approved/Confirmed, and Client Enquiries.
- **Appointment Management**: View full customer details, update status (`Pending`, `Approved`, `Rescheduled`, `Completed`, `Cancelled`), record admin consultation notes, and send instant WhatsApp confirmations.
- **Enquiry Management**: Review contact form messages, update status (`New`, `In Progress`, `Resolved`, `Archived`), and direct WhatsApp reply.
- **Service Management**: Add, update, and manage services and offerings.
- **Testimonial Management**: Add and curate verified genuine client reviews.
- **FAQ Management**: Edit and publish questions and answers.
- **Settings Management**: Live update of consultation timings, address, phone numbers, WhatsApp text, and admin password change.

---

## 🔐 Default Admin Credentials

- **Admin Login URL**: `http://localhost:5173/admin/login`
- **Email**: `admin@astronit.com`
- **Password**: `Astronit@2026`

*(Admin password can be updated securely inside `/admin/settings`)*

---

## 📡 REST API Documentation

### Authentication
- `POST /api/auth/login` - Admin login (returns JWT token and admin info)
- `GET /api/auth/me` - Get logged-in admin profile *(Protected)*
- `PUT /api/auth/updatepassword` - Change admin password *(Protected)*

### Appointments
- `POST /api/appointments` - Book appointment (generates unique ID, status: Pending)
- `GET /api/appointments` - List all appointments with status filtering & search *(Protected)*
- `GET /api/appointments/stats` - Summary statistics for dashboard *(Protected)*
- `GET /api/appointments/:id` - Single appointment details *(Protected)*
- `PUT /api/appointments/:id` - Update status, slot, or admin notes *(Protected)*
- `DELETE /api/appointments/:id` - Delete appointment record *(Protected)*

### Contact & Enquiries
- `POST /api/contact` - Submit contact enquiry
- `GET /api/contact` - List all enquiries with search & filter *(Protected)*
- `PUT /api/contact/:id` - Update enquiry status *(Protected)*
- `DELETE /api/contact/:id` - Delete enquiry *(Protected)*

### Services
- `GET /api/services` - List all active services
- `GET /api/services/:slug` - Single service details
- `POST /api/services` - Create service *(Protected)*
- `PUT /api/services/:id` - Update service *(Protected)*
- `DELETE /api/services/:id` - Delete service *(Protected)*

### Testimonials & FAQs
- `GET /api/testimonials` - Public featured genuine testimonials
- `GET /api/testimonials/admin` - All testimonials for admin *(Protected)*
- `POST /api/testimonials` - Add genuine testimonial *(Protected)*
- `PUT /api/testimonials/:id` - Update testimonial *(Protected)*
- `DELETE /api/testimonials/:id` - Delete testimonial *(Protected)*
- `GET /api/faqs` - Public active FAQs
- `POST /api/faqs` - Create FAQ *(Protected)*
- `PUT /api/faqs/:id` - Update FAQ *(Protected)*
- `DELETE /api/faqs/:id` - Delete FAQ *(Protected)*

### Settings
- `GET /api/settings` - Public website settings (timings, phones, address)
- `PUT /api/settings` - Update settings *(Protected)*

---

## 🛠️ Project Structure

```
Astrology Website/
├── client/                      # Frontend Vite + React application
│   ├── public/
│   │   ├── favicon.svg          # Celestial golden icon
│   │   ├── robots.txt           # Search engine crawlers config
│   │   └── sitemap.xml          # Search engine XML sitemap
│   ├── src/
│   │   ├── components/
│   │   │   ├── admin/           # Admin layout & modal components
│   │   │   ├── booking/         # Booking form with validation
│   │   │   ├── common/          # Navbar, Footer, WhatsAppFloat, CallFloat, StarryBackground
│   │   │   ├── home/            # Hero, AboutPreview, Services, WhyChooseUs, Process, Reviews, FAQs
│   │   │   └── services/        # ServiceDetailLayout, ServiceCards
│   │   ├── context/
│   │   │   └── AuthContext.jsx  # Admin JWT auth provider
│   │   ├── pages/               # All 13 client pages + 8 admin pages
│   │   ├── services/
│   │   │   └── api.js           # Central Axios client
│   │   ├── utils/
│   │   │   └── constants.js     # Brand data, links, helper utilities
│   │   ├── App.jsx              # App routes definition
│   │   ├── index.css            # Custom celestial styles & scrollbar
│   │   └── main.jsx             # React entry point
│   ├── package.json
│   ├── tailwind.config.js       # Luxury theme palette
│   └── vite.config.js           # Dev proxy config
│
├── server/                      # Node.js + Express backend
│   ├── config/
│   │   └── db.js                # MongoDB connection
│   ├── controllers/             # Express route controllers
│   ├── middleware/
│   │   ├── authMiddleware.js    # JWT authorization validator
│   │   └── errorHandler.js      # Global error handler
│   ├── models/                  # Mongoose models (Admin, Appointment, Contact, Service, Testimonial, FAQ, Setting)
│   ├── routes/                  # Express REST routes
│   ├── utils/
│   │   ├── generateId.js        # Unique appointment ID generator
│   │   └── seeder.js            # Initial data seeder
│   ├── .env                     # Server environment variables
│   ├── .env.example
│   ├── package.json
│   └── server.js                # Express main entry point
│
├── package.json                 # Root script orchestrator
└── README.md                    # Project documentation
```

---

## 💻 Installation & Setup Instructions

### Prerequisites
- **Node.js** (v18 or v20+)
- **MongoDB** (Local instance running on `localhost:27017` or MongoDB Atlas URI)

### Quick Start (One Command)
From the root directory:
```bash
# 1. Install all dependencies (root, server, and client)
npm run install-all

# 2. Seed database with services, testimonials, FAQs, and initial admin
npm run seed

# 3. Launch both backend server (port 5000) and frontend (port 5173) simultaneously:
npm run dev
```

### Manual Individual Steps

#### 1. Setup Backend
```bash
cd server
npm install
npm run seed     # Seeds default data & admin: admin@astronit.com / Astronit@2026
npm run dev      # Runs Express backend on http://localhost:5000
```

#### 2. Setup Frontend
```bash
cd client
npm install
npm run dev      # Runs Vite app on http://localhost:5173
```

---

## ⚖️ Mandatory Disclaimer

> *"Astrology, numerology and Vastu consultations are intended for traditional and personal guidance. Outcomes are not guaranteed and should not replace professional medical, legal or financial advice."*
