import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Lock, ArrowRight } from 'lucide-react';

const Works = () => {
    const steps = [
        {
            number: '01',
            icon: Calendar,
            title: 'Create Time Slots',
            description: 'Admin defines available appointment time slots for a specific date.',
            color: 'from-purple-500 to-indigo-600',
            bgAccent: 'bg-purple-50'
        },
        {
            number: '02',
            icon: User,
            title: 'Users Book a Slot',
            description: 'Customers view available slots and book a suitable time.',
            color: 'from-indigo-500 to-blue-600',
            bgAccent: 'bg-indigo-50'
        },
        {
            number: '03',
            icon: Lock,
            title: 'Slot Gets Locked',
            description: 'Once booked, the slot is automatically locked to prevent overbooking.',
            color: 'from-blue-500 to-purple-600',
            bgAccent: 'bg-blue-50'
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.4, 0.25, 1]
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.4, 0.25, 1]
            }
        }
    };

    const badgeVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1]
            }
        }
    };

    return (
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-purple-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Subtle Background Pattern - Hidden on mobile for performance */}
            <div className="absolute inset-0 opacity-30 hidden md:block">
                <motion.div
                    className="absolute top-20 left-10 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={headerVariants}
                >
                    <motion.div
                        className="inline-block mb-3 sm:mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            Simple Process
                        </span>
                    </motion.div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 bg-gradient-to-r from-gray-900 via-indigo-500 to-indigo-900 bg-clip-text text-transparent leading-tight px-4">
                        How It Works
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
                        Simple three-step process to manage your appointments efficiently and prevent double bookings
                    </p>
                </motion.div>

                {/* Steps Container */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {/* Connector Lines - Desktop Only */}
                    <motion.div
                        className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-auto"
                        style={{ width: '80%', left: '10%' }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="relative group"
                            variants={cardVariants}
                        >
                            {/* Card */}
                            <motion.div
                                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                {/* Icon Container */}
                                <div className="relative mb-6 sm:mb-8">
                                    <motion.div
                                        className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl ${step.bgAccent} flex items-center justify-center relative overflow-hidden mx-auto md:mx-0`}
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: 5,
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        {/* Gradient Overlay on Hover */}
                                        <motion.div
                                            className={`absolute inset-0 bg-gradient-to-br ${step.color}`}
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 0.1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <motion.div
                                            whileHover={{
                                                scale: 1.1,
                                                transition: { duration: 0.3 }
                                            }}
                                        >
                                            <step.icon className="w-8 h-8 sm:w-9 sm:h-9 lg:w-11 lg:h-11 text-gray-800 relative z-10 group-hover:text-purple-700 transition-colors duration-300" strokeWidth={1.5} />
                                        </motion.div>
                                    </motion.div>

                                    {/* Step Number Badge */}
                                    <motion.div
                                        className={`absolute -top-2 -right-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg hidden md:flex`}
                                        initial={{ scale: 0, rotate: -180 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.3 + index * 0.2,
                                            type: "spring",
                                            stiffness: 200
                                        }}
                                    >
                                        <span className="text-white font-bold text-xs sm:text-sm">{step.number}</span>
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="flex-grow text-center md:text-left">
                                    {/* Mobile Step Number */}
                                    <motion.div
                                        className="md:hidden text-sm font-semibold text-gray-400 mb-2 tracking-wider"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        {step.number}
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-purple-700 transition-colors duration-300">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                                        {step.description}
                                    </p>

                                    {/* Decorative Element */}
                                    <motion.div
                                        className={`w-12 sm:w-16 h-1 bg-gradient-to-r ${step.color} rounded-full mx-auto md:mx-0`}
                                        initial={{ width: 0, opacity: 0 }}
                                        whileHover={{ width: "4rem", opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>

                                {/* Arrow Connector - Tablet and Desktop Only */}
                                {index < steps.length - 1 && (
                                    <motion.div
                                        className="hidden md:flex absolute -right-6 lg:-right-8 top-1/2 transform -translate-y-1/2 text-gray-300 z-20"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                            transition: { delay: 0.8 + index * 0.2 }
                                        }}
                                        viewport={{ once: true }}
                                        animate={{
                                            x: [0, 5, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8" strokeWidth={2} />
                                    </motion.div>
                                )}
                            </motion.div>

                            {/* Mobile Arrow Connector */}
                            {index < steps.length - 1 && (
                                <motion.div
                                    className="flex md:hidden justify-center my-4"
                                    initial={{ opacity: 0, scaleY: 0 }}
                                    whileInView={{ opacity: 1, scaleY: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.2 }}
                                >
                                    <div className="w-1 h-8 bg-gradient-to-b from-gray-200 to-transparent"></div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA Section */}
                <motion.div
                    className="mt-12 sm:mt-16 md:mt-20 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={badgeVariants}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-full shadow-sm border border-gray-200 text-sm sm:text-base text-gray-600"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.span
                            className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [1, 0.6, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <span className="font-medium">Used by 1000+ businesses worldwide</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Works;