import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Zap, Calendar, Settings, Shield, HelpCircle, ChevronRight, Menu, X } from 'lucide-react';

const LearnMore = () => {
    const [activeSection, setActiveSection] = useState('overview');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navigationItems = [
        { id: 'overview', label: 'Overview', icon: BookOpen },
        { id: 'how-it-works', label: 'How Slotify Works', icon: Zap },
        { id: 'booking', label: 'Booking a Slot', icon: Calendar },
        { id: 'admin', label: 'Admin Slot Management', icon: Settings },
        { id: 'security', label: 'Account & Security', icon: Shield },
        { id: 'support', label: 'Support', icon: HelpCircle }
    ];

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        setIsSidebarOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = navigationItems.map(item => item.id);
            const currentSection = sections.find(id => {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    };

    return (
        <div className="min-h-screen w-full bg-white">
            {/* Mobile Menu Toggle */}
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-2 bg-white border border-gray-200 rounded-lg shadow-sm"
                >
                    {isSidebarOpen ? (
                        <X className="w-6 h-6 text-black" strokeWidth={2} />
                    ) : (
                        <Menu className="w-6 h-6 text-black" strokeWidth={2} />
                    )}
                </button>
            </div>

            {/* Sidebar Navigation */}
            <motion.aside
                initial={false}
                animate={{
                    x: isSidebarOpen ? 0 : '-100%'
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 overflow-y-auto z-40 lg:translate-x-0"
            >
                <div className="p-6">
                    <h2 className="text-xl font-bold text-black mb-6">Documentation</h2>
                    <nav className="space-y-1">
                        {navigationItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive
                                            ? 'text-white'
                                            : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                    style={isActive ? { backgroundColor: '#4f39f6' } : {}}
                                >
                                    <Icon className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
                                    <span className="text-left">{item.label}</span>
                                    {isActive && <ChevronRight className="w-4 h-4 ml-auto" strokeWidth={2} />}
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </motion.aside>

            {/* Overlay for mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <motion.main
                className="lg:ml-64 px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-4xl">
                    {/* Page Header */}
                    <motion.div className="mb-12" variants={itemVariants}>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
                            Learn More About Slotify
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600">
                            Comprehensive documentation to help you understand and use Slotify effectively
                        </p>
                    </motion.div>

                    {/* Overview Section */}
                    <motion.section id="overview" className="mb-16 scroll-mt-24" variants={itemVariants}>
                        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">Overview</h2>
                        <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                            <p>
                                Slotify is a modern appointment slot management platform designed to simplify scheduling
                                for businesses and individuals. Whether you're running a clinic, salon, or service-based
                                business, Slotify eliminates booking conflicts and manual coordination.
                            </p>
                            <p className="font-semibold text-black">What problems does Slotify solve?</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Eliminates double-booking through automatic slot locking</li>
                                <li>Reduces manual coordination via calls or messages</li>
                                <li>Provides clear visibility of daily schedules</li>
                                <li>Ensures reliable, consistent appointment management</li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* How Slotify Works */}
                    <motion.section id="how-it-works" className="mb-16 scroll-mt-24" variants={itemVariants}>
                        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">How Slotify Works</h2>
                        <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                            <p>
                                Slotify operates on a simple three-step workflow that ensures smooth appointment management:
                            </p>
                            <div className="space-y-6 mt-6">
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <h3 className="font-semibold text-black mb-2">Step 1: Create Time Slots</h3>
                                    <p>Administrators define available appointment slots for specific dates and times. Each slot represents a bookable time period.</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <h3 className="font-semibold text-black mb-2">Step 2: Book a Slot</h3>
                                    <p>Users browse available slots, select their preferred date and time, and confirm their booking with just a few clicks.</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <h3 className="font-semibold text-black mb-2">Step 3: Automatic Slot Locking</h3>
                                    <p>Once a slot is booked, it's automatically locked and becomes unavailable to other users, preventing overbooking entirely.</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Booking a Slot */}
                    <motion.section id="booking" className="mb-16 scroll-mt-24" variants={itemVariants}>
                        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">Booking a Slot</h2>
                        <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                            <p className="font-semibold text-black">How to book an appointment:</p>
                            <ol className="list-decimal pl-6 space-y-3">
                                <li><strong>Select a Date:</strong> Choose your preferred appointment date from the calendar view.</li>
                                <li><strong>Choose a Time Slot:</strong> Browse available time slots for your selected date. Unavailable slots are clearly marked.</li>
                                <li><strong>Confirm Booking:</strong> Review your selection and confirm. You'll receive an immediate confirmation.</li>
                            </ol>
                            <p className="mt-4">
                                <strong>What happens after booking?</strong> Once your booking is confirmed, the slot is
                                immediately locked and you'll see it reflected in your appointments dashboard. You can view,
                                reschedule, or cancel your booking from your account.
                            </p>
                        </div>
                    </motion.section>

                    {/* Admin Slot Management */}
                    <motion.section id="admin" className="mb-16 scroll-mt-24" variants={itemVariants}>
                        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">Admin Slot Management</h2>
                        <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                            <p>
                                Administrators have powerful tools to manage appointment availability and monitor bookings:
                            </p>
                            <div className="space-y-4 mt-4">
                                <div>
                                    <h3 className="font-semibold text-black mb-2">Creating Time Slots</h3>
                                    <p>Access the admin dashboard to create new time slots. Specify the date, start time, end time, and slot duration. You can create individual slots or bulk-create recurring slots for multiple days.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-black mb-2">Viewing Daily Schedules</h3>
                                    <p>The schedule view provides a comprehensive overview of all appointments for any given day. See which slots are booked, available, or blocked at a glance.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-black mb-2">Managing Booked Slots</h3>
                                    <p>Monitor all booked appointments, view customer details, send reminders, or make administrative changes as needed. You can also temporarily block slots for maintenance or special events.</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Account & Security */}
                    <motion.section id="security" className="mb-16 scroll-mt-24" variants={itemVariants}>
                        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">Account & Security</h2>
                        <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                            <div>
                                <h3 className="font-semibold text-black mb-2">Login and Registration</h3>
                                <p>Create your Slotify account with a valid email address and secure password. We enforce strong password requirements including minimum length, uppercase letters, and special characters.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-black mb-2">Password Reset & OTP Verification</h3>
                                <p>If you forget your password, use the "Forgot Password" feature to receive a verification code via email. Enter the 6-digit OTP and create a new secure password.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-black mb-2">Role Separation: Admin vs User</h3>
                                <p><strong>Admins</strong> can create and manage time slots, view all bookings, and access administrative features. <strong>Users</strong> can browse available slots, make bookings, and manage their own appointments. This separation ensures security and proper access control.</p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Support */}
                    <motion.section id="support" className="mb-16 scroll-mt-24" variants={itemVariants}>
                        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">Support</h2>
                        <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                            <p>
                                Need help? We're here to assist you with any questions or issues you may encounter.
                            </p>
                            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                                <h3 className="font-semibold text-black mb-3">How to Get Help</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-black">•</span>
                                        <span>Visit our <a href="/support" className="font-medium hover:underline" style={{ color: '#4f39f6' }}>Support Page</a> for FAQs and common issues</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-black">•</span>
                                        <span>Email us at <a href="mailto:support@slotify.com" className="font-medium hover:underline" style={{ color: '#4f39f6' }}>support@slotify.com</a></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-black">•</span>
                                        <span>Response time: 24-48 hours</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* Footer CTA */}
                    <motion.div
                        className="mt-16 p-6 sm:p-8 bg-gray-50 rounded-xl text-center"
                        variants={itemVariants}
                    >
                        <h3 className="text-xl sm:text-2xl font-bold text-black mb-3">
                            Ready to Get Started?
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-6">
                            Start managing your appointments efficiently with Slotify today
                        </p>
                        <motion.button
                            className="px-6 py-3 text-white text-sm font-semibold rounded-lg"
                            style={{ backgroundColor: '#4f39f6' }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Create Your Account
                        </motion.button>
                    </motion.div>
                </div>
            </motion.main>
        </div>
    );
};

export default LearnMore;