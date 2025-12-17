import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Settings, Key } from 'lucide-react';

const HowCanWeHelp = () => {
    const supportTopics = [
        {
            icon: Calendar,
            title: 'Booking Issues',
            description: 'Help with booking, confirmation, or changes.'
        },
        {
            icon: Clock,
            title: 'Slot Availability',
            description: 'Understanding available and unavailable slots.'
        },
        {
            icon: Settings,
            title: 'Admin Slot Management',
            description: 'Guidance on creating and managing time slots.'
        },
        {
            icon: Key,
            title: 'Account Access',
            description: 'Login, password, and account-related support.'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut'
            }
        }
    };

    return (
        <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4">
                        How Can We Help?
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose a topic below to find the support you need
                    </p>
                </motion.div>

                {/* Support Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {supportTopics.map((topic, index) => {
                        const IconComponent = topic.icon;
                        return (
                            <motion.div
                                key={index}
                                className="border border-gray-200 rounded-xl p-6 sm:p-8 bg-white cursor-pointer"
                                variants={cardVariants}
                                whileHover={{
                                    y: -4,
                                    borderColor: '#4f39f6',
                                    transition: { duration: 0.3 }
                                }}
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-5"
                                    style={{ backgroundColor: 'rgba(79, 57, 246, 0.1)' }}>
                                    <IconComponent
                                        className="w-6 h-6 sm:w-7 sm:h-7"
                                        style={{ color: '#4f39f6' }}
                                        strokeWidth={1.5}
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3">
                                    {topic.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    {topic.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default HowCanWeHelp;