import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, CheckCircle2, ArrowLeft, Loader2 } from 'lucide-react';

const BookingConfirmation = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);

    // Sample booking data
    const bookingData = {
        date: 'December 18, 2025',
        day: 'Thursday',
        time: '10:30 AM',
        duration: '30 minutes'
    };

    const handleConfirm = () => {
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsConfirmed(true);
        }, 2000);
    };

    const handleChangeSlot = () => {
        // Logic to go back to slot selection
        console.log('Change slot clicked');
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1],
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.4, 0.25, 1]
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.4, 0.25, 1]
            }
        }
    };

    const successVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.4, 0.25, 1]
            }
        }
    };

    if (isConfirmed) {
        return (
            <section className="bg-white py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        className="text-center"
                        initial="hidden"
                        animate="visible"
                        variants={successVariants}
                    >
                        <motion.div
                            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-green-50 rounded-full mb-4 sm:mb-6"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 0.6 }}
                        >
                            <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" strokeWidth={2} />
                        </motion.div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">
                            Booking Confirmed!
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                            Your appointment has been successfully scheduled.
                        </p>
                        <motion.button
                            className="px-6 sm:px-8 py-3 sm:py-3.5 bg-[#4f39f6] text-white font-semibold rounded-lg text-sm sm:text-base hover:bg-[#4230d4] transition-colors duration-200"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => window.location.href = '/'}
                        >
                            Back to Home
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-white py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Header */}
                    <motion.div className="mb-6 sm:mb-8" variants={itemVariants}>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2 sm:mb-3">
                            Confirm Your Booking
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600">
                            Review your appointment details before confirming.
                        </p>
                    </motion.div>

                    {/* Confirmation Card */}
                    <motion.div
                        className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8"
                        variants={cardVariants}
                        whileHover={{ borderColor: '#e5e7eb' }}
                    >
                        <div className="space-y-5 sm:space-y-6">
                            {/* Date Section */}
                            <div className="flex items-start gap-4">
                                <motion.div
                                    className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" strokeWidth={2} />
                                </motion.div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                                        Date
                                    </p>
                                    <p className="text-lg sm:text-xl font-semibold text-black">
                                        {bookingData.date}
                                    </p>
                                    <p className="text-sm sm:text-base text-gray-600">
                                        {bookingData.day}
                                    </p>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-gray-200" />

                            {/* Time Section */}
                            <div className="flex items-start gap-4">
                                <motion.div
                                    className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" strokeWidth={2} />
                                </motion.div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                                        Time
                                    </p>
                                    <p className="text-lg sm:text-xl font-semibold text-black">
                                        {bookingData.time}
                                    </p>
                                    <p className="text-sm sm:text-base text-gray-600">
                                        Duration: {bookingData.duration}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Confirmation Badge */}
                        <motion.div
                            className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600">
                                <CheckCircle2 className="w-5 h-5 text-green-600" strokeWidth={2} />
                                <span>Your slot will be reserved upon confirmation</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                        variants={itemVariants}
                    >
                        {/* Primary Button */}
                        <motion.button
                            className="flex-1 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#4f39f6] text-white font-semibold rounded-lg text-sm sm:text-base hover:bg-[#4230d4] transition-colors duration-200 shadow-md inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                            onClick={handleConfirm}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Confirming...</span>
                                </>
                            ) : (
                                <>
                                    <CheckCircle2 className="w-5 h-5" />
                                    <span>Confirm Booking</span>
                                </>
                            )}
                        </motion.button>

                        {/* Secondary Button */}
                        <motion.button
                            className="sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-gray-700 font-medium rounded-lg text-sm sm:text-base border border-gray-300 hover:border-gray-400 hover:text-black transition-all duration-200 inline-flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleChangeSlot}
                            disabled={isSubmitting}
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Change Slot</span>
                        </motion.button>
                    </motion.div>

                    {/* Helper Text */}
                    <motion.p
                        className="text-xs sm:text-sm text-gray-500 text-center mt-4 sm:mt-6"
                        variants={itemVariants}
                    >
                        You can cancel or reschedule your appointment anytime before the scheduled time.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default BookingConfirmation;