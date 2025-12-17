import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Calendar, Clock, CheckCircle, ArrowLeft, Search, Filter, MapPin, Briefcase, User, X } from 'lucide-react';

const UserBookingPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [availableSlots, setAvailableSlots] = useState([]);
    const [filteredSlots, setFilteredSlots] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [isBooking, setIsBooking] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedService, setSelectedService] = useState('all');
    const [selectedLocation, setSelectedLocation] = useState('all');

    const services = ['General Checkup', 'Dental Cleaning', 'Hair Styling', 'Massage Therapy', 'Consultation'];
    const locations = ['Downtown Clinic', 'Wellness Center', 'City Salon', 'Spa Center', 'Medical Plaza'];

    useEffect(() => {
        loadAvailableSlots();
    }, [selectedDate]);

    useEffect(() => {
        filterSlots();
    }, [availableSlots, searchQuery, selectedService, selectedLocation]);

    const loadAvailableSlots = () => {
        setIsLoading(true);
        setTimeout(() => {
            const slots = [
                { id: 1, time: '09:00', available: true, location: 'Downtown Clinic', service: 'General Checkup', provider: 'Dr. Sarah Smith' },
                { id: 2, time: '09:30', available: true, location: 'City Salon', service: 'Hair Styling', provider: 'Emily Johnson' },
                { id: 3, time: '10:00', available: false, location: 'Wellness Center', service: 'Dental Cleaning', provider: 'Dr. Michael Brown' },
                { id: 4, time: '10:30', available: true, location: 'Downtown Clinic', service: 'Consultation', provider: 'Dr. Sarah Smith' },
                { id: 5, time: '11:00', available: true, location: 'Spa Center', service: 'Massage Therapy', provider: 'Lisa Anderson' },
                { id: 6, time: '11:30', available: true, location: 'Wellness Center', service: 'Dental Cleaning', provider: 'Dr. Michael Brown' },
                { id: 7, time: '14:00', available: false, location: 'City Salon', service: 'Hair Styling', provider: 'Emily Johnson' },
                { id: 8, time: '14:30', available: true, location: 'Medical Plaza', service: 'General Checkup', provider: 'Dr. James Wilson' },
                { id: 9, time: '15:00', available: true, location: 'Downtown Clinic', service: 'Consultation', provider: 'Dr. Sarah Smith' },
                { id: 10, time: '15:30', available: true, location: 'Spa Center', service: 'Massage Therapy', provider: 'Lisa Anderson' },
                { id: 11, time: '16:00', available: false, location: 'Wellness Center', service: 'Dental Cleaning', provider: 'Dr. Michael Brown' },
                { id: 12, time: '16:30', available: true, location: 'City Salon', service: 'Hair Styling', provider: 'Emily Johnson' },
            ];
            setAvailableSlots(slots);
            setIsLoading(false);
        }, 800);
    };

    const filterSlots = () => {
        let filtered = availableSlots;

        if (searchQuery) {
            filtered = filtered.filter(slot =>
                slot.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
                slot.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                slot.provider.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (selectedService !== 'all') {
            filtered = filtered.filter(slot => slot.service === selectedService);
        }

        if (selectedLocation !== 'all') {
            filtered = filtered.filter(slot => slot.location === selectedLocation);
        }

        setFilteredSlots(filtered);
    };

    const handleSlotSelect = (slot) => {
        if (!slot.available) {
            toast.error('This slot is already booked');
            return;
        }
        setSelectedSlot(slot);
        setShowConfirmModal(true);
    };

    const handleConfirmBooking = () => {
        setIsBooking(true);
        setTimeout(() => {
            setAvailableSlots(availableSlots.map(slot =>
                slot.id === selectedSlot.id ? { ...slot, available: false } : slot
            ));
            toast.success('Appointment booked successfully!');
            setIsBooking(false);
            setShowConfirmModal(false);
            setSelectedSlot(null);
        }, 1500);
    };

    const handleBackToDashboard = () => {
        toast.info('Returning to dashboard...');
    };

    const availableCount = filteredSlots.filter(slot => slot.available).length;
    const bookedCount = filteredSlots.filter(slot => !slot.available).length;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
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
                className="bg-white border-b border-gray-200 sticky top-0 z-40"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={handleBackToDashboard}
                                className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <ArrowLeft size={20} className="text-gray-700" />
                            </button>
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-bold text-black">Book Appointment</h1>
                                <p className="text-sm text-gray-600 mt-1">Find and book available slots</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                min={new Date().toISOString().split('T')[0]}
                                className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4f39f6] flex-1 sm:flex-none"
                            />
                        </div>
                    </div>
                </div>
            </motion.header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6"
                >
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <p className="text-sm text-gray-600">Available Slots</p>
                        <p className="text-2xl font-bold text-green-600 mt-1">{availableCount}</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <p className="text-sm text-gray-600">Booked Slots</p>
                        <p className="text-2xl font-bold text-red-400 mt-1">{bookedCount}</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 col-span-2 sm:col-span-1">
                        <p className="text-sm text-gray-600">Selected Date</p>
                        <p className="text-lg font-bold text-black mt-1">
                            {new Date(selectedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </p>
                    </div>
                </motion.div>

                {/* Search and Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white border border-gray-200 rounded-lg p-4 mb-6"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="relative lg:col-span-2">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search by service, location, or provider..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4f39f6]"
                            />
                        </div>
                        <select
                            value={selectedService}
                            onChange={(e) => setSelectedService(e.target.value)}
                            className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4f39f6] bg-white"
                        >
                            <option value="all">All Services</option>
                            {services.map(service => (
                                <option key={service} value={service}>{service}</option>
                            ))}
                        </select>
                        <select
                            value={selectedLocation}
                            onChange={(e) => setSelectedLocation(e.target.value)}
                            className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4f39f6] bg-white"
                        >
                            <option value="all">All Locations</option>
                            {locations.map(location => (
                                <option key={location} value={location}>{location}</option>
                            ))}
                        </select>
                    </div>
                    {(searchQuery || selectedService !== 'all' || selectedLocation !== 'all') && (
                        <div className="mt-3 flex items-center gap-2">
                            <Filter size={16} className="text-gray-400" />
                            <span className="text-sm text-gray-600">
                                Showing {filteredSlots.length} of {availableSlots.length} slots
                            </span>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedService('all');
                                    setSelectedLocation('all');
                                }}
                                className="ml-auto text-sm text-[#4f39f6] hover:underline"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </motion.div>

                {/* Available Slots Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {filteredSlots.length === 0 ? (
                        <motion.div
                            variants={itemVariants}
                            className="bg-white border border-gray-200 rounded-lg p-12 text-center"
                        >
                            <Calendar className="mx-auto text-gray-300 mb-4" size={64} />
                            <h3 className="text-xl font-bold text-black mb-2">No slots found</h3>
                            <p className="text-gray-600">Try adjusting your filters or selecting a different date</p>
                        </motion.div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredSlots.map((slot, index) => (
                                <motion.div
                                    key={slot.id}
                                    variants={itemVariants}
                                    className={`bg-white border rounded-lg p-5 transition-all ${slot.available
                                            ? 'border-gray-200 hover:shadow-md hover:border-[#4f39f6] cursor-pointer'
                                            : 'border-gray-200 opacity-60 cursor-not-allowed'
                                        }`}
                                    onClick={() => handleSlotSelect(slot)}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <Clock className={slot.available ? 'text-[#4f39f6]' : 'text-gray-400'} size={20} />
                                            <span className="text-xl font-bold text-black">{slot.time}</span>
                                        </div>
                                        {slot.available ? (
                                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                                                <CheckCircle size={12} />
                                                Available
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                                                Booked
                                            </span>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-start gap-2">
                                            <Briefcase size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm font-medium text-black">{slot.service}</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-gray-600">{slot.location}</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <User size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-gray-600">{slot.provider}</span>
                                        </div>
                                    </div>

                                    {slot.available && (
                                        <button
                                            className="w-full mt-4 bg-[#4f39f6] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#3f29e6] transition-colors"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleSlotSelect(slot);
                                            }}
                                        >
                                            Book This Slot
                                        </button>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Confirmation Modal */}
            <AnimatePresence>
                {showConfirmModal && selectedSlot && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black bg-opacity-50 z-50"
                            onClick={() => !isBooking && setShowConfirmModal(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg z-50 w-full max-w-md mx-4"
                        >
                            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                                <h3 className="text-xl font-bold text-black">Confirm Booking</h3>
                                {!isBooking && (
                                    <button
                                        onClick={() => setShowConfirmModal(false)}
                                        className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                                    >
                                        <X size={20} className="text-gray-500" />
                                    </button>
                                )}
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">Date</span>
                                        <span className="font-medium text-black">
                                            {new Date(selectedDate).toLocaleDateString('en-US', {
                                                weekday: 'short',
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">Time</span>
                                        <span className="font-medium text-black">{selectedSlot.time}</span>
                                    </div>
                                    <div className="h-px bg-gray-200" />
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">Service</span>
                                        <span className="font-medium text-black">{selectedSlot.service}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">Location</span>
                                        <span className="font-medium text-black text-right">{selectedSlot.location}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">Provider</span>
                                        <span className="font-medium text-black">{selectedSlot.provider}</span>
                                    </div>
                                </div>

                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <p className="text-sm text-blue-800">
                                        <strong>Note:</strong> Please arrive 10 minutes before your appointment time.
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-200 flex gap-3">
                                <button
                                    onClick={() => setShowConfirmModal(false)}
                                    disabled={isBooking}
                                    className="flex-1 px-4 py-3 border border-gray-200 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleConfirmBooking}
                                    disabled={isBooking}
                                    className="flex-1 px-4 py-3 bg-[#4f39f6] text-white rounded-lg font-medium hover:bg-[#3f29e6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isBooking ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                            />
                                            Booking...
                                        </>
                                    ) : (
                                        'Confirm Booking'
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default UserBookingPage;