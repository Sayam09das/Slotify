import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Clock } from 'lucide-react';

const Contact = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:support@slotify.com';
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
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
        <section className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="bg-white rounded-xl border border-gray-200 p-8 sm:p-10 lg:p-12 text-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Section Title */}
                    <motion.h2
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-5"
                        variants={itemVariants}
                    >
                        Contact Support
                    </motion.h2>

                    {/* Supportive Message */}
                    <motion.p
                        className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        If you need further assistance, our support team is here to help.
                        Reach out and we'll get back to you as soon as possible.
                    </motion.p>

                    {/* Email Contact */}
                    <motion.div
                        className="mb-6 sm:mb-8"
                        variants={itemVariants}
                    >
                        <motion.button
                            onClick={handleEmailClick}
                            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300"
                            style={{ borderColor: '#4f39f6', color: '#4f39f6' }}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: '#4f39f6',
                                color: '#ffffff',
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Mail className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
                            support@slotify.com
                        </motion.button>
                    </motion.div>

                    {/* Response Time Note */}
                    <motion.div
                        className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500"
                        variants={itemVariants}
                    >
                        <Clock className="w-4 h-4" strokeWidth={2} />
                        <span>Typical response time: 24-48 hours</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;