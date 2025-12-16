import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, CheckCircle2, XCircle } from 'lucide-react';

const SlotSelection = () => {
    const [selectedDate, setSelectedDate] = useState('2025-12-18');
    const [selectedSlot, setSelectedSlot] = useState(null);

    // Sample slot data
    const timeSlots = [
        { id: 1, time: '09:00 AM', available: true },
        { id: 2, time: '09:30 AM', available: true },
        { id: 3, time: '10:00 AM', available: false },
        { id: 4, time: '10:30 AM', available: true },
        { id: 5, time: '11:00 AM', available: false },
        { id: 6, time: '11:30 AM', available: true },
        { id: 7, time: '12:00 PM', available: true },
        { id: 8, time: '12:30 PM', available: false },
        { id: 9, time: '02:00 PM', available: true },
        { id: 10, time: '02:30 PM', available: true },
        { id: 11, time: '03:00 PM', available: true },
        { id: 12, time: '03:30 PM', available: false },
    ];

    const availableCount = timeSlots.filter(slot => slot.available).length;
    const hasSlots = timeSlots.length > 0;

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.25, 0.4, 0.25, 1]
            }
        }
    };

    const slotVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <section className="bg-white py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Date Selector */}
                    <motion.div
                        className="mb-8 sm:mb-10 md:mb-12"
                        variants={itemVariants}
                    >
                        <label className="block text-sm font-semibold text-black mb-3 sm:mb-4">
                            Select Date
                        </label>
                        <div className="relative max-w-xs">
                            <motion.input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="w-full px-4 py-3 sm:py-3.5 border border-gray-300 rounded-lg text-base text-black focus:outline-none focus:ring-2 focus:ring-[#4f39f6] focus:border-transparent transition-all duration-200"
                                whileFocus={{ scale: 1.01 }}
                            />
                            <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Header with slot count */}
                    <motion.div
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-3"
                        variants={itemVariants}
                    >
                        <div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2">
                                Available Time Slots
                            </h2>
                            <p className="text-sm sm:text-base text-gray-600">
                                Select a time slot to continue.
                            </p>
                        </div>

                        {hasSlots && (
                            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                <span className="text-sm font-medium text-gray-700">
                                    {availableCount} slots available
                                </span>
                            </div>
                        )}
                    </motion.div>

                    {/* Time Slots Grid */}
                    {hasSlots ? (
                        <motion.div
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
                            variants={containerVariants}
                        >
                            <AnimatePresence>
                                {timeSlots.map((slot) => (
                                    <motion.button
                                        key={slot.id}
                                        variants={slotVariants}
                                        layout
                                        disabled={!slot.available}
                                        onClick={() => slot.available && setSelectedSlot(slot.id)}
                                        className={`
                                            relative px-4 py-4 sm:py-5 rounded-lg border-2 text-sm sm:text-base font-semibold
                                            transition-all duration-200 flex flex-col items-center justify-center gap-2
                                            ${slot.available
                                                ? selectedSlot === slot.id
                                                    ? 'border-[#4f39f6] bg-[#4f39f6] text-white shadow-md'
                                                    : 'border-gray-300 bg-white text-black hover:border-[#4f39f6] hover:shadow-sm'
                                                : 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                                            }
                                        `}
                                        whileHover={slot.available ? { scale: 1.03, y: -2 } : {}}
                                        whileTap={slot.available ? { scale: 0.98 } : {}}
                                    >
                                        <Clock className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                                        <span>{slot.time}</span>

                                        {!slot.available && (
                                            <motion.span
                                                className="absolute top-1 right-1"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                <XCircle className="w-4 h-4 text-gray-400" />
                                            </motion.span>
                                        )}

                                        {selectedSlot === slot.id && (
                                            <motion.span
                                                className="absolute top-1 right-1"
                                                initial={{ scale: 0, rotate: -180 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{ type: "spring", stiffness: 200 }}
                                            >
                                                <CheckCircle2 className="w-4 h-4 text-white" />
                                            </motion.span>
                                        )}
                                    </motion.button>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    ) : (
                        // Empty State
                        <motion.div
                            className="text-center py-16 sm:py-20 md:py-24"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full mb-4 sm:mb-6"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
                            </motion.div>
                            <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
                                No Slots Available
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto">
                                There are no available time slots for the selected date. Please choose another date.
                            </p>
                        </motion.div>
                    )}

                    {/* Legend */}
                    <motion.div
                        className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-200"
                        variants={itemVariants}
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-gray-300 rounded bg-white"></div>
                            <span className="text-xs sm:text-sm text-gray-600">Available</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-[#4f39f6] bg-[#4f39f6] rounded"></div>
                            <span className="text-xs sm:text-sm text-gray-600">Selected</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-gray-200 bg-gray-50 rounded"></div>
                            <span className="text-xs sm:text-sm text-gray-600">Booked</span>
                        </div>
                    </motion.div>

                    {/* Continue Button */}
                    <AnimatePresence>
                        {selectedSlot && (
                            <motion.div
                                className="mt-8 sm:mt-10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.button
                                    className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-[#4f39f6] text-white font-semibold rounded-lg text-base sm:text-lg hover:bg-[#4230d4] transition-colors duration-200 shadow-md"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Continue with {timeSlots.find(s => s.id === selectedSlot)?.time}
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default SlotSelection;