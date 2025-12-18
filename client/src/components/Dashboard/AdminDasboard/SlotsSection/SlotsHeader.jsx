import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Filter } from 'lucide-react';

const SlotsHeader = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [showDateFilter, setShowDateFilter] = useState(false);

    const fadeIn = {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: 'easeOut' }
    };

    const handleClearFilter = () => {
        setSelectedDate('');
        setShowDateFilter(false);
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
                            Manage Slots
                        </h1>
                        <p className="mt-1 text-sm sm:text-base text-gray-600">
                            Create, view, and manage appointment time slots
                        </p>
                    </motion.div>

                    {/* Filter Section */}
                    <motion.div
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {!showDateFilter ? (
                            <motion.button
                                onClick={() => setShowDateFilter(true)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="
                  px-4 py-2.5
                  text-sm sm:text-base
                  border border-gray-300
                  rounded-lg
                  bg-white
                  text-black
                  hover:border-gray-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#4f39f6]
                  focus:border-transparent
                  transition-all
                  duration-200
                  flex items-center gap-2
                "
                            >
                                <Filter className="w-4 h-4" />
                                <span className="hidden sm:inline">Filter by Date</span>
                                <span className="sm:hidden">Filter</span>
                            </motion.button>
                        ) : (
                            <motion.div
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
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
                                {selectedDate && (
                                    <motion.button
                                        onClick={handleClearFilter}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="
                      px-3 py-2.5
                      text-sm
                      text-gray-600
                      hover:text-black
                      transition-colors
                      duration-200
                    "
                                    >
                                        Clear
                                    </motion.button>
                                )}
                            </motion.div>
                        )}
                    </motion.div>
                </div>

                {/* Active Filter Indicator */}
                {selectedDate && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 flex items-center gap-2 text-sm"
                    >
                        <span className="text-gray-600">Showing slots for:</span>
                        <span className="px-3 py-1 bg-[#4f39f6] bg-opacity-10 text-[#fff] rounded-md font-medium">
                            {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', {
                                weekday: 'short',
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                            })}
                        </span>
                    </motion.div>
                )}
            </div>
        </motion.header>
    );
};

export default SlotsHeader;