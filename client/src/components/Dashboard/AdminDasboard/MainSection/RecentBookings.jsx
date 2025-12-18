import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';

const RecentBookings = () => {
    const [bookings] = useState([
        {
            id: 1,
            date: '2024-12-18',
            time: '02:30 PM',
            userName: 'David Brown',
            displayDate: 'Today'
        },
        {
            id: 2,
            date: '2024-12-18',
            time: '12:00 PM',
            userName: 'Lisa Anderson',
            displayDate: 'Today'
        },
        {
            id: 3,
            date: '2024-12-18',
            time: '10:30 AM',
            userName: 'James Wilson',
            displayDate: 'Today'
        },
        {
            id: 4,
            date: '2024-12-17',
            time: '03:00 PM',
            userName: 'Emma Thompson',
            displayDate: 'Yesterday'
        },
        {
            id: 5,
            date: '2024-12-17',
            time: '11:30 AM',
            userName: 'Robert Martinez',
            displayDate: 'Yesterday'
        }
    ]);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08
            }
        }
    };

    const item = {
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
                        Recent Bookings
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                        Latest appointment bookings from your clients
                    </p>
                </motion.div>

                {/* Bookings Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                >
                    {/* Desktop Table View */}
                    <div className="hidden md:block">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                        Time
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                        Client Name
                                    </th>
                                </tr>
                            </thead>
                            <motion.tbody
                                variants={container}
                                initial="hidden"
                                animate="show"
                                className="divide-y divide-gray-200"
                            >
                                {bookings.map((booking) => (
                                    <motion.tr
                                        key={booking.id}
                                        variants={item}
                                        whileHover={{ backgroundColor: '#f9fafb' }}
                                        className="transition-colors duration-150"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 text-[#4f39f6] mr-2" />
                                                <div>
                                                    <div className="text-sm font-medium text-black">
                                                        {booking.displayDate}
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        {booking.date}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <Clock className="w-4 h-4 text-gray-400 mr-2" />
                                                <span className="text-sm text-gray-700">
                                                    {booking.time}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <User className="w-4 h-4 text-[#4f39f6] mr-2" />
                                                <span className="text-sm font-medium text-black">
                                                    {booking.userName}
                                                </span>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </motion.tbody>
                        </table>
                    </div>

                    {/* Mobile List View */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="md:hidden divide-y divide-gray-200"
                    >
                        {bookings.map((booking) => (
                            <motion.div
                                key={booking.id}
                                variants={item}
                                whileTap={{ scale: 0.98 }}
                                className="p-4 transition-colors duration-150 active:bg-gray-50"
                            >
                                {/* User Name */}
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 rounded-full  bg-opacity-10 flex items-center justify-center mr-3">
                                        <User className="w-4 h-4 text-[#4f39f6]" />
                                    </div>
                                    <span className="text-sm font-semibold text-black">
                                        {booking.userName}
                                    </span>
                                </div>

                                {/* Date and Time */}
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center text-gray-600">
                                        <Calendar className="w-4 h-4 text-[#4f39f6] mr-1.5" />
                                        <span>{booking.displayDate}</span>
                                        <span className="mx-2 text-gray-300">•</span>
                                        <span className="text-xs text-gray-500">{booking.date}</span>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <Clock className="w-4 h-4 text-gray-400 mr-1.5" />
                                        <span>{booking.time}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Empty State (if needed) */}
                    {bookings.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            className="p-12 text-center"
                        >
                            <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                            <p className="text-sm text-gray-500">No recent bookings</p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default RecentBookings;