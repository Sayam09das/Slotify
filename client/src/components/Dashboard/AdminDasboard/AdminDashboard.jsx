import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Calendar, Clock, Users, CheckCircle, XCircle, Plus, LogOut, User, AlertCircle } from 'lucide-react';

const AdminDashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [slots, setSlots] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [newSlotDate, setNewSlotDate] = useState(new Date().toISOString().split('T')[0]);
    const [newSlotTime, setNewSlotTime] = useState('09:00');
    const [isCreating, setIsCreating] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate data loading
        setTimeout(() => {
            loadInitialData();
            setIsLoading(false);
        }, 1000);
    }, []);

    const loadInitialData = () => {
        // Sample data
        const sampleSlots = [
            { id: 1, date: selectedDate, time: '09:00', status: 'available', userName: null },
            { id: 2, date: selectedDate, time: '10:00', status: 'booked', userName: 'John Smith' },
            { id: 3, date: selectedDate, time: '11:00', status: 'available', userName: null },
            { id: 4, date: selectedDate, time: '14:00', status: 'booked', userName: 'Sarah Johnson' },
            { id: 5, date: selectedDate, time: '15:00', status: 'available', userName: null },
            { id: 6, date: selectedDate, time: '16:00', status: 'booked', userName: 'Mike Davis' },
        ];

        const sampleBookings = [
            { id: 1, date: selectedDate, time: '10:00', userName: 'John Smith' },
            { id: 2, date: selectedDate, time: '14:00', userName: 'Sarah Johnson' },
            { id: 3, date: selectedDate, time: '16:00', userName: 'Mike Davis' },
        ];

        setSlots(sampleSlots);
        setBookings(sampleBookings);
    };

    const handleCreateSlot = () => {
        if (!newSlotDate || !newSlotTime) {
            toast.error('Please select both date and time');
            return;
        }

        const now = new Date();
        const slotDateTime = new Date(`${newSlotDate}T${newSlotTime}`);

        if (slotDateTime < now) {
            toast.error('Cannot create slots in the past');
            return;
        }

        const duplicate = slots.find(
            slot => slot.date === newSlotDate && slot.time === newSlotTime
        );

        if (duplicate) {
            toast.error('A slot already exists at this time');
            return;
        }

        setIsCreating(true);
        setTimeout(() => {
            const newSlot = {
                id: slots.length + 1,
                date: newSlotDate,
                time: newSlotTime,
                status: 'available',
                userName: null,
            };

            setSlots([...slots, newSlot].sort((a, b) => a.time.localeCompare(b.time)));
            toast.success('Slot created successfully');
            setIsCreating(false);
            setNewSlotTime('09:00');
        }, 500);
    };

    const filteredSlots = slots.filter(slot => slot.date === selectedDate);
    const todaySlots = slots.filter(slot => slot.date === new Date().toISOString().split('T')[0]);
    const bookedToday = todaySlots.filter(slot => slot.status === 'booked').length;
    const availableToday = todaySlots.filter(slot => slot.status === 'available').length;

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
                            <h1 className="text-2xl sm:text-3xl font-bold text-black">Admin Dashboard</h1>
                            <p className="text-sm text-gray-600 mt-1">Slotify Appointment Manager</p>
                        </div>
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4f39f6] flex-1 sm:flex-none"
                            />
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
                {/* Statistics Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
                >
                    <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600">Total Slots Today</p>
                                <p className="text-3xl font-bold text-black mt-2">{todaySlots.length}</p>
                            </div>
                            <Calendar className="text-[#4f39f6]" size={32} />
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600">Booked Slots</p>
                                <p className="text-3xl font-bold text-black mt-2">{bookedToday}</p>
                            </div>
                            <CheckCircle className="text-red-400" size={32} />
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600">Available Slots</p>
                                <p className="text-3xl font-bold text-black mt-2">{availableToday}</p>
                            </div>
                            <Clock className="text-green-400" size={32} />
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600">Upcoming</p>
                                <p className="text-3xl font-bold text-black mt-2">{bookings.length}</p>
                            </div>
                            <Users className="text-[#4f39f6]" size={32} />
                        </div>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Daily Schedule */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-2 bg-white border border-gray-200 rounded-lg"
                    >
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-xl font-bold text-black">Daily Schedule</h2>
                            <p className="text-sm text-gray-600 mt-1">
                                {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        </div>
                        <div className="p-6">
                            {filteredSlots.length === 0 ? (
                                <div className="text-center py-12">
                                    <AlertCircle className="mx-auto text-gray-300 mb-3" size={48} />
                                    <p className="text-gray-500">No slots created for this date</p>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    <AnimatePresence>
                                        {filteredSlots.map((slot, index) => (
                                            <motion.div
                                                key={slot.id}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                                transition={{ delay: index * 0.05 }}
                                                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="text-center min-w-[70px]">
                                                        <p className="text-lg font-semibold text-black">{slot.time}</p>
                                                    </div>
                                                    <div className="h-10 w-px bg-gray-200" />
                                                    <div>
                                                        {slot.status === 'booked' ? (
                                                            <>
                                                                <p className="font-medium text-black">{slot.userName}</p>
                                                                <p className="text-sm text-gray-600">Confirmed Appointment</p>
                                                            </>
                                                        ) : (
                                                            <p className="text-gray-500">Available</p>
                                                        )}
                                                    </div>
                                                </div>
                                                <div>
                                                    {slot.status === 'booked' ? (
                                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm font-medium">
                                                            <XCircle size={14} />
                                                            Booked
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium">
                                                            <CheckCircle size={14} />
                                                            Available
                                                        </span>
                                                    )}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Create Slot */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white border border-gray-200 rounded-lg"
                        >
                            <div className="p-6 border-b border-gray-200">
                                <h3 className="text-lg font-bold text-black">Create New Slot</h3>
                            </div>
                            <div className="p-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                                    <input
                                        type="date"
                                        value={newSlotDate}
                                        onChange={(e) => setNewSlotDate(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4f39f6]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                                    <input
                                        type="time"
                                        value={newSlotTime}
                                        onChange={(e) => setNewSlotTime(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4f39f6]"
                                    />
                                </div>
                                <button
                                    onClick={handleCreateSlot}
                                    disabled={isCreating}
                                    className="w-full bg-[#4f39f6] text-white py-3 rounded-lg font-medium hover:bg-[#3f29e6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isCreating ? (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                        />
                                    ) : (
                                        <>
                                            <Plus size={20} />
                                            Create Slot
                                        </>
                                    )}
                                </button>
                            </div>
                        </motion.div>

                        {/* Recent Bookings */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white border border-gray-200 rounded-lg"
                        >
                            <div className="p-6 border-b border-gray-200">
                                <h3 className="text-lg font-bold text-black">Recent Bookings</h3>
                            </div>
                            <div className="p-6">
                                {bookings.length === 0 ? (
                                    <div className="text-center py-8">
                                        <Users className="mx-auto text-gray-300 mb-2" size={32} />
                                        <p className="text-sm text-gray-500">No bookings yet</p>
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        {bookings.map((booking, index) => (
                                            <motion.div
                                                key={booking.id}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="p-3 border border-gray-200 rounded-lg"
                                            >
                                                <p className="font-medium text-black text-sm">{booking.userName}</p>
                                                <div className="flex items-center gap-2 mt-1 text-xs text-gray-600">
                                                    <Calendar size={12} />
                                                    <span>{new Date(booking.date).toLocaleDateString()}</span>
                                                    <Clock size={12} />
                                                    <span>{booking.time}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;