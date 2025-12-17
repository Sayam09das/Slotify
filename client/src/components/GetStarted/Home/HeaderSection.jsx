import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';

const HeaderSection = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
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

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.4, 0.25, 1]
            }
        }
    };

    const floatingVariants = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const bounceVariants = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const pulseVariants = {
        animate: {
            opacity: [1, 0.8, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        className="space-y-6 sm:space-y-8"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        {/* Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-3 sm:px-4 py-2"
                        >
                            <motion.div
                                className="w-2 h-2 bg-[#4f39f6] rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <span className="text-sm font-medium text-gray-700">Simple scheduling for teams</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight"
                        >
                            Smart Appointment Scheduling for{" "}
                            <span className="text-[#4f39f6]">Service Businesses</span>
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            variants={itemVariants}
                            className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
                        >
                            Easy scheduling for service businesses. Eliminate double bookings and reduce no-shows. Keep your schedule organized—all in one platform.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
                        >
                            <motion.a
                                href="/register"
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#4f39f6] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-md transition-colors duration-200 hover:bg-[#4230d4] w-full sm:w-auto"
                            >
                                Get Started Free
                                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                            </motion.a>

                            <motion.a
                                href="/learn-more"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-700 transition-all duration-200 hover:border-[#4f39f6] hover:text-[#4f39f6] w-full sm:w-auto"
                            >
                                Learn More
                            </motion.a>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-1 xs:grid-cols-2 gap-3 pt-4 text-xs sm:text-sm text-gray-500"
                        >
                            {[
                                "No credit card required",
                                "14-day free trial",
                                "Secure & encrypted",
                                "Set up in minutes",
                            ].map((text, idx) => (
                                <motion.div
                                    key={text}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 + idx * 0.1 }}
                                    className="flex items-center gap-2"
                                >
                                    <svg
                                        className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-green-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="leading-none">{text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Visual - Hidden on mobile, visible on large screens */}
                    <motion.div
                        className="relative hidden lg:block"
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                    >
                        <motion.div
                            className="relative"
                            variants={floatingVariants}
                            animate="animate"
                        >
                            {/* Main Card */}
                            <motion.div
                                className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="space-y-6">
                                    {/* Calendar Header */}
                                    <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                                        <div className="flex items-center space-x-3">
                                            <motion.div
                                                className="bg-[#4f39f6] bg-opacity-10 p-2 rounded-lg"
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#4f39f6]" />
                                            </motion.div>
                                            <div>
                                                <h3 className="text-base sm:text-lg font-semibold text-black">Today's Schedule</h3>
                                                <p className="text-xs sm:text-sm text-gray-500">December 16, 2025</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Appointments */}
                                    <div className="space-y-3 sm:space-y-4">
                                        {[
                                            { time: '09:00 AM', name: 'Sarah Johnson', service: 'Haircut & Style', status: 'confirmed' },
                                            { time: '11:30 AM', name: 'Michael Chen', service: 'Consultation', status: 'confirmed' },
                                            { time: '02:00 PM', name: 'Emma Davis', service: 'Color Treatment', status: 'pending' }
                                        ].map((apt, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 1 + idx * 0.2 }}
                                                whileHover={{ scale: 1.02, x: 5 }}
                                                className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                                            >
                                                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg shadow-sm">
                                                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#4f39f6]" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-xs sm:text-sm font-semibold text-black">{apt.time}</p>
                                                    <p className="text-xs sm:text-sm text-gray-600 truncate">{apt.name}</p>
                                                    <p className="text-xs text-gray-500">{apt.service}</p>
                                                </div>
                                                <div className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${apt.status === 'confirmed'
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-yellow-100 text-yellow-700'
                                                    }`}>
                                                    {apt.status}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Stats */}
                                    <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-gray-200">
                                        {[
                                            { value: '24', label: 'Bookings', color: 'text-[#4f39f6]' },
                                            { value: '98%', label: 'Attendance', color: 'text-green-600' },
                                            { value: '0', label: 'Conflicts', color: 'text-black' }
                                        ].map((stat, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 1.6 + idx * 0.1 }}
                                                className="text-center"
                                            >
                                                <div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                                                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Elements */}
                            <motion.div
                                className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-[#4f39f6] rounded-full p-3 sm:p-4 shadow-lg"
                                variants={bounceVariants}
                                animate="animate"
                            >
                                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 bg-white rounded-xl shadow-lg p-2 sm:p-3 border border-gray-200"
                                variants={pulseVariants}
                                animate="animate"
                            >
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-xs font-medium text-gray-700">Live Updates</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Mobile Preview Card */}
                    <motion.div
                        className="lg:hidden bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-200"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="bg-[#4f39f6] bg-opacity-10 p-2 rounded-lg">
                                <Calendar className="w-5 h-5 text-[#4f39f6]" />
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-black">Quick Preview</h3>
                                <p className="text-xs text-gray-500">Today's appointments</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 text-center">
                            <div>
                                <div className="text-lg font-bold text-[#4f39f6]">24</div>
                                <div className="text-xs text-gray-500">Bookings</div>
                            </div>
                            <div>
                                <div className="text-lg font-bold text-green-600">98%</div>
                                <div className="text-xs text-gray-500">Attendance</div>
                            </div>
                            <div>
                                <div className="text-lg font-bold text-black">0</div>
                                <div className="text-xs text-gray-500">Conflicts</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeaderSection;