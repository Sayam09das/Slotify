import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const BookSlotHead = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: 'easeOut'
            }
        }
    };

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut'
            }
        }
    };

    return (
        <div className="w-full bg-white">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
            >
                {/* Icon */}
                <motion.div
                    variants={iconVariants}
                    className="flex justify-center mb-4 sm:mb-6"
                >
                    <div className="p-3 sm:p-4 bg-gray-50 border border-gray-200 rounded-lg">
                        <Calendar className="text-black" size={28} />
                    </div>
                </motion.div>

                {/* Title */}
                <motion.h1
                    variants={itemVariants}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black text-center mb-3 sm:mb-4"
                >
                    Book a Time Slot
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={itemVariants}
                    className="text-sm sm:text-base md:text-lg text-gray-600 text-center max-w-2xl mx-auto"
                >
                    Select a date and choose an available time slot
                </motion.p>

                {/* Decorative Line */}
                <motion.div
                    variants={itemVariants}
                    className="mt-6 sm:mt-8 flex justify-center"
                >
                    <div className="w-16 sm:w-20 h-px bg-gray-200" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default BookSlotHead;