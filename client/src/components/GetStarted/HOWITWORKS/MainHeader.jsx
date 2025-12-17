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
                        How It Works
                    </motion.h1>

                    <motion.p
                        className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed"
                        variants={itemVariants}
                    >
                        Understand how Slotify simplifies appointment scheduling in a few simple steps.
                        From creating your availability to confirming bookings, our intuitive platform
                        streamlines the entire process.
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
};

export default MainHeader;