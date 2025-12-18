import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Clock, Users } from 'lucide-react';

const SummaryStats = () => {
    const stats = [
        {
            id: 1,
            title: 'Total Slots Today',
            value: '48',
            icon: Calendar,
            description: 'Available time slots'
        },
        {
            id: 2,
            title: 'Booked Slots',
            value: '32',
            icon: CheckCircle,
            description: 'Confirmed appointments'
        },
        {
            id: 3,
            title: 'Available Slots',
            value: '16',
            icon: Clock,
            description: 'Open for booking'
        },
        {
            id: 4,
            title: 'Upcoming Appointments',
            value: '8',
            icon: Users,
            description: 'Next 3 hours'
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
                >
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={stat.id}
                                variants={item}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.2 }}
                                className="
                                            bg-white 
                                        border border-gray-200 
                                        rounded-lg 
                                        p-5 sm:p-6
                                        hover:border-gray-300
                                        transition-all
                                        duration-200
                                        "
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-600 mb-1">
                                            {stat.title}
                                        </p>
                                        <motion.h3
                                            className="text-3xl sm:text-4xl font-semibold text-[#4f39f6] mb-1"
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.2 + (stat.id * 0.1),
                                                type: "spring",
                                                stiffness: 200
                                            }}
                                        >
                                            {stat.value}
                                        </motion.h3>
                                        <p className="text-xs text-gray-500">
                                            {stat.description}
                                        </p>
                                    </div>
                                    <motion.div
                                        className="
                                        w-10 h-10 sm:w-12 sm:h-12
                                        rounded-lg 
                                        bg-opacity-10 
                                        flex 
                                        items-center 
                                        justify-center
                                        flex-shrink-0
                                        ml-3
                                        "
                                        initial={{ rotate: -180, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.3 + (stat.id * 0.1),
                                            type: "spring"
                                        }}
                                    >
                                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#4f39f6]" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default SummaryStats;