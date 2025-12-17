import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, Loader2, Check, X, CheckCircle } from 'lucide-react';

const ConfirmPassword = () => {
    const [formData, setFormData] = useState({
        newPassword: '',
        confirmPassword: ''
    });
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [notification, setNotification] = useState(null);
    const [resetSuccess, setResetSuccess] = useState(false);
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
        if (field === 'newPassword') {
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

        if (!formData.newPassword) {
            newErrors.newPassword = 'New password is required';
        } else if (formData.newPassword.length < 8) {
            newErrors.newPassword = 'Password must be at least 8 characters';
        } else if (!/[A-Z]/.test(formData.newPassword)) {
            newErrors.newPassword = 'Password must contain at least one uppercase letter';
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.newPassword)) {
            newErrors.newPassword = 'Password must contain at least one special character';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.newPassword !== formData.confirmPassword) {
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
            setResetSuccess(true);
            showNotification('Password reset successfully!', 'success');
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
                {/* Reset Password Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 sm:p-10">
                    {resetSuccess ? (
                        /* Success State */
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
                                Password Reset Successful
                            </h3>
                            <p className="text-sm text-gray-600 mb-8">
                                Your password has been successfully reset. You can now log in with your new password.
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
                        /* Reset Password Form */
                        <>
                            {/* Header */}
                            <motion.div className="text-center mb-8" variants={itemVariants}>
                                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-4"
                                    style={{ backgroundColor: 'rgba(79, 57, 246, 0.1)' }}>
                                    <Lock
                                        className="w-7 h-7 sm:w-8 sm:h-8"
                                        style={{ color: '#4f39f6' }}
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
                                    Reset Password
                                </h1>
                                <p className="text-sm sm:text-base text-gray-600">
                                    Create a new secure password for your account
                                </p>
                            </motion.div>

                            {/* Form */}
                            <div className="space-y-5">
                                {/* New Password Field */}
                                <motion.div variants={itemVariants}>
                                    <label htmlFor="newPassword" className="block text-sm font-medium text-black mb-2">
                                        New Password
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
                                        <input
                                            id="newPassword"
                                            type={showNewPassword ? 'text' : 'password'}
                                            value={formData.newPassword}
                                            onChange={(e) => handleInputChange('newPassword', e.target.value)}
                                            placeholder="Create a strong password"
                                            className={`w-full pl-10 pr-12 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-all ${errors.newPassword
                                                ? 'border-red-300 focus:ring-red-200'
                                                : 'border-gray-300 focus:ring-blue-200'
                                                }`}
                                            disabled={isLoading}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                            disabled={isLoading}
                                        >
                                            {showNewPassword ? (
                                                <EyeOff className="w-5 h-5" strokeWidth={1.5} />
                                            ) : (
                                                <Eye className="w-5 h-5" strokeWidth={1.5} />
                                            )}
                                        </button>
                                    </div>

                                    {/* Password Requirements */}
                                    {formData.newPassword && (
                                        <div className="mt-3 space-y-1.5 p-3 bg-gray-50 rounded-lg">
                                            <PasswordCheck met={passwordChecks.length} text="At least 8 characters" />
                                            <PasswordCheck met={passwordChecks.uppercase} text="At least one uppercase letter" />
                                            <PasswordCheck met={passwordChecks.special} text="At least one special character" />
                                        </div>
                                    )}

                                    {errors.newPassword && (
                                        <p className="mt-1.5 text-xs text-red-600">{errors.newPassword}</p>
                                    )}
                                </motion.div>

                                {/* Confirm Password Field */}
                                <motion.div variants={itemVariants}>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-black mb-2">
                                        Confirm New Password
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
                                        <input
                                            id="confirmPassword"
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            value={formData.confirmPassword}
                                            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                                            placeholder="Confirm your new password"
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

                                {/* Reset Password Button */}
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
                                                <span>Resetting Password...</span>
                                            </>
                                        ) : (
                                            <span>Reset Password</span>
                                        )}
                                    </motion.button>
                                </motion.div>

                                {/* Back to Login Link */}
                                <motion.div variants={itemVariants} className="text-center pt-2">
                                    <a
                                        href="/login"
                                        className={`text-sm font-medium transition-all hover:underline cursor-pointer ${isLoading ? "pointer-events-none opacity-50 cursor-not-allowed" : ""}`}
                                        style={{ color: "#4f39f6" }}
                                    >
                                        Back to Login
                                    </a>
                                </motion.div>

                            </div>
                        </>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default ConfirmPassword;