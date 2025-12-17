import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    // Update year automatically
    useEffect(() => {
        const updateYear = () => {
            const year = new Date().getFullYear();
            if (year <= 2050) {
                setCurrentYear(year);
            }
        };

        // Check for year change every hour
        const interval = setInterval(updateYear, 3600000);

        return () => clearInterval(interval);
    }, []);

    const footerLinks = {
        product: [
            { name: 'Home', href: '/' },
            { name: 'Book Slot', href: '/book' },
            { name: 'How It Works', href: '/how-it-works' }
        ],
        support: [
            { name: 'Support', href: '/support' },
            { name: 'Admin', href: '/admin' },
            { name: 'Login', href: '/login' }
        ]
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
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
                duration: 0.5,
                ease: [0.25, 0.4, 0.25, 1]
            }
        }
    };

    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14 lg:py-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
            >
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-10 lg:mb-12">
                    {/* Left Side - Brand */}
                    <motion.div
                        className="lg:col-span-5"
                        variants={itemVariants}
                    >
                        {/* Logo */}
                        <div className="flex items-center gap-2 mb-4">
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-[#4f39f6]" strokeWidth={2} />
                            </motion.div>
                            <span className="text-2xl sm:text-3xl font-bold text-black">Slotify</span>
                        </div>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md">
                            Professional appointment slot management platform for service-based businesses.
                        </p>
                    </motion.div>

                    {/* Right Side - Links */}
                    <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                        {/* Product Links */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-sm font-semibold text-black mb-3 sm:mb-4 uppercase tracking-wider">
                                Product
                            </h3>
                            <ul className="space-y-2 sm:space-y-3">
                                {footerLinks.product.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-sm sm:text-base text-gray-600 hover:text-[#4f39f6] transition-colors duration-300 inline-block"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Support Links */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-sm font-semibold text-black mb-3 sm:mb-4 uppercase tracking-wider">
                                Support
                            </h3>
                            <ul className="space-y-2 sm:space-y-3">
                                {footerLinks.support.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-sm sm:text-base text-gray-600 hover:text-[#4f39f6] transition-colors duration-300 inline-block"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div variants={itemVariants} className="col-span-2 sm:col-span-1">
                            <h3 className="text-sm font-semibold text-black mb-3 sm:mb-4 uppercase tracking-wider">
                                Contact
                            </h3>
                            <ul className="space-y-2 sm:space-y-3">
                                <li>
                                    <a
                                        href="mailto:support@slotify.com"
                                        className="text-sm sm:text-base text-gray-600 hover:text-[#4f39f6] transition-colors duration-300 inline-block"
                                    >
                                        support@slotify.com
                                    </a>
                                </li>
                                <li>
                                    <span className="text-sm sm:text-base text-gray-600">
                                        Available 24/7
                                    </span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    className="pt-6 sm:pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4"
                    variants={itemVariants}
                >
                    {/* Copyright */}
                    <div className="text-sm text-gray-500 text-center sm:text-left">
                        © {currentYear} Slotify. All rights reserved.
                    </div>

                    {/* Bottom Links */}
                    <div className="flex items-center gap-4 sm:gap-6 text-sm text-gray-500">
                        <a
                            href="#"
                            className="hover:text-[#4f39f6] transition-colors duration-300"
                        >
                            Privacy Policy
                        </a>
                        <span className="text-gray-300">|</span>
                        <a
                            href="#"
                            className="hover:text-[#4f39f6] transition-colors duration-300"
                        >
                            Terms of Service
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;