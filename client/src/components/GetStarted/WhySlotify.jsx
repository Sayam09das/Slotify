import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Settings, Shield } from 'lucide-react';

const WhySlotify = () => {
    const reasons = [
        {
            icon: CheckCircle2,
            title: 'No Overbooking',
            description: 'Automatically prevents double bookings by locking slots in real time.'
        },
        {
            icon: Calendar,
            title: 'Clear & Organized Scheduling',
            description: 'Provides a structured daily view of all appointments.'
        },
        {
            icon: Settings,
            title: 'Simple Setup & Usage',
            description: 'No complex configuration or training required.'
        },
        {
            icon: Shield,
            title: 'Reliable for Daily Operations',
            description: 'Designed for real-world use in service-based businesses.'
        }
    ];

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
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1]
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
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
        <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-10 sm:mb-12 md:mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={headerVariants}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-500 mb-3 sm:mb-4">
                        Why Slotify
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
                        Move beyond manual scheduling and eliminate the chaos of appointment management
                    </p>
                </motion.div>

                {/* Reasons Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-7 lg:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                x: 4,
                                transition: { duration: 0.3, ease: 'easeOut' }
                            }}
                            className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-6 sm:p-7 md:p-8 hover:border-gray-300 transition-colors duration-300 flex gap-4 sm:gap-5"
                        >
                            {/* Icon Container */}
                            <motion.div
                                className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <reason.icon
                                    className="w-6 h-6 sm:w-7 sm:h-7 text-black"
                                    strokeWidth={1.5}
                                />
                            </motion.div>

                            {/* Content */}
                            <div className="flex-grow">
                                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 leading-snug">
                                    {reason.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Value Statement */}
                <motion.div
                    className="mt-10 sm:mt-12 md:mt-16 bg-white rounded-lg sm:rounded-xl border border-gray-200 p-6 sm:p-8 md:p-10 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium mb-2">
                        Trusted by service businesses for efficient appointment management
                    </p>
                    <p className="text-sm sm:text-base text-gray-500">
                        Say goodbye to scheduling conflicts and manual coordination
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default WhySlotify;