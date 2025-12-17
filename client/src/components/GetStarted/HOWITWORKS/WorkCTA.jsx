import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const WorkCTA = () => {
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
        <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Headline */}
                    <motion.h2
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-5"
                        variants={itemVariants}
                    >
                        Ready to Streamline Your Appointments?
                    </motion.h2>

                    {/* Supporting Text */}
                    <motion.p
                        className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        Join teams who trust Slotify for reliable, hassle-free appointment scheduling.
                        Get started in minutes and experience the difference today.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div variants={itemVariants}>
                        <motion.button
                            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white rounded-lg shadow-sm"
                            style={{ backgroundColor: '#4f39f6' }}
                            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(79, 57, 246, 0.2)' }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                        >
                            Get Started
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default WorkCTA;