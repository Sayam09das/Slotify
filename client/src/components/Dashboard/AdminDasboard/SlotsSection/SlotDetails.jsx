import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Mail, Phone, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const SlotDetails = () => {
    const [selectedSlot, setSelectedSlot] = useState(null);

    // Sample slots data
    const sampleSlots = [
        {
            id: 1,
            date: '2025-01-15',
            time: '09:00 AM',
            duration: '60 minutes',
            status: 'Available',
            userName: null,
            userEmail: null,
            userPhone: null,
            bookedAt: null,
            notes: null
        },
        {
            id: 2,
            date: '2025-01-15',
            time: '10:30 AM',
            duration: '60 minutes',
            status: 'Booked',
            userName: 'John Smith',
            userEmail: 'john.smith@email.com',
            userPhone: '+1 (555) 123-4567',
            bookedAt: '2025-01-10 02:45 PM',
            notes: 'Initial consultation regarding project requirements and timeline discussion.'
        },
        {
            id: 3,
            date: '2024-12-10',
            time: '03:30 PM',
            duration: '60 minutes',
            status: 'Past',
            userName: 'Sarah Johnson',
            userEmail: 'sarah.j@company.com',
            userPhone: '+1 (555) 987-6543',
            bookedAt: '2024-12-05 10:20 AM',
            notes: 'Follow-up meeting completed successfully.'
        }
    ];

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Available':
                return <CheckCircle className="text-green-600" size={20} />;
            case 'Booked':
                return <AlertCircle className="text-red-600" size={20} />;
            case 'Past':
                return <XCircle className="text-gray-500" size={20} />;
            default:
                return null;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Available':
                return 'bg-green-50 text-green-700 border-green-200';
            case 'Booked':
                return 'bg-red-50 text-red-700 border-red-200';
            case 'Past':
                return 'bg-gray-50 text-gray-600 border-gray-200';
            default:
                return 'bg-gray-50 text-gray-600 border-gray-200';
        }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const panelVariants = {
        hidden: { x: '100%' },
        visible: {
            x: 0,
            transition: {
                type: 'spring',
                damping: 25,
                stiffness: 200
            }
        },
        exit: {
            x: '100%',
            transition: {
                type: 'spring',
                damping: 25,
                stiffness: 200
            }
        }
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 sm:mb-8"
                >
                    <h1 className="text-2xl sm:text-3xl font-semibold text-black mb-2">Slot Details</h1>
                    <p className="text-sm sm:text-base text-gray-600">View detailed information for appointment slots</p>
                </motion.div>

                {/* Sample Slot Cards */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
                >
                    {sampleSlots.map((slot, index) => (
                        <motion.div
                            key={slot.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            onClick={() => setSelectedSlot(slot)}
                            className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 cursor-pointer transition-all hover:shadow-sm"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <div className="text-sm font-semibold text-black mb-1">{slot.date}</div>
                                    <div className="text-sm text-gray-600">{slot.time}</div>
                                </div>
                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(slot.status)}`}>
                                    {slot.status}
                                </span>
                            </div>
                            {slot.userName && (
                                <div className="text-sm text-gray-600 truncate">
                                    {slot.userName}
                                </div>
                            )}
                            <button className="mt-3 w-full text-sm text-white bg-black hover:bg-gray-800 py-2 rounded-lg transition-colors">
                                View Details
                            </button>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Details Panel Overlay */}
                <AnimatePresence>
                    {selectedSlot && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                variants={overlayVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                onClick={() => setSelectedSlot(null)}
                                className="fixed inset-0 bg-black bg-opacity-30 z-40"
                            />

                            {/* Sliding Panel */}
                            <motion.div
                                variants={panelVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="fixed top-0 right-0 h-full w-full sm:w-[500px] lg:w-[600px] bg-white shadow-lg z-50 overflow-y-auto"
                            >
                                {/* Panel Header */}
                                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                                    <h2 className="text-xl font-semibold text-black">Slot Details</h2>
                                    <button
                                        onClick={() => setSelectedSlot(null)}
                                        className="p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition-colors"
                                        aria-label="Close panel"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                {/* Panel Content */}
                                <motion.div
                                    variants={contentVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="p-6 space-y-6"
                                >
                                    {/* Status Badge */}
                                    <motion.div variants={itemVariants} className="flex items-center gap-3">
                                        {getStatusIcon(selectedSlot.status)}
                                        <span className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium border ${getStatusColor(selectedSlot.status)}`}>
                                            {selectedSlot.status}
                                        </span>
                                    </motion.div>

                                    {/* Slot Information */}
                                    <motion.div variants={itemVariants} className="space-y-4">
                                        <h3 className="text-sm font-semibold text-black uppercase tracking-wide">Slot Information</h3>

                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <div className="p-2 bg-gray-50 rounded-lg">
                                                    <Calendar className="text-gray-600" size={20} />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-xs text-gray-500 mb-1">Date</div>
                                                    <div className="text-sm font-medium text-black">{selectedSlot.date}</div>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <div className="p-2 bg-gray-50 rounded-lg">
                                                    <Clock className="text-gray-600" size={20} />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-xs text-gray-500 mb-1">Time</div>
                                                    <div className="text-sm font-medium text-black">{selectedSlot.time}</div>
                                                    <div className="text-xs text-gray-500 mt-1">Duration: {selectedSlot.duration}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* User Details (if booked) */}
                                    {selectedSlot.status === 'Booked' || selectedSlot.status === 'Past' ? (
                                        <motion.div variants={itemVariants} className="space-y-4">
                                            <h3 className="text-sm font-semibold text-black uppercase tracking-wide">User Details</h3>

                                            <div className="space-y-3">
                                                <div className="flex items-start gap-3">
                                                    <div className="p-2 bg-gray-50 rounded-lg">
                                                        <User className="text-gray-600" size={20} />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="text-xs text-gray-500 mb-1">Name</div>
                                                        <div className="text-sm font-medium text-black">{selectedSlot.userName}</div>
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-3">
                                                    <div className="p-2 bg-gray-50 rounded-lg">
                                                        <Mail className="text-gray-600" size={20} />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="text-xs text-gray-500 mb-1">Email</div>
                                                        <div className="text-sm font-medium text-black break-all">{selectedSlot.userEmail}</div>
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-3">
                                                    <div className="p-2 bg-gray-50 rounded-lg">
                                                        <Phone className="text-gray-600" size={20} />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="text-xs text-gray-500 mb-1">Phone</div>
                                                        <div className="text-sm font-medium text-black">{selectedSlot.userPhone}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div variants={itemVariants} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                            <p className="text-sm text-gray-600 text-center">No user details available for this slot</p>
                                        </motion.div>
                                    )}

                                    {/* Booking Information */}
                                    {selectedSlot.bookedAt && (
                                        <motion.div variants={itemVariants} className="space-y-4">
                                            <h3 className="text-sm font-semibold text-black uppercase tracking-wide">Booking Information</h3>

                                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                                <div className="text-xs text-gray-500 mb-1">Booked On</div>
                                                <div className="text-sm font-medium text-black">{selectedSlot.bookedAt}</div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Notes */}
                                    {selectedSlot.notes && (
                                        <motion.div variants={itemVariants} className="space-y-4">
                                            <h3 className="text-sm font-semibold text-black uppercase tracking-wide">Notes</h3>

                                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                                <p className="text-sm text-gray-600 leading-relaxed">{selectedSlot.notes}</p>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Action Buttons */}
                                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 pt-4">
                                        <button
                                            style={{ backgroundColor: '#4f39f6' }}
                                            className="flex-1 px-6 py-3 text-sm font-medium text-white rounded-lg hover:opacity-90 transition-opacity"
                                        >
                                            Edit Slot
                                        </button>
                                        <button className="flex-1 px-6 py-3 text-sm font-medium text-black bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                            Cancel Booking
                                        </button>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default SlotDetails;