import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCircle, Settings, Eye, BarChart3, CalendarCheck, Clock, CheckCircle } from 'lucide-react';

const AdminvsUser = () => {
    const flows = [
        {
            role: 'Admin Flow',
            icon: ShieldCheck,
            steps: [
                { icon: Settings, text: 'Create and manage available time slots' },
                { icon: Eye, text: 'View daily booking schedule' },
                { icon: BarChart3, text: 'Monitor booked and available slots' }
            ]
        },
        {
            role: 'User Flow',
            icon: UserCircle,
            steps: [
                { icon: CalendarCheck, text: 'Select a date' },
                { icon: Clock, text: 'Choose an available time slot' },
                { icon: CheckCircle, text: 'Confirm booking' }
            ]
        }
    ];

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

    const cardVariants = {
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

    const stepVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
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
                        Admin vs User Flow
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                        Understand how different roles interact with Slotify to streamline appointment management
                    </p>
                </motion.div>

                {/* Flow Cards */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {flows.map((flow, flowIndex) => {
                        const RoleIcon = flow.icon;
                        return (
                            <motion.div
                                key={flowIndex}
                                className="bg-gray-50 rounded-xl p-6 sm:p-8 lg:p-10"
                                variants={cardVariants}
                            >
                                {/* Role Header */}
                                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                        <RoleIcon
                                            className="w-6 h-6 sm:w-7 sm:h-7"
                                            style={{ color: '#4f39f6' }}
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-semibold text-black">
                                        {flow.role}
                                    </h3>
                                </div>

                                {/* Steps List */}
                                <div className="space-y-4 sm:space-y-5">
                                    {flow.steps.map((step, stepIndex) => {
                                        const StepIcon = step.icon;
                                        return (
                                            <motion.div
                                                key={stepIndex}
                                                className="flex items-start gap-3 sm:gap-4"
                                                variants={stepVariants}
                                                custom={stepIndex}
                                            >
                                                <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-white flex items-center justify-center">
                                                    <StepIcon
                                                        className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-gray-700"
                                                        strokeWidth={1.5}
                                                    />
                                                </div>
                                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed pt-2">
                                                    {step.text}
                                                </p>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default AdminvsUser;