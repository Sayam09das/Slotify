import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Loader2, ArrowLeft, CheckCircle } from 'lucide-react';

const Forgetpassword = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [notification, setNotification] = useState(null);
    const [otpSent, setOtpSent] = useState(false);

    const showNotification = (message, type) => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 4000);
    };

    const validateEmail = () => {
        if (!email) {
            setError('Email is required');
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address');
            return false;
        }
        setError('');
        return true;
    };

    const handleSendOTP = (e) => {
        e.preventDefault();

        if (!validateEmail()) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        setIsLoading(true);
        setError('');

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setOtpSent(true);
            showNotification('Verification code sent to your email!', 'success');
        }, 2000);
    };

    const handleBackToLogin = () => {
        console.log('Navigate to login page');
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: 'easeOut' }
        }
    };

    return (
        <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
            {/* Toast Notification */}
            {notification && (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 ${notification.type === 'success'
                        ? 'bg-green-50 border border-green-200'
                        : 'bg-red-50 border border-red-200'
                        }`}
                >
                    <span className={`text-sm font-medium ${notification.type === 'success' ? 'text-green-800' : 'text-red-800'
                        }`}>
                        {notification.message}
                    </span>
                </motion.div>
            )}

            <motion.div
                className="w-full max-w-md"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Forgot Password Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 sm:p-10">
                    {/* Header */}
                    <motion.div className="text-center mb-8" variants={itemVariants}>
                        <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
                            Forgot Password
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600">
                            {otpSent
                                ? 'Check your email for the verification code'
                                : 'Enter your email to receive a verification code'
                            }
                        </p>
                    </motion.div>

                    {/* Success Message */}
                    {otpSent ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-6"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4"
                                style={{ backgroundColor: 'rgba(79, 57, 246, 0.1)' }}
                            >
                                <CheckCircle
                                    className="w-8 h-8 sm:w-10 sm:h-10"
                                    style={{ color: '#4f39f6' }}
                                    strokeWidth={2}
                                />
                            </motion.div>

                            <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
                                Verification Code Sent
                            </h3>
                            <p className="text-sm text-gray-600 mb-6">
                                We've sent a verification code to
                            </p>
                            <p className="text-sm font-medium text-black mb-8">
                                {email}
                            </p>

                            <motion.button
                                onClick={handleBackToLogin}
                                className="w-full py-3 px-4 text-white text-sm font-semibold rounded-lg transition-all"
                                style={{ backgroundColor: '#4f39f6' }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Back to Login
                            </motion.button>
                        </motion.div>
                    ) : (
                        /* Email Form */
                        <div className="space-y-5">
                            {/* Email Field */}
                            <motion.div variants={itemVariants}>
                                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            if (error) setError('');
                                        }}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSendOTP(e)}
                                        placeholder="you@example.com"
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-all ${error
                                            ? 'border-red-300 focus:ring-red-200'
                                            : 'border-gray-300 focus:ring-blue-200'
                                            }`}
                                        disabled={isLoading}
                                    />
                                </div>
                                {error && (
                                    <p className="mt-1.5 text-xs text-red-600">{error}</p>
                                )}
                            </motion.div>

                            {/* Send OTP Button */}
                            <motion.div variants={itemVariants}>
                                <motion.button
                                    onClick={handleSendOTP}
                                    disabled={isLoading}
                                    className="w-full py-3 px-4 text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                    style={{ backgroundColor: '#4f39f6' }}
                                    whileHover={!isLoading ? { scale: 1.02 } : {}}
                                    whileTap={!isLoading ? { scale: 0.98 } : {}}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <span>Send OTP</span>
                                    )}
                                </motion.button>
                            </motion.div>

                            {/* Back to Login Link */}
                            <motion.div variants={itemVariants} className="text-center pt-2">
                                <a
                                    href="/login"
                                    onClick={(e) => {
                                        if (isLoading) {
                                            e.preventDefault();
                                        } else {
                                            handleBackToLogin?.();
                                        }
                                    }}
                                    className={`inline-flex items-center gap-2 text-sm font-medium transition-all hover:underline cursor-pointer ${isLoading ? "pointer-events-none opacity-50 cursor-not-allowed" : ""}`}
                                    style={{ color: "#4f39f6" }}
                                >
                                    <ArrowLeft className="w-4 h-4" strokeWidth={2} />
                                    <span>Back to Login</span>
                                </a>
                            </motion.div>

                        </div>
                    )}
                </div>

                {/* Security Note */}
                {!otpSent && (
                    <motion.p
                        variants={itemVariants}
                        className="text-center text-xs text-gray-500 mt-6"
                    >
                        You will receive a verification code via email
                    </motion.p>
                )}
            </motion.div>
        </div>
    );
};

export default Forgetpassword;