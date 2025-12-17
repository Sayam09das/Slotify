import React from "react";

const scheduleData = [
    {
        time: "09:00 – 09:30",
        status: "Available",
        user: "-",
    },
    {
        time: "09:30 – 10:00",
        status: "Booked",
        user: "Rahul Sharma",
    },
    {
        time: "10:00 – 10:30",
        status: "Booked",
        user: "Ananya Singh",
    },
    {
        time: "10:30 – 11:00",
        status: "Past",
        user: "-",
    },
];

const statusStyles = {
    Available: "text-green-600 bg-green-50",
    Booked: "text-red-600 bg-red-50",
    Past: "text-gray-600 bg-gray-100",
};

const DailySchedule = () => {
    return (
        <section className="bg-white mt-8">
            {/* Section Header */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-black">
                    Daily Schedule
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                    View and manage today’s appointment slots
                </p>
            </div>

            {/* Table */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left px-4 py-3 font-medium text-black">
                                Time Slot
                            </th>
                            <th className="text-left px-4 py-3 font-medium text-black">
                                Status
                            </th>
                            <th className="text-left px-4 py-3 font-medium text-black">
                                User Name
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {scheduleData.map((slot, index) => (
                            <tr
                                key={index}
                                className="border-t border-gray-200"
                            >
                                <td className="px-4 py-3 text-black">
                                    {slot.time}
                                </td>

                                <td className="px-4 py-3">
                                    <span
                                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium 
                    ${statusStyles[slot.status]}`}
                                    >
                                        {slot.status}
                                    </span>
                                </td>

                                <td className="px-4 py-3 text-gray-700">
                                    {slot.user}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default DailySchedule;
