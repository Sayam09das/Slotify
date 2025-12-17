import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MousePointer, Lock } from 'lucide-react';

const WorkflowSection = () => {
    const steps = [
        {
            number: '01',
            icon: Calendar,
            title: 'Create Time Slots',
            description: 'Admin defines available appointment slots for specific dates and times.'
        },
        {
            number: '02',
            icon: MousePointer,
            title: 'Book a Slot',
            description: 'Users view available slots and select a suitable time.'
        },
        {
            number: '03',
            icon: Lock,
            title: 'Automatic Slot Locking',
            description: 'Once booked, the slot is locked to prevent overbooking.'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const stepVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            }
        }
    };

    return (
        <section className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {steps.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center text-center"
                                variants={stepVariants}
                            >
                                {/* Step Number */}
                                <div className="mb-4 sm:mb-6">
                                    <span className="text-4xl sm:text-5xl font-bold text-gray-200">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Icon Container */}
                                <motion.div
                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white flex items-center justify-center mb-4 sm:mb-6 shadow-sm"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <IconComponent
                                        className="w-8 h-8 sm:w-10 sm:h-10"
                                        style={{ color: '#4f39f6' }}
                                        strokeWidth={1.5}
                                    />
                                </motion.div>

                                {/* Title */}
                                <h3 className="text-xl sm:text-2xl font-semibold text-black mb-3 sm:mb-4">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-sm">
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default WorkflowSection;