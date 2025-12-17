import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Calendar, ArrowLeft, RefreshCw } from 'lucide-react';

const SlotUnavailable = () => {
    // Sample attempted booking data
    const attemptedBooking = {
        date: 'December 18, 2025',
        time: '10:30 AM'
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1]
            }
        }
    };

    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: 0.8
            }
        }
    };


    return (
        <section className="bg-white min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <motion.div
                className="max-w-2xl w-full"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Error Icon */}
                <motion.div
                    className="flex justify-center mb-6 sm:mb-8"
                    variants={itemVariants}
                >
                    <motion.div
                        className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
                        variants={iconVariants}
                    >
                        {/* Outer Circle */}
                        <motion.div
                            className="absolute inset-0 bg-red-50 rounded-full flex items-center justify-center"
                            animate={{
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <AlertCircle
                                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-red-600"
                                strokeWidth={2}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Title */}
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center mb-3 sm:mb-4"
                    variants={itemVariants}
                >
                    Slot Unavailable
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-8 sm:mb-10 md:mb-12 max-w-xl mx-auto px-4"
                    variants={itemVariants}
                >
                    The selected time slot is no longer available. It may have been booked by another user.
                </motion.p>

                {/* Attempted Booking Card */}
                <motion.div
                    className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 mb-6 sm:mb-8"
                    variants={itemVariants}
                >
                    <div className="space-y-4 sm:space-y-5">
                        {/* Header */}
                        <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center">
                                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" strokeWidth={2} />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900">Attempted Booking</p>
                                <p className="text-xs sm:text-sm text-gray-500">This slot is no longer available</p>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm sm:text-base text-gray-600">Date</span>
                                <span className="text-sm sm:text-base font-semibold text-gray-900">{attemptedBooking.date}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm sm:text-base text-gray-600">Time</span>
                                <span className="text-sm sm:text-base font-semibold text-gray-900">{attemptedBooking.time}</span>
                            </div>
                        </div>

                        {/* Status Badge */}
                        <div className="pt-4 border-t border-gray-200">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 border border-red-200 rounded-lg">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-xs sm:text-sm font-medium text-red-700">Already Booked</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
                    variants={itemVariants}
                >
                    {/* Primary Button */}
                    <motion.button
                        className="flex-1 px-6 sm:px-8 py-3.5 sm:py-4 bg-black text-white font-semibold rounded-lg text-sm sm:text-base hover:bg-gray-800 transition-colors duration-200 inline-flex items-center justify-center gap-2 shadow-md cursor-not-allowed"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <RefreshCw className="w-5 h-5" strokeWidth={2} />
                        <span>Choose Another Slot</span>
                    </motion.button>

                    {/* Secondary Button */}
                    <motion.button
                        className="flex-1 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-gray-700 font-medium rounded-lg text-sm sm:text-base border border-gray-300 hover:border-gray-400 hover:text-black transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-not-allowed"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <ArrowLeft className="w-5 h-5" strokeWidth={2} />
                        <span>Back to Home</span>
                    </motion.button>
                </motion.div>

                {/* Help Section */}
                <motion.div
                    className="bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6"
                    variants={itemVariants}
                >
                    <h3 className="text-sm sm:text-base font-semibold text-black mb-3">
                        What happened?
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                        <motion.li
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2 }}
                        >
                            <span className="text-gray-400 mt-0.5">•</span>
                            <span>This time slot was just booked by another user</span>
                        </motion.li>
                        <motion.li
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4 }}
                        >
                            <span className="text-gray-400 mt-0.5">•</span>
                            <span>Availability updates in real-time to prevent conflicts</span>
                        </motion.li>
                        <motion.li
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.6 }}
                        >
                            <span className="text-gray-400 mt-0.5">•</span>
                            <span>Please select another available time slot</span>
                        </motion.li>
                    </ul>
                </motion.div>

                {/* Footer Note */}
                <motion.p
                    className="text-xs sm:text-sm text-gray-500 text-center mt-6 sm:mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                >
                    Need assistance?{' '}
                    <a href="mailto:support@slotify.com" className="text-black hover:underline font-medium">
                        Contact Support
                    </a>
                </motion.p>
            </motion.div>
        </section>
    );
};

export default SlotUnavailable;