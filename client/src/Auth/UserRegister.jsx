import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, Mail, User, Loader2, Check, X } from 'lucide-react';

const UserRegister = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [notification, setNotification] = useState(null);
    const [passwordChecks, setPasswordChecks] = useState({
        length: false,
        uppercase: false,
        special: false
    });

    const showNotification = (message, type) => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 4000);
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));

        // Real-time password validation
        if (field === 'password') {
            setPasswordChecks({
                length: value.length >= 8,
                uppercase: /[A-Z]/.test(value),
                special: /[!@#$%^&*(),.?":{}|<>]/.test(value)
            });
        }

        // Clear error for this field
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        } else if (formData.fullName.trim().length < 2) {
            newErrors.fullName = 'Full name must be at least 2 characters';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        } else if (!/[A-Z]/.test(formData.password)) {
            newErrors.password = 'Password must contain at least one uppercase letter';
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
            newErrors.password = 'Password must contain at least one special character';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
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
            showNotification('Account created successfully! Redirecting...', 'success');
            setTimeout(() => {
                console.log('Redirecting to dashboard...', formData);
            }, 1500);
        }, 2000);
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                staggerChildren: 0.08
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

    const PasswordCheck = ({ met, text }) => (
        <div className="flex items-center gap-2 text-xs">
            {met ? (
                <Check className="w-4 h-4 text-green-600" strokeWidth={2} />
            ) : (
                <X className="w-4 h-4 text-gray-400" strokeWidth={2} />
            )}
            <span className={met ? 'text-green-600' : 'text-gray-500'}>{text}</span>
        </div>
    );

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
                {/* Registration Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 sm:p-10">
                    {/* Header */}
                    <motion.div className="text-center mb-8" variants={itemVariants}>
                        <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
                            Create Your Slotify Account
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600">
                            Sign up to manage and book appointments easily
                        </p>
                    </motion.div>

                    {/* Form */}
                    <div className="space-y-5">
                        {/* Full Name Field */}
                        <motion.div variants={itemVariants}>
                            <label htmlFor="fullName" className="block text-sm font-medium text-black mb-2">
                                Full Name
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
                                <input
                                    id="fullName"
                                    type="text"
                                    value={formData.fullName}
                                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                                    placeholder="John Doe"
                                    className={`w-full pl-10 pr-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-all ${errors.fullName
                                            ? 'border-red-300 focus:ring-red-200'
                                            : 'border-gray-300 focus:ring-blue-200'
                                        }`}
                                    disabled={isLoading}
                                />
                            </div>
                            {errors.fullName && (
                                <p className="mt-1.5 text-xs text-red-600">{errors.fullName}</p>
                            )}
                        </motion.div>

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
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
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
                                    value={formData.password}
                                    onChange={(e) => handleInputChange('password', e.target.value)}
                                    placeholder="Create a strong password"
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

                            {/* Password Requirements */}
                            {formData.password && (
                                <div className="mt-3 space-y-1.5 p-3 bg-gray-50 rounded-lg">
                                    <PasswordCheck met={passwordChecks.length} text="At least 8 characters" />
                                    <PasswordCheck met={passwordChecks.uppercase} text="At least one uppercase letter" />
                                    <PasswordCheck met={passwordChecks.special} text="At least one special character" />
                                </div>
                            )}

                            {errors.password && (
                                <p className="mt-1.5 text-xs text-red-600">{errors.password}</p>
                            )}
                        </motion.div>

                        {/* Confirm Password Field */}
                        <motion.div variants={itemVariants}>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-black mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
                                <input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={formData.confirmPassword}
                                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                                    placeholder="Confirm your password"
                                    className={`w-full pl-10 pr-12 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-all ${errors.confirmPassword
                                            ? 'border-red-300 focus:ring-red-200'
                                            : 'border-gray-300 focus:ring-blue-200'
                                        }`}
                                    disabled={isLoading}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                    disabled={isLoading}
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff className="w-5 h-5" strokeWidth={1.5} />
                                    ) : (
                                        <Eye className="w-5 h-5" strokeWidth={1.5} />
                                    )}
                                </button>
                            </div>
                            {errors.confirmPassword && (
                                <p className="mt-1.5 text-xs text-red-600">{errors.confirmPassword}</p>
                            )}
                        </motion.div>

                        {/* Create Account Button */}
                        <motion.div variants={itemVariants} className="pt-2">
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
                                        <span>Creating Account...</span>
                                    </>
                                ) : (
                                    <span>Create Account</span>
                                )}
                            </motion.button>
                        </motion.div>

                        {/* Login Link */}
                        <motion.div variants={itemVariants} className="text-center pt-2">
                            <span className="text-sm text-gray-600">Already have an account? </span>
                            <button
                                type="button"
                                className="text-sm font-medium hover:underline transition-all"
                                style={{ color: '#4f39f6' }}
                                disabled={isLoading}
                            >
                                Login
                            </button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default UserRegister;