import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, MinusCircle, Grid } from 'lucide-react';

const SlotFilters = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        {
            id: 'all',
            label: 'All',
            icon: Grid,
            count: 48
        },
        {
            id: 'available',
            label: 'Available',
            icon: CheckCircle,
            count: 16
        },
        {
            id: 'booked',
            label: 'Booked',
            icon: XCircle,
            count: 24
        },
        {
            id: 'past',
            label: 'Past',
            icon: MinusCircle,
            count: 8
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <h3 className="text-base sm:text-lg font-medium text-black">
                        Filter Slots
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        View slots by status
                    </p>
                </motion.div>

                {/* Desktop Filter Buttons */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="hidden sm:flex items-center gap-3 flex-wrap"
                >
                    {filters.map((filter) => {
                        const Icon = filter.icon;
                        const isActive = activeFilter === filter.id;

                        return (
                            <motion.button
                                key={filter.id}
                                variants={item}
                                onClick={() => setActiveFilter(filter.id)}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className={`
                  px-4 py-2.5
                  rounded-lg
                  border
                  flex items-center gap-2
                  transition-all
                  duration-200
                  ${isActive
                                        ? 'bg-[#4f39f6] text-white border-[#4f39f6]'
                                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                                    }
                `}
                            >
                                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                                <span className="text-sm font-medium">{filter.label}</span>
                                <span
                                    className={`
                    ml-1 px-2 py-0.5 rounded-full text-xs font-semibold
                    ${isActive
                                            ? 'bg-white bg-opacity-20 text-white'
                                            : 'bg-gray-100 text-gray-600'
                                        }
                  `}
                                >
                                    {filter.count}
                                </span>
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* Mobile Filter Dropdown */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="sm:hidden"
                >
                    <div className="relative">
                        <select
                            value={activeFilter}
                            onChange={(e) => setActiveFilter(e.target.value)}
                            className="
                w-full
                px-4 py-3
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
                appearance-none
                cursor-pointer
              "
                        >
                            {filters.map((filter) => (
                                <option key={filter.id} value={filter.id}>
                                    {filter.label} ({filter.count})
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg
                                className="w-5 h-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Mobile Active Filter Display */}
                    <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 flex items-center gap-2"
                    >
                        {filters.map((filter) => {
                            if (filter.id === activeFilter) {
                                const Icon = filter.icon;
                                return (
                                    <div
                                        key={filter.id}
                                        className="flex items-center gap-2 px-3 py-1.5 bg-[#4f39f6] bg-opacity-10 text-[#4f39f6] rounded-md"
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span className="text-sm font-medium">{filter.label}</span>
                                        <span className="text-xs font-semibold">({filter.count})</span>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </motion.div>
                </motion.div>

                {/* Active Filter Summary */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="mt-4 text-xs text-gray-500"
                >
                    {activeFilter === 'all' ? (
                        <span>Showing all slots</span>
                    ) : (
                        <span>
                            Showing {filters.find(f => f.id === activeFilter)?.count} {activeFilter} slots
                        </span>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default SlotFilters;