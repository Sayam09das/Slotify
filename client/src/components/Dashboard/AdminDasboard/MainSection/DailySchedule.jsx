import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, User, CheckCircle, XCircle, MinusCircle } from 'lucide-react';

const DailySchedule = () => {
    const [scheduleData] = useState([
        { id: 1, time: '09:00 AM', status: 'past', userName: 'Sarah Johnson' },
        { id: 2, time: '09:30 AM', status: 'past', userName: 'Michael Chen' },
        { id: 3, time: '10:00 AM', status: 'booked', userName: 'Emily Davis' },
        { id: 4, time: '10:30 AM', status: 'booked', userName: 'James Wilson' },
        { id: 5, time: '11:00 AM', status: 'available', userName: null },
        { id: 6, time: '11:30 AM', status: 'available', userName: null },
        { id: 7, time: '12:00 PM', status: 'booked', userName: 'Lisa Anderson' },
        { id: 8, time: '12:30 PM', status: 'available', userName: null },
        { id: 9, time: '01:00 PM', status: 'available', userName: null },
        { id: 10, time: '01:30 PM', status: 'booked', userName: 'David Brown' },
        { id: 11, time: '02:00 PM', status: 'available', userName: null },
        { id: 12, time: '02:30 PM', status: 'available', userName: null },
    ]);

    const getStatusConfig = (status) => {
        switch (status) {
            case 'available':
                return {
                    label: 'Available',
                    color: 'text-green-700',
                    bgColor: 'bg-green-50',
                    borderColor: 'border-green-200',
                    icon: CheckCircle
                };
            case 'booked':
                return {
                    label: 'Booked',
                    color: 'text-red-700',
                    bgColor: 'bg-red-50',
                    borderColor: 'border-red-200',
                    icon: XCircle
                };
            case 'past':
                return {
                    label: 'Past',
                    color: 'text-gray-500',
                    bgColor: 'bg-gray-50',
                    borderColor: 'border-gray-200',
                    icon: MinusCircle
                };
            default:
                return {
                    label: 'Unknown',
                    color: 'text-gray-500',
                    bgColor: 'bg-gray-50',
                    borderColor: 'border-gray-200',
                    icon: MinusCircle
                };
        }
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const row = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 }
    };

    return (
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="text-xl sm:text-2xl font-semibold text-black">
                        Daily Schedule
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                        Manage and view today's appointment slots
                    </p>
                </motion.div>

                {/* Desktop Table View */}
                <div className="hidden md:block bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                        Time Slot
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                        User Name
                                    </th>
                                </tr>
                            </thead>
                            <motion.tbody
                                variants={container}
                                initial="hidden"
                                animate="show"
                                className="divide-y divide-gray-200"
                            >
                                {scheduleData.map((slot) => {
                                    const statusConfig = getStatusConfig(slot.status);
                                    const StatusIcon = statusConfig.icon;

                                    return (
                                        <motion.tr
                                            key={slot.id}
                                            variants={row}
                                            whileHover={{ backgroundColor: '#f9fafb' }}
                                            className="transition-colors duration-150"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <Clock className="w-4 h-4 text-gray-400 mr-2" />
                                                    <span className="text-sm font-medium text-black">
                                                        {slot.time}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span
                                                    className={`
                            inline-flex items-center px-3 py-1 rounded-md text-xs font-medium
                            ${statusConfig.bgColor} ${statusConfig.color} border ${statusConfig.borderColor}
                          `}
                                                >
                                                    <StatusIcon className="w-3 h-3 mr-1.5" />
                                                    {statusConfig.label}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {slot.userName ? (
                                                    <div className="flex items-center">
                                                        <User className="w-4 h-4 text-[#4f39f6] mr-2" />
                                                        <span className="text-sm text-black">{slot.userName}</span>
                                                    </div>
                                                ) : (
                                                    <span className="text-sm text-gray-400">—</span>
                                                )}
                                            </td>
                                        </motion.tr>
                                    );
                                })}
                            </motion.tbody>
                        </table>
                    </div>
                </div>

                {/* Mobile Card View */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="md:hidden space-y-3"
                >
                    {scheduleData.map((slot) => {
                        const statusConfig = getStatusConfig(slot.status);
                        const StatusIcon = statusConfig.icon;

                        return (
                            <motion.div
                                key={slot.id}
                                variants={row}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white border border-gray-200 rounded-lg p-4"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 text-gray-400 mr-2" />
                                        <span className="text-sm font-semibold text-black">
                                            {slot.time}
                                        </span>
                                    </div>
                                    <span
                                        className={`
                      inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium
                      ${statusConfig.bgColor} ${statusConfig.color} border ${statusConfig.borderColor}
                    `}
                                    >
                                        <StatusIcon className="w-3 h-3 mr-1" />
                                        {statusConfig.label}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    {slot.userName ? (
                                        <>
                                            <User className="w-4 h-4 text-[#4f39f6] mr-2" />
                                            <span className="text-sm text-black">{slot.userName}</span>
                                        </>
                                    ) : (
                                        <span className="text-sm text-gray-400">No booking</span>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default DailySchedule;