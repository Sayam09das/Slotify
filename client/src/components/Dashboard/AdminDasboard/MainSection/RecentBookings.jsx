import React from "react";

const recentBookings = [
    {
        date: "2025-01-14",
        time: "10:00 – 10:30",
        user: "Rahul Sharma",
    },
    {
        date: "2025-01-14",
        time: "10:30 – 11:00",
        user: "Ananya Singh",
    },
    {
        date: "2025-01-14",
        time: "11:00 – 11:30",
        user: "Vikram Patel",
    },
    {
        date: "2025-01-13",
        time: "16:00 – 16:30",
        user: "Neha Verma",
    },
    {
        date: "2025-01-13",
        time: "17:00 – 17:30",
        user: "Amit Kumar",
    },
];

const RecentBookings = () => {
    return (
        <section className="bg-white mt-8">
            {/* Section Header */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-black">
                    Recent Bookings
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                    Latest appointment activity
                </p>
            </div>

            {/* List Container */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
                <ul className="divide-y divide-gray-200">
                    {recentBookings.map((booking, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-between px-4 py-3"
                        >
                            {/* Date & Time */}
                            <div>
                                <p className="text-sm text-black">
                                    {booking.date}
                                </p>
                                <p className="text-xs text-gray-600">
                                    {booking.time}
                                </p>
                            </div>

                            {/* User */}
                            <div className="text-sm text-gray-700">
                                {booking.user}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default RecentBookings;
