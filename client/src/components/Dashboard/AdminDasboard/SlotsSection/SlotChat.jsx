import React, { useState } from "react";

const SlotChat = ({ slot }) => {
    const [message, setMessage] = useState("");

    if (!slot || slot.status !== "Booked") {
        return null; // IMPORTANT: Chat hidden if not booked
    }

    const messages = [
        {
            sender: "User",
            text: "Will the appointment start on time?",
            time: "10:05 AM",
        },
        {
            sender: "Admin",
            text: "Yes, please be available 5 minutes early.",
            time: "10:07 AM",
        },
    ];

    return (
        <section className="bg-white border border-gray-200 rounded-lg p-6 mt-6">
            {/* Header */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-black">
                    Slot Communication
                </h3>
                <p className="text-sm text-gray-600">
                    {slot.date} • {slot.time}
                </p>
            </div>

            {/* Messages */}
            <div className="border border-gray-200 rounded-md p-4 space-y-3 mb-4 max-h-64 overflow-y-auto">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`max-w-[80%] text-sm ${msg.sender === "Admin"
                                ? "ml-auto text-right"
                                : "mr-auto"
                            }`}
                    >
                        <div
                            className={`px-3 py-2 rounded-md ${msg.sender === "Admin"
                                    ? "bg-indigo-50 text-black"
                                    : "bg-gray-100 text-black"
                                }`}
                        >
                            {msg.text}
                        </div>
                        <span className="text-xs text-gray-500 mt-1 block">
                            {msg.time}
                        </span>
                    </div>
                ))}
            </div>

            {/* Input */}
            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm
                     focus:outline-none focus:border-[#4f39f6]"
                />
                <button
                    type="button"
                    className="bg-[#4f39f6] text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                    Send
                </button>
            </div>
        </section>
    );
};

export default SlotChat;
