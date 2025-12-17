import React from "react";
import {
    CalendarDays,
    CheckCircle,
    Clock,
    CalendarCheck,
} from "lucide-react";

const stats = [
    {
        title: "Total Slots Today",
        value: 48,
        icon: CalendarDays,
    },
    {
        title: "Booked Slots",
        value: 32,
        icon: CheckCircle,
    },
    {
        title: "Available Slots",
        value: 16,
        icon: Clock,
    },
    {
        title: "Upcoming Appointments",
        value: 12,
        icon: CalendarCheck,
    },
];

const SummaryStats = () => {
    return (
        <section className="bg-white">
            {/* Section Header */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-black">
                    Summary Statistics
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                    Overview of today’s scheduling activity
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-lg p-5 
                         flex items-center justify-between"
                        >
                            {/* Text */}
                            <div>
                                <p className="text-sm text-gray-600">
                                    {item.title}
                                </p>
                                <p className="text-2xl font-semibold text-black mt-1">
                                    {item.value}
                                </p>
                            </div>

                            {/* Icon */}
                            <div className="flex items-center justify-center w-10 h-10 
                              rounded-md bg-indigo-50">
                                <Icon className="w-5 h-5 text-[#4f39f6]" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default SummaryStats;
