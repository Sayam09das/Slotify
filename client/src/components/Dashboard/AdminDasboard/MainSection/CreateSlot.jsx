import React, { useState } from "react";

const CreateSlot = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const today = new Date().toISOString().split("T")[0];

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(null);
        setError(null);

        if (!date || !time) {
            setError("Please select both date and time.");
            return;
        }

        const selectedDateTime = new Date(`${date}T${time}`);
        const now = new Date();

        if (selectedDateTime <= now) {
            setError("Cannot create slots in the past.");
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setMessage("Slot created successfully.");
            setDate("");
            setTime("");
        }, 1200);
    };

    return (
        <section className="bg-white mt-8">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-black">
                    Create Slot
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                    Add a new appointment slot for users
                </p>
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="border border-gray-200 rounded-lg p-6 max-w-md"
            >
                {/* Date */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-black mb-1">
                        Date
                    </label>
                    <input
                        type="date"
                        min={today}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 
                       text-sm focus:outline-none focus:border-[#4f39f6]"
                    />
                </div>

                {/* Time */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-black mb-1">
                        Time
                    </label>
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 
                       text-sm focus:outline-none focus:border-[#4f39f6]"
                    />
                </div>

                {/* Messages */}
                {error && (
                    <p className="text-sm text-red-600 mb-3">
                        {error}
                    </p>
                )}

                {message && (
                    <p className="text-sm text-green-600 mb-3">
                        {message}
                    </p>
                )}

                {/* Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#4f39f6] text-white text-sm font-medium 
                     py-2.5 rounded-md transition
                     disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Creating..." : "Create Slot"}
                </button>
            </form>
        </section>
    );
};

export default CreateSlot;
