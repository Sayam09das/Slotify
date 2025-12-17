import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, Mail, Loader2 } from 'lucide-react';

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [notification, setNotification] = useState(null);

    const showNotification = (message, type) => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 4000);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            showNotification('Please fix the errors below', 'error');
            return;
        }

        setIsLoading(true);
        setErrors({});

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);

            // Simulate login validation
            if (email === 'user@slotify.com' && password === 'user123') {
                showNotification('Login successful! Redirecting...', 'success');
                setTimeout(() => {
                    console.log('Redirecting to user dashboard...');
                }, 1500);
            } else {
                setErrors({ general: 'Invalid email or password' });
                showNotification('Invalid credentials. Please try again.', 'error');
            }
        }, 1500);
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
                {/* Login Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 sm:p-10">
                    {/* Header */}
                    <motion.div className="text-center mb-8" variants={itemVariants}>
                        <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
                            Login to Slotify
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600">
                            Access your appointments and bookings
                        </p>
                    </motion.div>

                    {/* General Error */}
                    {errors.general && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg"
                        >
                            <p className="text-sm text-red-800">{errors.general}</p>
                        </motion.div>
                    )}

                    {/* Form */}
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
                                    onChange={(e) => setEmail(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                                    placeholder="you@example.com"
                                    className={`w-full pl-10 pr-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-all ${errors.email
                                            ? 'border-red-300 focus:ring-red-200'
                                            : 'border-gray-300 focus:ring-blue-200'
                                        }`}
                                    disabled={isLoading}
                                />
                            </div>
                            {errors.email && (
                                <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>
                            )}
                        </motion.div>

                        {/* Password Field */}
                        <motion.div variants={itemVariants}>
                            <label htmlFor="password" className="block text-sm font-medium text-black mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                                    placeholder="Enter your password"
                                    className={`w-full pl-10 pr-12 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-all ${errors.password
                                            ? 'border-red-300 focus:ring-red-200'
                                            : 'border-gray-300 focus:ring-blue-200'
                                        }`}
                                    disabled={isLoading}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                    disabled={isLoading}
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" strokeWidth={1.5} />
                                    ) : (
                                        <Eye className="w-5 h-5" strokeWidth={1.5} />
                                    )}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-1.5 text-xs text-red-600">{errors.password}</p>
                            )}
                        </motion.div>

                        {/* Login Button */}
                        <motion.div variants={itemVariants}>
                            <motion.button
                                onClick={handleSubmit}
                                disabled={isLoading}
                                className="w-full py-3 px-4 text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                style={{ backgroundColor: '#4f39f6' }}
                                whileHover={!isLoading ? { scale: 1.02 } : {}}
                                whileTap={!isLoading ? { scale: 0.98 } : {}}
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        <span>Logging in...</span>
                                    </>
                                ) : (
                                    <span>Login</span>
                                )}
                            </motion.button>
                        </motion.div>

                        {/* Secondary Links */}
                        <motion.div variants={itemVariants} className="flex items-center justify-between pt-2">
                            <button
                                type="button"
                                className="text-sm font-medium hover:underline transition-all"
                                style={{ color: '#4f39f6' }}
                                disabled={isLoading}
                            >
                                Forgot Password?
                            </button>
                            <button
                                type="button"
                                className="text-sm font-medium hover:underline transition-all"
                                style={{ color: '#4f39f6' }}
                                disabled={isLoading}
                            >
                                Create an Account
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Footer Note */}
                <motion.p
                    variants={itemVariants}
                    className="text-center text-xs text-gray-500 mt-6"
                >
                    For demo: Use user@slotify.com / user123
                </motion.p>
            </motion.div>
        </div>
    );
};

export default UserLogin;