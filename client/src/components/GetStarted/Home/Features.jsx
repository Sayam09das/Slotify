import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Clock, Calendar, Layout } from 'lucide-react';
import { Highlighter } from "@/components/ui/highlighter"

const Features = () => {
    const features = [
        {
            icon: Lock,
            title: 'Prevents Overbooking',
            description: 'Automatically locks slots once booked to avoid conflicts.'
        },
        {
            icon: Clock,
            title: 'Simple Slot Management',
            description: 'Create, update, and manage time slots with ease.'
        },
        {
            icon: Calendar,
            title: 'Clear Daily Schedule',
            description: 'View all booked and available slots for any day.'
        },
        {
            icon: Layout,
            title: 'User-Friendly Interface',
            description: 'Clean and simple design for both admins and users.'
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
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-4">
                        <Highlighter
                            action="underline"
                            color="#B8DB80"
                            strokeWidth={3}
                            animationDuration={600}
                            isView
                        >
                            <span className="bg-gradient-to-r  from-indigo-600 via-indigo-500 to-indigo-600 bg-clip-text text-transparent">
                                Key Features
                            </span>
                        </Highlighter>

                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                        Everything you need to manage{" "}
                        <Highlighter
                            action="underline"
                            color="#F39EB6"   // very light gray
                            strokeWidth={2}
                            animationDuration={450}
                            isView
                        >
                            appointments efficiently
                        </Highlighter>{" "}
                        and professionally
                    </p>

                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3, ease: 'easeOut' }
                            }}
                            className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-6 sm:p-8 md:p-10 hover:border-gray-300 transition-colors duration-300"
                        >
                            {/* Icon */}
                            <motion.div
                                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg border border-gray-200 flex items-center justify-center mb-5 sm:mb-6"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <feature.icon
                                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black"
                                    strokeWidth={1.5}
                                />
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-2 sm:mb-3">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;