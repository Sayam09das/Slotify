import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

const MainHeader = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1]
            }
        }
    };

    return (
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
                <motion.div
                    className="max-w-4xl"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Breadcrumb */}
                    <motion.nav
                        className="flex items-center gap-2 text-sm text-gray-500 mb-4 sm:mb-6"
                        variants={itemVariants}
                    >
                        <a
                            href="/"
                            className="hover:text-gray-700 transition-colors duration-200"
                        >
                            Home
                        </a>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-gray-900 font-medium">Book a Slot</span>
                    </motion.nav>

                    {/* Title Section */}
                    <motion.div
                        className="space-y-3 sm:space-y-4"
                        variants={itemVariants}
                    >
                        {/* Icon Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Calendar className="w-4 h-4 text-gray-700" strokeWidth={2} />
                            <span className="text-sm font-medium text-gray-700">Appointment Booking</span>
                        </motion.div>

                        {/* Main Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                            Book a Time Slot
                        </h1>

                        {/* Supporting Text */}
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
                            Select a date and choose an available time slot to schedule your appointment.
                        </p>
                    </motion.div>

                    {/* Quick Info Cards */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8"
                        variants={itemVariants}
                    >
                        {[
                            { icon: Clock, text: 'Instant confirmation', color: 'text-gray-700' },
                            { icon: Calendar, text: 'Choose your preferred time', color: 'text-gray-700' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200"
                                whileHover={{
                                    scale: 1.02,
                                    backgroundColor: '#f9fafb',
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                                    <item.icon className={`w-5 h-5 ${item.color}`} strokeWidth={2} />
                                </div>
                                <span className="text-sm sm:text-base text-gray-700 font-medium">{item.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        className="mt-8 sm:mt-10 md:mt-12"
                        variants={itemVariants}
                    >
                        <div className="h-px bg-gray-200" />
                    </motion.div>
                </motion.div>
            </div>
        </header>
    );
};

export default MainHeader;