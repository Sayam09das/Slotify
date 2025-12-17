import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQsection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'How do I book a slot?',
            answer: 'To book a slot, navigate to the booking page, select your desired date, and choose from the available time slots. Click on your preferred slot and confirm your booking. You will receive a confirmation once the booking is complete.'
        },
        {
            question: 'Why is a slot marked as unavailable?',
            answer: 'A slot is marked as unavailable when it has already been booked by another user, has not been created by an admin yet, or falls outside the designated booking hours. Unavailable slots are automatically locked to prevent conflicts.'
        },
        {
            question: 'Can I change or cancel a booking?',
            answer: 'Yes, you can change or cancel your booking by accessing your bookings page. Select the booking you wish to modify and choose either the reschedule or cancel option. Please note that cancellation policies may vary depending on your admin settings.'
        },
        {
            question: 'How does slot locking prevent overbooking?',
            answer: 'When a user books a slot, Slotify automatically locks that time slot, making it unavailable to other users. This real-time locking mechanism ensures that only one booking can be made per slot, completely eliminating the possibility of overbooking.'
        },
        {
            question: 'How do admins create new time slots?',
            answer: 'Admins can create new time slots through the admin dashboard. Navigate to the slot management section, select the date, define the time range, and set any specific parameters such as duration or capacity. Once saved, the slots become immediately available for booking.'
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
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
                ease: 'easeOut'
            }
        }
    };

    return (
        <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about using Slotify
                    </p>
                </motion.div>

                {/* FAQ List */}
                <motion.div
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="border border-gray-200 rounded-xl overflow-hidden bg-white"
                            variants={itemVariants}
                        >
                            {/* Question Button */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                            >
                                <span className="text-base sm:text-lg font-semibold text-black pr-4">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="flex-shrink-0"
                                >
                                    <ChevronDown
                                        className="w-5 h-5 sm:w-6 sm:h-6"
                                        style={{ color: openIndex === index ? '#4f39f6' : '#6b7280' }}
                                        strokeWidth={2}
                                    />
                                </motion.div>
                            </button>

                            {/* Answer */}
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                                            <div className="border-t border-gray-100 pt-4 sm:pt-5">
                                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FAQsection;