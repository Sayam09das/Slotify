import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Mail, RefreshCw } from 'lucide-react';

const OTP = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [isLoading, setIsLoading] = useState(false);
    const [isResending, setIsResending] = useState(false);
    const [error, setError] = useState('');
    const [notification, setNotification] = useState(null);
    const [resendTimer, setResendTimer] = useState(0);
    const inputRefs = useRef([]);

    const userEmail = 'user@example.com'; // This would come from previous step

    useEffect(() => {
        // Auto-focus first input on mount
        inputRefs.current[0]?.focus();
    }, []);

    useEffect(() => {
        // Countdown timer for resend
        if (resendTimer > 0) {
            const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [resendTimer]);

    const showNotification = (message, type) => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 4000);
    };

    const handleChange = (index, value) => {
        // Only accept numbers
        if (value && !/^\d$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        setError('');

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        // Handle backspace
        if (e.key === 'Backspace') {
            if (!otp[index] && index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        }
        // Handle paste
        else if (e.key === 'v' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            navigator.clipboard.readText().then(text => {
                const digits = text.replace(/\D/g, '').slice(0, 6).split('');
                const newOtp = [...otp];
                digits.forEach((digit, i) => {
                    if (i < 6) newOtp[i] = digit;
                });
                setOtp(newOtp);
                const lastIndex = Math.min(digits.length, 5);
                inputRefs.current[lastIndex]?.focus();
            });
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text');
        const digits = pastedData.replace(/\D/g, '').slice(0, 6).split('');
        const newOtp = [...otp];
        digits.forEach((digit, i) => {
            if (i < 6) newOtp[i] = digit;
        });
        setOtp(newOtp);
        const lastIndex = Math.min(digits.length, 5);
        inputRefs.current[lastIndex]?.focus();
    };

    const handleVerify = () => {
        const otpValue = otp.join('');

        if (otpValue.length !== 6) {
            setError('Please enter all 6 digits');
            showNotification('Please enter the complete OTP', 'error');
            return;
        }

        setIsLoading(true);
        setError('');

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);

            // Simulate validation (accept 123456 as valid OTP for demo)
            if (otpValue === '123456') {
                showNotification('Verification successful! Redirecting...', 'success');
                setTimeout(() => {
                    console.log('OTP verified, redirecting...');
                }, 1500);
            } else {
                setError('Invalid or expired OTP. Please try again.');
                showNotification('Invalid OTP. Please check and try again.', 'error');
                setOtp(['', '', '', '', '', '']);
                inputRefs.current[0]?.focus();
            }
        }, 1500);
    };

    const handleResendOTP = () => {
        if (resendTimer > 0) return;

        setIsResending(true);
        setError('');
        setOtp(['', '', '', '', '', '']);

        // Simulate API call
        setTimeout(() => {
            setIsResending(false);
            setResendTimer(60);
            showNotification('New verification code sent to your email', 'success');
            inputRefs.current[0]?.focus();
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
                {/* OTP Verification Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 sm:p-10">
                    {/* Header */}
                    <motion.div className="text-center mb-8" variants={itemVariants}>
                        <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-4"
                            style={{ backgroundColor: 'rgba(79, 57, 246, 0.1)' }}>
                            <Mail
                                className="w-7 h-7 sm:w-8 sm:h-8"
                                style={{ color: '#4f39f6' }}
                                strokeWidth={1.5}
                            />
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
                            Verify OTP
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600">
                            Enter the 6-digit code sent to
                        </p>
                        <p className="text-sm font-medium text-black mt-1">
                            {userEmail}
                        </p>
                    </motion.div>

                    {/* OTP Input */}
                    <motion.div variants={itemVariants} className="mb-6">
                        <div className="flex gap-2 sm:gap-3 justify-center">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={el => inputRefs.current[index] = el}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    onPaste={handlePaste}
                                    className={`w-12 h-12 sm:w-14 sm:h-14 text-center text-lg sm:text-xl font-semibold border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${error
                                            ? 'border-red-300 focus:ring-red-200'
                                            : 'border-gray-300 focus:ring-blue-200'
                                        }`}
                                    disabled={isLoading || isResending}
                                />
                            ))}
                        </div>
                        {error && (
                            <motion.p
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-3 text-xs sm:text-sm text-red-600 text-center"
                            >
                                {error}
                            </motion.p>
                        )}
                    </motion.div>

                    {/* Verify Button */}
                    <motion.div variants={itemVariants}>
                        <motion.button
                            onClick={handleVerify}
                            disabled={isLoading || isResending || otp.join('').length !== 6}
                            className="w-full py-3 px-4 text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{ backgroundColor: '#4f39f6' }}
                            whileHover={!isLoading && !isResending && otp.join('').length === 6 ? { scale: 1.02 } : {}}
                            whileTap={!isLoading && !isResending && otp.join('').length === 6 ? { scale: 0.98 } : {}}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Verifying...</span>
                                </>
                            ) : (
                                <span>Verify</span>
                            )}
                        </motion.button>
                    </motion.div>

                    {/* Resend OTP */}
                    <motion.div variants={itemVariants} className="text-center mt-6">
                        {resendTimer > 0 ? (
                            <p className="text-sm text-gray-600">
                                Resend code in <span className="font-semibold">{resendTimer}s</span>
                            </p>
                        ) : (
                            <button
                                type="button"
                                onClick={handleResendOTP}
                                disabled={isResending || isLoading}
                                className="inline-flex items-center gap-2 text-sm font-medium hover:underline transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{ color: '#4f39f6' }}
                            >
                                {isResending ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span>Resending...</span>
                                    </>
                                ) : (
                                    <>
                                        <RefreshCw className="w-4 h-4" strokeWidth={2} />
                                        <span>Resend OTP</span>
                                    </>
                                )}
                            </button>
                        )}
                    </motion.div>
                </div>

                {/* Footer Note */}
                <motion.p
                    variants={itemVariants}
                    className="text-center text-xs text-gray-500 mt-6"
                >
                    For demo: Use code 123456
                </motion.p>
            </motion.div>
        </div>
    );
};

export default OTP;