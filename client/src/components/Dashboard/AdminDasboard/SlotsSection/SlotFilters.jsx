import React from "react";

const filters = ["All", "Available", "Booked", "Past"];

const SlotFilters = ({ activeFilter, onFilterChange }) => {
    return (
        <section className="bg-white mt-6">
            <div className="flex items-center gap-2">
                {filters.map((filter) => {
                    const isActive = activeFilter === filter;

                    return (
                        <button
                            key={filter}
                            type="button"
                            onClick={() => onFilterChange(filter)}
                            className={`px-4 py-2 text-sm font-medium rounded-md border transition
                ${isActive
                                    ? "border-[#4f39f6] text-[#4f39f6]"
                                    : "border-gray-200 text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            {filter}
                        </button>
                    );
                })}
            </div>
        </section>
    );
};

export default SlotFilters;
