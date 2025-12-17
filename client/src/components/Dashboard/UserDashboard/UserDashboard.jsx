import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Calendar, Clock, CheckCircle, XCircle, AlertCircle, User, LogOut, Plus, ChevronRight, X } from 'lucide-react';

const UserDashboard = () => {
    const [appointments, setAppointments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        // Simulate data loading
        setTimeout(() => {
            loadUserData();
            setIsLoading(false);
        }, 1000);
    }, []);

    const loadUserData = () => {
        // Sample user appointments
        const sampleAppointments = [
            {
                id: 1,
                date: '2025-12-18',
                time: '10:00',
                status: 'upcoming',
                location: 'Downtown Clinic',
                service: 'General Checkup'
            },
            {
                id: 2,
                date: '2025-12-20',
                time: '14:30',
                status: 'upcoming',
                location: 'Wellness Center',
                service: 'Dental Cleaning'
            },
            {
                id: 3,
                date: '2025-12-15',
                time: '09:00',
                status: 'completed',
                location: 'City Salon',
                service: 'Hair Styling'
            },
            {
                id: 4,
                date: '2025-12-10',
                time: '16:00',
                status: 'completed',
                location: 'Downtown Clinic',
                service: 'Consultation'
            },
            {
                id: 5,
                date: '2025-12-05',
                time: '11:00',
                status: 'cancelled',
                location: 'Spa Center',
                service: 'Massage Therapy'
            },
        ];

        setAppointments(sampleAppointments);
    };

    const handleBookNew = () => {
        toast.success('Redirecting to booking page...');
    };

    const handleViewDetails = (appointment) => {
        setSelectedAppointment(appointment);
        setShowDetails(true);
    };

    const handleCancelAppointment = (appointmentId) => {
        setAppointments(appointments.map(apt =>
            apt.id === appointmentId ? { ...apt, status: 'cancelled' } : apt
        ));
        toast.success('Appointment cancelled successfully');
        setShowDetails(false);
    };

    const upcomingAppointments = appointments.filter(apt => apt.status === 'upcoming');
    const completedAppointments = appointments.filter(apt => apt.status === 'completed');
    const totalBookings = appointments.length;

    const getStatusColor = (status) => {
        switch (status) {
            case 'upcoming':
                return { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' };
            case 'completed':
                return { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' };
            case 'cancelled':
                return { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-200' };
            default:
                return { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-200' };
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'upcoming':
                return <Clock size={14} />;
            case 'completed':
                return <CheckCircle size={14} />;
            case 'cancelled':
                return <XCircle size={14} />;
            default:
                return <AlertCircle size={14} />;
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 border-4 border-gray-200 border-t-[#4f39f6] rounded-full"
                />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <ToastContainer position="top-right" autoClose={3000} />

            {/* Header */}
            <motion.header
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-white border-b border-gray-200 sticky top-0 z-50"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold text-black">My Dashboard</h1>
                            <p className="text-sm text-gray-600 mt-1">Manage your appointments with Slotify</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                                <User size={20} className="text-gray-700" />
                            </button>
                            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                                <LogOut size={20} className="text-gray-700" />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                {/* Summary Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
                >
                    <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600">Upcoming Appointments</p>
                                <p className="text-3xl font-bold text-black mt-2">{upcomingAppointments.length}</p>
                            </div>
                            <Clock className="text-blue-400" size={32} />
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600">Completed Appointments</p>
                                <p className="text-3xl font-bold text-black mt-2">{completedAppointments.length}</p>
                            </div>
                            <CheckCircle className="text-green-400" size={32} />
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600">Total Bookings</p>
                                <p className="text-3xl font-bold text-black mt-2">{totalBookings}</p>
                            </div>
                            <Calendar className="text-[#4f39f6]" size={32} />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Book New Slot Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                >
                    <button
                        onClick={handleBookNew}
                        className="w-full sm:w-auto bg-[#4f39f6] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#3f29e6] transition-colors flex items-center justify-center gap-2"
                    >
                        <Plus size={20} />
                        Book a New Slot
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Upcoming Appointments */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-2 bg-white border border-gray-200 rounded-lg"
                    >
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-xl font-bold text-black">Upcoming Appointments</h2>
                            <p className="text-sm text-gray-600 mt-1">Your scheduled appointments</p>
                        </div>
                        <div className="p-6">
                            {upcomingAppointments.length === 0 ? (
                                <div className="text-center py-12">
                                    <Calendar className="mx-auto text-gray-300 mb-3" size={48} />
                                    <p className="text-gray-500 mb-2">No upcoming appointments</p>
                                    <p className="text-sm text-gray-400">Book a new slot to get started</p>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    <AnimatePresence>
                                        {upcomingAppointments.map((appointment, index) => {
                                            const statusStyle = getStatusColor(appointment.status);
                                            return (
                                                <motion.div
                                                    key={appointment.id}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: 20 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow cursor-pointer"
                                                    onClick={() => handleViewDetails(appointment)}
                                                >
                                                    <div className="flex items-center gap-4 flex-1">
                                                        <div className="text-center min-w-[70px]">
                                                            <p className="text-xs text-gray-600">
                                                                {new Date(appointment.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                                            </p>
                                                            <p className="text-lg font-semibold text-black">{appointment.time}</p>
                                                        </div>
                                                        <div className="h-12 w-px bg-gray-200" />
                                                        <div className="flex-1 min-w-0">
                                                            <p className="font-medium text-black truncate">{appointment.service}</p>
                                                            <p className="text-sm text-gray-600 truncate">{appointment.location}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className={`inline-flex items-center gap-1 px-3 py-1 ${statusStyle.bg} ${statusStyle.text} rounded-full text-xs font-medium whitespace-nowrap`}>
                                                            {getStatusIcon(appointment.status)}
                                                            <span className="capitalize hidden sm:inline">{appointment.status}</span>
                                                        </span>
                                                        <ChevronRight size={20} className="text-gray-400" />
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </AnimatePresence>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Booking History */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white border border-gray-200 rounded-lg"
                    >
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="text-lg font-bold text-black">Booking History</h3>
                        </div>
                        <div className="p-6">
                            {appointments.filter(apt => apt.status !== 'upcoming').length === 0 ? (
                                <div className="text-center py-8">
                                    <AlertCircle className="mx-auto text-gray-300 mb-2" size={32} />
                                    <p className="text-sm text-gray-500">No past bookings</p>
                                </div>
                            ) : (
                                <div className="space-y-3 max-h-[600px] overflow-y-auto">
                                    {appointments
                                        .filter(apt => apt.status !== 'upcoming')
                                        .map((appointment, index) => {
                                            const statusStyle = getStatusColor(appointment.status);
                                            return (
                                                <motion.div
                                                    key={appointment.id}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="p-3 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow cursor-pointer"
                                                    onClick={() => handleViewDetails(appointment)}
                                                >
                                                    <div className="flex items-start justify-between mb-2">
                                                        <p className="font-medium text-black text-sm">{appointment.service}</p>
                                                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 ${statusStyle.bg} ${statusStyle.text} rounded-full text-xs font-medium`}>
                                                            {getStatusIcon(appointment.status)}
                                                            <span className="capitalize">{appointment.status}</span>
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-gray-600 mb-1">{appointment.location}</p>
                                                    <div className="flex items-center gap-3 text-xs text-gray-600">
                                                        <span className="flex items-center gap-1">
                                                            <Calendar size={12} />
                                                            {new Date(appointment.date).toLocaleDateString()}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Clock size={12} />
                                                            {appointment.time}
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Appointment Details Modal */}
            <AnimatePresence>
                {showDetails && selectedAppointment && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black bg-opacity-50 z-50"
                            onClick={() => setShowDetails(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg z-50 w-full max-w-md mx-4"
                        >
                            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                                <h3 className="text-xl font-bold text-black">Appointment Details</h3>
                                <button
                                    onClick={() => setShowDetails(false)}
                                    className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    <X size={20} className="text-gray-500" />
                                </button>
                            </div>
                            <div className="p-6 space-y-4">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Service</p>
                                    <p className="font-medium text-black">{selectedAppointment.service}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Location</p>
                                    <p className="font-medium text-black">{selectedAppointment.location}</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">Date</p>
                                        <p className="font-medium text-black">
                                            {new Date(selectedAppointment.date).toLocaleDateString('en-US', {
                                                weekday: 'short',
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">Time</p>
                                        <p className="font-medium text-black">{selectedAppointment.time}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Status</p>
                                    {(() => {
                                        const statusStyle = getStatusColor(selectedAppointment.status);
                                        return (
                                            <span className={`inline-flex items-center gap-1 px-3 py-1 ${statusStyle.bg} ${statusStyle.text} rounded-full text-sm font-medium`}>
                                                {getStatusIcon(selectedAppointment.status)}
                                                <span className="capitalize">{selectedAppointment.status}</span>
                                            </span>
                                        );
                                    })()}
                                </div>
                            </div>
                            {selectedAppointment.status === 'upcoming' && (
                                <div className="p-6 border-t border-gray-200 flex gap-3">
                                    <button
                                        onClick={() => setShowDetails(false)}
                                        className="flex-1 px-4 py-2 border border-gray-200 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                                    >
                                        Close
                                    </button>
                                    <button
                                        onClick={() => handleCancelAppointment(selectedAppointment.id)}
                                        className="flex-1 px-4 py-2 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition-colors"
                                    >
                                        Cancel Appointment
                                    </button>
                                </div>
                            )}
                            {selectedAppointment.status !== 'upcoming' && (
                                <div className="p-6 border-t border-gray-200">
                                    <button
                                        onClick={() => setShowDetails(false)}
                                        className="w-full px-4 py-2 bg-[#4f39f6] text-white rounded-lg font-medium hover:bg-[#3f29e6] transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default UserDashboard;