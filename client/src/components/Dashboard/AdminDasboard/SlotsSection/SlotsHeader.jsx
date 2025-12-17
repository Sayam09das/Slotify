import React from "react";

const SlotsHeader = ({ selectedDate, onDateChange }) => {
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4
                      sm:flex-row sm:items-center sm:justify-between">

                {/* Left: Title & Helper Text */}
                <div>
                    <h1 className="text-2xl sm:text-3xl font-semibold text-black">
                        Manage Slots
                    </h1>
                    <p className="text-sm text-gray-600 mt-1">
                        Create, view, and manage appointment time slots
                    </p>
                </div>

                {/* Right: Optional Date Selector */}
                <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-700">
                        Date
                    </label>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => onDateChange?.(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm
                       focus:outline-none focus:border-[#4f39f6]"
                    />
                </div>
            </div>
        </header>
    );
};

export default SlotsHeader;
