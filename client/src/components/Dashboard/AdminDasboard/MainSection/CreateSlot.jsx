import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Plus, CheckCircle, AlertCircle } from 'lucide-react';

const CreateSlot = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState(null);

    // Get today's date in YYYY-MM-DD format for min date validation
    const today = new Date().toISOString().split('T')[0];

    const handleSubmit = async () => {
        // Validation
        if (!date || !time) {
            setMessage({ type: 'error', text: 'Please fill in all fields' });
            return;
        }

        // Check if selected date/time is in the past
        const selectedDateTime = new Date(`${date}T${time}`);
        const now = new Date();

        if (selectedDateTime < now) {
            setMessage({ type: 'error', text: 'Cannot create slot in the past' });
            return;
        }

        setIsSubmitting(true);
        setMessage(null);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            setMessage({ type: 'success', text: 'Slot created successfully!' });

            // Reset form after success
            setTimeout(() => {
                setDate('');
                setTime('');
                setMessage(null);
            }, 3000);
        } catch (error) {
            setMessage({ type: 'error', text: 'Failed to create slot. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.3 }
    };

    return (
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="text-xl sm:text-2xl font-semibold text-black">
                        Create New Slot
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                        Add a new appointment slot to the schedule
                    </p>
                </motion.div>

                {/* Form Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="bg-white border border-gray-200 rounded-lg p-6"
                >
                    <div className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {/* Date Picker */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                <label
                                    htmlFor="date"
                                    className="block text-sm font-medium text-black mb-2"
                                >
                                    Date
                                </label>
                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <Calendar className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="date"
                                        id="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        min={today}
                                        className="
                      w-full
                      pl-10 pr-4 py-2.5
                      text-sm
                      border border-gray-300
                      rounded-lg
                      bg-white
                      text-black
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#4f39f6]
                      focus:border-transparent
                      transition-all
                      duration-200
                      hover:border-gray-400
                    "
                                    />
                                </div>
                            </motion.div>

                            {/* Time Input */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                            >
                                <label
                                    htmlFor="time"
                                    className="block text-sm font-medium text-black mb-2"
                                >
                                    Time
                                </label>
                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <Clock className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="time"
                                        id="time"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        className="
                      w-full
                      pl-10 pr-4 py-2.5
                      text-sm
                      border border-gray-300
                      rounded-lg
                      bg-white
                      text-black
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#4f39f6]
                      focus:border-transparent
                      transition-all
                      duration-200
                      hover:border-gray-400
                    "
                                    />
                                </div>
                            </motion.div>
                        </div>

                        {/* Message Display */}
                        <AnimatePresence mode="wait">
                            {message && (
                                <motion.div
                                    key={message.type}
                                    {...fadeIn}
                                    className={`
                    flex items-center gap-2 p-3 rounded-lg text-sm
                    ${message.type === 'success'
                                            ? 'bg-green-50 text-green-700 border border-green-200'
                                            : 'bg-red-50 text-red-700 border border-red-200'
                                        }
                  `}
                                >
                                    {message.type === 'success' ? (
                                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                    ) : (
                                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    )}
                                    <span className="font-medium">{message.text}</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Submit Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                        >
                            <motion.button
                                type="button"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                className={`
                  w-full sm:w-auto
                  px-6 py-2.5
                  bg-[#4f39f6]
                  text-white
                  text-sm
                  font-medium
                  rounded-lg
                  flex items-center justify-center gap-2
                  transition-all
                  duration-200
                  ${isSubmitting
                                        ? 'opacity-50 cursor-not-allowed'
                                        : 'hover:bg-[#3d2bc4] active:bg-[#3525a8]'
                                    }
                `}
                            >
                                {isSubmitting ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                ease: 'linear'
                                            }}
                                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                        />
                                        <span>Creating...</span>
                                    </>
                                ) : (
                                    <>
                                        <Plus className="w-5 h-5" />
                                        <span>Create Slot</span>
                                    </>
                                )}
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CreateSlot;