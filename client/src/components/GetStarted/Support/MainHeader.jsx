import React from 'react';
import { motion } from 'framer-motion';

const MainHeader = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    };

    return (
        <section className="w-full bg-white">
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h1
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight mb-4 sm:mb-6"
                        variants={itemVariants}
                    >
                        Support
                    </motion.h1>

                    <motion.p
                        className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed"
                        variants={itemVariants}
                    >
                        Get help with booking, managing slots, or using Slotify. Our support resources
                        are here to ensure you have a smooth experience.
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
};

export default MainHeader;