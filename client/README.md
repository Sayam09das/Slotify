# Slotify Client

A modern slot booking and management system built with React and Vite. Slotify provides an intuitive interface for both users and administrators to manage slot bookings efficiently.

## 🚀 Features

- **User Authentication**: Secure login/register system with OTP verification
- **Dual Dashboard**: Separate interfaces for users and administrators
- **Slot Booking**: Interactive slot selection and booking confirmation
- **Admin Management**: Complete administrative control over slots and bookings
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Modern UI**: Smooth animations with Framer Motion
- **Real-time Notifications**: Toast notifications for user feedback

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.18
- **Routing**: React Router DOM 7.10.1
- **Animations**: Framer Motion 12.23.26
- **Icons**: Lucide React 0.561.0
- **Notifications**: React Toastify 11.0.5
- **Language**: JavaScript/TypeScript

## 📁 Project Structure

```
src/
├── Auth/                 # Authentication components
│   ├── AdminLogin.jsx
│   ├── UserLogin.jsx
│   ├── UserRegister.jsx
│   ├── Forgetpassword.jsx
│   ├── OTP.jsx
│   └── ConfirmPAssword.jsx
├── components/
│   ├── Dashboard/        # Dashboard components
│   │   ├── AdminDasboard/
│   │   └── UserDashboard/
│   ├── GetStarted/       # Landing page sections
│   │   ├── Home/
│   │   ├── BookSlot/
│   │   ├── HOWITWORKS/
│   │   └── Support/
│   ├── lib/              # Utility functions
│   └── ui/               # Reusable UI components
├── layouts/              # Layout components
├── pages/                # Route components
├── App.jsx
└── main.jsx
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Slotify/client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Components

### Authentication System
- **User Registration/Login**: Complete user authentication flow
- **Admin Login**: Separate admin authentication
- **Password Recovery**: Forgot password with OTP verification

### Dashboard Features
- **User Dashboard**: Personal booking management
- **Admin Dashboard**: System-wide management interface
- **Booking System**: Slot selection and confirmation

### Landing Pages
- **Home**: Feature showcase and call-to-action
- **How It Works**: Process explanation and workflow
- **Support**: FAQ and contact information

## 🎨 UI Components

The project includes custom UI components built with:
- Animated gradient text
- Typing animations
- Word rotation effects
- Syntax highlighting
- Smooth transitions with Framer Motion

## 🚀 Deployment

The project is configured for deployment on Vercel with the included `vercel.json` configuration.

To deploy:
```bash
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using React + Vite