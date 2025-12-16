import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Clock, Home, Plus } from 'lucide-react';

const Success = () => {
    // Sample booking data
    const bookingDetails = {
        date: 'December 18, 2025',
        day: 'Thursday',
        time: '10:30 AM',
        confirmationId: 'SLT-2025-12184'
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

    const checkmarkVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.3
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
                {/* Success Icon */}
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
                            className="absolute inset-0 bg-green-50 rounded-full flex items-center justify-center"
                            animate={{
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <CheckCircle2
                                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-green-600"
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
                    Booking Confirmed
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-8 sm:mb-10 md:mb-12 max-w-xl mx-auto px-4"
                    variants={itemVariants}
                >
                    Your appointment has been successfully scheduled. We've sent a confirmation to your email.
                </motion.p>

                {/* Booking Details Card */}
                <motion.div
                    className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 mb-6 sm:mb-8"
                    variants={itemVariants}
                    whileHover={{ borderColor: '#e5e7eb', scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="space-y-5 sm:space-y-6">
                        {/* Date */}
                        <div className="flex items-center gap-4 sm:gap-5">
                            <motion.div
                                className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" strokeWidth={2} />
                            </motion.div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                                    Appointment Date
                                </p>
                                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black">
                                    {bookingDetails.date}
                                </p>
                                <p className="text-sm sm:text-base text-gray-600">
                                    {bookingDetails.day}
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gray-200" />

                        {/* Time */}
                        <div className="flex items-center gap-4 sm:gap-5">
                            <motion.div
                                className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" strokeWidth={2} />
                            </motion.div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                                    Appointment Time
                                </p>
                                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black">
                                    {bookingDetails.time}
                                </p>
                            </div>
                        </div>

                        {/* Confirmation ID */}
                        <motion.div
                            className="pt-5 sm:pt-6 border-t border-gray-200"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            <p className="text-xs sm:text-sm text-gray-500 text-center">
                                Confirmation ID: <span className="font-mono font-medium text-gray-700">{bookingDetails.confirmationId}</span>
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
                    variants={itemVariants}
                >
                    {/* Primary Button */}
                    <motion.button
                        className="flex-1 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#4f39f6] text-white font-semibold rounded-lg text-sm sm:text-base hover:bg-[#4230d4] transition-colors duration-200 inline-flex items-center justify-center gap-2 shadow-md"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => window.location.href = '/'}
                    >
                        <Home className="w-5 h-5" strokeWidth={2} />
                        <span>Back to Home</span>
                    </motion.button>

                    {/* Secondary Button */}
                    <motion.button
                        className="flex-1 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-gray-700 font-medium rounded-lg text-sm sm:text-base border border-gray-300 hover:border-gray-400 hover:text-black transition-all duration-200 inline-flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => window.location.href = '/book-slot'}
                    >
                        <Plus className="w-5 h-5" strokeWidth={2} />
                        <span>Book Another Slot</span>
                    </motion.button>
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    className="bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6"
                    variants={itemVariants}
                >
                    <h3 className="text-sm sm:text-base font-semibold text-black mb-2 sm:mb-3">
                        What's Next?
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                        <motion.li
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2 }}
                        >
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                            <span>Check your email for booking confirmation and details</span>
                        </motion.li>
                        <motion.li
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4 }}
                        >
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                            <span>You can cancel or reschedule anytime from your dashboard</span>
                        </motion.li>
                        <motion.li
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.6 }}
                        >
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                            <span>You'll receive a reminder 24 hours before your appointment</span>
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
                    Need help? Contact us at{' '}
                    <a href="mailto:support@slotify.com" className="text-[#4f39f6] hover:underline">
                        support@slotify.com
                    </a>
                </motion.p>
            </motion.div>
        </section>
    );
};

export default Success;