import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

const SlotManagement = () => {
    const [slots, setSlots] = useState([
        { id: 1, date: '2025-01-15', time: '09:00 AM', status: 'Available', userName: null },
        { id: 2, date: '2025-01-15', time: '10:30 AM', status: 'Booked', userName: 'John Smith' },
        { id: 3, date: '2025-01-16', time: '02:00 PM', status: 'Available', userName: null },
        { id: 4, date: '2025-01-17', time: '11:00 AM', status: 'Booked', userName: 'Sarah Johnson' },
        { id: 5, date: '2024-12-10', time: '03:30 PM', status: 'Past', userName: 'Mike Davis' },
        { id: 6, date: '2025-01-18', time: '01:00 PM', status: 'Available', userName: null },
        { id: 7, date: '2024-12-05', time: '10:00 AM', status: 'Past', userName: null },
        { id: 8, date: '2025-01-19', time: '04:00 PM', status: 'Booked', userName: 'Emma Wilson' },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

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

    const handleDelete = (id) => {
        setSlots(slots.filter(slot => slot.id !== id));
    };

    const handleView = (slot) => {
        alert(`Viewing details for slot:\nDate: ${slot.date}\nTime: ${slot.time}\nStatus: ${slot.status}${slot.userName ? `\nUser: ${slot.userName}` : ''}`);
    };

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentSlots = slots.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(slots.length / itemsPerPage);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                staggerChildren: 0.05
            }
        }
    };

    const rowVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 20 }
    };

    return (
        <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-7xl mx-auto"
            >
                {/* Header */}
                <motion.div
                    variants={rowVariants}
                    className="mb-6 sm:mb-8"
                >
                    <h1 className="text-2xl sm:text-3xl font-semibold text-black mb-2">Slot Management</h1>
                    <p className="text-sm sm:text-base text-gray-600">Manage and monitor all appointment slots</p>
                </motion.div>

                {/* Stats Summary */}
                <motion.div
                    variants={rowVariants}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
                >
                    <div className="border border-gray-200 rounded-lg p-4">
                        <div className="text-sm text-gray-600 mb-1">Available Slots</div>
                        <div className="text-2xl font-semibold text-black">
                            {slots.filter(s => s.status === 'Available').length}
                        </div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                        <div className="text-sm text-gray-600 mb-1">Booked Slots</div>
                        <div className="text-2xl font-semibold text-black">
                            {slots.filter(s => s.status === 'Booked').length}
                        </div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                        <div className="text-sm text-gray-600 mb-1">Past Slots</div>
                        <div className="text-2xl font-semibold text-black">
                            {slots.filter(s => s.status === 'Past').length}
                        </div>
                    </div>
                </motion.div>

                {/* Table Container */}
                <motion.div
                    variants={rowVariants}
                    className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                >
                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-black">Date</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-black">Time</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-black">Status</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-black">User Name</th>
                                    <th className="px-6 py-4 text-right text-sm font-semibold text-black">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <AnimatePresence mode="popLayout">
                                    {currentSlots.map((slot, index) => (
                                        <motion.tr
                                            key={slot.id}
                                            variants={rowVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            transition={{ delay: index * 0.05 }}
                                            className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                                        >
                                            <td className="px-6 py-4 text-sm text-black">{slot.date}</td>
                                            <td className="px-6 py-4 text-sm text-black">{slot.time}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(slot.status)}`}>
                                                    {slot.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-black">
                                                {slot.userName || <span className="text-gray-400">—</span>}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button
                                                        onClick={() => handleView(slot)}
                                                        className="p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition-colors"
                                                        aria-label="View details"
                                                    >
                                                        <Eye size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(slot.id)}
                                                        className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                        aria-label="Delete slot"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </AnimatePresence>
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden divide-y divide-gray-200">
                        <AnimatePresence mode="popLayout">
                            {currentSlots.map((slot, index) => (
                                <motion.div
                                    key={slot.id}
                                    variants={rowVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    transition={{ delay: index * 0.05 }}
                                    className="p-4 hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <div className="text-sm font-semibold text-black mb-1">{slot.date}</div>
                                            <div className="text-sm text-gray-600">{slot.time}</div>
                                        </div>
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(slot.status)}`}>
                                            {slot.status}
                                        </span>
                                    </div>
                                    {slot.userName && (
                                        <div className="mb-3 text-sm text-black">
                                            <span className="text-gray-600">User:</span> {slot.userName}
                                        </div>
                                    )}
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleView(slot)}
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            <Eye size={16} />
                                            View
                                        </button>
                                        <button
                                            onClick={() => handleDelete(slot.id)}
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm text-red-600 bg-white border border-gray-200 rounded-lg hover:bg-red-50 transition-colors"
                                        >
                                            <Trash2 size={16} />
                                            Delete
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <motion.div
                        variants={rowVariants}
                        className="mt-6 flex items-center justify-between"
                    >
                        <div className="text-sm text-gray-600">
                            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, slots.length)} of {slots.length} slots
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-600"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`px-3 py-1 text-sm rounded-lg transition-colors ${currentPage === i + 1
                                            ? 'bg-black text-white'
                                            : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-600"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default SlotManagement;