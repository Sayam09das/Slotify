import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.4, 0.25, 1],
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
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
        <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
            <motion.div
                className="max-w-4xl mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {/* Headline */}
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-5 md:mb-6 leading-tight px-4"
                    variants={itemVariants}
                >
                    Start<span className="text-indigo-500"> Managing Appointments </span>Today
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
                    variants={itemVariants}
                >
                    Set up your appointment slots in minutes. No credit card required, no complex setup.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-6 sm:mb-8"
                    variants={itemVariants}
                >
                    <motion.button
                        className="w-full sm:w-auto bg-[#4f39f6] text-white font-semibold px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-4.5 rounded-lg sm:rounded-xl text-base sm:text-lg inline-flex items-center justify-center gap-2 hover:bg-[#4230d4] transition-colors duration-300"
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Get Started
                        <ArrowRight className="w-5 h-5" strokeWidth={2} />
                    </motion.button>
                </motion.div>

                {/* Secondary Link */}
                <motion.div variants={itemVariants}>
                    <a
                        href="#"
                        className="text-sm sm:text-base text-gray-500 hover:text-black transition-colors duration-300 inline-flex items-center gap-1.5"
                    >
                        Learn more about features
                        <span className="text-xs">→</span>
                    </a>
                </motion.div>

                {/* Trust Badge */}
                <motion.div
                    className="mt-10 sm:mt-12 md:mt-16 pt-8 sm:pt-10 border-t border-gray-200"
                    variants={itemVariants}
                >
                    <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 uppercase tracking-wider font-medium">
                        Trusted By Professionals
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-gray-400">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            <span className="text-xs sm:text-sm">Healthcare</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            <span className="text-xs sm:text-sm">Wellness</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            <span className="text-xs sm:text-sm">Consulting</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            <span className="text-xs sm:text-sm">Services</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CTA;