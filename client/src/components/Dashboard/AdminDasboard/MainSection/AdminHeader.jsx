import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const AdminHeader = () => {
    const [selectedDate, setSelectedDate] = useState(
        new Date().toISOString().split('T')[0]
    );

    const fadeIn = {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: 'easeOut' }
    };

    return (
        <motion.header
            className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-6"
            {...fadeIn}
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    {/* Title Section */}
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h1 className="text-2xl sm:text-3xl font-semibold text-black tracking-tight">
                            Admin Dashboard
                        </h1>
                        <p className="mt-1 text-sm sm:text-base text-gray-600">
                            Overview of appointment slots and bookings
                        </p>
                    </motion.div>

                    {/* Date Selector Section */}
                    <motion.div
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="relative inline-flex items-center">
                            <div className="absolute left-3 pointer-events-none">
                                <Calendar className="w-5 h-5 text-gray-400" />
                            </div>
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="
                  pl-10 pr-4 py-2.5 
                  text-sm sm:text-base
                  border border-gray-300 
                  rounded-lg 
                  bg-white 
                  text-black
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-[#4f39f6] 
                  focus:border-transparent
                  transition-all
                  duration-200
                  cursor-pointer
                  hover:border-gray-400
                  min-w-[160px] sm:min-w-[180px]
                "
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.header>
    );
};

export default AdminHeader;