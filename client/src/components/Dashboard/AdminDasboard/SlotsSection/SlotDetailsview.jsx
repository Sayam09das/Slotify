import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Calendar, Clock, MessageSquare, AlertCircle } from 'lucide-react';

const SlotDetailsView = () => {
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [messageInput, setMessageInput] = useState('');
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);

    // Sample slots data
    const sampleSlots = [
        {
            id: 1,
            date: '2025-01-15',
            time: '09:00 AM',
            status: 'Available',
            userName: null,
        },
        {
            id: 2,
            date: '2025-01-15',
            time: '10:30 AM',
            status: 'Booked',
            userName: 'John Smith',
            userEmail: 'john.smith@email.com',
            messages: [
                {
                    id: 1,
                    sender: 'user',
                    text: 'Hello, I wanted to confirm the appointment details for tomorrow.',
                    timestamp: '2025-01-14 09:30 AM',
                    senderName: 'John Smith'
                },
                {
                    id: 2,
                    sender: 'admin',
                    text: 'Good morning John. Your appointment is confirmed for January 15th at 10:30 AM. Please arrive 5 minutes early.',
                    timestamp: '2025-01-14 09:45 AM',
                    senderName: 'Admin'
                },
                {
                    id: 3,
                    sender: 'user',
                    text: 'Perfect, thank you. Is there anything I should bring with me?',
                    timestamp: '2025-01-14 10:00 AM',
                    senderName: 'John Smith'
                },
                {
                    id: 4,
                    sender: 'admin',
                    text: 'Please bring a valid ID and any relevant documents related to your inquiry. We look forward to seeing you.',
                    timestamp: '2025-01-14 10:05 AM',
                    senderName: 'Admin'
                }
            ]
        },
        {
            id: 3,
            date: '2025-01-16',
            time: '02:00 PM',
            status: 'Booked',
            userName: 'Sarah Johnson',
            userEmail: 'sarah.j@company.com',
            messages: [
                {
                    id: 1,
                    sender: 'admin',
                    text: 'Your appointment has been confirmed. We have sent a confirmation email to sarah.j@company.com',
                    timestamp: '2025-01-12 03:15 PM',
                    senderName: 'Admin'
                },
                {
                    id: 2,
                    sender: 'user',
                    text: 'Thank you for the confirmation.',
                    timestamp: '2025-01-12 03:20 PM',
                    senderName: 'Sarah Johnson'
                }
            ]
        }
    ];

    useEffect(() => {
        if (selectedSlot?.messages) {
            setMessages(selectedSlot.messages);
        }
    }, [selectedSlot]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSendMessage = () => {
        if (messageInput.trim() && selectedSlot?.status === 'Booked') {
            const newMessage = {
                id: messages.length + 1,
                sender: 'admin',
                text: messageInput,
                timestamp: new Date().toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true
                }),
                senderName: 'Admin'
            };
            setMessages([...messages, newMessage]);
            setMessageInput('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Available':
                return 'bg-green-50 text-green-700 border-green-200';
            case 'Booked':
                return 'bg-red-50 text-red-700 border-red-200';
            default:
                return 'bg-gray-50 text-gray-600 border-gray-200';
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const messageVariants = {
        hidden: { opacity: 0, y: 10, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 300, damping: 25 }
        }
    };

    return (
        <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 sm:mb-8"
                >
                    <h1 className="text-2xl sm:text-3xl font-semibold text-black mb-2">Slot Communication</h1>
                    <p className="text-sm sm:text-base text-gray-600">Communicate with users regarding their appointments</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Slot Selection Sidebar */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-1 space-y-3"
                    >
                        <h2 className="text-sm font-semibold text-black uppercase tracking-wide mb-4">Select Slot</h2>
                        {sampleSlots.map((slot) => (
                            <motion.div
                                key={slot.id}
                                variants={itemVariants}
                                onClick={() => setSelectedSlot(slot)}
                                className={`border rounded-lg p-4 cursor-pointer transition-all ${selectedSlot?.id === slot.id
                                        ? 'border-gray-400 bg-gray-50'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <div className="text-sm font-medium text-black">{slot.date}</div>
                                        <div className="text-xs text-gray-600">{slot.time}</div>
                                    </div>
                                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${getStatusColor(slot.status)}`}>
                                        {slot.status}
                                    </span>
                                </div>
                                {slot.userName && (
                                    <div className="text-xs text-gray-600 truncate">{slot.userName}</div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Chat Section */}
                    <div className="lg:col-span-2">
                        {!selectedSlot ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="h-full min-h-[500px] border border-gray-200 rounded-lg flex items-center justify-center"
                            >
                                <div className="text-center px-4">
                                    <MessageSquare className="mx-auto mb-3 text-gray-400" size={48} />
                                    <p className="text-sm text-gray-600">Select a slot to view communication</p>
                                </div>
                            </motion.div>
                        ) : selectedSlot.status !== 'Booked' ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="h-full min-h-[500px] border border-gray-200 rounded-lg flex items-center justify-center"
                            >
                                <div className="text-center px-4">
                                    <AlertCircle className="mx-auto mb-3 text-gray-400" size={48} />
                                    <p className="text-sm font-medium text-black mb-1">Chat Unavailable</p>
                                    <p className="text-xs text-gray-600">Communication is only available for booked slots</p>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="border border-gray-200 rounded-lg flex flex-col h-[600px] sm:h-[700px]"
                            >
                                {/* Chat Header */}
                                <div className="border-b border-gray-200 p-4 bg-gray-50">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-base font-semibold text-black">{selectedSlot.userName}</h3>
                                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${getStatusColor(selectedSlot.status)}`}>
                                            {selectedSlot.status}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-4 text-xs text-gray-600">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            <span>{selectedSlot.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock size={14} />
                                            <span>{selectedSlot.time}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Messages Area */}
                                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                    <AnimatePresence>
                                        {messages.map((message) => (
                                            <motion.div
                                                key={message.id}
                                                variants={messageVariants}
                                                initial="hidden"
                                                animate="visible"
                                                className={`flex ${message.sender === 'admin' ? 'justify-end' : 'justify-start'}`}
                                            >
                                                <div className={`max-w-[80%] sm:max-w-[70%] ${message.sender === 'admin' ? 'items-end' : 'items-start'} flex flex-col`}>
                                                    <div className="text-xs text-gray-500 mb-1 px-1">
                                                        {message.senderName}
                                                    </div>
                                                    <div
                                                        className={`rounded-lg px-4 py-3 ${message.sender === 'admin'
                                                                ? 'bg-blue-50 border border-blue-100'
                                                                : 'bg-gray-100 border border-gray-200'
                                                            }`}
                                                    >
                                                        <p className="text-sm text-black leading-relaxed">{message.text}</p>
                                                    </div>
                                                    <div className="text-xs text-gray-500 mt-1 px-1">
                                                        {message.timestamp}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Message Input */}
                                <div className="border-t border-gray-200 p-4 bg-white">
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={messageInput}
                                            onChange={(e) => setMessageInput(e.target.value)}
                                            onKeyPress={handleKeyPress}
                                            placeholder="Type your message..."
                                            className="flex-1 px-4 py-3 text-sm text-black bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors"
                                        />
                                        <button
                                            onClick={handleSendMessage}
                                            disabled={!messageInput.trim()}
                                            style={{ backgroundColor: messageInput.trim() ? '#4f39f6' : '#e5e7eb' }}
                                            className="px-6 py-3 text-sm font-medium text-white rounded-lg transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                        >
                                            <span className="hidden sm:inline">Send</span>
                                            <Send size={16} />
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">
                                        Messages are logged for record-keeping purposes
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlotDetailsView;