import React from "react";

const slotData = [
    {
        date: "2025-01-15",
        time: "09:00 – 09:30",
        status: "Available",
        user: "-",
    },
    {
        date: "2025-01-15",
        time: "09:30 – 10:00",
        status: "Booked",
        user: "Rahul Sharma",
    },
    {
        date: "2025-01-15",
        time: "10:00 – 10:30",
        status: "Past",
        user: "-",
    },
];

const statusStyles = {
    Available: "text-green-700 bg-green-50",
    Booked: "text-red-700 bg-red-50",
    Past: "text-gray-600 bg-gray-100",
};

const SlotTable = () => {
    return (
        <section className="bg-white mt-6">
            {/* Header */}
            <div className="mb-4">
                <h2 className="text-xl font-semibold text-black">
                    Slots
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                    List of all created appointment slots
                </p>
            </div>

            {/* Table */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left font-medium text-black">
                                Date
                            </th>
                            <th className="px-4 py-3 text-left font-medium text-black">
                                Time
                            </th>
                            <th className="px-4 py-3 text-left font-medium text-black">
                                Status
                            </th>
                            <th className="px-4 py-3 text-left font-medium text-black">
                                User Name
                            </th>
                            <th className="px-4 py-3 text-left font-medium text-black">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {slotData.map((slot, index) => (
                            <tr
                                key={index}
                                className="border-t border-gray-200"
                            >
                                {/* Date */}
                                <td className="px-4 py-3 text-black">
                                    {slot.date}
                                </td>

                                {/* Time */}
                                <td className="px-4 py-3 text-black">
                                    {slot.time}
                                </td>

                                {/* Status */}
                                <td className="px-4 py-3">
                                    <span
                                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium
                      ${statusStyles[slot.status]}`}
                                    >
                                        {slot.status}
                                    </span>
                                </td>

                                {/* User */}
                                <td className="px-4 py-3 text-gray-700">
                                    {slot.user}
                                </td>

                                {/* Actions */}
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-4 text-sm">
                                        <button
                                            type="button"
                                            className="text-[#4f39f6] hover:underline"
                                        >
                                            View
                                        </button>
                                        <button
                                            type="button"
                                            className="text-red-600 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default SlotTable;
