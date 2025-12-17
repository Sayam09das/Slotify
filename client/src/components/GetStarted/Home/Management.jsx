import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Scissors, Briefcase, Store } from 'lucide-react';
import { Highlighter } from "@/components/ui/highlighter"

const Management = () => {
    const audiences = [
        {
            icon: Activity,
            title: 'Clinics & Healthcare Centers',
            description: 'Manage patient appointments without scheduling conflicts.'
        },
        {
            icon: Scissors,
            title: 'Salons & Wellness Services',
            description: 'Organize bookings and avoid missed or overlapping slots.'
        },
        {
            icon: Briefcase,
            title: 'Service Centers & Consultants',
            description: 'Schedule client visits efficiently with clear time slots.'
        },
        {
            icon: Store,
            title: 'Small Businesses',
            description: 'Simple appointment management without complex systems.'
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
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
        <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={headerVariants}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-4">
                        <Highlighter
                            action="underline"
                            color="#c7d2fe"      // very light indigo
                            strokeWidth={3}
                            animationDuration={600}
                            isView
                        >
                            <span className="bg-gradient-to-r  from-indigo-600 via-indigo-500 to-indigo-600 bg-clip-text text-transparent">
                                Who It's For
                            </span>
                        </Highlighter>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
                        Built for time-based service businesses that value efficiency and professionalism
                    </p>
                </motion.div>

                {/* Audience Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {audiences.map((audience, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.3, ease: 'easeOut' }
                            }}
                            className="bg-gray-50 rounded-lg sm:rounded-xl border border-gray-200 p-6 sm:p-7 md:p-8 hover:bg-white hover:border-gray-300 transition-all duration-300 flex flex-col"
                        >
                            {/* Icon Container */}
                            <motion.div
                                className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg border border-gray-200 bg-white flex items-center justify-center mb-5 sm:mb-6"
                                whileHover={{
                                    scale: 1.08,
                                    rotate: 3,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <audience.icon
                                    className="w-7 h-7 sm:w-8 sm:h-8 text-black"
                                    strokeWidth={1.5}
                                />
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3 leading-snug">
                                {audience.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">
                                {audience.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Note */}
                <motion.div
                    className="mt-10 sm:mt-12 md:mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto px-4">
                        Join businesses that trust Slotify to streamline their appointment scheduling
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Management;