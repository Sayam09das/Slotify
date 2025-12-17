import React from "react";

const SlotDetailsPanel = ({ slot }) => {
    if (!slot) {
        return (
            <section className="bg-white border border-gray-200 rounded-lg p-6 mt-6">
                <p className="text-sm text-gray-600">
                    Select a slot to view details.
                </p>
            </section>
        );
    }

    return (
        <section className="bg-white border border-gray-200 rounded-lg p-6 mt-6">
            {/* Header */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-black">
                    Slot Details
                </h3>
            </div>

            {/* Details */}
            <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                    <span className="text-gray-600">Date</span>
                    <span className="text-black font-medium">{slot.date}</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-600">Time</span>
                    <span className="text-black font-medium">{slot.time}</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-600">Status</span>
                    <span
                        className={`font-medium ${slot.status === "Booked"
                                ? "text-red-600"
                                : slot.status === "Available"
                                    ? "text-green-600"
                                    : "text-gray-600"
                            }`}
                    >
                        {slot.status}
                    </span>
                </div>

                {slot.status === "Booked" && (
                    <div className="flex justify-between">
                        <span className="text-gray-600">Booked By</span>
                        <span className="text-black font-medium">
                            {slot.user}
                        </span>
                    </div>
                )}
            </div>
        </section>
    );
};

export default SlotDetailsPanel;
